var dC=Object.defineProperty;var fC=(t,e,n)=>e in t?dC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ph=(t,e,n)=>fC(t,typeof e!="symbol"?e+"":e,n);function QE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var YE={exports:{}},Jd={},XE={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=Symbol.for("react.element"),hC=Symbol.for("react.portal"),pC=Symbol.for("react.fragment"),mC=Symbol.for("react.strict_mode"),gC=Symbol.for("react.profiler"),yC=Symbol.for("react.provider"),vC=Symbol.for("react.context"),_C=Symbol.for("react.forward_ref"),wC=Symbol.for("react.suspense"),EC=Symbol.for("react.memo"),TC=Symbol.for("react.lazy"),i_=Symbol.iterator;function IC(t){return t===null||typeof t!="object"?null:(t=i_&&t[i_]||t["@@iterator"],typeof t=="function"?t:null)}var JE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ZE=Object.assign,e1={};function la(t,e,n){this.props=t,this.context=e,this.refs=e1,this.updater=n||JE}la.prototype.isReactComponent={};la.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};la.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t1(){}t1.prototype=la.prototype;function og(t,e,n){this.props=t,this.context=e,this.refs=e1,this.updater=n||JE}var ag=og.prototype=new t1;ag.constructor=og;ZE(ag,la.prototype);ag.isPureReactComponent=!0;var s_=Array.isArray,n1=Object.prototype.hasOwnProperty,lg={current:null},r1={key:!0,ref:!0,__self:!0,__source:!0};function i1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n1.call(e,r)&&!r1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pu,type:t,key:s,ref:o,props:i,_owner:lg.current}}function SC(t,e){return{$$typeof:pu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ug(t){return typeof t=="object"&&t!==null&&t.$$typeof===pu}function AC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var o_=/\/+/g;function mh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AC(""+t.key):e.toString(36)}function Pc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pu:case hC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mh(o,0):r,s_(i)?(n="",t!=null&&(n=t.replace(o_,"$&/")+"/"),Pc(i,e,n,"",function(c){return c})):i!=null&&(ug(i)&&(i=SC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(o_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",s_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+mh(s,a);o+=Pc(s,e,n,u,i)}else if(u=IC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+mh(s,a++),o+=Pc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ju(t,e,n){if(t==null)return t;var r=[],i=0;return Pc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Cc={transition:null},PC={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:lg};function s1(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Ju,forEach:function(t,e,n){Ju(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ju(t,function(){e++}),e},toArray:function(t){return Ju(t,function(e){return e})||[]},only:function(t){if(!ug(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=la;me.Fragment=pC;me.Profiler=gC;me.PureComponent=og;me.StrictMode=mC;me.Suspense=wC;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PC;me.act=s1;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ZE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)n1.call(e,u)&&!r1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:pu,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:vC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yC,_context:t},t.Consumer=t};me.createElement=i1;me.createFactory=function(t){var e=i1.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:_C,render:t}};me.isValidElement=ug;me.lazy=function(t){return{$$typeof:TC,_payload:{_status:-1,_result:t},_init:RC}};me.memo=function(t,e){return{$$typeof:EC,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Cc.transition;Cc.transition={};try{t()}finally{Cc.transition=e}};me.unstable_act=s1;me.useCallback=function(t,e){return Xt.current.useCallback(t,e)};me.useContext=function(t){return Xt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Xt.current.useEffect(t,e)};me.useId=function(){return Xt.current.useId()};me.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Xt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};me.useRef=function(t){return Xt.current.useRef(t)};me.useState=function(t){return Xt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Xt.current.useTransition()};me.version="18.3.1";XE.exports=me;var z=XE.exports;const Zd=sg(z),mp=QE({__proto__:null,default:Zd},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=z,kC=Symbol.for("react.element"),bC=Symbol.for("react.fragment"),xC=Object.prototype.hasOwnProperty,NC=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DC={key:!0,ref:!0,__self:!0,__source:!0};function o1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xC.call(e,r)&&!DC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kC,type:t,key:s,ref:o,props:i,_owner:NC.current}}Jd.Fragment=bC;Jd.jsx=o1;Jd.jsxs=o1;YE.exports=Jd;var V=YE.exports,gp={},a1={exports:{}},An={},l1={exports:{}},u1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,re){var oe=G.length;G.push(re);e:for(;0<oe;){var Te=oe-1>>>1,ve=G[Te];if(0<i(ve,re))G[Te]=re,G[oe]=ve,oe=Te;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var re=G[0],oe=G.pop();if(oe!==re){G[0]=oe;e:for(var Te=0,ve=G.length,Ne=ve>>>1;Te<Ne;){var ct=2*(Te+1)-1,Et=G[ct],Tt=ct+1,zn=G[Tt];if(0>i(Et,oe))Tt<ve&&0>i(zn,Et)?(G[Te]=zn,G[Tt]=oe,Te=Tt):(G[Te]=Et,G[ct]=oe,Te=ct);else if(Tt<ve&&0>i(zn,oe))G[Te]=zn,G[Tt]=oe,Te=Tt;else break e}}return re}function i(G,re){var oe=G.sortIndex-re.sortIndex;return oe!==0?oe:G.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,h=null,p=3,_=!1,S=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(G){for(var re=n(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=G)r(c),re.sortIndex=re.expirationTime,e(u,re);else break;re=n(c)}}function N(G){if(P=!1,I(G),!S)if(n(u)!==null)S=!0,rr(U);else{var re=n(c);re!==null&&Pe(N,re.startTime-G)}}function U(G,re){S=!1,P&&(P=!1,T(g),g=-1),_=!0;var oe=p;try{for(I(re),h=n(u);h!==null&&(!(h.expirationTime>re)||G&&!b());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,p=h.priorityLevel;var ve=Te(h.expirationTime<=re);re=t.unstable_now(),typeof ve=="function"?h.callback=ve:h===n(u)&&r(u),I(re)}else r(u);h=n(u)}if(h!==null)var Ne=!0;else{var ct=n(c);ct!==null&&Pe(N,ct.startTime-re),Ne=!1}return Ne}finally{h=null,p=oe,_=!1}}var C=!1,E=null,g=-1,w=5,A=-1;function b(){return!(t.unstable_now()-A<w)}function O(){if(E!==null){var G=t.unstable_now();A=G;var re=!0;try{re=E(!0,G)}finally{re?R():(C=!1,E=null)}}else C=!1}var R;if(typeof y=="function")R=function(){y(O)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Zt=Re.port2;Re.port1.onmessage=O,R=function(){Zt.postMessage(null)}}else R=function(){k(O,0)};function rr(G){E=G,C||(C=!0,R())}function Pe(G,re){g=k(function(){G(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,rr(U))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(G){switch(p){case 1:case 2:case 3:var re=3;break;default:re=p}var oe=p;p=re;try{return G()}finally{p=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=p;p=G;try{return re()}finally{p=oe}},t.unstable_scheduleCallback=function(G,re,oe){var Te=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Te+oe:Te):oe=Te,G){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=oe+ve,G={id:d++,callback:re,priorityLevel:G,startTime:oe,expirationTime:ve,sortIndex:-1},oe>Te?(G.sortIndex=oe,e(c,G),n(u)===null&&G===n(c)&&(P?(T(g),g=-1):P=!0,Pe(N,oe-Te))):(G.sortIndex=ve,e(u,G),S||_||(S=!0,rr(U))),G},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(G){var re=p;return function(){var oe=p;p=re;try{return G.apply(this,arguments)}finally{p=oe}}}})(u1);l1.exports=u1;var OC=l1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LC=z,Tn=OC;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c1=new Set,Ol={};function Ks(t,e){$o(t,e),$o(t+"Capture",e)}function $o(t,e){for(Ol[t]=e,t=0;t<e.length;t++)c1.add(e[t])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yp=Object.prototype.hasOwnProperty,MC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a_={},l_={};function VC(t){return yp.call(l_,t)?!0:yp.call(a_,t)?!1:MC.test(t)?l_[t]=!0:(a_[t]=!0,!1)}function FC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UC(t,e,n,r){if(e===null||typeof e>"u"||FC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cg=/[\-:]([a-z])/g;function dg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cg,dg);xt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cg,dg);xt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cg,dg);xt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fg(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UC(e,n,i,r)&&(n=null),r||i===null?VC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ei=LC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zu=Symbol.for("react.element"),go=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),d1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),_p=Symbol.for("react.suspense"),wp=Symbol.for("react.suspense_list"),mg=Symbol.for("react.memo"),hi=Symbol.for("react.lazy"),h1=Symbol.for("react.offscreen"),u_=Symbol.iterator;function za(t){return t===null||typeof t!="object"?null:(t=u_&&t[u_]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,gh;function tl(t){if(gh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gh=e&&e[1]||""}return`
`+gh+t}var yh=!1;function vh(t,e){if(!t||yh)return"";yh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{yh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function jC(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=vh(t.type,!1),t;case 11:return t=vh(t.type.render,!1),t;case 1:return t=vh(t.type,!0),t;default:return""}}function Ep(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yo:return"Fragment";case go:return"Portal";case vp:return"Profiler";case hg:return"StrictMode";case _p:return"Suspense";case wp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f1:return(t.displayName||"Context")+".Consumer";case d1:return(t._context.displayName||"Context")+".Provider";case pg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mg:return e=t.displayName||null,e!==null?e:Ep(t.type)||"Memo";case hi:e=t._payload,t=t._init;try{return Ep(t(e))}catch{}}return null}function zC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ep(e);case 8:return e===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BC(t){var e=p1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=BC(t))}function m1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tp(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function c_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g1(t,e){e=e.checked,e!=null&&fg(t,"checked",e,!1)}function Ip(t,e){g1(t,e);var n=Mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sp(t,e.type,Mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function d_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sp(t,e,n){(e!=="number"||Xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function No(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ap(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function f_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(nl(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mi(n)}}function y1(t,e){var n=Mi(e.value),r=Mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,_1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ll(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$C=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){$C.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function w1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function E1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HC=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pp(t,e){if(e){if(HC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Cp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kp=null;function gg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bp=null,Do=null,Oo=null;function p_(t){if(t=yu(t)){if(typeof bp!="function")throw Error(H(280));var e=t.stateNode;e&&(e=sf(e),bp(t.stateNode,t.type,e))}}function T1(t){Do?Oo?Oo.push(t):Oo=[t]:Do=t}function I1(){if(Do){var t=Do,e=Oo;if(Oo=Do=null,p_(t),e)for(t=0;t<e.length;t++)p_(e[t])}}function S1(t,e){return t(e)}function A1(){}var _h=!1;function R1(t,e,n){if(_h)return t(e,n);_h=!0;try{return S1(t,e,n)}finally{_h=!1,(Do!==null||Oo!==null)&&(A1(),I1())}}function Ml(t,e){var n=t.stateNode;if(n===null)return null;var r=sf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var xp=!1;if(Hr)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){xp=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{xp=!1}function WC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var hl=!1,Jc=null,Zc=!1,Np=null,qC={onError:function(t){hl=!0,Jc=t}};function KC(t,e,n,r,i,s,o,a,u){hl=!1,Jc=null,WC.apply(qC,arguments)}function GC(t,e,n,r,i,s,o,a,u){if(KC.apply(this,arguments),hl){if(hl){var c=Jc;hl=!1,Jc=null}else throw Error(H(198));Zc||(Zc=!0,Np=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m_(t){if(Gs(t)!==t)throw Error(H(188))}function QC(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m_(i),t;if(s===r)return m_(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function C1(t){return t=QC(t),t!==null?k1(t):null}function k1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k1(t);if(e!==null)return e;t=t.sibling}return null}var b1=Tn.unstable_scheduleCallback,g_=Tn.unstable_cancelCallback,YC=Tn.unstable_shouldYield,XC=Tn.unstable_requestPaint,it=Tn.unstable_now,JC=Tn.unstable_getCurrentPriorityLevel,yg=Tn.unstable_ImmediatePriority,x1=Tn.unstable_UserBlockingPriority,ed=Tn.unstable_NormalPriority,ZC=Tn.unstable_LowPriority,N1=Tn.unstable_IdlePriority,ef=null,mr=null;function ek(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(ef,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:rk,tk=Math.log,nk=Math.LN2;function rk(t){return t>>>=0,t===0?32:31-(tk(t)/nk|0)|0}var nc=64,rc=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function td(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=rl(a):(s&=o,s!==0&&(r=rl(s)))}else o=n&~i,o!==0?r=rl(o):s!==0&&(r=rl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xn(e),i=1<<n,r|=t[n],e&=~i;return r}function ik(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=ik(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Dp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D1(){var t=nc;return nc<<=1,!(nc&4194240)&&(nc=64),t}function wh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function ok(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function O1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L1,_g,M1,V1,F1,Op=!1,ic=[],Ai=null,Ri=null,Pi=null,Vl=new Map,Fl=new Map,mi=[],ak="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y_(t,e){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":Vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(e.pointerId)}}function $a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yu(e),e!==null&&_g(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lk(t,e,n,r,i){switch(e){case"focusin":return Ai=$a(Ai,t,e,n,r,i),!0;case"dragenter":return Ri=$a(Ri,t,e,n,r,i),!0;case"mouseover":return Pi=$a(Pi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vl.set(s,$a(Vl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fl.set(s,$a(Fl.get(s)||null,t,e,n,r,i)),!0}return!1}function U1(t){var e=hs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=P1(n),e!==null){t.blockedOn=e,F1(t.priority,function(){M1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kp=r,n.target.dispatchEvent(r),kp=null}else return e=yu(n),e!==null&&_g(e),t.blockedOn=n,!1;e.shift()}return!0}function v_(t,e,n){kc(t)&&n.delete(e)}function uk(){Op=!1,Ai!==null&&kc(Ai)&&(Ai=null),Ri!==null&&kc(Ri)&&(Ri=null),Pi!==null&&kc(Pi)&&(Pi=null),Vl.forEach(v_),Fl.forEach(v_)}function Ha(t,e){t.blockedOn===e&&(t.blockedOn=null,Op||(Op=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,uk)))}function Ul(t){function e(i){return Ha(i,t)}if(0<ic.length){Ha(ic[0],t);for(var n=1;n<ic.length;n++){var r=ic[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ai!==null&&Ha(Ai,t),Ri!==null&&Ha(Ri,t),Pi!==null&&Ha(Pi,t),Vl.forEach(e),Fl.forEach(e),n=0;n<mi.length;n++)r=mi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mi.length&&(n=mi[0],n.blockedOn===null);)U1(n),n.blockedOn===null&&mi.shift()}var Lo=ei.ReactCurrentBatchConfig,nd=!0;function ck(t,e,n,r){var i=xe,s=Lo.transition;Lo.transition=null;try{xe=1,wg(t,e,n,r)}finally{xe=i,Lo.transition=s}}function dk(t,e,n,r){var i=xe,s=Lo.transition;Lo.transition=null;try{xe=4,wg(t,e,n,r)}finally{xe=i,Lo.transition=s}}function wg(t,e,n,r){if(nd){var i=Lp(t,e,n,r);if(i===null)bh(t,e,r,rd,n),y_(t,r);else if(lk(i,t,e,n,r))r.stopPropagation();else if(y_(t,r),e&4&&-1<ak.indexOf(t)){for(;i!==null;){var s=yu(i);if(s!==null&&L1(s),s=Lp(t,e,n,r),s===null&&bh(t,e,r,rd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bh(t,e,r,null,n)}}var rd=null;function Lp(t,e,n,r){if(rd=null,t=gg(r),t=hs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rd=t,null}function j1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JC()){case yg:return 1;case x1:return 4;case ed:case ZC:return 16;case N1:return 536870912;default:return 16}default:return 16}}var Ei=null,Eg=null,bc=null;function z1(){if(bc)return bc;var t,e=Eg,n=e.length,r,i="value"in Ei?Ei.value:Ei.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bc=i.slice(t,1<r?1-r:void 0)}function xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function __(){return!1}function Rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:__,this.isPropagationStopped=__,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tg=Rn(ua),gu=Xe({},ua,{view:0,detail:0}),fk=Rn(gu),Eh,Th,Wa,tf=Xe({},gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ig,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wa&&(Wa&&t.type==="mousemove"?(Eh=t.screenX-Wa.screenX,Th=t.screenY-Wa.screenY):Th=Eh=0,Wa=t),Eh)},movementY:function(t){return"movementY"in t?t.movementY:Th}}),w_=Rn(tf),hk=Xe({},tf,{dataTransfer:0}),pk=Rn(hk),mk=Xe({},gu,{relatedTarget:0}),Ih=Rn(mk),gk=Xe({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),yk=Rn(gk),vk=Xe({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_k=Rn(vk),wk=Xe({},ua,{data:0}),E_=Rn(wk),Ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ik={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ik[t])?!!e[t]:!1}function Ig(){return Sk}var Ak=Xe({},gu,{key:function(t){if(t.key){var e=Ek[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ig,charCode:function(t){return t.type==="keypress"?xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rk=Rn(Ak),Pk=Xe({},tf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T_=Rn(Pk),Ck=Xe({},gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ig}),kk=Rn(Ck),bk=Xe({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),xk=Rn(bk),Nk=Xe({},tf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=Rn(Nk),Ok=[9,13,27,32],Sg=Hr&&"CompositionEvent"in window,pl=null;Hr&&"documentMode"in document&&(pl=document.documentMode);var Lk=Hr&&"TextEvent"in window&&!pl,B1=Hr&&(!Sg||pl&&8<pl&&11>=pl),I_=" ",S_=!1;function $1(t,e){switch(t){case"keyup":return Ok.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vo=!1;function Mk(t,e){switch(t){case"compositionend":return H1(e);case"keypress":return e.which!==32?null:(S_=!0,I_);case"textInput":return t=e.data,t===I_&&S_?null:t;default:return null}}function Vk(t,e){if(vo)return t==="compositionend"||!Sg&&$1(t,e)?(t=z1(),bc=Eg=Ei=null,vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B1&&e.locale!=="ko"?null:e.data;default:return null}}var Fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fk[t.type]:e==="textarea"}function W1(t,e,n,r){T1(r),e=id(e,"onChange"),0<e.length&&(n=new Tg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ml=null,jl=null;function Uk(t){nT(t,0)}function nf(t){var e=Eo(t);if(m1(e))return t}function jk(t,e){if(t==="change")return e}var q1=!1;if(Hr){var Sh;if(Hr){var Ah="oninput"in document;if(!Ah){var R_=document.createElement("div");R_.setAttribute("oninput","return;"),Ah=typeof R_.oninput=="function"}Sh=Ah}else Sh=!1;q1=Sh&&(!document.documentMode||9<document.documentMode)}function P_(){ml&&(ml.detachEvent("onpropertychange",K1),jl=ml=null)}function K1(t){if(t.propertyName==="value"&&nf(jl)){var e=[];W1(e,jl,t,gg(t)),R1(Uk,e)}}function zk(t,e,n){t==="focusin"?(P_(),ml=e,jl=n,ml.attachEvent("onpropertychange",K1)):t==="focusout"&&P_()}function Bk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nf(jl)}function $k(t,e){if(t==="click")return nf(e)}function Hk(t,e){if(t==="input"||t==="change")return nf(e)}function Wk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var er=typeof Object.is=="function"?Object.is:Wk;function zl(t,e){if(er(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yp.call(e,i)||!er(t[i],e[i]))return!1}return!0}function C_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k_(t,e){var n=C_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=C_(n)}}function G1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q1(){for(var t=window,e=Xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xc(t.document)}return e}function Ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qk(t){var e=Q1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G1(n.ownerDocument.documentElement,n)){if(r!==null&&Ag(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=k_(n,s);var o=k_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kk=Hr&&"documentMode"in document&&11>=document.documentMode,_o=null,Mp=null,gl=null,Vp=!1;function b_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vp||_o==null||_o!==Xc(r)||(r=_o,"selectionStart"in r&&Ag(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gl&&zl(gl,r)||(gl=r,r=id(Mp,"onSelect"),0<r.length&&(e=new Tg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_o)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wo={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},Rh={},Y1={};Hr&&(Y1=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function rf(t){if(Rh[t])return Rh[t];if(!wo[t])return t;var e=wo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y1)return Rh[t]=e[n];return t}var X1=rf("animationend"),J1=rf("animationiteration"),Z1=rf("animationstart"),eT=rf("transitionend"),tT=new Map,x_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){tT.set(t,e),Ks(e,[t])}for(var Ph=0;Ph<x_.length;Ph++){var Ch=x_[Ph],Gk=Ch.toLowerCase(),Qk=Ch[0].toUpperCase()+Ch.slice(1);Gi(Gk,"on"+Qk)}Gi(X1,"onAnimationEnd");Gi(J1,"onAnimationIteration");Gi(Z1,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(eT,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);Ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yk=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function N_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GC(r,e,void 0,t),t.currentTarget=null}function nT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;N_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;N_(i,a,c),s=u}}}if(Zc)throw t=Np,Zc=!1,Np=null,t}function Ue(t,e){var n=e[Bp];n===void 0&&(n=e[Bp]=new Set);var r=t+"__bubble";n.has(r)||(rT(e,t,2,!1),n.add(r))}function kh(t,e,n){var r=0;e&&(r|=4),rT(n,t,r,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Bl(t){if(!t[ac]){t[ac]=!0,c1.forEach(function(n){n!=="selectionchange"&&(Yk.has(n)||kh(n,!1,t),kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,kh("selectionchange",!1,e))}}function rT(t,e,n,r){switch(j1(e)){case 1:var i=ck;break;case 4:i=dk;break;default:i=wg}n=i.bind(null,e,n,t),i=void 0,!xp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}R1(function(){var c=s,d=gg(n),h=[];e:{var p=tT.get(t);if(p!==void 0){var _=Tg,S=t;switch(t){case"keypress":if(xc(n)===0)break e;case"keydown":case"keyup":_=Rk;break;case"focusin":S="focus",_=Ih;break;case"focusout":S="blur",_=Ih;break;case"beforeblur":case"afterblur":_=Ih;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=w_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=pk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=kk;break;case X1:case J1:case Z1:_=yk;break;case eT:_=xk;break;case"scroll":_=fk;break;case"wheel":_=Dk;break;case"copy":case"cut":case"paste":_=_k;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=T_}var P=(e&4)!==0,k=!P&&t==="scroll",T=P?p!==null?p+"Capture":null:p;P=[];for(var y=c,I;y!==null;){I=y;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,T!==null&&(N=Ml(y,T),N!=null&&P.push($l(y,N,I)))),k)break;y=y.return}0<P.length&&(p=new _(p,S,null,n,d),h.push({event:p,listeners:P}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==kp&&(S=n.relatedTarget||n.fromElement)&&(hs(S)||S[Wr]))break e;if((_||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?hs(S):null,S!==null&&(k=Gs(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(P=w_,N="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=T_,N="onPointerLeave",T="onPointerEnter",y="pointer"),k=_==null?p:Eo(_),I=S==null?p:Eo(S),p=new P(N,y+"leave",_,n,d),p.target=k,p.relatedTarget=I,N=null,hs(d)===c&&(P=new P(T,y+"enter",S,n,d),P.target=I,P.relatedTarget=k,N=P),k=N,_&&S)t:{for(P=_,T=S,y=0,I=P;I;I=co(I))y++;for(I=0,N=T;N;N=co(N))I++;for(;0<y-I;)P=co(P),y--;for(;0<I-y;)T=co(T),I--;for(;y--;){if(P===T||T!==null&&P===T.alternate)break t;P=co(P),T=co(T)}P=null}else P=null;_!==null&&D_(h,p,_,P,!1),S!==null&&k!==null&&D_(h,k,S,P,!0)}}e:{if(p=c?Eo(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var U=jk;else if(A_(p))if(q1)U=Hk;else{U=Bk;var C=zk}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=$k);if(U&&(U=U(t,c))){W1(h,U,n,d);break e}C&&C(t,p,c),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Sp(p,"number",p.value)}switch(C=c?Eo(c):window,t){case"focusin":(A_(C)||C.contentEditable==="true")&&(_o=C,Mp=c,gl=null);break;case"focusout":gl=Mp=_o=null;break;case"mousedown":Vp=!0;break;case"contextmenu":case"mouseup":case"dragend":Vp=!1,b_(h,n,d);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":b_(h,n,d)}var E;if(Sg)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else vo?$1(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(B1&&n.locale!=="ko"&&(vo||g!=="onCompositionStart"?g==="onCompositionEnd"&&vo&&(E=z1()):(Ei=d,Eg="value"in Ei?Ei.value:Ei.textContent,vo=!0)),C=id(c,g),0<C.length&&(g=new E_(g,t,null,n,d),h.push({event:g,listeners:C}),E?g.data=E:(E=H1(n),E!==null&&(g.data=E)))),(E=Lk?Mk(t,n):Vk(t,n))&&(c=id(c,"onBeforeInput"),0<c.length&&(d=new E_("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=E))}nT(h,e)})}function $l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function id(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ml(t,n),s!=null&&r.unshift($l(t,s,i)),s=Ml(t,e),s!=null&&r.push($l(t,s,i))),t=t.return}return r}function co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function D_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ml(n,s),u!=null&&o.unshift($l(n,u,a))):i||(u=Ml(n,s),u!=null&&o.push($l(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xk=/\r\n?/g,Jk=/\u0000|\uFFFD/g;function O_(t){return(typeof t=="string"?t:""+t).replace(Xk,`
`).replace(Jk,"")}function lc(t,e,n){if(e=O_(e),O_(t)!==e&&n)throw Error(H(425))}function sd(){}var Fp=null,Up=null;function jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zp=typeof setTimeout=="function"?setTimeout:void 0,Zk=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(t){return L_.resolve(null).then(t).catch(tb)}:zp;function tb(t){setTimeout(function(){throw t})}function xh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ul(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ul(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function M_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ca=Math.random().toString(36).slice(2),dr="__reactFiber$"+ca,Hl="__reactProps$"+ca,Wr="__reactContainer$"+ca,Bp="__reactEvents$"+ca,nb="__reactListeners$"+ca,rb="__reactHandles$"+ca;function hs(t){var e=t[dr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wr]||n[dr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=M_(t);t!==null;){if(n=t[dr])return n;t=M_(t)}return e}t=n,n=t.parentNode}return null}function yu(t){return t=t[dr]||t[Wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function sf(t){return t[Hl]||null}var $p=[],To=-1;function Qi(t){return{current:t}}function je(t){0>To||(t.current=$p[To],$p[To]=null,To--)}function Me(t,e){To++,$p[To]=t.current,t.current=e}var Vi={},$t=Qi(Vi),nn=Qi(!1),Cs=Vi;function Ho(t,e){var n=t.type.contextTypes;if(!n)return Vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function od(){je(nn),je($t)}function V_(t,e,n){if($t.current!==Vi)throw Error(H(168));Me($t,e),Me(nn,n)}function iT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,zC(t)||"Unknown",i));return Xe({},n,r)}function ad(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,Cs=$t.current,Me($t,t),Me(nn,nn.current),!0}function F_(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=iT(t,e,Cs),r.__reactInternalMemoizedMergedChildContext=t,je(nn),je($t),Me($t,t)):je(nn),Me(nn,n)}var Dr=null,of=!1,Nh=!1;function sT(t){Dr===null?Dr=[t]:Dr.push(t)}function ib(t){of=!0,sT(t)}function Yi(){if(!Nh&&Dr!==null){Nh=!0;var t=0,e=xe;try{var n=Dr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dr=null,of=!1}catch(i){throw Dr!==null&&(Dr=Dr.slice(t+1)),b1(yg,Yi),i}finally{xe=e,Nh=!1}}return null}var Io=[],So=0,ld=null,ud=0,bn=[],xn=0,ks=null,Lr=1,Mr="";function as(t,e){Io[So++]=ud,Io[So++]=ld,ld=t,ud=e}function oT(t,e,n){bn[xn++]=Lr,bn[xn++]=Mr,bn[xn++]=ks,ks=t;var r=Lr;t=Mr;var i=32-Xn(r)-1;r&=~(1<<i),n+=1;var s=32-Xn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Lr=1<<32-Xn(e)+i|n<<i|r,Mr=s+t}else Lr=1<<s|n<<i|r,Mr=t}function Rg(t){t.return!==null&&(as(t,1),oT(t,1,0))}function Pg(t){for(;t===ld;)ld=Io[--So],Io[So]=null,ud=Io[--So],Io[So]=null;for(;t===ks;)ks=bn[--xn],bn[xn]=null,Mr=bn[--xn],bn[xn]=null,Lr=bn[--xn],bn[xn]=null}var yn=null,hn=null,He=!1,Qn=null;function aT(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function U_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,hn=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ks!==null?{id:Lr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,hn=null,!0):!1;default:return!1}}function Hp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wp(t){if(He){var e=hn;if(e){var n=e;if(!U_(t,e)){if(Hp(t))throw Error(H(418));e=Ci(n.nextSibling);var r=yn;e&&U_(t,e)?aT(r,n):(t.flags=t.flags&-4097|2,He=!1,yn=t)}}else{if(Hp(t))throw Error(H(418));t.flags=t.flags&-4097|2,He=!1,yn=t}}}function j_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function uc(t){if(t!==yn)return!1;if(!He)return j_(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jp(t.type,t.memoizedProps)),e&&(e=hn)){if(Hp(t))throw lT(),Error(H(418));for(;e;)aT(t,e),e=Ci(e.nextSibling)}if(j_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=yn?Ci(t.stateNode.nextSibling):null;return!0}function lT(){for(var t=hn;t;)t=Ci(t.nextSibling)}function Wo(){hn=yn=null,He=!1}function Cg(t){Qn===null?Qn=[t]:Qn.push(t)}var sb=ei.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function cc(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function z_(t){var e=t._init;return e(t._payload)}function uT(t){function e(T,y){if(t){var I=T.deletions;I===null?(T.deletions=[y],T.flags|=16):I.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=Ni(T,y),T.index=0,T.sibling=null,T}function s(T,y,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<y?(T.flags|=2,y):I):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,y,I,N){return y===null||y.tag!==6?(y=Uh(I,T.mode,N),y.return=T,y):(y=i(y,I),y.return=T,y)}function u(T,y,I,N){var U=I.type;return U===yo?d(T,y,I.props.children,N,I.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===hi&&z_(U)===y.type)?(N=i(y,I.props),N.ref=qa(T,y,I),N.return=T,N):(N=Fc(I.type,I.key,I.props,null,T.mode,N),N.ref=qa(T,y,I),N.return=T,N)}function c(T,y,I,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=jh(I,T.mode,N),y.return=T,y):(y=i(y,I.children||[]),y.return=T,y)}function d(T,y,I,N,U){return y===null||y.tag!==7?(y=Ts(I,T.mode,N,U),y.return=T,y):(y=i(y,I),y.return=T,y)}function h(T,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Uh(""+y,T.mode,I),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zu:return I=Fc(y.type,y.key,y.props,null,T.mode,I),I.ref=qa(T,null,y),I.return=T,I;case go:return y=jh(y,T.mode,I),y.return=T,y;case hi:var N=y._init;return h(T,N(y._payload),I)}if(nl(y)||za(y))return y=Ts(y,T.mode,I,null),y.return=T,y;cc(T,y)}return null}function p(T,y,I,N){var U=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return U!==null?null:a(T,y,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Zu:return I.key===U?u(T,y,I,N):null;case go:return I.key===U?c(T,y,I,N):null;case hi:return U=I._init,p(T,y,U(I._payload),N)}if(nl(I)||za(I))return U!==null?null:d(T,y,I,N,null);cc(T,I)}return null}function _(T,y,I,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return T=T.get(I)||null,a(y,T,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Zu:return T=T.get(N.key===null?I:N.key)||null,u(y,T,N,U);case go:return T=T.get(N.key===null?I:N.key)||null,c(y,T,N,U);case hi:var C=N._init;return _(T,y,I,C(N._payload),U)}if(nl(N)||za(N))return T=T.get(I)||null,d(y,T,N,U,null);cc(y,N)}return null}function S(T,y,I,N){for(var U=null,C=null,E=y,g=y=0,w=null;E!==null&&g<I.length;g++){E.index>g?(w=E,E=null):w=E.sibling;var A=p(T,E,I[g],N);if(A===null){E===null&&(E=w);break}t&&E&&A.alternate===null&&e(T,E),y=s(A,y,g),C===null?U=A:C.sibling=A,C=A,E=w}if(g===I.length)return n(T,E),He&&as(T,g),U;if(E===null){for(;g<I.length;g++)E=h(T,I[g],N),E!==null&&(y=s(E,y,g),C===null?U=E:C.sibling=E,C=E);return He&&as(T,g),U}for(E=r(T,E);g<I.length;g++)w=_(E,T,g,I[g],N),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),y=s(w,y,g),C===null?U=w:C.sibling=w,C=w);return t&&E.forEach(function(b){return e(T,b)}),He&&as(T,g),U}function P(T,y,I,N){var U=za(I);if(typeof U!="function")throw Error(H(150));if(I=U.call(I),I==null)throw Error(H(151));for(var C=U=null,E=y,g=y=0,w=null,A=I.next();E!==null&&!A.done;g++,A=I.next()){E.index>g?(w=E,E=null):w=E.sibling;var b=p(T,E,A.value,N);if(b===null){E===null&&(E=w);break}t&&E&&b.alternate===null&&e(T,E),y=s(b,y,g),C===null?U=b:C.sibling=b,C=b,E=w}if(A.done)return n(T,E),He&&as(T,g),U;if(E===null){for(;!A.done;g++,A=I.next())A=h(T,A.value,N),A!==null&&(y=s(A,y,g),C===null?U=A:C.sibling=A,C=A);return He&&as(T,g),U}for(E=r(T,E);!A.done;g++,A=I.next())A=_(E,T,g,A.value,N),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?g:A.key),y=s(A,y,g),C===null?U=A:C.sibling=A,C=A);return t&&E.forEach(function(O){return e(T,O)}),He&&as(T,g),U}function k(T,y,I,N){if(typeof I=="object"&&I!==null&&I.type===yo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Zu:e:{for(var U=I.key,C=y;C!==null;){if(C.key===U){if(U=I.type,U===yo){if(C.tag===7){n(T,C.sibling),y=i(C,I.props.children),y.return=T,T=y;break e}}else if(C.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===hi&&z_(U)===C.type){n(T,C.sibling),y=i(C,I.props),y.ref=qa(T,C,I),y.return=T,T=y;break e}n(T,C);break}else e(T,C);C=C.sibling}I.type===yo?(y=Ts(I.props.children,T.mode,N,I.key),y.return=T,T=y):(N=Fc(I.type,I.key,I.props,null,T.mode,N),N.ref=qa(T,y,I),N.return=T,T=N)}return o(T);case go:e:{for(C=I.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(T,y.sibling),y=i(y,I.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=jh(I,T.mode,N),y.return=T,T=y}return o(T);case hi:return C=I._init,k(T,y,C(I._payload),N)}if(nl(I))return S(T,y,I,N);if(za(I))return P(T,y,I,N);cc(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,I),y.return=T,T=y):(n(T,y),y=Uh(I,T.mode,N),y.return=T,T=y),o(T)):n(T,y)}return k}var qo=uT(!0),cT=uT(!1),cd=Qi(null),dd=null,Ao=null,kg=null;function bg(){kg=Ao=dd=null}function xg(t){var e=cd.current;je(cd),t._currentValue=e}function qp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mo(t,e){dd=t,kg=Ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(kg!==t)if(t={context:t,memoizedValue:e,next:null},Ao===null){if(dd===null)throw Error(H(308));Ao=t,dd.dependencies={lanes:0,firstContext:t}}else Ao=Ao.next=t;return e}var ps=null;function Ng(t){ps===null?ps=[t]:ps.push(t)}function dT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ng(e)):(n.next=i.next,i.next=n),e.interleaved=n,qr(t,r)}function qr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pi=!1;function Dg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ng(r)):(e.next=i.next,i.next=e),r.interleaved=e,qr(t,n)}function Nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vg(t,n)}}function B_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fd(t,e,n,r){var i=t.updateQueue;pi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(p=e,_=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){h=S.call(_,h,p);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,p=typeof S=="function"?S.call(_,h,p):S,p==null)break e;h=Xe({},h,p);break e;case 2:pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=h):d=d.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=h}}function $_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var vu={},gr=Qi(vu),Wl=Qi(vu),ql=Qi(vu);function ms(t){if(t===vu)throw Error(H(174));return t}function Og(t,e){switch(Me(ql,e),Me(Wl,t),Me(gr,vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rp(e,t)}je(gr),Me(gr,e)}function Ko(){je(gr),je(Wl),je(ql)}function hT(t){ms(ql.current);var e=ms(gr.current),n=Rp(e,t.type);e!==n&&(Me(Wl,t),Me(gr,n))}function Lg(t){Wl.current===t&&(je(gr),je(Wl))}var Ge=Qi(0);function hd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dh=[];function Mg(){for(var t=0;t<Dh.length;t++)Dh[t]._workInProgressVersionPrimary=null;Dh.length=0}var Dc=ei.ReactCurrentDispatcher,Oh=ei.ReactCurrentBatchConfig,bs=0,Qe=null,pt=null,vt=null,pd=!1,yl=!1,Kl=0,ob=0;function Vt(){throw Error(H(321))}function Vg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!er(t[n],e[n]))return!1;return!0}function Fg(t,e,n,r,i,s){if(bs=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dc.current=t===null||t.memoizedState===null?cb:db,t=n(r,i),yl){s=0;do{if(yl=!1,Kl=0,25<=s)throw Error(H(301));s+=1,vt=pt=null,e.updateQueue=null,Dc.current=fb,t=n(r,i)}while(yl)}if(Dc.current=md,e=pt!==null&&pt.next!==null,bs=0,vt=pt=Qe=null,pd=!1,e)throw Error(H(300));return t}function Ug(){var t=Kl!==0;return Kl=0,t}function ur(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Qe.memoizedState=vt=t:vt=vt.next=t,vt}function Vn(){if(pt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=vt===null?Qe.memoizedState:vt.next;if(e!==null)vt=e,pt=t;else{if(t===null)throw Error(H(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?Qe.memoizedState=vt=t:vt=vt.next=t}return vt}function Gl(t,e){return typeof e=="function"?e(t):e}function Lh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=pt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((bs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Qe.lanes|=d,xs|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,er(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,xs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);er(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pT(){}function mT(t,e){var n=Qe,r=Vn(),i=e(),s=!er(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,jg(vT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,Ql(9,yT.bind(null,n,r,i,e),void 0,null),wt===null)throw Error(H(349));bs&30||gT(n,e,i)}return i}function gT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yT(t,e,n,r){e.value=n,e.getSnapshot=r,_T(e)&&wT(t)}function vT(t,e,n){return n(function(){_T(e)&&wT(t)})}function _T(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!er(t,n)}catch{return!0}}function wT(t){var e=qr(t,1);e!==null&&Jn(e,t,1,-1)}function H_(t){var e=ur();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:t},e.queue=t,t=t.dispatch=ub.bind(null,Qe,t),[e.memoizedState,t]}function Ql(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ET(){return Vn().memoizedState}function Oc(t,e,n,r){var i=ur();Qe.flags|=t,i.memoizedState=Ql(1|e,n,void 0,r===void 0?null:r)}function af(t,e,n,r){var i=Vn();r=r===void 0?null:r;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,r!==null&&Vg(r,o.deps)){i.memoizedState=Ql(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=Ql(1|e,n,s,r)}function W_(t,e){return Oc(8390656,8,t,e)}function jg(t,e){return af(2048,8,t,e)}function TT(t,e){return af(4,2,t,e)}function IT(t,e){return af(4,4,t,e)}function ST(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function AT(t,e,n){return n=n!=null?n.concat([t]):null,af(4,4,ST.bind(null,e,t),n)}function zg(){}function RT(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function PT(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function CT(t,e,n){return bs&21?(er(n,e)||(n=D1(),Qe.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function ab(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Oh.transition;Oh.transition={};try{t(!1),e()}finally{xe=n,Oh.transition=r}}function kT(){return Vn().memoizedState}function lb(t,e,n){var r=xi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bT(t))xT(e,n);else if(n=dT(t,e,n,r),n!==null){var i=Yt();Jn(n,t,r,i),NT(n,e,r)}}function ub(t,e,n){var r=xi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,er(a,o)){var u=e.interleaved;u===null?(i.next=i,Ng(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=dT(t,e,i,r),n!==null&&(i=Yt(),Jn(n,t,r,i),NT(n,e,r))}}function bT(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function xT(t,e){yl=pd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vg(t,n)}}var md={readContext:Mn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},cb={readContext:Mn,useCallback:function(t,e){return ur().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:W_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4194308,4,ST.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oc(4,2,t,e)},useMemo:function(t,e){var n=ur();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ur();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lb.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=ur();return t={current:t},e.memoizedState=t},useState:H_,useDebugValue:zg,useDeferredValue:function(t){return ur().memoizedState=t},useTransition:function(){var t=H_(!1),e=t[0];return t=ab.bind(null,t[1]),ur().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=ur();if(He){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),wt===null)throw Error(H(349));bs&30||gT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,W_(vT.bind(null,r,s,t),[t]),r.flags|=2048,Ql(9,yT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ur(),e=wt.identifierPrefix;if(He){var n=Mr,r=Lr;n=(r&~(1<<32-Xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Kl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ob++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},db={readContext:Mn,useCallback:RT,useContext:Mn,useEffect:jg,useImperativeHandle:AT,useInsertionEffect:TT,useLayoutEffect:IT,useMemo:PT,useReducer:Lh,useRef:ET,useState:function(){return Lh(Gl)},useDebugValue:zg,useDeferredValue:function(t){var e=Vn();return CT(e,pt.memoizedState,t)},useTransition:function(){var t=Lh(Gl)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:pT,useSyncExternalStore:mT,useId:kT,unstable_isNewReconciler:!1},fb={readContext:Mn,useCallback:RT,useContext:Mn,useEffect:jg,useImperativeHandle:AT,useInsertionEffect:TT,useLayoutEffect:IT,useMemo:PT,useReducer:Mh,useRef:ET,useState:function(){return Mh(Gl)},useDebugValue:zg,useDeferredValue:function(t){var e=Vn();return pt===null?e.memoizedState=t:CT(e,pt.memoizedState,t)},useTransition:function(){var t=Mh(Gl)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:pT,useSyncExternalStore:mT,useId:kT,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lf={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=xi(t),s=zr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,i),e!==null&&(Jn(e,t,i,r),Nc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=xi(t),s=zr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,i),e!==null&&(Jn(e,t,i,r),Nc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=xi(t),i=zr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ki(t,i,r),e!==null&&(Jn(e,t,r,n),Nc(e,t,r))}};function q_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zl(n,r)||!zl(i,s):!0}function DT(t,e,n){var r=!1,i=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(i=rn(e)?Cs:$t.current,r=e.contextTypes,s=(r=r!=null)?Ho(t,i):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function K_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lf.enqueueReplaceState(e,e.state,null)}function Gp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Dg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mn(s):(s=rn(e)?Cs:$t.current,i.context=Ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lf.enqueueReplaceState(i,i.state,null),fd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e){try{var n="",r=e;do n+=jC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hb=typeof WeakMap=="function"?WeakMap:Map;function OT(t,e,n){n=zr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yd||(yd=!0,sm=r),Qp(t,e)},n}function LT(t,e,n){n=zr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qp(t,e),typeof r!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function G_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Pb.bind(null,t,e,n),e.then(t,t))}function Q_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Y_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zr(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var pb=ei.ReactCurrentOwner,tn=!1;function Kt(t,e,n,r){e.child=t===null?cT(e,null,n,r):qo(e,t.child,n,r)}function X_(t,e,n,r,i){n=n.render;var s=e.ref;return Mo(e,i),r=Fg(t,e,n,r,s,i),n=Ug(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(He&&n&&Rg(e),e.flags|=1,Kt(t,e,r,i),e.child)}function J_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,MT(t,e,s,r,i)):(t=Fc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(o,r)&&t.ref===e.ref)return Kr(t,e,i)}return e.flags|=1,t=Ni(s,r),t.ref=e.ref,t.return=e,e.child=t}function MT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zl(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Kr(t,e,i)}return Yp(t,e,n,r,i)}function VT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Po,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Po,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Po,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Po,dn),dn|=r;return Kt(t,e,i,n),e.child}function FT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yp(t,e,n,r,i){var s=rn(n)?Cs:$t.current;return s=Ho(e,s),Mo(e,i),n=Fg(t,e,n,r,s,i),r=Ug(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(He&&r&&Rg(e),e.flags|=1,Kt(t,e,n,i),e.child)}function Z_(t,e,n,r,i){if(rn(n)){var s=!0;ad(e)}else s=!1;if(Mo(e,i),e.stateNode===null)Lc(t,e),DT(e,n,r),Gp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=rn(n)?Cs:$t.current,c=Ho(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&K_(e,o,r,c),pi=!1;var p=e.memoizedState;o.state=p,fd(e,r,o,i),u=e.memoizedState,a!==r||p!==u||nn.current||pi?(typeof d=="function"&&(Kp(e,n,d,r),u=e.memoizedState),(a=pi||q_(e,n,a,r,p,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,fT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,h=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mn(u):(u=rn(n)?Cs:$t.current,u=Ho(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==u)&&K_(e,o,r,u),pi=!1,p=e.memoizedState,o.state=p,fd(e,r,o,i);var S=e.memoizedState;a!==h||p!==S||nn.current||pi?(typeof _=="function"&&(Kp(e,n,_,r),S=e.memoizedState),(c=pi||q_(e,n,c,r,p,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Xp(t,e,n,r,s,i)}function Xp(t,e,n,r,i,s){FT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&F_(e,n,!1),Kr(t,e,s);r=e.stateNode,pb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qo(e,t.child,null,s),e.child=qo(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=r.state,i&&F_(e,n,!0),e.child}function UT(t){var e=t.stateNode;e.pendingContext?V_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&V_(t,e.context,!1),Og(t,e.containerInfo)}function e0(t,e,n,r,i){return Wo(),Cg(i),e.flags|=256,Kt(t,e,n,r),e.child}var Jp={dehydrated:null,treeContext:null,retryLane:0};function Zp(t){return{baseLanes:t,cachePool:null,transitions:null}}function jT(t,e,n){var r=e.pendingProps,i=Ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(Ge,i&1),t===null)return Wp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=df(o,r,0,null),t=Ts(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zp(n),e.memoizedState=Jp,t):Bg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ni(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=Ts(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jp,r}return s=t.child,t=s.sibling,r=Ni(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bg(t,e){return e=df({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dc(t,e,n,r){return r!==null&&Cg(r),qo(e,t.child,null,n),t=Bg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vh(Error(H(422))),dc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=df({mode:"visible",children:r.children},i,0,null),s=Ts(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qo(e,t.child,null,o),e.child.memoizedState=Zp(o),e.memoizedState=Jp,s);if(!(e.mode&1))return dc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Vh(s,r,void 0),dc(t,e,o,r)}if(a=(o&t.childLanes)!==0,tn||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qr(t,i),Jn(r,t,i,-1))}return Gg(),r=Vh(Error(H(421))),dc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Cb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=Ci(i.nextSibling),yn=e,He=!0,Qn=null,t!==null&&(bn[xn++]=Lr,bn[xn++]=Mr,bn[xn++]=ks,Lr=t.id,Mr=t.overflow,ks=e),e=Bg(e,r.children),e.flags|=4096,e)}function t0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qp(t.return,e,n)}function Fh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Kt(t,e,r.children,n),r=Ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,n,e);else if(t.tag===19)t0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(Ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fh(e,!0,n,null,s);break;case"together":Fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gb(t,e,n){switch(e.tag){case 3:UT(e),Wo();break;case 5:hT(e);break;case 1:rn(e.type)&&ad(e);break;case 4:Og(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(cd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ge,Ge.current&1),e.flags|=128,null):n&e.child.childLanes?jT(t,e,n):(Me(Ge,Ge.current&1),t=Kr(t,e,n),t!==null?t.sibling:null);Me(Ge,Ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ge,Ge.current),r)break;return null;case 22:case 23:return e.lanes=0,VT(t,e,n)}return Kr(t,e,n)}var BT,em,$T,HT;BT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};em=function(){};$T=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ms(gr.current);var s=null;switch(n){case"input":i=Tp(t,i),r=Tp(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=Ap(t,i),r=Ap(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sd)}Pp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ol.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ol.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ue("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};HT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ka(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yb(t,e,n){var r=e.pendingProps;switch(Pg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return rn(e.type)&&od(),Ft(e),null;case 3:return r=e.stateNode,Ko(),je(nn),je($t),Mg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(lm(Qn),Qn=null))),em(t,e),Ft(e),null;case 5:Lg(e);var i=ms(ql.current);if(n=e.type,t!==null&&e.stateNode!=null)$T(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Ft(e),null}if(t=ms(gr.current),uc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dr]=e,r[Hl]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<il.length;i++)Ue(il[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":c_(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":f_(r,s),Ue("invalid",r)}Pp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(r.textContent,a,t),i=["children",""+a]):Ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":ec(r),d_(r,s,!0);break;case"textarea":ec(r),h_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=sd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dr]=e,t[Hl]=r,BT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cp(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<il.length;i++)Ue(il[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":c_(t,r),i=Tp(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":f_(t,r),i=Ap(t,r),Ue("invalid",t);break;default:i=r}Pp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?E1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ll(t,u):typeof u=="number"&&Ll(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ol.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ue("scroll",t):u!=null&&fg(t,s,u,o))}switch(n){case"input":ec(t),d_(t,r,!1);break;case"textarea":ec(t),h_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?No(t,!!r.multiple,s,!1):r.defaultValue!=null&&No(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)HT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=ms(ql.current),ms(gr.current),uc(e)){if(r=e.stateNode,n=e.memoizedProps,r[dr]=e,(s=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:lc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dr]=e,e.stateNode=r}return Ft(e),null;case 13:if(je(Ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&hn!==null&&e.mode&1&&!(e.flags&128))lT(),Wo(),e.flags|=98560,s=!1;else if(s=uc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[dr]=e}else Wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Qn!==null&&(lm(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ge.current&1?gt===0&&(gt=3):Gg())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ko(),em(t,e),t===null&&Bl(e.stateNode.containerInfo),Ft(e),null;case 10:return xg(e.type._context),Ft(e),null;case 17:return rn(e.type)&&od(),Ft(e),null;case 19:if(je(Ge),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ka(s,!1);else{if(gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hd(t),o!==null){for(e.flags|=128,Ka(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(Ge,Ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>Qo&&(e.flags|=128,r=!0,Ka(s,!1),e.lanes=4194304)}else{if(!r)if(t=hd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Ft(e),null}else 2*it()-s.renderingStartTime>Qo&&n!==1073741824&&(e.flags|=128,r=!0,Ka(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=Ge.current,Me(Ge,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Kg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function vb(t,e){switch(Pg(e),e.tag){case 1:return rn(e.type)&&od(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ko(),je(nn),je($t),Mg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lg(e),null;case 13:if(je(Ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Ge),null;case 4:return Ko(),null;case 10:return xg(e.type._context),null;case 22:case 23:return Kg(),null;case 24:return null;default:return null}}var fc=!1,zt=!1,_b=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function tm(t,e,n){try{n()}catch(r){et(t,e,r)}}var n0=!1;function wb(t,e){if(Fp=nd,t=Q1(),Ag(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Up={focusedElem:t,selectionRange:n},nd=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,k=S.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:qn(e.type,P),k);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(N){et(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return S=n0,n0=!1,S}function vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tm(e,n,s)}i=i.next}while(i!==r)}}function uf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WT(t){var e=t.alternate;e!==null&&(t.alternate=null,WT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dr],delete e[Hl],delete e[Bp],delete e[nb],delete e[rb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qT(t){return t.tag===5||t.tag===3||t.tag===4}function r0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sd));else if(r!==4&&(t=t.child,t!==null))for(rm(t,e,n),t=t.sibling;t!==null;)rm(t,e,n),t=t.sibling}function im(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(im(t,e,n),t=t.sibling;t!==null;)im(t,e,n),t=t.sibling}var Rt=null,Kn=!1;function ui(t,e,n){for(n=n.child;n!==null;)KT(t,e,n),n=n.sibling}function KT(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(ef,n)}catch{}switch(n.tag){case 5:zt||Ro(n,e);case 6:var r=Rt,i=Kn;Rt=null,ui(t,e,n),Rt=r,Kn=i,Rt!==null&&(Kn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Kn?(t=Rt,n=n.stateNode,t.nodeType===8?xh(t.parentNode,n):t.nodeType===1&&xh(t,n),Ul(t)):xh(Rt,n.stateNode));break;case 4:r=Rt,i=Kn,Rt=n.stateNode.containerInfo,Kn=!0,ui(t,e,n),Rt=r,Kn=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tm(n,e,o),i=i.next}while(i!==r)}ui(t,e,n);break;case 1:if(!zt&&(Ro(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){et(n,e,a)}ui(t,e,n);break;case 21:ui(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,ui(t,e,n),zt=r):ui(t,e,n);break;default:ui(t,e,n)}}function i0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _b),e.forEach(function(r){var i=kb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,Kn=!1;break e;case 3:Rt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Rt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Rt===null)throw Error(H(160));KT(s,o,i),Rt=null,Kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){et(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)GT(e,t),e=e.sibling}function GT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),lr(t),r&4){try{vl(3,t,t.return),uf(3,t)}catch(P){et(t,t.return,P)}try{vl(5,t,t.return)}catch(P){et(t,t.return,P)}}break;case 1:Wn(e,t),lr(t),r&512&&n!==null&&Ro(n,n.return);break;case 5:if(Wn(e,t),lr(t),r&512&&n!==null&&Ro(n,n.return),t.flags&32){var i=t.stateNode;try{Ll(i,"")}catch(P){et(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g1(i,s),Cp(a,o);var c=Cp(a,s);for(o=0;o<u.length;o+=2){var d=u[o],h=u[o+1];d==="style"?E1(i,h):d==="dangerouslySetInnerHTML"?_1(i,h):d==="children"?Ll(i,h):fg(i,d,h,c)}switch(a){case"input":Ip(i,s);break;case"textarea":y1(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?No(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?No(i,!!s.multiple,s.defaultValue,!0):No(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hl]=s}catch(P){et(t,t.return,P)}}break;case 6:if(Wn(e,t),lr(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){et(t,t.return,P)}}break;case 3:if(Wn(e,t),lr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ul(e.containerInfo)}catch(P){et(t,t.return,P)}break;case 4:Wn(e,t),lr(t);break;case 13:Wn(e,t),lr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wg=it())),r&4&&i0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,Wn(e,t),zt=c):Wn(e,t),lr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(h=Y=d;Y!==null;){switch(p=Y,_=p.child,p.tag){case 0:case 11:case 14:case 15:vl(4,p,p.return);break;case 1:Ro(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){et(r,n,P)}}break;case 5:Ro(p,p.return);break;case 22:if(p.memoizedState!==null){o0(h);continue}}_!==null?(_.return=p,Y=_):o0(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=w1("display",o))}catch(P){et(t,t.return,P)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(P){et(t,t.return,P)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),lr(t),r&4&&i0(t);break;case 21:break;default:Wn(e,t),lr(t)}}function lr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qT(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ll(i,""),r.flags&=-33);var s=r0(t);im(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=r0(t);rm(t,a,o);break;default:throw Error(H(161))}}catch(u){et(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Eb(t,e,n){Y=t,QT(t)}function QT(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||zt;a=fc;var c=zt;if(fc=o,(zt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?a0(i):u!==null?(u.return=o,Y=u):a0(i);for(;s!==null;)Y=s,QT(s),s=s.sibling;Y=i,fc=a,zt=c}s0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):s0(t)}}function s0(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||uf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ul(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}zt||e.flags&512&&nm(e)}catch(p){et(e,e.return,p)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function o0(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function a0(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uf(4,e)}catch(u){et(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){et(e,i,u)}}var s=e.return;try{nm(e)}catch(u){et(e,s,u)}break;case 5:var o=e.return;try{nm(e)}catch(u){et(e,o,u)}}}catch(u){et(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var Tb=Math.ceil,gd=ei.ReactCurrentDispatcher,$g=ei.ReactCurrentOwner,Dn=ei.ReactCurrentBatchConfig,Ie=0,wt=null,lt=null,kt=0,dn=0,Po=Qi(0),gt=0,Yl=null,xs=0,cf=0,Hg=0,_l=null,en=null,Wg=0,Qo=1/0,Nr=null,yd=!1,sm=null,bi=null,hc=!1,Ti=null,vd=0,wl=0,om=null,Mc=-1,Vc=0;function Yt(){return Ie&6?it():Mc!==-1?Mc:Mc=it()}function xi(t){return t.mode&1?Ie&2&&kt!==0?kt&-kt:sb.transition!==null?(Vc===0&&(Vc=D1()),Vc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:j1(t.type)),t):1}function Jn(t,e,n,r){if(50<wl)throw wl=0,om=null,Error(H(185));mu(t,n,r),(!(Ie&2)||t!==wt)&&(t===wt&&(!(Ie&2)&&(cf|=n),gt===4&&gi(t,kt)),sn(t,r),n===1&&Ie===0&&!(e.mode&1)&&(Qo=it()+500,of&&Yi()))}function sn(t,e){var n=t.callbackNode;sk(t,e);var r=td(t,t===wt?kt:0);if(r===0)n!==null&&g_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&g_(n),e===1)t.tag===0?ib(l0.bind(null,t)):sT(l0.bind(null,t)),eb(function(){!(Ie&6)&&Yi()}),n=null;else{switch(O1(r)){case 1:n=yg;break;case 4:n=x1;break;case 16:n=ed;break;case 536870912:n=N1;break;default:n=ed}n=rI(n,YT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YT(t,e){if(Mc=-1,Vc=0,Ie&6)throw Error(H(327));var n=t.callbackNode;if(Vo()&&t.callbackNode!==n)return null;var r=td(t,t===wt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_d(t,r);else{e=r;var i=Ie;Ie|=2;var s=JT();(wt!==t||kt!==e)&&(Nr=null,Qo=it()+500,Es(t,e));do try{Ab();break}catch(a){XT(t,a)}while(!0);bg(),gd.current=s,Ie=i,lt!==null?e=0:(wt=null,kt=0,e=gt)}if(e!==0){if(e===2&&(i=Dp(t),i!==0&&(r=i,e=am(t,i))),e===1)throw n=Yl,Es(t,0),gi(t,r),sn(t,it()),n;if(e===6)gi(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ib(i)&&(e=_d(t,r),e===2&&(s=Dp(t),s!==0&&(r=s,e=am(t,s))),e===1))throw n=Yl,Es(t,0),gi(t,r),sn(t,it()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:ls(t,en,Nr);break;case 3:if(gi(t,r),(r&130023424)===r&&(e=Wg+500-it(),10<e)){if(td(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zp(ls.bind(null,t,en,Nr),e);break}ls(t,en,Nr);break;case 4:if(gi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tb(r/1960))-r,10<r){t.timeoutHandle=zp(ls.bind(null,t,en,Nr),r);break}ls(t,en,Nr);break;case 5:ls(t,en,Nr);break;default:throw Error(H(329))}}}return sn(t,it()),t.callbackNode===n?YT.bind(null,t):null}function am(t,e){var n=_l;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=_d(t,e),t!==2&&(e=en,en=n,e!==null&&lm(e)),t}function lm(t){en===null?en=t:en.push.apply(en,t)}function Ib(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!er(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gi(t,e){for(e&=~Hg,e&=~cf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),r=1<<n;t[n]=-1,e&=~r}}function l0(t){if(Ie&6)throw Error(H(327));Vo();var e=td(t,0);if(!(e&1))return sn(t,it()),null;var n=_d(t,e);if(t.tag!==0&&n===2){var r=Dp(t);r!==0&&(e=r,n=am(t,r))}if(n===1)throw n=Yl,Es(t,0),gi(t,e),sn(t,it()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ls(t,en,Nr),sn(t,it()),null}function qg(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(Qo=it()+500,of&&Yi())}}function Ns(t){Ti!==null&&Ti.tag===0&&!(Ie&6)&&Vo();var e=Ie;Ie|=1;var n=Dn.transition,r=xe;try{if(Dn.transition=null,xe=1,t)return t()}finally{xe=r,Dn.transition=n,Ie=e,!(Ie&6)&&Yi()}}function Kg(){dn=Po.current,je(Po)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zk(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(Pg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&od();break;case 3:Ko(),je(nn),je($t),Mg();break;case 5:Lg(r);break;case 4:Ko();break;case 13:je(Ge);break;case 19:je(Ge);break;case 10:xg(r.type._context);break;case 22:case 23:Kg()}n=n.return}if(wt=t,lt=t=Ni(t.current,null),kt=dn=e,gt=0,Yl=null,Hg=cf=xs=0,en=_l=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ps=null}return t}function XT(t,e){do{var n=lt;try{if(bg(),Dc.current=md,pd){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pd=!1}if(bs=0,vt=pt=Qe=null,yl=!1,Kl=0,$g.current=null,n===null||n.return===null){gt=1,Yl=e,lt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=kt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Q_(o);if(_!==null){_.flags&=-257,Y_(_,o,a,s,e),_.mode&1&&G_(s,c,e),e=_,u=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(u),e.updateQueue=P}else S.add(u);break e}else{if(!(e&1)){G_(s,c,e),Gg();break e}u=Error(H(426))}}else if(He&&a.mode&1){var k=Q_(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Y_(k,o,a,s,e),Cg(Go(u,a));break e}}s=u=Go(u,a),gt!==4&&(gt=2),_l===null?_l=[s]:_l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=OT(s,u,e);B_(s,T);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(bi===null||!bi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=LT(s,a,e);B_(s,N);break e}}s=s.return}while(s!==null)}eI(n)}catch(U){e=U,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function JT(){var t=gd.current;return gd.current=md,t===null?md:t}function Gg(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||!(xs&268435455)&&!(cf&268435455)||gi(wt,kt)}function _d(t,e){var n=Ie;Ie|=2;var r=JT();(wt!==t||kt!==e)&&(Nr=null,Es(t,e));do try{Sb();break}catch(i){XT(t,i)}while(!0);if(bg(),Ie=n,gd.current=r,lt!==null)throw Error(H(261));return wt=null,kt=0,gt}function Sb(){for(;lt!==null;)ZT(lt)}function Ab(){for(;lt!==null&&!YC();)ZT(lt)}function ZT(t){var e=nI(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?eI(t):lt=e,$g.current=null}function eI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vb(n,e),n!==null){n.flags&=32767,lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gt=6,lt=null;return}}else if(n=yb(n,e,dn),n!==null){lt=n;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);gt===0&&(gt=5)}function ls(t,e,n){var r=xe,i=Dn.transition;try{Dn.transition=null,xe=1,Rb(t,e,n,r)}finally{Dn.transition=i,xe=r}return null}function Rb(t,e,n,r){do Vo();while(Ti!==null);if(Ie&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ok(t,s),t===wt&&(lt=wt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,rI(ed,function(){return Vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=xe;xe=1;var a=Ie;Ie|=4,$g.current=null,wb(t,n),GT(n,t),qk(Up),nd=!!Fp,Up=Fp=null,t.current=n,Eb(n),XC(),Ie=a,xe=o,Dn.transition=s}else t.current=n;if(hc&&(hc=!1,Ti=t,vd=i),s=t.pendingLanes,s===0&&(bi=null),ek(n.stateNode),sn(t,it()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yd)throw yd=!1,t=sm,sm=null,t;return vd&1&&t.tag!==0&&Vo(),s=t.pendingLanes,s&1?t===om?wl++:(wl=0,om=t):wl=0,Yi(),null}function Vo(){if(Ti!==null){var t=O1(vd),e=Dn.transition,n=xe;try{if(Dn.transition=null,xe=16>t?16:t,Ti===null)var r=!1;else{if(t=Ti,Ti=null,vd=0,Ie&6)throw Error(H(331));var i=Ie;for(Ie|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:vl(8,d,s)}var h=d.child;if(h!==null)h.return=d,Y=h;else for(;Y!==null;){d=Y;var p=d.sibling,_=d.return;if(WT(d),d===c){Y=null;break}if(p!==null){p.return=_,Y=p;break}Y=_}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vl(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Y=T;break e}Y=s.return}}var y=t.current;for(Y=y;Y!==null;){o=Y;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Y=I;else e:for(o=y;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uf(9,a)}}catch(U){et(a,a.return,U)}if(a===o){Y=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,Y=N;break e}Y=a.return}}if(Ie=i,Yi(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(ef,t)}catch{}r=!0}return r}finally{xe=n,Dn.transition=e}}return!1}function u0(t,e,n){e=Go(n,e),e=OT(t,e,1),t=ki(t,e,1),e=Yt(),t!==null&&(mu(t,1,e),sn(t,e))}function et(t,e,n){if(t.tag===3)u0(t,t,n);else for(;e!==null;){if(e.tag===3){u0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bi===null||!bi.has(r))){t=Go(n,t),t=LT(e,t,1),e=ki(e,t,1),t=Yt(),e!==null&&(mu(e,1,t),sn(e,t));break}}e=e.return}}function Pb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(kt&n)===n&&(gt===4||gt===3&&(kt&130023424)===kt&&500>it()-Wg?Es(t,0):Hg|=n),sn(t,e)}function tI(t,e){e===0&&(t.mode&1?(e=rc,rc<<=1,!(rc&130023424)&&(rc=4194304)):e=1);var n=Yt();t=qr(t,e),t!==null&&(mu(t,e,n),sn(t,n))}function Cb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tI(t,n)}function kb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),tI(t,n)}var nI;nI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,gb(t,e,n);tn=!!(t.flags&131072)}else tn=!1,He&&e.flags&1048576&&oT(e,ud,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lc(t,e),t=e.pendingProps;var i=Ho(e,$t.current);Mo(e,n),i=Fg(null,e,r,t,i,n);var s=Ug();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,ad(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dg(e),i.updater=lf,e.stateNode=i,i._reactInternals=e,Gp(e,r,t,n),e=Xp(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Rg(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xb(r),t=qn(r,t),i){case 0:e=Yp(null,e,r,t,n);break e;case 1:e=Z_(null,e,r,t,n);break e;case 11:e=X_(null,e,r,t,n);break e;case 14:e=J_(null,e,r,qn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Yp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Z_(t,e,r,i,n);case 3:e:{if(UT(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,fT(t,e),fd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Go(Error(H(423)),e),e=e0(t,e,r,n,i);break e}else if(r!==i){i=Go(Error(H(424)),e),e=e0(t,e,r,n,i);break e}else for(hn=Ci(e.stateNode.containerInfo.firstChild),yn=e,He=!0,Qn=null,n=cT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wo(),r===i){e=Kr(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return hT(e),t===null&&Wp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jp(r,i)?o=null:s!==null&&jp(r,s)&&(e.flags|=32),FT(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Wp(e),null;case 13:return jT(t,e,n);case 4:return Og(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qo(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),X_(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(cd,r._currentValue),r._currentValue=o,s!==null)if(er(s.value,o)){if(s.children===i.children&&!nn.current){e=Kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=zr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mo(e,n),i=Mn(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),J_(t,e,r,i,n);case 15:return MT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Lc(t,e),e.tag=1,rn(r)?(t=!0,ad(e)):t=!1,Mo(e,n),DT(e,r,i),Gp(e,r,i,n),Xp(null,e,r,!0,t,n);case 19:return zT(t,e,n);case 22:return VT(t,e,n)}throw Error(H(156,e.tag))};function rI(t,e){return b1(t,e)}function bb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,r){return new bb(t,e,n,r)}function Qg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xb(t){if(typeof t=="function")return Qg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pg)return 11;if(t===mg)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yo:return Ts(n.children,i,s,e);case hg:o=8,i|=8;break;case vp:return t=Nn(12,n,e,i|2),t.elementType=vp,t.lanes=s,t;case _p:return t=Nn(13,n,e,i),t.elementType=_p,t.lanes=s,t;case wp:return t=Nn(19,n,e,i),t.elementType=wp,t.lanes=s,t;case h1:return df(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d1:o=10;break e;case f1:o=9;break e;case pg:o=11;break e;case mg:o=14;break e;case hi:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ts(t,e,n,r){return t=Nn(7,t,r,e),t.lanes=n,t}function df(t,e,n,r){return t=Nn(22,t,r,e),t.elementType=h1,t.lanes=n,t.stateNode={isHidden:!1},t}function Uh(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function jh(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wh(0),this.expirationTimes=wh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yg(t,e,n,r,i,s,o,a,u){return t=new Nb(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dg(s),t}function Db(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iI(t){if(!t)return Vi;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(rn(n))return iT(t,n,e)}return e}function sI(t,e,n,r,i,s,o,a,u){return t=Yg(n,r,!0,t,i,s,o,a,u),t.context=iI(null),n=t.current,r=Yt(),i=xi(n),s=zr(r,i),s.callback=e??null,ki(n,s,i),t.current.lanes=i,mu(t,i,r),sn(t,r),t}function ff(t,e,n,r){var i=e.current,s=Yt(),o=xi(i);return n=iI(n),e.context===null?e.context=n:e.pendingContext=n,e=zr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ki(i,e,o),t!==null&&(Jn(t,i,o,s),Nc(t,i,o)),o}function wd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xg(t,e){c0(t,e),(t=t.alternate)&&c0(t,e)}function Ob(){return null}var oI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jg(t){this._internalRoot=t}hf.prototype.render=Jg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));ff(t,e,null,null)};hf.prototype.unmount=Jg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ns(function(){ff(null,t,null,null)}),e[Wr]=null}};function hf(t){this._internalRoot=t}hf.prototype.unstable_scheduleHydration=function(t){if(t){var e=V1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mi.length&&e!==0&&e<mi[n].priority;n++);mi.splice(n,0,t),n===0&&U1(t)}};function Zg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function Lb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=wd(o);s.call(c)}}var o=sI(e,r,t,0,null,!1,!1,"",d0);return t._reactRootContainer=o,t[Wr]=o.current,Bl(t.nodeType===8?t.parentNode:t),Ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=wd(u);a.call(c)}}var u=Yg(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=u,t[Wr]=u.current,Bl(t.nodeType===8?t.parentNode:t),Ns(function(){ff(e,u,n,r)}),u}function mf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=wd(o);a.call(u)}}ff(e,o,t,i)}else o=Lb(n,e,t,i,r);return wd(o)}L1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(vg(e,n|1),sn(e,it()),!(Ie&6)&&(Qo=it()+500,Yi()))}break;case 13:Ns(function(){var r=qr(t,1);if(r!==null){var i=Yt();Jn(r,t,1,i)}}),Xg(t,1)}};_g=function(t){if(t.tag===13){var e=qr(t,134217728);if(e!==null){var n=Yt();Jn(e,t,134217728,n)}Xg(t,134217728)}};M1=function(t){if(t.tag===13){var e=xi(t),n=qr(t,e);if(n!==null){var r=Yt();Jn(n,t,e,r)}Xg(t,e)}};V1=function(){return xe};F1=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};bp=function(t,e,n){switch(e){case"input":if(Ip(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sf(r);if(!i)throw Error(H(90));m1(r),Ip(r,i)}}}break;case"textarea":y1(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};S1=qg;A1=Ns;var Mb={usingClientEntryPoint:!1,Events:[yu,Eo,sf,T1,I1,qg]},Ga={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vb={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C1(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||Ob,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ef=pc.inject(Vb),mr=pc}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mb;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zg(e))throw Error(H(200));return Db(t,e,null,n)};An.createRoot=function(t,e){if(!Zg(t))throw Error(H(299));var n=!1,r="",i=oI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Yg(t,1,!1,null,null,n,!1,r,i),t[Wr]=e.current,Bl(t.nodeType===8?t.parentNode:t),new Jg(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=C1(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Ns(t)};An.hydrate=function(t,e,n){if(!pf(e))throw Error(H(200));return mf(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Zg(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sI(e,null,t,1,n??null,i,!1,s,o),t[Wr]=e.current,Bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hf(e)};An.render=function(t,e,n){if(!pf(e))throw Error(H(200));return mf(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!pf(t))throw Error(H(40));return t._reactRootContainer?(Ns(function(){mf(null,null,t,!1,function(){t._reactRootContainer=null,t[Wr]=null})}),!0):!1};An.unstable_batchedUpdates=qg;An.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pf(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return mf(t,e,n,!1,r)};An.version="18.3.1-next-f1338f8080-20240426";function aI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aI)}catch(t){console.error(t)}}aI(),a1.exports=An;var ey=a1.exports;const Fb=sg(ey),Ub=QE({__proto__:null,default:Fb},[ey]);var f0=ey;gp.createRoot=f0.createRoot,gp.hydrateRoot=f0.hydrateRoot;var lI={exports:{}},uI={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=z;function jb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zb=typeof Object.is=="function"?Object.is:jb,Bb=_u.useSyncExternalStore,$b=_u.useRef,Hb=_u.useEffect,Wb=_u.useMemo,qb=_u.useDebugValue;uI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=$b(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Wb(function(){function u(_){if(!c){if(c=!0,d=_,_=r(_),i!==void 0&&o.hasValue){var S=o.value;if(i(S,_))return h=S}return h=_}if(S=h,zb(d,_))return S;var P=r(_);return i!==void 0&&i(S,P)?S:(d=_,h=P)}var c=!1,d,h,p=n===void 0?null:n;return[function(){return u(e())},p===null?void 0:function(){return u(p())}]},[e,n,r,i]);var a=Bb(t,s[0],s[1]);return Hb(function(){o.hasValue=!0,o.value=a},[a]),qb(a),a};lI.exports=uI;var Kb=lI.exports,pn="default"in mp?Zd:mp,h0=Symbol.for("react-redux-context"),p0=typeof globalThis<"u"?globalThis:{};function Gb(){if(!pn.createContext)return{};const t=p0[h0]??(p0[h0]=new Map);let e=t.get(pn.createContext);return e||(e=pn.createContext(null),t.set(pn.createContext,e)),e}var Fi=Gb(),Qb=()=>{throw new Error("uSES not initialized!")};function ty(t=Fi){return function(){return pn.useContext(t)}}var cI=ty(),dI=Qb,Yb=t=>{dI=t},Xb=(t,e)=>t===e;function Jb(t=Fi){const e=t===Fi?cI:ty(t),n=(r,i={})=>{const{equalityFn:s=Xb,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:d,identityFunctionCheck:h}=e();pn.useRef(!0);const p=pn.useCallback({[r.name](S){return r(S)}}[r.name],[r,d,o.stabilityCheck]),_=dI(u.addNestedSub,a.getState,c||a.getState,p,s);return pn.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var da=Jb();function Zb(t){t()}function ex(){let t=null,e=null;return{clear(){t=null,e=null},notify(){Zb(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var m0={notify(){},get:()=>[]};function tx(t,e){let n,r=m0,i=0,s=!1;function o(P){d();const k=r.subscribe(P);let T=!1;return()=>{T||(T=!0,k(),h())}}function a(){r.notify()}function u(){S.onStateChange&&S.onStateChange()}function c(){return s}function d(){i++,n||(n=t.subscribe(u),r=ex())}function h(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=m0)}function p(){s||(s=!0,d())}function _(){s&&(s=!1,h())}const S={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:p,tryUnsubscribe:_,getListeners:()=>r};return S}var nx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rx=typeof navigator<"u"&&navigator.product==="ReactNative",ix=nx||rx?pn.useLayoutEffect:pn.useEffect;function sx({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=pn.useMemo(()=>{const c=tx(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=pn.useMemo(()=>t.getState(),[t]);ix(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Fi;return pn.createElement(u.Provider,{value:o},n)}var ox=sx;function fI(t=Fi){const e=t===Fi?cI:ty(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var ax=fI();function lx(t=Fi){const e=t===Fi?ax:fI(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ux=lx();Yb(Kb.useSyncExternalStoreWithSelector);function At(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var cx=typeof Symbol=="function"&&Symbol.observable||"@@observable",g0=cx,zh=()=>Math.random().toString(36).substring(7).split("").join("."),dx={INIT:`@@redux/INIT${zh()}`,REPLACE:`@@redux/REPLACE${zh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zh()}`},Ed=dx;function ny(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function hI(t,e,n){if(typeof t!="function")throw new Error(At(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(At(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(At(1));return n(hI)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((k,T)=>{o.set(T,k)}))}function d(){if(u)throw new Error(At(3));return i}function h(k){if(typeof k!="function")throw new Error(At(4));if(u)throw new Error(At(5));let T=!0;c();const y=a++;return o.set(y,k),function(){if(T){if(u)throw new Error(At(6));T=!1,c(),o.delete(y),s=null}}}function p(k){if(!ny(k))throw new Error(At(7));if(typeof k.type>"u")throw new Error(At(8));if(typeof k.type!="string")throw new Error(At(17));if(u)throw new Error(At(9));try{u=!0,i=r(i,k)}finally{u=!1}return(s=o).forEach(y=>{y()}),k}function _(k){if(typeof k!="function")throw new Error(At(10));r=k,p({type:Ed.REPLACE})}function S(){const k=h;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(At(11));function y(){const N=T;N.next&&N.next(d())}return y(),{unsubscribe:k(y)}},[g0](){return this}}}return p({type:Ed.INIT}),{dispatch:p,subscribe:h,getState:d,replaceReducer:_,[g0]:S}}function fx(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Ed.INIT})>"u")throw new Error(At(12));if(typeof n(void 0,{type:Ed.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(At(13))})}function hx(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{fx(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const h=r[d],p=n[h],_=o[h],S=p(_,a);if(typeof S>"u")throw a&&a.type,new Error(At(14));c[h]=S,u=u||S!==_}return u=u||r.length!==Object.keys(o).length,u?c:o}}function Td(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function px(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(At(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=Td(...a)(i.dispatch),{...i,dispatch:s}}}function mx(t){return ny(t)&&"type"in t&&typeof t.type=="string"}var pI=Symbol.for("immer-nothing"),y0=Symbol.for("immer-draftable"),In=Symbol.for("immer-state");function Yn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Yo=Object.getPrototypeOf;function Ds(t){return!!t&&!!t[In]}function Gr(t){var e;return t?mI(t)||Array.isArray(t)||!!t[y0]||!!((e=t.constructor)!=null&&e[y0])||yf(t)||vf(t):!1}var gx=Object.prototype.constructor.toString();function mI(t){if(!t||typeof t!="object")return!1;const e=Yo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===gx}function Id(t,e){gf(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function gf(t){const e=t[In];return e?e.type_:Array.isArray(t)?1:yf(t)?2:vf(t)?3:0}function um(t,e){return gf(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function gI(t,e,n){const r=gf(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function yx(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function yf(t){return t instanceof Map}function vf(t){return t instanceof Set}function us(t){return t.copy_||t.base_}function cm(t,e){if(yf(t))return new Map(t);if(vf(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=mI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[In];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(Yo(t),r)}else{const r=Yo(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function ry(t,e=!1){return _f(t)||Ds(t)||!Gr(t)||(gf(t)>1&&(t.set=t.add=t.clear=t.delete=vx),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>ry(r,!0))),t}function vx(){Yn(2)}function _f(t){return Object.isFrozen(t)}var _x={};function Os(t){const e=_x[t];return e||Yn(0,t),e}var Xl;function yI(){return Xl}function wx(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function v0(t,e){e&&(Os("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function dm(t){fm(t),t.drafts_.forEach(Ex),t.drafts_=null}function fm(t){t===Xl&&(Xl=t.parent_)}function _0(t){return Xl=wx(Xl,t)}function Ex(t){const e=t[In];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function w0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[In].modified_&&(dm(e),Yn(4)),Gr(t)&&(t=Sd(e,t),e.parent_||Ad(e,t)),e.patches_&&Os("Patches").generateReplacementPatches_(n[In].base_,t,e.patches_,e.inversePatches_)):t=Sd(e,n,[]),dm(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==pI?t:void 0}function Sd(t,e,n){if(_f(e))return e;const r=e[In];if(!r)return Id(e,(i,s)=>E0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Ad(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Id(s,(a,u)=>E0(t,r,i,a,u,n,o)),Ad(t,i,!1),n&&t.patches_&&Os("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function E0(t,e,n,r,i,s,o){if(Ds(i)){const a=s&&e&&e.type_!==3&&!um(e.assigned_,r)?s.concat(r):void 0,u=Sd(t,i,a);if(gI(n,r,u),Ds(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Gr(i)&&!_f(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Sd(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Ad(t,i)}}function Ad(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&ry(e,n)}function Tx(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:yI(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=iy;n&&(i=[r],s=Jl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var iy={get(t,e){if(e===In)return t;const n=us(t);if(!um(n,e))return Ix(t,n,e);const r=n[e];return t.finalized_||!Gr(r)?r:r===Bh(t.base_,e)?($h(t),t.copy_[e]=pm(r,t)):r},has(t,e){return e in us(t)},ownKeys(t){return Reflect.ownKeys(us(t))},set(t,e,n){const r=vI(us(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Bh(us(t),e),s=i==null?void 0:i[In];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(yx(n,i)&&(n!==void 0||um(t.base_,e)))return!0;$h(t),hm(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Bh(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,$h(t),hm(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=us(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Yn(11)},getPrototypeOf(t){return Yo(t.base_)},setPrototypeOf(){Yn(12)}},Jl={};Id(iy,(t,e)=>{Jl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Jl.deleteProperty=function(t,e){return Jl.set.call(this,t,e,void 0)};Jl.set=function(t,e,n){return iy.set.call(this,t[0],e,n,t[0])};function Bh(t,e){const n=t[In];return(n?us(n):t)[e]}function Ix(t,e,n){var i;const r=vI(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function vI(t,e){if(!(e in t))return;let n=Yo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Yo(n)}}function hm(t){t.modified_||(t.modified_=!0,t.parent_&&hm(t.parent_))}function $h(t){t.copy_||(t.copy_=cm(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Sx=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,d=>n.call(this,d,...c))}}typeof n!="function"&&Yn(6),r!==void 0&&typeof r!="function"&&Yn(7);let i;if(Gr(e)){const s=_0(this),o=pm(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?dm(s):fm(s)}return v0(s,r),w0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===pI&&(i=void 0),this.autoFreeze_&&ry(i,!0),r){const s=[],o=[];Os("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Yn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Gr(t)||Yn(8),Ds(t)&&(t=Ax(t));const e=_0(this),n=pm(t,void 0);return n[In].isManual_=!0,fm(e),n}finishDraft(t,e){const n=t&&t[In];(!n||!n.isManual_)&&Yn(9);const{scope_:r}=n;return v0(r,e),w0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Os("Patches").applyPatches_;return Ds(t)?r(t,e):this.produce(t,i=>r(i,e))}};function pm(t,e){const n=yf(t)?Os("MapSet").proxyMap_(t,e):vf(t)?Os("MapSet").proxySet_(t,e):Tx(t,e);return(e?e.scope_:yI()).drafts_.push(n),n}function Ax(t){return Ds(t)||Yn(10,t),_I(t)}function _I(t){if(!Gr(t)||_f(t))return t;const e=t[In];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=cm(t,e.scope_.immer_.useStrictShallowCopy_)}else n=cm(t,!0);return Id(n,(r,i)=>{gI(n,r,_I(i))}),e&&(e.finalized_=!1),n}var Sn=new Sx,wI=Sn.produce;Sn.produceWithPatches.bind(Sn);Sn.setAutoFreeze.bind(Sn);Sn.setUseStrictShallowCopy.bind(Sn);Sn.applyPatches.bind(Sn);Sn.createDraft.bind(Sn);Sn.finishDraft.bind(Sn);function EI(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var Rx=EI(),Px=EI,Cx=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Td:Td.apply(null,arguments)},kx=t=>t&&typeof t.match=="function";function El(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(yr(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>mx(r)&&r.type===t,n}var TI=class sl extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,sl.prototype)}static get[Symbol.species](){return sl}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new sl(...e[0].concat(this)):new sl(...e.concat(this))}};function T0(t){return Gr(t)?wI(t,()=>{}):t}function I0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(yr(10));const r=n.insert(e,t);return t.set(e,r),r}function bx(t){return typeof t=="boolean"}var xx=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new TI;return n&&(bx(n)?o.push(Rx):o.push(Px(n.extraArgument))),o},Nx="RTK_autoBatch",II=t=>e=>{setTimeout(e,t)},Dx=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:II(10),Ox=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?Dx:t.type==="callback"?t.queueNotification:II(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const h=()=>i&&d(),p=r.subscribe(h);return a.add(d),()=>{p(),a.delete(d)}},dispatch(d){var h;try{return i=!((h=d==null?void 0:d.meta)!=null&&h[Nx]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(d)}finally{i=!0}}})},Lx=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new TI(t);return r&&i.push(Ox(typeof r=="object"?r:void 0)),i};function Mx(t){const e=xx(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(ny(n))a=hx(n);else throw new Error(yr(1));let u;typeof r=="function"?u=r(e):u=e();let c=Td;i&&(c=Cx({trace:!1,...typeof i=="object"&&i}));const d=px(...u),h=Lx(d);let p=typeof o=="function"?o(h):h();const _=c(...p);return hI(a,s,_)}function SI(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(yr(28));if(a in e)throw new Error(yr(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function Vx(t){return typeof t=="function"}function Fx(t,e){let[n,r,i]=SI(e),s;if(Vx(t))s=()=>T0(t());else{const a=T0(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,h)=>{if(h)if(Ds(d)){const _=h(d,u);return _===void 0?d:_}else{if(Gr(d))return wI(d,p=>h(p,u));{const p=h(d,u);if(p===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}}return d},a)}return o.getInitialState=s,o}var Ux=(t,e)=>kx(t)?t.match(e):t(e);function jx(...t){return e=>t.some(n=>Ux(n,e))}var zx="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Bx=(t=21)=>{let e="",n=t;for(;n--;)e+=zx[Math.random()*64|0];return e},$x=["name","message","stack","code"],Hh=class{constructor(t,e){ph(this,"_type");this.payload=t,this.meta=e}},S0=class{constructor(t,e){ph(this,"_type");this.payload=t,this.meta=e}},Hx=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of $x)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},wu=(()=>{function t(e,n,r){const i=El(e+"/fulfilled",(u,c,d,h)=>({payload:u,meta:{...h||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),s=El(e+"/pending",(u,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:u,requestStatus:"pending"}})),o=El(e+"/rejected",(u,c,d,h,p)=>({payload:h,error:(r&&r.serializeError||Hx)(u||"Rejected"),meta:{...p||{},arg:d,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"}}));function a(u){return(c,d,h)=>{const p=r!=null&&r.idGenerator?r.idGenerator(u):Bx(),_=new AbortController;let S,P;function k(y){P=y,_.abort()}const T=async function(){var N,U;let y;try{let C=(N=r==null?void 0:r.condition)==null?void 0:N.call(r,u,{getState:d,extra:h});if(qx(C)&&(C=await C),C===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const E=new Promise((g,w)=>{S=()=>{w({name:"AbortError",message:P||"Aborted"})},_.signal.addEventListener("abort",S)});c(s(p,u,(U=r==null?void 0:r.getPendingMeta)==null?void 0:U.call(r,{requestId:p,arg:u},{getState:d,extra:h}))),y=await Promise.race([E,Promise.resolve(n(u,{dispatch:c,getState:d,extra:h,requestId:p,signal:_.signal,abort:k,rejectWithValue:(g,w)=>new Hh(g,w),fulfillWithValue:(g,w)=>new S0(g,w)})).then(g=>{if(g instanceof Hh)throw g;return g instanceof S0?i(g.payload,p,u,g.meta):i(g,p,u)})])}catch(C){y=C instanceof Hh?o(null,p,u,C.payload,C.meta):o(C,p,u)}finally{S&&_.signal.removeEventListener("abort",S)}return r&&!r.dispatchConditionRejection&&o.match(y)&&y.meta.condition||c(y),y}();return Object.assign(T,{abort:k,requestId:p,arg:u,unwrap(){return T.then(Wx)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:jx(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function Wx(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function qx(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Kx=Symbol.for("rtk-slice-createasyncthunk");function Gx(t,e){return`${t}/${e}`}function Qx({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[Kx];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(yr(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(Xx()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(I,N){const U=typeof I=="string"?I:I.type;if(!U)throw new Error(yr(12));if(U in c.sliceCaseReducersByType)throw new Error(yr(13));return c.sliceCaseReducersByType[U]=N,d},addMatcher(I,N){return c.sliceMatchers.push({matcher:I,reducer:N}),d},exposeAction(I,N){return c.actionCreators[I]=N,d},exposeCaseReducer(I,N){return c.sliceCaseReducersByName[I]=N,d}};u.forEach(I=>{const N=a[I],U={reducerName:I,type:Gx(s,I),createNotation:typeof i.reducers=="function"};Zx(N)?t2(U,N,d,e):Jx(U,N,d)});function h(){const[I={},N=[],U=void 0]=typeof i.extraReducers=="function"?SI(i.extraReducers):[i.extraReducers],C={...I,...c.sliceCaseReducersByType};return Fx(i.initialState,E=>{for(let g in C)E.addCase(g,C[g]);for(let g of c.sliceMatchers)E.addMatcher(g.matcher,g.reducer);for(let g of N)E.addMatcher(g.matcher,g.reducer);U&&E.addDefaultCase(U)})}const p=I=>I,_=new Map;let S;function P(I,N){return S||(S=h()),S(I,N)}function k(){return S||(S=h()),S.getInitialState()}function T(I,N=!1){function U(E){let g=E[I];return typeof g>"u"&&N&&(g=k()),g}function C(E=p){const g=I0(_,N,{insert:()=>new WeakMap});return I0(g,E,{insert:()=>{const w={};for(const[A,b]of Object.entries(i.selectors??{}))w[A]=Yx(b,E,k,N);return w}})}return{reducerPath:I,getSelectors:C,get selectors(){return C(U)},selectSlice:U}}const y={name:s,reducer:P,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:k,...T(o),injectInto(I,{reducerPath:N,...U}={}){const C=N??o;return I.inject({reducerPath:C,reducer:P},U),{...y,...T(C,!0)}}};return y}}function Yx(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var AI=Qx();function Xx(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function Jx({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!e2(r))throw new Error(yr(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?El(t,o):El(t))}function Zx(t){return t._reducerDefinitionType==="asyncThunk"}function e2(t){return t._reducerDefinitionType==="reducerWithPrepare"}function t2({type:t,reducerName:e},n,r,i){if(!i)throw new Error(yr(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:d}=n,h=i(t,s,d);r.exposeAction(e,h),o&&r.addCase(h.fulfilled,o),a&&r.addCase(h.pending,a),u&&r.addCase(h.rejected,u),c&&r.addMatcher(h.settled,c),r.exposeCaseReducer(e,{fulfilled:o||mc,pending:a||mc,rejected:u||mc,settled:c||mc})}function mc(){}function yr(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var A0={};/**
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
 */const RI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},PI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[d],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new r2;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const S=c<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i2=function(t){const e=RI(t);return PI.encodeByteArray(e,!0)},Rd=function(t){return i2(t).replace(/\./g,"")},CI=function(t){try{return PI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o2=()=>s2().__FIREBASE_DEFAULTS__,a2=()=>{if(typeof process>"u"||typeof A0>"u")return;const t=A0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CI(t[1]);return e&&JSON.parse(e)},wf=()=>{try{return o2()||a2()||l2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kI=t=>{var e,n;return(n=(e=wf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bI=t=>{const e=kI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xI=()=>{var t;return(t=wf())===null||t===void 0?void 0:t.config},NI=t=>{var e;return(e=wf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let u2=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function DI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rd(JSON.stringify(n)),Rd(JSON.stringify(o)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function d2(){var t;const e=(t=wf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h2(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function p2(){return!d2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LI(){try{return typeof indexedDB=="object"}catch{return!1}}function MI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function m2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const g2="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g2,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?y2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,r)}}function y2(t,e){return t.replace(v2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v2=/\{\$([^}]+)}/g;function _2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(R0(s)&&R0(o)){if(!Zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R0(t){return t!==null&&typeof t=="object"}/**
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
 */function Eu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function w2(t,e){const n=new E2(t,e);return n.subscribe.bind(n)}class E2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wh),i.error===void 0&&(i.error=Wh),i.complete===void 0&&(i.complete=Wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wh(){}/**
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
 */const I2=1e3,S2=2,A2=4*60*60*1e3,R2=.5;function P0(t,e=I2,n=S2){const r=e*Math.pow(n,t),i=Math.round(R2*r*(Math.random()-.5)*2);return Math.min(A2,r+i)}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cs="[DEFAULT]";/**
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
 */class P2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new u2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k2(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:C2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C2(t){return t===cs?void 0:t}function k2(t){return t.instantiationMode==="EAGER"}/**
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
 */class b2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const x2={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},N2=ye.INFO,D2={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},O2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=D2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=N2,this._logHandler=O2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?x2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const L2=(t,e)=>e.some(n=>t instanceof n);let C0,k0;function M2(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V2(){return k0||(k0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VI=new WeakMap,mm=new WeakMap,FI=new WeakMap,qh=new WeakMap,sy=new WeakMap;function F2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Di(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VI.set(n,t)}).catch(()=>{}),sy.set(e,t),e}function U2(t){if(mm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mm.set(t,e)}let gm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Di(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j2(t){gm=t(gm)}function z2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kh(this),e,...n);return FI.set(r,e.sort?e.sort():[e]),Di(r)}:V2().includes(t)?function(...e){return t.apply(Kh(this),e),Di(VI.get(this))}:function(...e){return Di(t.apply(Kh(this),e))}}function B2(t){return typeof t=="function"?z2(t):(t instanceof IDBTransaction&&U2(t),L2(t,M2())?new Proxy(t,gm):t)}function Di(t){if(t instanceof IDBRequest)return F2(t);if(qh.has(t))return qh.get(t);const e=B2(t);return e!==t&&(qh.set(t,e),sy.set(e,t)),e}const Kh=t=>sy.get(t);function UI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Di(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Di(o.result),u.oldVersion,u.newVersion,Di(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $2=["get","getKey","getAll","getAllKeys","count"],H2=["put","add","delete","clear"],Gh=new Map;function b0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=H2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Gh.set(e,s),s}j2(t=>({...t,get:(e,n,r)=>b0(e,n)||t.get(e,n,r),has:(e,n)=>!!b0(e,n)||t.has(e,n)}));/**
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
 */class W2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function q2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ym="@firebase/app",x0="0.10.7";/**
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
 */const Ls=new Ef("@firebase/app"),K2="@firebase/app-compat",G2="@firebase/analytics-compat",Q2="@firebase/analytics",Y2="@firebase/app-check-compat",X2="@firebase/app-check",J2="@firebase/auth",Z2="@firebase/auth-compat",eN="@firebase/database",tN="@firebase/database-compat",nN="@firebase/functions",rN="@firebase/functions-compat",iN="@firebase/installations",sN="@firebase/installations-compat",oN="@firebase/messaging",aN="@firebase/messaging-compat",lN="@firebase/performance",uN="@firebase/performance-compat",cN="@firebase/remote-config",dN="@firebase/remote-config-compat",fN="@firebase/storage",hN="@firebase/storage-compat",pN="@firebase/firestore",mN="@firebase/vertexai-preview",gN="@firebase/firestore-compat",yN="firebase",vN="10.12.4";/**
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
 */const vm="[DEFAULT]",_N={[ym]:"fire-core",[K2]:"fire-core-compat",[Q2]:"fire-analytics",[G2]:"fire-analytics-compat",[X2]:"fire-app-check",[Y2]:"fire-app-check-compat",[J2]:"fire-auth",[Z2]:"fire-auth-compat",[eN]:"fire-rtdb",[tN]:"fire-rtdb-compat",[nN]:"fire-fn",[rN]:"fire-fn-compat",[iN]:"fire-iid",[sN]:"fire-iid-compat",[oN]:"fire-fcm",[aN]:"fire-fcm-compat",[lN]:"fire-perf",[uN]:"fire-perf-compat",[cN]:"fire-rc",[dN]:"fire-rc-compat",[fN]:"fire-gcs",[hN]:"fire-gcs-compat",[pN]:"fire-fst",[gN]:"fire-fst-compat",[mN]:"fire-vertex","fire-js":"fire-js",[yN]:"fire-js-all"};/**
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
 */const Pd=new Map,wN=new Map,_m=new Map;function N0(t,e){try{t.container.addComponent(e)}catch(n){Ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(_m.has(e))return Ls.debug(`There were multiple attempts to register component ${e}.`),!1;_m.set(e,t);for(const n of Pd.values())N0(n,t);for(const n of wN.values())N0(n,t);return!0}function Xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vr(t){return t.settings!==void 0}/**
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
 */const EN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oi=new Qs("app","Firebase",EN);/**
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
 */class TN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=vN;function jI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Oi.create("bad-app-name",{appName:String(i)});if(n||(n=xI()),!n)throw Oi.create("no-options");const s=Pd.get(i);if(s){if(Zl(n,s.options)&&Zl(r,s.config))return s;throw Oi.create("duplicate-app",{appName:i})}const o=new b2(i);for(const u of _m.values())o.addComponent(u);const a=new TN(n,r,o);return Pd.set(i,a),a}function Tf(t=vm){const e=Pd.get(t);if(!e&&t===vm&&xI())return jI();if(!e)throw Oi.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=_N[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ls.warn(a.join(" "));return}tr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const IN="firebase-heartbeat-database",SN=1,eu="firebase-heartbeat-store";let Qh=null;function zI(){return Qh||(Qh=UI(IN,SN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Oi.create("idb-open",{originalErrorMessage:t.message})})),Qh}async function AN(t){try{const n=(await zI()).transaction(eu),r=await n.objectStore(eu).get(BI(t));return await n.done,r}catch(e){if(e instanceof jn)Ls.warn(e.message);else{const n=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ls.warn(n.message)}}}async function D0(t,e){try{const r=(await zI()).transaction(eu,"readwrite");await r.objectStore(eu).put(e,BI(t)),await r.done}catch(n){if(n instanceof jn)Ls.warn(n.message);else{const r=Oi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ls.warn(r.message)}}}function BI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RN=1024,PN=30*24*60*60*1e3;class CN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=O0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=PN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=O0(),{heartbeatsToSend:r,unsentEntries:i}=kN(this._heartbeatsCache.heartbeats),s=Rd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function O0(){return new Date().toISOString().substring(0,10)}function kN(t,e=RN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LI()?MI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L0(t){return Rd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xN(t){tr(new Fn("platform-logger",e=>new W2(e),"PRIVATE")),tr(new Fn("heartbeat",e=>new CN(e),"PRIVATE")),on(ym,x0,t),on(ym,x0,"esm2017"),on("fire-js","")}xN("");var M0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,$I;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function w(){}w.prototype=g.prototype,E.D=g.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(A,b,O){for(var R=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)R[Re-2]=arguments[Re];return g.prototype[b].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,w){w||(w=0);var A=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)A[b]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=E.g[0],w=E.g[1],b=E.g[2];var O=E.g[3],R=g+(O^w&(b^O))+A[0]+3614090360&4294967295;g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[1]+3905402710&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[2]+606105819&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[3]+3250441966&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(O^w&(b^O))+A[4]+4118548399&4294967295,g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[5]+1200080426&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[6]+2821735955&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[7]+4249261313&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(O^w&(b^O))+A[8]+1770035416&4294967295,g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[9]+2336552879&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[10]+4294925233&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[11]+2304563134&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(O^w&(b^O))+A[12]+1804603682&4294967295,g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[13]+4254626195&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[14]+2792965006&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[15]+1236535329&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(b^O&(w^b))+A[1]+4129170786&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[6]+3225465664&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[11]+643717713&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[0]+3921069994&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(b^O&(w^b))+A[5]+3593408605&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[10]+38016083&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[15]+3634488961&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[4]+3889429448&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(b^O&(w^b))+A[9]+568446438&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[14]+3275163606&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[3]+4107603335&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[8]+1163531501&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(b^O&(w^b))+A[13]+2850285829&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[2]+4243563512&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[7]+1735328473&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[12]+2368359562&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(w^b^O)+A[5]+4294588738&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[8]+2272392833&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[11]+1839030562&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[14]+4259657740&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(w^b^O)+A[1]+2763975236&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[4]+1272893353&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[7]+4139469664&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[10]+3200236656&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(w^b^O)+A[13]+681279174&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[0]+3936430074&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[3]+3572445317&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[6]+76029189&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(w^b^O)+A[9]+3654602809&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[12]+3873151461&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[15]+530742520&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[2]+3299628645&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(b^(w|~O))+A[0]+4096336452&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[7]+1126891415&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[14]+2878612391&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[5]+4237533241&4294967295,w=b+(R<<21&4294967295|R>>>11),R=g+(b^(w|~O))+A[12]+1700485571&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[3]+2399980690&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[10]+4293915773&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[1]+2240044497&4294967295,w=b+(R<<21&4294967295|R>>>11),R=g+(b^(w|~O))+A[8]+1873313359&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[15]+4264355552&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[6]+2734768916&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[13]+1309151649&4294967295,w=b+(R<<21&4294967295|R>>>11),R=g+(b^(w|~O))+A[4]+4149444226&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[11]+3174756917&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[2]+718787259&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+O&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var w=g-this.blockSize,A=this.B,b=this.h,O=0;O<g;){if(b==0)for(;O<=w;)i(this,E,O),O+=this.blockSize;if(typeof E=="string"){for(;O<g;)if(A[b++]=E.charCodeAt(O++),b==this.blockSize){i(this,A),b=0;break}}else for(;O<g;)if(A[b++]=E[O++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var w=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=w&255,w/=256;for(this.u(E),E=Array(16),g=w=0;4>g;++g)for(var A=0;32>A;A+=8)E[w++]=this.g[g]>>>A&255;return E};function s(E,g){var w=a;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=g(E)}function o(E,g){this.h=g;for(var w=[],A=!0,b=E.length-1;0<=b;b--){var O=E[b]|0;A&&O==g||(w[b]=O,A=!1)}this.g=w}var a={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return h;if(0>E)return k(c(-E));for(var g=[],w=1,A=0;E>=w;A++)g[A]=E/w|0,w*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return k(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),A=h,b=0;b<E.length;b+=8){var O=Math.min(8,E.length-b),R=parseInt(E.substring(b,b+O),g);8>O?(O=c(Math.pow(g,O)),A=A.j(O).add(c(R))):(A=A.j(w),A=A.add(c(R)))}return A}var h=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();for(var E=0,g=1,w=0;w<this.g.length;w++){var A=this.i(w);E+=(0<=A?A:4294967296+A)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(P(this))return"-"+k(this).toString(E);for(var g=c(Math.pow(E,6)),w=this,A="";;){var b=N(w,g).g;w=T(w,b.j(g));var O=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=b,S(w))return O+A;for(;6>O.length;)O="0"+O;A=O+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=T(this,E),P(E)?-1:S(E)?0:1};function k(E){for(var g=E.g.length,w=[],A=0;A<g;A++)w[A]=~E.g[A];return new o(w,~E.h).add(p)}t.abs=function(){return P(this)?k(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0,b=0;b<=g;b++){var O=A+(this.i(b)&65535)+(E.i(b)&65535),R=(O>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);A=R>>>16,O&=65535,R&=65535,w[b]=R<<16|O}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(E,g){return E.add(k(g))}t.j=function(E){if(S(this)||S(E))return h;if(P(this))return P(E)?k(this).j(k(E)):k(k(this).j(E));if(P(E))return k(this.j(k(E)));if(0>this.l(_)&&0>E.l(_))return c(this.m()*E.m());for(var g=this.g.length+E.g.length,w=[],A=0;A<2*g;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<E.g.length;b++){var O=this.i(A)>>>16,R=this.i(A)&65535,Re=E.i(b)>>>16,Zt=E.i(b)&65535;w[2*A+2*b]+=R*Zt,y(w,2*A+2*b),w[2*A+2*b+1]+=O*Zt,y(w,2*A+2*b+1),w[2*A+2*b+1]+=R*Re,y(w,2*A+2*b+1),w[2*A+2*b+2]+=O*Re,y(w,2*A+2*b+2)}for(A=0;A<g;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=g;A<2*g;A++)w[A]=0;return new o(w,0)};function y(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function I(E,g){this.g=E,this.h=g}function N(E,g){if(S(g))throw Error("division by zero");if(S(E))return new I(h,h);if(P(E))return g=N(k(E),g),new I(k(g.g),k(g.h));if(P(g))return g=N(E,k(g)),new I(k(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=p,A=g;0>=A.l(E);)w=U(w),A=U(A);var b=C(w,1),O=C(A,1);for(A=C(A,2),w=C(w,2);!S(A);){var R=O.add(A);0>=R.l(E)&&(b=b.add(w),O=R),A=C(A,1),w=C(w,1)}return g=T(E,b.j(g)),new I(b,g)}for(b=h;0<=E.l(g);){for(w=Math.max(1,Math.floor(E.m()/g.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),O=c(w),R=O.j(g);P(R)||0<R.l(E);)w-=A,O=c(w),R=O.j(g);S(O)&&(O=p),b=b.add(O),E=T(E,R)}return new I(b,E)}t.A=function(E){return N(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)&E.i(A);return new o(w,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)|E.i(A);return new o(w,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)^E.i(A);return new o(w,this.h^E.h)};function U(E){for(var g=E.g.length+1,w=[],A=0;A<g;A++)w[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(w,E.h)}function C(E,g){var w=g>>5;g%=32;for(var A=E.g.length-w,b=[],O=0;O<A;O++)b[O]=0<g?E.i(O+w)>>>g|E.i(O+w+1)<<32-g:E.i(O+w);return new o(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$I=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Is=o}).apply(typeof M0<"u"?M0:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HI,WI,ol,qI,Uc,wm,KI,GI,QI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var L=l[v];if(!(L in m))break e;m=m[L]}l=l[l.length-1],v=m[l],f=f(v),f!=v&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,v=!1,L={next:function(){if(!v&&m<l.length){var F=m++;return{value:f(F,l[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,m){return l.call.apply(l.bind,arguments)}function h(l,f,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,p.apply(null,arguments)}function _(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function S(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,L,F){for(var q=Array(arguments.length-2),De=2;De<arguments.length;De++)q[De-2]=arguments[De];return f.prototype[L].apply(v,q)}}function P(l){const f=l.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=l[v];return m}return[]}function k(l,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(u(v)){const L=l.length||0,F=v.length||0;l.length=L+F;for(let q=0;q<F;q++)l[L+q]=v[q]}else l.push(v)}}class T{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var U=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function C(l,f,m){for(const v in l)f.call(m,l[v],v,l)}function E(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function g(l){const f={};for(const m in l)f[m]=l[m];return f}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)l[m]=v[m];for(let F=0;F<w.length;F++)m=w[F],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function b(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function O(l){a.setTimeout(()=>{throw l},0)}function R(){var l=re;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Re{constructor(){this.h=this.g=null}add(f,m){const v=Zt.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var Zt=new T(()=>new rr,l=>l.reset());class rr{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,G=!1,re=new Re,oe=()=>{const l=a.Promise.resolve(void 0);Pe=()=>{l.then(Te)}};var Te=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){O(m)}var f=Zt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}G=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var ct=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function Et(l,f){if(Ne.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(U){e:{try{N(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Tt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Et.aa.h.call(this)}}S(Et,Ne);var Tt={2:"touch",3:"pen",4:"mouse"};Et.prototype.h=function(){Et.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var zn="closure_listenable_"+(1e6*Math.random()|0),Ta=0;function ih(l,f,m,v,L){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=L,this.key=++Ta,this.da=this.fa=!1}function Zs(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function eo(l){this.src=l,this.g={},this.h=0}eo.prototype.add=function(l,f,m,v,L){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var q=ir(l,f,v,L);return-1<q?(f=l[q],m||(f.fa=!1)):(f=new ih(f,this.src,F,!!v,L),f.fa=m,l.push(f)),f};function dt(l,f){var m=f.type;if(m in l.g){var v=l.g[m],L=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(Zs(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function ir(l,f,m,v){for(var L=0;L<l.length;++L){var F=l[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return L}return-1}var to="closure_lm_"+(1e6*Math.random()|0),Ia={};function sr(l,f,m,v,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)sr(l,f[F],m,v,L);return null}return m=ri(m),l&&l[zn]?l.K(f,m,c(v)?!!v.capture:!!v,L):sh(l,f,m,!1,v,L)}function sh(l,f,m,v,L,F){if(!f)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,De=Ra(l);if(De||(l[to]=De=new eo(l)),m=De.add(f,m,v,q,F),m.proxy)return m;if(v=oh(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)ct||(L=q),L===void 0&&(L=!1),l.addEventListener(f.toString(),v,L);else if(l.attachEvent)l.attachEvent(Fu(f.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function oh(){function l(m){return f.call(l.src,l.listener,m)}const f=ah;return l}function Sa(l,f,m,v,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Sa(l,f[F],m,v,L);else v=c(v)?!!v.capture:!!v,m=ri(m),l&&l[zn]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],m=ir(F,m,v,L),-1<m&&(Zs(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=Ra(l))&&(f=l.g[f.toString()],l=-1,f&&(l=ir(f,m,v,L)),(m=-1<l?f[l]:null)&&Aa(m))}function Aa(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[zn])dt(f.i,l);else{var m=l.type,v=l.proxy;f.removeEventListener?f.removeEventListener(m,v,l.capture):f.detachEvent?f.detachEvent(Fu(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=Ra(f))?(dt(m,l),m.h==0&&(m.src=null,f[to]=null)):Zs(l)}}}function Fu(l){return l in Ia?Ia[l]:Ia[l]="on"+l}function ah(l,f){if(l.da)l=!0;else{f=new Et(f,this);var m=l.listener,v=l.ha||l.src;l.fa&&Aa(l),l=m.call(v,f)}return l}function Ra(l){return l=l[to],l instanceof eo?l:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function ri(l){return typeof l=="function"?l:(l[Ar]||(l[Ar]=function(f){return l.handleEvent(f)}),l[Ar])}function ft(){ve.call(this),this.i=new eo(this),this.M=this,this.F=null}S(ft,ve),ft.prototype[zn]=!0,ft.prototype.removeEventListener=function(l,f,m,v){Sa(this,l,f,m,v)};function ht(l,f){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=f.type||f,typeof f=="string")f=new Ne(f,l);else if(f instanceof Ne)f.target=f.target||l;else{var L=f;f=new Ne(v,l),A(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var q=f.g=m[F];L=ln(q,v,!0,f)&&L}if(q=f.g=l,L=ln(q,v,!0,f)&&L,L=ln(q,v,!1,f)&&L,m)for(F=0;F<m.length;F++)q=f.g=m[F],L=ln(q,v,!1,f)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],v=0;v<m.length;v++)Zs(m[v]);delete l.g[f],l.h--}}this.F=null},ft.prototype.K=function(l,f,m,v){return this.i.add(String(l),f,!1,m,v)},ft.prototype.L=function(l,f,m,v){return this.i.add(String(l),f,!0,m,v)};function ln(l,f,m,v){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var q=f[F];if(q&&!q.da&&q.capture==m){var De=q.listener,St=q.ha||q.src;q.fa&&dt(l.i,q),L=De.call(St,v)!==!1&&L}}return L&&!v.defaultPrevented}function Cn(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Pa(l){l.g=Cn(()=>{l.g=null,l.i&&(l.i=!1,Pa(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class no extends ve{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Pa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(l){ve.call(this),this.h=l,this.g={}}S(ts,ve);var Bn=[];function Ca(l){C(l.g,function(f,m){this.g.hasOwnProperty(m)&&Aa(f)},l),l.g={}}ts.prototype.N=function(){ts.aa.N.call(this),Ca(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ro=a.JSON.stringify,Uu=a.JSON.parse,lh=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function io(){}io.prototype.h=null;function ns(l){return l.h||(l.h=l.i())}function ka(){}var Rr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ii(){Ne.call(this,"d")}S(ii,Ne);function rs(){Ne.call(this,"c")}S(rs,Ne);var Pr={},ba=null;function so(){return ba=ba||new ft}Pr.La="serverreachability";function xa(l){Ne.call(this,Pr.La,l)}S(xa,Ne);function Cr(l){const f=so();ht(f,new xa(f))}Pr.STAT_EVENT="statevent";function is(l,f){Ne.call(this,Pr.STAT_EVENT,l),this.stat=f}S(is,Ne);function It(l){const f=so();ht(f,new is(f,l))}Pr.Ma="timingevent";function ju(l,f){Ne.call(this,Pr.Ma,l),this.size=f}S(ju,Ne);function x(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(l,f,m,v,L,F){l.info(function(){if(l.g)if(F)for(var q="",De=F.split("&"),St=0;St<De.length;St++){var Se=De[St].split("=");if(1<Se.length){var Lt=Se[0];Se=Se[1];var Mt=Lt.split("_");q=2<=Mt.length&&Mt[1]=="type"?q+(Lt+"="+Se+"&"):q+(Lt+"=redacted&")}}else q=null;else q=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+m+`
`+q})}function j(l,f,m,v,L,F,q){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+q})}function K(l,f,m,v){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+ie(l,m)+(v?" "+v:"")})}function Z(l,f){l.info(function(){return"TIMEOUT: "+f})}D.prototype.info=function(){};function ie(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return ro(m)}catch{return f}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ce={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function ee(){}S(ee,io),ee.prototype.g=function(){return new XMLHttpRequest},ee.prototype.i=function(){return{}},te=new ee;function he(l,f,m,v){this.j=l,this.i=f,this.l=m,this.R=v||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}var Ce={},we={};function rt(l,f,m){l.L=1,l.v=Hu(br(f)),l.m=m,l.P=!0,Ke(l,null)}function Ke(l,f){l.F=Date.now(),$n(l),l.A=br(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Mv(m.i,"t",v),l.C=0,m=l.j.J,l.h=new _e,l.g=e_(l.j,m?f:null,!l.m),0<l.O&&(l.M=new no(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,v=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Bn[0]=L.toString()),L=Bn);for(var F=0;F<L.length;F++){var q=sr(m,L[F],v||f.handleEvent,!1,f.h||f);if(!q)break;f.g[q.key]=q}f=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Cr(),M(l.i,l.u,l.A,l.l,l.R,l.m)}he.prototype.ca=function(l){l=l.target;const f=this.M;f&&xr(l)==3?f.j():this.Y(l)},he.prototype.Y=function(l){try{if(l==this.g)e:{const Mt=xr(this.g);var f=this.g.Ba();const uo=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||$v(this.g)))){this.J||Mt!=4||f==7||(f==8||0>=uo?Cr(3):Cr(2)),ar(this);var m=this.g.Z();this.X=m;t:if(si(this)){var v=$v(this.g);l="";var L=v.length,F=xr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),Dt(this);var q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(v[f],{stream:!(F&&f==L-1)});v.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,j(this.i,this.u,this.A,this.l,this.R,Mt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var De,St=this.g;if((De=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(De)){var Se=De;break t}}Se=null}if(m=Se)K(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oi(this,m);else{this.o=!1,this.s=3,It(12),kn(this),Dt(this);break e}}if(this.P){m=!0;let Hn;for(;!this.J&&this.C<q.length;)if(Hn=or(this,q),Hn==we){Mt==4&&(this.s=4,It(14),m=!1),K(this.i,this.l,null,"[Incomplete Response]");break}else if(Hn==Ce){this.s=4,It(15),K(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else K(this.i,this.l,Hn,null),oi(this,Hn);if(si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||q.length!=0||this.h.h||(this.s=1,It(16),m=!1),this.o=this.o&&m,!m)K(this.i,this.l,q,"[Invalid Chunked Response]"),kn(this),Dt(this);else if(0<q.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),fh(Lt),Lt.M=!0,It(11))}}else K(this.i,this.l,q,null),oi(this,q);Mt==4&&kn(this),this.o&&!this.J&&(Mt==4?Yv(this.j,this):(this.o=!1,$n(this)))}else uC(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),kn(this),Dt(this)}}}catch{}finally{}};function si(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function or(l,f){var m=l.C,v=f.indexOf(`
`,m);return v==-1?we:(m=Number(f.substring(m,v)),isNaN(m)?Ce:(v+=1,v+m>f.length?we:(f=f.slice(v,v+m),l.C=v+m,f)))}he.prototype.cancel=function(){this.J=!0,kn(this)};function $n(l){l.S=Date.now()+l.I,kr(l,l.I)}function kr(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=x(p(l.ba,l),f)}function ar(l){l.B&&(a.clearTimeout(l.B),l.B=null)}he.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Z(this.i,this.A),this.L!=2&&(Cr(),It(17)),kn(this),this.s=2,Dt(this)):kr(this,this.S-l)};function Dt(l){l.j.G==0||l.J||Yv(l.j,l)}function kn(l){ar(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ca(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function oi(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||ke(m.h,l))){if(!l.K&&ke(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Qu(m),Ku(m);else break e;dh(m),It(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=x(p(m.Za,m),6e3));if(1>=Ot(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else os(m,11)}else if((l.K||m.g==l)&&Qu(m),!y(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Se=L[f];if(m.T=Se[0],Se=Se[1],m.G==2)if(Se[0]=="c"){m.K=Se[1],m.ia=Se[2];const Lt=Se[3];Lt!=null&&(m.la=Lt,m.j.info("VER="+m.la));const Mt=Se[4];Mt!=null&&(m.Aa=Mt,m.j.info("SVER="+m.Aa));const uo=Se[5];uo!=null&&typeof uo=="number"&&0<uo&&(v=1.5*uo,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const Hn=l.g;if(Hn){const Xu=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xu){var F=v.h;F.g||Xu.indexOf("spdy")==-1&&Xu.indexOf("quic")==-1&&Xu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(un(F,F.h),F.h=null))}if(v.D){const hh=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;hh&&(v.ya=hh,Fe(v.I,v.D,hh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var q=l;if(v.qa=Zv(v,v.J?v.ia:null,v.W),q.K){Na(v.h,q);var De=q,St=v.L;St&&(De.I=St),De.B&&(ar(De),$n(De)),v.g=q}else Gv(v);0<m.i.length&&Gu(m)}else Se[0]!="stop"&&Se[0]!="close"||os(m,7);else m.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?os(m,7):ch(m):Se[0]!="noop"&&m.l&&m.l.ta(Se),m.v=0)}}Cr(4)}catch{}}var oo=class{constructor(l,f){this.g=l,this.map=f}};function de(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ve(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ot(l){return l.h?1:l.g?l.g.size:0}function ke(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function un(l,f){l.g?l.g.add(f):l.h=f}function Na(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}de.prototype.cancel=function(){if(this.i=zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function zu(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return P(l.i)}function GP(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,v=0;v<m;v++)f.push(l[v]);return f}f=[],m=0;for(v in l)f[m++]=l[v];return f}function QP(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const v in l)f[m++]=v;return f}}}function bv(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=QP(l),v=GP(l),L=v.length,F=0;F<L;F++)f.call(void 0,v[F],m&&m[F],l)}var xv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YP(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),L=null;if(0<=v){var F=l[m].substring(0,v);L=l[m].substring(v+1)}else F=l[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ss(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ss){this.h=l.h,Bu(this,l.j),this.o=l.o,this.g=l.g,$u(this,l.s),this.l=l.l;var f=l.i,m=new La;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Nv(this,m),this.m=l.m}else l&&(f=String(l).match(xv))?(this.h=!1,Bu(this,f[1]||"",!0),this.o=Da(f[2]||""),this.g=Da(f[3]||"",!0),$u(this,f[4]),this.l=Da(f[5]||"",!0),Nv(this,f[6]||"",!0),this.m=Da(f[7]||"")):(this.h=!1,this.i=new La(null,this.h))}ss.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Oa(f,Dv,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Oa(f,Dv,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Oa(m,m.charAt(0)=="/"?ZP:JP,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Oa(m,tC)),l.join("")};function br(l){return new ss(l)}function Bu(l,f,m){l.j=m?Da(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function $u(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Nv(l,f,m){f instanceof La?(l.i=f,nC(l.i,l.h)):(m||(f=Oa(f,eC)),l.i=new La(f,l.h))}function Fe(l,f,m){l.i.set(f,m)}function Hu(l){return Fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Da(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Oa(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,XP),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function XP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Dv=/[#\/\?@]/g,JP=/[#\?:]/g,ZP=/[#\?]/g,eC=/[#\?@]/g,tC=/#/g;function La(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function ai(l){l.g||(l.g=new Map,l.h=0,l.i&&YP(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=La.prototype,t.add=function(l,f){ai(this),this.i=null,l=ao(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function Ov(l,f){ai(l),f=ao(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Lv(l,f){return ai(l),f=ao(l,f),l.g.has(f)}t.forEach=function(l,f){ai(this),this.g.forEach(function(m,v){m.forEach(function(L){l.call(f,L,v,this)},this)},this)},t.na=function(){ai(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const L=l[v];for(let F=0;F<L.length;F++)m.push(f[v])}return m},t.V=function(l){ai(this);let f=[];if(typeof l=="string")Lv(this,l)&&(f=f.concat(this.g.get(ao(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return ai(this),this.i=null,l=ao(this,l),Lv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mv(l,f,m){Ov(l,f),0<m.length&&(l.i=null,l.g.set(ao(l,f),P(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),q=this.V(v);for(v=0;v<q.length;v++){var L=F;q[v]!==""&&(L+="="+encodeURIComponent(String(q[v]))),l.push(L)}}return this.i=l.join("&")};function ao(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function nC(l,f){f&&!l.j&&(ai(l),l.i=null,l.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(Ov(this,v),Mv(this,L,m))},l)),l.j=f}function rC(l,f){const m=new D;if(a.Image){const v=new Image;v.onload=_(li,m,"TestLoadImage: loaded",!0,f,v),v.onerror=_(li,m,"TestLoadImage: error",!1,f,v),v.onabort=_(li,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=_(li,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else f(!1)}function iC(l,f){const m=new D,v=new AbortController,L=setTimeout(()=>{v.abort(),li(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?li(m,"TestPingServer: ok",!0,f):li(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),li(m,"TestPingServer: error",!1,f)})}function li(l,f,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function sC(){this.g=new lh}function oC(l,f,m){const v=m||"";try{bv(l,function(L,F){let q=L;c(L)&&(q=ro(L)),f.push(v+F+"="+encodeURIComponent(q))})}catch(L){throw f.push(v+"type="+encodeURIComponent("_badmap")),L}}function Ma(l){this.l=l.Ub||null,this.j=l.eb||!1}S(Ma,io),Ma.prototype.g=function(){return new Wu(this.l,this.j)},Ma.prototype.i=function(l){return function(){return l}}({});function Wu(l,f){ft.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Wu,ft),t=Wu.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Fa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fa(this)),this.g&&(this.readyState=3,Fa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Va(this):Fa(this),this.readyState==3&&Vv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Va(this))},t.Qa=function(l){this.g&&(this.response=l,Va(this))},t.ga=function(){this.g&&Va(this)};function Va(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Fa(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Fa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Fv(l){let f="";return C(l,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function uh(l,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Fv(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Fe(l,f,m))}function Ze(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ze,ft);var aC=/^https?$/i,lC=["POST","PUT"];t=Ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?ns(this.o):ns(te),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){Uv(this,F);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(lC,f,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,q]of m)this.g.setRequestHeader(F,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bv(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Uv(this,F)}};function Uv(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,jv(l),qu(l)}function jv(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),qu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qu(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zv(this):this.bb())},t.bb=function(){zv(this)};function zv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||xr(l)!=4||l.Z()!=2)){if(l.u&&xr(l)==4)Cn(l.Ea,0,l);else if(ht(l,"readystatechange"),xr(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=q===0){var L=String(l.D).match(xv)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!aC.test(L?L.toLowerCase():"")}m=v}if(m)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var F=2<xr(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",jv(l)}}finally{qu(l)}}}}function qu(l,f){if(l.g){Bv(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ht(l,"ready");try{m.onreadystatechange=v}catch{}}}function Bv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function xr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<xr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Uu(f)}};function $v(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function uC(l){const f={};l=(l.g&&2<=xr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(y(l[v]))continue;var m=b(l[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}E(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ua(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Hv(l){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ua("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ua("baseRetryDelayMs",5e3,l),this.cb=Ua("retryDelaySeedMs",1e4,l),this.Wa=Ua("forwardChannelMaxRetries",2,l),this.wa=Ua("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new de(l&&l.concurrentRequestLimit),this.Da=new sC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hv.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,v){It(0),this.W=l,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Zv(this,null,this.W),Gu(this)};function ch(l){if(Wv(l),l.G==3){var f=l.U++,m=br(l.I);if(Fe(m,"SID",l.K),Fe(m,"RID",f),Fe(m,"TYPE","terminate"),ja(l,m),f=new he(l,l.j,f),f.L=2,f.v=Hu(br(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=e_(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$n(f)}Jv(l)}function Ku(l){l.g&&(fh(l),l.g.cancel(),l.g=null)}function Wv(l){Ku(l),l.u&&(a.clearTimeout(l.u),l.u=null),Qu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Gu(l){if(!Ve(l.h)&&!l.s){l.s=!0;var f=l.Ga;Pe||oe(),G||(Pe(),G=!0),re.add(f,l),l.B=0}}function cC(l,f){return Ot(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=x(p(l.Ga,l,f),Xv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new he(this,this.j,l);let F=this.o;if(this.S&&(F?(F=g(F),A(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Kv(this,L,f),m=br(this.I),Fe(m,"RID",l),Fe(m,"CVER",22),this.D&&Fe(m,"X-HTTP-Session-Id",this.D),ja(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Fv(F)))+"&"+f:this.m&&uh(m,this.m,F)),un(this.h,L),this.Ua&&Fe(m,"TYPE","init"),this.P?(Fe(m,"$req",f),Fe(m,"SID","null"),L.T=!0,rt(L,m,null)):rt(L,m,f),this.G=2}}else this.G==3&&(l?qv(this,l):this.i.length==0||Ve(this.h)||qv(this))};function qv(l,f){var m;f?m=f.l:m=l.U++;const v=br(l.I);Fe(v,"SID",l.K),Fe(v,"RID",m),Fe(v,"AID",l.T),ja(l,v),l.m&&l.o&&uh(v,l.m,l.o),m=new he(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Kv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),un(l.h,m),rt(m,v,f)}function ja(l,f){l.H&&C(l.H,function(m,v){Fe(f,v,m)}),l.l&&bv({},function(m,v){Fe(f,v,m)})}function Kv(l,f,m){m=Math.min(l.i.length,m);var v=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let F=-1;for(;;){const q=["count="+m];F==-1?0<m?(F=L[0].g,q.push("ofs="+F)):F=0:q.push("ofs="+F);let De=!0;for(let St=0;St<m;St++){let Se=L[St].g;const Lt=L[St].map;if(Se-=F,0>Se)F=Math.max(0,L[St].g-100),De=!1;else try{oC(Lt,q,"req"+Se+"_")}catch{v&&v(Lt)}}if(De){v=q.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,v}function Gv(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Pe||oe(),G||(Pe(),G=!0),re.add(f,l),l.v=0}}function dh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=x(p(l.Fa,l),Xv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Qv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=x(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ku(this),Qv(this))};function fh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Qv(l){l.g=new he(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=br(l.qa);Fe(f,"RID","rpc"),Fe(f,"SID",l.K),Fe(f,"AID",l.T),Fe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Fe(f,"TO",l.ja),Fe(f,"TYPE","xmlhttp"),ja(l,f),l.m&&l.o&&uh(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Hu(br(f)),m.m=null,m.P=!0,Ke(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ku(this),dh(this),It(19))};function Qu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Yv(l,f){var m=null;if(l.g==f){Qu(l),fh(l),l.g=null;var v=2}else if(ke(l.h,f))m=f.D,Na(l.h,f),v=1;else return;if(l.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;v=so(),ht(v,new ju(v,m)),Gu(l)}else Gv(l);else if(L=f.s,L==3||L==0&&0<f.X||!(v==1&&cC(l,f)||v==2&&dh(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),L){case 1:os(l,5);break;case 4:os(l,10);break;case 3:os(l,6);break;default:os(l,2)}}}function Xv(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function os(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),v=l.Xa;const L=!v;v=new ss(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Bu(v,"https"),Hu(v),L?rC(v.toString(),m):iC(v.toString(),m)}else It(2);l.G=0,l.l&&l.l.sa(f),Jv(l),Wv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Jv(l){if(l.G=0,l.ka=[],l.l){const f=zu(l.h);(f.length!=0||l.i.length!=0)&&(k(l.ka,f),k(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function Zv(l,f,m){var v=m instanceof ss?br(m):new ss(m);if(v.g!="")f&&(v.g=f+"."+v.g),$u(v,v.s);else{var L=a.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new ss(null);v&&Bu(F,v),f&&(F.g=f),L&&$u(F,L),m&&(F.l=m),v=F}return m=l.D,f=l.ya,m&&f&&Fe(v,m,f),Fe(v,"VER",l.la),ja(l,v),v}function e_(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ze(new Ma({eb:m})):new Ze(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function t_(){}t=t_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yu(){}Yu.prototype.g=function(l,f){return new cn(l,f)};function cn(l,f){ft.call(this),this.g=new Hv(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!y(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new lo(this)}S(cn,ft),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){ch(this.g)},cn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=ro(l),l=m);f.i.push(new oo(f.Ya++,l)),f.G==3&&Gu(f)},cn.prototype.N=function(){this.g.l=null,delete this.j,ch(this.g),delete this.g,cn.aa.N.call(this)};function n_(l){ii.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}S(n_,ii);function r_(){rs.call(this),this.status=1}S(r_,rs);function lo(l){this.g=l}S(lo,t_),lo.prototype.ua=function(){ht(this.g,"a")},lo.prototype.ta=function(l){ht(this.g,new n_(l))},lo.prototype.sa=function(l){ht(this.g,new r_)},lo.prototype.ra=function(){ht(this.g,"b")},Yu.prototype.createWebChannel=Yu.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,QI=function(){return new Yu},GI=function(){return so()},KI=Pr,wm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,Uc=W,ce.COMPLETE="complete",qI=ce,ka.EventType=Rr,Rr.OPEN="a",Rr.CLOSE="b",Rr.ERROR="c",Rr.MESSAGE="d",ft.prototype.listen=ft.prototype.K,ol=ka,WI=Ma,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,HI=Ze}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const V0="@firebase/firestore";/**
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
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let fa="10.12.3";/**
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
 */const Ms=new Ef("@firebase/firestore");function Qa(){return Ms.logLevel}function X(t,...e){if(Ms.logLevel<=ye.DEBUG){const n=e.map(oy);Ms.debug(`Firestore (${fa}): ${t}`,...n)}}function Qr(t,...e){if(Ms.logLevel<=ye.ERROR){const n=e.map(oy);Ms.error(`Firestore (${fa}): ${t}`,...n)}}function Xo(t,...e){if(Ms.logLevel<=ye.WARN){const n=e.map(oy);Ms.warn(`Firestore (${fa}): ${t}`,...n)}}function oy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${fa}) INTERNAL ASSERTION FAILED: `+t;throw Qr(e),new Error(e)}function be(t,e){t||se()}function ue(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class YI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class DN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ON{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new jt(e)}}class LN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new VN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function UN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class XI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Jo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ye(0,0))}static max(){return new ae(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends tu{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const jN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends tu{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return jN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Q(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}function zN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Ui(i,ne.empty(),e)}function BN(t){return new Ui(t.readTime,t.key,-1)}class Ui{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ui(ae.min(),ne.empty(),-1)}static max(){return new Ui(ae.max(),ne.empty(),-1)}}function $N(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const HN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tu(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==HN)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Iu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ay.oe=-1;function Su(t){return t==null}function Cd(t){return t===0&&1/t==-1/0}function KN(t){return typeof t=="number"&&Number.isInteger(t)&&!Cd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function F0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=i??Pt.EMPTY,this.right=s??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new mn([])}unionWith(e){let n=new bt(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZI("Invalid base64 string: "+s):s}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const GN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(t){if(be(!!t),typeof t=="string"){let e=0;const n=GN.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
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
 */function ly(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uy(t){const e=t.mapValue.fields.__previous_value__;return ly(e)?uy(e):e}function nu(t){const e=ji(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class QN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ru{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ly(t)?4:YN(t)?9007199254740991:10:se()}function Er(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nu(t).isEqual(nu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ji(i.timestampValue),a=ji(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vs(i.bytesValue).isEqual(Vs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?Cd(o)===Cd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Jo(t.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(F0(o)!==F0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Er(o[u],a[u])))return!1;return!0}(t,e);default:return se()}}function iu(t,e){return(t.values||[]).find(n=>Er(n,e))!==void 0}function Zo(t,e){if(t===e)return 0;const n=Fs(t),r=Fs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),u=at(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(nu(t),nu(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vs(s),u=Vs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Ae(a[c],u[c]);if(d!==0)return d}return Ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ae(at(s.latitude),at(o.latitude));return a!==0?a:Ae(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Zo(a[c],u[c]);if(d)return d}return Ae(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===vc.mapValue&&o===vc.mapValue)return 0;if(s===vc.mapValue)return 1;if(o===vc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let h=0;h<u.length&&h<d.length;++h){const p=Ae(u[h],d[h]);if(p!==0)return p;const _=Zo(a[u[h]],c[d[h]]);if(_!==0)return _}return Ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw se()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=ji(t),r=ji(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function ea(t){return Em(t)}function Em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ji(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Em(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Em(n.fields[o])}`;return i+"}"}(t.mapValue):se()}function z0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tm(t){return!!t&&"integerValue"in t}function cy(t){return!!t&&"arrayValue"in t}function B0(t){return!!t&&"nullValue"in t}function $0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jc(t){return!!t&&"mapValue"in t}function Tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tl(n)}setAll(e){let n=Ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Tl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(Tl(this.value))}}function eS(t){const e=[];return Xs(t.fields,(n,r)=>{const i=new Ct([n]);if(jc(r)){const s=eS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mn(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ae.min(),ae.min(),ae.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,ae.min(),ae.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ae.min(),ae.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kd{constructor(e,n){this.position=e,this.inclusive=n}}function H0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Zo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function W0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class su{constructor(e,n="asc"){this.field=e,this.dir=n}}function XN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tS{}class ut extends tS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZN(e,n,r):n==="array-contains"?new nD(e,r):n==="in"?new rD(e,r):n==="not-in"?new iD(e,r):n==="array-contains-any"?new sD(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eD(e,r):new tD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zo(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(Zo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends tS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nr(e,n)}matches(e){return nS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nS(t){return t.op==="and"}function rS(t){return JN(t)&&nS(t)}function JN(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function Im(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+ea(t.value);if(rS(t))return t.filters.map(e=>Im(e)).join(",");{const e=t.filters.map(n=>Im(n)).join(",");return`${t.op}(${e})`}}function iS(t,e){return t instanceof ut?function(r,i){return i instanceof ut&&r.op===i.op&&r.field.isEqual(i.field)&&Er(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&iS(o,i.filters[a]),!0):!1}(t,e):void se()}function sS(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${ea(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(sS).join(" ,")+"}"}(t):"Filter"}class ZN extends ut{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class eD extends ut{constructor(e,n){super(e,"in",n),this.keys=oS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tD extends ut{constructor(e,n){super(e,"not-in",n),this.keys=oS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class nD extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cy(n)&&iu(n.arrayValue,this.value)}}class rD extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&iu(this.value.arrayValue,n)}}class iD extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!iu(this.value.arrayValue,n)}}class sD extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>iu(this.value.arrayValue,r))}}/**
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
 */class oD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function q0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oD(t,e,n,r,i,s,o)}function dy(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Im(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ea(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ea(r)).join(",")),e.ue=n}return e.ue}function fy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!W0(t.startAt,e.startAt)&&W0(t.endAt,e.endAt)}function Sm(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ha{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aD(t,e,n,r,i,s,o,a){return new ha(t,e,n,r,i,s,o,a)}function If(t){return new ha(t)}function K0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aS(t){return t.collectionGroup!==null}function Il(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new bt(Ct.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new su(s,r))}),n.has(Ct.keyField().canonicalString())||e.ce.push(new su(Ct.keyField(),r))}return e.ce}function _r(t){const e=ue(t);return e.le||(e.le=lD(e,Il(t))),e.le}function lD(t,e){if(t.limitType==="F")return q0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new su(i.field,s)});const n=t.endAt?new kd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kd(t.startAt.position,t.startAt.inclusive):null;return q0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Am(t,e){const n=t.filters.concat([e]);return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bd(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sf(t,e){return fy(_r(t),_r(e))&&t.limitType===e.limitType}function lS(t){return`${dy(_r(t))}|lt:${t.limitType}`}function ho(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sS(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ea(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ea(i)).join(",")),`Target(${r})`}(_r(t))}; limitType=${t.limitType})`}function Af(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Il(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Il(r),i)||r.endAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Il(r),i))}(t,e)}function uD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uS(t){return(e,n)=>{let r=!1;for(const i of Il(t)){const s=cD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cD(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Zo(u,c):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
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
 */class pa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
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
 */const dD=new Je(ne.comparator);function Yr(){return dD}const cS=new Je(ne.comparator);function al(...t){let e=cS;for(const n of t)e=e.insert(n.key,n);return e}function dS(t){let e=cS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return Sl()}function fS(){return Sl()}function Sl(){return new pa(t=>t.toString(),(t,e)=>t.isEqual(e))}const fD=new Je(ne.comparator),hD=new bt(ne.comparator);function ge(...t){let e=hD;for(const n of t)e=e.add(n);return e}const pD=new bt(Ae);function mD(){return pD}/**
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
 */function hS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cd(e)?"-0":e}}function pS(t){return{integerValue:""+t}}function gD(t,e){return KN(e)?pS(e):hS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this._=void 0}}function yD(t,e,n){return t instanceof xd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ly(s)&&(s=uy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ou?gS(t,e):t instanceof au?yS(t,e):function(i,s){const o=mS(i,s),a=G0(o)+G0(i.Pe);return Tm(o)&&Tm(i.Pe)?pS(a):hS(i.serializer,a)}(t,e)}function vD(t,e,n){return t instanceof ou?gS(t,e):t instanceof au?yS(t,e):n}function mS(t,e){return t instanceof Nd?function(r){return Tm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xd extends Rf{}class ou extends Rf{constructor(e){super(),this.elements=e}}function gS(t,e){const n=vS(e);for(const r of t.elements)n.some(i=>Er(i,r))||n.push(r);return{arrayValue:{values:n}}}class au extends Rf{constructor(e){super(),this.elements=e}}function yS(t,e){let n=vS(e);for(const r of t.elements)n=n.filter(i=>!Er(i,r));return{arrayValue:{values:n}}}class Nd extends Rf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function G0(t){return at(t.integerValue||t.doubleValue)}function vS(t){return cy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _D(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ou&&i instanceof ou||r instanceof au&&i instanceof au?Jo(r.elements,i.elements,Er):r instanceof Nd&&i instanceof Nd?Er(r.Pe,i.Pe):r instanceof xd&&i instanceof xd}(t.transform,e.transform)}class wD{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pf{}function _S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hy(t.key,Qt.none()):new Au(t.key,t.data,Qt.none());{const n=t.data,r=Gt.empty();let i=new bt(Ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ji(t.key,r,new mn(i.toArray()),Qt.none())}}function ED(t,e,n){t instanceof Au?function(i,s,o){const a=i.value.clone(),u=Y0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ji?function(i,s,o){if(!zc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Y0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Al(t,e,n,r){return t instanceof Au?function(s,o,a,u){if(!zc(s.precondition,o))return a;const c=s.value.clone(),d=X0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ji?function(s,o,a,u){if(!zc(s.precondition,o))return a;const c=X0(s.fieldTransforms,u,o),d=o.data;return d.setAll(wS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return zc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mS(r.transform,i||null);s!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,s))}return n||null}function Q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Jo(r,i,(s,o)=>_D(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Au extends Pf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ji extends Pf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Y0(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vD(o,a,n[i]))}return r}function X0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yD(s,o,e))}return r}class hy extends Pf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ES extends Pf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ID{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ED(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Al(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Al(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=_S(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Jo(this.mutations,e.mutations,(n,r)=>Q0(n,r))&&Jo(this.baseMutations,e.baseMutations,(n,r)=>Q0(n,r))}}class py{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){be(e.mutations.length===r.length);let i=function(){return fD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new py(e,n,r,i)}}/**
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
 */class SD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class AD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Ee;function TS(t){switch(t){default:return se();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function IS(t){if(t===void 0)return Qr("GRPC error has no .code"),B.UNKNOWN;switch(t){case st.OK:return B.OK;case st.CANCELLED:return B.CANCELLED;case st.UNKNOWN:return B.UNKNOWN;case st.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case st.INTERNAL:return B.INTERNAL;case st.UNAVAILABLE:return B.UNAVAILABLE;case st.UNAUTHENTICATED:return B.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case st.NOT_FOUND:return B.NOT_FOUND;case st.ALREADY_EXISTS:return B.ALREADY_EXISTS;case st.PERMISSION_DENIED:return B.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case st.ABORTED:return B.ABORTED;case st.OUT_OF_RANGE:return B.OUT_OF_RANGE;case st.UNIMPLEMENTED:return B.UNIMPLEMENTED;case st.DATA_LOSS:return B.DATA_LOSS;default:return se()}}(Ee=st||(st={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RD(){return new TextEncoder}/**
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
 */const PD=new Is([4294967295,4294967295],0);function J0(t){const e=RD().encode(t),n=new $I;return n.update(e),new Uint8Array(n.digest())}function Z0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Is([n,r],0),new Is([i,s],0)]}class my{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ll(`Invalid padding: ${n}`);if(r<0)throw new ll(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ll(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ll(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Is.fromNumber(r)));return i.compare(PD)===1&&(i=new Is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=J0(e),[r,i]=Z0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new my(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=J0(e),[r,i]=Z0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ll extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ru.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cf(ae.min(),i,new Je(Ae),Yr(),ge())}}class Ru{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ru(r,n,ge(),ge(),ge())}}/**
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
 */class Bc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class SS{constructor(e,n){this.targetId=e,this.me=n}}class AS{constructor(e,n,r=Ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ew{constructor(){this.fe=0,this.ge=nw(),this.pe=Ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new Ru(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=nw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yr(),this.qe=tw(),this.Qe=new Je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sm(s))if(r===0){const o=new ne(s.path);this.Ue(n,o,_t.newNoDocument(o,ae.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Vs(r).toUint8Array()}catch(u){if(u instanceof ZI)return Xo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new my(o,i,s)}catch(u){return Xo(u instanceof ll?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Sm(a.target)){const u=new ne(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Cf(e,n,this.Qe,this.ke,r);return this.ke=Yr(),this.qe=tw(),this.Qe=new Je(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ew,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new bt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ew),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function tw(){return new Je(ne.comparator)}function nw(){return new Je(ne.comparator)}const kD={asc:"ASCENDING",desc:"DESCENDING"},bD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xD={and:"AND",or:"OR"};class ND{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rm(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DD(t,e){return Dd(t,e.toTimestamp())}function vn(t){return be(!!t),ae.fromTimestamp(function(n){const r=ji(n);return new Ye(r.seconds,r.nanos)}(t))}function gy(t,e){return Pm(t,e).canonicalString()}function Pm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function PS(t){const e=Oe.fromString(t);return be(DS(e)),e}function Od(t,e){return gy(t.databaseId,e.path)}function Rl(t,e){const n=PS(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(kS(n))}function CS(t,e){return gy(t.databaseId,e)}function OD(t){const e=PS(t);return e.length===4?Oe.emptyPath():kS(e)}function Cm(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kS(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rw(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function LD(t,e){return"found"in e?function(r,i){be(!!i.found),i.found.name,i.found.updateTime;const s=Rl(r,i.found.name),o=vn(i.found.updateTime),a=i.found.createTime?vn(i.found.createTime):ae.min(),u=new Gt({mapValue:{fields:i.found.fields}});return _t.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){be(!!i.missing),be(!!i.readTime);const s=Rl(r,i.missing),o=vn(i.readTime);return _t.newNoDocument(s,o)}(t,e):se()}function MD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(be(d===void 0||typeof d=="string"),Ht.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?B.UNKNOWN:IS(c.code);return new Q(d,c.message||"")}(o);n=new AS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rl(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ae.min(),a=new Gt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Bc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rl(t,r.document),s=r.readTime?vn(r.readTime):ae.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rl(t,r.document),s=r.removedTargetIds||[];n=new Bc([],s,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AD(i,s),a=r.targetId;n=new SS(a,o)}}return n}function bS(t,e){let n;if(e instanceof Au)n={update:rw(t,e.key,e.value)};else if(e instanceof hy)n={delete:Od(t,e.key)};else if(e instanceof Ji)n={update:rw(t,e.key,e.data),updateMask:WD(e.fieldMask)};else{if(!(e instanceof ES))return se();n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ou)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof au)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function VD(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(ae.min())&&(o=vn(s)),new wD(o,i.transformResults||[])}(n,e))):[]}function FD(t,e){return{documents:[CS(t,e.path)]}}function UD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CS(t,i);const s=function(c){if(c.length!==0)return NS(nr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:po(p.field),direction:BD(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function jD(t){let e=OD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(h){const p=xS(h);return p instanceof nr&&rS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(S){return new su(mo(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Su(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,_=h.values||[];return new kd(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,_=h.values||[];return new kd(_,p)}(n.endAt)),aD(e,i,o,s,a,"F",u,c)}function zD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mo(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mo(n.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mo(n.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mo(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return ut.create(mo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>xS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function BD(t){return kD[t]}function $D(t){return bD[t]}function HD(t){return xD[t]}function po(t){return{fieldPath:t.canonicalString()}}function mo(t){return Ct.fromServerFormat(t.fieldPath)}function NS(t){return t instanceof ut?function(n){if(n.op==="=="){if($0(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NAN"}};if(B0(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($0(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NOT_NAN"}};if(B0(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(n.field),op:$D(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(i=>NS(i));return r.length===1?r[0]:{compositeFilter:{op:HD(n.op),filters:r}}}(t):se()}function WD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function DS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ii{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qD{constructor(e){this.ct=e}}function KD(t){const e=jD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
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
 */class GD{constructor(){this._n=new QD}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ui.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class QD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new bt(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new bt(Oe.comparator)).toArray()}}/**
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
 */class ta{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ta(0)}static Ln(){return new ta(-1)}}/**
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
 */class YD{constructor(){this.changes=new pa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class XD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Al(r.mutation,i,mn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=gs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=al();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yr();const o=Sl(),a=function(){return Sl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ji)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Al(d.mutation,c,d.mutation.getFieldMask(),Ye.now())):o.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var h;return a.set(c,new XD(d,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sl();let i=new Je((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||mn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const h=(i.get(a.batchId)||ge()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,h=fS();d.forEach(p=>{if(!s.has(p)){const _=_S(n.get(p),r.get(p));_!==null&&h.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(gs());let a=-1,u=s;return o.next(c=>$.forEach(c,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ge())).next(d=>({batchId:a,changes:dS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=al();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=al();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,u=>{const c=function(h,p){return new ha(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let a=al();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Al(d.mutation,c,mn.empty(),Ye.now()),Af(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class ZD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:KD(i.bundledQuery),readTime:vn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class eO{constructor(){this.overlays=new Je(ne.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=gs(),s=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=gs(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=gs(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SD(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class yy{constructor(){this.Pr=new bt(yt.Ir),this.Tr=new bt(yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new yt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ne(new Oe([])),r=new yt(n,e),i=new yt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ne(new Oe([])),r=new yt(n,e),i=new yt(n,e+1);let s=ge();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new yt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ne.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||ne.comparator(e.key,n.key)}}/**
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
 */class tO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new bt(yt.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ID(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(Ae);return n.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new yt(new ne(s),0);let a=new bt(Ae);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new yt(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nO{constructor(e){this.vr=e,this.docs=function(){return new Je(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yr();const o=n.path,a=new ne(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$N(BN(d),r)<=0||(i.has(d.key)||Af(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rO(this)}getSize(e){return $.resolve(this.size)}}class rO extends YD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class iO{constructor(e){this.persistence=e,this.Mr=new pa(n=>dy(n),fy),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yy,this.targetCount=0,this.Lr=ta.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ta(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class sO{constructor(e,n){this.Br={},this.overlays={},this.kr=new ay(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new iO(this),this.indexManager=new GD,this.remoteDocumentCache=function(i){return new nO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new qD(n),this.$r=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new tO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new oO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class oO extends WN{constructor(e){super(),this.currentSequenceNumber=e}}class vy{constructor(e){this.persistence=e,this.zr=new yy,this.jr=null}static Hr(e){return new vy(e)}get Jr(){if(this.jr)return this.jr;throw se()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=ne.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class _y{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _y(e,n.fromCache,r,i)}}/**
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
 */class aO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return p2()?8:qN(Nt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aO;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Qa()<=ye.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ho(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Qa()<=ye.DEBUG&&X("QueryEngine","Query:",ho(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qa()<=ye.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ho(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(n))):$.resolve())}ji(e,n){if(K0(n))return $.resolve(null);let r=_r(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bd(n,null,"F"),r=_r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,bd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return K0(n)||i.isEqual(ae.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(Qa()<=ye.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ho(n)),this.es(e,o,n,zN(i,-1)).next(a=>a))})}Zi(e,n){let r=new bt(uS(e));return n.forEach((i,s)=>{Af(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Qa()<=ye.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ho(n)),this.zi.getDocumentsMatchingQuery(e,n,Ui.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Je(Ae),this.rs=new pa(s=>dy(s),fy),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function cO(t,e,n,r){return new uO(t,e,n,r)}async function OS(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ge();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function dO(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const h=c.batch,p=h.keys();let _=$.resolve();return p.forEach(S=>{_=_.next(()=>d.getEntry(u,S)).next(P=>{const k=c.docVersions.get(S);be(k!==null),P.version.compareTo(k)<0&&(h.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LS(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function fO(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,h)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Ht.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(h,_),function(P,k,T){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,_,d)&&a.push(n.Qr.updateTargetData(s,_))});let u=Yr(),c=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(hO(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ae.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function hO(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function pO(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mO(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ii(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function km(t,e,n){const r=ue(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Iu(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function iw(t,e,n){const r=ue(t);let i=ae.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const h=ue(u),p=h.rs.get(d);return p!==void 0?$.resolve(h.ns.get(p)):h.Qr.getTargetData(c,d)}(r,o,_r(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:ge())).next(a=>(gO(r,uD(e),a),{documents:a,hs:s})))}function gO(t,e,n){let r=t.ss.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class sw{constructor(){this.activeTargetIds=mD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yO{constructor(){this.no=new sw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new sw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vO{io(e){}shutdown(){}}/**
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
 */class ow{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _c=null;function Yh(){return _c===null?_c=function(){return 268435456+Math.round(2147483648*Math.random())}():_c++,"0x"+_c.toString(16)}/**
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
 */const _O={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Ut="WebChannelConnection";class EO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Yh(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Xo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=_O[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Yh();return new Promise((o,a)=>{const u=new HI;u.setWithCredentials(!0),u.listenOnce(qI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Uc.NO_ERROR:const d=u.getResponseJson();X(Ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Uc.TIMEOUT:X(Ut,`RPC '${e}' ${s} timed out`),a(new Q(B.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const h=u.getStatus();if(X(Ut,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const S=function(k){const T=k.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(T)>=0?T:B.UNKNOWN}(_.status);a(new Q(S,_.message))}else a(new Q(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Q(B.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{X(Ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(Ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Yh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QI(),a=GI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new WI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(Ut,`Creating RPC '${e}' stream ${i}: ${d}`,u);const h=o.createWebChannel(d,u);let p=!1,_=!1;const S=new wO({lo:k=>{_?X(Ut,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(X(Ut,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),X(Ut,`RPC '${e}' stream ${i} sending:`,k),h.send(k))},ho:()=>h.close()}),P=(k,T,y)=>{k.listen(T,I=>{try{y(I)}catch(N){setTimeout(()=>{throw N},0)}})};return P(h,ol.EventType.OPEN,()=>{_||(X(Ut,`RPC '${e}' stream ${i} transport opened.`),S.mo())}),P(h,ol.EventType.CLOSE,()=>{_||(_=!0,X(Ut,`RPC '${e}' stream ${i} transport closed`),S.po())}),P(h,ol.EventType.ERROR,k=>{_||(_=!0,Xo(Ut,`RPC '${e}' stream ${i} transport errored:`,k),S.po(new Q(B.UNAVAILABLE,"The operation could not be completed")))}),P(h,ol.EventType.MESSAGE,k=>{var T;if(!_){const y=k.data[0];be(!!y);const I=y,N=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(N){X(Ut,`RPC '${e}' stream ${i} received error:`,N);const U=N.status;let C=function(w){const A=st[w];if(A!==void 0)return IS(A)}(U),E=N.message;C===void 0&&(C=B.INTERNAL,E="Unknown error status: "+U+" with message "+N.message),_=!0,S.po(new Q(C,E)),h.close()}else X(Ut,`RPC '${e}' stream ${i} received:`,y),S.yo(y)}}),P(a,KI.STAT_EVENT,k=>{k.stat===wm.PROXY?X(Ut,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===wm.NOPROXY&&X(Ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Xh(){return typeof document<"u"?document:null}/**
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
 */function kf(t){return new ND(t,!0)}/**
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
 */class wy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class MS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new wy(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Qr(n.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Q(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TO extends MS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=MD(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?vn(o.readTime):ae.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Cm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Sm(u)?{documents:FD(s,u)}:{query:UD(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=RS(s,o.resumeToken);const c=Rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=Dd(s,o.snapshotVersion.toTimestamp());const c=Rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=zD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Cm(this.serializer),n.removeTarget=e,this.i_(n)}}class IO extends MS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=VD(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.A_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Cm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bS(this.serializer,r))};this.i_(n)}}/**
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
 */class SO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Q(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Pm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(B.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Pm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(B.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class AO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Qr(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class RO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Js(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ue(u);c.M_.add(4),await Pu(c),c.N_.set("Unknown"),c.M_.delete(4),await bf(c)}(this))})}),this.N_=new AO(r,i)}}async function bf(t){if(Js(t))for(const e of t.x_)await e(!0)}async function Pu(t){for(const e of t.x_)await e(!1)}function VS(t,e){const n=ue(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Sy(n)?Iy(n):ma(n).Xo()&&Ty(n,e))}function Ey(t,e){const n=ue(t),r=ma(n);n.F_.delete(e),r.Xo()&&FS(n,e),n.F_.size===0&&(r.Xo()?r.n_():Js(n)&&n.N_.set("Unknown"))}function Ty(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ma(t).P_(e)}function FS(t,e){t.L_.xe(e),ma(t).I_(e)}function Iy(t){t.L_=new CD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ma(t).start(),t.N_.w_()}function Sy(t){return Js(t)&&!ma(t).Zo()&&t.F_.size>0}function Js(t){return ue(t).M_.size===0}function US(t){t.L_=void 0}async function PO(t){t.N_.set("Online")}async function CO(t){t.F_.forEach((e,n)=>{Ty(t,e)})}async function kO(t,e){US(t),Sy(t)?(t.N_.D_(e),Iy(t)):t.N_.set("Unknown")}async function bO(t,e,n){if(t.N_.set("Online"),e instanceof AS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ld(t,r)}else if(e instanceof Bc?t.L_.Ke(e):e instanceof SS?t.L_.He(e):t.L_.We(e),!n.isEqual(ae.min()))try{const r=await LS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Ht.EMPTY_BYTE_STRING,d.snapshotVersion)),FS(s,u);const h=new Ii(d.target,u,c,d.sequenceNumber);Ty(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ld(t,r)}}async function Ld(t,e,n){if(!Iu(e))throw e;t.M_.add(1),await Pu(t),t.N_.set("Offline"),n||(n=()=>LS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await bf(t)})}function jS(t,e){return e().catch(n=>Ld(t,n,e))}async function xf(t){const e=ue(t),n=zi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;xO(e);)try{const i=await pO(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,NO(e,i)}catch(i){await Ld(e,i)}zS(e)&&BS(e)}function xO(t){return Js(t)&&t.v_.length<10}function NO(t,e){t.v_.push(e);const n=zi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function zS(t){return Js(t)&&!zi(t).Zo()&&t.v_.length>0}function BS(t){zi(t).start()}async function DO(t){zi(t).V_()}async function OO(t){const e=zi(t);for(const n of t.v_)e.d_(n.mutations)}async function LO(t,e,n){const r=t.v_.shift(),i=py.from(r,e,n);await jS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xf(t)}async function MO(t,e){e&&zi(t).E_&&await async function(r,i){if(function(o){return TS(o)&&o!==B.ABORTED}(i.code)){const s=r.v_.shift();zi(r).t_(),await jS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xf(r)}}(t,e),zS(t)&&BS(t)}async function aw(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Js(n);n.M_.add(3),await Pu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await bf(n)}async function VO(t,e){const n=ue(t);e?(n.M_.delete(2),await bf(n)):e||(n.M_.add(2),await Pu(n),n.N_.set("Unknown"))}function ma(t){return t.B_||(t.B_=function(n,r,i){const s=ue(n);return s.f_(),new TO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:PO.bind(null,t),To:CO.bind(null,t),Ao:kO.bind(null,t),h_:bO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Sy(t)?Iy(t):t.N_.set("Unknown")):(await t.B_.stop(),US(t))})),t.B_}function zi(t){return t.k_||(t.k_=function(n,r,i){const s=ue(n);return s.f_(),new IO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:DO.bind(null,t),Ao:MO.bind(null,t),R_:OO.bind(null,t),A_:LO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await xf(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Ay{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ay(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ry(t,e){if(Qr("AsyncQueue",`${e}: ${t}`),Iu(t))return new Q(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=al(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Fo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class lw{constructor(){this.q_=new Je(ne.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):se():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class na{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new na(e,n,Fo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class FO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class UO{constructor(){this.queries=new pa(e=>lS(e),Sf),this.onlineState="Unknown",this.z_=new Set}}async function Py(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new FO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ry(o,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&ky(n)}async function Cy(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jO(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&ky(n)}function zO(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function ky(t){t.z_.forEach(e=>{e.next()})}var bm,uw;(uw=bm||(bm={})).J_="default",uw.Cache="cache";class by{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new na(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=na.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==bm.Cache}}/**
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
 */class $S{constructor(e){this.key=e}}class HS{constructor(e){this.key=e}}class BO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=uS(e),this.Ta=new Fo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new lw,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const p=i.get(d),_=Af(this.query,h)?h:null,S=!!p&&this.mutatedKeys.has(p.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;p&&_?p.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),k=!0):this.Ra(p,_)||(r.track({type:2,doc:_}),k=!0,(u&&this.Ia(_,u)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),k=!0):p&&!_&&(r.track({type:1,doc:p}),k=!0,(u||c)&&(a=!0)),k&&(_?(o=o.add(_),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,h)=>function(_,S){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return P(_)-P(S)}(d.type,h.type)||this.Ia(d.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new na(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new lw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new HS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new $S(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return na.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class $O{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HO{constructor(e){this.key=e,this.wa=!1}}class WO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new pa(a=>lS(a),Sf),this.Da=new Map,this.Ca=new Set,this.va=new Je(ne.comparator),this.Fa=new Map,this.Ma=new yy,this.xa={},this.Oa=new Map,this.Na=ta.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qO(t,e,n=!0){const r=YS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await WS(r,e,n,!0),i}async function KO(t,e){const n=YS(t);await WS(n,e,!0,!1)}async function WS(t,e,n,r){const i=await mO(t.localStore,_r(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await GO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&VS(t.remoteStore,i),a}async function GO(t,e,n,r,i){t.Ba=(h,p,_)=>async function(P,k,T,y){let I=k.view.da(T);I.Xi&&(I=await iw(P.localStore,k.query,!1).then(({documents:E})=>k.view.da(E,I)));const N=y&&y.targetChanges.get(k.targetId),U=y&&y.targetMismatches.get(k.targetId)!=null,C=k.view.applyChanges(I,P.isPrimaryClient,N,U);return dw(P,k.targetId,C.fa),C.snapshot}(t,h,p,_);const s=await iw(t.localStore,e,!0),o=new BO(e,s.hs),a=o.da(s.documents),u=Ru.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);dw(t,n,c.fa);const d=new $O(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function QO(t,e,n){const r=ue(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Sf(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await km(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ey(r.remoteStore,i.targetId),xm(r,i.targetId)}).catch(Tu)):(xm(r,i.targetId),await km(r.localStore,i.targetId,!0))}async function YO(t,e){const n=ue(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ey(n.remoteStore,r.targetId))}async function XO(t,e,n){const r=iL(t);try{const i=await function(o,a){const u=ue(o),c=Ye.now(),d=a.reduce((_,S)=>_.add(S.key),ge());let h,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Yr(),P=ge();return u.os.getEntries(_,d).next(k=>{S=k,S.forEach((T,y)=>{y.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,S)).next(k=>{h=k;const T=[];for(const y of a){const I=TD(y,h.get(y.key).overlayedDocument);I!=null&&T.push(new Ji(y.key,I,eS(I.value.mapValue),Qt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,T,a)}).next(k=>{p=k;const T=k.applyToLocalDocumentSet(h,P);return u.documentOverlayCache.saveOverlays(_,k.batchId,T)})}).then(()=>({batchId:p.batchId,changes:dS(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Je(Ae)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cu(r,i.changes),await xf(r.remoteStore)}catch(i){const s=Ry(i,"Failed to persist write");n.reject(s)}}async function qS(t,e){const n=ue(t);try{const r=await fO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?be(o.wa):i.removedDocuments.size>0&&(be(o.wa),o.wa=!1))}),await Cu(n,r,e)}catch(r){await Tu(r)}}function cw(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ue(o);u.onlineState=a;let c=!1;u.queries.forEach((d,h)=>{for(const p of h.U_)p.j_(a)&&(c=!0)}),c&&ky(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JO(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Je(ne.comparator);o=o.insert(s,_t.newNoDocument(s,ae.min()));const a=ge().add(s),u=new Cf(ae.min(),new Map,new Je(Ae),o,a);await qS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),xy(r)}else await km(r.localStore,e,!1).then(()=>xm(r,e,n)).catch(Tu)}async function ZO(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await dO(n.localStore,e);GS(n,r,null),KS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cu(n,i)}catch(i){await Tu(i)}}async function eL(t,e,n){const r=ue(t);try{const i=await function(o,a){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(be(h!==null),d=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GS(r,e,n),KS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cu(r,i)}catch(i){await Tu(i)}}function KS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function GS(t,e,n){const r=ue(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||QS(t,r)})}function QS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ey(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),xy(t))}function dw(t,e,n){for(const r of n)r instanceof $S?(t.Ma.addReference(r.key,e),tL(t,r)):r instanceof HS?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||QS(t,r.key)):se()}function tL(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),xy(t))}function xy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ne(Oe.fromString(e)),r=t.Na.next();t.Fa.set(r,new HO(n)),t.va=t.va.insert(n,r),VS(t.remoteStore,new Ii(_r(If(n.path)),r,"TargetPurposeLimboResolution",ay.oe))}}async function Cu(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const h=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=_y.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(c,p=>$.forEach(p.qi,_=>d.persistence.referenceDelegate.addReference(h,p.targetId,_)).next(()=>$.forEach(p.Qi,_=>d.persistence.referenceDelegate.removeReference(h,p.targetId,_)))))}catch(h){if(!Iu(h))throw h;X("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const _=d.ns.get(p),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);d.ns=d.ns.insert(p,P)}}}(r.localStore,s))}async function nL(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await OS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new Q(B.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cu(n,r.us)}}function rL(t,e){const n=ue(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function YS(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JO.bind(null,e),e.Sa.h_=jO.bind(null,e.eventManager),e.Sa.ka=zO.bind(null,e.eventManager),e}function iL(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eL.bind(null,e),e}class fw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cO(this.persistence,new lO,e.initialUser,this.serializer)}createPersistence(e){return new sO(vy.Hr,this.serializer)}createSharedClientState(e){return new yO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nL.bind(null,this.syncEngine),await VO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UO}()}createDatastore(e){const n=kf(e.databaseInfo.databaseId),r=function(s){return new EO(s)}(e.databaseInfo);return function(s,o,a,u){return new SO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new RO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cw(this.syncEngine,n,0),function(){return ow.D()?new ow:new vO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const h=new WO(i,s,o,a,u,c);return d&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ue(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Pu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class Ny{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Q(B.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=ue(i),a={documents:s.map(h=>Od(o.serializer,h))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,Oe.emptyPath(),a,s.length),c=new Map;u.forEach(h=>{const p=LD(o.serializer,h);c.set(p.key.toString(),p)});const d=[];return s.forEach(h=>{const p=c.get(h.toString());be(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new hy(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=ne.fromPath(r);this.mutations.push(new ES(i,this.precondition(i)))}),await async function(r,i){const s=ue(r),o={writes:i.map(a=>bS(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,Oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se();n=ae.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Q(B.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ae.min())?Qt.exists(!1):Qt.updateTime(n):Qt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ae.min()))throw new Q(B.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Qt.updateTime(n)}return Qt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class aL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new wy(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new oL(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Su(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!TS(n)}return!1}}/**
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
 */class lL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=jt.UNAUTHENTICATED,this.clientId=XI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ry(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jh(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cL(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>aw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>aw(e.remoteStore,i)),t._onlineComponents=e}function uL(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uL(n))throw n;Xo("Error using user provided cache. Falling back to memory cache: "+n),await Jh(t,new fw)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Jh(t,new fw);return t._offlineComponents}async function Dy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await hw(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await hw(t,new sL))),t._onlineComponents}function dL(t){return Dy(t).then(e=>e.syncEngine)}function fL(t){return Dy(t).then(e=>e.datastore)}async function Md(t){const e=await Dy(t),n=e.eventManager;return n.onListen=qO.bind(null,e.syncEngine),n.onUnlisten=QO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YO.bind(null,e.syncEngine),n}function hL(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Ny({next:p=>{o.enqueueAndForget(()=>Cy(s,h));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new Q(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new Q(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new by(If(a.path),d,{includeMetadataChanges:!0,ra:!0});return Py(s,h)}(await Md(t),t.asyncQueue,e,n,r)),r.promise}function pL(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Ny({next:p=>{o.enqueueAndForget(()=>Cy(s,h)),p.fromCache&&u.source==="server"?c.reject(new Q(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new by(a,d,{includeMetadataChanges:!0,ra:!0});return Py(s,h)}(await Md(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function XS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pw=new Map;/**
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
 */function JS(t,e,n){if(!n)throw new Q(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mL(t,e,n,r){if(e===!0&&r===!0)throw new Q(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mw(t){if(!ne.isDocumentKey(t))throw new Q(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gw(t){if(ne.isDocumentKey(t))throw new Q(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new Q(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class yw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Df{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NN;switch(r.type){case"firstParty":return new MN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pw.get(n);r&&(X("ComponentProvider","Removing Datastore"),pw.delete(n),r.terminate())}(this),Promise.resolve()}}function gL(t,e,n,r={}){var i;const s=(t=On(t,Df))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=jt.MOCK_USER;else{a=DI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Q(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new jt(c)}t._authCredentials=new DN(new YI(a,u))}}/**
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
 */class ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Li extends ti{constructor(e,n,r){super(e,n,If(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ne(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function Bi(t,e,...n){if(t=Be(t),JS("collection","path",e),t instanceof Df){const r=Oe.fromString(e,...n);return gw(r),new Li(t,null,r)}{if(!(t instanceof Bt||t instanceof Li))throw new Q(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return gw(r),new Li(t.firestore,null,r)}}function Un(t,e,...n){if(t=Be(t),arguments.length===1&&(e=XI.newId()),JS("doc","path",e),t instanceof Df){const r=Oe.fromString(e,...n);return mw(r),new Bt(t,null,new ne(r))}{if(!(t instanceof Bt||t instanceof Li))throw new Q(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return mw(r),new Bt(t.firestore,t instanceof Li?t.converter:null,new ne(r))}}/**
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
 */class yL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new wy(this,"async_queue_retry"),this.hu=()=>{const n=Xh();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Xh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Xh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new vr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Iu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Ay.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&se()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function vw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $i extends Df{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZS(this),this._firestoreClient.terminate()}}function vL(t,e){const n=typeof t=="object"?t:Tf(),r=typeof t=="string"?t:"(default)",i=Xi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bI("firestore");s&&gL(i,...s)}return i}function ku(t){return t._firestoreClient||ZS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new QN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(Ht.fromBase64String(e))}catch(n){throw new Q(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Of{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oy{constructor(e){this._methodName=e}}/**
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
 */class Ly{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */const _L=/^__.*__$/;class wL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Au(e,this.data,n,this.fieldTransforms)}}class eA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class My{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new My(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Vd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(tA(this.fu)&&_L.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class EL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kf(e)}Fu(e,n,r,i=!1){return new My({fu:e,methodName:n,vu:r,path:Ct.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lf(t){const e=t._freezeSettings(),n=kf(t._databaseId);return new EL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vy(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Fy("Data must be an object, but it was:",o,r);const a=nA(r,o);let u,c;if(s.merge)u=new mn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const p=Nm(e,h,n);if(!o.contains(p))throw new Q(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);iA(d,p)||d.push(p)}u=new mn(d),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new wL(new Gt(a),u,c)}class Mf extends Oy{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mf}}function TL(t,e,n,r){const i=t.Fu(1,e,n);Fy("Data must be an object, but it was:",i,r);const s=[],o=Gt.empty();Xs(r,(u,c)=>{const d=Uy(e,u,n);c=Be(c);const h=i.Su(d);if(c instanceof Mf)s.push(d);else{const p=bu(c,h);p!=null&&(s.push(d),o.set(d,p))}});const a=new mn(s);return new eA(o,a,i.fieldTransforms)}function IL(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Nm(e,r,n)],u=[i];if(s.length%2!=0)throw new Q(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Nm(e,s[p])),u.push(s[p+1]);const c=[],d=Gt.empty();for(let p=a.length-1;p>=0;--p)if(!iA(c,a[p])){const _=a[p];let S=u[p];S=Be(S);const P=o.Su(_);if(S instanceof Mf)c.push(_);else{const k=bu(S,P);k!=null&&(c.push(_),d.set(_,k))}}const h=new mn(c);return new eA(d,h,o.fieldTransforms)}function SL(t,e,n,r=!1){return bu(n,t.Fu(r?4:3,e))}function bu(t,e){if(rA(t=Be(t)))return Fy("Unsupported field value:",e,t),nA(t,e);if(t instanceof Oy)return function(r,i){if(!tA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=bu(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Dd(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dd(i.serializer,s)}}if(r instanceof Ly)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:RS(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Nf(r)}`)}(t,e)}function nA(t,e){const n={};return JI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,i)=>{const s=bu(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Ly||t instanceof Us||t instanceof Bt||t instanceof Oy)}function Fy(t,e,n){if(!rA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Nf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Nm(t,e,n){if((e=Be(e))instanceof Of)return e._internalPath;if(typeof e=="string")return Uy(t,e);throw Vd("Field path arguments must be of type string or ",t,!1,void 0,n)}const AL=new RegExp("[~\\*/\\[\\]]");function Uy(t,e,n){if(e.search(AL)>=0)throw Vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Of(...e.split("."))._internalPath}catch{throw Vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q(B.INVALID_ARGUMENT,a+t+u)}function iA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fd{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RL extends Fd{data(){return super.data()}}function Vf(t,e){return typeof e=="string"?Uy(t,e):e instanceof Of?e._internalPath:e._delegate._internalPath}/**
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
 */function sA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jy{}class zy extends jy{}function ra(t,e,...n){let r=[];e instanceof jy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ga).length,a=s.filter(u=>u instanceof xu).length;if(o>1||o>0&&a>0)throw new Q(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class xu extends zy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xu(e,n,r)}_apply(e){const n=this._parse(e);return aA(e._query,n),new ti(e.firestore,e.converter,Am(e._query,n))}_parse(e){const n=Lf(e.firestore);return function(s,o,a,u,c,d,h){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ww(h,d);const _=[];for(const S of h)_.push(_w(u,s,S));p={arrayValue:{values:_}}}else p=_w(u,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ww(h,d),p=SL(a,o,h,d==="in"||d==="not-in");return ut.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mt(t,e,n){const r=e,i=Vf("where",t);return xu._create(i,r,n)}class ga extends jy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ga(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)aA(o,u),o=Am(o,u)}(e._query,n),new ti(e.firestore,e.converter,Am(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ud(...t){return t.forEach(e=>lA("or",e)),ga._create("or",t)}function Co(...t){return t.forEach(e=>lA("and",e)),ga._create("and",t)}class By extends zy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new By(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Q(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new su(s,o)}(e._query,this._field,this._direction);return new ti(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ha(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function PL(t,e="asc"){const n=e,r=Vf("orderBy",t);return By._create(r,n)}class $y extends zy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new $y(e,n,r)}_apply(e){return new ti(e.firestore,e.converter,bd(e._query,this._limit,this._limitType))}}function oA(t){return $y._create("limit",t,"F")}function _w(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new Q(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aS(e)&&n.indexOf("/")!==-1)throw new Q(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!ne.isDocumentKey(r))throw new Q(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return z0(t,new ne(r))}if(n instanceof Bt)return z0(t,n._key);throw new Q(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nf(n)}.`)}function ww(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lA(t,e){if(!(e instanceof xu||e instanceof ga))throw new Q(B.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class uA{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ly(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const n=ji(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);be(DS(r));const i=new ru(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Qr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Hy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class CL extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}/**
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
 */class ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wy extends Fd{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $c extends Wy{data(e={}){return super.data(e)}}class cA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $c(this._firestore,this._userDataWriter,r.key,r,new ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new $c(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new $c(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:kL(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
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
 */function Ff(t){t=On(t,Bt);const e=On(t.firestore,$i);return hL(ku(e),t._key).then(n=>pA(e,t,n))}class Uf extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function dA(t){t=On(t,ti);const e=On(t.firestore,$i),n=ku(e),r=new Uf(e);return sA(t._query),pL(n,t._query).then(i=>new cA(e,r,t,i))}function bL(t,e,n){t=On(t,Bt);const r=On(t.firestore,$i),i=Hy(t.converter,e,n);return hA(r,[Vy(Lf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qt.none())])}function fA(t,e){const n=On(t.firestore,$i),r=Un(t),i=Hy(t.converter,e);return hA(n,[Vy(Lf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then(()=>r)}function Pl(t,...e){var n,r,i;t=Be(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||vw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(vw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,d;if(t instanceof Bt)c=On(t.firestore,$i),d=If(t._key.path),u={next:h=>{e[o]&&e[o](pA(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=On(t,ti);c=On(h.firestore,$i),d=h._query;const p=new Uf(c);u={next:_=>{e[o]&&e[o](new cA(c,p,h,_))},error:e[o+1],complete:e[o+2]},sA(t._query)}return function(p,_,S,P){const k=new Ny(P),T=new by(_,k,S);return p.asyncQueue.enqueueAndForget(async()=>Py(await Md(p),T)),()=>{k.$a(),p.asyncQueue.enqueueAndForget(async()=>Cy(await Md(p),T))}}(ku(c),d,a,u)}function hA(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>XO(await dL(r),i,s)),s.promise}(ku(t),e)}function pA(t,e,n){const r=n.docs.get(e._key),i=new Uf(t);return new Wy(t,i,e._key,r,new ko(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const xL={maxAttempts:5};function Ya(t,e){if((t=Be(t)).firestore!==e)throw new Q(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */class NL extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Lf(n)}get(n){const r=Ya(n,this._firestore),i=new CL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return se();const o=s[0];if(o.isFoundDocument())return new Fd(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Fd(this._firestore,i,r._key,null,r.converter);throw se()})}set(n,r,i){const s=Ya(n,this._firestore),o=Hy(s.converter,r,i),a=Vy(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Ya(n,this._firestore);let a;return a=typeof(r=Be(r))=="string"||r instanceof Of?IL(this._dataReader,"Transaction.update",o._key,r,i,s):TL(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Ya(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ya(e,this._firestore),r=new Uf(this._firestore);return super.get(e).then(i=>new Wy(this._firestore,r,n._key,i._document,new ko(!1,!1),n.converter))}}function Nu(t,e,n){t=On(t,$i);const r=Object.assign(Object.assign({},xL),n);return function(s){if(s.maxAttempts<1)throw new Q(B.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new vr;return s.asyncQueue.enqueueAndForget(async()=>{const c=await fL(s);new aL(s.asyncQueue,c,a,o,u).Xa()}),u.promise}(ku(t),i=>e(new NL(t,i)),r)}(function(e,n=!0){(function(i){fa=i})(Ys),tr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $i(new ON(r.getProvider("auth-internal")),new FN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),on(V0,"4.6.4",e),on(V0,"4.6.4","esm2017")})();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const DL={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function wc(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Ec(t){return t.toString().indexOf("`")===-1}Ec(t=>t``)||Ec(t=>t`\0`)||Ec(t=>t`\n`)||Ec(t=>t`\u0000`);wc``&&wc`\0`&&wc`\n`&&wc`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let mA="google#safe";function OL(){if(typeof window<"u")return window.trustedTypes}function gA(){var t;return mA!==""&&(t=OL())!==null&&t!==void 0?t:null}let Tc;function LL(){var t,e;if(Tc===void 0)try{Tc=(e=(t=gA())===null||t===void 0?void 0:t.createPolicy(mA,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Tc=null}return Tc}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class yA{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Ew(t){var e;const n=t,r=(e=LL())===null||e===void 0?void 0:e.createScriptURL(n);return r??new yA(n,DL)}function ML(t){var e;if(!((e=gA())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof yA)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function VL(t,...e){if(e.length===0)return Ew(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Ew(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function FL(t){return UL("script",t)}function UL(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function jL(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=FL(e||window);n&&t.setAttribute("nonce",n)}function zL(t,e,n){t.src=ML(e),jL(t)}const vA="@firebase/installations",qy="0.6.8";/**
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
 */const _A=1e4,wA=`w:${qy}`,EA="FIS_v2",BL="https://firebaseinstallations.googleapis.com/v1",$L=60*60*1e3,HL="installations",WL="Installations";/**
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
 */const qL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},js=new Qs(HL,WL,qL);function TA(t){return t instanceof jn&&t.code.includes("request-failed")}/**
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
 */function IA({projectId:t}){return`${BL}/projects/${t}/installations`}function SA(t){return{token:t.token,requestStatus:2,expiresIn:GL(t.expiresIn),creationTime:Date.now()}}async function AA(t,e){const r=(await e.json()).error;return js.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KL(t,{refreshToken:e}){const n=RA(t);return n.append("Authorization",QL(e)),n}async function PA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GL(t){return Number(t.replace("s","000"))}function QL(t){return`${EA} ${t}`}/**
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
 */async function YL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=IA(t),i=RA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:EA,appId:t.appId,sdkVersion:wA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await PA(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:SA(c.authToken)}}else throw await AA("Create Installation",u)}/**
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
 */function CA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function XL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const JL=/^[cdef][\w-]{21}$/,Dm="";function ZL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eM(t);return JL.test(n)?n:Dm}catch{return Dm}}function eM(t){return XL(t).substr(0,22)}/**
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
 */function jf(t){return`${t.appName}!${t.appId}`}/**
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
 */const kA=new Map;function bA(t,e){const n=jf(t);xA(n,e),tM(n,e)}function xA(t,e){const n=kA.get(t);if(n)for(const r of n)r(e)}function tM(t,e){const n=nM();n&&n.postMessage({key:t,fid:e}),rM()}let ys=null;function nM(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{xA(t.data.key,t.data.fid)}),ys}function rM(){kA.size===0&&ys&&(ys.close(),ys=null)}/**
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
 */const iM="firebase-installations-database",sM=1,zs="firebase-installations-store";let Zh=null;function Ky(){return Zh||(Zh=UI(iM,sM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}})),Zh}async function jd(t,e){const n=jf(t),i=(await Ky()).transaction(zs,"readwrite"),s=i.objectStore(zs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bA(t,e.fid),e}async function NA(t){const e=jf(t),r=(await Ky()).transaction(zs,"readwrite");await r.objectStore(zs).delete(e),await r.done}async function zf(t,e){const n=jf(t),i=(await Ky()).transaction(zs,"readwrite"),s=i.objectStore(zs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bA(t,a.fid),a}/**
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
 */async function Gy(t){let e;const n=await zf(t.appConfig,r=>{const i=oM(r),s=aM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oM(t){const e=t||{fid:ZL(),registrationStatus:0};return DA(e)}function aM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(js.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uM(t)}:{installationEntry:e}}async function lM(t,e){try{const n=await YL(t,e);return jd(t.appConfig,n)}catch(n){throw TA(n)&&n.customData.serverCode===409?await NA(t.appConfig):await jd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uM(t){let e=await Tw(t.appConfig);for(;e.registrationStatus===1;)await CA(100),e=await Tw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gy(t);return r||n}return e}function Tw(t){return zf(t,e=>{if(!e)throw js.create("installation-not-found");return DA(e)})}function DA(t){return cM(t)?{fid:t.fid,registrationStatus:0}:t}function cM(t){return t.registrationStatus===1&&t.registrationTime+_A<Date.now()}/**
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
 */async function dM({appConfig:t,heartbeatServiceProvider:e},n){const r=fM(t,n),i=KL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await PA(()=>fetch(r,a));if(u.ok){const c=await u.json();return SA(c)}else throw await AA("Generate Auth Token",u)}function fM(t,{fid:e}){return`${IA(t)}/${e}/authTokens:generate`}/**
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
 */async function Qy(t,e=!1){let n;const r=await zf(t.appConfig,s=>{if(!OA(s))throw js.create("not-registered");const o=s.authToken;if(!e&&mM(o))return s;if(o.requestStatus===1)return n=hM(t,e),s;{if(!navigator.onLine)throw js.create("app-offline");const a=yM(s);return n=pM(t,a),a}});return n?await n:r.authToken}async function hM(t,e){let n=await Iw(t.appConfig);for(;n.authToken.requestStatus===1;)await CA(100),n=await Iw(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qy(t,e):r}function Iw(t){return zf(t,e=>{if(!OA(e))throw js.create("not-registered");const n=e.authToken;return vM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pM(t,e){try{const n=await dM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jd(t.appConfig,r),n}catch(n){if(TA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await NA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jd(t.appConfig,r)}throw n}}function OA(t){return t!==void 0&&t.registrationStatus===2}function mM(t){return t.requestStatus===2&&!gM(t)}function gM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$L}function yM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vM(t){return t.requestStatus===1&&t.requestTime+_A<Date.now()}/**
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
 */async function _M(t){const e=t,{installationEntry:n,registrationPromise:r}=await Gy(e);return r?r.catch(console.error):Qy(e).catch(console.error),n.fid}/**
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
 */async function wM(t,e=!1){const n=t;return await EM(n),(await Qy(n,e)).token}async function EM(t){const{registrationPromise:e}=await Gy(t);e&&await e}/**
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
 */function TM(t){if(!t||!t.options)throw ep("App Configuration");if(!t.name)throw ep("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ep(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ep(t){return js.create("missing-app-config-values",{valueName:t})}/**
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
 */const LA="installations",IM="installations-internal",SM=t=>{const e=t.getProvider("app").getImmediate(),n=TM(e),r=Xi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},AM=t=>{const e=t.getProvider("app").getImmediate(),n=Xi(e,LA).getImmediate();return{getId:()=>_M(n),getToken:i=>wM(n,i)}};function RM(){tr(new Fn(LA,SM,"PUBLIC")),tr(new Fn(IM,AM,"PRIVATE"))}RM();on(vA,qy);on(vA,qy,"esm2017");/**
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
 */const zd="analytics",PM="firebase_id",CM="origin",kM=60*1e3,bM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xM="https://www.googletagmanager.com/gtag/js";/**
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
 */const _n=new Ef("@firebase/analytics");/**
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
 */function MA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function NM(t,e){const n=document.createElement("script"),r=VL`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;zL(n,r),n.async=!0,document.head.appendChild(n)}function DM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await MA(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){_n.error(a)}t("config",i,s)}async function LM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await MA(n);for(const u of o){const c=a.find(h=>h.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_n.error(s)}}function MM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await LM(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await OM(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_n.error(a)}}return i}function VM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=MM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function FM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xM)&&n.src.includes(t))return n;return null}/**
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
 */const UM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ln=new Qs("analytics","Analytics",UM);/**
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
 */const jM=30,zM=1e3;class BM{constructor(e={},n=zM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VA=new BM;function $M(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:$M(r)},s=bM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Ln.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function WM(t,e=VA,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ln.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ln.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new GM;return setTimeout(async()=>{a.abort()},kM),FA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function FA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VA){var s;const{appId:o,measurementId:a}=t;try{await qM(r,e)}catch(u){if(a)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await HM(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!KM(c)){if(i.deleteThrottleMetadata(o),a)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?P0(n,i.intervalMillis,jM):P0(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,h),_n.debug(`Calling attemptFetch again in ${d} millis`),FA(t,h,r,i)}}function qM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KM(t){if(!(t instanceof jn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function YM(){if(LI())try{await MI()}catch(t){return _n.warn(Ln.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _n.warn(Ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XM(t,e,n,r,i,s,o){var a;const u=WM(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>_n.error(_)),e.push(u);const c=YM().then(_=>{if(_)return r.getId()}),[d,h]=await Promise.all([u,c]);FM(s)||NM(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[CM]="firebase",p.update=!0,h!=null&&(p[PM]=h),i("config",d.measurementId,p),d.measurementId}/**
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
 */class JM{constructor(e){this.app=e}_delete(){return delete Cl[this.app.options.appId],Promise.resolve()}}let Cl={},Sw=[];const Aw={};let tp="dataLayer",ZM="gtag",Rw,UA,Pw=!1;function e4(){const t=[];if(OI()&&t.push("This is a browser extension environment."),m2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ln.create("invalid-analytics-context",{errorInfo:e});_n.warn(n.message)}}function t4(t,e,n){e4();const r=t.options.appId;if(!r)throw Ln.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ln.create("no-api-key");if(Cl[r]!=null)throw Ln.create("already-exists",{id:r});if(!Pw){DM(tp);const{wrappedGtag:s,gtagCore:o}=VM(Cl,Sw,Aw,tp,ZM);UA=s,Rw=o,Pw=!0}return Cl[r]=XM(t,Sw,Aw,e,Rw,tp,n),new JM(t)}function n4(t=Tf()){t=Be(t);const e=Xi(t,zd);return e.isInitialized()?e.getImmediate():r4(t)}function r4(t,e={}){const n=Xi(t,zd);if(n.isInitialized()){const i=n.getImmediate();if(Zl(e,n.getOptions()))return i;throw Ln.create("already-initialized")}return n.initialize({options:e})}function i4(t,e,n,r){t=Be(t),QM(UA,Cl[t.app.options.appId],e,n,r).catch(i=>_n.error(i))}const Cw="@firebase/analytics",kw="0.10.6";function s4(){tr(new Fn(zd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return t4(r,i,n)},"PUBLIC")),tr(new Fn("analytics-internal",t,"PRIVATE")),on(Cw,kw),on(Cw,kw,"esm2017");function t(e){try{const n=e.getProvider(zd).getImmediate();return{logEvent:(r,i,s)=>i4(n,r,i,s)}}catch(n){throw Ln.create("interop-component-reg-failed",{reason:n})}}}s4();var o4="firebase",a4="10.12.4";/**
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
 */on(o4,a4,"app");function Yy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l4=jA,zA=new Qs("auth","Firebase",jA());/**
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
 */const Bd=new Ef("@firebase/auth");function u4(t,...e){Bd.logLevel<=ye.WARN&&Bd.warn(`Auth (${Ys}): ${t}`,...e)}function Hc(t,...e){Bd.logLevel<=ye.ERROR&&Bd.error(`Auth (${Ys}): ${t}`,...e)}/**
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
 */function Tr(t,...e){throw Jy(t,...e)}function Zn(t,...e){return Jy(t,...e)}function Xy(t,e,n){const r=Object.assign(Object.assign({},l4()),{[e]:n});return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function Ss(t){return Xy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function c4(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tr(t,"argument-error"),Xy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zA.create(t,...e)}function le(t,e,...n){if(!t)throw Jy(e,...n)}function Fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function Xr(t,e){t||Fr(e)}/**
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
 */function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function d4(){return bw()==="http:"||bw()==="https:"}function bw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function f4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d4()||OI()||"connection"in navigator)?navigator.onLine:!0}function h4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Du{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xr(n>e,"Short delay should be less than long delay!"),this.isMobile=c2()||f2()}get(){return f4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zy(t,e){Xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class BA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const m4=new Du(3e4,6e4);function ev(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ya(t,e,n,r,i={}){return $A(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Eu(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),BA.fetch()(HA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function $A(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},p4),e);try{const i=new y4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ic(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ic(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ic(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xy(t,d,c);Tr(t,d)}}catch(i){if(i instanceof jn)throw i;Tr(t,"network-request-failed",{message:String(i)})}}async function g4(t,e,n,r,i={}){const s=await ya(t,e,n,r,i);return"mfaPendingCredential"in s&&Tr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function HA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zy(t.config,i):`${t.config.apiScheme}://${i}`}class y4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zn(this.auth,"network-request-failed")),m4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ic(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function v4(t,e){return ya(t,"POST","/v1/accounts:delete",e)}async function WA(t,e){return ya(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _4(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=tv(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:kl(np(i.auth_time)),issuedAtTime:kl(np(i.iat)),expirationTime:kl(np(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function np(t){return Number(t)*1e3}function tv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=CI(n);return i?JSON.parse(i):(Hc("Failed to decode base64 JWT payload"),null)}catch(i){return Hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xw(t){const e=tv(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function lu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&w4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function w4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class E4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $d(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lu(t,WA(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qA(s.providerUserInfo):[],a=I4(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function T4(t){const e=Be(t);await $d(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qA(t){return t.map(e=>{var{providerId:n}=e,r=Yy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function S4(t,e){const n=await $A(t,{},async()=>{const r=Eu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=HA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function A4(t,e){return ya(t,"POST","/v2/accounts:revokeToken",ev(t,e))}/**
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
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=xw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await S4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Uo;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return Fr("not implemented")}}/**
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
 */function ci(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lu(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _4(this,e)}reload(){return T4(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $d(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vr(this.auth.app))return Promise.reject(Ss(this.auth));const e=await this.getIdToken();return await lu(this,v4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:N,isAnonymous:U,providerData:C,stsTokenManager:E}=n;le(I&&E,e,"internal-error");const g=Uo.fromJSON(this.name,E);le(typeof I=="string",e,"internal-error"),ci(h,e.name),ci(p,e.name),le(typeof N=="boolean",e,"internal-error"),le(typeof U=="boolean",e,"internal-error"),ci(_,e.name),ci(S,e.name),ci(P,e.name),ci(k,e.name),ci(T,e.name),ci(y,e.name);const w=new Ur({uid:I,auth:e,email:p,emailVerified:N,displayName:h,isAnonymous:U,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:g,createdAt:T,lastLoginAt:y});return C&&Array.isArray(C)&&(w.providerData=C.map(A=>Object.assign({},A))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Uo;i.updateFromServerResponse(n);const s=new Ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $d(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];le(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Uo;a.updateFromIdToken(r);const u=new Ur({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Nw=new Map;function jr(t){Xr(t instanceof Function,"Expected a class definition");let e=Nw.get(t);return e?(Xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nw.set(t,e),e)}/**
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
 */class KA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KA.type="NONE";const Dw=KA;/**
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
 */function Wc(t,e,n){return`firebase:${t}:${e}:${n}`}class jo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jo(jr(Dw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||jr(Dw);const o=Wc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Ur._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new jo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new jo(s,e,r))}}/**
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
 */function Ow(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JA(e))return"Blackberry";if(ZA(e))return"Webos";if(nv(e))return"Safari";if((e.includes("chrome/")||QA(e))&&!e.includes("edge/"))return"Chrome";if(XA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GA(t=Nt()){return/firefox\//i.test(t)}function nv(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QA(t=Nt()){return/crios\//i.test(t)}function YA(t=Nt()){return/iemobile/i.test(t)}function XA(t=Nt()){return/android/i.test(t)}function JA(t=Nt()){return/blackberry/i.test(t)}function ZA(t=Nt()){return/webos/i.test(t)}function Bf(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R4(t=Nt()){var e;return Bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P4(){return h2()&&document.documentMode===10}function eR(t=Nt()){return Bf(t)||XA(t)||ZA(t)||JA(t)||/windows phone/i.test(t)||YA(t)}function C4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tR(t,e=[]){let n;switch(t){case"Browser":n=Ow(Nt());break;case"Worker":n=`${Ow(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
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
 */class k4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function b4(t,e={}){return ya(t,"GET","/v2/passwordPolicy",ev(t,e))}/**
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
 */const x4=6;class N4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:x4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class D4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lw(this),this.idTokenSubscription=new Lw(this),this.beforeStateQueue=new k4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await WA(this,{idToken:e}),r=await Ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $d(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vr(this.app))return Promise.reject(Ss(this));const n=e?Be(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vr(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vr(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b4(this),n=new N4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await A4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[jr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $f(t){return Be(t)}class Lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=w2(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rv={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O4(t){rv=t}function L4(t){return rv.loadJS(t)}function M4(){return rv.gapiScript}function V4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function F4(t,e){const n=Xi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zl(s,e??{}))return i;Tr(i,"already-initialized")}return n.initialize({options:e})}function U4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function j4(t,e,n){const r=$f(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nR(e),{host:o,port:a}=z4(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),B4()}function nR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function z4(t){const e=nR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mw(o)}}}function Mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rR{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fr("not implemented")}_getIdTokenResponse(e){return Fr("not implemented")}_linkToIdToken(e,n){return Fr("not implemented")}_getReauthenticationResolver(e){return Fr("not implemented")}}/**
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
 */async function zo(t,e){return g4(t,"POST","/v1/accounts:signInWithIdp",ev(t,e))}/**
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
 */const $4="http://localhost";class Bs extends rR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zo(e,n)}buildRequest(){const e={requestUri:$4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eu(n)}return e}}/**
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
 */class iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ou extends iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yi extends Ou{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
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
 */class Or extends Ou{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class vi extends Ou{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
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
 */class _i extends Ou{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _i.credential(n,r)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
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
 */class ia{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ur._fromIdTokenResponse(e,r,i),o=Vw(r);return new ia({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vw(r);return new ia({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hd extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hd(e,n,r,i)}}function iR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hd._fromErrorAndOperation(t,s,e,r):s})}async function H4(t,e,n=!1){const r=await lu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ia._forOperation(t,"link",r)}/**
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
 */async function W4(t,e,n=!1){const{auth:r}=t;if(Vr(r.app))return Promise.reject(Ss(r));const i="reauthenticate";try{const s=await lu(t,iR(r,i,e,t),n);le(s.idToken,r,"internal-error");const o=tv(s.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),ia._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tr(r,"user-mismatch"),s}}/**
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
 */async function q4(t,e,n=!1){if(Vr(t.app))return Promise.reject(Ss(t));const r="signIn",i=await iR(t,r,e),s=await ia._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function K4(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function G4(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function Q4(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}const Wd="__sak";/**
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
 */class sR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wd,"1"),this.storage.removeItem(Wd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Y4(){const t=Nt();return nv(t)||Bf(t)}const X4=1e3,J4=10;class oR extends sR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y4()&&C4(),this.fallbackToPolling=eR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);P4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,J4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},X4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oR.type="LOCAL";const Z4=oR;/**
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
 */class aR extends sR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aR.type="SESSION";const lR=aR;/**
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
 */function eV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await eV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hf.receivers=[];/**
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
 */function sv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=sv("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wr(){return window}function nV(t){wr().location.href=t}/**
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
 */function uR(){return typeof wr().WorkerGlobalScope<"u"&&typeof wr().importScripts=="function"}async function rV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sV(){return uR()?self:null}/**
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
 */const cR="firebaseLocalStorageDb",oV=1,qd="firebaseLocalStorage",dR="fbase_key";class Lu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wf(t,e){return t.transaction([qd],e?"readwrite":"readonly").objectStore(qd)}function aV(){const t=indexedDB.deleteDatabase(cR);return new Lu(t).toPromise()}function Mm(){const t=indexedDB.open(cR,oV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qd,{keyPath:dR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qd)?e(r):(r.close(),await aV(),e(await Mm()))})})}async function Fw(t,e,n){const r=Wf(t,!0).put({[dR]:e,value:n});return new Lu(r).toPromise()}async function lV(t,e){const n=Wf(t,!1).get(e),r=await new Lu(n).toPromise();return r===void 0?null:r.value}function Uw(t,e){const n=Wf(t,!0).delete(e);return new Lu(n).toPromise()}const uV=800,cV=3;class fR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hf._getInstance(sV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rV(),!this.activeServiceWorker)return;this.sender=new tV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mm();return await Fw(e,Wd,"1"),await Uw(e,Wd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wf(i,!1).getAll();return new Lu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fR.type="LOCAL";const dV=fR;new Du(3e4,6e4);/**
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
 */function hR(t,e){return e?jr(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ov extends rR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fV(t){return q4(t.auth,new ov(t),t.bypassAuthState)}function hV(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),W4(n,new ov(t),t.bypassAuthState)}async function pV(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),H4(n,new ov(t),t.bypassAuthState)}/**
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
 */class pR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fV;case"linkViaPopup":case"linkViaRedirect":return pV;case"reauthViaPopup":case"reauthViaRedirect":return hV;default:Tr(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mV=new Du(2e3,1e4);async function gV(t,e,n){if(Vr(t.app))return Promise.reject(Zn(t,"operation-not-supported-in-this-environment"));const r=$f(t);c4(t,e,iv);const i=hR(r,n);return new vs(r,"signInViaPopup",e,i).executeNotNull()}class vs extends pR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=sv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mV.get())};e()}}vs.currentPopupAction=null;/**
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
 */const yV="pendingRedirect",qc=new Map;class vV extends pR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qc.get(this.auth._key());if(!e){try{const r=await _V(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qc.set(this.auth._key(),e)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _V(t,e){const n=TV(e),r=EV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wV(t,e){qc.set(t._key(),e)}function EV(t){return jr(t._redirectPersistence)}function TV(t){return Wc(yV,t.config.apiKey,t.name)}async function IV(t,e,n=!1){if(Vr(t.app))return Promise.reject(Ss(t));const r=$f(t),i=hR(r,e),o=await new vV(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SV=10*60*1e3;class AV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SV&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mR(t);default:return!1}}/**
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
 */async function PV(t,e={}){return ya(t,"GET","/v1/projects",e)}/**
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
 */const CV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kV=/^https?/;async function bV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PV(t);for(const n of e)try{if(xV(n))return}catch{}Tr(t,"unauthorized-domain")}function xV(t){const e=Om(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kV.test(n))return!1;if(CV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NV=new Du(3e4,6e4);function zw(){const t=wr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DV(t){return new Promise((e,n)=>{var r,i,s;function o(){zw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zw(),n(Zn(t,"network-request-failed"))},timeout:NV.get()})}if(!((i=(r=wr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wr().gapi)===null||s===void 0)&&s.load)o();else{const a=V4("iframefcb");return wr()[a]=()=>{gapi.load?o():n(Zn(t,"network-request-failed"))},L4(`${M4()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Kc=null,e})}let Kc=null;function OV(t){return Kc=Kc||DV(t),Kc}/**
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
 */const LV=new Du(5e3,15e3),MV="__/auth/iframe",VV="emulator/auth/iframe",FV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jV(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zy(e,VV):`https://${t.config.authDomain}/${MV}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},i=UV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eu(r).slice(1)}`}async function zV(t){const e=await OV(t),n=wr().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:jV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zn(t,"network-request-failed"),a=wr().setTimeout(()=>{s(o)},LV.get());function u(){wr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const BV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$V=500,HV=600,WV="_blank",qV="http://localhost";class Bw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KV(t,e,n,r=$V,i=HV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},BV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Nt().toLowerCase();n&&(a=QA(c)?WV:n),GA(c)&&(e=e||qV,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(R4(c)&&a!=="_self")return GV(e||"",a),new Bw(null);const h=window.open(e||"",a,d);le(h,t,"popup-blocked");try{h.focus()}catch{}return new Bw(h)}function GV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QV="__/auth/handler",YV="emulator/auth/handler",XV=encodeURIComponent("fac");async function $w(t,e,n,r,i,s){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:i};if(e instanceof iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Ou){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${XV}=${encodeURIComponent(u)}`:"";return`${JV(t)}?${Eu(a).slice(1)}${c}`}function JV({config:t}){return t.emulator?Zy(t,YV):`https://${t.authDomain}/${QV}`}/**
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
 */const rp="webStorageSupport";class ZV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lR,this._completeRedirectFn=IV,this._overrideRedirectResult=wV}async _openPopup(e,n,r,i){var s;Xr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $w(e,n,r,Om(),i);return KV(e,o,sv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $w(e,n,r,Om(),i);return nV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zV(e),r=new AV(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rp,{type:rp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rp];o!==void 0&&n(!!o),Tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eR()||nv()||Bf()}}const eF=ZV;var Hw="@firebase/auth",Ww="1.7.5";/**
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
 */class tF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rF(t){tr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tR(t)},c=new D4(r,i,s,u);return U4(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new Fn("auth-internal",e=>{const n=$f(e.getProvider("auth").getImmediate());return(r=>new tF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Hw,Ww,nF(t)),on(Hw,Ww,"esm2017")}/**
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
 */const iF=5*60,sF=NI("authIdTokenMaxAge")||iF;let qw=null;const oF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sF)return;const i=n==null?void 0:n.token;qw!==i&&(qw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gR(t=Tf()){const e=Xi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=F4(t,{popupRedirectResolver:eF,persistence:[dV,Z4,lR]}),r=NI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oF(s.toString());G4(n,o,()=>o(n.currentUser)),K4(n,a=>o(a))}}const i=kI("auth");return i&&j4(n,`http://${i}`),n}function aF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}O4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rF("Browser");/**
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
 */const yR="firebasestorage.googleapis.com",vR="storageBucket",lF=2*60*1e3,uF=10*60*1e3;/**
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
 */class nt extends jn{constructor(e,n,r=0){super(ip(e),`Firebase Storage: ${n} (${ip(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function ip(t){return"storage/"+t}function av(){const t="An unknown error occurred, please check the error payload for server response.";return new nt(tt.UNKNOWN,t)}function cF(t){return new nt(tt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dF(t){return new nt(tt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(tt.UNAUTHENTICATED,t)}function hF(){return new nt(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pF(t){return new nt(tt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mF(){return new nt(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gF(){return new nt(tt.CANCELED,"User canceled the upload/download.")}function yF(t){return new nt(tt.INVALID_URL,"Invalid URL '"+t+"'.")}function vF(t){return new nt(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _F(){return new nt(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vR+"' property when initializing the app?")}function wF(){return new nt(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function EF(){return new nt(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TF(t){return new nt(tt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vm(t){return new nt(tt.INVALID_ARGUMENT,t)}function _R(){return new nt(tt.APP_DELETED,"The Firebase app was deleted.")}function IF(t){return new nt(tt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bl(t,e){return new nt(tt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xa(t){throw new nt(tt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw vF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${d}/b/${i}/o${p}`,"i"),S={bucket:1,path:3},P=n===yR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",T=new RegExp(`^https?://${P}/${i}/${k}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:_,indices:S,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<I.length;N++){const U=I[N],C=U.regex.exec(e);if(C){const E=C[U.indices.bucket];let g=C[U.indices.path];g||(g=""),r=new gn(E,g),U.postModify(r);break}}if(r==null)throw yF(e);return r}}class SF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function AF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(_,u())},k)}function p(){s&&clearTimeout(s)}function _(k,...T){if(c){p();return}if(k){p(),d.call(null,k,...T);return}if(u()||o){p(),d.call(null,k,...T);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let S=!1;function P(k){S||(S=!0,p(),!c&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function RF(t){t(!1)}/**
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
 */function PF(t){return t!==void 0}function CF(t){return typeof t=="object"&&!Array.isArray(t)}function lv(t){return typeof t=="string"||t instanceof String}function Kw(t){return uv()&&t instanceof Blob}function uv(){return typeof Blob<"u"}function Gw(t,e,n,r){if(r<e)throw Vm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function qf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function kF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class bF{constructor(e,n,r,i,s,o,a,u,c,d,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Sc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===As.NO_ERROR,u=s.getStatus();if(!a||kF(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===As.ABORT;r(!1,new Sc(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Sc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());PF(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=av();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?_R():gF();o(u)}else{const u=mF();o(u)}};this.canceled_?n(!1,new Sc(!1,null,!0)):this.backoffId_=AF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LF(t,e,n,r,i,s,o=!0){const a=wR(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return DF(c,e),xF(c,n),NF(c,s),OF(c,r),new bF(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function MF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VF(...t){const e=MF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(uv())return new Blob(t);throw new nt(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function UF(t){if(typeof atob>"u")throw TF("base-64");return atob(t)}/**
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
 */const fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sp{constructor(e,n){this.data=e,this.contentType=n||null}}function jF(t,e){switch(t){case fr.RAW:return new sp(ER(e));case fr.BASE64:case fr.BASE64URL:return new sp(TR(t,e));case fr.DATA_URL:return new sp(BF(e),$F(e))}throw av()}function ER(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zF(t){let e;try{e=decodeURIComponent(t)}catch{throw bl(fr.DATA_URL,"Malformed data URL.")}return ER(e)}function TR(t,e){switch(t){case fr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw bl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case fr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw bl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UF(e)}catch(i){throw i.message.includes("polyfill")?i:bl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class IR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bl(fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=HF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function BF(t){const e=new IR(t);return e.base64?TR(fr.BASE64,e.rest):zF(e.rest)}function $F(t){return new IR(t).contentType}function HF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class wi{constructor(e,n){let r=0,i="";Kw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kw(this.data_)){const r=this.data_,i=FF(r,e,n);return i===null?null:new wi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wi(r,!0)}}static getBlob(...e){if(uv()){const n=e.map(r=>r instanceof wi?r.data_:r);return new wi(VF.apply(null,n))}else{const n=e.map(o=>lv(o)?jF(fr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new wi(i,!0)}}uploadData(){return this.data_}}/**
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
 */function SR(t){let e;try{e=JSON.parse(t)}catch{return null}return CF(e)?e:null}/**
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
 */function WF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function KF(t,e){return e}class Wt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||KF}}let Ac=null;function GF(t){return!lv(t)||t.length<2?t:AR(t)}function RR(){if(Ac)return Ac;const t=[];t.push(new Wt("bucket")),t.push(new Wt("generation")),t.push(new Wt("metageneration")),t.push(new Wt("name","fullPath",!0));function e(s,o){return GF(o)}const n=new Wt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Wt("size");return i.xform=r,t.push(i),t.push(new Wt("timeCreated")),t.push(new Wt("updated")),t.push(new Wt("md5Hash",null,!0)),t.push(new Wt("cacheControl",null,!0)),t.push(new Wt("contentDisposition",null,!0)),t.push(new Wt("contentEncoding",null,!0)),t.push(new Wt("contentLanguage",null,!0)),t.push(new Wt("contentType",null,!0)),t.push(new Wt("metadata","customMetadata",!0)),Ac=t,Ac}function QF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new gn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function YF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return QF(r,t),r}function PR(t,e,n){const r=SR(e);return r===null?null:YF(t,r,n)}function XF(t,e,n,r){const i=SR(e);if(i===null||!lv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,h=t.fullPath,p="/b/"+o(d)+"/o/"+o(h),_=qf(p,n,r),S=wR({alt:"media",token:c});return _+S})[0]}function JF(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function CR(t){if(!t)throw av()}function ZF(t,e){function n(r,i){const s=PR(t,i,e);return CR(s!==null),s}return n}function eU(t,e){function n(r,i){const s=PR(t,i,e);return CR(s!==null),XF(s,i,t.host,t._protocol)}return n}function kR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=hF():i=fF():n.getStatus()===402?i=dF(t.bucket):n.getStatus()===403?i=pF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function bR(t){const e=kR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=cF(t.path)),s.serverResponse=i.serverResponse,s}return n}function tU(t,e,n){const r=e.fullServerUrl(),i=qf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new cv(i,s,eU(t,n),o);return a.errorHandler=bR(e),a}function nU(t,e){const n=e.fullServerUrl(),r=qf(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const a=new cv(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=bR(e),a}function rU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function iU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=rU(null,e)),r}function sU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let N=0;N<2;N++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=iU(e,r,i),d=JF(c,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",_=wi.getBlob(h,r,p);if(_===null)throw wF();const S={name:c.fullPath},P=qf(s,t.host,t._protocol),k="POST",T=t.maxUploadRetryTime,y=new cv(P,k,ZF(t,n),T);return y.urlParams=S,y.headers=o,y.body=_.uploadData(),y.errorHandler=kR(e),y}class oU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Xa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aU extends oU{initXhr(){this.xhr_.responseType="text"}}function dv(){return new aU}/**
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
 */class $s{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $s(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AR(this._location.path)}get storage(){return this._service}get parent(){const e=WF(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new $s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IF(e)}}function lU(t,e,n){t._throwIfRoot("uploadBytes");const r=sU(t.storage,t._location,RR(),new wi(e,!0),n);return t.storage.makeRequestWithTokens(r,dv).then(i=>({metadata:i,ref:t}))}function uU(t){t._throwIfRoot("getDownloadURL");const e=tU(t.storage,t._location,RR());return t.storage.makeRequestWithTokens(e,dv).then(n=>{if(n===null)throw EF();return n})}function cU(t){t._throwIfRoot("deleteObject");const e=nU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dv)}function dU(t,e){const n=qF(t._location.path,e),r=new gn(t._location.bucket,n);return new $s(t.storage,r)}/**
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
 */function fU(t){return/^[A-Za-z]+:\/\//.test(t)}function hU(t,e){return new $s(t,e)}function xR(t,e){if(t instanceof fv){const n=t;if(n._bucket==null)throw _F();const r=new $s(n,n._bucket);return e!=null?xR(r,e):r}else return e!==void 0?dU(t,e):t}function pU(t,e){if(e&&fU(e)){if(t instanceof fv)return hU(t,e);throw Vm("To use ref(service, url), the first argument must be a Storage instance.")}else return xR(t,e)}function Qw(t,e){const n=e==null?void 0:e[vR];return n==null?null:gn.makeFromBucketSpec(n,t)}function mU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:DI(i,t.app.options.projectId))}class fv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lF,this._maxUploadRetryTime=uF,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=Qw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=Qw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SF(_R());{const o=LF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Yw="@firebase/storage",Xw="0.12.6";/**
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
 */const NR="storage";function gU(t,e,n){return t=Be(t),lU(t,e,n)}function yU(t){return t=Be(t),uU(t)}function vU(t){return t=Be(t),cU(t)}function DR(t,e){return t=Be(t),pU(t,e)}function _U(t=Tf(),e){t=Be(t);const r=Xi(t,NR).getImmediate({identifier:e}),i=bI("storage");return i&&wU(r,...i),r}function wU(t,e,n,r={}){mU(t,e,n,r)}function EU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new fv(n,r,i,e,Ys)}function TU(){tr(new Fn(NR,EU,"PUBLIC").setMultipleInstances(!0)),on(Yw,Xw,""),on(Yw,Xw,"esm2017")}TU();const IU={apiKey:"AIzaSyA-ZVvpX59JoXz0YCzLeJDYJ0pfqMbUAR8",authDomain:"chatix-7cbc9.firebaseapp.com",projectId:"chatix-7cbc9",storageBucket:"chatix-7cbc9.appspot.com",messagingSenderId:"464320428421",appId:"1:464320428421:web:27071bcca88824e4deecec"},Kf=jI(IU),We=vL(Kf),OR=gR(Kf);n4(Kf);const LR=_U(Kf);function MR(t){const e=t.split("?")[0].split(".");return e[e.length-1]}const SU={data:null,profile:null,status:"loading"},VR=wu("user/getUserProfile",async t=>{const e=Un(We,"profile",t);return{...(await Ff(e)).data()}}),FR=wu("user/changeUserProfile",async({userEmail:t,name:e,biography:n,profileImage:r,defaultProfileUrl:i})=>{let s=i;if(r){const o=DR(LR,`profiles/${t}.${MR(r.name)}`);await gU(o,r),s=await yU(o)}return await Nu(We,async o=>{o.update(Un(We,"profile",t),s?{name:e,biography:n,photoUrl:s}:{name:e,biography:n})}),{name:e,biography:n,photoUrl:s}}),UR=wu("user/deleteProfileImage",async({userEmail:t,profileUrl:e})=>{const n=DR(LR,`profiles/${t}.${MR(e)}`);await vU(n),await Nu(We,async r=>{r.update(Un(We,"profile",t),{photoUrl:""})})}),hv=AI({name:"user",initialState:SU,reducers:{changeUserData:(t,e)=>{t.data=e.payload},changeUserStatus:(t,e)=>{t.status=e.payload}},extraReducers(t){t.addCase(VR.fulfilled,(e,n)=>{e.profile=n.payload}),t.addCase(FR.fulfilled,(e,n)=>{e.profile&&(e.profile={...e.profile,...n.payload})}),t.addCase(UR.fulfilled,({profile:e})=>{e&&(e.photoUrl="")})}}),AU=hv.reducer,RU=hv.actions.changeUserData,PU=hv.actions.changeUserStatus;async function jR(t,e){const n=ra(Bi(We,"chat_message"),mt("from","==",t),mt("to","==",e),mt("seen","==",!1));return(await dA(n)).size}async function zR(t){const e=Un(We,"profile",t),n=await Ff(e);return n.exists()?{...n.data(),email:n.id}:null}const CU={list:[],status:"loading"},BR=wu("chats/getChats",async t=>{let e=[];const n=ra(Bi(We,"chat_room"),Ud(mt("user_1","==",t),mt("user_2","==",t)));return dA(n).then(async r=>{for(let i=0;i<r.size;i++){const s=r.docs[i].data(),o=t===s.user_1?s.user_2:s.user_1,a=await jR(o,t),u=await zR(o);e=[...e,{...u,notSeenedMessages:a}]}}).then(()=>e)}),$R=wu("chats/addChat",async({user_1:t,user_2:e})=>{const n=await jR(e,t);return{...await zR(e),notSeenedMessages:n}}),HR=AI({name:"chats",initialState:CU,reducers:{changeChatsStatus(t,e){t.status=e.payload}},extraReducers(t){t.addCase(BR.fulfilled,(e,n)=>{e.list=n.payload,e.status="success"}),t.addCase($R.fulfilled,(e,{payload:n})=>{e.list=[...e.list,{...n}]})}}),kU=HR.reducer,bU=HR.actions.changeChatsStatus,xU=Mx({reducer:{user:AU,chats:kU}});function WR(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=WR(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function NU(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=WR(t))&&(r&&(r+=" "),r+=e);return r}const Jw=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Zw=NU,qR=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Zw(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=e,o=Object.keys(i).map(c=>{const d=n==null?void 0:n[c],h=s==null?void 0:s[c];if(d===null)return null;const p=Jw(d)||Jw(h);return i[c][p]}),a=n&&Object.entries(n).reduce((c,d)=>{let[h,p]=d;return p===void 0||(c[h]=p),c},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:h,className:p,..._}=d;return Object.entries(_).every(S=>{let[P,k]=S;return Array.isArray(k)?k.includes({...s,...a}[P]):{...s,...a}[P]===k})?[...c,h,p]:c},[]);return Zw(t,o,u,n==null?void 0:n.class,n==null?void 0:n.className)},Br=qR("text-center flex items-center justify-center font-medium rounded-lg transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50",{variants:{intent:{default:"bg-white text-black border hover:bg-base/50",dark:"bg-black/90 text-white/90 hover:bg-black/85",danger:"bg-red-500 text-white hover:bg-red-500/85"},size:{medium:"text-sm px-4 py-2",large:"py-3 text-sm"}},defaultVariants:{intent:"default",size:"medium"}}),eE=()=>{};let pv={},KR={},GR=null,QR={mark:eE,measure:eE};try{typeof window<"u"&&(pv=window),typeof document<"u"&&(KR=document),typeof MutationObserver<"u"&&(GR=MutationObserver),typeof performance<"u"&&(QR=performance)}catch{}const{userAgent:tE=""}=pv.navigator||{},Hi=pv,ze=KR,nE=GR,Rc=QR;Hi.document;const ni=!!ze.documentElement&&!!ze.head&&typeof ze.addEventListener=="function"&&typeof ze.createElement=="function",YR=~tE.indexOf("MSIE")||~tE.indexOf("Trident/");var qe="classic",XR="duotone",wn="sharp",En="sharp-duotone",DU=[qe,XR,wn,En],OU={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},rE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},LU=["kit"],MU=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,VU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,FU={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},UU={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},jU={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},zU={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},BU={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},$U={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},JR={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},HU=["solid","regular","light","thin","duotone","brands"],ZR=[1,2,3,4,5,6,7,8,9,10],WU=ZR.concat([11,12,13,14,15,16,17,18,19,20]),ul={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qU=[...Object.keys(zU),...HU,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ul.GROUP,ul.SWAP_OPACITY,ul.PRIMARY,ul.SECONDARY].concat(ZR.map(t=>"".concat(t,"x"))).concat(WU.map(t=>"w-".concat(t))),KU={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},GU={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},QU={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},iE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Jr="___FONT_AWESOME___",Fm=16,eP="fa",tP="svg-inline--fa",Hs="data-fa-i2svg",Um="data-fa-pseudo-element",YU="data-fa-pseudo-element-pending",mv="data-prefix",gv="data-icon",sE="fontawesome-i2svg",XU="async",JU=["HTML","HEAD","STYLE","SCRIPT"],nP=(()=>{try{return!0}catch{return!1}})(),rP=[qe,wn,En];function Mu(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[qe]}})}const iP={...JR};iP[qe]={...JR[qe],...rE.kit,...rE["kit-duotone"]};const Rs=Mu(iP),jm={...$U};jm[qe]={...jm[qe],...iE.kit,...iE["kit-duotone"]};const uu=Mu(jm),zm={...BU};zm[qe]={...zm[qe],...QU.kit};const Ps=Mu(zm),Bm={...jU};Bm[qe]={...Bm[qe],...GU.kit};const ZU=Mu(Bm),e3=MU,sP="fa-layers-text",t3=VU,n3={...OU};Mu(n3);const r3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],op=ul,sa=new Set;Object.keys(uu[qe]).map(sa.add.bind(sa));Object.keys(uu[wn]).map(sa.add.bind(sa));Object.keys(uu[En]).map(sa.add.bind(sa));const i3=[...LU,...qU],xl=Hi.FontAwesomeConfig||{};function s3(t){var e=ze.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function o3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ze&&typeof ze.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=o3(s3(n));i!=null&&(xl[r]=i)});const oP={styleDefault:"solid",familyDefault:"classic",cssPrefix:eP,replacementClass:tP,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xl.familyPrefix&&(xl.cssPrefix=xl.familyPrefix);const oa={...oP,...xl};oa.autoReplaceSvg||(oa.observeMutations=!1);const J={};Object.keys(oP).forEach(t=>{Object.defineProperty(J,t,{enumerable:!0,set:function(e){oa[t]=e,Nl.forEach(n=>n(J))},get:function(){return oa[t]}})});Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(t){oa.cssPrefix=t,Nl.forEach(e=>e(J))},get:function(){return oa.cssPrefix}});Hi.FontAwesomeConfig=J;const Nl=[];function a3(t){return Nl.push(t),()=>{Nl.splice(Nl.indexOf(t),1)}}const di=Fm,hr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l3(t){if(!t||!ni)return;const e=ze.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ze.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ze.head.insertBefore(e,r),t}const u3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cu(){let t=12,e="";for(;t-- >0;)e+=u3[Math.random()*62|0];return e}function va(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yv(t){return t.classList?va(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function aP(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c3(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(aP(t[n]),'" '),"").trim()}function Gf(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function vv(t){return t.size!==hr.size||t.x!==hr.x||t.y!==hr.y||t.rotate!==hr.rotate||t.flipX||t.flipY}function d3(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function f3(t){let{transform:e,width:n=Fm,height:r=Fm,startCentered:i=!1}=t,s="";return i&&YR?s+="translate(".concat(e.x/di-n/2,"em, ").concat(e.y/di-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/di,"em), calc(-50% + ").concat(e.y/di,"em)) "):s+="translate(".concat(e.x/di,"em, ").concat(e.y/di,"em) "),s+="scale(".concat(e.size/di*(e.flipX?-1:1),", ").concat(e.size/di*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var h3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function lP(){const t=eP,e=tP,n=J.cssPrefix,r=J.replacementClass;let i=h3;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let oE=!1;function ap(){J.autoAddCss&&!oE&&(l3(lP()),oE=!0)}var p3={mixout(){return{dom:{css:lP,insertCss:ap}}},hooks(){return{beforeDOMElementCreation(){ap()},beforeI2svg(){ap()}}}};const Zr=Hi||{};Zr[Jr]||(Zr[Jr]={});Zr[Jr].styles||(Zr[Jr].styles={});Zr[Jr].hooks||(Zr[Jr].hooks={});Zr[Jr].shims||(Zr[Jr].shims=[]);var pr=Zr[Jr];const uP=[],cP=function(){ze.removeEventListener("DOMContentLoaded",cP),Kd=1,uP.map(t=>t())};let Kd=!1;ni&&(Kd=(ze.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ze.readyState),Kd||ze.addEventListener("DOMContentLoaded",cP));function m3(t){ni&&(Kd?setTimeout(t,0):uP.push(t))}function Vu(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?aP(t):"<".concat(e," ").concat(c3(n),">").concat(r.map(Vu).join(""),"</").concat(e,">")}function aE(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lp=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function g3(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function $m(t){const e=g3(t);return e.length===1?e[0].toString(16):null}function y3(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function lE(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=lE(e);typeof pr.hooks.addPack=="function"&&!r?pr.hooks.addPack(t,lE(e)):pr.styles[t]={...pr.styles[t]||{},...i},t==="fas"&&Hm("fa",e)}const{styles:ds,shims:v3}=pr,_3={[qe]:Object.values(Ps[qe]),[wn]:Object.values(Ps[wn]),[En]:Object.values(Ps[En])};let _v=null,dP={},fP={},hP={},pP={},mP={};const w3={[qe]:Object.keys(Rs[qe]),[wn]:Object.keys(Rs[wn]),[En]:Object.keys(Rs[En])};function E3(t){return~i3.indexOf(t)}function T3(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!E3(i)?i:null}const gP=()=>{const t=r=>lp(ds,(i,s,o)=>(i[o]=lp(s,r,{}),i),{});dP=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),fP=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),mP=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in ds||J.autoFetchSvg,n=lp(v3,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});hP=n.names,pP=n.unicodes,_v=Qf(J.styleDefault,{family:J.familyDefault})};a3(t=>{_v=Qf(t.styleDefault,{family:J.familyDefault})});gP();function wv(t,e){return(dP[t]||{})[e]}function I3(t,e){return(fP[t]||{})[e]}function Si(t,e){return(mP[t]||{})[e]}function yP(t){return hP[t]||{prefix:null,iconName:null}}function S3(t){const e=pP[t],n=wv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wi(){return _v}const Ev=()=>({prefix:null,iconName:null,rest:[]});function Qf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=qe}=e,r=Rs[n][t],i=uu[n][t]||uu[n][r],s=t in pr.styles?t:null;return i||s||null}const A3={[qe]:Object.keys(Ps[qe]),[wn]:Object.keys(Ps[wn]),[En]:Object.keys(Ps[En])};function Yf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[qe]:"".concat(J.cssPrefix,"-").concat(qe),[wn]:"".concat(J.cssPrefix,"-").concat(wn),[En]:"".concat(J.cssPrefix,"-").concat(En)};let i=null,s=qe;const o=DU.filter(u=>u!==XR);o.forEach(u=>{(t.includes(r[u])||t.some(c=>A3[u].includes(c)))&&(s=u)});const a=t.reduce((u,c)=>{const d=T3(J.cssPrefix,c);if(ds[c]?(c=_3[s].includes(c)?ZU[s][c]:c,i=c,u.prefix=c):w3[s].indexOf(c)>-1?(i=c,u.prefix=Qf(c,{family:s})):d?u.iconName=d:c!==J.replacementClass&&!o.some(h=>c===r[h])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const h=i==="fa"?yP(u.iconName):{},p=Si(u.prefix,u.iconName);h.prefix&&(i=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ds.far&&ds.fas&&!J.autoFetchSvg&&(u.prefix="fas")}return u},Ev());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===wn&&(ds.fass||J.autoFetchSvg)&&(a.prefix="fass",a.iconName=Si(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===En&&(ds.fasds||J.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Si(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Wi()||"fas"),a}class R3{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Hm(s,i[s]);const o=Ps[qe][s];o&&Hm(o,i[s]),gP()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let uE=[],bo={};const Bo={},P3=Object.keys(Bo);function C3(t,e){let{mixoutsTo:n}=e;return uE=t,bo={},Object.keys(Bo).forEach(r=>{P3.indexOf(r)===-1&&delete Bo[r]}),uE.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{bo[o]||(bo[o]=[]),bo[o].push(s[o])})}r.provides&&r.provides(Bo)}),n}function Wm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(bo[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ws(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(bo[t]||[]).forEach(s=>{s.apply(null,n)})}function qi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Bo[t]?Bo[t].apply(null,e):void 0}function qm(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Wi();if(e)return e=Si(n,e)||e,aE(vP.definitions,n,e)||aE(pr.styles,n,e)}const vP=new R3,k3=()=>{J.autoReplaceSvg=!1,J.observeMutations=!1,Ws("noAuto")},b3={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(Ws("beforeI2svg",t),qi("pseudoElements2svg",t),qi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,m3(()=>{N3({autoReplaceSvgRoot:e}),Ws("watch",t)})}},x3={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Si(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Qf(t[0]);return{prefix:n,iconName:Si(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(J.cssPrefix,"-"))>-1||t.match(e3))){const e=Yf(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Wi(),iconName:Si(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Wi();return{prefix:e,iconName:Si(e,t)||t}}}},Pn={noAuto:k3,config:J,dom:b3,parse:x3,library:vP,findIconDefinition:qm,toHtml:Vu},N3=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ze}=t;(Object.keys(pr.styles).length>0||J.autoFetchSvg)&&ni&&J.autoReplaceSvg&&Pn.dom.i2svg({node:e})};function Xf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Vu(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ni)return;const n=ze.createElement("div");return n.innerHTML=t.html,n.children}}),t}function D3(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(vv(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Gf({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function O3(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(J.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Tv(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:d,watchable:h=!1}=t,{width:p,height:_}=n.found?n:e,S=r==="fak",P=[J.replacementClass,i?"".concat(J.cssPrefix,"-").concat(i):""].filter(U=>d.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(d.classes).join(" ");let k={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:P,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)}};const T=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};h&&(k.attributes[Hs]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||cu())},children:[a]}),delete k.attributes.title);const y={...k,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...T,...d.styles}},{children:I,attributes:N}=n.found&&e.found?qi("generateAbstractMask",y)||{children:[],attributes:{}}:qi("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=N,o?O3(y):D3(y)}function cE(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(u[Hs]="");const c={...o.styles};vv(i)&&(c.transform=f3({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Gf(c);d.length>0&&(u.style=d);const h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function L3(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Gf(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:up}=pr;function Km(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(J.cssPrefix,"-").concat(op.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(op.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(op.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const M3={found:!1,width:512,height:512};function V3(t,e){!nP&&!J.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gm(t,e){let n=e;return e==="fa"&&J.styleDefault!==null&&(e=Wi()),new Promise((r,i)=>{if(n==="fa"){const s=yP(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&up[e]&&up[e][t]){const s=up[e][t];return r(Km(s))}V3(t,e),r({...M3,icon:J.showMissingIcons&&t?qi("missingIconAbstract")||{}:{}})})}const dE=()=>{},Qm=J.measurePerformance&&Rc&&Rc.mark&&Rc.measure?Rc:{mark:dE,measure:dE},cl='FA "6.6.0"',F3=t=>(Qm.mark("".concat(cl," ").concat(t," begins")),()=>_P(t)),_P=t=>{Qm.mark("".concat(cl," ").concat(t," ends")),Qm.measure("".concat(cl," ").concat(t),"".concat(cl," ").concat(t," begins"),"".concat(cl," ").concat(t," ends"))};var Iv={begin:F3,end:_P};const Gc=()=>{};function fE(t){return typeof(t.getAttribute?t.getAttribute(Hs):null)=="string"}function U3(t){const e=t.getAttribute?t.getAttribute(mv):null,n=t.getAttribute?t.getAttribute(gv):null;return e&&n}function j3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(J.replacementClass)}function z3(){return J.autoReplaceSvg===!0?Qc.replace:Qc[J.autoReplaceSvg]||Qc.replace}function B3(t){return ze.createElementNS("http://www.w3.org/2000/svg",t)}function $3(t){return ze.createElement(t)}function wP(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?B3:$3}=e;if(typeof t=="string")return ze.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(wP(s,{ceFn:n}))}),r}function H3(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Qc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(wP(n),e)}),e.getAttribute(Hs)===null&&J.keepOriginalSource){let n=ze.createComment(H3(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~yv(e).indexOf(J.replacementClass))return Qc.replace(t);const r=new RegExp("".concat(J.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===J.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Vu(s)).join(`
`);e.setAttribute(Hs,""),e.innerHTML=i}};function hE(t){t()}function EP(t,e){const n=typeof e=="function"?e:Gc;if(t.length===0)n();else{let r=hE;J.mutateApproach===XU&&(r=Hi.requestAnimationFrame||hE),r(()=>{const i=z3(),s=Iv.begin("mutate");t.map(i),s(),n()})}}let Sv=!1;function TP(){Sv=!0}function Ym(){Sv=!1}let Gd=null;function pE(t){if(!nE||!J.observeMutations)return;const{treeCallback:e=Gc,nodeCallback:n=Gc,pseudoElementsCallback:r=Gc,observeMutationsRoot:i=ze}=t;Gd=new nE(s=>{if(Sv)return;const o=Wi();va(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!fE(a.addedNodes[0])&&(J.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&J.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&fE(a.target)&&~r3.indexOf(a.attributeName))if(a.attributeName==="class"&&U3(a.target)){const{prefix:u,iconName:c}=Yf(yv(a.target));a.target.setAttribute(mv,u||o),c&&a.target.setAttribute(gv,c)}else j3(a.target)&&n(a.target)})}),ni&&Gd.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function W3(){Gd&&Gd.disconnect()}function q3(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function K3(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Yf(yv(t));return i.prefix||(i.prefix=Wi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=I3(i.prefix,t.innerText)||wv(i.prefix,$m(t.innerText))),!i.iconName&&J.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function G3(t){const e=va(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return J.autoA11y&&(n?e["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(r||cu()):(e["aria-hidden"]="true",e.focusable="false")),e}function Q3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=K3(t),s=G3(t),o=Wm("parseNodeAttributes",{},t);let a=e.styleParser?q3(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:hr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:Y3}=pr;function IP(t){const e=J.autoReplaceSvg==="nest"?mE(t,{styleParser:!1}):mE(t);return~e.extra.classes.indexOf(sP)?qi("generateLayersText",t,e):qi("generateSvgReplacementMutation",t,e)}let Ir=new Set;rP.map(t=>{Ir.add("fa-".concat(t))});Object.keys(Rs[qe]).map(Ir.add.bind(Ir));Object.keys(Rs[wn]).map(Ir.add.bind(Ir));Object.keys(Rs[En]).map(Ir.add.bind(Ir));Ir=[...Ir];function gE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();const n=ze.documentElement.classList,r=d=>n.add("".concat(sE,"-").concat(d)),i=d=>n.remove("".concat(sE,"-").concat(d)),s=J.autoFetchSvg?Ir:rP.map(d=>"fa-".concat(d)).concat(Object.keys(Y3));s.includes("fa")||s.push("fa");const o=[".".concat(sP,":not([").concat(Hs,"])")].concat(s.map(d=>".".concat(d,":not([").concat(Hs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=va(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Iv.begin("onTree"),c=a.reduce((d,h)=>{try{const p=IP(h);p&&d.push(p)}catch(p){nP||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(p=>{EP(p,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(p=>{u(),h(p)})})}function X3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;IP(t).then(n=>{n&&EP([n],e)})}function J3(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:qm(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:qm(i||{})),t(r,{...n,mask:i})}}const Z3=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hr,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:_}=t;return Xf({type:"icon",...t},()=>(Ws("beforeDOMElementCreation",{iconDefinition:t,params:e}),J.autoA11y&&(o?c["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(a||cu()):(c["aria-hidden"]="true",c.focusable="false")),Tv({icons:{main:Km(_),mask:i?Km(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{...hr,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:u}})))};var e6={mixout(){return{icon:J3(Z3)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=gE,t.nodeCallback=X3,t}}},provides(t){t.i2svg=function(e){const{node:n=ze,callback:r=()=>{}}=e;return gE(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:d,extra:h}=n;return new Promise((p,_)=>{Promise.all([Gm(r,o),c.iconName?Gm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[P,k]=S;p([e,Tv({icons:{main:P,mask:k},prefix:o,iconName:r,transform:a,symbol:u,maskId:d,title:i,titleId:s,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Gf(o);a.length>0&&(r.style=a);let u;return vv(s)&&(u=qi("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},t6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Xf({type:"layer"},()=>{Ws("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(J.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},n6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Xf({type:"counter",content:t},()=>(Ws("beforeDOMElementCreation",{content:t,params:e}),L3({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(J.cssPrefix,"-layers-counter"),...r]}})))}}}},r6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hr,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Xf({type:"text",content:t},()=>(Ws("beforeDOMElementCreation",{content:t,params:e}),cE({content:t,transform:{...hr,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(J.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(YR){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return J.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,cE({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const i6=new RegExp('"',"ug"),yE=[1105920,1112319],vE={FontAwesome:{normal:"fas",400:"fas"},...UU,...FU,...KU},Xm=Object.keys(vE).reduce((t,e)=>(t[e.toLowerCase()]=vE[e],t),{}),s6=Object.keys(Xm).reduce((t,e)=>{const n=Xm[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function o6(t){const e=t.replace(i6,""),n=y3(e,0),r=n>=yE[0]&&n<=yE[1],i=e.length===2?e[0]===e[1]:!1;return{value:$m(i?e[0]:e),isSecondary:r||i}}function a6(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Xm[n]||{})[i]||s6[n]}function _E(t,e){const n="".concat(YU).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=va(t.children).filter(p=>p.getAttribute(Um)===e)[0],a=Hi.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(t3),d=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&h!=="none"&&h!==""){const p=a.getPropertyValue("content");let _=a6(u,d);const{value:S,isSecondary:P}=o6(p),k=c[0].startsWith("FontAwesome");let T=wv(_,S),y=T;if(k){const I=S3(S);I.iconName&&I.prefix&&(T=I.iconName,_=I.prefix)}if(T&&!P&&(!o||o.getAttribute(mv)!==_||o.getAttribute(gv)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=Q3(),{extra:N}=I;N.attributes[Um]=e,Gm(T,_).then(U=>{const C=Tv({...I,icons:{main:U,mask:Ev()},prefix:_,iconName:y,extra:N,watchable:!0}),E=ze.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=C.map(g=>Vu(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function l6(t){return Promise.all([_E(t,"::before"),_E(t,"::after")])}function u6(t){return t.parentNode!==document.head&&!~JU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Um)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wE(t){if(ni)return new Promise((e,n)=>{const r=va(t.querySelectorAll("*")).filter(u6).map(l6),i=Iv.begin("searchPseudoElements");TP(),Promise.all(r).then(()=>{i(),Ym(),e()}).catch(()=>{i(),Ym(),n()})})}var c6={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=wE,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ze}=e;J.searchPseudoElements&&wE(n)}}};let EE=!1;var d6={mixout(){return{dom:{unwatch(){TP(),EE=!0}}}},hooks(){return{bootstrap(){pE(Wm("mutationObserverCallbacks",{}))},noAuto(){W3()},watch(t){const{observeMutationsRoot:e}=t;EE?Ym():pE(Wm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const TE=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var f6={mixout(){return{parse:{transform:t=>TE(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=TE(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:d,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const cp={x:0,y:0,width:"100%",height:"100%"};function IE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function h6(t){return t.tag==="g"?t.children:[t]}var p6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Yf(n.split(" ").map(i=>i.trim())):Ev();return r.prefix||(r.prefix=Wi()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:d,icon:h}=s,p=d3({transform:a,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:{...cp,fill:"white"}},S=c.children?{children:c.children.map(IE)}:{},P={tag:"g",attributes:{...p.inner},children:[IE({tag:c.tag,attributes:{...c.attributes,...p.path},...S})]},k={tag:"g",attributes:{...p.outer},children:[P]},T="mask-".concat(o||cu()),y="clip-".concat(o||cu()),I={tag:"mask",attributes:{...cp,id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,k]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:h6(h)},I]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(T,")"),...cp}}),{children:n,attributes:r}}}},m6={provides(t){let e=!1;Hi.matchMedia&&(e=Hi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},g6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},y6=[p3,e6,t6,n6,r6,c6,d6,f6,p6,m6,g6];C3(y6,{mixoutsTo:Pn});Pn.noAuto;Pn.config;Pn.library;Pn.dom;const Jm=Pn.parse;Pn.findIconDefinition;Pn.toHtml;const v6=Pn.icon;Pn.layer;Pn.text;Pn.counter;var SP={exports:{}},_6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w6=_6,E6=w6;function AP(){}function RP(){}RP.resetWarningCache=AP;var T6=function(){function t(r,i,s,o,a,u){if(u!==E6){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:RP,resetWarningCache:AP};return n.PropTypes=n,n};SP.exports=T6();var I6=SP.exports;const pe=sg(I6);function SE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?SE(Object(n),!0).forEach(function(r){xo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):SE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qd(t){"@babel/helpers - typeof";return Qd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qd(t)}function xo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function A6(t,e){if(t==null)return{};var n=S6(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Zm(t){return R6(t)||P6(t)||C6(t)||k6()}function R6(t){if(Array.isArray(t))return eg(t)}function P6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function C6(t,e){if(t){if(typeof t=="string")return eg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eg(t,e)}}function eg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b6(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,h=t.pulse,p=t.fixedWidth,_=t.inverse,S=t.border,P=t.listItem,k=t.flip,T=t.size,y=t.rotation,I=t.pull,N=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":p,"fa-inverse":_,"fa-border":S,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},xo(e,"fa-".concat(T),typeof T<"u"&&T!==null),xo(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),xo(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),xo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(U){return N[U]?U:null}).filter(function(U){return U})}function x6(t){return t=t-0,t===t}function PP(t){return x6(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var N6=["style"];function D6(t){return t.charAt(0).toUpperCase()+t.slice(1)}function O6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=PP(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[D6(i)]=s:e[i]=s,e},{})}function CP(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return CP(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=O6(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[PP(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=A6(n,N6);return i.attrs.style=cr(cr({},i.attrs.style),o),t.apply(void 0,[e.tag,cr(cr({},i.attrs),a)].concat(Zm(r)))}var kP=!1;try{kP=!0}catch{}function L6(){if(!kP&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function AE(t){if(t&&Qd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jm.icon)return Jm.icon(t);if(t===null)return null;if(t&&Qd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function dp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xo({},t,e):{}}var RE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},an=Zd.forwardRef(function(t,e){var n=cr(cr({},RE),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=AE(r),h=dp("classes",[].concat(Zm(b6(n)),Zm((o||"").split(" ")))),p=dp("transform",typeof n.transform=="string"?Jm.transform(n.transform):n.transform),_=dp("mask",AE(i)),S=v6(d,cr(cr(cr(cr({},h),p),_),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!S)return L6("Could not find icon",d),null;var P=S.abstract,k={ref:e};return Object.keys(n).forEach(function(T){RE.hasOwnProperty(T)||(k[T]=n[T])}),M6(P[0],k)});an.displayName="FontAwesomeIcon";an.propTypes={beat:pe.bool,border:pe.bool,beatFade:pe.bool,bounce:pe.bool,className:pe.string,fade:pe.bool,flash:pe.bool,mask:pe.oneOfType([pe.object,pe.array,pe.string]),maskId:pe.string,fixedWidth:pe.bool,inverse:pe.bool,flip:pe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:pe.oneOfType([pe.object,pe.array,pe.string]),listItem:pe.bool,pull:pe.oneOf(["right","left"]),pulse:pe.bool,rotation:pe.oneOf([0,90,180,270]),shake:pe.bool,size:pe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:pe.bool,spinPulse:pe.bool,spinReverse:pe.bool,symbol:pe.oneOfType([pe.bool,pe.string]),title:pe.string,titleId:pe.string,transform:pe.oneOfType([pe.string,pe.object]),swapOpacity:pe.bool};var M6=CP.bind(null,Zd.createElement);const bP={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},Av={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]},V6={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]},F6={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},U6=F6;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $e(){return $e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$e.apply(this,arguments)}var ot;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ot||(ot={}));const PE="popstate";function j6(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return du("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qs(i)}return B6(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function aa(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z6(){return Math.random().toString(36).substr(2,8)}function CE(t,e){return{usr:t.state,key:t.key,idx:e}}function du(t,e,n,r){return n===void 0&&(n=null),$e({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zi(e):e,{state:n,key:e&&e.key||r||z6()})}function qs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function B6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ot.Pop,u=null,c=d();c==null&&(c=0,o.replaceState($e({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=ot.Pop;let k=d(),T=k==null?null:k-c;c=k,u&&u({action:a,location:P.location,delta:T})}function p(k,T){a=ot.Push;let y=du(P.location,k,T);c=d()+1;let I=CE(y,c),N=P.createHref(y);try{o.pushState(I,"",N)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(N)}s&&u&&u({action:a,location:P.location,delta:1})}function _(k,T){a=ot.Replace;let y=du(P.location,k,T);c=d();let I=CE(y,c),N=P.createHref(y);o.replaceState(I,"",N),s&&u&&u({action:a,location:P.location,delta:0})}function S(k){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:qs(k);return y=y.replace(/ $/,"%20"),fe(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let P={get action(){return a},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(PE,h),u=k,()=>{i.removeEventListener(PE,h),u=null}},createHref(k){return e(i,k)},createURL:S,encodeLocation(k){let T=S(k);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:_,go(k){return o.go(k)}};return P}var Le;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Le||(Le={}));const $6=new Set(["lazy","caseSensitive","path","id","index","children"]);function H6(t){return t.index===!0}function fu(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),H6(i)){let u=$e({},i,e(i),{id:a});return r[a]=u,u}else{let u=$e({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=fu(i.children,e,o,r)),u}})}function fs(t,e,n){return n===void 0&&(n="/"),Yc(t,e,n,!1)}function Yc(t,e,n,r){let i=typeof e=="string"?Zi(e):e,s=_a(i.pathname||"/",n);if(s==null)return null;let o=xP(t);q6(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=r5(s);a=t5(o[u],c,r)}return a}function W6(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function xP(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xP(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Z6(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of NP(s.path))i(s,o,u)}),e}function NP(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NP(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function q6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:e5(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K6=/^:[\w-]+$/,G6=3,Q6=2,Y6=1,X6=10,J6=-2,kE=t=>t==="*";function Z6(t,e){let n=t.split("/"),r=n.length;return n.some(kE)&&(r+=J6),e&&(r+=Q6),n.filter(i=>!kE(i)).reduce((i,s)=>i+(K6.test(s)?G6:s===""?Y6:X6),r)}function e5(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function t5(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=bE({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=bE({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:$r([s,h.pathname]),pathnameBase:o5($r([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=$r([s,h.pathnameBase]))}return o}function bE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=n5(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:p,isOptional:_}=d;if(p==="*"){let P=a[h]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=a[h];return _&&!S?c[p]=void 0:c[p]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function n5(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),aa(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function r5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return aa(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _a(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function i5(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zi(t):t;return{pathname:n?n.startsWith("/")?n:s5(n,e):e,search:a5(r),hash:l5(i)}}function s5(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jf(t,e){let n=DP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zi(t):(i=$e({},t),fe(!i.pathname||!i.pathname.includes("?"),fp("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),fp("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),fp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let u=i5(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const $r=t=>t.join("/").replace(/\/\/+/g,"/"),o5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),a5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,OP=function(e,n){n===void 0&&(n=302);let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let i=new Headers(r.headers);return i.set("Location",e),new Response(null,$e({},r,{headers:i}))};class Rv{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function eh(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LP=["post","put","patch","delete"],u5=new Set(LP),c5=["get",...LP],d5=new Set(c5),f5=new Set([301,302,303,307,308]),h5=new Set([307,308]),hp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},p5={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ja={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m5=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),MP="remix-router-transitions";function g5(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=m5;let s={},o=fu(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||E5,d=t.unstable_patchRoutesOnMiss,h=$e({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),p=null,_=new Set,S=null,P=null,k=null,T=t.hydrationData!=null,y=fs(o,t.history.location,u),I=null;if(y==null&&!d){let x=qt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=jE(o);y=D,I={[M.id]:x}}y&&d&&Cr(y,o,t.history.location.pathname).active&&(y=null);let N;if(!y)N=!1,y=[];else if(y.some(x=>x.route.lazy))N=!1;else if(!y.some(x=>x.route.loader))N=!0;else if(h.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=j=>j.route.loader?typeof j.route.loader=="function"&&j.route.loader.hydrate===!0?!1:x&&x[j.route.id]!==void 0||D&&D[j.route.id]!==void 0:!0;if(D){let j=y.findIndex(K=>D[K.route.id]!==void 0);N=y.slice(0,j+1).every(M)}else N=y.every(M)}else N=t.hydrationData!=null;let U,C={historyAction:t.history.action,location:t.history.location,matches:y,initialized:N,navigation:hp,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||I,fetchers:new Map,blockers:new Map},E=ot.Pop,g=!1,w,A=!1,b=new Map,O=null,R=!1,Re=!1,Zt=[],rr=[],Pe=new Map,G=0,re=-1,oe=new Map,Te=new Set,ve=new Map,Ne=new Map,ct=new Set,Et=new Map,Tt=new Map,zn=new Map,Ta=!1;function ih(){if(p=t.history.listen(x=>{let{action:D,location:M,delta:j}=x;if(Ta){Ta=!1;return}aa(Tt.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=ka({currentLocation:C.location,nextLocation:M,historyAction:D});if(K&&j!=null){Ta=!0,t.history.go(j*-1),ns(K,{state:"blocked",location:M,proceed(){ns(K,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(j)},reset(){let Z=new Map(C.blockers);Z.set(K,Ja),dt({blockers:Z})}});return}return sr(D,M)}),n){O5(e,b);let x=()=>L5(e,b);e.addEventListener("pagehide",x),O=()=>e.removeEventListener("pagehide",x)}return C.initialized||sr(ot.Pop,C.location,{initialHydration:!0}),U}function Zs(){p&&p(),O&&O(),_.clear(),w&&w.abort(),C.fetchers.forEach((x,D)=>no(D)),C.blockers.forEach((x,D)=>io(D))}function eo(x){return _.add(x),()=>_.delete(x)}function dt(x,D){D===void 0&&(D={}),C=$e({},C,x);let M=[],j=[];h.v7_fetcherPersist&&C.fetchers.forEach((K,Z)=>{K.state==="idle"&&(ct.has(Z)?j.push(Z):M.push(Z))}),[..._].forEach(K=>K(C,{deletedFetchers:j,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),h.v7_fetcherPersist&&(M.forEach(K=>C.fetchers.delete(K)),j.forEach(K=>no(K)))}function ir(x,D,M){var j,K;let{flushSync:Z}=M===void 0?{}:M,ie=C.actionData!=null&&C.navigation.formMethod!=null&&Gn(C.navigation.formMethod)&&C.navigation.state==="loading"&&((j=x.state)==null?void 0:j._isRedirect)!==!0,W;D.actionData?Object.keys(D.actionData).length>0?W=D.actionData:W=null:ie?W=C.actionData:W=null;let ce=D.loaderData?FE(C.loaderData,D.loaderData,D.matches||[],D.errors):C.loaderData,te=C.blockers;te.size>0&&(te=new Map(te),te.forEach((_e,Ce)=>te.set(Ce,Ja)));let ee=g===!0||C.navigation.formMethod!=null&&Gn(C.navigation.formMethod)&&((K=x.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),R||E===ot.Pop||(E===ot.Push?t.history.push(x,x.state):E===ot.Replace&&t.history.replace(x,x.state));let he;if(E===ot.Pop){let _e=b.get(C.location.pathname);_e&&_e.has(x.pathname)?he={currentLocation:C.location,nextLocation:x}:b.has(x.pathname)&&(he={currentLocation:x,nextLocation:C.location})}else if(A){let _e=b.get(C.location.pathname);_e?_e.add(x.pathname):(_e=new Set([x.pathname]),b.set(C.location.pathname,_e)),he={currentLocation:C.location,nextLocation:x}}dt($e({},D,{actionData:W,loaderData:ce,historyAction:E,location:x,initialized:!0,navigation:hp,revalidation:"idle",restoreScrollPosition:xa(x,D.matches||C.matches),preventScrollReset:ee,blockers:te}),{viewTransitionOpts:he,flushSync:Z===!0}),E=ot.Pop,g=!1,A=!1,R=!1,Re=!1,Zt=[],rr=[]}async function to(x,D){if(typeof x=="number"){t.history.go(x);return}let M=tg(C.location,C.matches,u,h.v7_prependBasename,x,h.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:j,submission:K,error:Z}=xE(h.v7_normalizeFormMethod,!1,M,D),ie=C.location,W=du(C.location,j,D&&D.state);W=$e({},W,t.history.encodeLocation(W));let ce=D&&D.replace!=null?D.replace:void 0,te=ot.Push;ce===!0?te=ot.Replace:ce===!1||K!=null&&Gn(K.formMethod)&&K.formAction===C.location.pathname+C.location.search&&(te=ot.Replace);let ee=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,he=(D&&D.unstable_flushSync)===!0,_e=ka({currentLocation:ie,nextLocation:W,historyAction:te});if(_e){ns(_e,{state:"blocked",location:W,proceed(){ns(_e,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),to(x,D)},reset(){let Ce=new Map(C.blockers);Ce.set(_e,Ja),dt({blockers:Ce})}});return}return await sr(te,W,{submission:K,pendingError:Z,preventScrollReset:ee,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:he})}function Ia(){if(ht(),dt({revalidation:"loading"}),C.navigation.state!=="submitting"){if(C.navigation.state==="idle"){sr(C.historyAction,C.location,{startUninterruptedRevalidation:!0});return}sr(E||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation})}}async function sr(x,D,M){w&&w.abort(),w=null,E=x,R=(M&&M.startUninterruptedRevalidation)===!0,so(C.location,C.matches),g=(M&&M.preventScrollReset)===!0,A=(M&&M.enableViewTransition)===!0;let j=a||o,K=M&&M.overrideNavigation,Z=fs(j,D,u),ie=(M&&M.flushSync)===!0,W=Cr(Z,j,D.pathname);if(W.active&&W.matches&&(Z=W.matches),!Z){let{error:we,notFoundMatches:rt,route:Ke}=Rr(D.pathname);ir(D,{matches:rt,loaderData:{},errors:{[Ke.id]:we}},{flushSync:ie});return}if(C.initialized&&!Re&&P5(C.location,D)&&!(M&&M.submission&&Gn(M.submission.formMethod))){ir(D,{matches:Z},{flushSync:ie});return}w=new AbortController;let ce=fo(t.history,D,w.signal,M&&M.submission),te;if(M&&M.pendingError)te=[Dl(Z).route.id,{type:Le.error,error:M.pendingError}];else if(M&&M.submission&&Gn(M.submission.formMethod)){let we=await sh(ce,D,M.submission,Z,W.active,{replace:M.replace,flushSync:ie});if(we.shortCircuited)return;if(we.pendingActionResult){let[rt,Ke]=we.pendingActionResult;if(fn(Ke)&&eh(Ke.error)&&Ke.error.status===404){w=null,ir(D,{matches:we.matches,loaderData:{},errors:{[rt]:Ke.error}});return}}Z=we.matches||Z,te=we.pendingActionResult,K=pp(D,M.submission),ie=!1,W.active=!1,ce=fo(t.history,ce.url,ce.signal)}let{shortCircuited:ee,matches:he,loaderData:_e,errors:Ce}=await oh(ce,D,Z,W.active,K,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ie,te);ee||(w=null,ir(D,$e({matches:he||Z},UE(te),{loaderData:_e,errors:Ce})))}async function sh(x,D,M,j,K,Z){Z===void 0&&(Z={}),ht();let ie=N5(D,M);if(dt({navigation:ie},{flushSync:Z.flushSync===!0}),K){let te=await is(j,D.pathname,x.signal);if(te.type==="aborted")return{shortCircuited:!0};if(te.type==="error"){let{error:ee,notFoundMatches:he,route:_e}=ii(D.pathname,te);return{matches:he,pendingActionResult:[_e.id,{type:Le.error,error:ee}]}}else if(te.matches)j=te.matches;else{let{notFoundMatches:ee,error:he,route:_e}=Rr(D.pathname);return{matches:ee,pendingActionResult:[_e.id,{type:Le.error,error:he}]}}}let W,ce=dl(j,D);if(!ce.route.action&&!ce.route.lazy)W={type:Le.error,error:qt(405,{method:x.method,pathname:D.pathname,routeId:ce.route.id})};else if(W=(await ri("action",x,[ce],j))[0],x.signal.aborted)return{shortCircuited:!0};if(ws(W)){let te;return Z&&Z.replace!=null?te=Z.replace:te=LE(W.response.headers.get("Location"),new URL(x.url),u)===C.location.pathname+C.location.search,await Ar(x,W,{submission:M,replace:te}),{shortCircuited:!0}}if(_s(W))throw qt(400,{type:"defer-action"});if(fn(W)){let te=Dl(j,ce.route.id);return(Z&&Z.replace)!==!0&&(E=ot.Push),{matches:j,pendingActionResult:[te.route.id,W]}}return{matches:j,pendingActionResult:[ce.route.id,W]}}async function oh(x,D,M,j,K,Z,ie,W,ce,te,ee){let he=K||pp(D,Z),_e=Z||ie||$E(he),Ce=!R&&(!h.v7_partialHydration||!ce);if(j){if(Ce){let Ve=Sa(ee);dt($e({navigation:he},Ve!==void 0?{actionData:Ve}:{}),{flushSync:te})}let de=await is(M,D.pathname,x.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){let{error:Ve,notFoundMatches:Ot,route:ke}=ii(D.pathname,de);return{matches:Ot,loaderData:{},errors:{[ke.id]:Ve}}}else if(de.matches)M=de.matches;else{let{error:Ve,notFoundMatches:Ot,route:ke}=Rr(D.pathname);return{matches:Ot,loaderData:{},errors:{[ke.id]:Ve}}}}let we=a||o,[rt,Ke]=NE(t.history,C,M,_e,D,h.v7_partialHydration&&ce===!0,h.unstable_skipActionErrorRevalidation,Re,Zt,rr,ct,ve,Te,we,u,ee);if(rs(de=>!(M&&M.some(Ve=>Ve.route.id===de))||rt&&rt.some(Ve=>Ve.route.id===de)),re=++G,rt.length===0&&Ke.length===0){let de=ro();return ir(D,$e({matches:M,loaderData:{},errors:ee&&fn(ee[1])?{[ee[0]]:ee[1].error}:null},UE(ee),de?{fetchers:new Map(C.fetchers)}:{}),{flushSync:te}),{shortCircuited:!0}}if(Ce){let de={};if(!j){de.navigation=he;let Ve=Sa(ee);Ve!==void 0&&(de.actionData=Ve)}Ke.length>0&&(de.fetchers=Aa(Ke)),dt(de,{flushSync:te})}Ke.forEach(de=>{Pe.has(de.key)&&Bn(de.key),de.controller&&Pe.set(de.key,de.controller)});let si=()=>Ke.forEach(de=>Bn(de.key));w&&w.signal.addEventListener("abort",si);let{loaderResults:or,fetcherResults:$n}=await ft(C.matches,M,rt,Ke,x);if(x.signal.aborted)return{shortCircuited:!0};w&&w.signal.removeEventListener("abort",si),Ke.forEach(de=>Pe.delete(de.key));let kr=zE([...or,...$n]);if(kr){if(kr.idx>=rt.length){let de=Ke[kr.idx-rt.length].key;Te.add(de)}return await Ar(x,kr.result,{replace:W}),{shortCircuited:!0}}let{loaderData:ar,errors:Dt}=VE(C,M,rt,or,ee,Ke,$n,Et);Et.forEach((de,Ve)=>{de.subscribe(Ot=>{(Ot||de.done)&&Et.delete(Ve)})}),h.v7_partialHydration&&ce&&C.errors&&Object.entries(C.errors).filter(de=>{let[Ve]=de;return!rt.some(Ot=>Ot.route.id===Ve)}).forEach(de=>{let[Ve,Ot]=de;Dt=Object.assign(Dt||{},{[Ve]:Ot})});let kn=ro(),oi=Uu(re),oo=kn||oi||Ke.length>0;return $e({matches:M,loaderData:ar,errors:Dt},oo?{fetchers:new Map(C.fetchers)}:{})}function Sa(x){if(x&&!fn(x[1]))return{[x[0]]:x[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function Aa(x){return x.forEach(D=>{let M=C.fetchers.get(D.key),j=Za(void 0,M?M.data:void 0);C.fetchers.set(D.key,j)}),new Map(C.fetchers)}function Fu(x,D,M,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Pe.has(x)&&Bn(x);let K=(j&&j.unstable_flushSync)===!0,Z=a||o,ie=tg(C.location,C.matches,u,h.v7_prependBasename,M,h.v7_relativeSplatPath,D,j==null?void 0:j.relative),W=fs(Z,ie,u),ce=Cr(W,Z,ie);if(ce.active&&ce.matches&&(W=ce.matches),!W){Cn(x,D,qt(404,{pathname:ie}),{flushSync:K});return}let{path:te,submission:ee,error:he}=xE(h.v7_normalizeFormMethod,!0,ie,j);if(he){Cn(x,D,he,{flushSync:K});return}let _e=dl(W,te);if(g=(j&&j.preventScrollReset)===!0,ee&&Gn(ee.formMethod)){ah(x,D,te,_e,W,ce.active,K,ee);return}ve.set(x,{routeId:D,path:te}),Ra(x,D,te,_e,W,ce.active,K,ee)}async function ah(x,D,M,j,K,Z,ie,W){ht(),ve.delete(x);function ce(ke){if(!ke.route.action&&!ke.route.lazy){let un=qt(405,{method:W.formMethod,pathname:M,routeId:D});return Cn(x,D,un,{flushSync:ie}),!0}return!1}if(!Z&&ce(j))return;let te=C.fetchers.get(x);ln(x,D5(W,te),{flushSync:ie});let ee=new AbortController,he=fo(t.history,M,ee.signal,W);if(Z){let ke=await is(K,M,he.signal);if(ke.type==="aborted")return;if(ke.type==="error"){let{error:un}=ii(M,ke);Cn(x,D,un,{flushSync:ie});return}else if(ke.matches){if(K=ke.matches,j=dl(K,M),ce(j))return}else{Cn(x,D,qt(404,{pathname:M}),{flushSync:ie});return}}Pe.set(x,ee);let _e=G,we=(await ri("action",he,[j],K))[0];if(he.signal.aborted){Pe.get(x)===ee&&Pe.delete(x);return}if(h.v7_fetcherPersist&&ct.has(x)){if(ws(we)||fn(we)){ln(x,fi(void 0));return}}else{if(ws(we))if(Pe.delete(x),re>_e){ln(x,fi(void 0));return}else return Te.add(x),ln(x,Za(W)),Ar(he,we,{fetcherSubmission:W});if(fn(we)){Cn(x,D,we.error);return}}if(_s(we))throw qt(400,{type:"defer-action"});let rt=C.navigation.location||C.location,Ke=fo(t.history,rt,ee.signal),si=a||o,or=C.navigation.state!=="idle"?fs(si,C.navigation.location,u):C.matches;fe(or,"Didn't find any matches after fetcher action");let $n=++G;oe.set(x,$n);let kr=Za(W,we.data);C.fetchers.set(x,kr);let[ar,Dt]=NE(t.history,C,or,W,rt,!1,h.unstable_skipActionErrorRevalidation,Re,Zt,rr,ct,ve,Te,si,u,[j.route.id,we]);Dt.filter(ke=>ke.key!==x).forEach(ke=>{let un=ke.key,Na=C.fetchers.get(un),zu=Za(void 0,Na?Na.data:void 0);C.fetchers.set(un,zu),Pe.has(un)&&Bn(un),ke.controller&&Pe.set(un,ke.controller)}),dt({fetchers:new Map(C.fetchers)});let kn=()=>Dt.forEach(ke=>Bn(ke.key));ee.signal.addEventListener("abort",kn);let{loaderResults:oi,fetcherResults:oo}=await ft(C.matches,or,ar,Dt,Ke);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",kn),oe.delete(x),Pe.delete(x),Dt.forEach(ke=>Pe.delete(ke.key));let de=zE([...oi,...oo]);if(de){if(de.idx>=ar.length){let ke=Dt[de.idx-ar.length].key;Te.add(ke)}return Ar(Ke,de.result)}let{loaderData:Ve,errors:Ot}=VE(C,C.matches,ar,oi,void 0,Dt,oo,Et);if(C.fetchers.has(x)){let ke=fi(we.data);C.fetchers.set(x,ke)}Uu($n),C.navigation.state==="loading"&&$n>re?(fe(E,"Expected pending action"),w&&w.abort(),ir(C.navigation.location,{matches:or,loaderData:Ve,errors:Ot,fetchers:new Map(C.fetchers)})):(dt({errors:Ot,loaderData:FE(C.loaderData,Ve,or,Ot),fetchers:new Map(C.fetchers)}),Re=!1)}async function Ra(x,D,M,j,K,Z,ie,W){let ce=C.fetchers.get(x);ln(x,Za(W,ce?ce.data:void 0),{flushSync:ie});let te=new AbortController,ee=fo(t.history,M,te.signal);if(Z){let we=await is(K,M,ee.signal);if(we.type==="aborted")return;if(we.type==="error"){let{error:rt}=ii(M,we);Cn(x,D,rt,{flushSync:ie});return}else if(we.matches)K=we.matches,j=dl(K,M);else{Cn(x,D,qt(404,{pathname:M}),{flushSync:ie});return}}Pe.set(x,te);let he=G,Ce=(await ri("loader",ee,[j],K))[0];if(_s(Ce)&&(Ce=await zP(Ce,ee.signal,!0)||Ce),Pe.get(x)===te&&Pe.delete(x),!ee.signal.aborted){if(ct.has(x)){ln(x,fi(void 0));return}if(ws(Ce))if(re>he){ln(x,fi(void 0));return}else{Te.add(x),await Ar(ee,Ce);return}if(fn(Ce)){Cn(x,D,Ce.error);return}fe(!_s(Ce),"Unhandled fetcher deferred data"),ln(x,fi(Ce.data))}}async function Ar(x,D,M){let{submission:j,fetcherSubmission:K,replace:Z}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(Re=!0);let ie=D.response.headers.get("Location");fe(ie,"Expected a Location header on the redirect Response"),ie=LE(ie,new URL(x.url),u);let W=du(C.location,ie,{_isRedirect:!0});if(n){let Ce=!1;if(D.response.headers.has("X-Remix-Reload-Document"))Ce=!0;else if(Pv.test(ie)){const we=t.history.createURL(ie);Ce=we.origin!==e.location.origin||_a(we.pathname,u)==null}if(Ce){Z?e.location.replace(ie):e.location.assign(ie);return}}w=null;let ce=Z===!0?ot.Replace:ot.Push,{formMethod:te,formAction:ee,formEncType:he}=C.navigation;!j&&!K&&te&&ee&&he&&(j=$E(C.navigation));let _e=j||K;if(h5.has(D.response.status)&&_e&&Gn(_e.formMethod))await sr(ce,W,{submission:$e({},_e,{formAction:ie}),preventScrollReset:g});else{let Ce=pp(W,j);await sr(ce,W,{overrideNavigation:Ce,fetcherSubmission:K,preventScrollReset:g})}}async function ri(x,D,M,j){try{let K=await T5(c,x,D,M,j,s,i);return await Promise.all(K.map((Z,ie)=>{if(k5(Z)){let W=Z.result;return{type:Le.redirect,response:A5(W,D,M[ie].route.id,j,u,h.v7_relativeSplatPath)}}return S5(Z)}))}catch(K){return M.map(()=>({type:Le.error,error:K}))}}async function ft(x,D,M,j,K){let[Z,...ie]=await Promise.all([M.length?ri("loader",K,M,D):[],...j.map(W=>{if(W.matches&&W.match&&W.controller){let ce=fo(t.history,W.path,W.controller.signal);return ri("loader",ce,[W.match],W.matches).then(te=>te[0])}else return Promise.resolve({type:Le.error,error:qt(404,{pathname:W.path})})})]);return await Promise.all([BE(x,M,Z,Z.map(()=>K.signal),!1,C.loaderData),BE(x,j.map(W=>W.match),ie,j.map(W=>W.controller?W.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ie}}function ht(){Re=!0,Zt.push(...rs()),ve.forEach((x,D)=>{Pe.has(D)&&(rr.push(D),Bn(D))})}function ln(x,D,M){M===void 0&&(M={}),C.fetchers.set(x,D),dt({fetchers:new Map(C.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Cn(x,D,M,j){j===void 0&&(j={});let K=Dl(C.matches,D);no(x),dt({errors:{[K.route.id]:M},fetchers:new Map(C.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function Pa(x){return h.v7_fetcherPersist&&(Ne.set(x,(Ne.get(x)||0)+1),ct.has(x)&&ct.delete(x)),C.fetchers.get(x)||p5}function no(x){let D=C.fetchers.get(x);Pe.has(x)&&!(D&&D.state==="loading"&&oe.has(x))&&Bn(x),ve.delete(x),oe.delete(x),Te.delete(x),ct.delete(x),C.fetchers.delete(x)}function ts(x){if(h.v7_fetcherPersist){let D=(Ne.get(x)||0)-1;D<=0?(Ne.delete(x),ct.add(x)):Ne.set(x,D)}else no(x);dt({fetchers:new Map(C.fetchers)})}function Bn(x){let D=Pe.get(x);fe(D,"Expected fetch controller: "+x),D.abort(),Pe.delete(x)}function Ca(x){for(let D of x){let M=Pa(D),j=fi(M.data);C.fetchers.set(D,j)}}function ro(){let x=[],D=!1;for(let M of Te){let j=C.fetchers.get(M);fe(j,"Expected fetcher: "+M),j.state==="loading"&&(Te.delete(M),x.push(M),D=!0)}return Ca(x),D}function Uu(x){let D=[];for(let[M,j]of oe)if(j<x){let K=C.fetchers.get(M);fe(K,"Expected fetcher: "+M),K.state==="loading"&&(Bn(M),oe.delete(M),D.push(M))}return Ca(D),D.length>0}function lh(x,D){let M=C.blockers.get(x)||Ja;return Tt.get(x)!==D&&Tt.set(x,D),M}function io(x){C.blockers.delete(x),Tt.delete(x)}function ns(x,D){let M=C.blockers.get(x)||Ja;fe(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let j=new Map(C.blockers);j.set(x,D),dt({blockers:j})}function ka(x){let{currentLocation:D,nextLocation:M,historyAction:j}=x;if(Tt.size===0)return;Tt.size>1&&aa(!1,"A router only supports one blocker at a time");let K=Array.from(Tt.entries()),[Z,ie]=K[K.length-1],W=C.blockers.get(Z);if(!(W&&W.state==="proceeding")&&ie({currentLocation:D,nextLocation:M,historyAction:j}))return Z}function Rr(x){let D=qt(404,{pathname:x}),M=a||o,{matches:j,route:K}=jE(M);return rs(),{notFoundMatches:j,route:K,error:D}}function ii(x,D){let M=D.partialMatches,j=M[M.length-1].route,K=qt(400,{type:"route-discovery",routeId:j.id,pathname:x,message:D.error!=null&&"message"in D.error?D.error:String(D.error)});return{notFoundMatches:M,route:j,error:K}}function rs(x){let D=[];return Et.forEach((M,j)=>{(!x||x(j))&&(M.cancel(),D.push(j),Et.delete(j))}),D}function Pr(x,D,M){if(S=x,k=D,P=M||null,!T&&C.navigation===hp){T=!0;let j=xa(C.location,C.matches);j!=null&&dt({restoreScrollPosition:j})}return()=>{S=null,k=null,P=null}}function ba(x,D){return P&&P(x,D.map(j=>W6(j,C.loaderData)))||x.key}function so(x,D){if(S&&k){let M=ba(x,D);S[M]=k()}}function xa(x,D){if(S){let M=ba(x,D),j=S[M];if(typeof j=="number")return j}return null}function Cr(x,D,M){if(d)if(x){let j=x[x.length-1].route;if(j.path&&(j.path==="*"||j.path.endsWith("/*")))return{active:!0,matches:Yc(D,M,u,!0)}}else return{active:!0,matches:Yc(D,M,u,!0)||[]};return{active:!1,matches:null}}async function is(x,D,M){let j=x,K=j.length>0?j[j.length-1].route:null;for(;;){let Z=a==null,ie=a||o;try{await w5(d,D,j,ie,s,i,zn,M)}catch(ee){return{type:"error",error:ee,partialMatches:j}}finally{Z&&(o=[...o])}if(M.aborted)return{type:"aborted"};let W=fs(ie,D,u),ce=!1;if(W){let ee=W[W.length-1].route;if(ee.index)return{type:"success",matches:W};if(ee.path&&ee.path.length>0)if(ee.path==="*")ce=!0;else return{type:"success",matches:W}}let te=Yc(ie,D,u,!0);if(!te||j.map(ee=>ee.route.id).join("-")===te.map(ee=>ee.route.id).join("-"))return{type:"success",matches:ce?W:null};if(j=te,K=j[j.length-1].route,K.path==="*")return{type:"success",matches:j}}}function It(x){s={},a=fu(x,i,void 0,s)}function ju(x,D){let M=a==null;FP(x,D,a||o,s,i),M&&(o=[...o],dt({}))}return U={get basename(){return u},get future(){return h},get state(){return C},get routes(){return o},get window(){return e},initialize:ih,subscribe:eo,enableScrollRestoration:Pr,navigate:to,fetch:Fu,revalidate:Ia,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Pa,deleteFetcher:ts,dispose:Zs,getBlocker:lh,deleteBlocker:io,patchRoutes:ju,_internalFetchControllers:Pe,_internalActiveDeferreds:Et,_internalSetRoutes:It},U}function y5(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function tg(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let h of e)if(u.push(h),h.route.id===o){c=h;break}}else u=e,c=e[e.length-1];let d=Zf(i||".",Jf(u,s),_a(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Cv(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:$r([n,d.pathname])),qs(d)}function xE(t,e,n,r){if(!r||!y5(r))return{path:n};if(r.formMethod&&!x5(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=UP(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Gn(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,S)=>{let[P,k]=S;return""+_+P+"="+k+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Gn(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=ng(r.formData),c=r.formData;else if(r.body instanceof FormData)u=ng(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=ME(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=ME(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Gn(d.formMethod))return{path:n,submission:d};let h=Zi(n);return e&&h.search&&Cv(h.search)&&u.append("index",""),h.search="?"+u,{path:qs(h),submission:d}}function v5(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function NE(t,e,n,r,i,s,o,a,u,c,d,h,p,_,S,P){let k=P?fn(P[1])?P[1].error:P[1].data:void 0,T=t.createURL(e.location),y=t.createURL(i),I=P&&fn(P[1])?P[0]:void 0,N=I?v5(n,I):n,U=P?P[1].statusCode:void 0,C=o&&U&&U>=400,E=N.filter((w,A)=>{let{route:b}=w;if(b.lazy)return!0;if(b.loader==null)return!1;if(s)return typeof b.loader!="function"||b.loader.hydrate?!0:e.loaderData[b.id]===void 0&&(!e.errors||e.errors[b.id]===void 0);if(_5(e.loaderData,e.matches[A],w)||u.some(Re=>Re===w.route.id))return!0;let O=e.matches[A],R=w;return DE(w,$e({currentUrl:T,currentParams:O.params,nextUrl:y,nextParams:R.params},r,{actionResult:k,unstable_actionStatus:U,defaultShouldRevalidate:C?!1:a||T.pathname+T.search===y.pathname+y.search||T.search!==y.search||VP(O,R)}))}),g=[];return h.forEach((w,A)=>{if(s||!n.some(Zt=>Zt.route.id===w.routeId)||d.has(A))return;let b=fs(_,w.path,S);if(!b){g.push({key:A,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let O=e.fetchers.get(A),R=dl(b,w.path),Re=!1;p.has(A)?Re=!1:c.includes(A)?Re=!0:O&&O.state!=="idle"&&O.data===void 0?Re=a:Re=DE(R,$e({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:k,unstable_actionStatus:U,defaultShouldRevalidate:C?!1:a})),Re&&g.push({key:A,routeId:w.routeId,path:w.path,matches:b,match:R,controller:new AbortController})}),[E,g]}function _5(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function VP(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function DE(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function w5(t,e,n,r,i,s,o,a){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,h)=>{a.aborted||FP(d,h,r,i,s)}}),o.set(u,c)),c&&C5(c)&&await c}finally{o.delete(u)}}function FP(t,e,n,r,i){if(t){var s;let o=r[t];fe(o,"No route found to patch children into: routeId = "+t);let a=fu(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...a):o.children=a}else{let o=fu(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function OE(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];fe(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";aa(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!$6.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,$e({},e(i),{lazy:void 0}))}function E5(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function T5(t,e,n,r,i,s,o,a){let u=r.reduce((h,p)=>h.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(h=>{let p=u.has(h.route.id);return $e({},h,{shouldLoad:p,resolve:S=>(c.add(h.route.id),p?I5(e,n,h,s,o,S,a):Promise.resolve({type:Le.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(h=>fe(c.has(h.route.id),'`match.resolve()` was not called for route id "'+h.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((h,p)=>u.has(i[p].route.id))}async function I5(t,e,n,r,i,s,o){let a,u,c=d=>{let h,p=new Promise((P,k)=>h=k);u=()=>h(),e.signal.addEventListener("abort",u);let _=P=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...P!==void 0?[P]:[]),S;return s?S=s(P=>_(P)):S=(async()=>{try{return{type:"data",result:await _()}}catch(P){return{type:"error",result:P}}})(),Promise.race([S,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let h,[p]=await Promise.all([c(d).catch(_=>{h=_}),OE(n.route,i,r)]);if(h!==void 0)throw h;a=p}else if(await OE(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let h=new URL(e.url),p=h.pathname+h.search;throw qt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Le.data,result:void 0};else if(d)a=await c(d);else{let h=new URL(e.url),p=h.pathname+h.search;throw qt(404,{pathname:p})}fe(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Le.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function S5(t){let{result:e,type:n,status:r}=t;if(jP(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:Le.error,error:a}}return n===Le.error?{type:Le.error,error:new Rv(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Le.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Le.error)return{type:Le.error,error:e,statusCode:eh(e)?e.status:r};if(b5(e)){var i,s;return{type:Le.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Le.data,data:e,statusCode:r}}function A5(t,e,n,r,i,s){let o=t.headers.get("Location");if(fe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Pv.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=tg(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function LE(t,e,n){if(Pv.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=_a(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function fo(t,e,n,r){let i=t.createURL(UP(e)).toString(),s={signal:n};if(r&&Gn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=ng(r.formData):s.body=r.formData}return new Request(i,s)}function ng(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ME(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function R5(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},h=r&&fn(r[1])?r[1].error:void 0;return n.forEach((p,_)=>{let S=e[_].route.id;if(fe(!ws(p),"Cannot handle redirect results in processLoaderData"),fn(p)){let P=p.error;h!==void 0&&(P=h,h=void 0),a=a||{};{let k=Dl(t,S);a[k.route.id]==null&&(a[k.route.id]=P)}o[S]=void 0,c||(c=!0,u=eh(p.error)?p.error.status:500),p.headers&&(d[S]=p.headers)}else _s(p)?(i.set(S,p.deferredData),o[S]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[S]=p.headers)):(o[S]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[S]=p.headers))}),h!==void 0&&r&&(a={[r[0]]:h},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function VE(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=R5(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:h,match:p,controller:_}=s[d];fe(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let S=o[d];if(!(_&&_.signal.aborted))if(fn(S)){let P=Dl(t.matches,p==null?void 0:p.route.id);c&&c[P.route.id]||(c=$e({},c,{[P.route.id]:S.error})),t.fetchers.delete(h)}else if(ws(S))fe(!1,"Unhandled fetcher revalidation redirect");else if(_s(S))fe(!1,"Unhandled fetcher deferred data");else{let P=fi(S.data);t.fetchers.set(h,P)}}return{loaderData:u,errors:c}}function FE(t,e,n,r){let i=$e({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function UE(t){return t?fn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Dl(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function jE(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",u='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Rv(t||500,a,new Error(u),!0)}function zE(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ws(n))return{result:n,idx:e}}}function UP(t){let e=typeof t=="string"?Zi(t):t;return qs($e({},e,{hash:""}))}function P5(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function C5(t){return typeof t=="object"&&t!=null&&"then"in t}function k5(t){return jP(t.result)&&f5.has(t.result.status)}function _s(t){return t.type===Le.deferred}function fn(t){return t.type===Le.error}function ws(t){return(t&&t.type)===Le.redirect}function b5(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function jP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function x5(t){return d5.has(t.toLowerCase())}function Gn(t){return u5.has(t.toLowerCase())}async function BE(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(h=>h.route.id===u.route.id),d=c!=null&&!VP(c,u)&&(s&&s[u.route.id])!==void 0;if(_s(a)&&(i||d)){let h=r[o];fe(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await zP(a,h,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function zP(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Le.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Le.error,error:i}}return{type:Le.data,data:t.deferredData.data}}}function Cv(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function dl(t,e){let n=typeof e=="string"?Zi(e).search:e.search;if(t[t.length-1].route.index&&Cv(n||""))return t[t.length-1];let r=DP(t);return r[r.length-1]}function $E(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function pp(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function N5(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Za(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function D5(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function fi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function O5(t,e){try{let n=t.sessionStorage.getItem(MP);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function L5(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(MP,JSON.stringify(n))}catch(r){aa(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yd.apply(this,arguments)}const th=z.createContext(null),BP=z.createContext(null),es=z.createContext(null),kv=z.createContext(null),Sr=z.createContext({outlet:null,matches:[],isDataRoute:!1}),$P=z.createContext(null);function M5(t,e){let{relative:n}=e===void 0?{}:e;wa()||fe(!1);let{basename:r,navigator:i}=z.useContext(es),{hash:s,pathname:o,search:a}=WP(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:$r([r,o])),i.createHref({pathname:u,search:a,hash:s})}function wa(){return z.useContext(kv)!=null}function Ea(){return wa()||fe(!1),z.useContext(kv).location}function HP(t){z.useContext(es).static||z.useLayoutEffect(t)}function nh(){let{isDataRoute:t}=z.useContext(Sr);return t?X5():V5()}function V5(){wa()||fe(!1);let t=z.useContext(th),{basename:e,future:n,navigator:r}=z.useContext(es),{matches:i}=z.useContext(Sr),{pathname:s}=Ea(),o=JSON.stringify(Jf(i,n.v7_relativeSplatPath)),a=z.useRef(!1);return HP(()=>{a.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Zf(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:$r([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,s,t])}const F5=z.createContext(null);function U5(t){let e=z.useContext(Sr).outlet;return e&&z.createElement(F5.Provider,{value:t},e)}function j5(){let{matches:t}=z.useContext(Sr),e=t[t.length-1];return e?e.params:{}}function WP(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(es),{matches:i}=z.useContext(Sr),{pathname:s}=Ea(),o=JSON.stringify(Jf(i,r.v7_relativeSplatPath));return z.useMemo(()=>Zf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function z5(t,e,n,r){wa()||fe(!1);let{navigator:i}=z.useContext(es),{matches:s}=z.useContext(Sr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ea(),d;d=c;let h=d.pathname||"/",p=h;if(u!=="/"){let P=u.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(P.length).join("/")}let _=fs(t,{pathname:p});return q5(_&&_.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:$r([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:$r([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function B5(){let t=Y5(),e=eh(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const $5=z.createElement(B5,null);class H5 extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Sr.Provider,{value:this.props.routeContext},z.createElement($P.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W5(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(th);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Sr.Provider,{value:e},r)}function q5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:_}=n,S=h.route.loader&&p[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let _,S=!1,P=null,k=null;n&&(_=a&&h.route.id?a[h.route.id]:void 0,P=h.route.errorElement||$5,u&&(c<0&&p===0?(S=!0,k=null):c===p&&(S=!0,k=h.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,p+1)),y=()=>{let I;return _?I=P:S?I=k:h.route.Component?I=z.createElement(h.route.Component,null):h.route.element?I=h.route.element:I=d,z.createElement(W5,{match:h,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:I})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?z.createElement(H5,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var qP=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qP||{}),Xd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Xd||{});function K5(t){let e=z.useContext(th);return e||fe(!1),e}function G5(t){let e=z.useContext(BP);return e||fe(!1),e}function Q5(t){let e=z.useContext(Sr);return e||fe(!1),e}function KP(t){let e=Q5(),n=e.matches[e.matches.length-1];return n.route.id||fe(!1),n.route.id}function Y5(){var t;let e=z.useContext($P),n=G5(Xd.UseRouteError),r=KP(Xd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function X5(){let{router:t}=K5(qP.UseNavigateStable),e=KP(Xd.UseNavigateStable),n=z.useRef(!1);return HP(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yd({fromRouteId:e},s)))},[t,e])}function J5(t){let{to:e,replace:n,state:r,relative:i}=t;wa()||fe(!1);let{future:s,static:o}=z.useContext(es),{matches:a}=z.useContext(Sr),{pathname:u}=Ea(),c=nh(),d=Zf(e,Jf(a,s.v7_relativeSplatPath),u,i==="path"),h=JSON.stringify(d);return z.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:i}),[c,h,i,n,r]),null}function Z5(t){return U5(t.context)}function ej(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ot.Pop,navigator:s,static:o=!1,future:a}=t;wa()&&fe(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:Yd({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Zi(r));let{pathname:d="/",search:h="",hash:p="",state:_=null,key:S="default"}=r,P=z.useMemo(()=>{let k=_a(d,u);return k==null?null:{location:{pathname:k,search:h,hash:p,state:_,key:S},navigationType:i}},[u,d,h,p,_,S,i]);return P==null?null:z.createElement(es.Provider,{value:c},z.createElement(kv.Provider,{children:n,value:P}))}new Promise(()=>{});function tj(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:z.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:z.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:z.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hu.apply(this,arguments)}function nj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ij(t,e){return t.button===0&&(!e||e==="_self")&&!rj(t)}const sj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],oj="6";try{window.__reactRouterVersion=oj}catch{}function aj(t,e){return g5({basename:void 0,future:hu({},void 0,{v7_prependBasename:!0}),history:j6({window:void 0}),hydrationData:lj(),routes:t,mapRouteProperties:tj,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function lj(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=hu({},e,{errors:uj(e.errors)})),e}function uj(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Rv(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const cj=z.createContext({isTransitioning:!1}),dj=z.createContext(new Map),fj="startTransition",HE=mp[fj],hj="flushSync",WE=Ub[hj];function pj(t){HE?HE(t):t()}function el(t){WE?WE(t):t()}class mj{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function gj(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=z.useState(n.state),[o,a]=z.useState(),[u,c]=z.useState({isTransitioning:!1}),[d,h]=z.useState(),[p,_]=z.useState(),[S,P]=z.useState(),k=z.useRef(new Map),{v7_startTransition:T}=r||{},y=z.useCallback(E=>{T?pj(E):E()},[T]),I=z.useCallback((E,g)=>{let{deletedFetchers:w,unstable_flushSync:A,unstable_viewTransitionOpts:b}=g;w.forEach(R=>k.current.delete(R)),E.fetchers.forEach((R,Re)=>{R.data!==void 0&&k.current.set(Re,R.data)});let O=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!b||O){A?el(()=>s(E)):y(()=>s(E));return}if(A){el(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation})});let R=n.window.document.startViewTransition(()=>{el(()=>s(E))});R.finished.finally(()=>{el(()=>{h(void 0),_(void 0),a(void 0),c({isTransitioning:!1})})}),el(()=>_(R));return}p?(d&&d.resolve(),p.skipTransition(),P({state:E,currentLocation:b.currentLocation,nextLocation:b.nextLocation})):(a(E),c({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}))},[n.window,p,d,k,y]);z.useLayoutEffect(()=>n.subscribe(I),[n,I]),z.useEffect(()=>{u.isTransitioning&&!u.flushSync&&h(new mj)},[u]),z.useEffect(()=>{if(d&&o&&n.window){let E=o,g=d.promise,w=n.window.document.startViewTransition(async()=>{y(()=>s(E)),await g});w.finished.finally(()=>{h(void 0),_(void 0),a(void 0),c({isTransitioning:!1})}),_(w)}},[y,o,d,n.window]),z.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),z.useEffect(()=>{!u.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),P(void 0))},[u.isTransitioning,S]),z.useEffect(()=>{},[]);let N=z.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,g,w)=>n.navigate(E,{state:g,preventScrollReset:w==null?void 0:w.preventScrollReset}),replace:(E,g,w)=>n.navigate(E,{replace:!0,state:g,preventScrollReset:w==null?void 0:w.preventScrollReset})}),[n]),U=n.basename||"/",C=z.useMemo(()=>({router:n,navigator:N,static:!1,basename:U}),[n,N,U]);return z.createElement(z.Fragment,null,z.createElement(th.Provider,{value:C},z.createElement(BP.Provider,{value:i},z.createElement(dj.Provider,{value:k.current},z.createElement(cj.Provider,{value:u},z.createElement(ej,{basename:U,location:i.location,navigationType:i.historyAction,navigator:N,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?z.createElement(yj,{routes:n.routes,future:n.future,state:i}):e))))),null)}function yj(t){let{routes:e,future:n,state:r}=t;return z5(e,void 0,r,n)}const vj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_j=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rg=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:h}=e,p=nj(e,sj),{basename:_}=z.useContext(es),S,P=!1;if(typeof c=="string"&&_j.test(c)&&(S=c,vj))try{let I=new URL(window.location.href),N=c.startsWith("//")?new URL(I.protocol+c):new URL(c),U=_a(N.pathname,_);N.origin===I.origin&&U!=null?c=U+N.search+N.hash:P=!0}catch{}let k=M5(c,{relative:i}),T=wj(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(I){r&&r(I),I.defaultPrevented||T(I)}return z.createElement("a",hu({},p,{href:S||k,onClick:P||s?r:y,ref:n,target:u}))});var qE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qE||(qE={}));var KE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(KE||(KE={}));function wj(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=nh(),c=Ea(),d=WP(t,{relative:o});return z.useCallback(h=>{if(ij(h,n)){h.preventDefault();let p=r!==void 0?r:qs(c)===qs(d);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}const Ej={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Tj={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},GE={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Ij=({chat:t})=>{const[e,n]=z.useState(t.notSeenedMessages);return z.useEffect(()=>{const r=ra(Bi(We,"chat_message"),mt("from","==",t.email),mt("seen","==",!1)),i=Pl(r,s=>{n(s.size)});return()=>{i()}},[]),V.jsx(V.Fragment,{children:V.jsxs(rg,{to:`/chat/${t.email}`,className:"flex items-center justify-between border-t hover:bg-base/50 text-sm px-5 py-3 transition-colors duration-300",children:[V.jsxs("div",{className:"flex items-center",children:[t.photoUrl?V.jsx("img",{src:t.photoUrl,alt:"profile",className:"size-10 object-cover rounded-full"}):V.jsx("div",{className:"size-10 border-2 rounded-full bg-base flex items-center justify-center",children:V.jsx(an,{icon:Av,size:"lg"})}),V.jsx("div",{className:"ps-2",children:V.jsx("div",{children:t.name})})]}),e?V.jsx("div",{className:"size-5 text-xs font-semibold rounded-full bg-red-500 text-white text-center flex items-center justify-center",children:e}):""]},t.email)})},rh=ux.withTypes(),Ki=da.withTypes();function Sj(){var s;const[t,e]=z.useState(!1),n=rh(),r=Ki(o=>o.user),i=()=>{e(!0),n(UR({profileUrl:r.profile.photoUrl,userEmail:r.data.email})).then(()=>e(!1))};return V.jsx(V.Fragment,{children:V.jsxs("div",{className:"relative rounded-full overflow-hidden group",children:[V.jsx("img",{src:(s=r.profile)==null?void 0:s.photoUrl,alt:"profile",className:"size-[65px] object-cover"}),V.jsx("div",{onClick:i,className:`${!t&&"opacity-0"} absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`,children:t?V.jsx("div",{className:"size-5 border-2 border-e-transparent animate-spin border-white rounded-full"}):V.jsx(an,{icon:bP,color:"#fff",size:"xl"})})]})})}const Aj=()=>{var i,s;const t=Ki(o=>o.user),e=Ki(o=>o.chats.list),n=nh(),r=async()=>{await OR.signOut(),n("/login")};if(t.profile&&((i=t.data)!=null&&i.email))return V.jsxs("div",{className:"w-full max-w-[325px] h-full min-h-screen bg-white border-e flex flex-col shadow-xl",children:[V.jsxs("div",{className:"flex items-center p-6",children:[V.jsxs("div",{className:"relative",children:[t.profile.photoUrl?V.jsx(Sj,{}):V.jsx("div",{className:"size-[65px] border-2 rounded-full bg-base flex items-center justify-center",children:V.jsx(an,{icon:Av,size:"xl"})}),V.jsx(rg,{to:"/edit-profile",className:"absolute bottom-0 right-0 bg-black/85 text-white rounded-full flex items-center justify-center text-center w-[22px] h-[22px]",children:V.jsx(an,{icon:Ej,size:"2xs"})})]}),V.jsxs("div",{className:"ps-4",children:[V.jsx("div",{className:"font-bold",children:t.profile.name}),V.jsx("div",{className:"text-xs mt-2 text-black/60",children:(s=t.data)==null?void 0:s.email})]})]}),V.jsx("div",{children:e.map((o,a)=>V.jsx(Ij,{chat:o},a))}),V.jsxs("div",{className:"p-6 mt-auto",children:[V.jsx(rg,{to:"/create-chat",className:Br({intent:"dark",className:"mb-2 w-full"}),children:"Create chat"}),V.jsx("button",{onClick:r,className:Br({className:"w-full"}),children:"Logout"})]})]})};function Rj(){return V.jsx("div",{className:"fixed inset-0 w-full h-full bg-white/75 flex items-center justify-center",children:V.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[V.jsx("div",{className:"size-10 border-4 border-e-transparent animate-spin border-black rounded-full mb-4"}),V.jsx("span",{className:"text-sm text-black/75",children:"Getting start ..."})]})})}const Pj=()=>{const t=rh(),e=Ea(),n=Ki(s=>s.user),r=Ki(s=>s.chats.status),i=async s=>{await Nu(We,async o=>{o.update(Un(We,"profile",n.data.email),{lastActivity:s})})};return z.useEffect(()=>{if(n.status==="authenticated"){const s=Ye.fromDate(new Date);i(s);const o=setInterval(()=>{const a=Ye.fromDate(new Date);i(a)},3e4);return()=>clearInterval(o)}},[n]),z.useLayoutEffect(()=>{const s=Q4(OR,o=>{console.log(o),t(RU(o!=null&&o.email?{email:o.email}:null)),o&&t(VR(o.email)).then(()=>{t(BR(o.email))}),!o&&t(bU("userUnauthenticated")),t(PU(o?"authenticated":"unauthenticated"))});return()=>{s()}},[]),n.status!=="loading"&&r!=="loading"?V.jsxs("div",{className:"flex min-h-screen bg-[url('/background.svg')] bg-cover",children:[e.pathname!=="/login"&&V.jsx(Aj,{}),V.jsx(Z5,{})]}):V.jsx(Rj,{})},Cj=()=>{const t=da(e=>e.user);if(t.status==="authenticated")return V.jsx(V.Fragment,{});if(t.status==="unauthenticated")return V.jsx(J5,{to:"/login"})},kj=({email:t})=>{const e=da(a=>a.user.data.email),[n,r]=z.useState(""),[i,s]=z.useState(!1),o=async()=>{s(!0),r(""),await fA(Bi(We,"chat_message"),{content:n,from:e,seen:!1,timestamp:Ye.fromDate(new Date),to:t,type:"text"}),s(!1)};return V.jsx("div",{className:"mt-auto pb-5",children:V.jsxs("div",{className:"p-3 shadow-sm rounded-full border bg-white flex",children:[V.jsx("input",{type:"text",placeholder:"Type your message...",className:"focus:outline-none w-full max-w-none",value:n,onChange:a=>r(a.target.value)}),V.jsxs("button",{className:Br({intent:"dark",className:`${i&&"pointer-events-none opacity-70"} !rounded-full`}),onClick:o,children:["Send",V.jsx(an,{icon:V6,className:"ms-1.5"})]})]})})},bj=({profile:t})=>{const e=da(a=>a.user.data),[n,r]=z.useState(),[i,s]=z.useState(0),o=async()=>{await Nu(We,async a=>{a.update(Un(We,"chat_room",n.id),{isBlocked:!n.isBlocked,blockedFrom:n.blockedFrom?"":e==null?void 0:e.email})})};return z.useEffect(()=>{const a=setInterval(()=>s(Ye.now().seconds),5e3),u=ra(Bi(We,"chat_room"),Ud(Co(mt("user_2","==",t.email),mt("user_1","==",e==null?void 0:e.email)),Co(mt("user_1","==",t.email),mt("user_2","==",e==null?void 0:e.email))),oA(1)),c=Pl(u,d=>{d.forEach(h=>{r({...h.data(),id:h.id})})});return()=>{clearInterval(a),c()}},[t]),V.jsx("div",{className:"bg-white border shadow-sm px-4 py-3 rounded-full mt-4",children:V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{className:"flex items-center",children:[t.photoUrl?V.jsx("img",{src:t.photoUrl,alt:"profile",className:"size-12 object-cover rounded-full"}):V.jsx("div",{className:"size-12 border-2 rounded-full bg-base flex items-center justify-center",children:V.jsx(an,{icon:Av,size:"lg"})}),V.jsxs("div",{className:"ps-2 flex flex-col",children:[V.jsx("span",{className:"text-sm text-black/75 font-bold",children:t.name}),i-t.lastActivity.seconds<65&&i!==0&&V.jsx("span",{className:"text-blue-500 text-xs font-medium inline-block mt-1",children:"Online"})]})]}),n&&(n.blockedFrom===(e==null?void 0:e.email)||!n.isBlocked)&&V.jsx("button",{className:Br({intent:n.isBlocked?"default":"danger",className:"!rounded-full"}),onClick:o,children:n.isBlocked?"Unblock":"Block"})]})})},xj=({message:t})=>{var r,i,s,o;const e=da(a=>a.user),n=async()=>{const a=Un(We,"chat_message",t.id);await Nu(We,async u=>{u.update(a,{seen:!0})})};return z.useEffect(()=>{var a;((a=e.data)==null?void 0:a.email)===t.to&&n()},[e]),V.jsx(V.Fragment,{children:V.jsx("div",{className:`flex ${((r=e.data)==null?void 0:r.email)!==t.from&&"justify-end"} mt-1`,children:V.jsxs("div",{className:`${((i=e.data)==null?void 0:i.email)===t.from?"bg-blue-600 text-white":"bg-white border"} w-fit max-w-[400px] min-w-32 shadow-sm p-3 text-sm rounded-lg`,children:[t.content,V.jsxs("div",{className:"mt-1 flex justify-end",children:[V.jsx("div",{className:`text-xs ${((s=e.data)==null?void 0:s.email)===t.from?"text-white/50":"text-black/50"}`,children:`${new Date(t.timestamp.seconds*1e3).getHours()}:${new Date(t.timestamp.seconds*1e3).getMinutes()}`}),t.from===((o=e.data)==null?void 0:o.email)&&V.jsxs("div",{className:"translate-y-[-1px] ms-1",children:[t.seen&&V.jsx(an,{icon:GE,width:10,height:10,className:"translate-x-[5px] text-white"}),V.jsx(an,{icon:GE,width:10,height:10})]})]})]})})})},Nj=()=>{const t=da(u=>u.user.data),{email:e}=j5(),[n,r]=z.useState(),[i,s]=z.useState([]),[o,a]=z.useState();if(z.useEffect(()=>{const u=ra(Bi(We,"chat_message"),Ud(Co(mt("from","==",e),mt("to","==",t==null?void 0:t.email)),Co(mt("to","==",e),mt("from","==",t==null?void 0:t.email))),PL("timestamp","asc")),c=Pl(u,d=>{let h=[];d.forEach(p=>{h.push({...p.data(),id:p.id})}),s(h)});return()=>{c()}},[e]),z.useEffect(()=>{const u=Un(We,"profile",String(e)),c=Pl(u,d=>{r({...d.data(),email:d.id})});return()=>{c()}},[e]),z.useEffect(()=>{if(n){const u=ra(Bi(We,"chat_room"),Ud(Co(mt("user_2","==",n.email),mt("user_1","==",t==null?void 0:t.email)),Co(mt("user_1","==",n.email),mt("user_2","==",t==null?void 0:t.email))),oA(1)),c=Pl(u,d=>{d.forEach(h=>{a({...h.data(),id:h.id})})});return()=>c()}},[n]),n&&o)return V.jsxs("div",{className:"w-full max-w-[800px] min-h-screen mx-auto flex flex-col px-5",children:[V.jsx(bj,{profile:n}),V.jsx("div",{className:"h-full flex flex-col justify-end py-5",children:i.map(u=>V.jsx(xj,{message:u},u.id))}),o.isBlocked!=="loading"&&o.blockedFrom===(t==null?void 0:t.email)&&V.jsx("div",{className:"text-center pb-5 mt-auto",children:V.jsxs("span",{children:["You have blocked ",n.name]})}),o.isBlocked&&o.blockedFrom===e&&V.jsx("div",{className:"text-center pb-5 mt-auto",children:V.jsxs("span",{children:["You have been blocked by ",n.name]})}),!o.isBlocked&&e&&V.jsx(kj,{email:e})]});OP("/not-found")},Dj=()=>V.jsx(V.Fragment,{children:V.jsxs("div",{className:"flex justify-center items-center text-4xl font-black",children:[V.jsx("div",{className:"bg-black text-center flex items-center justify-center text-white w-[50px] h-[50px] me-[4px] rounded-full",children:V.jsx("span",{children:"C"})}),"HATIX"]})}),Oj={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Lj=()=>{const t=gR(),e=async()=>{const n=new Or;n.addScope("https://www.googleapis.com/auth/contacts.readonly"),t.useDeviceLanguage();const r=await gV(t,n);if(r.user.email){const i=Un(We,"profile",r.user.email);(await Ff(i)).exists()||await bL(Un(We,"profile",r.user.email),{biography:"",isOnline:!0,name:"New user",photoUrl:""}),OP("/")}};return V.jsx("div",{className:"flex min-h-screen w-full justify-center items-center",children:V.jsxs("div",{className:"bg-white rounded-xl p-10 w-full max-w-[450px] shadow",children:[V.jsx("div",{className:"border-b pb-7",children:V.jsx(Dj,{})}),V.jsx("h1",{className:"text-2xl font-bold mb-2 mt-5",children:"Login"}),V.jsxs("span",{className:"text-sm text-black/60",children:["Welcome to ",V.jsx("span",{className:"font-bold text-black",children:"Chatix"})]}),V.jsxs("button",{onClick:e,className:Br({className:"w-full mt-4"}),children:[V.jsx(an,{icon:Oj,className:"size-5 me-2.5"}),"Signin with google"]})]})})},ig=qR("block w-full max-w-none outline-none",{variants:{intent:{default:"border bg-white focus:border-black/15"},size:{medium:"p-2 rounded-lg text-sm"}},defaultVariants:{intent:"default",size:"medium"}});function Mj(){const t=rh(),e=Ki(d=>d.user),n=nh(),[r,i]=z.useState(""),[s,o]=z.useState(!1),[a,u]=z.useState(""),c=async d=>{d.preventDefault(),o(!0);const h=Un(We,"profile",r);(await Ff(h)).exists()?(await fA(Bi(We,"chat_room"),{user_1:e.data.email,user_2:r,isBlocked:!1,blockedFrom:""}),t($R({user_1:e.data.email,user_2:r})).then(()=>{n(`/chat/${r}`)})):(u("There is no user with this email"),setTimeout(()=>{u("")},1e4)),i(""),o(!1)};return V.jsx(V.Fragment,{children:V.jsxs("div",{className:"bg-white rounded-xl shadow-sm border p-8 h-fit m-auto w-full max-w-lg",children:[V.jsx("h2",{className:"font-bold text-2xl",children:"Create chat"}),V.jsx("p",{className:"text-sm mt-3 text-black/60",children:"Enter the desired person's email to create a new chat"}),a&&V.jsxs("div",{className:"bg-red-500/5 border text-sm text-red-500 border-red-500/50 rounded-lg p-3 mt-5 flex items-center",children:[V.jsx(an,{className:"me-2.5 size-5",icon:U6}),a]}),V.jsxs("form",{onSubmit:c,className:"mt-5",children:[V.jsx("label",{htmlFor:"",children:"Email:"}),V.jsx("input",{type:"email",required:!0,className:ig(),value:r,onChange:d=>i(d.target.value)}),V.jsx("button",{type:"submit",disabled:s,className:Br({intent:"dark",size:"large",className:"w-full mt-5"}),children:"Create"})]})]})})}function Vj(){const[t,e]=z.useState(!1),n=rh(),r=Ki(p=>p.user.data.email),i=Ki(p=>p.user.profile),[s,o]=z.useState(i),[a,u]=z.useState(null),c=z.useRef(null),d=()=>{if(c.current){const p=new DataTransfer;c.current.files=p.files,u(null)}},h=()=>{e(!0),n(FR({userEmail:r,biography:s.biography,name:s.name,profileImage:a,defaultProfileUrl:i.photoUrl})).then(()=>{e(!1),d()})};return V.jsxs("div",{className:"p-8 rounded-xl bg-white shadow-sm border w-full max-w-2xl mx-auto h-fit m-auto",children:[V.jsx("h2",{className:"font-bold text-2xl pb-[11px] border-b",children:"Edit profile"}),V.jsxs("div",{className:"grid grid-cols-2 mt-3 gap-4",children:[V.jsxs("div",{children:[V.jsx("label",{htmlFor:"name",className:"text-sm inline-block mb-1",children:"Name"}),V.jsx("input",{id:"name",value:s.name,onChange:p=>o(_=>({..._,name:p.target.value})),type:"text",className:ig()})]}),V.jsxs("div",{children:[V.jsx("label",{htmlFor:"profileImage",className:"text-sm inline-block mb-1",children:"New profile image"}),V.jsx("input",{id:"profileImage",accept:"image/*",onChange:p=>u(p.target.files[0]),type:"file",hidden:!0,ref:c}),a?V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{className:"flex items-center",children:[V.jsx("img",{src:URL.createObjectURL(a),className:"object-cover size-8 me-2.5 rounded-md"}),V.jsxs("div",{children:[V.jsx("div",{className:"text-sm mb-0.5",children:a.name}),V.jsxs("div",{className:"text-xs text-black/60",children:[(a.size/10**6).toFixed(2)," MB"]})]})]}),V.jsx("button",{className:Br({intent:"danger",className:"size-8"}),onClick:d,children:V.jsx(an,{icon:bP})})]}):V.jsxs("label",{htmlFor:"profileImage",className:Br(),children:[V.jsx(an,{icon:Tj,className:"me-2"}),"Choose file"]})]})]}),V.jsxs("div",{className:"mt-4",children:[V.jsxs("label",{htmlFor:"biography",className:"text-sm inline-block mb-1",children:["Biography",V.jsxs("span",{className:"text-xs font-light text-black/75 ms-1.5",children:[s.biography.length,"/180"]})]}),V.jsx("textarea",{value:s.biography,onChange:p=>o(_=>({..._,biography:p.target.value})),className:ig(),maxLength:180,rows:3,id:"biography"})]}),V.jsx("button",{disabled:t,className:Br({intent:"dark",size:"large",className:"w-full mt-4"}),onClick:h,children:"Submit changes"})]})}const Fj=aj([{path:"/",element:V.jsx(Pj,{}),children:[{path:"/",element:V.jsx(Cj,{})},{path:"/create-chat",element:V.jsx(Mj,{})},{path:"/chat/:email",element:V.jsx(Nj,{})},{path:"/login",element:V.jsx(Lj,{})},{path:"/edit-profile",element:V.jsx(Vj,{})}]}]);function Uj(){return V.jsx("div",{className:"min-h-screen",children:V.jsx(ox,{store:xU,children:V.jsx(gj,{router:Fj})})})}gp.createRoot(document.getElementById("root")).render(V.jsx(Uj,{}));
