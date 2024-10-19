var hC=Object.defineProperty;var pC=(t,e,n)=>e in t?hC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var mh=(t,e,n)=>pC(t,typeof e!="symbol"?e+"":e,n);function QE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var YE={exports:{}},Zd={},XE={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu=Symbol.for("react.element"),mC=Symbol.for("react.portal"),gC=Symbol.for("react.fragment"),yC=Symbol.for("react.strict_mode"),vC=Symbol.for("react.profiler"),_C=Symbol.for("react.provider"),wC=Symbol.for("react.context"),EC=Symbol.for("react.forward_ref"),TC=Symbol.for("react.suspense"),IC=Symbol.for("react.memo"),SC=Symbol.for("react.lazy"),i_=Symbol.iterator;function AC(t){return t===null||typeof t!="object"?null:(t=i_&&t[i_]||t["@@iterator"],typeof t=="function"?t:null)}var JE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ZE=Object.assign,e1={};function ca(t,e,n){this.props=t,this.context=e,this.refs=e1,this.updater=n||JE}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t1(){}t1.prototype=ca.prototype;function og(t,e,n){this.props=t,this.context=e,this.refs=e1,this.updater=n||JE}var ag=og.prototype=new t1;ag.constructor=og;ZE(ag,ca.prototype);ag.isPureReactComponent=!0;var s_=Array.isArray,n1=Object.prototype.hasOwnProperty,lg={current:null},r1={key:!0,ref:!0,__self:!0,__source:!0};function i1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n1.call(e,r)&&!r1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mu,type:t,key:s,ref:o,props:i,_owner:lg.current}}function RC(t,e){return{$$typeof:mu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ug(t){return typeof t=="object"&&t!==null&&t.$$typeof===mu}function PC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var o_=/\/+/g;function gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PC(""+t.key):e.toString(36)}function Cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mu:case mC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gh(o,0):r,s_(i)?(n="",t!=null&&(n=t.replace(o_,"$&/")+"/"),Cc(i,e,n,"",function(c){return c})):i!=null&&(ug(i)&&(i=RC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(o_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",s_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+gh(s,a);o+=Cc(s,e,n,u,i)}else if(u=AC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+gh(s,a++),o+=Cc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zu(t,e,n){if(t==null)return t;var r=[],i=0;return Cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},kc={transition:null},kC={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:kc,ReactCurrentOwner:lg};function s1(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Zu,forEach:function(t,e,n){Zu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zu(t,function(){e++}),e},toArray:function(t){return Zu(t,function(e){return e})||[]},only:function(t){if(!ug(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=ca;me.Fragment=gC;me.Profiler=vC;me.PureComponent=og;me.StrictMode=yC;me.Suspense=TC;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kC;me.act=s1;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ZE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)n1.call(e,u)&&!r1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:mu,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:wC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_C,_context:t},t.Consumer=t};me.createElement=i1;me.createFactory=function(t){var e=i1.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:EC,render:t}};me.isValidElement=ug;me.lazy=function(t){return{$$typeof:SC,_payload:{_status:-1,_result:t},_init:CC}};me.memo=function(t,e){return{$$typeof:IC,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=kc.transition;kc.transition={};try{t()}finally{kc.transition=e}};me.unstable_act=s1;me.useCallback=function(t,e){return Jt.current.useCallback(t,e)};me.useContext=function(t){return Jt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Jt.current.useEffect(t,e)};me.useId=function(){return Jt.current.useId()};me.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Jt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};me.useRef=function(t){return Jt.current.useRef(t)};me.useState=function(t){return Jt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Jt.current.useTransition()};me.version="18.3.1";XE.exports=me;var z=XE.exports;const ef=sg(z),gp=QE({__proto__:null,default:ef},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bC=z,xC=Symbol.for("react.element"),NC=Symbol.for("react.fragment"),DC=Object.prototype.hasOwnProperty,OC=bC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LC={key:!0,ref:!0,__self:!0,__source:!0};function o1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DC.call(e,r)&&!LC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xC,type:t,key:s,ref:o,props:i,_owner:OC.current}}Zd.Fragment=NC;Zd.jsx=o1;Zd.jsxs=o1;YE.exports=Zd;var V=YE.exports,yp={},a1={exports:{}},An={},l1={exports:{}},u1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,re){var oe=G.length;G.push(re);e:for(;0<oe;){var Te=oe-1>>>1,ve=G[Te];if(0<i(ve,re))G[Te]=re,G[oe]=ve,oe=Te;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var re=G[0],oe=G.pop();if(oe!==re){G[0]=oe;e:for(var Te=0,ve=G.length,Ne=ve>>>1;Te<Ne;){var ct=2*(Te+1)-1,Et=G[ct],Tt=ct+1,zn=G[Tt];if(0>i(Et,oe))Tt<ve&&0>i(zn,Et)?(G[Te]=zn,G[Tt]=oe,Te=Tt):(G[Te]=Et,G[ct]=oe,Te=ct);else if(Tt<ve&&0>i(zn,oe))G[Te]=zn,G[Tt]=oe,Te=Tt;else break e}}return re}function i(G,re){var oe=G.sortIndex-re.sortIndex;return oe!==0?oe:G.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,h=null,p=3,_=!1,S=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(G){for(var re=n(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=G)r(c),re.sortIndex=re.expirationTime,e(u,re);else break;re=n(c)}}function N(G){if(P=!1,I(G),!S)if(n(u)!==null)S=!0,ir(U);else{var re=n(c);re!==null&&Pe(N,re.startTime-G)}}function U(G,re){S=!1,P&&(P=!1,T(g),g=-1),_=!0;var oe=p;try{for(I(re),h=n(u);h!==null&&(!(h.expirationTime>re)||G&&!b());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,p=h.priorityLevel;var ve=Te(h.expirationTime<=re);re=t.unstable_now(),typeof ve=="function"?h.callback=ve:h===n(u)&&r(u),I(re)}else r(u);h=n(u)}if(h!==null)var Ne=!0;else{var ct=n(c);ct!==null&&Pe(N,ct.startTime-re),Ne=!1}return Ne}finally{h=null,p=oe,_=!1}}var k=!1,E=null,g=-1,w=5,A=-1;function b(){return!(t.unstable_now()-A<w)}function O(){if(E!==null){var G=t.unstable_now();A=G;var re=!0;try{re=E(!0,G)}finally{re?R():(k=!1,E=null)}}else k=!1}var R;if(typeof y=="function")R=function(){y(O)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,en=Re.port2;Re.port1.onmessage=O,R=function(){en.postMessage(null)}}else R=function(){C(O,0)};function ir(G){E=G,k||(k=!0,R())}function Pe(G,re){g=C(function(){G(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,ir(U))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(G){switch(p){case 1:case 2:case 3:var re=3;break;default:re=p}var oe=p;p=re;try{return G()}finally{p=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=p;p=G;try{return re()}finally{p=oe}},t.unstable_scheduleCallback=function(G,re,oe){var Te=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Te+oe:Te):oe=Te,G){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=oe+ve,G={id:d++,callback:re,priorityLevel:G,startTime:oe,expirationTime:ve,sortIndex:-1},oe>Te?(G.sortIndex=oe,e(c,G),n(u)===null&&G===n(c)&&(P?(T(g),g=-1):P=!0,Pe(N,oe-Te))):(G.sortIndex=ve,e(u,G),S||_||(S=!0,ir(U))),G},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(G){var re=p;return function(){var oe=p;p=re;try{return G.apply(this,arguments)}finally{p=oe}}}})(u1);l1.exports=u1;var MC=l1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VC=z,Tn=MC;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c1=new Set,Ll={};function Ks(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(Ll[t]=e,t=0;t<e.length;t++)c1.add(e[t])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vp=Object.prototype.hasOwnProperty,FC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a_={},l_={};function UC(t){return vp.call(l_,t)?!0:vp.call(a_,t)?!1:FC.test(t)?l_[t]=!0:(a_[t]=!0,!1)}function jC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zC(t,e,n,r){if(e===null||typeof e>"u"||jC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cg=/[\-:]([a-z])/g;function dg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cg,dg);xt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cg,dg);xt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cg,dg);xt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fg(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zC(e,n,i,r)&&(n=null),r||i===null?UC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ei=VC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),yo=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),d1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),Ep=Symbol.for("react.suspense_list"),mg=Symbol.for("react.memo"),hi=Symbol.for("react.lazy"),h1=Symbol.for("react.offscreen"),u_=Symbol.iterator;function Ba(t){return t===null||typeof t!="object"?null:(t=u_&&t[u_]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,yh;function nl(t){if(yh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yh=e&&e[1]||""}return`
`+yh+t}var vh=!1;function _h(t,e){if(!t||vh)return"";vh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{vh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?nl(t):""}function BC(t){switch(t.tag){case 5:return nl(t.type);case 16:return nl("Lazy");case 13:return nl("Suspense");case 19:return nl("SuspenseList");case 0:case 2:case 15:return t=_h(t.type,!1),t;case 11:return t=_h(t.type.render,!1),t;case 1:return t=_h(t.type,!0),t;default:return""}}function Tp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case yo:return"Portal";case _p:return"Profiler";case hg:return"StrictMode";case wp:return"Suspense";case Ep:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f1:return(t.displayName||"Context")+".Consumer";case d1:return(t._context.displayName||"Context")+".Provider";case pg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mg:return e=t.displayName||null,e!==null?e:Tp(t.type)||"Memo";case hi:e=t._payload,t=t._init;try{return Tp(t(e))}catch{}}return null}function $C(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tp(e);case 8:return e===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HC(t){var e=p1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tc(t){t._valueTracker||(t._valueTracker=HC(t))}function m1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ip(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function c_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g1(t,e){e=e.checked,e!=null&&fg(t,"checked",e,!1)}function Sp(t,e){g1(t,e);var n=Mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ap(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ap(t,e.type,Mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function d_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ap(t,e,n){(e!=="number"||Jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rl=Array.isArray;function Do(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function f_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(rl(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mi(n)}}function y1(t,e){var n=Mi(e.value),r=Mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nc,_1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ml(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WC=["Webkit","ms","Moz","O"];Object.keys(hl).forEach(function(t){WC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hl[e]=hl[t]})});function w1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hl.hasOwnProperty(t)&&hl[t]?(""+e).trim():e+"px"}function E1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qC=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(t,e){if(e){if(qC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function kp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=null;function gg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xp=null,Oo=null,Lo=null;function p_(t){if(t=vu(t)){if(typeof xp!="function")throw Error(H(280));var e=t.stateNode;e&&(e=of(e),xp(t.stateNode,t.type,e))}}function T1(t){Oo?Lo?Lo.push(t):Lo=[t]:Oo=t}function I1(){if(Oo){var t=Oo,e=Lo;if(Lo=Oo=null,p_(t),e)for(t=0;t<e.length;t++)p_(e[t])}}function S1(t,e){return t(e)}function A1(){}var wh=!1;function R1(t,e,n){if(wh)return t(e,n);wh=!0;try{return S1(t,e,n)}finally{wh=!1,(Oo!==null||Lo!==null)&&(A1(),I1())}}function Vl(t,e){var n=t.stateNode;if(n===null)return null;var r=of(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Np=!1;if(Hr)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Np=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Np=!1}function KC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var pl=!1,Zc=null,ed=!1,Dp=null,GC={onError:function(t){pl=!0,Zc=t}};function QC(t,e,n,r,i,s,o,a,u){pl=!1,Zc=null,KC.apply(GC,arguments)}function YC(t,e,n,r,i,s,o,a,u){if(QC.apply(this,arguments),pl){if(pl){var c=Zc;pl=!1,Zc=null}else throw Error(H(198));ed||(ed=!0,Dp=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m_(t){if(Gs(t)!==t)throw Error(H(188))}function XC(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m_(i),t;if(s===r)return m_(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function C1(t){return t=XC(t),t!==null?k1(t):null}function k1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k1(t);if(e!==null)return e;t=t.sibling}return null}var b1=Tn.unstable_scheduleCallback,g_=Tn.unstable_cancelCallback,JC=Tn.unstable_shouldYield,ZC=Tn.unstable_requestPaint,it=Tn.unstable_now,ek=Tn.unstable_getCurrentPriorityLevel,yg=Tn.unstable_ImmediatePriority,x1=Tn.unstable_UserBlockingPriority,td=Tn.unstable_NormalPriority,tk=Tn.unstable_LowPriority,N1=Tn.unstable_IdlePriority,tf=null,gr=null;function nk(t){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(tf,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:sk,rk=Math.log,ik=Math.LN2;function sk(t){return t>>>=0,t===0?32:31-(rk(t)/ik|0)|0}var rc=64,ic=4194304;function il(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=il(a):(s&=o,s!==0&&(r=il(s)))}else o=n&~i,o!==0?r=il(o):s!==0&&(r=il(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function ok(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ak(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=ok(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Op(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D1(){var t=rc;return rc<<=1,!(rc&4194240)&&(rc=64),t}function Eh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function lk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function O1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L1,_g,M1,V1,F1,Lp=!1,sc=[],Ai=null,Ri=null,Pi=null,Fl=new Map,Ul=new Map,mi=[],uk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y_(t,e){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":Fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(e.pointerId)}}function Ha(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vu(e),e!==null&&_g(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ck(t,e,n,r,i){switch(e){case"focusin":return Ai=Ha(Ai,t,e,n,r,i),!0;case"dragenter":return Ri=Ha(Ri,t,e,n,r,i),!0;case"mouseover":return Pi=Ha(Pi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fl.set(s,Ha(Fl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ul.set(s,Ha(Ul.get(s)||null,t,e,n,r,i)),!0}return!1}function U1(t){var e=hs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=P1(n),e!==null){t.blockedOn=e,F1(t.priority,function(){M1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bp=r,n.target.dispatchEvent(r),bp=null}else return e=vu(n),e!==null&&_g(e),t.blockedOn=n,!1;e.shift()}return!0}function v_(t,e,n){bc(t)&&n.delete(e)}function dk(){Lp=!1,Ai!==null&&bc(Ai)&&(Ai=null),Ri!==null&&bc(Ri)&&(Ri=null),Pi!==null&&bc(Pi)&&(Pi=null),Fl.forEach(v_),Ul.forEach(v_)}function Wa(t,e){t.blockedOn===e&&(t.blockedOn=null,Lp||(Lp=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,dk)))}function jl(t){function e(i){return Wa(i,t)}if(0<sc.length){Wa(sc[0],t);for(var n=1;n<sc.length;n++){var r=sc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ai!==null&&Wa(Ai,t),Ri!==null&&Wa(Ri,t),Pi!==null&&Wa(Pi,t),Fl.forEach(e),Ul.forEach(e),n=0;n<mi.length;n++)r=mi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mi.length&&(n=mi[0],n.blockedOn===null);)U1(n),n.blockedOn===null&&mi.shift()}var Mo=ei.ReactCurrentBatchConfig,rd=!0;function fk(t,e,n,r){var i=xe,s=Mo.transition;Mo.transition=null;try{xe=1,wg(t,e,n,r)}finally{xe=i,Mo.transition=s}}function hk(t,e,n,r){var i=xe,s=Mo.transition;Mo.transition=null;try{xe=4,wg(t,e,n,r)}finally{xe=i,Mo.transition=s}}function wg(t,e,n,r){if(rd){var i=Mp(t,e,n,r);if(i===null)xh(t,e,r,id,n),y_(t,r);else if(ck(i,t,e,n,r))r.stopPropagation();else if(y_(t,r),e&4&&-1<uk.indexOf(t)){for(;i!==null;){var s=vu(i);if(s!==null&&L1(s),s=Mp(t,e,n,r),s===null&&xh(t,e,r,id,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xh(t,e,r,null,n)}}var id=null;function Mp(t,e,n,r){if(id=null,t=gg(r),t=hs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return id=t,null}function j1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ek()){case yg:return 1;case x1:return 4;case td:case tk:return 16;case N1:return 536870912;default:return 16}default:return 16}}var Ei=null,Eg=null,xc=null;function z1(){if(xc)return xc;var t,e=Eg,n=e.length,r,i="value"in Ei?Ei.value:Ei.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xc=i.slice(t,1<r?1-r:void 0)}function Nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oc(){return!0}function __(){return!1}function Rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oc:__,this.isPropagationStopped=__,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tg=Rn(da),yu=Xe({},da,{view:0,detail:0}),pk=Rn(yu),Th,Ih,qa,nf=Xe({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ig,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(Th=t.screenX-qa.screenX,Ih=t.screenY-qa.screenY):Ih=Th=0,qa=t),Th)},movementY:function(t){return"movementY"in t?t.movementY:Ih}}),w_=Rn(nf),mk=Xe({},nf,{dataTransfer:0}),gk=Rn(mk),yk=Xe({},yu,{relatedTarget:0}),Sh=Rn(yk),vk=Xe({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),_k=Rn(vk),wk=Xe({},da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ek=Rn(wk),Tk=Xe({},da,{data:0}),E_=Rn(Tk),Ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ak={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ak[t])?!!e[t]:!1}function Ig(){return Rk}var Pk=Xe({},yu,{key:function(t){if(t.key){var e=Ik[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ig,charCode:function(t){return t.type==="keypress"?Nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ck=Rn(Pk),kk=Xe({},nf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T_=Rn(kk),bk=Xe({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ig}),xk=Rn(bk),Nk=Xe({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dk=Rn(Nk),Ok=Xe({},nf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lk=Rn(Ok),Mk=[9,13,27,32],Sg=Hr&&"CompositionEvent"in window,ml=null;Hr&&"documentMode"in document&&(ml=document.documentMode);var Vk=Hr&&"TextEvent"in window&&!ml,B1=Hr&&(!Sg||ml&&8<ml&&11>=ml),I_=" ",S_=!1;function $1(t,e){switch(t){case"keyup":return Mk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _o=!1;function Fk(t,e){switch(t){case"compositionend":return H1(e);case"keypress":return e.which!==32?null:(S_=!0,I_);case"textInput":return t=e.data,t===I_&&S_?null:t;default:return null}}function Uk(t,e){if(_o)return t==="compositionend"||!Sg&&$1(t,e)?(t=z1(),xc=Eg=Ei=null,_o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B1&&e.locale!=="ko"?null:e.data;default:return null}}var jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jk[t.type]:e==="textarea"}function W1(t,e,n,r){T1(r),e=sd(e,"onChange"),0<e.length&&(n=new Tg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gl=null,zl=null;function zk(t){nT(t,0)}function rf(t){var e=To(t);if(m1(e))return t}function Bk(t,e){if(t==="change")return e}var q1=!1;if(Hr){var Ah;if(Hr){var Rh="oninput"in document;if(!Rh){var R_=document.createElement("div");R_.setAttribute("oninput","return;"),Rh=typeof R_.oninput=="function"}Ah=Rh}else Ah=!1;q1=Ah&&(!document.documentMode||9<document.documentMode)}function P_(){gl&&(gl.detachEvent("onpropertychange",K1),zl=gl=null)}function K1(t){if(t.propertyName==="value"&&rf(zl)){var e=[];W1(e,zl,t,gg(t)),R1(zk,e)}}function $k(t,e,n){t==="focusin"?(P_(),gl=e,zl=n,gl.attachEvent("onpropertychange",K1)):t==="focusout"&&P_()}function Hk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rf(zl)}function Wk(t,e){if(t==="click")return rf(e)}function qk(t,e){if(t==="input"||t==="change")return rf(e)}function Kk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tr=typeof Object.is=="function"?Object.is:Kk;function Bl(t,e){if(tr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vp.call(e,i)||!tr(t[i],e[i]))return!1}return!0}function C_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k_(t,e){var n=C_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=C_(n)}}function G1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q1(){for(var t=window,e=Jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jc(t.document)}return e}function Ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gk(t){var e=Q1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G1(n.ownerDocument.documentElement,n)){if(r!==null&&Ag(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=k_(n,s);var o=k_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qk=Hr&&"documentMode"in document&&11>=document.documentMode,wo=null,Vp=null,yl=null,Fp=!1;function b_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fp||wo==null||wo!==Jc(r)||(r=wo,"selectionStart"in r&&Ag(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yl&&Bl(yl,r)||(yl=r,r=sd(Vp,"onSelect"),0<r.length&&(e=new Tg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wo)))}function ac(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Eo={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},Ph={},Y1={};Hr&&(Y1=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function sf(t){if(Ph[t])return Ph[t];if(!Eo[t])return t;var e=Eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y1)return Ph[t]=e[n];return t}var X1=sf("animationend"),J1=sf("animationiteration"),Z1=sf("animationstart"),eT=sf("transitionend"),tT=new Map,x_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){tT.set(t,e),Ks(e,[t])}for(var Ch=0;Ch<x_.length;Ch++){var kh=x_[Ch],Yk=kh.toLowerCase(),Xk=kh[0].toUpperCase()+kh.slice(1);Gi(Yk,"on"+Xk)}Gi(X1,"onAnimationEnd");Gi(J1,"onAnimationIteration");Gi(Z1,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(eT,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);Ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jk=new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));function N_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YC(r,e,void 0,t),t.currentTarget=null}function nT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;N_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;N_(i,a,c),s=u}}}if(ed)throw t=Dp,ed=!1,Dp=null,t}function je(t,e){var n=e[$p];n===void 0&&(n=e[$p]=new Set);var r=t+"__bubble";n.has(r)||(rT(e,t,2,!1),n.add(r))}function bh(t,e,n){var r=0;e&&(r|=4),rT(n,t,r,e)}var lc="_reactListening"+Math.random().toString(36).slice(2);function $l(t){if(!t[lc]){t[lc]=!0,c1.forEach(function(n){n!=="selectionchange"&&(Jk.has(n)||bh(n,!1,t),bh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lc]||(e[lc]=!0,bh("selectionchange",!1,e))}}function rT(t,e,n,r){switch(j1(e)){case 1:var i=fk;break;case 4:i=hk;break;default:i=wg}n=i.bind(null,e,n,t),i=void 0,!Np||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}R1(function(){var c=s,d=gg(n),h=[];e:{var p=tT.get(t);if(p!==void 0){var _=Tg,S=t;switch(t){case"keypress":if(Nc(n)===0)break e;case"keydown":case"keyup":_=Ck;break;case"focusin":S="focus",_=Sh;break;case"focusout":S="blur",_=Sh;break;case"beforeblur":case"afterblur":_=Sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=w_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=gk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=xk;break;case X1:case J1:case Z1:_=_k;break;case eT:_=Dk;break;case"scroll":_=pk;break;case"wheel":_=Lk;break;case"copy":case"cut":case"paste":_=Ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=T_}var P=(e&4)!==0,C=!P&&t==="scroll",T=P?p!==null?p+"Capture":null:p;P=[];for(var y=c,I;y!==null;){I=y;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,T!==null&&(N=Vl(y,T),N!=null&&P.push(Hl(y,N,I)))),C)break;y=y.return}0<P.length&&(p=new _(p,S,null,n,d),h.push({event:p,listeners:P}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==bp&&(S=n.relatedTarget||n.fromElement)&&(hs(S)||S[Wr]))break e;if((_||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?hs(S):null,S!==null&&(C=Gs(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(P=w_,N="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=T_,N="onPointerLeave",T="onPointerEnter",y="pointer"),C=_==null?p:To(_),I=S==null?p:To(S),p=new P(N,y+"leave",_,n,d),p.target=C,p.relatedTarget=I,N=null,hs(d)===c&&(P=new P(T,y+"enter",S,n,d),P.target=I,P.relatedTarget=C,N=P),C=N,_&&S)t:{for(P=_,T=S,y=0,I=P;I;I=fo(I))y++;for(I=0,N=T;N;N=fo(N))I++;for(;0<y-I;)P=fo(P),y--;for(;0<I-y;)T=fo(T),I--;for(;y--;){if(P===T||T!==null&&P===T.alternate)break t;P=fo(P),T=fo(T)}P=null}else P=null;_!==null&&D_(h,p,_,P,!1),S!==null&&C!==null&&D_(h,C,S,P,!0)}}e:{if(p=c?To(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var U=Bk;else if(A_(p))if(q1)U=qk;else{U=Hk;var k=$k}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=Wk);if(U&&(U=U(t,c))){W1(h,U,n,d);break e}k&&k(t,p,c),t==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Ap(p,"number",p.value)}switch(k=c?To(c):window,t){case"focusin":(A_(k)||k.contentEditable==="true")&&(wo=k,Vp=c,yl=null);break;case"focusout":yl=Vp=wo=null;break;case"mousedown":Fp=!0;break;case"contextmenu":case"mouseup":case"dragend":Fp=!1,b_(h,n,d);break;case"selectionchange":if(Qk)break;case"keydown":case"keyup":b_(h,n,d)}var E;if(Sg)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else _o?$1(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(B1&&n.locale!=="ko"&&(_o||g!=="onCompositionStart"?g==="onCompositionEnd"&&_o&&(E=z1()):(Ei=d,Eg="value"in Ei?Ei.value:Ei.textContent,_o=!0)),k=sd(c,g),0<k.length&&(g=new E_(g,t,null,n,d),h.push({event:g,listeners:k}),E?g.data=E:(E=H1(n),E!==null&&(g.data=E)))),(E=Vk?Fk(t,n):Uk(t,n))&&(c=sd(c,"onBeforeInput"),0<c.length&&(d=new E_("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=E))}nT(h,e)})}function Hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vl(t,n),s!=null&&r.unshift(Hl(t,s,i)),s=Vl(t,e),s!=null&&r.push(Hl(t,s,i))),t=t.return}return r}function fo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function D_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Vl(n,s),u!=null&&o.unshift(Hl(n,u,a))):i||(u=Vl(n,s),u!=null&&o.push(Hl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zk=/\r\n?/g,eb=/\u0000|\uFFFD/g;function O_(t){return(typeof t=="string"?t:""+t).replace(Zk,`
`).replace(eb,"")}function uc(t,e,n){if(e=O_(e),O_(t)!==e&&n)throw Error(H(425))}function od(){}var Up=null,jp=null;function zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bp=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(t){return L_.resolve(null).then(t).catch(rb)}:Bp;function rb(t){setTimeout(function(){throw t})}function Nh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),jl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jl(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function M_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fa=Math.random().toString(36).slice(2),fr="__reactFiber$"+fa,Wl="__reactProps$"+fa,Wr="__reactContainer$"+fa,$p="__reactEvents$"+fa,ib="__reactListeners$"+fa,sb="__reactHandles$"+fa;function hs(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wr]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=M_(t);t!==null;){if(n=t[fr])return n;t=M_(t)}return e}t=n,n=t.parentNode}return null}function vu(t){return t=t[fr]||t[Wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function of(t){return t[Wl]||null}var Hp=[],Io=-1;function Qi(t){return{current:t}}function ze(t){0>Io||(t.current=Hp[Io],Hp[Io]=null,Io--)}function Me(t,e){Io++,Hp[Io]=t.current,t.current=e}var Vi={},Ht=Qi(Vi),rn=Qi(!1),Cs=Vi;function qo(t,e){var n=t.type.contextTypes;if(!n)return Vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function ad(){ze(rn),ze(Ht)}function V_(t,e,n){if(Ht.current!==Vi)throw Error(H(168));Me(Ht,e),Me(rn,n)}function iT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,$C(t)||"Unknown",i));return Xe({},n,r)}function ld(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,Cs=Ht.current,Me(Ht,t),Me(rn,rn.current),!0}function F_(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=iT(t,e,Cs),r.__reactInternalMemoizedMergedChildContext=t,ze(rn),ze(Ht),Me(Ht,t)):ze(rn),Me(rn,n)}var Or=null,af=!1,Dh=!1;function sT(t){Or===null?Or=[t]:Or.push(t)}function ob(t){af=!0,sT(t)}function Yi(){if(!Dh&&Or!==null){Dh=!0;var t=0,e=xe;try{var n=Or;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Or=null,af=!1}catch(i){throw Or!==null&&(Or=Or.slice(t+1)),b1(yg,Yi),i}finally{xe=e,Dh=!1}}return null}var So=[],Ao=0,ud=null,cd=0,bn=[],xn=0,ks=null,Mr=1,Vr="";function as(t,e){So[Ao++]=cd,So[Ao++]=ud,ud=t,cd=e}function oT(t,e,n){bn[xn++]=Mr,bn[xn++]=Vr,bn[xn++]=ks,ks=t;var r=Mr;t=Vr;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var s=32-Jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mr=1<<32-Jn(e)+i|n<<i|r,Vr=s+t}else Mr=1<<s|n<<i|r,Vr=t}function Rg(t){t.return!==null&&(as(t,1),oT(t,1,0))}function Pg(t){for(;t===ud;)ud=So[--Ao],So[Ao]=null,cd=So[--Ao],So[Ao]=null;for(;t===ks;)ks=bn[--xn],bn[xn]=null,Vr=bn[--xn],bn[xn]=null,Mr=bn[--xn],bn[xn]=null}var yn=null,hn=null,He=!1,Qn=null;function aT(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function U_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,hn=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ks!==null?{id:Mr,overflow:Vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,hn=null,!0):!1;default:return!1}}function Wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qp(t){if(He){var e=hn;if(e){var n=e;if(!U_(t,e)){if(Wp(t))throw Error(H(418));e=Ci(n.nextSibling);var r=yn;e&&U_(t,e)?aT(r,n):(t.flags=t.flags&-4097|2,He=!1,yn=t)}}else{if(Wp(t))throw Error(H(418));t.flags=t.flags&-4097|2,He=!1,yn=t}}}function j_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function cc(t){if(t!==yn)return!1;if(!He)return j_(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zp(t.type,t.memoizedProps)),e&&(e=hn)){if(Wp(t))throw lT(),Error(H(418));for(;e;)aT(t,e),e=Ci(e.nextSibling)}if(j_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=yn?Ci(t.stateNode.nextSibling):null;return!0}function lT(){for(var t=hn;t;)t=Ci(t.nextSibling)}function Ko(){hn=yn=null,He=!1}function Cg(t){Qn===null?Qn=[t]:Qn.push(t)}var ab=ei.ReactCurrentBatchConfig;function Ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function dc(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function z_(t){var e=t._init;return e(t._payload)}function uT(t){function e(T,y){if(t){var I=T.deletions;I===null?(T.deletions=[y],T.flags|=16):I.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=Ni(T,y),T.index=0,T.sibling=null,T}function s(T,y,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<y?(T.flags|=2,y):I):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,y,I,N){return y===null||y.tag!==6?(y=jh(I,T.mode,N),y.return=T,y):(y=i(y,I),y.return=T,y)}function u(T,y,I,N){var U=I.type;return U===vo?d(T,y,I.props.children,N,I.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===hi&&z_(U)===y.type)?(N=i(y,I.props),N.ref=Ka(T,y,I),N.return=T,N):(N=Uc(I.type,I.key,I.props,null,T.mode,N),N.ref=Ka(T,y,I),N.return=T,N)}function c(T,y,I,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=zh(I,T.mode,N),y.return=T,y):(y=i(y,I.children||[]),y.return=T,y)}function d(T,y,I,N,U){return y===null||y.tag!==7?(y=Ts(I,T.mode,N,U),y.return=T,y):(y=i(y,I),y.return=T,y)}function h(T,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=jh(""+y,T.mode,I),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ec:return I=Uc(y.type,y.key,y.props,null,T.mode,I),I.ref=Ka(T,null,y),I.return=T,I;case yo:return y=zh(y,T.mode,I),y.return=T,y;case hi:var N=y._init;return h(T,N(y._payload),I)}if(rl(y)||Ba(y))return y=Ts(y,T.mode,I,null),y.return=T,y;dc(T,y)}return null}function p(T,y,I,N){var U=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return U!==null?null:a(T,y,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ec:return I.key===U?u(T,y,I,N):null;case yo:return I.key===U?c(T,y,I,N):null;case hi:return U=I._init,p(T,y,U(I._payload),N)}if(rl(I)||Ba(I))return U!==null?null:d(T,y,I,N,null);dc(T,I)}return null}function _(T,y,I,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return T=T.get(I)||null,a(y,T,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ec:return T=T.get(N.key===null?I:N.key)||null,u(y,T,N,U);case yo:return T=T.get(N.key===null?I:N.key)||null,c(y,T,N,U);case hi:var k=N._init;return _(T,y,I,k(N._payload),U)}if(rl(N)||Ba(N))return T=T.get(I)||null,d(y,T,N,U,null);dc(y,N)}return null}function S(T,y,I,N){for(var U=null,k=null,E=y,g=y=0,w=null;E!==null&&g<I.length;g++){E.index>g?(w=E,E=null):w=E.sibling;var A=p(T,E,I[g],N);if(A===null){E===null&&(E=w);break}t&&E&&A.alternate===null&&e(T,E),y=s(A,y,g),k===null?U=A:k.sibling=A,k=A,E=w}if(g===I.length)return n(T,E),He&&as(T,g),U;if(E===null){for(;g<I.length;g++)E=h(T,I[g],N),E!==null&&(y=s(E,y,g),k===null?U=E:k.sibling=E,k=E);return He&&as(T,g),U}for(E=r(T,E);g<I.length;g++)w=_(E,T,g,I[g],N),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),y=s(w,y,g),k===null?U=w:k.sibling=w,k=w);return t&&E.forEach(function(b){return e(T,b)}),He&&as(T,g),U}function P(T,y,I,N){var U=Ba(I);if(typeof U!="function")throw Error(H(150));if(I=U.call(I),I==null)throw Error(H(151));for(var k=U=null,E=y,g=y=0,w=null,A=I.next();E!==null&&!A.done;g++,A=I.next()){E.index>g?(w=E,E=null):w=E.sibling;var b=p(T,E,A.value,N);if(b===null){E===null&&(E=w);break}t&&E&&b.alternate===null&&e(T,E),y=s(b,y,g),k===null?U=b:k.sibling=b,k=b,E=w}if(A.done)return n(T,E),He&&as(T,g),U;if(E===null){for(;!A.done;g++,A=I.next())A=h(T,A.value,N),A!==null&&(y=s(A,y,g),k===null?U=A:k.sibling=A,k=A);return He&&as(T,g),U}for(E=r(T,E);!A.done;g++,A=I.next())A=_(E,T,g,A.value,N),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?g:A.key),y=s(A,y,g),k===null?U=A:k.sibling=A,k=A);return t&&E.forEach(function(O){return e(T,O)}),He&&as(T,g),U}function C(T,y,I,N){if(typeof I=="object"&&I!==null&&I.type===vo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ec:e:{for(var U=I.key,k=y;k!==null;){if(k.key===U){if(U=I.type,U===vo){if(k.tag===7){n(T,k.sibling),y=i(k,I.props.children),y.return=T,T=y;break e}}else if(k.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===hi&&z_(U)===k.type){n(T,k.sibling),y=i(k,I.props),y.ref=Ka(T,k,I),y.return=T,T=y;break e}n(T,k);break}else e(T,k);k=k.sibling}I.type===vo?(y=Ts(I.props.children,T.mode,N,I.key),y.return=T,T=y):(N=Uc(I.type,I.key,I.props,null,T.mode,N),N.ref=Ka(T,y,I),N.return=T,T=N)}return o(T);case yo:e:{for(k=I.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(T,y.sibling),y=i(y,I.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=zh(I,T.mode,N),y.return=T,T=y}return o(T);case hi:return k=I._init,C(T,y,k(I._payload),N)}if(rl(I))return S(T,y,I,N);if(Ba(I))return P(T,y,I,N);dc(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,I),y.return=T,T=y):(n(T,y),y=jh(I,T.mode,N),y.return=T,T=y),o(T)):n(T,y)}return C}var Go=uT(!0),cT=uT(!1),dd=Qi(null),fd=null,Ro=null,kg=null;function bg(){kg=Ro=fd=null}function xg(t){var e=dd.current;ze(dd),t._currentValue=e}function Kp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vo(t,e){fd=t,kg=Ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(kg!==t)if(t={context:t,memoizedValue:e,next:null},Ro===null){if(fd===null)throw Error(H(308));Ro=t,fd.dependencies={lanes:0,firstContext:t}}else Ro=Ro.next=t;return e}var ps=null;function Ng(t){ps===null?ps=[t]:ps.push(t)}function dT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ng(e)):(n.next=i.next,i.next=n),e.interleaved=n,qr(t,r)}function qr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pi=!1;function Dg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ng(r)):(e.next=i.next,i.next=e),r.interleaved=e,qr(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vg(t,n)}}function B_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hd(t,e,n,r){var i=t.updateQueue;pi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(p=e,_=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){h=S.call(_,h,p);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,p=typeof S=="function"?S.call(_,h,p):S,p==null)break e;h=Xe({},h,p);break e;case 2:pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=h):d=d.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=h}}function $_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var _u={},yr=Qi(_u),ql=Qi(_u),Kl=Qi(_u);function ms(t){if(t===_u)throw Error(H(174));return t}function Og(t,e){switch(Me(Kl,e),Me(ql,t),Me(yr,_u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pp(e,t)}ze(yr),Me(yr,e)}function Qo(){ze(yr),ze(ql),ze(Kl)}function hT(t){ms(Kl.current);var e=ms(yr.current),n=Pp(e,t.type);e!==n&&(Me(ql,t),Me(yr,n))}function Lg(t){ql.current===t&&(ze(yr),ze(ql))}var Ge=Qi(0);function pd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oh=[];function Mg(){for(var t=0;t<Oh.length;t++)Oh[t]._workInProgressVersionPrimary=null;Oh.length=0}var Oc=ei.ReactCurrentDispatcher,Lh=ei.ReactCurrentBatchConfig,bs=0,Qe=null,pt=null,vt=null,md=!1,vl=!1,Gl=0,lb=0;function Vt(){throw Error(H(321))}function Vg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tr(t[n],e[n]))return!1;return!0}function Fg(t,e,n,r,i,s){if(bs=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oc.current=t===null||t.memoizedState===null?fb:hb,t=n(r,i),vl){s=0;do{if(vl=!1,Gl=0,25<=s)throw Error(H(301));s+=1,vt=pt=null,e.updateQueue=null,Oc.current=pb,t=n(r,i)}while(vl)}if(Oc.current=gd,e=pt!==null&&pt.next!==null,bs=0,vt=pt=Qe=null,md=!1,e)throw Error(H(300));return t}function Ug(){var t=Gl!==0;return Gl=0,t}function cr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Qe.memoizedState=vt=t:vt=vt.next=t,vt}function Vn(){if(pt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=vt===null?Qe.memoizedState:vt.next;if(e!==null)vt=e,pt=t;else{if(t===null)throw Error(H(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?Qe.memoizedState=vt=t:vt=vt.next=t}return vt}function Ql(t,e){return typeof e=="function"?e(t):e}function Mh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=pt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((bs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Qe.lanes|=d,xs|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,tr(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,xs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tr(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pT(){}function mT(t,e){var n=Qe,r=Vn(),i=e(),s=!tr(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,jg(vT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,Yl(9,yT.bind(null,n,r,i,e),void 0,null),wt===null)throw Error(H(349));bs&30||gT(n,e,i)}return i}function gT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yT(t,e,n,r){e.value=n,e.getSnapshot=r,_T(e)&&wT(t)}function vT(t,e,n){return n(function(){_T(e)&&wT(t)})}function _T(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tr(t,n)}catch{return!0}}function wT(t){var e=qr(t,1);e!==null&&Zn(e,t,1,-1)}function H_(t){var e=cr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:t},e.queue=t,t=t.dispatch=db.bind(null,Qe,t),[e.memoizedState,t]}function Yl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ET(){return Vn().memoizedState}function Lc(t,e,n,r){var i=cr();Qe.flags|=t,i.memoizedState=Yl(1|e,n,void 0,r===void 0?null:r)}function lf(t,e,n,r){var i=Vn();r=r===void 0?null:r;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,r!==null&&Vg(r,o.deps)){i.memoizedState=Yl(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=Yl(1|e,n,s,r)}function W_(t,e){return Lc(8390656,8,t,e)}function jg(t,e){return lf(2048,8,t,e)}function TT(t,e){return lf(4,2,t,e)}function IT(t,e){return lf(4,4,t,e)}function ST(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function AT(t,e,n){return n=n!=null?n.concat([t]):null,lf(4,4,ST.bind(null,e,t),n)}function zg(){}function RT(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function PT(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function CT(t,e,n){return bs&21?(tr(n,e)||(n=D1(),Qe.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function ub(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Lh.transition;Lh.transition={};try{t(!1),e()}finally{xe=n,Lh.transition=r}}function kT(){return Vn().memoizedState}function cb(t,e,n){var r=xi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bT(t))xT(e,n);else if(n=dT(t,e,n,r),n!==null){var i=Xt();Zn(n,t,r,i),NT(n,e,r)}}function db(t,e,n){var r=xi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tr(a,o)){var u=e.interleaved;u===null?(i.next=i,Ng(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=dT(t,e,i,r),n!==null&&(i=Xt(),Zn(n,t,r,i),NT(n,e,r))}}function bT(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function xT(t,e){vl=md=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vg(t,n)}}var gd={readContext:Mn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},fb={readContext:Mn,useCallback:function(t,e){return cr().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:W_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,ST.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=cr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cb.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=cr();return t={current:t},e.memoizedState=t},useState:H_,useDebugValue:zg,useDeferredValue:function(t){return cr().memoizedState=t},useTransition:function(){var t=H_(!1),e=t[0];return t=ub.bind(null,t[1]),cr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=cr();if(He){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),wt===null)throw Error(H(349));bs&30||gT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,W_(vT.bind(null,r,s,t),[t]),r.flags|=2048,Yl(9,yT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cr(),e=wt.identifierPrefix;if(He){var n=Vr,r=Mr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hb={readContext:Mn,useCallback:RT,useContext:Mn,useEffect:jg,useImperativeHandle:AT,useInsertionEffect:TT,useLayoutEffect:IT,useMemo:PT,useReducer:Mh,useRef:ET,useState:function(){return Mh(Ql)},useDebugValue:zg,useDeferredValue:function(t){var e=Vn();return CT(e,pt.memoizedState,t)},useTransition:function(){var t=Mh(Ql)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:pT,useSyncExternalStore:mT,useId:kT,unstable_isNewReconciler:!1},pb={readContext:Mn,useCallback:RT,useContext:Mn,useEffect:jg,useImperativeHandle:AT,useInsertionEffect:TT,useLayoutEffect:IT,useMemo:PT,useReducer:Vh,useRef:ET,useState:function(){return Vh(Ql)},useDebugValue:zg,useDeferredValue:function(t){var e=Vn();return pt===null?e.memoizedState=t:CT(e,pt.memoizedState,t)},useTransition:function(){var t=Vh(Ql)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:pT,useSyncExternalStore:mT,useId:kT,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uf={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=xi(t),s=Br(r,i);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,i),e!==null&&(Zn(e,t,i,r),Dc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=xi(t),s=Br(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,i),e!==null&&(Zn(e,t,i,r),Dc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=xi(t),i=Br(n,r);i.tag=2,e!=null&&(i.callback=e),e=ki(t,i,r),e!==null&&(Zn(e,t,r,n),Dc(e,t,r))}};function q_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bl(n,r)||!Bl(i,s):!0}function DT(t,e,n){var r=!1,i=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(i=sn(e)?Cs:Ht.current,r=e.contextTypes,s=(r=r!=null)?qo(t,i):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function K_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uf.enqueueReplaceState(e,e.state,null)}function Qp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Dg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mn(s):(s=sn(e)?Cs:Ht.current,i.context=qo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&uf.enqueueReplaceState(i,i.state,null),hd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yo(t,e){try{var n="",r=e;do n+=BC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mb=typeof WeakMap=="function"?WeakMap:Map;function OT(t,e,n){n=Br(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vd||(vd=!0,om=r),Yp(t,e)},n}function LT(t,e,n){n=Br(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yp(t,e),typeof r!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function G_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kb.bind(null,t,e,n),e.then(t,t))}function Q_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Y_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Br(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var gb=ei.ReactCurrentOwner,nn=!1;function Gt(t,e,n,r){e.child=t===null?cT(e,null,n,r):Go(e,t.child,n,r)}function X_(t,e,n,r,i){n=n.render;var s=e.ref;return Vo(e,i),r=Fg(t,e,n,r,s,i),n=Ug(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(He&&n&&Rg(e),e.flags|=1,Gt(t,e,r,i),e.child)}function J_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,MT(t,e,s,r,i)):(t=Uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(o,r)&&t.ref===e.ref)return Kr(t,e,i)}return e.flags|=1,t=Ni(s,r),t.ref=e.ref,t.return=e,e.child=t}function MT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bl(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Kr(t,e,i)}return Xp(t,e,n,r,i)}function VT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Co,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Co,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Co,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Co,dn),dn|=r;return Gt(t,e,i,n),e.child}function FT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xp(t,e,n,r,i){var s=sn(n)?Cs:Ht.current;return s=qo(e,s),Vo(e,i),n=Fg(t,e,n,r,s,i),r=Ug(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(He&&r&&Rg(e),e.flags|=1,Gt(t,e,n,i),e.child)}function Z_(t,e,n,r,i){if(sn(n)){var s=!0;ld(e)}else s=!1;if(Vo(e,i),e.stateNode===null)Mc(t,e),DT(e,n,r),Qp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=sn(n)?Cs:Ht.current,c=qo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&K_(e,o,r,c),pi=!1;var p=e.memoizedState;o.state=p,hd(e,r,o,i),u=e.memoizedState,a!==r||p!==u||rn.current||pi?(typeof d=="function"&&(Gp(e,n,d,r),u=e.memoizedState),(a=pi||q_(e,n,a,r,p,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,fT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,h=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mn(u):(u=sn(n)?Cs:Ht.current,u=qo(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==u)&&K_(e,o,r,u),pi=!1,p=e.memoizedState,o.state=p,hd(e,r,o,i);var S=e.memoizedState;a!==h||p!==S||rn.current||pi?(typeof _=="function"&&(Gp(e,n,_,r),S=e.memoizedState),(c=pi||q_(e,n,c,r,p,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Jp(t,e,n,r,s,i)}function Jp(t,e,n,r,i,s){FT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&F_(e,n,!1),Kr(t,e,s);r=e.stateNode,gb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Go(e,t.child,null,s),e.child=Go(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=r.state,i&&F_(e,n,!0),e.child}function UT(t){var e=t.stateNode;e.pendingContext?V_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&V_(t,e.context,!1),Og(t,e.containerInfo)}function e0(t,e,n,r,i){return Ko(),Cg(i),e.flags|=256,Gt(t,e,n,r),e.child}var Zp={dehydrated:null,treeContext:null,retryLane:0};function em(t){return{baseLanes:t,cachePool:null,transitions:null}}function jT(t,e,n){var r=e.pendingProps,i=Ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(Ge,i&1),t===null)return qp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ff(o,r,0,null),t=Ts(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=em(n),e.memoizedState=Zp,t):Bg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ni(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=Ts(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?em(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zp,r}return s=t.child,t=s.sibling,r=Ni(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bg(t,e){return e=ff({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,r){return r!==null&&Cg(r),Go(e,t.child,null,n),t=Bg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fh(Error(H(422))),fc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ff({mode:"visible",children:r.children},i,0,null),s=Ts(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Go(e,t.child,null,o),e.child.memoizedState=em(o),e.memoizedState=Zp,s);if(!(e.mode&1))return fc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Fh(s,r,void 0),fc(t,e,o,r)}if(a=(o&t.childLanes)!==0,nn||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qr(t,i),Zn(r,t,i,-1))}return Gg(),r=Fh(Error(H(421))),fc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=Ci(i.nextSibling),yn=e,He=!0,Qn=null,t!==null&&(bn[xn++]=Mr,bn[xn++]=Vr,bn[xn++]=ks,Mr=t.id,Vr=t.overflow,ks=e),e=Bg(e,r.children),e.flags|=4096,e)}function t0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kp(t.return,e,n)}function Uh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Gt(t,e,r.children,n),r=Ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,n,e);else if(t.tag===19)t0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(Ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uh(e,!0,n,null,s);break;case"together":Uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vb(t,e,n){switch(e.tag){case 3:UT(e),Ko();break;case 5:hT(e);break;case 1:sn(e.type)&&ld(e);break;case 4:Og(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(dd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ge,Ge.current&1),e.flags|=128,null):n&e.child.childLanes?jT(t,e,n):(Me(Ge,Ge.current&1),t=Kr(t,e,n),t!==null?t.sibling:null);Me(Ge,Ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ge,Ge.current),r)break;return null;case 22:case 23:return e.lanes=0,VT(t,e,n)}return Kr(t,e,n)}var BT,tm,$T,HT;BT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tm=function(){};$T=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ms(yr.current);var s=null;switch(n){case"input":i=Ip(t,i),r=Ip(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=Rp(t,i),r=Rp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=od)}Cp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ll.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ll.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&je("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};HT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ga(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _b(t,e,n){var r=e.pendingProps;switch(Pg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return sn(e.type)&&ad(),Ft(e),null;case 3:return r=e.stateNode,Qo(),ze(rn),ze(Ht),Mg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(um(Qn),Qn=null))),tm(t,e),Ft(e),null;case 5:Lg(e);var i=ms(Kl.current);if(n=e.type,t!==null&&e.stateNode!=null)$T(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Ft(e),null}if(t=ms(yr.current),cc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fr]=e,r[Wl]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<sl.length;i++)je(sl[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":c_(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":f_(r,s),je("invalid",r)}Cp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&uc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uc(r.textContent,a,t),i=["children",""+a]):Ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":tc(r),d_(r,s,!0);break;case"textarea":tc(r),h_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=od)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fr]=e,t[Wl]=r,BT(t,e,!1,!1),e.stateNode=t;e:{switch(o=kp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<sl.length;i++)je(sl[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":c_(t,r),i=Ip(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),je("invalid",t);break;case"textarea":f_(t,r),i=Rp(t,r),je("invalid",t);break;default:i=r}Cp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?E1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ml(t,u):typeof u=="number"&&Ml(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ll.hasOwnProperty(s)?u!=null&&s==="onScroll"&&je("scroll",t):u!=null&&fg(t,s,u,o))}switch(n){case"input":tc(t),d_(t,r,!1);break;case"textarea":tc(t),h_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Do(t,!!r.multiple,s,!1):r.defaultValue!=null&&Do(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=od)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)HT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=ms(Kl.current),ms(yr.current),cc(e)){if(r=e.stateNode,n=e.memoizedProps,r[fr]=e,(s=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:uc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=e,e.stateNode=r}return Ft(e),null;case 13:if(ze(Ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&hn!==null&&e.mode&1&&!(e.flags&128))lT(),Ko(),e.flags|=98560,s=!1;else if(s=cc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[fr]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Qn!==null&&(um(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ge.current&1?gt===0&&(gt=3):Gg())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Qo(),tm(t,e),t===null&&$l(e.stateNode.containerInfo),Ft(e),null;case 10:return xg(e.type._context),Ft(e),null;case 17:return sn(e.type)&&ad(),Ft(e),null;case 19:if(ze(Ge),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ga(s,!1);else{if(gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pd(t),o!==null){for(e.flags|=128,Ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(Ge,Ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>Xo&&(e.flags|=128,r=!0,Ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=pd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Ft(e),null}else 2*it()-s.renderingStartTime>Xo&&n!==1073741824&&(e.flags|=128,r=!0,Ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=Ge.current,Me(Ge,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Kg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function wb(t,e){switch(Pg(e),e.tag){case 1:return sn(e.type)&&ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),ze(rn),ze(Ht),Mg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lg(e),null;case 13:if(ze(Ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ze(Ge),null;case 4:return Qo(),null;case 10:return xg(e.type._context),null;case 22:case 23:return Kg(),null;case 24:return null;default:return null}}var hc=!1,zt=!1,Eb=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function nm(t,e,n){try{n()}catch(r){et(t,e,r)}}var n0=!1;function Tb(t,e){if(Up=rd,t=Q1(),Ag(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jp={focusedElem:t,selectionRange:n},rd=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,C=S.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:qn(e.type,P),C);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(N){et(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return S=n0,n0=!1,S}function _l(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nm(e,n,s)}i=i.next}while(i!==r)}}function cf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WT(t){var e=t.alternate;e!==null&&(t.alternate=null,WT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[Wl],delete e[$p],delete e[ib],delete e[sb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qT(t){return t.tag===5||t.tag===3||t.tag===4}function r0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function im(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=od));else if(r!==4&&(t=t.child,t!==null))for(im(t,e,n),t=t.sibling;t!==null;)im(t,e,n),t=t.sibling}function sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sm(t,e,n),t=t.sibling;t!==null;)sm(t,e,n),t=t.sibling}var Rt=null,Kn=!1;function ui(t,e,n){for(n=n.child;n!==null;)KT(t,e,n),n=n.sibling}function KT(t,e,n){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(tf,n)}catch{}switch(n.tag){case 5:zt||Po(n,e);case 6:var r=Rt,i=Kn;Rt=null,ui(t,e,n),Rt=r,Kn=i,Rt!==null&&(Kn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Kn?(t=Rt,n=n.stateNode,t.nodeType===8?Nh(t.parentNode,n):t.nodeType===1&&Nh(t,n),jl(t)):Nh(Rt,n.stateNode));break;case 4:r=Rt,i=Kn,Rt=n.stateNode.containerInfo,Kn=!0,ui(t,e,n),Rt=r,Kn=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nm(n,e,o),i=i.next}while(i!==r)}ui(t,e,n);break;case 1:if(!zt&&(Po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){et(n,e,a)}ui(t,e,n);break;case 21:ui(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,ui(t,e,n),zt=r):ui(t,e,n);break;default:ui(t,e,n)}}function i0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Eb),e.forEach(function(r){var i=xb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,Kn=!1;break e;case 3:Rt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Rt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Rt===null)throw Error(H(160));KT(s,o,i),Rt=null,Kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){et(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)GT(e,t),e=e.sibling}function GT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ur(t),r&4){try{_l(3,t,t.return),cf(3,t)}catch(P){et(t,t.return,P)}try{_l(5,t,t.return)}catch(P){et(t,t.return,P)}}break;case 1:Wn(e,t),ur(t),r&512&&n!==null&&Po(n,n.return);break;case 5:if(Wn(e,t),ur(t),r&512&&n!==null&&Po(n,n.return),t.flags&32){var i=t.stateNode;try{Ml(i,"")}catch(P){et(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g1(i,s),kp(a,o);var c=kp(a,s);for(o=0;o<u.length;o+=2){var d=u[o],h=u[o+1];d==="style"?E1(i,h):d==="dangerouslySetInnerHTML"?_1(i,h):d==="children"?Ml(i,h):fg(i,d,h,c)}switch(a){case"input":Sp(i,s);break;case"textarea":y1(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Do(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Do(i,!!s.multiple,s.defaultValue,!0):Do(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wl]=s}catch(P){et(t,t.return,P)}}break;case 6:if(Wn(e,t),ur(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){et(t,t.return,P)}}break;case 3:if(Wn(e,t),ur(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jl(e.containerInfo)}catch(P){et(t,t.return,P)}break;case 4:Wn(e,t),ur(t);break;case 13:Wn(e,t),ur(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wg=it())),r&4&&i0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,Wn(e,t),zt=c):Wn(e,t),ur(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(h=Y=d;Y!==null;){switch(p=Y,_=p.child,p.tag){case 0:case 11:case 14:case 15:_l(4,p,p.return);break;case 1:Po(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){et(r,n,P)}}break;case 5:Po(p,p.return);break;case 22:if(p.memoizedState!==null){o0(h);continue}}_!==null?(_.return=p,Y=_):o0(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=w1("display",o))}catch(P){et(t,t.return,P)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(P){et(t,t.return,P)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),ur(t),r&4&&i0(t);break;case 21:break;default:Wn(e,t),ur(t)}}function ur(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qT(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ml(i,""),r.flags&=-33);var s=r0(t);sm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=r0(t);im(t,a,o);break;default:throw Error(H(161))}}catch(u){et(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ib(t,e,n){Y=t,QT(t)}function QT(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||zt;a=hc;var c=zt;if(hc=o,(zt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?a0(i):u!==null?(u.return=o,Y=u):a0(i);for(;s!==null;)Y=s,QT(s),s=s.sibling;Y=i,hc=a,zt=c}s0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):s0(t)}}function s0(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||cf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&jl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}zt||e.flags&512&&rm(e)}catch(p){et(e,e.return,p)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function o0(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function a0(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cf(4,e)}catch(u){et(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){et(e,i,u)}}var s=e.return;try{rm(e)}catch(u){et(e,s,u)}break;case 5:var o=e.return;try{rm(e)}catch(u){et(e,o,u)}}}catch(u){et(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var Sb=Math.ceil,yd=ei.ReactCurrentDispatcher,$g=ei.ReactCurrentOwner,Dn=ei.ReactCurrentBatchConfig,Ie=0,wt=null,lt=null,kt=0,dn=0,Co=Qi(0),gt=0,Xl=null,xs=0,df=0,Hg=0,wl=null,tn=null,Wg=0,Xo=1/0,Dr=null,vd=!1,om=null,bi=null,pc=!1,Ti=null,_d=0,El=0,am=null,Vc=-1,Fc=0;function Xt(){return Ie&6?it():Vc!==-1?Vc:Vc=it()}function xi(t){return t.mode&1?Ie&2&&kt!==0?kt&-kt:ab.transition!==null?(Fc===0&&(Fc=D1()),Fc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:j1(t.type)),t):1}function Zn(t,e,n,r){if(50<El)throw El=0,am=null,Error(H(185));gu(t,n,r),(!(Ie&2)||t!==wt)&&(t===wt&&(!(Ie&2)&&(df|=n),gt===4&&gi(t,kt)),on(t,r),n===1&&Ie===0&&!(e.mode&1)&&(Xo=it()+500,af&&Yi()))}function on(t,e){var n=t.callbackNode;ak(t,e);var r=nd(t,t===wt?kt:0);if(r===0)n!==null&&g_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&g_(n),e===1)t.tag===0?ob(l0.bind(null,t)):sT(l0.bind(null,t)),nb(function(){!(Ie&6)&&Yi()}),n=null;else{switch(O1(r)){case 1:n=yg;break;case 4:n=x1;break;case 16:n=td;break;case 536870912:n=N1;break;default:n=td}n=rI(n,YT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YT(t,e){if(Vc=-1,Fc=0,Ie&6)throw Error(H(327));var n=t.callbackNode;if(Fo()&&t.callbackNode!==n)return null;var r=nd(t,t===wt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wd(t,r);else{e=r;var i=Ie;Ie|=2;var s=JT();(wt!==t||kt!==e)&&(Dr=null,Xo=it()+500,Es(t,e));do try{Pb();break}catch(a){XT(t,a)}while(!0);bg(),yd.current=s,Ie=i,lt!==null?e=0:(wt=null,kt=0,e=gt)}if(e!==0){if(e===2&&(i=Op(t),i!==0&&(r=i,e=lm(t,i))),e===1)throw n=Xl,Es(t,0),gi(t,r),on(t,it()),n;if(e===6)gi(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ab(i)&&(e=wd(t,r),e===2&&(s=Op(t),s!==0&&(r=s,e=lm(t,s))),e===1))throw n=Xl,Es(t,0),gi(t,r),on(t,it()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:ls(t,tn,Dr);break;case 3:if(gi(t,r),(r&130023424)===r&&(e=Wg+500-it(),10<e)){if(nd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bp(ls.bind(null,t,tn,Dr),e);break}ls(t,tn,Dr);break;case 4:if(gi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sb(r/1960))-r,10<r){t.timeoutHandle=Bp(ls.bind(null,t,tn,Dr),r);break}ls(t,tn,Dr);break;case 5:ls(t,tn,Dr);break;default:throw Error(H(329))}}}return on(t,it()),t.callbackNode===n?YT.bind(null,t):null}function lm(t,e){var n=wl;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=wd(t,e),t!==2&&(e=tn,tn=n,e!==null&&um(e)),t}function um(t){tn===null?tn=t:tn.push.apply(tn,t)}function Ab(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gi(t,e){for(e&=~Hg,e&=~df,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function l0(t){if(Ie&6)throw Error(H(327));Fo();var e=nd(t,0);if(!(e&1))return on(t,it()),null;var n=wd(t,e);if(t.tag!==0&&n===2){var r=Op(t);r!==0&&(e=r,n=lm(t,r))}if(n===1)throw n=Xl,Es(t,0),gi(t,e),on(t,it()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ls(t,tn,Dr),on(t,it()),null}function qg(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(Xo=it()+500,af&&Yi())}}function Ns(t){Ti!==null&&Ti.tag===0&&!(Ie&6)&&Fo();var e=Ie;Ie|=1;var n=Dn.transition,r=xe;try{if(Dn.transition=null,xe=1,t)return t()}finally{xe=r,Dn.transition=n,Ie=e,!(Ie&6)&&Yi()}}function Kg(){dn=Co.current,ze(Co)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tb(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(Pg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ad();break;case 3:Qo(),ze(rn),ze(Ht),Mg();break;case 5:Lg(r);break;case 4:Qo();break;case 13:ze(Ge);break;case 19:ze(Ge);break;case 10:xg(r.type._context);break;case 22:case 23:Kg()}n=n.return}if(wt=t,lt=t=Ni(t.current,null),kt=dn=e,gt=0,Xl=null,Hg=df=xs=0,tn=wl=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ps=null}return t}function XT(t,e){do{var n=lt;try{if(bg(),Oc.current=gd,md){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}md=!1}if(bs=0,vt=pt=Qe=null,vl=!1,Gl=0,$g.current=null,n===null||n.return===null){gt=1,Xl=e,lt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=kt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Q_(o);if(_!==null){_.flags&=-257,Y_(_,o,a,s,e),_.mode&1&&G_(s,c,e),e=_,u=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(u),e.updateQueue=P}else S.add(u);break e}else{if(!(e&1)){G_(s,c,e),Gg();break e}u=Error(H(426))}}else if(He&&a.mode&1){var C=Q_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Y_(C,o,a,s,e),Cg(Yo(u,a));break e}}s=u=Yo(u,a),gt!==4&&(gt=2),wl===null?wl=[s]:wl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=OT(s,u,e);B_(s,T);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(bi===null||!bi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=LT(s,a,e);B_(s,N);break e}}s=s.return}while(s!==null)}eI(n)}catch(U){e=U,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function JT(){var t=yd.current;return yd.current=gd,t===null?gd:t}function Gg(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||!(xs&268435455)&&!(df&268435455)||gi(wt,kt)}function wd(t,e){var n=Ie;Ie|=2;var r=JT();(wt!==t||kt!==e)&&(Dr=null,Es(t,e));do try{Rb();break}catch(i){XT(t,i)}while(!0);if(bg(),Ie=n,yd.current=r,lt!==null)throw Error(H(261));return wt=null,kt=0,gt}function Rb(){for(;lt!==null;)ZT(lt)}function Pb(){for(;lt!==null&&!JC();)ZT(lt)}function ZT(t){var e=nI(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?eI(t):lt=e,$g.current=null}function eI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wb(n,e),n!==null){n.flags&=32767,lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gt=6,lt=null;return}}else if(n=_b(n,e,dn),n!==null){lt=n;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);gt===0&&(gt=5)}function ls(t,e,n){var r=xe,i=Dn.transition;try{Dn.transition=null,xe=1,Cb(t,e,n,r)}finally{Dn.transition=i,xe=r}return null}function Cb(t,e,n,r){do Fo();while(Ti!==null);if(Ie&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lk(t,s),t===wt&&(lt=wt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pc||(pc=!0,rI(td,function(){return Fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=xe;xe=1;var a=Ie;Ie|=4,$g.current=null,Tb(t,n),GT(n,t),Gk(jp),rd=!!Up,jp=Up=null,t.current=n,Ib(n),ZC(),Ie=a,xe=o,Dn.transition=s}else t.current=n;if(pc&&(pc=!1,Ti=t,_d=i),s=t.pendingLanes,s===0&&(bi=null),nk(n.stateNode),on(t,it()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vd)throw vd=!1,t=om,om=null,t;return _d&1&&t.tag!==0&&Fo(),s=t.pendingLanes,s&1?t===am?El++:(El=0,am=t):El=0,Yi(),null}function Fo(){if(Ti!==null){var t=O1(_d),e=Dn.transition,n=xe;try{if(Dn.transition=null,xe=16>t?16:t,Ti===null)var r=!1;else{if(t=Ti,Ti=null,_d=0,Ie&6)throw Error(H(331));var i=Ie;for(Ie|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:_l(8,d,s)}var h=d.child;if(h!==null)h.return=d,Y=h;else for(;Y!==null;){d=Y;var p=d.sibling,_=d.return;if(WT(d),d===c){Y=null;break}if(p!==null){p.return=_,Y=p;break}Y=_}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_l(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Y=T;break e}Y=s.return}}var y=t.current;for(Y=y;Y!==null;){o=Y;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Y=I;else e:for(o=y;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cf(9,a)}}catch(U){et(a,a.return,U)}if(a===o){Y=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,Y=N;break e}Y=a.return}}if(Ie=i,Yi(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(tf,t)}catch{}r=!0}return r}finally{xe=n,Dn.transition=e}}return!1}function u0(t,e,n){e=Yo(n,e),e=OT(t,e,1),t=ki(t,e,1),e=Xt(),t!==null&&(gu(t,1,e),on(t,e))}function et(t,e,n){if(t.tag===3)u0(t,t,n);else for(;e!==null;){if(e.tag===3){u0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bi===null||!bi.has(r))){t=Yo(n,t),t=LT(e,t,1),e=ki(e,t,1),t=Xt(),e!==null&&(gu(e,1,t),on(e,t));break}}e=e.return}}function kb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(kt&n)===n&&(gt===4||gt===3&&(kt&130023424)===kt&&500>it()-Wg?Es(t,0):Hg|=n),on(t,e)}function tI(t,e){e===0&&(t.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var n=Xt();t=qr(t,e),t!==null&&(gu(t,e,n),on(t,n))}function bb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tI(t,n)}function xb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),tI(t,n)}var nI;nI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,vb(t,e,n);nn=!!(t.flags&131072)}else nn=!1,He&&e.flags&1048576&&oT(e,cd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mc(t,e),t=e.pendingProps;var i=qo(e,Ht.current);Vo(e,n),i=Fg(null,e,r,t,i,n);var s=Ug();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,ld(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dg(e),i.updater=uf,e.stateNode=i,i._reactInternals=e,Qp(e,r,t,n),e=Jp(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Rg(e),Gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Db(r),t=qn(r,t),i){case 0:e=Xp(null,e,r,t,n);break e;case 1:e=Z_(null,e,r,t,n);break e;case 11:e=X_(null,e,r,t,n);break e;case 14:e=J_(null,e,r,qn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Xp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Z_(t,e,r,i,n);case 3:e:{if(UT(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,fT(t,e),hd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yo(Error(H(423)),e),e=e0(t,e,r,n,i);break e}else if(r!==i){i=Yo(Error(H(424)),e),e=e0(t,e,r,n,i);break e}else for(hn=Ci(e.stateNode.containerInfo.firstChild),yn=e,He=!0,Qn=null,n=cT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),r===i){e=Kr(t,e,n);break e}Gt(t,e,r,n)}e=e.child}return e;case 5:return hT(e),t===null&&qp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zp(r,i)?o=null:s!==null&&zp(r,s)&&(e.flags|=32),FT(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&qp(e),null;case 13:return jT(t,e,n);case 4:return Og(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Go(e,null,r,n):Gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),X_(t,e,r,i,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(dd,r._currentValue),r._currentValue=o,s!==null)if(tr(s.value,o)){if(s.children===i.children&&!rn.current){e=Kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Br(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vo(e,n),i=Mn(i),r=r(i),e.flags|=1,Gt(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),J_(t,e,r,i,n);case 15:return MT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Mc(t,e),e.tag=1,sn(r)?(t=!0,ld(e)):t=!1,Vo(e,n),DT(e,r,i),Qp(e,r,i,n),Jp(null,e,r,!0,t,n);case 19:return zT(t,e,n);case 22:return VT(t,e,n)}throw Error(H(156,e.tag))};function rI(t,e){return b1(t,e)}function Nb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,r){return new Nb(t,e,n,r)}function Qg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Db(t){if(typeof t=="function")return Qg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pg)return 11;if(t===mg)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vo:return Ts(n.children,i,s,e);case hg:o=8,i|=8;break;case _p:return t=Nn(12,n,e,i|2),t.elementType=_p,t.lanes=s,t;case wp:return t=Nn(13,n,e,i),t.elementType=wp,t.lanes=s,t;case Ep:return t=Nn(19,n,e,i),t.elementType=Ep,t.lanes=s,t;case h1:return ff(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d1:o=10;break e;case f1:o=9;break e;case pg:o=11;break e;case mg:o=14;break e;case hi:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ts(t,e,n,r){return t=Nn(7,t,r,e),t.lanes=n,t}function ff(t,e,n,r){return t=Nn(22,t,r,e),t.elementType=h1,t.lanes=n,t.stateNode={isHidden:!1},t}function jh(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function zh(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ob(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eh(0),this.expirationTimes=Eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yg(t,e,n,r,i,s,o,a,u){return t=new Ob(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dg(s),t}function Lb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iI(t){if(!t)return Vi;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(sn(n))return iT(t,n,e)}return e}function sI(t,e,n,r,i,s,o,a,u){return t=Yg(n,r,!0,t,i,s,o,a,u),t.context=iI(null),n=t.current,r=Xt(),i=xi(n),s=Br(r,i),s.callback=e??null,ki(n,s,i),t.current.lanes=i,gu(t,i,r),on(t,r),t}function hf(t,e,n,r){var i=e.current,s=Xt(),o=xi(i);return n=iI(n),e.context===null?e.context=n:e.pendingContext=n,e=Br(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ki(i,e,o),t!==null&&(Zn(t,i,o,s),Dc(t,i,o)),o}function Ed(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xg(t,e){c0(t,e),(t=t.alternate)&&c0(t,e)}function Mb(){return null}var oI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jg(t){this._internalRoot=t}pf.prototype.render=Jg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));hf(t,e,null,null)};pf.prototype.unmount=Jg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ns(function(){hf(null,t,null,null)}),e[Wr]=null}};function pf(t){this._internalRoot=t}pf.prototype.unstable_scheduleHydration=function(t){if(t){var e=V1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mi.length&&e!==0&&e<mi[n].priority;n++);mi.splice(n,0,t),n===0&&U1(t)}};function Zg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function Vb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ed(o);s.call(c)}}var o=sI(e,r,t,0,null,!1,!1,"",d0);return t._reactRootContainer=o,t[Wr]=o.current,$l(t.nodeType===8?t.parentNode:t),Ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ed(u);a.call(c)}}var u=Yg(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=u,t[Wr]=u.current,$l(t.nodeType===8?t.parentNode:t),Ns(function(){hf(e,u,n,r)}),u}function gf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ed(o);a.call(u)}}hf(e,o,t,i)}else o=Vb(n,e,t,i,r);return Ed(o)}L1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=il(e.pendingLanes);n!==0&&(vg(e,n|1),on(e,it()),!(Ie&6)&&(Xo=it()+500,Yi()))}break;case 13:Ns(function(){var r=qr(t,1);if(r!==null){var i=Xt();Zn(r,t,1,i)}}),Xg(t,1)}};_g=function(t){if(t.tag===13){var e=qr(t,134217728);if(e!==null){var n=Xt();Zn(e,t,134217728,n)}Xg(t,134217728)}};M1=function(t){if(t.tag===13){var e=xi(t),n=qr(t,e);if(n!==null){var r=Xt();Zn(n,t,e,r)}Xg(t,e)}};V1=function(){return xe};F1=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};xp=function(t,e,n){switch(e){case"input":if(Sp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=of(r);if(!i)throw Error(H(90));m1(r),Sp(r,i)}}}break;case"textarea":y1(t,n);break;case"select":e=n.value,e!=null&&Do(t,!!n.multiple,e,!1)}};S1=qg;A1=Ns;var Fb={usingClientEntryPoint:!1,Events:[vu,To,of,T1,I1,qg]},Qa={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ub={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Mb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{tf=mc.inject(Ub),gr=mc}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fb;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zg(e))throw Error(H(200));return Lb(t,e,null,n)};An.createRoot=function(t,e){if(!Zg(t))throw Error(H(299));var n=!1,r="",i=oI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Yg(t,1,!1,null,null,n,!1,r,i),t[Wr]=e.current,$l(t.nodeType===8?t.parentNode:t),new Jg(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=C1(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Ns(t)};An.hydrate=function(t,e,n){if(!mf(e))throw Error(H(200));return gf(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Zg(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sI(e,null,t,1,n??null,i,!1,s,o),t[Wr]=e.current,$l(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pf(e)};An.render=function(t,e,n){if(!mf(e))throw Error(H(200));return gf(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!mf(t))throw Error(H(40));return t._reactRootContainer?(Ns(function(){gf(null,null,t,!1,function(){t._reactRootContainer=null,t[Wr]=null})}),!0):!1};An.unstable_batchedUpdates=qg;An.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mf(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return gf(t,e,n,!1,r)};An.version="18.3.1-next-f1338f8080-20240426";function aI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aI)}catch(t){console.error(t)}}aI(),a1.exports=An;var ey=a1.exports;const jb=sg(ey),zb=QE({__proto__:null,default:jb},[ey]);var f0=ey;yp.createRoot=f0.createRoot,yp.hydrateRoot=f0.hydrateRoot;var lI={exports:{}},uI={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=z;function Bb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $b=typeof Object.is=="function"?Object.is:Bb,Hb=wu.useSyncExternalStore,Wb=wu.useRef,qb=wu.useEffect,Kb=wu.useMemo,Gb=wu.useDebugValue;uI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Wb(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Kb(function(){function u(_){if(!c){if(c=!0,d=_,_=r(_),i!==void 0&&o.hasValue){var S=o.value;if(i(S,_))return h=S}return h=_}if(S=h,$b(d,_))return S;var P=r(_);return i!==void 0&&i(S,P)?S:(d=_,h=P)}var c=!1,d,h,p=n===void 0?null:n;return[function(){return u(e())},p===null?void 0:function(){return u(p())}]},[e,n,r,i]);var a=Hb(t,s[0],s[1]);return qb(function(){o.hasValue=!0,o.value=a},[a]),Gb(a),a};lI.exports=uI;var Qb=lI.exports,pn="default"in gp?ef:gp,h0=Symbol.for("react-redux-context"),p0=typeof globalThis<"u"?globalThis:{};function Yb(){if(!pn.createContext)return{};const t=p0[h0]??(p0[h0]=new Map);let e=t.get(pn.createContext);return e||(e=pn.createContext(null),t.set(pn.createContext,e)),e}var Fi=Yb(),Xb=()=>{throw new Error("uSES not initialized!")};function ty(t=Fi){return function(){return pn.useContext(t)}}var cI=ty(),dI=Xb,Jb=t=>{dI=t},Zb=(t,e)=>t===e;function ex(t=Fi){const e=t===Fi?cI:ty(t),n=(r,i={})=>{const{equalityFn:s=Zb,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:d,identityFunctionCheck:h}=e();pn.useRef(!0);const p=pn.useCallback({[r.name](S){return r(S)}}[r.name],[r,d,o.stabilityCheck]),_=dI(u.addNestedSub,a.getState,c||a.getState,p,s);return pn.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var ha=ex();function tx(t){t()}function nx(){let t=null,e=null;return{clear(){t=null,e=null},notify(){tx(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var m0={notify(){},get:()=>[]};function rx(t,e){let n,r=m0,i=0,s=!1;function o(P){d();const C=r.subscribe(P);let T=!1;return()=>{T||(T=!0,C(),h())}}function a(){r.notify()}function u(){S.onStateChange&&S.onStateChange()}function c(){return s}function d(){i++,n||(n=t.subscribe(u),r=nx())}function h(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=m0)}function p(){s||(s=!0,d())}function _(){s&&(s=!1,h())}const S={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:p,tryUnsubscribe:_,getListeners:()=>r};return S}var ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sx=typeof navigator<"u"&&navigator.product==="ReactNative",ox=ix||sx?pn.useLayoutEffect:pn.useEffect;function ax({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=pn.useMemo(()=>{const c=rx(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=pn.useMemo(()=>t.getState(),[t]);ox(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Fi;return pn.createElement(u.Provider,{value:o},n)}var lx=ax;function fI(t=Fi){const e=t===Fi?cI:ty(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var ux=fI();function cx(t=Fi){const e=t===Fi?ux:fI(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var dx=cx();Jb(Qb.useSyncExternalStoreWithSelector);function At(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var fx=typeof Symbol=="function"&&Symbol.observable||"@@observable",g0=fx,Bh=()=>Math.random().toString(36).substring(7).split("").join("."),hx={INIT:`@@redux/INIT${Bh()}`,REPLACE:`@@redux/REPLACE${Bh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Bh()}`},Td=hx;function ny(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function hI(t,e,n){if(typeof t!="function")throw new Error(At(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(At(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(At(1));return n(hI)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((C,T)=>{o.set(T,C)}))}function d(){if(u)throw new Error(At(3));return i}function h(C){if(typeof C!="function")throw new Error(At(4));if(u)throw new Error(At(5));let T=!0;c();const y=a++;return o.set(y,C),function(){if(T){if(u)throw new Error(At(6));T=!1,c(),o.delete(y),s=null}}}function p(C){if(!ny(C))throw new Error(At(7));if(typeof C.type>"u")throw new Error(At(8));if(typeof C.type!="string")throw new Error(At(17));if(u)throw new Error(At(9));try{u=!0,i=r(i,C)}finally{u=!1}return(s=o).forEach(y=>{y()}),C}function _(C){if(typeof C!="function")throw new Error(At(10));r=C,p({type:Td.REPLACE})}function S(){const C=h;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(At(11));function y(){const N=T;N.next&&N.next(d())}return y(),{unsubscribe:C(y)}},[g0](){return this}}}return p({type:Td.INIT}),{dispatch:p,subscribe:h,getState:d,replaceReducer:_,[g0]:S}}function px(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Td.INIT})>"u")throw new Error(At(12));if(typeof n(void 0,{type:Td.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(At(13))})}function mx(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{px(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const h=r[d],p=n[h],_=o[h],S=p(_,a);if(typeof S>"u")throw a&&a.type,new Error(At(14));c[h]=S,u=u||S!==_}return u=u||r.length!==Object.keys(o).length,u?c:o}}function Id(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function gx(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(At(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=Id(...a)(i.dispatch),{...i,dispatch:s}}}function yx(t){return ny(t)&&"type"in t&&typeof t.type=="string"}var pI=Symbol.for("immer-nothing"),y0=Symbol.for("immer-draftable"),In=Symbol.for("immer-state");function Yn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Jo=Object.getPrototypeOf;function Ds(t){return!!t&&!!t[In]}function Gr(t){var e;return t?mI(t)||Array.isArray(t)||!!t[y0]||!!((e=t.constructor)!=null&&e[y0])||vf(t)||_f(t):!1}var vx=Object.prototype.constructor.toString();function mI(t){if(!t||typeof t!="object")return!1;const e=Jo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===vx}function Sd(t,e){yf(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function yf(t){const e=t[In];return e?e.type_:Array.isArray(t)?1:vf(t)?2:_f(t)?3:0}function cm(t,e){return yf(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function gI(t,e,n){const r=yf(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function _x(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function vf(t){return t instanceof Map}function _f(t){return t instanceof Set}function us(t){return t.copy_||t.base_}function dm(t,e){if(vf(t))return new Map(t);if(_f(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=mI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[In];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(Jo(t),r)}else{const r=Jo(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function ry(t,e=!1){return wf(t)||Ds(t)||!Gr(t)||(yf(t)>1&&(t.set=t.add=t.clear=t.delete=wx),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>ry(r,!0))),t}function wx(){Yn(2)}function wf(t){return Object.isFrozen(t)}var Ex={};function Os(t){const e=Ex[t];return e||Yn(0,t),e}var Jl;function yI(){return Jl}function Tx(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function v0(t,e){e&&(Os("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function fm(t){hm(t),t.drafts_.forEach(Ix),t.drafts_=null}function hm(t){t===Jl&&(Jl=t.parent_)}function _0(t){return Jl=Tx(Jl,t)}function Ix(t){const e=t[In];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function w0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[In].modified_&&(fm(e),Yn(4)),Gr(t)&&(t=Ad(e,t),e.parent_||Rd(e,t)),e.patches_&&Os("Patches").generateReplacementPatches_(n[In].base_,t,e.patches_,e.inversePatches_)):t=Ad(e,n,[]),fm(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==pI?t:void 0}function Ad(t,e,n){if(wf(e))return e;const r=e[In];if(!r)return Sd(e,(i,s)=>E0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Rd(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Sd(s,(a,u)=>E0(t,r,i,a,u,n,o)),Rd(t,i,!1),n&&t.patches_&&Os("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function E0(t,e,n,r,i,s,o){if(Ds(i)){const a=s&&e&&e.type_!==3&&!cm(e.assigned_,r)?s.concat(r):void 0,u=Ad(t,i,a);if(gI(n,r,u),Ds(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Gr(i)&&!wf(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ad(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Rd(t,i)}}function Rd(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&ry(e,n)}function Sx(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:yI(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=iy;n&&(i=[r],s=Zl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var iy={get(t,e){if(e===In)return t;const n=us(t);if(!cm(n,e))return Ax(t,n,e);const r=n[e];return t.finalized_||!Gr(r)?r:r===$h(t.base_,e)?(Hh(t),t.copy_[e]=mm(r,t)):r},has(t,e){return e in us(t)},ownKeys(t){return Reflect.ownKeys(us(t))},set(t,e,n){const r=vI(us(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=$h(us(t),e),s=i==null?void 0:i[In];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(_x(n,i)&&(n!==void 0||cm(t.base_,e)))return!0;Hh(t),pm(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return $h(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Hh(t),pm(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=us(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Yn(11)},getPrototypeOf(t){return Jo(t.base_)},setPrototypeOf(){Yn(12)}},Zl={};Sd(iy,(t,e)=>{Zl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Zl.deleteProperty=function(t,e){return Zl.set.call(this,t,e,void 0)};Zl.set=function(t,e,n){return iy.set.call(this,t[0],e,n,t[0])};function $h(t,e){const n=t[In];return(n?us(n):t)[e]}function Ax(t,e,n){var i;const r=vI(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function vI(t,e){if(!(e in t))return;let n=Jo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Jo(n)}}function pm(t){t.modified_||(t.modified_=!0,t.parent_&&pm(t.parent_))}function Hh(t){t.copy_||(t.copy_=dm(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Rx=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,d=>n.call(this,d,...c))}}typeof n!="function"&&Yn(6),r!==void 0&&typeof r!="function"&&Yn(7);let i;if(Gr(e)){const s=_0(this),o=mm(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?fm(s):hm(s)}return v0(s,r),w0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===pI&&(i=void 0),this.autoFreeze_&&ry(i,!0),r){const s=[],o=[];Os("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Yn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Gr(t)||Yn(8),Ds(t)&&(t=Px(t));const e=_0(this),n=mm(t,void 0);return n[In].isManual_=!0,hm(e),n}finishDraft(t,e){const n=t&&t[In];(!n||!n.isManual_)&&Yn(9);const{scope_:r}=n;return v0(r,e),w0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Os("Patches").applyPatches_;return Ds(t)?r(t,e):this.produce(t,i=>r(i,e))}};function mm(t,e){const n=vf(t)?Os("MapSet").proxyMap_(t,e):_f(t)?Os("MapSet").proxySet_(t,e):Sx(t,e);return(e?e.scope_:yI()).drafts_.push(n),n}function Px(t){return Ds(t)||Yn(10,t),_I(t)}function _I(t){if(!Gr(t)||wf(t))return t;const e=t[In];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=dm(t,e.scope_.immer_.useStrictShallowCopy_)}else n=dm(t,!0);return Sd(n,(r,i)=>{gI(n,r,_I(i))}),e&&(e.finalized_=!1),n}var Sn=new Rx,wI=Sn.produce;Sn.produceWithPatches.bind(Sn);Sn.setAutoFreeze.bind(Sn);Sn.setUseStrictShallowCopy.bind(Sn);Sn.applyPatches.bind(Sn);Sn.createDraft.bind(Sn);Sn.finishDraft.bind(Sn);function EI(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var Cx=EI(),kx=EI,bx=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Id:Id.apply(null,arguments)},xx=t=>t&&typeof t.match=="function";function Tl(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(vr(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>yx(r)&&r.type===t,n}var TI=class ol extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,ol.prototype)}static get[Symbol.species](){return ol}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new ol(...e[0].concat(this)):new ol(...e.concat(this))}};function T0(t){return Gr(t)?wI(t,()=>{}):t}function I0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(vr(10));const r=n.insert(e,t);return t.set(e,r),r}function Nx(t){return typeof t=="boolean"}var Dx=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new TI;return n&&(Nx(n)?o.push(Cx):o.push(kx(n.extraArgument))),o},Ox="RTK_autoBatch",II=t=>e=>{setTimeout(e,t)},Lx=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:II(10),Mx=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?Lx:t.type==="callback"?t.queueNotification:II(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const h=()=>i&&d(),p=r.subscribe(h);return a.add(d),()=>{p(),a.delete(d)}},dispatch(d){var h;try{return i=!((h=d==null?void 0:d.meta)!=null&&h[Ox]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(d)}finally{i=!0}}})},Vx=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new TI(t);return r&&i.push(Mx(typeof r=="object"?r:void 0)),i};function Fx(t){const e=Dx(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(ny(n))a=mx(n);else throw new Error(vr(1));let u;typeof r=="function"?u=r(e):u=e();let c=Id;i&&(c=bx({trace:!1,...typeof i=="object"&&i}));const d=gx(...u),h=Vx(d);let p=typeof o=="function"?o(h):h();const _=c(...p);return hI(a,s,_)}function SI(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(vr(28));if(a in e)throw new Error(vr(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function Ux(t){return typeof t=="function"}function jx(t,e){let[n,r,i]=SI(e),s;if(Ux(t))s=()=>T0(t());else{const a=T0(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,h)=>{if(h)if(Ds(d)){const _=h(d,u);return _===void 0?d:_}else{if(Gr(d))return wI(d,p=>h(p,u));{const p=h(d,u);if(p===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}}return d},a)}return o.getInitialState=s,o}var zx=(t,e)=>xx(t)?t.match(e):t(e);function Bx(...t){return e=>t.some(n=>zx(n,e))}var $x="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Hx=(t=21)=>{let e="",n=t;for(;n--;)e+=$x[Math.random()*64|0];return e},Wx=["name","message","stack","code"],Wh=class{constructor(t,e){mh(this,"_type");this.payload=t,this.meta=e}},S0=class{constructor(t,e){mh(this,"_type");this.payload=t,this.meta=e}},qx=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of Wx)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Eu=(()=>{function t(e,n,r){const i=Tl(e+"/fulfilled",(u,c,d,h)=>({payload:u,meta:{...h||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),s=Tl(e+"/pending",(u,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:u,requestStatus:"pending"}})),o=Tl(e+"/rejected",(u,c,d,h,p)=>({payload:h,error:(r&&r.serializeError||qx)(u||"Rejected"),meta:{...p||{},arg:d,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"}}));function a(u){return(c,d,h)=>{const p=r!=null&&r.idGenerator?r.idGenerator(u):Hx(),_=new AbortController;let S,P;function C(y){P=y,_.abort()}const T=async function(){var N,U;let y;try{let k=(N=r==null?void 0:r.condition)==null?void 0:N.call(r,u,{getState:d,extra:h});if(Gx(k)&&(k=await k),k===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const E=new Promise((g,w)=>{S=()=>{w({name:"AbortError",message:P||"Aborted"})},_.signal.addEventListener("abort",S)});c(s(p,u,(U=r==null?void 0:r.getPendingMeta)==null?void 0:U.call(r,{requestId:p,arg:u},{getState:d,extra:h}))),y=await Promise.race([E,Promise.resolve(n(u,{dispatch:c,getState:d,extra:h,requestId:p,signal:_.signal,abort:C,rejectWithValue:(g,w)=>new Wh(g,w),fulfillWithValue:(g,w)=>new S0(g,w)})).then(g=>{if(g instanceof Wh)throw g;return g instanceof S0?i(g.payload,p,u,g.meta):i(g,p,u)})])}catch(k){y=k instanceof Wh?o(null,p,u,k.payload,k.meta):o(k,p,u)}finally{S&&_.signal.removeEventListener("abort",S)}return r&&!r.dispatchConditionRejection&&o.match(y)&&y.meta.condition||c(y),y}();return Object.assign(T,{abort:C,requestId:p,arg:u,unwrap(){return T.then(Kx)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:Bx(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function Kx(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Gx(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Qx=Symbol.for("rtk-slice-createasyncthunk");function Yx(t,e){return`${t}/${e}`}function Xx({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[Qx];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(vr(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(Zx()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(I,N){const U=typeof I=="string"?I:I.type;if(!U)throw new Error(vr(12));if(U in c.sliceCaseReducersByType)throw new Error(vr(13));return c.sliceCaseReducersByType[U]=N,d},addMatcher(I,N){return c.sliceMatchers.push({matcher:I,reducer:N}),d},exposeAction(I,N){return c.actionCreators[I]=N,d},exposeCaseReducer(I,N){return c.sliceCaseReducersByName[I]=N,d}};u.forEach(I=>{const N=a[I],U={reducerName:I,type:Yx(s,I),createNotation:typeof i.reducers=="function"};t2(N)?r2(U,N,d,e):e2(U,N,d)});function h(){const[I={},N=[],U=void 0]=typeof i.extraReducers=="function"?SI(i.extraReducers):[i.extraReducers],k={...I,...c.sliceCaseReducersByType};return jx(i.initialState,E=>{for(let g in k)E.addCase(g,k[g]);for(let g of c.sliceMatchers)E.addMatcher(g.matcher,g.reducer);for(let g of N)E.addMatcher(g.matcher,g.reducer);U&&E.addDefaultCase(U)})}const p=I=>I,_=new Map;let S;function P(I,N){return S||(S=h()),S(I,N)}function C(){return S||(S=h()),S.getInitialState()}function T(I,N=!1){function U(E){let g=E[I];return typeof g>"u"&&N&&(g=C()),g}function k(E=p){const g=I0(_,N,{insert:()=>new WeakMap});return I0(g,E,{insert:()=>{const w={};for(const[A,b]of Object.entries(i.selectors??{}))w[A]=Jx(b,E,C,N);return w}})}return{reducerPath:I,getSelectors:k,get selectors(){return k(U)},selectSlice:U}}const y={name:s,reducer:P,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:C,...T(o),injectInto(I,{reducerPath:N,...U}={}){const k=N??o;return I.inject({reducerPath:k,reducer:P},U),{...y,...T(k,!0)}}};return y}}function Jx(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var AI=Xx();function Zx(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function e2({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!n2(r))throw new Error(vr(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Tl(t,o):Tl(t))}function t2(t){return t._reducerDefinitionType==="asyncThunk"}function n2(t){return t._reducerDefinitionType==="reducerWithPrepare"}function r2({type:t,reducerName:e},n,r,i){if(!i)throw new Error(vr(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:d}=n,h=i(t,s,d);r.exposeAction(e,h),o&&r.addCase(h.fulfilled,o),a&&r.addCase(h.pending,a),u&&r.addCase(h.rejected,u),c&&r.addMatcher(h.settled,c),r.exposeCaseReducer(e,{fulfilled:o||gc,pending:a||gc,rejected:u||gc,settled:c||gc})}function gc(){}function vr(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var A0={};/**
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
 */const RI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},i2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},PI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[d],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new s2;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const S=c<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o2=function(t){const e=RI(t);return PI.encodeByteArray(e,!0)},Pd=function(t){return o2(t).replace(/\./g,"")},CI=function(t){try{return PI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const l2=()=>a2().__FIREBASE_DEFAULTS__,u2=()=>{if(typeof process>"u"||typeof A0>"u")return;const t=A0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CI(t[1]);return e&&JSON.parse(e)},Ef=()=>{try{return l2()||u2()||c2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kI=t=>{var e,n;return(n=(e=Ef())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bI=t=>{const e=kI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xI=()=>{var t;return(t=Ef())===null||t===void 0?void 0:t.config},NI=t=>{var e;return(e=Ef())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let d2=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function DI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pd(JSON.stringify(n)),Pd(JSON.stringify(o)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function h2(){var t;const e=(t=Ef())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function p2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m2(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g2(){return!h2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LI(){try{return typeof indexedDB=="object"}catch{return!1}}function MI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function y2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const v2="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=v2,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,r)}}function _2(t,e){return t.replace(w2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const w2=/\{\$([^}]+)}/g;function E2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(R0(s)&&R0(o)){if(!eu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R0(t){return t!==null&&typeof t=="object"}/**
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
 */function Tu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function T2(t,e){const n=new I2(t,e);return n.subscribe.bind(n)}class I2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qh),i.error===void 0&&(i.error=qh),i.complete===void 0&&(i.complete=qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qh(){}/**
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
 */const A2=1e3,R2=2,P2=4*60*60*1e3,C2=.5;function P0(t,e=A2,n=R2){const r=e*Math.pow(n,t),i=Math.round(C2*r*(Math.random()-.5)*2);return Math.min(P2,r+i)}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class k2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new d2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x2(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b2(t){return t===cs?void 0:t}function x2(t){return t.instantiationMode==="EAGER"}/**
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
 */class N2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const D2={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},O2=ye.INFO,L2={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},M2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=L2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=O2,this._logHandler=M2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const V2=(t,e)=>e.some(n=>t instanceof n);let C0,k0;function F2(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U2(){return k0||(k0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VI=new WeakMap,gm=new WeakMap,FI=new WeakMap,Kh=new WeakMap,sy=new WeakMap;function j2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Di(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VI.set(n,t)}).catch(()=>{}),sy.set(e,t),e}function z2(t){if(gm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gm.set(t,e)}let ym={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Di(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B2(t){ym=t(ym)}function $2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gh(this),e,...n);return FI.set(r,e.sort?e.sort():[e]),Di(r)}:U2().includes(t)?function(...e){return t.apply(Gh(this),e),Di(VI.get(this))}:function(...e){return Di(t.apply(Gh(this),e))}}function H2(t){return typeof t=="function"?$2(t):(t instanceof IDBTransaction&&z2(t),V2(t,F2())?new Proxy(t,ym):t)}function Di(t){if(t instanceof IDBRequest)return j2(t);if(Kh.has(t))return Kh.get(t);const e=H2(t);return e!==t&&(Kh.set(t,e),sy.set(e,t)),e}const Gh=t=>sy.get(t);function UI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Di(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Di(o.result),u.oldVersion,u.newVersion,Di(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const W2=["get","getKey","getAll","getAllKeys","count"],q2=["put","add","delete","clear"],Qh=new Map;function b0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=q2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Qh.set(e,s),s}B2(t=>({...t,get:(e,n,r)=>b0(e,n)||t.get(e,n,r),has:(e,n)=>!!b0(e,n)||t.has(e,n)}));/**
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
 */class K2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vm="@firebase/app",x0="0.10.7";/**
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
 */const Ls=new Tf("@firebase/app"),Q2="@firebase/app-compat",Y2="@firebase/analytics-compat",X2="@firebase/analytics",J2="@firebase/app-check-compat",Z2="@firebase/app-check",eN="@firebase/auth",tN="@firebase/auth-compat",nN="@firebase/database",rN="@firebase/database-compat",iN="@firebase/functions",sN="@firebase/functions-compat",oN="@firebase/installations",aN="@firebase/installations-compat",lN="@firebase/messaging",uN="@firebase/messaging-compat",cN="@firebase/performance",dN="@firebase/performance-compat",fN="@firebase/remote-config",hN="@firebase/remote-config-compat",pN="@firebase/storage",mN="@firebase/storage-compat",gN="@firebase/firestore",yN="@firebase/vertexai-preview",vN="@firebase/firestore-compat",_N="firebase",wN="10.12.4";/**
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
 */const _m="[DEFAULT]",EN={[vm]:"fire-core",[Q2]:"fire-core-compat",[X2]:"fire-analytics",[Y2]:"fire-analytics-compat",[Z2]:"fire-app-check",[J2]:"fire-app-check-compat",[eN]:"fire-auth",[tN]:"fire-auth-compat",[nN]:"fire-rtdb",[rN]:"fire-rtdb-compat",[iN]:"fire-fn",[sN]:"fire-fn-compat",[oN]:"fire-iid",[aN]:"fire-iid-compat",[lN]:"fire-fcm",[uN]:"fire-fcm-compat",[cN]:"fire-perf",[dN]:"fire-perf-compat",[fN]:"fire-rc",[hN]:"fire-rc-compat",[pN]:"fire-gcs",[mN]:"fire-gcs-compat",[gN]:"fire-fst",[vN]:"fire-fst-compat",[yN]:"fire-vertex","fire-js":"fire-js",[_N]:"fire-js-all"};/**
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
 */const Cd=new Map,TN=new Map,wm=new Map;function N0(t,e){try{t.container.addComponent(e)}catch(n){Ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(wm.has(e))return Ls.debug(`There were multiple attempts to register component ${e}.`),!1;wm.set(e,t);for(const n of Cd.values())N0(n,t);for(const n of TN.values())N0(n,t);return!0}function Xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fr(t){return t.settings!==void 0}/**
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
 */const IN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oi=new Qs("app","Firebase",IN);/**
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
 */class SN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=wN;function jI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_m,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Oi.create("bad-app-name",{appName:String(i)});if(n||(n=xI()),!n)throw Oi.create("no-options");const s=Cd.get(i);if(s){if(eu(n,s.options)&&eu(r,s.config))return s;throw Oi.create("duplicate-app",{appName:i})}const o=new N2(i);for(const u of wm.values())o.addComponent(u);const a=new SN(n,r,o);return Cd.set(i,a),a}function If(t=_m){const e=Cd.get(t);if(!e&&t===_m&&xI())return jI();if(!e)throw Oi.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=EN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ls.warn(a.join(" "));return}nr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AN="firebase-heartbeat-database",RN=1,tu="firebase-heartbeat-store";let Yh=null;function zI(){return Yh||(Yh=UI(AN,RN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Oi.create("idb-open",{originalErrorMessage:t.message})})),Yh}async function PN(t){try{const n=(await zI()).transaction(tu),r=await n.objectStore(tu).get(BI(t));return await n.done,r}catch(e){if(e instanceof jn)Ls.warn(e.message);else{const n=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ls.warn(n.message)}}}async function D0(t,e){try{const r=(await zI()).transaction(tu,"readwrite");await r.objectStore(tu).put(e,BI(t)),await r.done}catch(n){if(n instanceof jn)Ls.warn(n.message);else{const r=Oi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ls.warn(r.message)}}}function BI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CN=1024,kN=30*24*60*60*1e3;class bN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=O0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=O0(),{heartbeatsToSend:r,unsentEntries:i}=xN(this._heartbeatsCache.heartbeats),s=Pd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function O0(){return new Date().toISOString().substring(0,10)}function xN(t,e=CN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LI()?MI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L0(t){return Pd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DN(t){nr(new Fn("platform-logger",e=>new K2(e),"PRIVATE")),nr(new Fn("heartbeat",e=>new bN(e),"PRIVATE")),an(vm,x0,t),an(vm,x0,"esm2017"),an("fire-js","")}DN("");var M0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,$I;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function w(){}w.prototype=g.prototype,E.D=g.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(A,b,O){for(var R=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)R[Re-2]=arguments[Re];return g.prototype[b].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,w){w||(w=0);var A=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)A[b]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=E.g[0],w=E.g[1],b=E.g[2];var O=E.g[3],R=g+(O^w&(b^O))+A[0]+3614090360&4294967295;g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[1]+3905402710&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[2]+606105819&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[3]+3250441966&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(O^w&(b^O))+A[4]+4118548399&4294967295,g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[5]+1200080426&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[6]+2821735955&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[7]+4249261313&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(O^w&(b^O))+A[8]+1770035416&4294967295,g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[9]+2336552879&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[10]+4294925233&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[11]+2304563134&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(O^w&(b^O))+A[12]+1804603682&4294967295,g=w+(R<<7&4294967295|R>>>25),R=O+(b^g&(w^b))+A[13]+4254626195&4294967295,O=g+(R<<12&4294967295|R>>>20),R=b+(w^O&(g^w))+A[14]+2792965006&4294967295,b=O+(R<<17&4294967295|R>>>15),R=w+(g^b&(O^g))+A[15]+1236535329&4294967295,w=b+(R<<22&4294967295|R>>>10),R=g+(b^O&(w^b))+A[1]+4129170786&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[6]+3225465664&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[11]+643717713&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[0]+3921069994&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(b^O&(w^b))+A[5]+3593408605&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[10]+38016083&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[15]+3634488961&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[4]+3889429448&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(b^O&(w^b))+A[9]+568446438&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[14]+3275163606&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[3]+4107603335&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[8]+1163531501&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(b^O&(w^b))+A[13]+2850285829&4294967295,g=w+(R<<5&4294967295|R>>>27),R=O+(w^b&(g^w))+A[2]+4243563512&4294967295,O=g+(R<<9&4294967295|R>>>23),R=b+(g^w&(O^g))+A[7]+1735328473&4294967295,b=O+(R<<14&4294967295|R>>>18),R=w+(O^g&(b^O))+A[12]+2368359562&4294967295,w=b+(R<<20&4294967295|R>>>12),R=g+(w^b^O)+A[5]+4294588738&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[8]+2272392833&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[11]+1839030562&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[14]+4259657740&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(w^b^O)+A[1]+2763975236&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[4]+1272893353&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[7]+4139469664&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[10]+3200236656&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(w^b^O)+A[13]+681279174&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[0]+3936430074&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[3]+3572445317&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[6]+76029189&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(w^b^O)+A[9]+3654602809&4294967295,g=w+(R<<4&4294967295|R>>>28),R=O+(g^w^b)+A[12]+3873151461&4294967295,O=g+(R<<11&4294967295|R>>>21),R=b+(O^g^w)+A[15]+530742520&4294967295,b=O+(R<<16&4294967295|R>>>16),R=w+(b^O^g)+A[2]+3299628645&4294967295,w=b+(R<<23&4294967295|R>>>9),R=g+(b^(w|~O))+A[0]+4096336452&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[7]+1126891415&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[14]+2878612391&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[5]+4237533241&4294967295,w=b+(R<<21&4294967295|R>>>11),R=g+(b^(w|~O))+A[12]+1700485571&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[3]+2399980690&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[10]+4293915773&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[1]+2240044497&4294967295,w=b+(R<<21&4294967295|R>>>11),R=g+(b^(w|~O))+A[8]+1873313359&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[15]+4264355552&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[6]+2734768916&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[13]+1309151649&4294967295,w=b+(R<<21&4294967295|R>>>11),R=g+(b^(w|~O))+A[4]+4149444226&4294967295,g=w+(R<<6&4294967295|R>>>26),R=O+(w^(g|~b))+A[11]+3174756917&4294967295,O=g+(R<<10&4294967295|R>>>22),R=b+(g^(O|~w))+A[2]+718787259&4294967295,b=O+(R<<15&4294967295|R>>>17),R=w+(O^(b|~g))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+O&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var w=g-this.blockSize,A=this.B,b=this.h,O=0;O<g;){if(b==0)for(;O<=w;)i(this,E,O),O+=this.blockSize;if(typeof E=="string"){for(;O<g;)if(A[b++]=E.charCodeAt(O++),b==this.blockSize){i(this,A),b=0;break}}else for(;O<g;)if(A[b++]=E[O++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var w=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=w&255,w/=256;for(this.u(E),E=Array(16),g=w=0;4>g;++g)for(var A=0;32>A;A+=8)E[w++]=this.g[g]>>>A&255;return E};function s(E,g){var w=a;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=g(E)}function o(E,g){this.h=g;for(var w=[],A=!0,b=E.length-1;0<=b;b--){var O=E[b]|0;A&&O==g||(w[b]=O,A=!1)}this.g=w}var a={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return h;if(0>E)return C(c(-E));for(var g=[],w=1,A=0;E>=w;A++)g[A]=E/w|0,w*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return C(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),A=h,b=0;b<E.length;b+=8){var O=Math.min(8,E.length-b),R=parseInt(E.substring(b,b+O),g);8>O?(O=c(Math.pow(g,O)),A=A.j(O).add(c(R))):(A=A.j(w),A=A.add(c(R)))}return A}var h=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var E=0,g=1,w=0;w<this.g.length;w++){var A=this.i(w);E+=(0<=A?A:4294967296+A)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(P(this))return"-"+C(this).toString(E);for(var g=c(Math.pow(E,6)),w=this,A="";;){var b=N(w,g).g;w=T(w,b.j(g));var O=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=b,S(w))return O+A;for(;6>O.length;)O="0"+O;A=O+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=T(this,E),P(E)?-1:S(E)?0:1};function C(E){for(var g=E.g.length,w=[],A=0;A<g;A++)w[A]=~E.g[A];return new o(w,~E.h).add(p)}t.abs=function(){return P(this)?C(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0,b=0;b<=g;b++){var O=A+(this.i(b)&65535)+(E.i(b)&65535),R=(O>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);A=R>>>16,O&=65535,R&=65535,w[b]=R<<16|O}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(E,g){return E.add(C(g))}t.j=function(E){if(S(this)||S(E))return h;if(P(this))return P(E)?C(this).j(C(E)):C(C(this).j(E));if(P(E))return C(this.j(C(E)));if(0>this.l(_)&&0>E.l(_))return c(this.m()*E.m());for(var g=this.g.length+E.g.length,w=[],A=0;A<2*g;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<E.g.length;b++){var O=this.i(A)>>>16,R=this.i(A)&65535,Re=E.i(b)>>>16,en=E.i(b)&65535;w[2*A+2*b]+=R*en,y(w,2*A+2*b),w[2*A+2*b+1]+=O*en,y(w,2*A+2*b+1),w[2*A+2*b+1]+=R*Re,y(w,2*A+2*b+1),w[2*A+2*b+2]+=O*Re,y(w,2*A+2*b+2)}for(A=0;A<g;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=g;A<2*g;A++)w[A]=0;return new o(w,0)};function y(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function I(E,g){this.g=E,this.h=g}function N(E,g){if(S(g))throw Error("division by zero");if(S(E))return new I(h,h);if(P(E))return g=N(C(E),g),new I(C(g.g),C(g.h));if(P(g))return g=N(E,C(g)),new I(C(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=p,A=g;0>=A.l(E);)w=U(w),A=U(A);var b=k(w,1),O=k(A,1);for(A=k(A,2),w=k(w,2);!S(A);){var R=O.add(A);0>=R.l(E)&&(b=b.add(w),O=R),A=k(A,1),w=k(w,1)}return g=T(E,b.j(g)),new I(b,g)}for(b=h;0<=E.l(g);){for(w=Math.max(1,Math.floor(E.m()/g.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),O=c(w),R=O.j(g);P(R)||0<R.l(E);)w-=A,O=c(w),R=O.j(g);S(O)&&(O=p),b=b.add(O),E=T(E,R)}return new I(b,E)}t.A=function(E){return N(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)&E.i(A);return new o(w,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)|E.i(A);return new o(w,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)^E.i(A);return new o(w,this.h^E.h)};function U(E){for(var g=E.g.length+1,w=[],A=0;A<g;A++)w[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(w,E.h)}function k(E,g){var w=g>>5;g%=32;for(var A=E.g.length-w,b=[],O=0;O<A;O++)b[O]=0<g?E.i(O+w)>>>g|E.i(O+w+1)<<32-g:E.i(O+w);return new o(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$I=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Is=o}).apply(typeof M0<"u"?M0:typeof self<"u"?self:typeof window<"u"?window:{});var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HI,WI,al,qI,jc,Em,KI,GI,QI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yc=="object"&&yc];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var L=l[v];if(!(L in m))break e;m=m[L]}l=l[l.length-1],v=m[l],f=f(v),f!=v&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,v=!1,L={next:function(){if(!v&&m<l.length){var F=m++;return{value:f(F,l[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,m){return l.call.apply(l.bind,arguments)}function h(l,f,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,p.apply(null,arguments)}function _(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function S(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,L,F){for(var q=Array(arguments.length-2),De=2;De<arguments.length;De++)q[De-2]=arguments[De];return f.prototype[L].apply(v,q)}}function P(l){const f=l.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=l[v];return m}return[]}function C(l,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(u(v)){const L=l.length||0,F=v.length||0;l.length=L+F;for(let q=0;q<F;q++)l[L+q]=v[q]}else l.push(v)}}class T{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var U=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function k(l,f,m){for(const v in l)f.call(m,l[v],v,l)}function E(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function g(l){const f={};for(const m in l)f[m]=l[m];return f}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)l[m]=v[m];for(let F=0;F<w.length;F++)m=w[F],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function b(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function O(l){a.setTimeout(()=>{throw l},0)}function R(){var l=re;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Re{constructor(){this.h=this.g=null}add(f,m){const v=en.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var en=new T(()=>new ir,l=>l.reset());class ir{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,G=!1,re=new Re,oe=()=>{const l=a.Promise.resolve(void 0);Pe=()=>{l.then(Te)}};var Te=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){O(m)}var f=en;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}G=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var ct=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function Et(l,f){if(Ne.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(U){e:{try{N(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Tt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Et.aa.h.call(this)}}S(Et,Ne);var Tt={2:"touch",3:"pen",4:"mouse"};Et.prototype.h=function(){Et.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var zn="closure_listenable_"+(1e6*Math.random()|0),Ia=0;function sh(l,f,m,v,L){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=L,this.key=++Ia,this.da=this.fa=!1}function eo(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function to(l){this.src=l,this.g={},this.h=0}to.prototype.add=function(l,f,m,v,L){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var q=sr(l,f,v,L);return-1<q?(f=l[q],m||(f.fa=!1)):(f=new sh(f,this.src,F,!!v,L),f.fa=m,l.push(f)),f};function dt(l,f){var m=f.type;if(m in l.g){var v=l.g[m],L=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(eo(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function sr(l,f,m,v){for(var L=0;L<l.length;++L){var F=l[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return L}return-1}var no="closure_lm_"+(1e6*Math.random()|0),Sa={};function or(l,f,m,v,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)or(l,f[F],m,v,L);return null}return m=ri(m),l&&l[zn]?l.K(f,m,c(v)?!!v.capture:!!v,L):oh(l,f,m,!1,v,L)}function oh(l,f,m,v,L,F){if(!f)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,De=Pa(l);if(De||(l[no]=De=new to(l)),m=De.add(f,m,v,q,F),m.proxy)return m;if(v=ah(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)ct||(L=q),L===void 0&&(L=!1),l.addEventListener(f.toString(),v,L);else if(l.attachEvent)l.attachEvent(Uu(f.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ah(){function l(m){return f.call(l.src,l.listener,m)}const f=lh;return l}function Aa(l,f,m,v,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Aa(l,f[F],m,v,L);else v=c(v)?!!v.capture:!!v,m=ri(m),l&&l[zn]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],m=sr(F,m,v,L),-1<m&&(eo(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=Pa(l))&&(f=l.g[f.toString()],l=-1,f&&(l=sr(f,m,v,L)),(m=-1<l?f[l]:null)&&Ra(m))}function Ra(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[zn])dt(f.i,l);else{var m=l.type,v=l.proxy;f.removeEventListener?f.removeEventListener(m,v,l.capture):f.detachEvent?f.detachEvent(Uu(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=Pa(f))?(dt(m,l),m.h==0&&(m.src=null,f[no]=null)):eo(l)}}}function Uu(l){return l in Sa?Sa[l]:Sa[l]="on"+l}function lh(l,f){if(l.da)l=!0;else{f=new Et(f,this);var m=l.listener,v=l.ha||l.src;l.fa&&Ra(l),l=m.call(v,f)}return l}function Pa(l){return l=l[no],l instanceof to?l:null}var Rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ri(l){return typeof l=="function"?l:(l[Rr]||(l[Rr]=function(f){return l.handleEvent(f)}),l[Rr])}function ft(){ve.call(this),this.i=new to(this),this.M=this,this.F=null}S(ft,ve),ft.prototype[zn]=!0,ft.prototype.removeEventListener=function(l,f,m,v){Aa(this,l,f,m,v)};function ht(l,f){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=f.type||f,typeof f=="string")f=new Ne(f,l);else if(f instanceof Ne)f.target=f.target||l;else{var L=f;f=new Ne(v,l),A(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var q=f.g=m[F];L=ln(q,v,!0,f)&&L}if(q=f.g=l,L=ln(q,v,!0,f)&&L,L=ln(q,v,!1,f)&&L,m)for(F=0;F<m.length;F++)q=f.g=m[F],L=ln(q,v,!1,f)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],v=0;v<m.length;v++)eo(m[v]);delete l.g[f],l.h--}}this.F=null},ft.prototype.K=function(l,f,m,v){return this.i.add(String(l),f,!1,m,v)},ft.prototype.L=function(l,f,m,v){return this.i.add(String(l),f,!0,m,v)};function ln(l,f,m,v){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var q=f[F];if(q&&!q.da&&q.capture==m){var De=q.listener,St=q.ha||q.src;q.fa&&dt(l.i,q),L=De.call(St,v)!==!1&&L}}return L&&!v.defaultPrevented}function Cn(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Ca(l){l.g=Cn(()=>{l.g=null,l.i&&(l.i=!1,Ca(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ro extends ve{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ca(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(l){ve.call(this),this.h=l,this.g={}}S(ts,ve);var Bn=[];function ka(l){k(l.g,function(f,m){this.g.hasOwnProperty(m)&&Ra(f)},l),l.g={}}ts.prototype.N=function(){ts.aa.N.call(this),ka(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var io=a.JSON.stringify,ju=a.JSON.parse,uh=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function so(){}so.prototype.h=null;function ns(l){return l.h||(l.h=l.i())}function ba(){}var Pr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ii(){Ne.call(this,"d")}S(ii,Ne);function rs(){Ne.call(this,"c")}S(rs,Ne);var Cr={},xa=null;function oo(){return xa=xa||new ft}Cr.La="serverreachability";function Na(l){Ne.call(this,Cr.La,l)}S(Na,Ne);function kr(l){const f=oo();ht(f,new Na(f))}Cr.STAT_EVENT="statevent";function is(l,f){Ne.call(this,Cr.STAT_EVENT,l),this.stat=f}S(is,Ne);function It(l){const f=oo();ht(f,new is(f,l))}Cr.Ma="timingevent";function zu(l,f){Ne.call(this,Cr.Ma,l),this.size=f}S(zu,Ne);function x(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(l,f,m,v,L,F){l.info(function(){if(l.g)if(F)for(var q="",De=F.split("&"),St=0;St<De.length;St++){var Se=De[St].split("=");if(1<Se.length){var Lt=Se[0];Se=Se[1];var Mt=Lt.split("_");q=2<=Mt.length&&Mt[1]=="type"?q+(Lt+"="+Se+"&"):q+(Lt+"=redacted&")}}else q=null;else q=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+m+`
`+q})}function j(l,f,m,v,L,F,q){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+q})}function K(l,f,m,v){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+ie(l,m)+(v?" "+v:"")})}function Z(l,f){l.info(function(){return"TIMEOUT: "+f})}D.prototype.info=function(){};function ie(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return io(m)}catch{return f}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ce={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function ee(){}S(ee,so),ee.prototype.g=function(){return new XMLHttpRequest},ee.prototype.i=function(){return{}},te=new ee;function he(l,f,m,v){this.j=l,this.i=f,this.l=m,this.R=v||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}var Ce={},we={};function rt(l,f,m){l.L=1,l.v=Wu(xr(f)),l.m=m,l.P=!0,Ke(l,null)}function Ke(l,f){l.F=Date.now(),$n(l),l.A=xr(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Mv(m.i,"t",v),l.C=0,m=l.j.J,l.h=new _e,l.g=e_(l.j,m?f:null,!l.m),0<l.O&&(l.M=new ro(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,v=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Bn[0]=L.toString()),L=Bn);for(var F=0;F<L.length;F++){var q=or(m,L[F],v||f.handleEvent,!1,f.h||f);if(!q)break;f.g[q.key]=q}f=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),kr(),M(l.i,l.u,l.A,l.l,l.R,l.m)}he.prototype.ca=function(l){l=l.target;const f=this.M;f&&Nr(l)==3?f.j():this.Y(l)},he.prototype.Y=function(l){try{if(l==this.g)e:{const Mt=Nr(this.g);var f=this.g.Ba();const co=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||$v(this.g)))){this.J||Mt!=4||f==7||(f==8||0>=co?kr(3):kr(2)),lr(this);var m=this.g.Z();this.X=m;t:if(si(this)){var v=$v(this.g);l="";var L=v.length,F=Nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),Dt(this);var q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(v[f],{stream:!(F&&f==L-1)});v.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,j(this.i,this.u,this.A,this.l,this.R,Mt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var De,St=this.g;if((De=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(De)){var Se=De;break t}}Se=null}if(m=Se)K(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oi(this,m);else{this.o=!1,this.s=3,It(12),kn(this),Dt(this);break e}}if(this.P){m=!0;let Hn;for(;!this.J&&this.C<q.length;)if(Hn=ar(this,q),Hn==we){Mt==4&&(this.s=4,It(14),m=!1),K(this.i,this.l,null,"[Incomplete Response]");break}else if(Hn==Ce){this.s=4,It(15),K(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else K(this.i,this.l,Hn,null),oi(this,Hn);if(si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||q.length!=0||this.h.h||(this.s=1,It(16),m=!1),this.o=this.o&&m,!m)K(this.i,this.l,q,"[Invalid Chunked Response]"),kn(this),Dt(this);else if(0<q.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),hh(Lt),Lt.M=!0,It(11))}}else K(this.i,this.l,q,null),oi(this,q);Mt==4&&kn(this),this.o&&!this.J&&(Mt==4?Yv(this.j,this):(this.o=!1,$n(this)))}else dC(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),kn(this),Dt(this)}}}catch{}finally{}};function si(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ar(l,f){var m=l.C,v=f.indexOf(`
`,m);return v==-1?we:(m=Number(f.substring(m,v)),isNaN(m)?Ce:(v+=1,v+m>f.length?we:(f=f.slice(v,v+m),l.C=v+m,f)))}he.prototype.cancel=function(){this.J=!0,kn(this)};function $n(l){l.S=Date.now()+l.I,br(l,l.I)}function br(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=x(p(l.ba,l),f)}function lr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}he.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Z(this.i,this.A),this.L!=2&&(kr(),It(17)),kn(this),this.s=2,Dt(this)):br(this,this.S-l)};function Dt(l){l.j.G==0||l.J||Yv(l.j,l)}function kn(l){lr(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,ka(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function oi(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||ke(m.h,l))){if(!l.K&&ke(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Yu(m),Gu(m);else break e;fh(m),It(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=x(p(m.Za,m),6e3));if(1>=Ot(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else os(m,11)}else if((l.K||m.g==l)&&Yu(m),!y(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Se=L[f];if(m.T=Se[0],Se=Se[1],m.G==2)if(Se[0]=="c"){m.K=Se[1],m.ia=Se[2];const Lt=Se[3];Lt!=null&&(m.la=Lt,m.j.info("VER="+m.la));const Mt=Se[4];Mt!=null&&(m.Aa=Mt,m.j.info("SVER="+m.Aa));const co=Se[5];co!=null&&typeof co=="number"&&0<co&&(v=1.5*co,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const Hn=l.g;if(Hn){const Ju=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ju){var F=v.h;F.g||Ju.indexOf("spdy")==-1&&Ju.indexOf("quic")==-1&&Ju.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(un(F,F.h),F.h=null))}if(v.D){const ph=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;ph&&(v.ya=ph,Ue(v.I,v.D,ph))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var q=l;if(v.qa=Zv(v,v.J?v.ia:null,v.W),q.K){Da(v.h,q);var De=q,St=v.L;St&&(De.I=St),De.B&&(lr(De),$n(De)),v.g=q}else Gv(v);0<m.i.length&&Qu(m)}else Se[0]!="stop"&&Se[0]!="close"||os(m,7);else m.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?os(m,7):dh(m):Se[0]!="noop"&&m.l&&m.l.ta(Se),m.v=0)}}kr(4)}catch{}}var ao=class{constructor(l,f){this.g=l,this.map=f}};function de(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fe(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ot(l){return l.h?1:l.g?l.g.size:0}function ke(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function un(l,f){l.g?l.g.add(f):l.h=f}function Da(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}de.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Bu(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return P(l.i)}function YP(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,v=0;v<m;v++)f.push(l[v]);return f}f=[],m=0;for(v in l)f[m++]=l[v];return f}function XP(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const v in l)f[m++]=v;return f}}}function bv(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=XP(l),v=YP(l),L=v.length,F=0;F<L;F++)f.call(void 0,v[F],m&&m[F],l)}var xv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JP(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),L=null;if(0<=v){var F=l[m].substring(0,v);L=l[m].substring(v+1)}else F=l[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ss(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ss){this.h=l.h,$u(this,l.j),this.o=l.o,this.g=l.g,Hu(this,l.s),this.l=l.l;var f=l.i,m=new Ma;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Nv(this,m),this.m=l.m}else l&&(f=String(l).match(xv))?(this.h=!1,$u(this,f[1]||"",!0),this.o=Oa(f[2]||""),this.g=Oa(f[3]||"",!0),Hu(this,f[4]),this.l=Oa(f[5]||"",!0),Nv(this,f[6]||"",!0),this.m=Oa(f[7]||"")):(this.h=!1,this.i=new Ma(null,this.h))}ss.prototype.toString=function(){var l=[],f=this.j;f&&l.push(La(f,Dv,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(La(f,Dv,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(La(m,m.charAt(0)=="/"?tC:eC,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",La(m,rC)),l.join("")};function xr(l){return new ss(l)}function $u(l,f,m){l.j=m?Oa(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Hu(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Nv(l,f,m){f instanceof Ma?(l.i=f,iC(l.i,l.h)):(m||(f=La(f,nC)),l.i=new Ma(f,l.h))}function Ue(l,f,m){l.i.set(f,m)}function Wu(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Oa(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function La(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,ZP),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ZP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Dv=/[#\/\?@]/g,eC=/[#\?:]/g,tC=/[#\?]/g,nC=/[#\?@]/g,rC=/#/g;function Ma(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function ai(l){l.g||(l.g=new Map,l.h=0,l.i&&JP(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Ma.prototype,t.add=function(l,f){ai(this),this.i=null,l=lo(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function Ov(l,f){ai(l),f=lo(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Lv(l,f){return ai(l),f=lo(l,f),l.g.has(f)}t.forEach=function(l,f){ai(this),this.g.forEach(function(m,v){m.forEach(function(L){l.call(f,L,v,this)},this)},this)},t.na=function(){ai(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const L=l[v];for(let F=0;F<L.length;F++)m.push(f[v])}return m},t.V=function(l){ai(this);let f=[];if(typeof l=="string")Lv(this,l)&&(f=f.concat(this.g.get(lo(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return ai(this),this.i=null,l=lo(this,l),Lv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mv(l,f,m){Ov(l,f),0<m.length&&(l.i=null,l.g.set(lo(l,f),P(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),q=this.V(v);for(v=0;v<q.length;v++){var L=F;q[v]!==""&&(L+="="+encodeURIComponent(String(q[v]))),l.push(L)}}return this.i=l.join("&")};function lo(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function iC(l,f){f&&!l.j&&(ai(l),l.i=null,l.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(Ov(this,v),Mv(this,L,m))},l)),l.j=f}function sC(l,f){const m=new D;if(a.Image){const v=new Image;v.onload=_(li,m,"TestLoadImage: loaded",!0,f,v),v.onerror=_(li,m,"TestLoadImage: error",!1,f,v),v.onabort=_(li,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=_(li,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else f(!1)}function oC(l,f){const m=new D,v=new AbortController,L=setTimeout(()=>{v.abort(),li(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?li(m,"TestPingServer: ok",!0,f):li(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),li(m,"TestPingServer: error",!1,f)})}function li(l,f,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function aC(){this.g=new uh}function lC(l,f,m){const v=m||"";try{bv(l,function(L,F){let q=L;c(L)&&(q=io(L)),f.push(v+F+"="+encodeURIComponent(q))})}catch(L){throw f.push(v+"type="+encodeURIComponent("_badmap")),L}}function Va(l){this.l=l.Ub||null,this.j=l.eb||!1}S(Va,so),Va.prototype.g=function(){return new qu(this.l,this.j)},Va.prototype.i=function(l){return function(){return l}}({});function qu(l,f){ft.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(qu,ft),t=qu.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Ua(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ua(this)),this.g&&(this.readyState=3,Ua(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Fa(this):Ua(this),this.readyState==3&&Vv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Fa(this))},t.Qa=function(l){this.g&&(this.response=l,Fa(this))},t.ga=function(){this.g&&Fa(this)};function Fa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ua(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Ua(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(qu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Fv(l){let f="";return k(l,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function ch(l,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Fv(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ue(l,f,m))}function Ze(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ze,ft);var uC=/^https?$/i,cC=["POST","PUT"];t=Ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?ns(this.o):ns(te),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){Uv(this,F);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(cC,f,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,q]of m)this.g.setRequestHeader(F,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bv(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Uv(this,F)}};function Uv(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,jv(l),Ku(l)}function jv(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),Ku(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ku(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zv(this):this.bb())},t.bb=function(){zv(this)};function zv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Nr(l)!=4||l.Z()!=2)){if(l.u&&Nr(l)==4)Cn(l.Ea,0,l);else if(ht(l,"readystatechange"),Nr(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=q===0){var L=String(l.D).match(xv)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!uC.test(L?L.toLowerCase():"")}m=v}if(m)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var F=2<Nr(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",jv(l)}}finally{Ku(l)}}}}function Ku(l,f){if(l.g){Bv(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ht(l,"ready");try{m.onreadystatechange=v}catch{}}}function Bv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Nr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Nr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),ju(f)}};function $v(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function dC(l){const f={};l=(l.g&&2<=Nr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(y(l[v]))continue;var m=b(l[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}E(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ja(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Hv(l){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ja("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ja("baseRetryDelayMs",5e3,l),this.cb=ja("retryDelaySeedMs",1e4,l),this.Wa=ja("forwardChannelMaxRetries",2,l),this.wa=ja("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new de(l&&l.concurrentRequestLimit),this.Da=new aC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hv.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,v){It(0),this.W=l,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Zv(this,null,this.W),Qu(this)};function dh(l){if(Wv(l),l.G==3){var f=l.U++,m=xr(l.I);if(Ue(m,"SID",l.K),Ue(m,"RID",f),Ue(m,"TYPE","terminate"),za(l,m),f=new he(l,l.j,f),f.L=2,f.v=Wu(xr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=e_(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$n(f)}Jv(l)}function Gu(l){l.g&&(hh(l),l.g.cancel(),l.g=null)}function Wv(l){Gu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Yu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Qu(l){if(!Fe(l.h)&&!l.s){l.s=!0;var f=l.Ga;Pe||oe(),G||(Pe(),G=!0),re.add(f,l),l.B=0}}function fC(l,f){return Ot(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=x(p(l.Ga,l,f),Xv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new he(this,this.j,l);let F=this.o;if(this.S&&(F?(F=g(F),A(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Kv(this,L,f),m=xr(this.I),Ue(m,"RID",l),Ue(m,"CVER",22),this.D&&Ue(m,"X-HTTP-Session-Id",this.D),za(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Fv(F)))+"&"+f:this.m&&ch(m,this.m,F)),un(this.h,L),this.Ua&&Ue(m,"TYPE","init"),this.P?(Ue(m,"$req",f),Ue(m,"SID","null"),L.T=!0,rt(L,m,null)):rt(L,m,f),this.G=2}}else this.G==3&&(l?qv(this,l):this.i.length==0||Fe(this.h)||qv(this))};function qv(l,f){var m;f?m=f.l:m=l.U++;const v=xr(l.I);Ue(v,"SID",l.K),Ue(v,"RID",m),Ue(v,"AID",l.T),za(l,v),l.m&&l.o&&ch(v,l.m,l.o),m=new he(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Kv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),un(l.h,m),rt(m,v,f)}function za(l,f){l.H&&k(l.H,function(m,v){Ue(f,v,m)}),l.l&&bv({},function(m,v){Ue(f,v,m)})}function Kv(l,f,m){m=Math.min(l.i.length,m);var v=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let F=-1;for(;;){const q=["count="+m];F==-1?0<m?(F=L[0].g,q.push("ofs="+F)):F=0:q.push("ofs="+F);let De=!0;for(let St=0;St<m;St++){let Se=L[St].g;const Lt=L[St].map;if(Se-=F,0>Se)F=Math.max(0,L[St].g-100),De=!1;else try{lC(Lt,q,"req"+Se+"_")}catch{v&&v(Lt)}}if(De){v=q.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,v}function Gv(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Pe||oe(),G||(Pe(),G=!0),re.add(f,l),l.v=0}}function fh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=x(p(l.Fa,l),Xv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Qv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=x(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Gu(this),Qv(this))};function hh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Qv(l){l.g=new he(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=xr(l.qa);Ue(f,"RID","rpc"),Ue(f,"SID",l.K),Ue(f,"AID",l.T),Ue(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(f,"TO",l.ja),Ue(f,"TYPE","xmlhttp"),za(l,f),l.m&&l.o&&ch(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Wu(xr(f)),m.m=null,m.P=!0,Ke(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Gu(this),fh(this),It(19))};function Yu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Yv(l,f){var m=null;if(l.g==f){Yu(l),hh(l),l.g=null;var v=2}else if(ke(l.h,f))m=f.D,Da(l.h,f),v=1;else return;if(l.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;v=oo(),ht(v,new zu(v,m)),Qu(l)}else Gv(l);else if(L=f.s,L==3||L==0&&0<f.X||!(v==1&&fC(l,f)||v==2&&fh(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),L){case 1:os(l,5);break;case 4:os(l,10);break;case 3:os(l,6);break;default:os(l,2)}}}function Xv(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function os(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),v=l.Xa;const L=!v;v=new ss(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$u(v,"https"),Wu(v),L?sC(v.toString(),m):oC(v.toString(),m)}else It(2);l.G=0,l.l&&l.l.sa(f),Jv(l),Wv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Jv(l){if(l.G=0,l.ka=[],l.l){const f=Bu(l.h);(f.length!=0||l.i.length!=0)&&(C(l.ka,f),C(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function Zv(l,f,m){var v=m instanceof ss?xr(m):new ss(m);if(v.g!="")f&&(v.g=f+"."+v.g),Hu(v,v.s);else{var L=a.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new ss(null);v&&$u(F,v),f&&(F.g=f),L&&Hu(F,L),m&&(F.l=m),v=F}return m=l.D,f=l.ya,m&&f&&Ue(v,m,f),Ue(v,"VER",l.la),za(l,v),v}function e_(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ze(new Va({eb:m})):new Ze(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function t_(){}t=t_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xu(){}Xu.prototype.g=function(l,f){return new cn(l,f)};function cn(l,f){ft.call(this),this.g=new Hv(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!y(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new uo(this)}S(cn,ft),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){dh(this.g)},cn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=io(l),l=m);f.i.push(new ao(f.Ya++,l)),f.G==3&&Qu(f)},cn.prototype.N=function(){this.g.l=null,delete this.j,dh(this.g),delete this.g,cn.aa.N.call(this)};function n_(l){ii.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}S(n_,ii);function r_(){rs.call(this),this.status=1}S(r_,rs);function uo(l){this.g=l}S(uo,t_),uo.prototype.ua=function(){ht(this.g,"a")},uo.prototype.ta=function(l){ht(this.g,new n_(l))},uo.prototype.sa=function(l){ht(this.g,new r_)},uo.prototype.ra=function(){ht(this.g,"b")},Xu.prototype.createWebChannel=Xu.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,QI=function(){return new Xu},GI=function(){return oo()},KI=Cr,Em={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,jc=W,ce.COMPLETE="complete",qI=ce,ba.EventType=Pr,Pr.OPEN="a",Pr.CLOSE="b",Pr.ERROR="c",Pr.MESSAGE="d",ft.prototype.listen=ft.prototype.K,al=ba,WI=Va,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,HI=Ze}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});const V0="@firebase/firestore";/**
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
 */let pa="10.12.3";/**
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
 */const Ms=new Tf("@firebase/firestore");function Ya(){return Ms.logLevel}function X(t,...e){if(Ms.logLevel<=ye.DEBUG){const n=e.map(oy);Ms.debug(`Firestore (${pa}): ${t}`,...n)}}function Qr(t,...e){if(Ms.logLevel<=ye.ERROR){const n=e.map(oy);Ms.error(`Firestore (${pa}): ${t}`,...n)}}function Zo(t,...e){if(Ms.logLevel<=ye.WARN){const n=e.map(oy);Ms.warn(`Firestore (${pa}): ${t}`,...n)}}function oy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${pa}) INTERNAL ASSERTION FAILED: `+t;throw Qr(e),new Error(e)}function be(t,e){t||se()}function ue(t,e){return t}/**
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
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class YI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ON{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class LN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MN{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new jt(e)}}class VN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new VN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new UN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class XI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ea(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class nu{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends nu{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const BN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends nu{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return BN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Q(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}function $N(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Ui(i,ne.empty(),e)}function HN(t){return new Ui(t.readTime,t.key,-1)}class Ui{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ui(ae.min(),ne.empty(),-1)}static max(){return new Ui(ae.max(),ne.empty(),-1)}}function WN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Iu(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==qN)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function GN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Su(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ay{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ay.oe=-1;function Au(t){return t==null}function kd(t){return t===0&&1/t==-1/0}function QN(t){return typeof t=="number"&&Number.isInteger(t)&&!kd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}}class vc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=i??Pt.EMPTY,this.right=s??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new mn([])}unionWith(e){let n=new bt(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZI("Invalid base64 string: "+s):s}}(e);return new Wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const YN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(t){if(be(!!t),typeof t=="string"){let e=0;const n=YN.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uy(t){const e=t.mapValue.fields.__previous_value__;return ly(e)?uy(e):e}function ru(t){const e=ji(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class XN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class iu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new iu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof iu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ly(t)?4:JN(t)?9007199254740991:10:se()}function Tr(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ru(t).isEqual(ru(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ji(i.timestampValue),a=ji(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vs(i.bytesValue).isEqual(Vs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?kd(o)===kd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ea(t.arrayValue.values||[],e.arrayValue.values||[],Tr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(F0(o)!==F0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Tr(o[u],a[u])))return!1;return!0}(t,e);default:return se()}}function su(t,e){return(t.values||[]).find(n=>Tr(n,e))!==void 0}function ta(t,e){if(t===e)return 0;const n=Fs(t),r=Fs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),u=at(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(ru(t),ru(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vs(s),u=Vs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Ae(a[c],u[c]);if(d!==0)return d}return Ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ae(at(s.latitude),at(o.latitude));return a!==0?a:Ae(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=ta(a[c],u[c]);if(d)return d}return Ae(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===_c.mapValue&&o===_c.mapValue)return 0;if(s===_c.mapValue)return 1;if(o===_c.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let h=0;h<u.length&&h<d.length;++h){const p=Ae(u[h],d[h]);if(p!==0)return p;const _=ta(a[u[h]],c[d[h]]);if(_!==0)return _}return Ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw se()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=ji(t),r=ji(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function na(t){return Tm(t)}function Tm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ji(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Tm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Tm(n.fields[o])}`;return i+"}"}(t.mapValue):se()}function z0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Im(t){return!!t&&"integerValue"in t}function cy(t){return!!t&&"arrayValue"in t}function B0(t){return!!t&&"nullValue"in t}function $0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zc(t){return!!t&&"mapValue"in t}function Il(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Il(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Il(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Il(n)}setAll(e){let n=Ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Il(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qt(Il(this.value))}}function eS(t){const e=[];return Xs(t.fields,(n,r)=>{const i=new Ct([n]);if(zc(r)){const s=eS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mn(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ae.min(),ae.min(),ae.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,ae.min(),ae.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ae.min(),ae.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bd{constructor(e,n){this.position=e,this.inclusive=n}}function H0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=ta(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function W0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tS{}class ut extends tS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tD(e,n,r):n==="array-contains"?new iD(e,r):n==="in"?new sD(e,r):n==="not-in"?new oD(e,r):n==="array-contains-any"?new aD(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nD(e,r):new rD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ta(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(ta(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends tS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rr(e,n)}matches(e){return nS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nS(t){return t.op==="and"}function rS(t){return eD(t)&&nS(t)}function eD(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function Sm(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+na(t.value);if(rS(t))return t.filters.map(e=>Sm(e)).join(",");{const e=t.filters.map(n=>Sm(n)).join(",");return`${t.op}(${e})`}}function iS(t,e){return t instanceof ut?function(r,i){return i instanceof ut&&r.op===i.op&&r.field.isEqual(i.field)&&Tr(r.value,i.value)}(t,e):t instanceof rr?function(r,i){return i instanceof rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&iS(o,i.filters[a]),!0):!1}(t,e):void se()}function sS(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${na(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(sS).join(" ,")+"}"}(t):"Filter"}class tD extends ut{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class nD extends ut{constructor(e,n){super(e,"in",n),this.keys=oS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rD extends ut{constructor(e,n){super(e,"not-in",n),this.keys=oS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class iD extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cy(n)&&su(n.arrayValue,this.value)}}class sD extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&su(this.value.arrayValue,n)}}class oD extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(su(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!su(this.value.arrayValue,n)}}class aD extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>su(this.value.arrayValue,r))}}/**
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
 */class lD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function q0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lD(t,e,n,r,i,s,o)}function dy(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>na(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>na(r)).join(",")),e.ue=n}return e.ue}function fy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!W0(t.startAt,e.startAt)&&W0(t.endAt,e.endAt)}function Am(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ma{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uD(t,e,n,r,i,s,o,a){return new ma(t,e,n,r,i,s,o,a)}function Sf(t){return new ma(t)}function K0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aS(t){return t.collectionGroup!==null}function Sl(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new bt(Ct.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ou(s,r))}),n.has(Ct.keyField().canonicalString())||e.ce.push(new ou(Ct.keyField(),r))}return e.ce}function wr(t){const e=ue(t);return e.le||(e.le=cD(e,Sl(t))),e.le}function cD(t,e){if(t.limitType==="F")return q0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ou(i.field,s)});const n=t.endAt?new bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bd(t.startAt.position,t.startAt.inclusive):null;return q0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rm(t,e){const n=t.filters.concat([e]);return new ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xd(t,e,n){return new ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Af(t,e){return fy(wr(t),wr(e))&&t.limitType===e.limitType}function lS(t){return`${dy(wr(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sS(i)).join(", ")}]`),Au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>na(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>na(i)).join(",")),`Target(${r})`}(wr(t))}; limitType=${t.limitType})`}function Rf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Sl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Sl(r),i)||r.endAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Sl(r),i))}(t,e)}function dD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uS(t){return(e,n)=>{let r=!1;for(const i of Sl(t)){const s=fD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fD(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ta(u,c):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
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
 */class ga{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
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
 */const hD=new Je(ne.comparator);function Yr(){return hD}const cS=new Je(ne.comparator);function ll(...t){let e=cS;for(const n of t)e=e.insert(n.key,n);return e}function dS(t){let e=cS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return Al()}function fS(){return Al()}function Al(){return new ga(t=>t.toString(),(t,e)=>t.isEqual(e))}const pD=new Je(ne.comparator),mD=new bt(ne.comparator);function ge(...t){let e=mD;for(const n of t)e=e.add(n);return e}const gD=new bt(Ae);function yD(){return gD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kd(e)?"-0":e}}function pS(t){return{integerValue:""+t}}function vD(t,e){return QN(e)?pS(e):hS(t,e)}/**
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
 */class Pf{constructor(){this._=void 0}}function _D(t,e,n){return t instanceof Nd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ly(s)&&(s=uy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof au?gS(t,e):t instanceof lu?yS(t,e):function(i,s){const o=mS(i,s),a=G0(o)+G0(i.Pe);return Im(o)&&Im(i.Pe)?pS(a):hS(i.serializer,a)}(t,e)}function wD(t,e,n){return t instanceof au?gS(t,e):t instanceof lu?yS(t,e):n}function mS(t,e){return t instanceof Dd?function(r){return Im(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nd extends Pf{}class au extends Pf{constructor(e){super(),this.elements=e}}function gS(t,e){const n=vS(e);for(const r of t.elements)n.some(i=>Tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class lu extends Pf{constructor(e){super(),this.elements=e}}function yS(t,e){let n=vS(e);for(const r of t.elements)n=n.filter(i=>!Tr(i,r));return{arrayValue:{values:n}}}class Dd extends Pf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function G0(t){return at(t.integerValue||t.doubleValue)}function vS(t){return cy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ED(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof au&&i instanceof au||r instanceof lu&&i instanceof lu?ea(r.elements,i.elements,Tr):r instanceof Dd&&i instanceof Dd?Tr(r.Pe,i.Pe):r instanceof Nd&&i instanceof Nd}(t.transform,e.transform)}class TD{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cf{}function _S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hy(t.key,Yt.none()):new Ru(t.key,t.data,Yt.none());{const n=t.data,r=Qt.empty();let i=new bt(Ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ji(t.key,r,new mn(i.toArray()),Yt.none())}}function ID(t,e,n){t instanceof Ru?function(i,s,o){const a=i.value.clone(),u=Y0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ji?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Y0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Rl(t,e,n,r){return t instanceof Ru?function(s,o,a,u){if(!Bc(s.precondition,o))return a;const c=s.value.clone(),d=X0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ji?function(s,o,a,u){if(!Bc(s.precondition,o))return a;const c=X0(s.fieldTransforms,u,o),d=o.data;return d.setAll(wS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function SD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mS(r.transform,i||null);s!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,s))}return n||null}function Q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ea(r,i,(s,o)=>ED(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ru extends Cf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ji extends Cf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Y0(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wD(o,a,n[i]))}return r}function X0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_D(s,o,e))}return r}class hy extends Cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ES extends Cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ID(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=_S(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,(n,r)=>Q0(n,r))&&ea(this.baseMutations,e.baseMutations,(n,r)=>Q0(n,r))}}class py{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){be(e.mutations.length===r.length);let i=function(){return pD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new py(e,n,r,i)}}/**
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
 */class RD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */function CD(){return new TextEncoder}/**
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
 */const kD=new Is([4294967295,4294967295],0);function J0(t){const e=CD().encode(t),n=new $I;return n.update(e),new Uint8Array(n.digest())}function Z0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Is([n,r],0),new Is([i,s],0)]}class my{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ul(`Invalid padding: ${n}`);if(r<0)throw new ul(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ul(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ul(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Is.fromNumber(r)));return i.compare(kD)===1&&(i=new Is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=J0(e),[r,i]=Z0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new my(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=J0(e),[r,i]=Z0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kf(ae.min(),i,new Je(Ae),Yr(),ge())}}class Pu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pu(r,n,ge(),ge(),ge())}}/**
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
 */class $c{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class SS{constructor(e,n){this.targetId=e,this.me=n}}class AS{constructor(e,n,r=Wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ew{constructor(){this.fe=0,this.ge=nw(),this.pe=Wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new Pu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=nw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yr(),this.qe=tw(),this.Qe=new Je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Am(s))if(r===0){const o=new ne(s.path);this.Ue(n,o,_t.newNoDocument(o,ae.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Vs(r).toUint8Array()}catch(u){if(u instanceof ZI)return Zo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new my(o,i,s)}catch(u){return Zo(u instanceof ul?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Am(a.target)){const u=new ne(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kf(e,n,this.Qe,this.ke,r);return this.ke=Yr(),this.qe=tw(),this.Qe=new Je(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ew,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new bt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ew),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function tw(){return new Je(ne.comparator)}function nw(){return new Je(ne.comparator)}const xD={asc:"ASCENDING",desc:"DESCENDING"},ND={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DD={and:"AND",or:"OR"};class OD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pm(t,e){return t.useProto3Json||Au(e)?e:{value:e}}function Od(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LD(t,e){return Od(t,e.toTimestamp())}function vn(t){return be(!!t),ae.fromTimestamp(function(n){const r=ji(n);return new Ye(r.seconds,r.nanos)}(t))}function gy(t,e){return Cm(t,e).canonicalString()}function Cm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function PS(t){const e=Oe.fromString(t);return be(DS(e)),e}function Ld(t,e){return gy(t.databaseId,e.path)}function Pl(t,e){const n=PS(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(kS(n))}function CS(t,e){return gy(t.databaseId,e)}function MD(t){const e=PS(t);return e.length===4?Oe.emptyPath():kS(e)}function km(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kS(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rw(t,e,n){return{name:Ld(t,e),fields:n.value.mapValue.fields}}function VD(t,e){return"found"in e?function(r,i){be(!!i.found),i.found.name,i.found.updateTime;const s=Pl(r,i.found.name),o=vn(i.found.updateTime),a=i.found.createTime?vn(i.found.createTime):ae.min(),u=new Qt({mapValue:{fields:i.found.fields}});return _t.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){be(!!i.missing),be(!!i.readTime);const s=Pl(r,i.missing),o=vn(i.readTime);return _t.newNoDocument(s,o)}(t,e):se()}function FD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(be(d===void 0||typeof d=="string"),Wt.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Wt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?B.UNKNOWN:IS(c.code);return new Q(d,c.message||"")}(o);n=new AS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pl(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ae.min(),a=new Qt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new $c(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pl(t,r.document),s=r.readTime?vn(r.readTime):ae.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pl(t,r.document),s=r.removedTargetIds||[];n=new $c([],s,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PD(i,s),a=r.targetId;n=new SS(a,o)}}return n}function bS(t,e){let n;if(e instanceof Ru)n={update:rw(t,e.key,e.value)};else if(e instanceof hy)n={delete:Ld(t,e.key)};else if(e instanceof Ji)n={update:rw(t,e.key,e.data),updateMask:KD(e.fieldMask)};else{if(!(e instanceof ES))return se();n={verify:Ld(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof au)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Dd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:LD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function UD(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(ae.min())&&(o=vn(s)),new TD(o,i.transformResults||[])}(n,e))):[]}function jD(t,e){return{documents:[CS(t,e.path)]}}function zD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CS(t,i);const s=function(c){if(c.length!==0)return NS(rr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:mo(p.field),direction:HD(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Pm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function BD(t){let e=MD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(h){const p=xS(h);return p instanceof rr&&rS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(S){return new ou(go(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Au(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,_=h.values||[];return new bd(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,_=h.values||[];return new bd(_,p)}(n.endAt)),uD(e,i,o,s,a,"F",u,c)}function $D(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=go(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=go(n.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=go(n.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=go(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return ut.create(go(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>xS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function HD(t){return xD[t]}function WD(t){return ND[t]}function qD(t){return DD[t]}function mo(t){return{fieldPath:t.canonicalString()}}function go(t){return Ct.fromServerFormat(t.fieldPath)}function NS(t){return t instanceof ut?function(n){if(n.op==="=="){if($0(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NAN"}};if(B0(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($0(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NAN"}};if(B0(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(n.field),op:WD(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(i=>NS(i));return r.length===1?r[0]:{compositeFilter:{op:qD(n.op),filters:r}}}(t):se()}function KD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function DS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ii{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Wt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GD{constructor(e){this.ct=e}}function QD(t){const e=BD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
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
 */class YD{constructor(){this._n=new XD}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ui.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class XD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new bt(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new bt(Oe.comparator)).toArray()}}/**
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
 */class ra{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ra(0)}static Ln(){return new ra(-1)}}/**
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
 */class JD{constructor(){this.changes=new ga(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Rl(r.mutation,i,mn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=gs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ll();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yr();const o=Al(),a=function(){return Al()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ji)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Rl(d.mutation,c,d.mutation.getFieldMask(),Ye.now())):o.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var h;return a.set(c,new ZD(d,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Al();let i=new Je((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||mn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const h=(i.get(a.batchId)||ge()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,h=fS();d.forEach(p=>{if(!s.has(p)){const _=_S(n.get(p),r.get(p));_!==null&&h.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(gs());let a=-1,u=s;return o.next(c=>$.forEach(c,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ge())).next(d=>({batchId:a,changes:dS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=ll();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ll();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,u=>{const c=function(h,p){return new ma(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let a=ll();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Rl(d.mutation,c,mn.empty(),Ye.now()),Rf(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:QD(i.bundledQuery),readTime:vn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class nO{constructor(){this.overlays=new Je(ne.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=gs(),s=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=gs(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=gs(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RD(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class rO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new bt(yt.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(Ae);return n.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new yt(new ne(s),0);let a=new bt(Ae);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new yt(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iO{constructor(e){this.vr=e,this.docs=function(){return new Je(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yr();const o=n.path,a=new ne(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||WN(HN(d),r)<=0||(i.has(d.key)||Rf(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sO(this)}getSize(e){return $.resolve(this.size)}}class sO extends JD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class oO{constructor(e){this.persistence=e,this.Mr=new ga(n=>dy(n),fy),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yy,this.targetCount=0,this.Lr=ra.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ra(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class aO{constructor(e,n){this.Br={},this.overlays={},this.kr=new ay(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new oO(this),this.indexManager=new YD,this.remoteDocumentCache=function(i){return new iO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new GD(n),this.$r=new tO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new rO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new lO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class lO extends KN{constructor(e){super(),this.currentSequenceNumber=e}}class vy{constructor(e){this.persistence=e,this.zr=new yy,this.jr=null}static Hr(e){return new vy(e)}get Jr(){if(this.jr)return this.jr;throw se()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=ne.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class uO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return g2()?8:GN(Nt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new uO;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ya()<=ye.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",po(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Ya()<=ye.DEBUG&&X("QueryEngine","Query:",po(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ya()<=ye.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",po(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wr(n))):$.resolve())}ji(e,n){if(K0(n))return $.resolve(null);let r=wr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xd(n,null,"F"),r=wr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,xd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return K0(n)||i.isEqual(ae.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(Ya()<=ye.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(n)),this.es(e,o,n,$N(i,-1)).next(a=>a))})}Zi(e,n){let r=new bt(uS(e));return n.forEach((i,s)=>{Rf(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ya()<=ye.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",po(n)),this.zi.getDocumentsMatchingQuery(e,n,Ui.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Je(Ae),this.rs=new ga(s=>dy(s),fy),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function fO(t,e,n,r){return new dO(t,e,n,r)}async function OS(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ge();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function hO(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const h=c.batch,p=h.keys();let _=$.resolve();return p.forEach(S=>{_=_.next(()=>d.getEntry(u,S)).next(P=>{const C=c.docVersions.get(S);be(C!==null),P.version.compareTo(C)<0&&(h.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LS(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function pO(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,h)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Wt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(h,_),function(P,C,T){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,_,d)&&a.push(n.Qr.updateTargetData(s,_))});let u=Yr(),c=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(mO(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ae.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function mO(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function gO(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yO(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ii(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function bm(t,e,n){const r=ue(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Su(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function iw(t,e,n){const r=ue(t);let i=ae.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const h=ue(u),p=h.rs.get(d);return p!==void 0?$.resolve(h.ns.get(p)):h.Qr.getTargetData(c,d)}(r,o,wr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:ge())).next(a=>(vO(r,dD(e),a),{documents:a,hs:s})))}function vO(t,e,n){let r=t.ss.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class sw{constructor(){this.activeTargetIds=yD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _O{constructor(){this.no=new sw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new sw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wO{io(e){}shutdown(){}}/**
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
 */let wc=null;function Xh(){return wc===null?wc=function(){return 268435456+Math.round(2147483648*Math.random())}():wc++,"0x"+wc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class TO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Ut="WebChannelConnection";class IO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Xh(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Zo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=EO[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Xh();return new Promise((o,a)=>{const u=new HI;u.setWithCredentials(!0),u.listenOnce(qI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jc.NO_ERROR:const d=u.getResponseJson();X(Ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case jc.TIMEOUT:X(Ut,`RPC '${e}' ${s} timed out`),a(new Q(B.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const h=u.getStatus();if(X(Ut,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const S=function(C){const T=C.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(T)>=0?T:B.UNKNOWN}(_.status);a(new Q(S,_.message))}else a(new Q(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Q(B.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{X(Ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(Ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Xh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QI(),a=GI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new WI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(Ut,`Creating RPC '${e}' stream ${i}: ${d}`,u);const h=o.createWebChannel(d,u);let p=!1,_=!1;const S=new TO({lo:C=>{_?X(Ut,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(X(Ut,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),X(Ut,`RPC '${e}' stream ${i} sending:`,C),h.send(C))},ho:()=>h.close()}),P=(C,T,y)=>{C.listen(T,I=>{try{y(I)}catch(N){setTimeout(()=>{throw N},0)}})};return P(h,al.EventType.OPEN,()=>{_||(X(Ut,`RPC '${e}' stream ${i} transport opened.`),S.mo())}),P(h,al.EventType.CLOSE,()=>{_||(_=!0,X(Ut,`RPC '${e}' stream ${i} transport closed`),S.po())}),P(h,al.EventType.ERROR,C=>{_||(_=!0,Zo(Ut,`RPC '${e}' stream ${i} transport errored:`,C),S.po(new Q(B.UNAVAILABLE,"The operation could not be completed")))}),P(h,al.EventType.MESSAGE,C=>{var T;if(!_){const y=C.data[0];be(!!y);const I=y,N=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(N){X(Ut,`RPC '${e}' stream ${i} received error:`,N);const U=N.status;let k=function(w){const A=st[w];if(A!==void 0)return IS(A)}(U),E=N.message;k===void 0&&(k=B.INTERNAL,E="Unknown error status: "+U+" with message "+N.message),_=!0,S.po(new Q(k,E)),h.close()}else X(Ut,`RPC '${e}' stream ${i} received:`,y),S.yo(y)}}),P(a,KI.STAT_EVENT,C=>{C.stat===Em.PROXY?X(Ut,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Em.NOPROXY&&X(Ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Jh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){return new OD(t,!0)}/**
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
 */class MS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new wy(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Qr(n.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Q(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SO extends MS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=FD(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?vn(o.readTime):ae.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=km(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Am(u)?{documents:jD(s,u)}:{query:zD(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=RS(s,o.resumeToken);const c=Pm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=Od(s,o.snapshotVersion.toTimestamp());const c=Pm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=$D(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=km(this.serializer),n.removeTarget=e,this.i_(n)}}class AO extends MS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=UD(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.A_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=km(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bS(this.serializer,r))};this.i_(n)}}/**
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
 */class RO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Q(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Cm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(B.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Cm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(B.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class PO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class CO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Js(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ue(u);c.M_.add(4),await Cu(c),c.N_.set("Unknown"),c.M_.delete(4),await xf(c)}(this))})}),this.N_=new PO(r,i)}}async function xf(t){if(Js(t))for(const e of t.x_)await e(!0)}async function Cu(t){for(const e of t.x_)await e(!1)}function VS(t,e){const n=ue(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Sy(n)?Iy(n):ya(n).Xo()&&Ty(n,e))}function Ey(t,e){const n=ue(t),r=ya(n);n.F_.delete(e),r.Xo()&&FS(n,e),n.F_.size===0&&(r.Xo()?r.n_():Js(n)&&n.N_.set("Unknown"))}function Ty(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ya(t).P_(e)}function FS(t,e){t.L_.xe(e),ya(t).I_(e)}function Iy(t){t.L_=new bD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ya(t).start(),t.N_.w_()}function Sy(t){return Js(t)&&!ya(t).Zo()&&t.F_.size>0}function Js(t){return ue(t).M_.size===0}function US(t){t.L_=void 0}async function kO(t){t.N_.set("Online")}async function bO(t){t.F_.forEach((e,n)=>{Ty(t,e)})}async function xO(t,e){US(t),Sy(t)?(t.N_.D_(e),Iy(t)):t.N_.set("Unknown")}async function NO(t,e,n){if(t.N_.set("Online"),e instanceof AS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Md(t,r)}else if(e instanceof $c?t.L_.Ke(e):e instanceof SS?t.L_.He(e):t.L_.We(e),!n.isEqual(ae.min()))try{const r=await LS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Wt.EMPTY_BYTE_STRING,d.snapshotVersion)),FS(s,u);const h=new Ii(d.target,u,c,d.sequenceNumber);Ty(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Md(t,r)}}async function Md(t,e,n){if(!Su(e))throw e;t.M_.add(1),await Cu(t),t.N_.set("Offline"),n||(n=()=>LS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await xf(t)})}function jS(t,e){return e().catch(n=>Md(t,n,e))}async function Nf(t){const e=ue(t),n=zi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;DO(e);)try{const i=await gO(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,OO(e,i)}catch(i){await Md(e,i)}zS(e)&&BS(e)}function DO(t){return Js(t)&&t.v_.length<10}function OO(t,e){t.v_.push(e);const n=zi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function zS(t){return Js(t)&&!zi(t).Zo()&&t.v_.length>0}function BS(t){zi(t).start()}async function LO(t){zi(t).V_()}async function MO(t){const e=zi(t);for(const n of t.v_)e.d_(n.mutations)}async function VO(t,e,n){const r=t.v_.shift(),i=py.from(r,e,n);await jS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nf(t)}async function FO(t,e){e&&zi(t).E_&&await async function(r,i){if(function(o){return TS(o)&&o!==B.ABORTED}(i.code)){const s=r.v_.shift();zi(r).t_(),await jS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nf(r)}}(t,e),zS(t)&&BS(t)}async function aw(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Js(n);n.M_.add(3),await Cu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await xf(n)}async function UO(t,e){const n=ue(t);e?(n.M_.delete(2),await xf(n)):e||(n.M_.add(2),await Cu(n),n.N_.set("Unknown"))}function ya(t){return t.B_||(t.B_=function(n,r,i){const s=ue(n);return s.f_(),new SO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:kO.bind(null,t),To:bO.bind(null,t),Ao:xO.bind(null,t),h_:NO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Sy(t)?Iy(t):t.N_.set("Unknown")):(await t.B_.stop(),US(t))})),t.B_}function zi(t){return t.k_||(t.k_=function(n,r,i){const s=ue(n);return s.f_(),new AO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:LO.bind(null,t),Ao:FO.bind(null,t),R_:MO.bind(null,t),A_:VO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Nf(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Ay{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ay(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ry(t,e){if(Qr("AsyncQueue",`${e}: ${t}`),Su(t))return new Q(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ll(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class lw{constructor(){this.q_=new Je(ne.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):se():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ia{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ia(e,n,Uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class zO{constructor(){this.queries=new ga(e=>lS(e),Af),this.onlineState="Unknown",this.z_=new Set}}async function Py(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new jO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ry(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&ky(n)}async function Cy(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BO(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&ky(n)}function $O(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function ky(t){t.z_.forEach(e=>{e.next()})}var xm,uw;(uw=xm||(xm={})).J_="default",uw.Cache="cache";class by{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ia(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==xm.Cache}}/**
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
 */class $S{constructor(e){this.key=e}}class HS{constructor(e){this.key=e}}class HO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=uS(e),this.Ta=new Uo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new lw,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const p=i.get(d),_=Rf(this.query,h)?h:null,S=!!p&&this.mutatedKeys.has(p.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;p&&_?p.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),C=!0):this.Ra(p,_)||(r.track({type:2,doc:_}),C=!0,(u&&this.Ia(_,u)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),C=!0):p&&!_&&(r.track({type:1,doc:p}),C=!0,(u||c)&&(a=!0)),C&&(_?(o=o.add(_),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,h)=>function(_,S){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return P(_)-P(S)}(d.type,h.type)||this.Ia(d.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ia(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new lw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new HS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new $S(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ia.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class WO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qO{constructor(e){this.key=e,this.wa=!1}}class KO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ga(a=>lS(a),Af),this.Da=new Map,this.Ca=new Set,this.va=new Je(ne.comparator),this.Fa=new Map,this.Ma=new yy,this.xa={},this.Oa=new Map,this.Na=ra.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function GO(t,e,n=!0){const r=YS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await WS(r,e,n,!0),i}async function QO(t,e){const n=YS(t);await WS(n,e,!0,!1)}async function WS(t,e,n,r){const i=await yO(t.localStore,wr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await YO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&VS(t.remoteStore,i),a}async function YO(t,e,n,r,i){t.Ba=(h,p,_)=>async function(P,C,T,y){let I=C.view.da(T);I.Xi&&(I=await iw(P.localStore,C.query,!1).then(({documents:E})=>C.view.da(E,I)));const N=y&&y.targetChanges.get(C.targetId),U=y&&y.targetMismatches.get(C.targetId)!=null,k=C.view.applyChanges(I,P.isPrimaryClient,N,U);return dw(P,C.targetId,k.fa),k.snapshot}(t,h,p,_);const s=await iw(t.localStore,e,!0),o=new HO(e,s.hs),a=o.da(s.documents),u=Pu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);dw(t,n,c.fa);const d=new WO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function XO(t,e,n){const r=ue(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Af(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ey(r.remoteStore,i.targetId),Nm(r,i.targetId)}).catch(Iu)):(Nm(r,i.targetId),await bm(r.localStore,i.targetId,!0))}async function JO(t,e){const n=ue(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ey(n.remoteStore,r.targetId))}async function ZO(t,e,n){const r=oL(t);try{const i=await function(o,a){const u=ue(o),c=Ye.now(),d=a.reduce((_,S)=>_.add(S.key),ge());let h,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Yr(),P=ge();return u.os.getEntries(_,d).next(C=>{S=C,S.forEach((T,y)=>{y.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,S)).next(C=>{h=C;const T=[];for(const y of a){const I=SD(y,h.get(y.key).overlayedDocument);I!=null&&T.push(new Ji(y.key,I,eS(I.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,T,a)}).next(C=>{p=C;const T=C.applyToLocalDocumentSet(h,P);return u.documentOverlayCache.saveOverlays(_,C.batchId,T)})}).then(()=>({batchId:p.batchId,changes:dS(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Je(Ae)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ku(r,i.changes),await Nf(r.remoteStore)}catch(i){const s=Ry(i,"Failed to persist write");n.reject(s)}}async function qS(t,e){const n=ue(t);try{const r=await pO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?be(o.wa):i.removedDocuments.size>0&&(be(o.wa),o.wa=!1))}),await ku(n,r,e)}catch(r){await Iu(r)}}function cw(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ue(o);u.onlineState=a;let c=!1;u.queries.forEach((d,h)=>{for(const p of h.U_)p.j_(a)&&(c=!0)}),c&&ky(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eL(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Je(ne.comparator);o=o.insert(s,_t.newNoDocument(s,ae.min()));const a=ge().add(s),u=new kf(ae.min(),new Map,new Je(Ae),o,a);await qS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),xy(r)}else await bm(r.localStore,e,!1).then(()=>Nm(r,e,n)).catch(Iu)}async function tL(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await hO(n.localStore,e);GS(n,r,null),KS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ku(n,i)}catch(i){await Iu(i)}}async function nL(t,e,n){const r=ue(t);try{const i=await function(o,a){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(be(h!==null),d=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GS(r,e,n),KS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ku(r,i)}catch(i){await Iu(i)}}function KS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function GS(t,e,n){const r=ue(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Nm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||QS(t,r)})}function QS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ey(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),xy(t))}function dw(t,e,n){for(const r of n)r instanceof $S?(t.Ma.addReference(r.key,e),rL(t,r)):r instanceof HS?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||QS(t,r.key)):se()}function rL(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),xy(t))}function xy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ne(Oe.fromString(e)),r=t.Na.next();t.Fa.set(r,new qO(n)),t.va=t.va.insert(n,r),VS(t.remoteStore,new Ii(wr(Sf(n.path)),r,"TargetPurposeLimboResolution",ay.oe))}}async function ku(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const h=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=_y.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(c,p=>$.forEach(p.qi,_=>d.persistence.referenceDelegate.addReference(h,p.targetId,_)).next(()=>$.forEach(p.Qi,_=>d.persistence.referenceDelegate.removeReference(h,p.targetId,_)))))}catch(h){if(!Su(h))throw h;X("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const _=d.ns.get(p),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);d.ns=d.ns.insert(p,P)}}}(r.localStore,s))}async function iL(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await OS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new Q(B.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ku(n,r.us)}}function sL(t,e){const n=ue(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function YS(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eL.bind(null,e),e.Sa.h_=BO.bind(null,e.eventManager),e.Sa.ka=$O.bind(null,e.eventManager),e}function oL(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nL.bind(null,e),e}class fw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fO(this.persistence,new cO,e.initialUser,this.serializer)}createPersistence(e){return new aO(vy.Hr,this.serializer)}createSharedClientState(e){return new _O}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iL.bind(null,this.syncEngine),await UO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zO}()}createDatastore(e){const n=bf(e.databaseInfo.databaseId),r=function(s){return new IO(s)}(e.databaseInfo);return function(s,o,a,u){return new RO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new CO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cw(this.syncEngine,n,0),function(){return ow.D()?new ow:new wO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const h=new KO(i,s,o,a,u,c);return d&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ue(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Cu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Q(B.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=ue(i),a={documents:s.map(h=>Ld(o.serializer,h))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,Oe.emptyPath(),a,s.length),c=new Map;u.forEach(h=>{const p=VD(o.serializer,h);c.set(p.key.toString(),p)});const d=[];return s.forEach(h=>{const p=c.get(h.toString());be(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new hy(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=ne.fromPath(r);this.mutations.push(new ES(i,this.precondition(i)))}),await async function(r,i){const s=ue(r),o={writes:i.map(a=>bS(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,Oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se();n=ae.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Q(B.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ae.min())?Yt.exists(!1):Yt.updateTime(n):Yt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ae.min()))throw new Q(B.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Yt.updateTime(n)}return Yt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class uL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new wy(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new lL(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Au(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!TS(n)}return!1}}/**
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
 */class cL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=jt.UNAUTHENTICATED,this.clientId=XI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ry(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zh(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fL(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>aw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>aw(e.remoteStore,i)),t._onlineComponents=e}function dL(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dL(n))throw n;Zo("Error using user provided cache. Falling back to memory cache: "+n),await Zh(t,new fw)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Zh(t,new fw);return t._offlineComponents}async function Dy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await hw(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await hw(t,new aL))),t._onlineComponents}function hL(t){return Dy(t).then(e=>e.syncEngine)}function pL(t){return Dy(t).then(e=>e.datastore)}async function Vd(t){const e=await Dy(t),n=e.eventManager;return n.onListen=GO.bind(null,e.syncEngine),n.onUnlisten=XO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JO.bind(null,e.syncEngine),n}function mL(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Ny({next:p=>{o.enqueueAndForget(()=>Cy(s,h));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new Q(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new Q(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new by(Sf(a.path),d,{includeMetadataChanges:!0,ra:!0});return Py(s,h)}(await Vd(t),t.asyncQueue,e,n,r)),r.promise}function gL(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Ny({next:p=>{o.enqueueAndForget(()=>Cy(s,h)),p.fromCache&&u.source==="server"?c.reject(new Q(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new by(a,d,{includeMetadataChanges:!0,ra:!0});return Py(s,h)}(await Vd(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function JS(t,e,n){if(!n)throw new Q(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yL(t,e,n,r){if(e===!0&&r===!0)throw new Q(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mw(t){if(!ne.isDocumentKey(t))throw new Q(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gw(t){if(ne.isDocumentKey(t))throw new Q(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Df(t);throw new Q(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Of{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ON;switch(r.type){case"firstParty":return new FN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pw.get(n);r&&(X("ComponentProvider","Removing Datastore"),pw.delete(n),r.terminate())}(this),Promise.resolve()}}function vL(t,e,n,r={}){var i;const s=(t=On(t,Of))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=jt.MOCK_USER;else{a=DI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Q(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new jt(c)}t._authCredentials=new LN(new YI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Li extends ti{constructor(e,n,r){super(e,n,Sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ne(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function Bi(t,e,...n){if(t=Ve(t),JS("collection","path",e),t instanceof Of){const r=Oe.fromString(e,...n);return gw(r),new Li(t,null,r)}{if(!(t instanceof Bt||t instanceof Li))throw new Q(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return gw(r),new Li(t.firestore,null,r)}}function Un(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=XI.newId()),JS("doc","path",e),t instanceof Of){const r=Oe.fromString(e,...n);return mw(r),new Bt(t,null,new ne(r))}{if(!(t instanceof Bt||t instanceof Li))throw new Q(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return mw(r),new Bt(t.firestore,t instanceof Li?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new wy(this,"async_queue_retry"),this.hu=()=>{const n=Jh();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Jh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Jh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new _r;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Su(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Ay.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&se()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function vw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $i extends Of{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new _L}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZS(this),this._firestoreClient.terminate()}}function wL(t,e){const n=typeof t=="object"?t:If(),r=typeof t=="string"?t:"(default)",i=Xi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bI("firestore");s&&vL(i,...s)}return i}function bu(t){return t._firestoreClient||ZS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new XN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(Wt.fromBase64String(e))}catch(n){throw new Q(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const EL=/^__.*__$/;class TL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ru(e,this.data,n,this.fieldTransforms)}}class eA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class My{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new My(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Fd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(tA(this.fu)&&EL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class IL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bf(e)}Fu(e,n,r,i=!1){return new My({fu:e,methodName:n,vu:r,path:Ct.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(t){const e=t._freezeSettings(),n=bf(t._databaseId);return new IL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vy(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Fy("Data must be an object, but it was:",o,r);const a=nA(r,o);let u,c;if(s.merge)u=new mn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const p=Dm(e,h,n);if(!o.contains(p))throw new Q(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);iA(d,p)||d.push(p)}u=new mn(d),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new TL(new Qt(a),u,c)}class Vf extends Oy{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vf}}function SL(t,e,n,r){const i=t.Fu(1,e,n);Fy("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();Xs(r,(u,c)=>{const d=Uy(e,u,n);c=Ve(c);const h=i.Su(d);if(c instanceof Vf)s.push(d);else{const p=xu(c,h);p!=null&&(s.push(d),o.set(d,p))}});const a=new mn(s);return new eA(o,a,i.fieldTransforms)}function AL(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Dm(e,r,n)],u=[i];if(s.length%2!=0)throw new Q(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Dm(e,s[p])),u.push(s[p+1]);const c=[],d=Qt.empty();for(let p=a.length-1;p>=0;--p)if(!iA(c,a[p])){const _=a[p];let S=u[p];S=Ve(S);const P=o.Su(_);if(S instanceof Vf)c.push(_);else{const C=xu(S,P);C!=null&&(c.push(_),d.set(_,C))}}const h=new mn(c);return new eA(d,h,o.fieldTransforms)}function RL(t,e,n,r=!1){return xu(n,t.Fu(r?4:3,e))}function xu(t,e){if(rA(t=Ve(t)))return Fy("Unsupported field value:",e,t),nA(t,e);if(t instanceof Oy)return function(r,i){if(!tA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=xu(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Od(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Od(i.serializer,s)}}if(r instanceof Ly)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:RS(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Df(r)}`)}(t,e)}function nA(t,e){const n={};return JI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,i)=>{const s=xu(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Ly||t instanceof Us||t instanceof Bt||t instanceof Oy)}function Fy(t,e,n){if(!rA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Df(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Dm(t,e,n){if((e=Ve(e))instanceof Lf)return e._internalPath;if(typeof e=="string")return Uy(t,e);throw Fd("Field path arguments must be of type string or ",t,!1,void 0,n)}const PL=new RegExp("[~\\*/\\[\\]]");function Uy(t,e,n){if(e.search(PL)>=0)throw Fd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lf(...e.split("."))._internalPath}catch{throw Fd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q(B.INVALID_ARGUMENT,a+t+u)}function iA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CL extends Ud{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?Uy(t,e):e instanceof Lf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jy{}class zy extends jy{}function sa(t,e,...n){let r=[];e instanceof jy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof va).length,a=s.filter(u=>u instanceof Nu).length;if(o>1||o>0&&a>0)throw new Q(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Nu extends zy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nu(e,n,r)}_apply(e){const n=this._parse(e);return aA(e._query,n),new ti(e.firestore,e.converter,Rm(e._query,n))}_parse(e){const n=Mf(e.firestore);return function(s,o,a,u,c,d,h){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ww(h,d);const _=[];for(const S of h)_.push(_w(u,s,S));p={arrayValue:{values:_}}}else p=_w(u,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ww(h,d),p=RL(a,o,h,d==="in"||d==="not-in");return ut.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mt(t,e,n){const r=e,i=Ff("where",t);return Nu._create(i,r,n)}class va extends jy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new va(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)aA(o,u),o=Rm(o,u)}(e._query,n),new ti(e.firestore,e.converter,Rm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function jd(...t){return t.forEach(e=>lA("or",e)),va._create("or",t)}function ko(...t){return t.forEach(e=>lA("and",e)),va._create("and",t)}class By extends zy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new By(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Q(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ou(s,o)}(e._query,this._field,this._direction);return new ti(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ma(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function kL(t,e="asc"){const n=e,r=Ff("orderBy",t);return By._create(r,n)}class $y extends zy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new $y(e,n,r)}_apply(e){return new ti(e.firestore,e.converter,xd(e._query,this._limit,this._limitType))}}function oA(t){return $y._create("limit",t,"F")}function _w(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new Q(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aS(e)&&n.indexOf("/")!==-1)throw new Q(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!ne.isDocumentKey(r))throw new Q(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return z0(t,new ne(r))}if(n instanceof Bt)return z0(t,n._key);throw new Q(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Df(n)}.`)}function ww(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lA(t,e){if(!(e instanceof Nu||e instanceof va))throw new Q(B.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class uA{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ly(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ru(e));default:return null}}convertTimestamp(e){const n=ji(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);be(DS(r));const i=new iu(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Qr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bL extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wy extends Ud{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ff("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hc extends Wy{data(e={}){return super.data(e)}}class cA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hc(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Hc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Hc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:xL(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){t=On(t,Bt);const e=On(t.firestore,$i);return mL(bu(e),t._key).then(n=>pA(e,t,n))}class jf extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function dA(t){t=On(t,ti);const e=On(t.firestore,$i),n=bu(e),r=new jf(e);return sA(t._query),gL(n,t._query).then(i=>new cA(e,r,t,i))}function NL(t,e,n){t=On(t,Bt);const r=On(t.firestore,$i),i=Hy(t.converter,e,n);return hA(r,[Vy(Mf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function fA(t,e){const n=On(t.firestore,$i),r=Un(t),i=Hy(t.converter,e);return hA(n,[Vy(Mf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function Cl(t,...e){var n,r,i;t=Ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||vw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(vw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,d;if(t instanceof Bt)c=On(t.firestore,$i),d=Sf(t._key.path),u={next:h=>{e[o]&&e[o](pA(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=On(t,ti);c=On(h.firestore,$i),d=h._query;const p=new jf(c);u={next:_=>{e[o]&&e[o](new cA(c,p,h,_))},error:e[o+1],complete:e[o+2]},sA(t._query)}return function(p,_,S,P){const C=new Ny(P),T=new by(_,C,S);return p.asyncQueue.enqueueAndForget(async()=>Py(await Vd(p),T)),()=>{C.$a(),p.asyncQueue.enqueueAndForget(async()=>Cy(await Vd(p),T))}}(bu(c),d,a,u)}function hA(t,e){return function(r,i){const s=new _r;return r.asyncQueue.enqueueAndForget(async()=>ZO(await hL(r),i,s)),s.promise}(bu(t),e)}function pA(t,e,n){const r=n.docs.get(e._key),i=new jf(t);return new Wy(t,i,e._key,r,new bo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const DL={maxAttempts:5};function Xa(t,e){if((t=Ve(t)).firestore!==e)throw new Q(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OL extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Mf(n)}get(n){const r=Xa(n,this._firestore),i=new bL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return se();const o=s[0];if(o.isFoundDocument())return new Ud(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ud(this._firestore,i,r._key,null,r.converter);throw se()})}set(n,r,i){const s=Xa(n,this._firestore),o=Hy(s.converter,r,i),a=Vy(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Xa(n,this._firestore);let a;return a=typeof(r=Ve(r))=="string"||r instanceof Lf?AL(this._dataReader,"Transaction.update",o._key,r,i,s):SL(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Xa(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Xa(e,this._firestore),r=new jf(this._firestore);return super.get(e).then(i=>new Wy(this._firestore,r,n._key,i._document,new bo(!1,!1),n.converter))}}function Du(t,e,n){t=On(t,$i);const r=Object.assign(Object.assign({},DL),n);return function(s){if(s.maxAttempts<1)throw new Q(B.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new _r;return s.asyncQueue.enqueueAndForget(async()=>{const c=await pL(s);new uL(s.asyncQueue,c,a,o,u).Xa()}),u.promise}(bu(t),i=>e(new OL(t,i)),r)}(function(e,n=!0){(function(i){pa=i})(Ys),nr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $i(new MN(r.getProvider("auth-internal")),new jN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new iu(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),an(V0,"4.6.4",e),an(V0,"4.6.4","esm2017")})();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const LL={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ec(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Tc(t){return t.toString().indexOf("`")===-1}Tc(t=>t``)||Tc(t=>t`\0`)||Tc(t=>t`\n`)||Tc(t=>t`\u0000`);Ec``&&Ec`\0`&&Ec`\n`&&Ec`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let mA="google#safe";function ML(){if(typeof window<"u")return window.trustedTypes}function gA(){var t;return mA!==""&&(t=ML())!==null&&t!==void 0?t:null}let Ic;function VL(){var t,e;if(Ic===void 0)try{Ic=(e=(t=gA())===null||t===void 0?void 0:t.createPolicy(mA,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Ic=null}return Ic}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class yA{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Ew(t){var e;const n=t,r=(e=VL())===null||e===void 0?void 0:e.createScriptURL(n);return r??new yA(n,LL)}function FL(t){var e;if(!((e=gA())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof yA)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function UL(t,...e){if(e.length===0)return Ew(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Ew(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function jL(t){return zL("script",t)}function zL(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function BL(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=jL(e||window);n&&t.setAttribute("nonce",n)}function $L(t,e,n){t.src=FL(e),BL(t)}const vA="@firebase/installations",qy="0.6.8";/**
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
 */const _A=1e4,wA=`w:${qy}`,EA="FIS_v2",HL="https://firebaseinstallations.googleapis.com/v1",WL=60*60*1e3,qL="installations",KL="Installations";/**
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
 */const GL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},js=new Qs(qL,KL,GL);function TA(t){return t instanceof jn&&t.code.includes("request-failed")}/**
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
 */function IA({projectId:t}){return`${HL}/projects/${t}/installations`}function SA(t){return{token:t.token,requestStatus:2,expiresIn:YL(t.expiresIn),creationTime:Date.now()}}async function AA(t,e){const r=(await e.json()).error;return js.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QL(t,{refreshToken:e}){const n=RA(t);return n.append("Authorization",XL(e)),n}async function PA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YL(t){return Number(t.replace("s","000"))}function XL(t){return`${EA} ${t}`}/**
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
 */async function JL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=IA(t),i=RA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:EA,appId:t.appId,sdkVersion:wA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await PA(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:SA(c.authToken)}}else throw await AA("Create Installation",u)}/**
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
 */function ZL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eM=/^[cdef][\w-]{21}$/,Om="";function tM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=nM(t);return eM.test(n)?n:Om}catch{return Om}}function nM(t){return ZL(t).substr(0,22)}/**
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
 */function zf(t){return`${t.appName}!${t.appId}`}/**
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
 */const kA=new Map;function bA(t,e){const n=zf(t);xA(n,e),rM(n,e)}function xA(t,e){const n=kA.get(t);if(n)for(const r of n)r(e)}function rM(t,e){const n=iM();n&&n.postMessage({key:t,fid:e}),sM()}let ys=null;function iM(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{xA(t.data.key,t.data.fid)}),ys}function sM(){kA.size===0&&ys&&(ys.close(),ys=null)}/**
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
 */const oM="firebase-installations-database",aM=1,zs="firebase-installations-store";let ep=null;function Ky(){return ep||(ep=UI(oM,aM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}})),ep}async function zd(t,e){const n=zf(t),i=(await Ky()).transaction(zs,"readwrite"),s=i.objectStore(zs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bA(t,e.fid),e}async function NA(t){const e=zf(t),r=(await Ky()).transaction(zs,"readwrite");await r.objectStore(zs).delete(e),await r.done}async function Bf(t,e){const n=zf(t),i=(await Ky()).transaction(zs,"readwrite"),s=i.objectStore(zs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bA(t,a.fid),a}/**
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
 */async function Gy(t){let e;const n=await Bf(t.appConfig,r=>{const i=lM(r),s=uM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Om?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function lM(t){const e=t||{fid:tM(),registrationStatus:0};return DA(e)}function uM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(js.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dM(t)}:{installationEntry:e}}async function cM(t,e){try{const n=await JL(t,e);return zd(t.appConfig,n)}catch(n){throw TA(n)&&n.customData.serverCode===409?await NA(t.appConfig):await zd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dM(t){let e=await Tw(t.appConfig);for(;e.registrationStatus===1;)await CA(100),e=await Tw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gy(t);return r||n}return e}function Tw(t){return Bf(t,e=>{if(!e)throw js.create("installation-not-found");return DA(e)})}function DA(t){return fM(t)?{fid:t.fid,registrationStatus:0}:t}function fM(t){return t.registrationStatus===1&&t.registrationTime+_A<Date.now()}/**
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
 */async function hM({appConfig:t,heartbeatServiceProvider:e},n){const r=pM(t,n),i=QL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await PA(()=>fetch(r,a));if(u.ok){const c=await u.json();return SA(c)}else throw await AA("Generate Auth Token",u)}function pM(t,{fid:e}){return`${IA(t)}/${e}/authTokens:generate`}/**
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
 */async function Qy(t,e=!1){let n;const r=await Bf(t.appConfig,s=>{if(!OA(s))throw js.create("not-registered");const o=s.authToken;if(!e&&yM(o))return s;if(o.requestStatus===1)return n=mM(t,e),s;{if(!navigator.onLine)throw js.create("app-offline");const a=_M(s);return n=gM(t,a),a}});return n?await n:r.authToken}async function mM(t,e){let n=await Iw(t.appConfig);for(;n.authToken.requestStatus===1;)await CA(100),n=await Iw(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qy(t,e):r}function Iw(t){return Bf(t,e=>{if(!OA(e))throw js.create("not-registered");const n=e.authToken;return wM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gM(t,e){try{const n=await hM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zd(t.appConfig,r),n}catch(n){if(TA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await NA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zd(t.appConfig,r)}throw n}}function OA(t){return t!==void 0&&t.registrationStatus===2}function yM(t){return t.requestStatus===2&&!vM(t)}function vM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+WL}function _M(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wM(t){return t.requestStatus===1&&t.requestTime+_A<Date.now()}/**
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
 */async function EM(t){const e=t,{installationEntry:n,registrationPromise:r}=await Gy(e);return r?r.catch(console.error):Qy(e).catch(console.error),n.fid}/**
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
 */async function TM(t,e=!1){const n=t;return await IM(n),(await Qy(n,e)).token}async function IM(t){const{registrationPromise:e}=await Gy(t);e&&await e}/**
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
 */function SM(t){if(!t||!t.options)throw tp("App Configuration");if(!t.name)throw tp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw tp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function tp(t){return js.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="installations",AM="installations-internal",RM=t=>{const e=t.getProvider("app").getImmediate(),n=SM(e),r=Xi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PM=t=>{const e=t.getProvider("app").getImmediate(),n=Xi(e,LA).getImmediate();return{getId:()=>EM(n),getToken:i=>TM(n,i)}};function CM(){nr(new Fn(LA,RM,"PUBLIC")),nr(new Fn(AM,PM,"PRIVATE"))}CM();an(vA,qy);an(vA,qy,"esm2017");/**
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
 */const Bd="analytics",kM="firebase_id",bM="origin",xM=60*1e3,NM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",DM="https://www.googletagmanager.com/gtag/js";/**
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
 */const _n=new Tf("@firebase/analytics");/**
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
 */function MA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OM(t,e){const n=document.createElement("script"),r=UL`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;$L(n,r),n.async=!0,document.head.appendChild(n)}function LM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function MM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await MA(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){_n.error(a)}t("config",i,s)}async function VM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await MA(n);for(const u of o){const c=a.find(h=>h.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_n.error(s)}}function FM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await VM(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await MM(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_n.error(a)}}return i}function UM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=FM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function jM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(DM)&&n.src.includes(t))return n;return null}/**
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
 */const zM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ln=new Qs("analytics","Analytics",zM);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=30,$M=1e3;class HM{constructor(e={},n=$M){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VA=new HM;function WM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:WM(r)},s=NM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Ln.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function KM(t,e=VA,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ln.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ln.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YM;return setTimeout(async()=>{a.abort()},xM),FA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function FA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VA){var s;const{appId:o,measurementId:a}=t;try{await GM(r,e)}catch(u){if(a)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await qM(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!QM(c)){if(i.deleteThrottleMetadata(o),a)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?P0(n,i.intervalMillis,BM):P0(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,h),_n.debug(`Calling attemptFetch again in ${d} millis`),FA(t,h,r,i)}}function GM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QM(t){if(!(t instanceof jn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JM(){if(LI())try{await MI()}catch(t){return _n.warn(Ln.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _n.warn(Ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZM(t,e,n,r,i,s,o){var a;const u=KM(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>_n.error(_)),e.push(u);const c=JM().then(_=>{if(_)return r.getId()}),[d,h]=await Promise.all([u,c]);jM(s)||OM(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[bM]="firebase",p.update=!0,h!=null&&(p[kM]=h),i("config",d.measurementId,p),d.measurementId}/**
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
 */class e4{constructor(e){this.app=e}_delete(){return delete kl[this.app.options.appId],Promise.resolve()}}let kl={},Sw=[];const Aw={};let np="dataLayer",t4="gtag",Rw,UA,Pw=!1;function n4(){const t=[];if(OI()&&t.push("This is a browser extension environment."),y2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ln.create("invalid-analytics-context",{errorInfo:e});_n.warn(n.message)}}function r4(t,e,n){n4();const r=t.options.appId;if(!r)throw Ln.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ln.create("no-api-key");if(kl[r]!=null)throw Ln.create("already-exists",{id:r});if(!Pw){LM(np);const{wrappedGtag:s,gtagCore:o}=UM(kl,Sw,Aw,np,t4);UA=s,Rw=o,Pw=!0}return kl[r]=ZM(t,Sw,Aw,e,Rw,np,n),new e4(t)}function i4(t=If()){t=Ve(t);const e=Xi(t,Bd);return e.isInitialized()?e.getImmediate():s4(t)}function s4(t,e={}){const n=Xi(t,Bd);if(n.isInitialized()){const i=n.getImmediate();if(eu(e,n.getOptions()))return i;throw Ln.create("already-initialized")}return n.initialize({options:e})}function o4(t,e,n,r){t=Ve(t),XM(UA,kl[t.app.options.appId],e,n,r).catch(i=>_n.error(i))}const Cw="@firebase/analytics",kw="0.10.6";function a4(){nr(new Fn(Bd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return r4(r,i,n)},"PUBLIC")),nr(new Fn("analytics-internal",t,"PRIVATE")),an(Cw,kw),an(Cw,kw,"esm2017");function t(e){try{const n=e.getProvider(Bd).getImmediate();return{logEvent:(r,i,s)=>o4(n,r,i,s)}}catch(n){throw Ln.create("interop-component-reg-failed",{reason:n})}}}a4();var l4="firebase",u4="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(l4,u4,"app");function Yy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c4=jA,zA=new Qs("auth","Firebase",jA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Tf("@firebase/auth");function d4(t,...e){$d.logLevel<=ye.WARN&&$d.warn(`Auth (${Ys}): ${t}`,...e)}function Wc(t,...e){$d.logLevel<=ye.ERROR&&$d.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,...e){throw Jy(t,...e)}function er(t,...e){return Jy(t,...e)}function Xy(t,e,n){const r=Object.assign(Object.assign({},c4()),{[e]:n});return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function Ss(t){return Xy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function f4(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ir(t,"argument-error"),Xy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zA.create(t,...e)}function le(t,e,...n){if(!t)throw Jy(e,...n)}function Ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wc(e),new Error(e)}function Xr(t,e){t||Ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h4(){return bw()==="http:"||bw()==="https:"}function bw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h4()||OI()||"connection"in navigator)?navigator.onLine:!0}function m4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xr(n>e,"Short delay should be less than long delay!"),this.isMobile=f2()||p2()}get(){return p4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=new Ou(3e4,6e4);function ev(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _a(t,e,n,r,i={}){return $A(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Tu(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),BA.fetch()(HA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function $A(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g4),e);try{const i=new _4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sc(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xy(t,d,c);Ir(t,d)}}catch(i){if(i instanceof jn)throw i;Ir(t,"network-request-failed",{message:String(i)})}}async function v4(t,e,n,r,i={}){const s=await _a(t,e,n,r,i);return"mfaPendingCredential"in s&&Ir(t,"multi-factor-auth-required",{_serverResponse:s}),s}function HA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zy(t.config,i):`${t.config.apiScheme}://${i}`}class _4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),y4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w4(t,e){return _a(t,"POST","/v1/accounts:delete",e)}async function WA(t,e){return _a(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E4(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=tv(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bl(rp(i.auth_time)),issuedAtTime:bl(rp(i.iat)),expirationTime:bl(rp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rp(t){return Number(t)*1e3}function tv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=CI(n);return i?JSON.parse(i):(Wc("Failed to decode base64 JWT payload"),null)}catch(i){return Wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xw(t){const e=tv(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&T4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function T4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await uu(t,WA(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qA(s.providerUserInfo):[],a=A4(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function S4(t){const e=Ve(t);await Hd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qA(t){return t.map(e=>{var{providerId:n}=e,r=Yy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R4(t,e){const n=await $A(t,{},async()=>{const r=Tu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=HA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function P4(t,e){return _a(t,"POST","/v2/accounts:revokeToken",ev(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=xw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jo;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return Ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await uu(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return E4(this,e)}reload(){return S4(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fr(this.auth.app))return Promise.reject(Ss(this.auth));const e=await this.getIdToken();return await uu(this,w4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:N,isAnonymous:U,providerData:k,stsTokenManager:E}=n;le(I&&E,e,"internal-error");const g=jo.fromJSON(this.name,E);le(typeof I=="string",e,"internal-error"),ci(h,e.name),ci(p,e.name),le(typeof N=="boolean",e,"internal-error"),le(typeof U=="boolean",e,"internal-error"),ci(_,e.name),ci(S,e.name),ci(P,e.name),ci(C,e.name),ci(T,e.name),ci(y,e.name);const w=new jr({uid:I,auth:e,email:p,emailVerified:N,displayName:h,isAnonymous:U,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:g,createdAt:T,lastLoginAt:y});return k&&Array.isArray(k)&&(w.providerData=k.map(A=>Object.assign({},A))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new jo;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];le(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new jo;a.updateFromIdToken(r);const u=new jr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new Map;function zr(t){Xr(t instanceof Function,"Expected a class definition");let e=Nw.get(t);return e?(Xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nw.set(t,e),e)}/**
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
 */function qc(t,e,n){return`firebase:${t}:${e}:${n}`}class zo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qc(this.userKey,i.apiKey,s),this.fullPersistenceKey=qc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zo(zr(Dw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zr(Dw);const o=qc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=jr._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new zo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JA(e))return"Blackberry";if(ZA(e))return"Webos";if(nv(e))return"Safari";if((e.includes("chrome/")||QA(e))&&!e.includes("edge/"))return"Chrome";if(XA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GA(t=Nt()){return/firefox\//i.test(t)}function nv(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QA(t=Nt()){return/crios\//i.test(t)}function YA(t=Nt()){return/iemobile/i.test(t)}function XA(t=Nt()){return/android/i.test(t)}function JA(t=Nt()){return/blackberry/i.test(t)}function ZA(t=Nt()){return/webos/i.test(t)}function $f(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function C4(t=Nt()){var e;return $f(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k4(){return m2()&&document.documentMode===10}function eR(t=Nt()){return $f(t)||XA(t)||ZA(t)||JA(t)||/windows phone/i.test(t)||YA(t)}function b4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class x4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function N4(t,e={}){return _a(t,"GET","/v2/passwordPolicy",ev(t,e))}/**
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
 */const D4=6;class O4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lw(this),this.idTokenSubscription=new Lw(this),this.beforeStateQueue=new x4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await WA(this,{idToken:e}),r=await jr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fr(this.app))return Promise.reject(Ss(this));const n=e?Ve(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fr(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fr(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N4(this),n=new O4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await P4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[zr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hf(t){return Ve(t)}class Lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=T2(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M4(t){rv=t}function V4(t){return rv.loadJS(t)}function F4(){return rv.gapiScript}function U4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(t,e){const n=Xi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(eu(s,e??{}))return i;Ir(i,"already-initialized")}return n.initialize({options:e})}function z4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function B4(t,e,n){const r=Hf(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nR(e),{host:o,port:a}=$4(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),H4()}function nR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $4(t){const e=nR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mw(o)}}}function Mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function H4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ur("not implemented")}_getIdTokenResponse(e){return Ur("not implemented")}_linkToIdToken(e,n){return Ur("not implemented")}_getReauthenticationResolver(e){return Ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e){return v4(t,"POST","/v1/accounts:signInWithIdp",ev(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="http://localhost";class Bs extends rR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bo(e,n)}buildRequest(){const e={requestUri:W4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lu extends iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Lu{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Lu{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Lu{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _i.credential(n,r)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=Vw(r);return new oa({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vw(r);return new oa({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wd(e,n,r,i)}}function iR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wd._fromErrorAndOperation(t,s,e,r):s})}async function q4(t,e,n=!1){const r=await uu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oa._forOperation(t,"link",r)}/**
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
 */async function K4(t,e,n=!1){const{auth:r}=t;if(Fr(r.app))return Promise.reject(Ss(r));const i="reauthenticate";try{const s=await uu(t,iR(r,i,e,t),n);le(s.idToken,r,"internal-error");const o=tv(s.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),oa._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ir(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4(t,e,n=!1){if(Fr(t.app))return Promise.reject(Ss(t));const r="signIn",i=await iR(t,r,e),s=await oa._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Q4(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function Y4(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function X4(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function J4(t){return Ve(t).signOut()}const qd="__sak";/**
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
 */class sR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qd,"1"),this.storage.removeItem(qd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(){const t=Nt();return nv(t)||$f(t)}const eV=1e3,tV=10;class oR extends sR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z4()&&b4(),this.fallbackToPolling=eR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);k4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oR.type="LOCAL";const nV=oR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function rV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await rV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=sv("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return window}function sV(t){Er().location.href=t}/**
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
 */function uR(){return typeof Er().WorkerGlobalScope<"u"&&typeof Er().importScripts=="function"}async function oV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lV(){return uR()?self:null}/**
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
 */const cR="firebaseLocalStorageDb",uV=1,Kd="firebaseLocalStorage",dR="fbase_key";class Mu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qf(t,e){return t.transaction([Kd],e?"readwrite":"readonly").objectStore(Kd)}function cV(){const t=indexedDB.deleteDatabase(cR);return new Mu(t).toPromise()}function Vm(){const t=indexedDB.open(cR,uV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kd,{keyPath:dR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kd)?e(r):(r.close(),await cV(),e(await Vm()))})})}async function Fw(t,e,n){const r=qf(t,!0).put({[dR]:e,value:n});return new Mu(r).toPromise()}async function dV(t,e){const n=qf(t,!1).get(e),r=await new Mu(n).toPromise();return r===void 0?null:r.value}function Uw(t,e){const n=qf(t,!0).delete(e);return new Mu(n).toPromise()}const fV=800,hV=3;class fR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wf._getInstance(lV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oV(),!this.activeServiceWorker)return;this.sender=new iV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await Fw(e,qd,"1"),await Uw(e,qd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qf(i,!1).getAll();return new Mu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fR.type="LOCAL";const pV=fR;new Ou(3e4,6e4);/**
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
 */function hR(t,e){return e?zr(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ov extends rR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mV(t){return G4(t.auth,new ov(t),t.bypassAuthState)}function gV(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),K4(n,new ov(t),t.bypassAuthState)}async function yV(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),q4(n,new ov(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mV;case"linkViaPopup":case"linkViaRedirect":return yV;case"reauthViaPopup":case"reauthViaRedirect":return gV;default:Ir(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=new Ou(2e3,1e4);async function _V(t,e,n){if(Fr(t.app))return Promise.reject(er(t,"operation-not-supported-in-this-environment"));const r=Hf(t);f4(t,e,iv);const i=hR(r,n);return new vs(r,"signInViaPopup",e,i).executeNotNull()}class vs extends pR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=sv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vV.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV="pendingRedirect",Kc=new Map;class EV extends pR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kc.get(this.auth._key());if(!e){try{const r=await TV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kc.set(this.auth._key(),e)}return this.bypassAuthState||Kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TV(t,e){const n=AV(e),r=SV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IV(t,e){Kc.set(t._key(),e)}function SV(t){return zr(t._redirectPersistence)}function AV(t){return qc(wV,t.config.apiKey,t.name)}async function RV(t,e,n=!1){if(Fr(t.app))return Promise.reject(Ss(t));const r=Hf(t),i=hR(r,e),o=await new EV(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV=10*60*1e3;class CV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PV&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bV(t,e={}){return _a(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NV=/^https?/;async function DV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bV(t);for(const n of e)try{if(OV(n))return}catch{}Ir(t,"unauthorized-domain")}function OV(t){const e=Lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NV.test(n))return!1;if(xV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LV=new Ou(3e4,6e4);function zw(){const t=Er().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MV(t){return new Promise((e,n)=>{var r,i,s;function o(){zw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zw(),n(er(t,"network-request-failed"))},timeout:LV.get()})}if(!((i=(r=Er().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Er().gapi)===null||s===void 0)&&s.load)o();else{const a=U4("iframefcb");return Er()[a]=()=>{gapi.load?o():n(er(t,"network-request-failed"))},V4(`${F4()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function VV(t){return Gc=Gc||MV(t),Gc}/**
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
 */const FV=new Ou(5e3,15e3),UV="__/auth/iframe",jV="emulator/auth/iframe",zV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $V(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zy(e,jV):`https://${t.config.authDomain}/${UV}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},i=BV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Tu(r).slice(1)}`}async function HV(t){const e=await VV(t),n=Er().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:$V(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=er(t,"network-request-failed"),a=Er().setTimeout(()=>{s(o)},FV.get());function u(){Er().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const WV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qV=500,KV=600,GV="_blank",QV="http://localhost";class Bw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YV(t,e,n,r=qV,i=KV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},WV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Nt().toLowerCase();n&&(a=QA(c)?GV:n),GA(c)&&(e=e||QV,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(C4(c)&&a!=="_self")return XV(e||"",a),new Bw(null);const h=window.open(e||"",a,d);le(h,t,"popup-blocked");try{h.focus()}catch{}return new Bw(h)}function XV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JV="__/auth/handler",ZV="emulator/auth/handler",eF=encodeURIComponent("fac");async function $w(t,e,n,r,i,s){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:i};if(e instanceof iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",E2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Lu){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${eF}=${encodeURIComponent(u)}`:"";return`${tF(t)}?${Tu(a).slice(1)}${c}`}function tF({config:t}){return t.emulator?Zy(t,ZV):`https://${t.authDomain}/${JV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="webStorageSupport";class nF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lR,this._completeRedirectFn=RV,this._overrideRedirectResult=IV}async _openPopup(e,n,r,i){var s;Xr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $w(e,n,r,Lm(),i);return YV(e,o,sv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $w(e,n,r,Lm(),i);return sV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HV(e),r=new CV(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ip,{type:ip},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ip];o!==void 0&&n(!!o),Ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eR()||nv()||$f()}}const rF=nF;var Hw="@firebase/auth",Ww="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oF(t){nr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tR(t)},c=new L4(r,i,s,u);return z4(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nr(new Fn("auth-internal",e=>{const n=Hf(e.getProvider("auth").getImmediate());return(r=>new iF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Hw,Ww,sF(t)),an(Hw,Ww,"esm2017")}/**
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
 */const aF=5*60,lF=NI("authIdTokenMaxAge")||aF;let qw=null;const uF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lF)return;const i=n==null?void 0:n.token;qw!==i&&(qw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gR(t=If()){const e=Xi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=j4(t,{popupRedirectResolver:rF,persistence:[pV,nV,lR]}),r=NI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=uF(s.toString());Y4(n,o,()=>o(n.currentUser)),Q4(n,a=>o(a))}}const i=kI("auth");return i&&B4(n,`http://${i}`),n}function cF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}M4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=er("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oF("Browser");/**
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
 */const yR="firebasestorage.googleapis.com",vR="storageBucket",dF=2*60*1e3,fF=10*60*1e3;/**
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
 */class nt extends jn{constructor(e,n,r=0){super(sp(e),`Firebase Storage: ${n} (${sp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function sp(t){return"storage/"+t}function av(){const t="An unknown error occurred, please check the error payload for server response.";return new nt(tt.UNKNOWN,t)}function hF(t){return new nt(tt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pF(t){return new nt(tt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(tt.UNAUTHENTICATED,t)}function gF(){return new nt(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yF(t){return new nt(tt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vF(){return new nt(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _F(){return new nt(tt.CANCELED,"User canceled the upload/download.")}function wF(t){return new nt(tt.INVALID_URL,"Invalid URL '"+t+"'.")}function EF(t){return new nt(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function TF(){return new nt(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vR+"' property when initializing the app?")}function IF(){return new nt(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SF(){return new nt(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function AF(t){return new nt(tt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fm(t){return new nt(tt.INVALID_ARGUMENT,t)}function _R(){return new nt(tt.APP_DELETED,"The Firebase app was deleted.")}function RF(t){return new nt(tt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xl(t,e){return new nt(tt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ja(t){throw new nt(tt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw EF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${d}/b/${i}/o${p}`,"i"),S={bucket:1,path:3},P=n===yR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",T=new RegExp(`^https?://${P}/${i}/${C}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:_,indices:S,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<I.length;N++){const U=I[N],k=U.regex.exec(e);if(k){const E=k[U.indices.bucket];let g=k[U.indices.path];g||(g=""),r=new gn(E,g),U.postModify(r);break}}if(r==null)throw wF(e);return r}}class PF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function CF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function h(C){i=setTimeout(()=>{i=null,t(_,u())},C)}function p(){s&&clearTimeout(s)}function _(C,...T){if(c){p();return}if(C){p(),d.call(null,C,...T);return}if(u()||o){p(),d.call(null,C,...T);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let S=!1;function P(C){S||(S=!0,p(),!c&&(i!==null?(C||(a=2),clearTimeout(i),h(0)):C||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function kF(t){t(!1)}/**
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
 */function bF(t){return t!==void 0}function xF(t){return typeof t=="object"&&!Array.isArray(t)}function lv(t){return typeof t=="string"||t instanceof String}function Kw(t){return uv()&&t instanceof Blob}function uv(){return typeof Blob<"u"}function Gw(t,e,n,r){if(r<e)throw Fm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Kf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function NF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class DF{constructor(e,n,r,i,s,o,a,u,c,d,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ac(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===As.NO_ERROR,u=s.getStatus();if(!a||NF(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===As.ABORT;r(!1,new Ac(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ac(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());bF(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=av();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?_R():_F();o(u)}else{const u=vF();o(u)}};this.canceled_?n(!1,new Ac(!1,null,!0)):this.backoffId_=CF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function OF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function MF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FF(t,e,n,r,i,s,o=!0){const a=wR(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return MF(c,e),OF(c,n),LF(c,s),VF(c,r),new DF(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function UF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jF(...t){const e=UF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(uv())return new Blob(t);throw new nt(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function BF(t){if(typeof atob>"u")throw AF("base-64");return atob(t)}/**
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
 */const hr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class op{constructor(e,n){this.data=e,this.contentType=n||null}}function $F(t,e){switch(t){case hr.RAW:return new op(ER(e));case hr.BASE64:case hr.BASE64URL:return new op(TR(t,e));case hr.DATA_URL:return new op(WF(e),qF(e))}throw av()}function ER(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function HF(t){let e;try{e=decodeURIComponent(t)}catch{throw xl(hr.DATA_URL,"Malformed data URL.")}return ER(e)}function TR(t,e){switch(t){case hr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw xl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case hr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw xl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BF(e)}catch(i){throw i.message.includes("polyfill")?i:xl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class IR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xl(hr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=KF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function WF(t){const e=new IR(t);return e.base64?TR(hr.BASE64,e.rest):HF(e.rest)}function qF(t){return new IR(t).contentType}function KF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class wi{constructor(e,n){let r=0,i="";Kw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kw(this.data_)){const r=this.data_,i=zF(r,e,n);return i===null?null:new wi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wi(r,!0)}}static getBlob(...e){if(uv()){const n=e.map(r=>r instanceof wi?r.data_:r);return new wi(jF.apply(null,n))}else{const n=e.map(o=>lv(o)?$F(hr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new wi(i,!0)}}uploadData(){return this.data_}}/**
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
 */function SR(t){let e;try{e=JSON.parse(t)}catch{return null}return xF(e)?e:null}/**
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
 */function GF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function YF(t,e){return e}class qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YF}}let Rc=null;function XF(t){return!lv(t)||t.length<2?t:AR(t)}function RR(){if(Rc)return Rc;const t=[];t.push(new qt("bucket")),t.push(new qt("generation")),t.push(new qt("metageneration")),t.push(new qt("name","fullPath",!0));function e(s,o){return XF(o)}const n=new qt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new qt("size");return i.xform=r,t.push(i),t.push(new qt("timeCreated")),t.push(new qt("updated")),t.push(new qt("md5Hash",null,!0)),t.push(new qt("cacheControl",null,!0)),t.push(new qt("contentDisposition",null,!0)),t.push(new qt("contentEncoding",null,!0)),t.push(new qt("contentLanguage",null,!0)),t.push(new qt("contentType",null,!0)),t.push(new qt("metadata","customMetadata",!0)),Rc=t,Rc}function JF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new gn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ZF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return JF(r,t),r}function PR(t,e,n){const r=SR(e);return r===null?null:ZF(t,r,n)}function e3(t,e,n,r){const i=SR(e);if(i===null||!lv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,h=t.fullPath,p="/b/"+o(d)+"/o/"+o(h),_=Kf(p,n,r),S=wR({alt:"media",token:c});return _+S})[0]}function t3(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function CR(t){if(!t)throw av()}function n3(t,e){function n(r,i){const s=PR(t,i,e);return CR(s!==null),s}return n}function r3(t,e){function n(r,i){const s=PR(t,i,e);return CR(s!==null),e3(s,i,t.host,t._protocol)}return n}function kR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=gF():i=mF():n.getStatus()===402?i=pF(t.bucket):n.getStatus()===403?i=yF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function bR(t){const e=kR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=hF(t.path)),s.serverResponse=i.serverResponse,s}return n}function i3(t,e,n){const r=e.fullServerUrl(),i=Kf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new cv(i,s,r3(t,n),o);return a.errorHandler=bR(e),a}function s3(t,e){const n=e.fullServerUrl(),r=Kf(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const a=new cv(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=bR(e),a}function o3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function a3(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=o3(null,e)),r}function l3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let N=0;N<2;N++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=a3(e,r,i),d=t3(c,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",_=wi.getBlob(h,r,p);if(_===null)throw IF();const S={name:c.fullPath},P=Kf(s,t.host,t._protocol),C="POST",T=t.maxUploadRetryTime,y=new cv(P,C,n3(t,n),T);return y.urlParams=S,y.headers=o,y.body=_.uploadData(),y.errorHandler=kR(e),y}class u3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class c3 extends u3{initXhr(){this.xhr_.responseType="text"}}function dv(){return new c3}/**
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
 */class $s{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $s(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AR(this._location.path)}get storage(){return this._service}get parent(){const e=GF(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new $s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RF(e)}}function d3(t,e,n){t._throwIfRoot("uploadBytes");const r=l3(t.storage,t._location,RR(),new wi(e,!0),n);return t.storage.makeRequestWithTokens(r,dv).then(i=>({metadata:i,ref:t}))}function f3(t){t._throwIfRoot("getDownloadURL");const e=i3(t.storage,t._location,RR());return t.storage.makeRequestWithTokens(e,dv).then(n=>{if(n===null)throw SF();return n})}function h3(t){t._throwIfRoot("deleteObject");const e=s3(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dv)}function p3(t,e){const n=QF(t._location.path,e),r=new gn(t._location.bucket,n);return new $s(t.storage,r)}/**
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
 */function m3(t){return/^[A-Za-z]+:\/\//.test(t)}function g3(t,e){return new $s(t,e)}function xR(t,e){if(t instanceof fv){const n=t;if(n._bucket==null)throw TF();const r=new $s(n,n._bucket);return e!=null?xR(r,e):r}else return e!==void 0?p3(t,e):t}function y3(t,e){if(e&&m3(e)){if(t instanceof fv)return g3(t,e);throw Fm("To use ref(service, url), the first argument must be a Storage instance.")}else return xR(t,e)}function Qw(t,e){const n=e==null?void 0:e[vR];return n==null?null:gn.makeFromBucketSpec(n,t)}function v3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:DI(i,t.app.options.projectId))}class fv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dF,this._maxUploadRetryTime=fF,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=Qw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=Qw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new PF(_R());{const o=FF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Yw="@firebase/storage",Xw="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="storage";function _3(t,e,n){return t=Ve(t),d3(t,e,n)}function w3(t){return t=Ve(t),f3(t)}function E3(t){return t=Ve(t),h3(t)}function DR(t,e){return t=Ve(t),y3(t,e)}function T3(t=If(),e){t=Ve(t);const r=Xi(t,NR).getImmediate({identifier:e}),i=bI("storage");return i&&I3(r,...i),r}function I3(t,e,n,r={}){v3(t,e,n,r)}function S3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new fv(n,r,i,e,Ys)}function A3(){nr(new Fn(NR,S3,"PUBLIC").setMultipleInstances(!0)),an(Yw,Xw,""),an(Yw,Xw,"esm2017")}A3();const R3={apiKey:"AIzaSyA-ZVvpX59JoXz0YCzLeJDYJ0pfqMbUAR8",authDomain:"chatix-7cbc9.firebaseapp.com",projectId:"chatix-7cbc9",storageBucket:"chatix-7cbc9.appspot.com",messagingSenderId:"464320428421",appId:"1:464320428421:web:27071bcca88824e4deecec"},Gf=jI(R3),We=wL(Gf),OR=gR(Gf);i4(Gf);const LR=T3(Gf);function MR(t){const e=t.split("?")[0].split(".");return e[e.length-1]}const P3={data:null,profile:null,status:"loading"},VR=Eu("user/getUserProfile",async t=>{const e=Un(We,"profile",t);return{...(await Uf(e)).data()}}),FR=Eu("user/changeUserProfile",async({userEmail:t,name:e,biography:n,profileImage:r,defaultProfileUrl:i})=>{let s=i;if(r){const o=DR(LR,`profiles/${t}.${MR(r.name)}`);await _3(o,r),s=await w3(o)}return await Du(We,async o=>{o.update(Un(We,"profile",t),s?{name:e,biography:n,photoUrl:s}:{name:e,biography:n})}),{name:e,biography:n,photoUrl:s}}),UR=Eu("user/deleteProfileImage",async({userEmail:t,profileUrl:e})=>{const n=DR(LR,`profiles/${t}.${MR(e)}`);await E3(n),await Du(We,async r=>{r.update(Un(We,"profile",t),{photoUrl:""})})}),hv=AI({name:"user",initialState:P3,reducers:{changeUserData:(t,e)=>{t.data=e.payload},changeUserStatus:(t,e)=>{t.status=e.payload}},extraReducers(t){t.addCase(VR.fulfilled,(e,n)=>{e.profile=n.payload}),t.addCase(FR.fulfilled,(e,n)=>{e.profile&&(e.profile={...e.profile,...n.payload})}),t.addCase(UR.fulfilled,({profile:e})=>{e&&(e.photoUrl="")})}}),C3=hv.reducer,k3=hv.actions.changeUserData,b3=hv.actions.changeUserStatus;async function jR(t,e){const n=sa(Bi(We,"chat_message"),mt("from","==",t),mt("to","==",e),mt("seen","==",!1));return(await dA(n)).size}async function zR(t){const e=Un(We,"profile",t),n=await Uf(e);return n.exists()?{...n.data(),email:n.id}:null}const x3={list:[],status:"loading"},BR=Eu("chats/getChats",async t=>{let e=[];const n=sa(Bi(We,"chat_room"),jd(mt("user_1","==",t),mt("user_2","==",t)));return dA(n).then(async r=>{for(let i=0;i<r.size;i++){const s=r.docs[i].data(),o=t===s.user_1?s.user_2:s.user_1,a=await jR(o,t),u=await zR(o);e=[...e,{...u,notSeenedMessages:a}]}}).then(()=>e)}),$R=Eu("chats/addChat",async({user_1:t,user_2:e})=>{const n=await jR(e,t);return{...await zR(e),notSeenedMessages:n}}),HR=AI({name:"chats",initialState:x3,reducers:{changeChatsStatus(t,e){t.status=e.payload}},extraReducers(t){t.addCase(BR.fulfilled,(e,n)=>{e.list=n.payload,e.status="success"}),t.addCase($R.fulfilled,(e,{payload:n})=>{e.list=[...e.list,{...n}]})}}),N3=HR.reducer,D3=HR.actions.changeChatsStatus,O3=Fx({reducer:{user:C3,chats:N3}});function WR(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=WR(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function L3(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=WR(t))&&(r&&(r+=" "),r+=e);return r}const Jw=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Zw=L3,qR=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Zw(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=e,o=Object.keys(i).map(c=>{const d=n==null?void 0:n[c],h=s==null?void 0:s[c];if(d===null)return null;const p=Jw(d)||Jw(h);return i[c][p]}),a=n&&Object.entries(n).reduce((c,d)=>{let[h,p]=d;return p===void 0||(c[h]=p),c},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:h,className:p,..._}=d;return Object.entries(_).every(S=>{let[P,C]=S;return Array.isArray(C)?C.includes({...s,...a}[P]):{...s,...a}[P]===C})?[...c,h,p]:c},[]);return Zw(t,o,u,n==null?void 0:n.class,n==null?void 0:n.className)},Xn=qR("text-center flex items-center justify-center font-medium rounded-lg transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50",{variants:{intent:{default:"bg-white text-black border hover:bg-base/50",dark:"bg-black/90 text-white/90 hover:bg-black/85",danger:"bg-red-500 text-white hover:bg-red-500/85"},size:{medium:"text-sm px-4 py-2",large:"py-3 text-sm"}},defaultVariants:{intent:"default",size:"medium"}}),eE=()=>{};let pv={},KR={},GR=null,QR={mark:eE,measure:eE};try{typeof window<"u"&&(pv=window),typeof document<"u"&&(KR=document),typeof MutationObserver<"u"&&(GR=MutationObserver),typeof performance<"u"&&(QR=performance)}catch{}const{userAgent:tE=""}=pv.navigator||{},Hi=pv,Be=KR,nE=GR,Pc=QR;Hi.document;const ni=!!Be.documentElement&&!!Be.head&&typeof Be.addEventListener=="function"&&typeof Be.createElement=="function",YR=~tE.indexOf("MSIE")||~tE.indexOf("Trident/");var qe="classic",XR="duotone",wn="sharp",En="sharp-duotone",M3=[qe,XR,wn,En],V3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},rE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},F3=["kit"],U3=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,j3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,z3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},B3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},$3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},H3={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},W3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},q3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},JR={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},K3=["solid","regular","light","thin","duotone","brands"],ZR=[1,2,3,4,5,6,7,8,9,10],G3=ZR.concat([11,12,13,14,15,16,17,18,19,20]),cl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Q3=[...Object.keys(H3),...K3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",cl.GROUP,cl.SWAP_OPACITY,cl.PRIMARY,cl.SECONDARY].concat(ZR.map(t=>"".concat(t,"x"))).concat(G3.map(t=>"w-".concat(t))),Y3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},X3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},J3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},iE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Jr="___FONT_AWESOME___",Um=16,eP="fa",tP="svg-inline--fa",Hs="data-fa-i2svg",jm="data-fa-pseudo-element",Z3="data-fa-pseudo-element-pending",mv="data-prefix",gv="data-icon",sE="fontawesome-i2svg",eU="async",tU=["HTML","HEAD","STYLE","SCRIPT"],nP=(()=>{try{return!0}catch{return!1}})(),rP=[qe,wn,En];function Vu(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[qe]}})}const iP={...JR};iP[qe]={...JR[qe],...rE.kit,...rE["kit-duotone"]};const Rs=Vu(iP),zm={...q3};zm[qe]={...zm[qe],...iE.kit,...iE["kit-duotone"]};const cu=Vu(zm),Bm={...W3};Bm[qe]={...Bm[qe],...J3.kit};const Ps=Vu(Bm),$m={...$3};$m[qe]={...$m[qe],...X3.kit};const nU=Vu($m),rU=U3,sP="fa-layers-text",iU=j3,sU={...V3};Vu(sU);const oU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ap=cl,aa=new Set;Object.keys(cu[qe]).map(aa.add.bind(aa));Object.keys(cu[wn]).map(aa.add.bind(aa));Object.keys(cu[En]).map(aa.add.bind(aa));const aU=[...F3,...Q3],Nl=Hi.FontAwesomeConfig||{};function lU(t){var e=Be.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Be&&typeof Be.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=uU(lU(n));i!=null&&(Nl[r]=i)});const oP={styleDefault:"solid",familyDefault:"classic",cssPrefix:eP,replacementClass:tP,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Nl.familyPrefix&&(Nl.cssPrefix=Nl.familyPrefix);const la={...oP,...Nl};la.autoReplaceSvg||(la.observeMutations=!1);const J={};Object.keys(oP).forEach(t=>{Object.defineProperty(J,t,{enumerable:!0,set:function(e){la[t]=e,Dl.forEach(n=>n(J))},get:function(){return la[t]}})});Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(t){la.cssPrefix=t,Dl.forEach(e=>e(J))},get:function(){return la.cssPrefix}});Hi.FontAwesomeConfig=J;const Dl=[];function cU(t){return Dl.push(t),()=>{Dl.splice(Dl.indexOf(t),1)}}const di=Um,pr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dU(t){if(!t||!ni)return;const e=Be.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Be.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Be.head.insertBefore(e,r),t}const fU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function du(){let t=12,e="";for(;t-- >0;)e+=fU[Math.random()*62|0];return e}function wa(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yv(t){return t.classList?wa(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function aP(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hU(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(aP(t[n]),'" '),"").trim()}function Qf(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function vv(t){return t.size!==pr.size||t.x!==pr.x||t.y!==pr.y||t.rotate!==pr.rotate||t.flipX||t.flipY}function pU(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function mU(t){let{transform:e,width:n=Um,height:r=Um,startCentered:i=!1}=t,s="";return i&&YR?s+="translate(".concat(e.x/di-n/2,"em, ").concat(e.y/di-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/di,"em), calc(-50% + ").concat(e.y/di,"em)) "):s+="translate(".concat(e.x/di,"em, ").concat(e.y/di,"em) "),s+="scale(".concat(e.size/di*(e.flipX?-1:1),", ").concat(e.size/di*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var gU=`:root, :host {
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
}`;function lP(){const t=eP,e=tP,n=J.cssPrefix,r=J.replacementClass;let i=gU;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let oE=!1;function lp(){J.autoAddCss&&!oE&&(dU(lP()),oE=!0)}var yU={mixout(){return{dom:{css:lP,insertCss:lp}}},hooks(){return{beforeDOMElementCreation(){lp()},beforeI2svg(){lp()}}}};const Zr=Hi||{};Zr[Jr]||(Zr[Jr]={});Zr[Jr].styles||(Zr[Jr].styles={});Zr[Jr].hooks||(Zr[Jr].hooks={});Zr[Jr].shims||(Zr[Jr].shims=[]);var mr=Zr[Jr];const uP=[],cP=function(){Be.removeEventListener("DOMContentLoaded",cP),Gd=1,uP.map(t=>t())};let Gd=!1;ni&&(Gd=(Be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Be.readyState),Gd||Be.addEventListener("DOMContentLoaded",cP));function vU(t){ni&&(Gd?setTimeout(t,0):uP.push(t))}function Fu(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?aP(t):"<".concat(e," ").concat(hU(n),">").concat(r.map(Fu).join(""),"</").concat(e,">")}function aE(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var up=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function _U(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hm(t){const e=_U(t);return e.length===1?e[0].toString(16):null}function wU(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function lE(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=lE(e);typeof mr.hooks.addPack=="function"&&!r?mr.hooks.addPack(t,lE(e)):mr.styles[t]={...mr.styles[t]||{},...i},t==="fas"&&Wm("fa",e)}const{styles:ds,shims:EU}=mr,TU={[qe]:Object.values(Ps[qe]),[wn]:Object.values(Ps[wn]),[En]:Object.values(Ps[En])};let _v=null,dP={},fP={},hP={},pP={},mP={};const IU={[qe]:Object.keys(Rs[qe]),[wn]:Object.keys(Rs[wn]),[En]:Object.keys(Rs[En])};function SU(t){return~aU.indexOf(t)}function AU(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!SU(i)?i:null}const gP=()=>{const t=r=>up(ds,(i,s,o)=>(i[o]=up(s,r,{}),i),{});dP=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),fP=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),mP=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in ds||J.autoFetchSvg,n=up(EU,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});hP=n.names,pP=n.unicodes,_v=Yf(J.styleDefault,{family:J.familyDefault})};cU(t=>{_v=Yf(t.styleDefault,{family:J.familyDefault})});gP();function wv(t,e){return(dP[t]||{})[e]}function RU(t,e){return(fP[t]||{})[e]}function Si(t,e){return(mP[t]||{})[e]}function yP(t){return hP[t]||{prefix:null,iconName:null}}function PU(t){const e=pP[t],n=wv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wi(){return _v}const Ev=()=>({prefix:null,iconName:null,rest:[]});function Yf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=qe}=e,r=Rs[n][t],i=cu[n][t]||cu[n][r],s=t in mr.styles?t:null;return i||s||null}const CU={[qe]:Object.keys(Ps[qe]),[wn]:Object.keys(Ps[wn]),[En]:Object.keys(Ps[En])};function Xf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[qe]:"".concat(J.cssPrefix,"-").concat(qe),[wn]:"".concat(J.cssPrefix,"-").concat(wn),[En]:"".concat(J.cssPrefix,"-").concat(En)};let i=null,s=qe;const o=M3.filter(u=>u!==XR);o.forEach(u=>{(t.includes(r[u])||t.some(c=>CU[u].includes(c)))&&(s=u)});const a=t.reduce((u,c)=>{const d=AU(J.cssPrefix,c);if(ds[c]?(c=TU[s].includes(c)?nU[s][c]:c,i=c,u.prefix=c):IU[s].indexOf(c)>-1?(i=c,u.prefix=Yf(c,{family:s})):d?u.iconName=d:c!==J.replacementClass&&!o.some(h=>c===r[h])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const h=i==="fa"?yP(u.iconName):{},p=Si(u.prefix,u.iconName);h.prefix&&(i=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ds.far&&ds.fas&&!J.autoFetchSvg&&(u.prefix="fas")}return u},Ev());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===wn&&(ds.fass||J.autoFetchSvg)&&(a.prefix="fass",a.iconName=Si(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===En&&(ds.fasds||J.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Si(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Wi()||"fas"),a}class kU{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Wm(s,i[s]);const o=Ps[qe][s];o&&Wm(o,i[s]),gP()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let uE=[],xo={};const $o={},bU=Object.keys($o);function xU(t,e){let{mixoutsTo:n}=e;return uE=t,xo={},Object.keys($o).forEach(r=>{bU.indexOf(r)===-1&&delete $o[r]}),uE.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{xo[o]||(xo[o]=[]),xo[o].push(s[o])})}r.provides&&r.provides($o)}),n}function qm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(xo[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ws(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(xo[t]||[]).forEach(s=>{s.apply(null,n)})}function qi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $o[t]?$o[t].apply(null,e):void 0}function Km(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Wi();if(e)return e=Si(n,e)||e,aE(vP.definitions,n,e)||aE(mr.styles,n,e)}const vP=new kU,NU=()=>{J.autoReplaceSvg=!1,J.observeMutations=!1,Ws("noAuto")},DU={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(Ws("beforeI2svg",t),qi("pseudoElements2svg",t),qi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,vU(()=>{LU({autoReplaceSvgRoot:e}),Ws("watch",t)})}},OU={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Si(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yf(t[0]);return{prefix:n,iconName:Si(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(J.cssPrefix,"-"))>-1||t.match(rU))){const e=Xf(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Wi(),iconName:Si(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Wi();return{prefix:e,iconName:Si(e,t)||t}}}},Pn={noAuto:NU,config:J,dom:DU,parse:OU,library:vP,findIconDefinition:Km,toHtml:Fu},LU=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Be}=t;(Object.keys(mr.styles).length>0||J.autoFetchSvg)&&ni&&J.autoReplaceSvg&&Pn.dom.i2svg({node:e})};function Jf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Fu(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ni)return;const n=Be.createElement("div");return n.innerHTML=t.html,n.children}}),t}function MU(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(vv(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Qf({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function VU(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(J.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Tv(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:d,watchable:h=!1}=t,{width:p,height:_}=n.found?n:e,S=r==="fak",P=[J.replacementClass,i?"".concat(J.cssPrefix,"-").concat(i):""].filter(U=>d.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(d.classes).join(" ");let C={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:P,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)}};const T=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};h&&(C.attributes[Hs]=""),a&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||du())},children:[a]}),delete C.attributes.title);const y={...C,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...T,...d.styles}},{children:I,attributes:N}=n.found&&e.found?qi("generateAbstractMask",y)||{children:[],attributes:{}}:qi("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=N,o?VU(y):MU(y)}function cE(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(u[Hs]="");const c={...o.styles};vv(i)&&(c.transform=mU({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Qf(c);d.length>0&&(u.style=d);const h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function FU(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Qf(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:cp}=mr;function Gm(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(J.cssPrefix,"-").concat(ap.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(ap.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(ap.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const UU={found:!1,width:512,height:512};function jU(t,e){!nP&&!J.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qm(t,e){let n=e;return e==="fa"&&J.styleDefault!==null&&(e=Wi()),new Promise((r,i)=>{if(n==="fa"){const s=yP(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&cp[e]&&cp[e][t]){const s=cp[e][t];return r(Gm(s))}jU(t,e),r({...UU,icon:J.showMissingIcons&&t?qi("missingIconAbstract")||{}:{}})})}const dE=()=>{},Ym=J.measurePerformance&&Pc&&Pc.mark&&Pc.measure?Pc:{mark:dE,measure:dE},dl='FA "6.6.0"',zU=t=>(Ym.mark("".concat(dl," ").concat(t," begins")),()=>_P(t)),_P=t=>{Ym.mark("".concat(dl," ").concat(t," ends")),Ym.measure("".concat(dl," ").concat(t),"".concat(dl," ").concat(t," begins"),"".concat(dl," ").concat(t," ends"))};var Iv={begin:zU,end:_P};const Qc=()=>{};function fE(t){return typeof(t.getAttribute?t.getAttribute(Hs):null)=="string"}function BU(t){const e=t.getAttribute?t.getAttribute(mv):null,n=t.getAttribute?t.getAttribute(gv):null;return e&&n}function $U(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(J.replacementClass)}function HU(){return J.autoReplaceSvg===!0?Yc.replace:Yc[J.autoReplaceSvg]||Yc.replace}function WU(t){return Be.createElementNS("http://www.w3.org/2000/svg",t)}function qU(t){return Be.createElement(t)}function wP(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?WU:qU}=e;if(typeof t=="string")return Be.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(wP(s,{ceFn:n}))}),r}function KU(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Yc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(wP(n),e)}),e.getAttribute(Hs)===null&&J.keepOriginalSource){let n=Be.createComment(KU(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~yv(e).indexOf(J.replacementClass))return Yc.replace(t);const r=new RegExp("".concat(J.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===J.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Fu(s)).join(`
`);e.setAttribute(Hs,""),e.innerHTML=i}};function hE(t){t()}function EP(t,e){const n=typeof e=="function"?e:Qc;if(t.length===0)n();else{let r=hE;J.mutateApproach===eU&&(r=Hi.requestAnimationFrame||hE),r(()=>{const i=HU(),s=Iv.begin("mutate");t.map(i),s(),n()})}}let Sv=!1;function TP(){Sv=!0}function Xm(){Sv=!1}let Qd=null;function pE(t){if(!nE||!J.observeMutations)return;const{treeCallback:e=Qc,nodeCallback:n=Qc,pseudoElementsCallback:r=Qc,observeMutationsRoot:i=Be}=t;Qd=new nE(s=>{if(Sv)return;const o=Wi();wa(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!fE(a.addedNodes[0])&&(J.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&J.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&fE(a.target)&&~oU.indexOf(a.attributeName))if(a.attributeName==="class"&&BU(a.target)){const{prefix:u,iconName:c}=Xf(yv(a.target));a.target.setAttribute(mv,u||o),c&&a.target.setAttribute(gv,c)}else $U(a.target)&&n(a.target)})}),ni&&Qd.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function GU(){Qd&&Qd.disconnect()}function QU(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function YU(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Xf(yv(t));return i.prefix||(i.prefix=Wi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=RU(i.prefix,t.innerText)||wv(i.prefix,Hm(t.innerText))),!i.iconName&&J.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function XU(t){const e=wa(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return J.autoA11y&&(n?e["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(r||du()):(e["aria-hidden"]="true",e.focusable="false")),e}function JU(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=YU(t),s=XU(t),o=qm("parseNodeAttributes",{},t);let a=e.styleParser?QU(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:pr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:ZU}=mr;function IP(t){const e=J.autoReplaceSvg==="nest"?mE(t,{styleParser:!1}):mE(t);return~e.extra.classes.indexOf(sP)?qi("generateLayersText",t,e):qi("generateSvgReplacementMutation",t,e)}let Sr=new Set;rP.map(t=>{Sr.add("fa-".concat(t))});Object.keys(Rs[qe]).map(Sr.add.bind(Sr));Object.keys(Rs[wn]).map(Sr.add.bind(Sr));Object.keys(Rs[En]).map(Sr.add.bind(Sr));Sr=[...Sr];function gE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();const n=Be.documentElement.classList,r=d=>n.add("".concat(sE,"-").concat(d)),i=d=>n.remove("".concat(sE,"-").concat(d)),s=J.autoFetchSvg?Sr:rP.map(d=>"fa-".concat(d)).concat(Object.keys(ZU));s.includes("fa")||s.push("fa");const o=[".".concat(sP,":not([").concat(Hs,"])")].concat(s.map(d=>".".concat(d,":not([").concat(Hs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=wa(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Iv.begin("onTree"),c=a.reduce((d,h)=>{try{const p=IP(h);p&&d.push(p)}catch(p){nP||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(p=>{EP(p,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(p=>{u(),h(p)})})}function e6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;IP(t).then(n=>{n&&EP([n],e)})}function t6(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Km(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Km(i||{})),t(r,{...n,mask:i})}}const n6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=pr,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:_}=t;return Jf({type:"icon",...t},()=>(Ws("beforeDOMElementCreation",{iconDefinition:t,params:e}),J.autoA11y&&(o?c["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(a||du()):(c["aria-hidden"]="true",c.focusable="false")),Tv({icons:{main:Gm(_),mask:i?Gm(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{...pr,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:u}})))};var r6={mixout(){return{icon:t6(n6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=gE,t.nodeCallback=e6,t}}},provides(t){t.i2svg=function(e){const{node:n=Be,callback:r=()=>{}}=e;return gE(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:d,extra:h}=n;return new Promise((p,_)=>{Promise.all([Qm(r,o),c.iconName?Qm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[P,C]=S;p([e,Tv({icons:{main:P,mask:C},prefix:o,iconName:r,transform:a,symbol:u,maskId:d,title:i,titleId:s,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Qf(o);a.length>0&&(r.style=a);let u;return vv(s)&&(u=qi("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},i6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Jf({type:"layer"},()=>{Ws("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(J.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},s6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Jf({type:"counter",content:t},()=>(Ws("beforeDOMElementCreation",{content:t,params:e}),FU({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(J.cssPrefix,"-layers-counter"),...r]}})))}}}},o6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=pr,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Jf({type:"text",content:t},()=>(Ws("beforeDOMElementCreation",{content:t,params:e}),cE({content:t,transform:{...pr,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(J.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(YR){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return J.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,cE({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const a6=new RegExp('"',"ug"),yE=[1105920,1112319],vE={FontAwesome:{normal:"fas",400:"fas"},...B3,...z3,...Y3},Jm=Object.keys(vE).reduce((t,e)=>(t[e.toLowerCase()]=vE[e],t),{}),l6=Object.keys(Jm).reduce((t,e)=>{const n=Jm[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function u6(t){const e=t.replace(a6,""),n=wU(e,0),r=n>=yE[0]&&n<=yE[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hm(i?e[0]:e),isSecondary:r||i}}function c6(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Jm[n]||{})[i]||l6[n]}function _E(t,e){const n="".concat(Z3).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=wa(t.children).filter(p=>p.getAttribute(jm)===e)[0],a=Hi.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(iU),d=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&h!=="none"&&h!==""){const p=a.getPropertyValue("content");let _=c6(u,d);const{value:S,isSecondary:P}=u6(p),C=c[0].startsWith("FontAwesome");let T=wv(_,S),y=T;if(C){const I=PU(S);I.iconName&&I.prefix&&(T=I.iconName,_=I.prefix)}if(T&&!P&&(!o||o.getAttribute(mv)!==_||o.getAttribute(gv)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=JU(),{extra:N}=I;N.attributes[jm]=e,Qm(T,_).then(U=>{const k=Tv({...I,icons:{main:U,mask:Ev()},prefix:_,iconName:y,extra:N,watchable:!0}),E=Be.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=k.map(g=>Fu(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function d6(t){return Promise.all([_E(t,"::before"),_E(t,"::after")])}function f6(t){return t.parentNode!==document.head&&!~tU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wE(t){if(ni)return new Promise((e,n)=>{const r=wa(t.querySelectorAll("*")).filter(f6).map(d6),i=Iv.begin("searchPseudoElements");TP(),Promise.all(r).then(()=>{i(),Xm(),e()}).catch(()=>{i(),Xm(),n()})})}var h6={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=wE,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Be}=e;J.searchPseudoElements&&wE(n)}}};let EE=!1;var p6={mixout(){return{dom:{unwatch(){TP(),EE=!0}}}},hooks(){return{bootstrap(){pE(qm("mutationObserverCallbacks",{}))},noAuto(){GU()},watch(t){const{observeMutationsRoot:e}=t;EE?Xm():pE(qm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const TE=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var m6={mixout(){return{parse:{transform:t=>TE(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=TE(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:d,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const dp={x:0,y:0,width:"100%",height:"100%"};function IE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function g6(t){return t.tag==="g"?t.children:[t]}var y6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Xf(n.split(" ").map(i=>i.trim())):Ev();return r.prefix||(r.prefix=Wi()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:d,icon:h}=s,p=pU({transform:a,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:{...dp,fill:"white"}},S=c.children?{children:c.children.map(IE)}:{},P={tag:"g",attributes:{...p.inner},children:[IE({tag:c.tag,attributes:{...c.attributes,...p.path},...S})]},C={tag:"g",attributes:{...p.outer},children:[P]},T="mask-".concat(o||du()),y="clip-".concat(o||du()),I={tag:"mask",attributes:{...dp,id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,C]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:g6(h)},I]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(T,")"),...dp}}),{children:n,attributes:r}}}},v6={provides(t){let e=!1;Hi.matchMedia&&(e=Hi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},w6=[yU,r6,i6,s6,o6,h6,p6,m6,y6,v6,_6];xU(w6,{mixoutsTo:Pn});Pn.noAuto;Pn.config;Pn.library;Pn.dom;const Zm=Pn.parse;Pn.findIconDefinition;Pn.toHtml;const E6=Pn.icon;Pn.layer;Pn.text;Pn.counter;var SP={exports:{}},T6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",I6=T6,S6=I6;function AP(){}function RP(){}RP.resetWarningCache=AP;var A6=function(){function t(r,i,s,o,a,u){if(u!==S6){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:RP,resetWarningCache:AP};return n.PropTypes=n,n};SP.exports=A6();var R6=SP.exports;const pe=sg(R6);function SE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?SE(Object(n),!0).forEach(function(r){No(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):SE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yd(t){"@babel/helpers - typeof";return Yd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yd(t)}function No(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function C6(t,e){if(t==null)return{};var n=P6(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function eg(t){return k6(t)||b6(t)||x6(t)||N6()}function k6(t){if(Array.isArray(t))return tg(t)}function b6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function x6(t,e){if(t){if(typeof t=="string")return tg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tg(t,e)}}function tg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D6(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,h=t.pulse,p=t.fixedWidth,_=t.inverse,S=t.border,P=t.listItem,C=t.flip,T=t.size,y=t.rotation,I=t.pull,N=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":p,"fa-inverse":_,"fa-border":S,"fa-li":P,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},No(e,"fa-".concat(T),typeof T<"u"&&T!==null),No(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),No(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),No(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(U){return N[U]?U:null}).filter(function(U){return U})}function O6(t){return t=t-0,t===t}function PP(t){return O6(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var L6=["style"];function M6(t){return t.charAt(0).toUpperCase()+t.slice(1)}function V6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=PP(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[M6(i)]=s:e[i]=s,e},{})}function CP(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return CP(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=V6(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[PP(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=C6(n,L6);return i.attrs.style=dr(dr({},i.attrs.style),o),t.apply(void 0,[e.tag,dr(dr({},i.attrs),a)].concat(eg(r)))}var kP=!1;try{kP=!0}catch{}function F6(){if(!kP&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function AE(t){if(t&&Yd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zm.icon)return Zm.icon(t);if(t===null)return null;if(t&&Yd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function fp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?No({},t,e):{}}var RE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$t=ef.forwardRef(function(t,e){var n=dr(dr({},RE),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=AE(r),h=fp("classes",[].concat(eg(D6(n)),eg((o||"").split(" ")))),p=fp("transform",typeof n.transform=="string"?Zm.transform(n.transform):n.transform),_=fp("mask",AE(i)),S=E6(d,dr(dr(dr(dr({},h),p),_),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!S)return F6("Could not find icon",d),null;var P=S.abstract,C={ref:e};return Object.keys(n).forEach(function(T){RE.hasOwnProperty(T)||(C[T]=n[T])}),U6(P[0],C)});$t.displayName="FontAwesomeIcon";$t.propTypes={beat:pe.bool,border:pe.bool,beatFade:pe.bool,bounce:pe.bool,className:pe.string,fade:pe.bool,flash:pe.bool,mask:pe.oneOfType([pe.object,pe.array,pe.string]),maskId:pe.string,fixedWidth:pe.bool,inverse:pe.bool,flip:pe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:pe.oneOfType([pe.object,pe.array,pe.string]),listItem:pe.bool,pull:pe.oneOf(["right","left"]),pulse:pe.bool,rotation:pe.oneOf([0,90,180,270]),shake:pe.bool,size:pe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:pe.bool,spinPulse:pe.bool,spinReverse:pe.bool,symbol:pe.oneOfType([pe.bool,pe.string]),title:pe.string,titleId:pe.string,transform:pe.oneOfType([pe.string,pe.object]),swapOpacity:pe.bool};var U6=CP.bind(null,ef.createElement);const bP={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},Av={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]},j6={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]},z6={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},B6=z6;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $e(){return $e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$e.apply(this,arguments)}var ot;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ot||(ot={}));const PE="popstate";function $6(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qs(i)}return W6(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ua(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function H6(){return Math.random().toString(36).substr(2,8)}function CE(t,e){return{usr:t.state,key:t.key,idx:e}}function fu(t,e,n,r){return n===void 0&&(n=null),$e({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zi(e):e,{state:n,key:e&&e.key||r||H6()})}function qs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function W6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ot.Pop,u=null,c=d();c==null&&(c=0,o.replaceState($e({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=ot.Pop;let C=d(),T=C==null?null:C-c;c=C,u&&u({action:a,location:P.location,delta:T})}function p(C,T){a=ot.Push;let y=fu(P.location,C,T);c=d()+1;let I=CE(y,c),N=P.createHref(y);try{o.pushState(I,"",N)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(N)}s&&u&&u({action:a,location:P.location,delta:1})}function _(C,T){a=ot.Replace;let y=fu(P.location,C,T);c=d();let I=CE(y,c),N=P.createHref(y);o.replaceState(I,"",N),s&&u&&u({action:a,location:P.location,delta:0})}function S(C){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof C=="string"?C:qs(C);return y=y.replace(/ $/,"%20"),fe(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let P={get action(){return a},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(PE,h),u=C,()=>{i.removeEventListener(PE,h),u=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let T=S(C);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:_,go(C){return o.go(C)}};return P}var Le;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Le||(Le={}));const q6=new Set(["lazy","caseSensitive","path","id","index","children"]);function K6(t){return t.index===!0}function hu(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),K6(i)){let u=$e({},i,e(i),{id:a});return r[a]=u,u}else{let u=$e({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=hu(i.children,e,o,r)),u}})}function fs(t,e,n){return n===void 0&&(n="/"),Xc(t,e,n,!1)}function Xc(t,e,n,r){let i=typeof e=="string"?Zi(e):e,s=Ea(i.pathname||"/",n);if(s==null)return null;let o=xP(t);Q6(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=o5(s);a=i5(o[u],c,r)}return a}function G6(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function xP(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xP(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:n5(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of NP(s.path))i(s,o,u)}),e}function NP(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NP(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Q6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:r5(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y6=/^:[\w-]+$/,X6=3,J6=2,Z6=1,e5=10,t5=-2,kE=t=>t==="*";function n5(t,e){let n=t.split("/"),r=n.length;return n.some(kE)&&(r+=t5),e&&(r+=J6),n.filter(i=>!kE(i)).reduce((i,s)=>i+(Y6.test(s)?X6:s===""?Z6:e5),r)}function r5(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function i5(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=bE({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=bE({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:$r([s,h.pathname]),pathnameBase:u5($r([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=$r([s,h.pathnameBase]))}return o}function bE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=s5(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:p,isOptional:_}=d;if(p==="*"){let P=a[h]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=a[h];return _&&!S?c[p]=void 0:c[p]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function s5(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ua(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function o5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ua(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ea(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function a5(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zi(t):t;return{pathname:n?n.startsWith("/")?n:l5(n,e):e,search:c5(r),hash:d5(i)}}function l5(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zf(t,e){let n=DP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zi(t):(i=$e({},t),fe(!i.pathname||!i.pathname.includes("?"),hp("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),hp("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),hp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let u=a5(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const $r=t=>t.join("/").replace(/\/\/+/g,"/"),u5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),c5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,d5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,OP=function(e,n){n===void 0&&(n=302);let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let i=new Headers(r.headers);return i.set("Location",e),new Response(null,$e({},r,{headers:i}))};class Rv{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function th(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LP=["post","put","patch","delete"],f5=new Set(LP),h5=["get",...LP],p5=new Set(h5),m5=new Set([301,302,303,307,308]),g5=new Set([307,308]),pp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},y5={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Za={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v5=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),MP="remix-router-transitions";function _5(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=v5;let s={},o=hu(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||S5,d=t.unstable_patchRoutesOnMiss,h=$e({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),p=null,_=new Set,S=null,P=null,C=null,T=t.hydrationData!=null,y=fs(o,t.history.location,u),I=null;if(y==null&&!d){let x=Kt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=jE(o);y=D,I={[M.id]:x}}y&&d&&kr(y,o,t.history.location.pathname).active&&(y=null);let N;if(!y)N=!1,y=[];else if(y.some(x=>x.route.lazy))N=!1;else if(!y.some(x=>x.route.loader))N=!0;else if(h.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=j=>j.route.loader?typeof j.route.loader=="function"&&j.route.loader.hydrate===!0?!1:x&&x[j.route.id]!==void 0||D&&D[j.route.id]!==void 0:!0;if(D){let j=y.findIndex(K=>D[K.route.id]!==void 0);N=y.slice(0,j+1).every(M)}else N=y.every(M)}else N=t.hydrationData!=null;let U,k={historyAction:t.history.action,location:t.history.location,matches:y,initialized:N,navigation:pp,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||I,fetchers:new Map,blockers:new Map},E=ot.Pop,g=!1,w,A=!1,b=new Map,O=null,R=!1,Re=!1,en=[],ir=[],Pe=new Map,G=0,re=-1,oe=new Map,Te=new Set,ve=new Map,Ne=new Map,ct=new Set,Et=new Map,Tt=new Map,zn=new Map,Ia=!1;function sh(){if(p=t.history.listen(x=>{let{action:D,location:M,delta:j}=x;if(Ia){Ia=!1;return}ua(Tt.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=ba({currentLocation:k.location,nextLocation:M,historyAction:D});if(K&&j!=null){Ia=!0,t.history.go(j*-1),ns(K,{state:"blocked",location:M,proceed(){ns(K,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(j)},reset(){let Z=new Map(k.blockers);Z.set(K,Za),dt({blockers:Z})}});return}return or(D,M)}),n){V5(e,b);let x=()=>F5(e,b);e.addEventListener("pagehide",x),O=()=>e.removeEventListener("pagehide",x)}return k.initialized||or(ot.Pop,k.location,{initialHydration:!0}),U}function eo(){p&&p(),O&&O(),_.clear(),w&&w.abort(),k.fetchers.forEach((x,D)=>ro(D)),k.blockers.forEach((x,D)=>so(D))}function to(x){return _.add(x),()=>_.delete(x)}function dt(x,D){D===void 0&&(D={}),k=$e({},k,x);let M=[],j=[];h.v7_fetcherPersist&&k.fetchers.forEach((K,Z)=>{K.state==="idle"&&(ct.has(Z)?j.push(Z):M.push(Z))}),[..._].forEach(K=>K(k,{deletedFetchers:j,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),h.v7_fetcherPersist&&(M.forEach(K=>k.fetchers.delete(K)),j.forEach(K=>ro(K)))}function sr(x,D,M){var j,K;let{flushSync:Z}=M===void 0?{}:M,ie=k.actionData!=null&&k.navigation.formMethod!=null&&Gn(k.navigation.formMethod)&&k.navigation.state==="loading"&&((j=x.state)==null?void 0:j._isRedirect)!==!0,W;D.actionData?Object.keys(D.actionData).length>0?W=D.actionData:W=null:ie?W=k.actionData:W=null;let ce=D.loaderData?FE(k.loaderData,D.loaderData,D.matches||[],D.errors):k.loaderData,te=k.blockers;te.size>0&&(te=new Map(te),te.forEach((_e,Ce)=>te.set(Ce,Za)));let ee=g===!0||k.navigation.formMethod!=null&&Gn(k.navigation.formMethod)&&((K=x.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),R||E===ot.Pop||(E===ot.Push?t.history.push(x,x.state):E===ot.Replace&&t.history.replace(x,x.state));let he;if(E===ot.Pop){let _e=b.get(k.location.pathname);_e&&_e.has(x.pathname)?he={currentLocation:k.location,nextLocation:x}:b.has(x.pathname)&&(he={currentLocation:x,nextLocation:k.location})}else if(A){let _e=b.get(k.location.pathname);_e?_e.add(x.pathname):(_e=new Set([x.pathname]),b.set(k.location.pathname,_e)),he={currentLocation:k.location,nextLocation:x}}dt($e({},D,{actionData:W,loaderData:ce,historyAction:E,location:x,initialized:!0,navigation:pp,revalidation:"idle",restoreScrollPosition:Na(x,D.matches||k.matches),preventScrollReset:ee,blockers:te}),{viewTransitionOpts:he,flushSync:Z===!0}),E=ot.Pop,g=!1,A=!1,R=!1,Re=!1,en=[],ir=[]}async function no(x,D){if(typeof x=="number"){t.history.go(x);return}let M=ng(k.location,k.matches,u,h.v7_prependBasename,x,h.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:j,submission:K,error:Z}=xE(h.v7_normalizeFormMethod,!1,M,D),ie=k.location,W=fu(k.location,j,D&&D.state);W=$e({},W,t.history.encodeLocation(W));let ce=D&&D.replace!=null?D.replace:void 0,te=ot.Push;ce===!0?te=ot.Replace:ce===!1||K!=null&&Gn(K.formMethod)&&K.formAction===k.location.pathname+k.location.search&&(te=ot.Replace);let ee=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,he=(D&&D.unstable_flushSync)===!0,_e=ba({currentLocation:ie,nextLocation:W,historyAction:te});if(_e){ns(_e,{state:"blocked",location:W,proceed(){ns(_e,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),no(x,D)},reset(){let Ce=new Map(k.blockers);Ce.set(_e,Za),dt({blockers:Ce})}});return}return await or(te,W,{submission:K,pendingError:Z,preventScrollReset:ee,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:he})}function Sa(){if(ht(),dt({revalidation:"loading"}),k.navigation.state!=="submitting"){if(k.navigation.state==="idle"){or(k.historyAction,k.location,{startUninterruptedRevalidation:!0});return}or(E||k.historyAction,k.navigation.location,{overrideNavigation:k.navigation})}}async function or(x,D,M){w&&w.abort(),w=null,E=x,R=(M&&M.startUninterruptedRevalidation)===!0,oo(k.location,k.matches),g=(M&&M.preventScrollReset)===!0,A=(M&&M.enableViewTransition)===!0;let j=a||o,K=M&&M.overrideNavigation,Z=fs(j,D,u),ie=(M&&M.flushSync)===!0,W=kr(Z,j,D.pathname);if(W.active&&W.matches&&(Z=W.matches),!Z){let{error:we,notFoundMatches:rt,route:Ke}=Pr(D.pathname);sr(D,{matches:rt,loaderData:{},errors:{[Ke.id]:we}},{flushSync:ie});return}if(k.initialized&&!Re&&b5(k.location,D)&&!(M&&M.submission&&Gn(M.submission.formMethod))){sr(D,{matches:Z},{flushSync:ie});return}w=new AbortController;let ce=ho(t.history,D,w.signal,M&&M.submission),te;if(M&&M.pendingError)te=[Ol(Z).route.id,{type:Le.error,error:M.pendingError}];else if(M&&M.submission&&Gn(M.submission.formMethod)){let we=await oh(ce,D,M.submission,Z,W.active,{replace:M.replace,flushSync:ie});if(we.shortCircuited)return;if(we.pendingActionResult){let[rt,Ke]=we.pendingActionResult;if(fn(Ke)&&th(Ke.error)&&Ke.error.status===404){w=null,sr(D,{matches:we.matches,loaderData:{},errors:{[rt]:Ke.error}});return}}Z=we.matches||Z,te=we.pendingActionResult,K=mp(D,M.submission),ie=!1,W.active=!1,ce=ho(t.history,ce.url,ce.signal)}let{shortCircuited:ee,matches:he,loaderData:_e,errors:Ce}=await ah(ce,D,Z,W.active,K,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ie,te);ee||(w=null,sr(D,$e({matches:he||Z},UE(te),{loaderData:_e,errors:Ce})))}async function oh(x,D,M,j,K,Z){Z===void 0&&(Z={}),ht();let ie=L5(D,M);if(dt({navigation:ie},{flushSync:Z.flushSync===!0}),K){let te=await is(j,D.pathname,x.signal);if(te.type==="aborted")return{shortCircuited:!0};if(te.type==="error"){let{error:ee,notFoundMatches:he,route:_e}=ii(D.pathname,te);return{matches:he,pendingActionResult:[_e.id,{type:Le.error,error:ee}]}}else if(te.matches)j=te.matches;else{let{notFoundMatches:ee,error:he,route:_e}=Pr(D.pathname);return{matches:ee,pendingActionResult:[_e.id,{type:Le.error,error:he}]}}}let W,ce=fl(j,D);if(!ce.route.action&&!ce.route.lazy)W={type:Le.error,error:Kt(405,{method:x.method,pathname:D.pathname,routeId:ce.route.id})};else if(W=(await ri("action",x,[ce],j))[0],x.signal.aborted)return{shortCircuited:!0};if(ws(W)){let te;return Z&&Z.replace!=null?te=Z.replace:te=LE(W.response.headers.get("Location"),new URL(x.url),u)===k.location.pathname+k.location.search,await Rr(x,W,{submission:M,replace:te}),{shortCircuited:!0}}if(_s(W))throw Kt(400,{type:"defer-action"});if(fn(W)){let te=Ol(j,ce.route.id);return(Z&&Z.replace)!==!0&&(E=ot.Push),{matches:j,pendingActionResult:[te.route.id,W]}}return{matches:j,pendingActionResult:[ce.route.id,W]}}async function ah(x,D,M,j,K,Z,ie,W,ce,te,ee){let he=K||mp(D,Z),_e=Z||ie||$E(he),Ce=!R&&(!h.v7_partialHydration||!ce);if(j){if(Ce){let Fe=Aa(ee);dt($e({navigation:he},Fe!==void 0?{actionData:Fe}:{}),{flushSync:te})}let de=await is(M,D.pathname,x.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){let{error:Fe,notFoundMatches:Ot,route:ke}=ii(D.pathname,de);return{matches:Ot,loaderData:{},errors:{[ke.id]:Fe}}}else if(de.matches)M=de.matches;else{let{error:Fe,notFoundMatches:Ot,route:ke}=Pr(D.pathname);return{matches:Ot,loaderData:{},errors:{[ke.id]:Fe}}}}let we=a||o,[rt,Ke]=NE(t.history,k,M,_e,D,h.v7_partialHydration&&ce===!0,h.unstable_skipActionErrorRevalidation,Re,en,ir,ct,ve,Te,we,u,ee);if(rs(de=>!(M&&M.some(Fe=>Fe.route.id===de))||rt&&rt.some(Fe=>Fe.route.id===de)),re=++G,rt.length===0&&Ke.length===0){let de=io();return sr(D,$e({matches:M,loaderData:{},errors:ee&&fn(ee[1])?{[ee[0]]:ee[1].error}:null},UE(ee),de?{fetchers:new Map(k.fetchers)}:{}),{flushSync:te}),{shortCircuited:!0}}if(Ce){let de={};if(!j){de.navigation=he;let Fe=Aa(ee);Fe!==void 0&&(de.actionData=Fe)}Ke.length>0&&(de.fetchers=Ra(Ke)),dt(de,{flushSync:te})}Ke.forEach(de=>{Pe.has(de.key)&&Bn(de.key),de.controller&&Pe.set(de.key,de.controller)});let si=()=>Ke.forEach(de=>Bn(de.key));w&&w.signal.addEventListener("abort",si);let{loaderResults:ar,fetcherResults:$n}=await ft(k.matches,M,rt,Ke,x);if(x.signal.aborted)return{shortCircuited:!0};w&&w.signal.removeEventListener("abort",si),Ke.forEach(de=>Pe.delete(de.key));let br=zE([...ar,...$n]);if(br){if(br.idx>=rt.length){let de=Ke[br.idx-rt.length].key;Te.add(de)}return await Rr(x,br.result,{replace:W}),{shortCircuited:!0}}let{loaderData:lr,errors:Dt}=VE(k,M,rt,ar,ee,Ke,$n,Et);Et.forEach((de,Fe)=>{de.subscribe(Ot=>{(Ot||de.done)&&Et.delete(Fe)})}),h.v7_partialHydration&&ce&&k.errors&&Object.entries(k.errors).filter(de=>{let[Fe]=de;return!rt.some(Ot=>Ot.route.id===Fe)}).forEach(de=>{let[Fe,Ot]=de;Dt=Object.assign(Dt||{},{[Fe]:Ot})});let kn=io(),oi=ju(re),ao=kn||oi||Ke.length>0;return $e({matches:M,loaderData:lr,errors:Dt},ao?{fetchers:new Map(k.fetchers)}:{})}function Aa(x){if(x&&!fn(x[1]))return{[x[0]]:x[1].data};if(k.actionData)return Object.keys(k.actionData).length===0?null:k.actionData}function Ra(x){return x.forEach(D=>{let M=k.fetchers.get(D.key),j=el(void 0,M?M.data:void 0);k.fetchers.set(D.key,j)}),new Map(k.fetchers)}function Uu(x,D,M,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Pe.has(x)&&Bn(x);let K=(j&&j.unstable_flushSync)===!0,Z=a||o,ie=ng(k.location,k.matches,u,h.v7_prependBasename,M,h.v7_relativeSplatPath,D,j==null?void 0:j.relative),W=fs(Z,ie,u),ce=kr(W,Z,ie);if(ce.active&&ce.matches&&(W=ce.matches),!W){Cn(x,D,Kt(404,{pathname:ie}),{flushSync:K});return}let{path:te,submission:ee,error:he}=xE(h.v7_normalizeFormMethod,!0,ie,j);if(he){Cn(x,D,he,{flushSync:K});return}let _e=fl(W,te);if(g=(j&&j.preventScrollReset)===!0,ee&&Gn(ee.formMethod)){lh(x,D,te,_e,W,ce.active,K,ee);return}ve.set(x,{routeId:D,path:te}),Pa(x,D,te,_e,W,ce.active,K,ee)}async function lh(x,D,M,j,K,Z,ie,W){ht(),ve.delete(x);function ce(ke){if(!ke.route.action&&!ke.route.lazy){let un=Kt(405,{method:W.formMethod,pathname:M,routeId:D});return Cn(x,D,un,{flushSync:ie}),!0}return!1}if(!Z&&ce(j))return;let te=k.fetchers.get(x);ln(x,M5(W,te),{flushSync:ie});let ee=new AbortController,he=ho(t.history,M,ee.signal,W);if(Z){let ke=await is(K,M,he.signal);if(ke.type==="aborted")return;if(ke.type==="error"){let{error:un}=ii(M,ke);Cn(x,D,un,{flushSync:ie});return}else if(ke.matches){if(K=ke.matches,j=fl(K,M),ce(j))return}else{Cn(x,D,Kt(404,{pathname:M}),{flushSync:ie});return}}Pe.set(x,ee);let _e=G,we=(await ri("action",he,[j],K))[0];if(he.signal.aborted){Pe.get(x)===ee&&Pe.delete(x);return}if(h.v7_fetcherPersist&&ct.has(x)){if(ws(we)||fn(we)){ln(x,fi(void 0));return}}else{if(ws(we))if(Pe.delete(x),re>_e){ln(x,fi(void 0));return}else return Te.add(x),ln(x,el(W)),Rr(he,we,{fetcherSubmission:W});if(fn(we)){Cn(x,D,we.error);return}}if(_s(we))throw Kt(400,{type:"defer-action"});let rt=k.navigation.location||k.location,Ke=ho(t.history,rt,ee.signal),si=a||o,ar=k.navigation.state!=="idle"?fs(si,k.navigation.location,u):k.matches;fe(ar,"Didn't find any matches after fetcher action");let $n=++G;oe.set(x,$n);let br=el(W,we.data);k.fetchers.set(x,br);let[lr,Dt]=NE(t.history,k,ar,W,rt,!1,h.unstable_skipActionErrorRevalidation,Re,en,ir,ct,ve,Te,si,u,[j.route.id,we]);Dt.filter(ke=>ke.key!==x).forEach(ke=>{let un=ke.key,Da=k.fetchers.get(un),Bu=el(void 0,Da?Da.data:void 0);k.fetchers.set(un,Bu),Pe.has(un)&&Bn(un),ke.controller&&Pe.set(un,ke.controller)}),dt({fetchers:new Map(k.fetchers)});let kn=()=>Dt.forEach(ke=>Bn(ke.key));ee.signal.addEventListener("abort",kn);let{loaderResults:oi,fetcherResults:ao}=await ft(k.matches,ar,lr,Dt,Ke);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",kn),oe.delete(x),Pe.delete(x),Dt.forEach(ke=>Pe.delete(ke.key));let de=zE([...oi,...ao]);if(de){if(de.idx>=lr.length){let ke=Dt[de.idx-lr.length].key;Te.add(ke)}return Rr(Ke,de.result)}let{loaderData:Fe,errors:Ot}=VE(k,k.matches,lr,oi,void 0,Dt,ao,Et);if(k.fetchers.has(x)){let ke=fi(we.data);k.fetchers.set(x,ke)}ju($n),k.navigation.state==="loading"&&$n>re?(fe(E,"Expected pending action"),w&&w.abort(),sr(k.navigation.location,{matches:ar,loaderData:Fe,errors:Ot,fetchers:new Map(k.fetchers)})):(dt({errors:Ot,loaderData:FE(k.loaderData,Fe,ar,Ot),fetchers:new Map(k.fetchers)}),Re=!1)}async function Pa(x,D,M,j,K,Z,ie,W){let ce=k.fetchers.get(x);ln(x,el(W,ce?ce.data:void 0),{flushSync:ie});let te=new AbortController,ee=ho(t.history,M,te.signal);if(Z){let we=await is(K,M,ee.signal);if(we.type==="aborted")return;if(we.type==="error"){let{error:rt}=ii(M,we);Cn(x,D,rt,{flushSync:ie});return}else if(we.matches)K=we.matches,j=fl(K,M);else{Cn(x,D,Kt(404,{pathname:M}),{flushSync:ie});return}}Pe.set(x,te);let he=G,Ce=(await ri("loader",ee,[j],K))[0];if(_s(Ce)&&(Ce=await zP(Ce,ee.signal,!0)||Ce),Pe.get(x)===te&&Pe.delete(x),!ee.signal.aborted){if(ct.has(x)){ln(x,fi(void 0));return}if(ws(Ce))if(re>he){ln(x,fi(void 0));return}else{Te.add(x),await Rr(ee,Ce);return}if(fn(Ce)){Cn(x,D,Ce.error);return}fe(!_s(Ce),"Unhandled fetcher deferred data"),ln(x,fi(Ce.data))}}async function Rr(x,D,M){let{submission:j,fetcherSubmission:K,replace:Z}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(Re=!0);let ie=D.response.headers.get("Location");fe(ie,"Expected a Location header on the redirect Response"),ie=LE(ie,new URL(x.url),u);let W=fu(k.location,ie,{_isRedirect:!0});if(n){let Ce=!1;if(D.response.headers.has("X-Remix-Reload-Document"))Ce=!0;else if(Pv.test(ie)){const we=t.history.createURL(ie);Ce=we.origin!==e.location.origin||Ea(we.pathname,u)==null}if(Ce){Z?e.location.replace(ie):e.location.assign(ie);return}}w=null;let ce=Z===!0?ot.Replace:ot.Push,{formMethod:te,formAction:ee,formEncType:he}=k.navigation;!j&&!K&&te&&ee&&he&&(j=$E(k.navigation));let _e=j||K;if(g5.has(D.response.status)&&_e&&Gn(_e.formMethod))await or(ce,W,{submission:$e({},_e,{formAction:ie}),preventScrollReset:g});else{let Ce=mp(W,j);await or(ce,W,{overrideNavigation:Ce,fetcherSubmission:K,preventScrollReset:g})}}async function ri(x,D,M,j){try{let K=await A5(c,x,D,M,j,s,i);return await Promise.all(K.map((Z,ie)=>{if(N5(Z)){let W=Z.result;return{type:Le.redirect,response:C5(W,D,M[ie].route.id,j,u,h.v7_relativeSplatPath)}}return P5(Z)}))}catch(K){return M.map(()=>({type:Le.error,error:K}))}}async function ft(x,D,M,j,K){let[Z,...ie]=await Promise.all([M.length?ri("loader",K,M,D):[],...j.map(W=>{if(W.matches&&W.match&&W.controller){let ce=ho(t.history,W.path,W.controller.signal);return ri("loader",ce,[W.match],W.matches).then(te=>te[0])}else return Promise.resolve({type:Le.error,error:Kt(404,{pathname:W.path})})})]);return await Promise.all([BE(x,M,Z,Z.map(()=>K.signal),!1,k.loaderData),BE(x,j.map(W=>W.match),ie,j.map(W=>W.controller?W.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ie}}function ht(){Re=!0,en.push(...rs()),ve.forEach((x,D)=>{Pe.has(D)&&(ir.push(D),Bn(D))})}function ln(x,D,M){M===void 0&&(M={}),k.fetchers.set(x,D),dt({fetchers:new Map(k.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Cn(x,D,M,j){j===void 0&&(j={});let K=Ol(k.matches,D);ro(x),dt({errors:{[K.route.id]:M},fetchers:new Map(k.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function Ca(x){return h.v7_fetcherPersist&&(Ne.set(x,(Ne.get(x)||0)+1),ct.has(x)&&ct.delete(x)),k.fetchers.get(x)||y5}function ro(x){let D=k.fetchers.get(x);Pe.has(x)&&!(D&&D.state==="loading"&&oe.has(x))&&Bn(x),ve.delete(x),oe.delete(x),Te.delete(x),ct.delete(x),k.fetchers.delete(x)}function ts(x){if(h.v7_fetcherPersist){let D=(Ne.get(x)||0)-1;D<=0?(Ne.delete(x),ct.add(x)):Ne.set(x,D)}else ro(x);dt({fetchers:new Map(k.fetchers)})}function Bn(x){let D=Pe.get(x);fe(D,"Expected fetch controller: "+x),D.abort(),Pe.delete(x)}function ka(x){for(let D of x){let M=Ca(D),j=fi(M.data);k.fetchers.set(D,j)}}function io(){let x=[],D=!1;for(let M of Te){let j=k.fetchers.get(M);fe(j,"Expected fetcher: "+M),j.state==="loading"&&(Te.delete(M),x.push(M),D=!0)}return ka(x),D}function ju(x){let D=[];for(let[M,j]of oe)if(j<x){let K=k.fetchers.get(M);fe(K,"Expected fetcher: "+M),K.state==="loading"&&(Bn(M),oe.delete(M),D.push(M))}return ka(D),D.length>0}function uh(x,D){let M=k.blockers.get(x)||Za;return Tt.get(x)!==D&&Tt.set(x,D),M}function so(x){k.blockers.delete(x),Tt.delete(x)}function ns(x,D){let M=k.blockers.get(x)||Za;fe(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let j=new Map(k.blockers);j.set(x,D),dt({blockers:j})}function ba(x){let{currentLocation:D,nextLocation:M,historyAction:j}=x;if(Tt.size===0)return;Tt.size>1&&ua(!1,"A router only supports one blocker at a time");let K=Array.from(Tt.entries()),[Z,ie]=K[K.length-1],W=k.blockers.get(Z);if(!(W&&W.state==="proceeding")&&ie({currentLocation:D,nextLocation:M,historyAction:j}))return Z}function Pr(x){let D=Kt(404,{pathname:x}),M=a||o,{matches:j,route:K}=jE(M);return rs(),{notFoundMatches:j,route:K,error:D}}function ii(x,D){let M=D.partialMatches,j=M[M.length-1].route,K=Kt(400,{type:"route-discovery",routeId:j.id,pathname:x,message:D.error!=null&&"message"in D.error?D.error:String(D.error)});return{notFoundMatches:M,route:j,error:K}}function rs(x){let D=[];return Et.forEach((M,j)=>{(!x||x(j))&&(M.cancel(),D.push(j),Et.delete(j))}),D}function Cr(x,D,M){if(S=x,C=D,P=M||null,!T&&k.navigation===pp){T=!0;let j=Na(k.location,k.matches);j!=null&&dt({restoreScrollPosition:j})}return()=>{S=null,C=null,P=null}}function xa(x,D){return P&&P(x,D.map(j=>G6(j,k.loaderData)))||x.key}function oo(x,D){if(S&&C){let M=xa(x,D);S[M]=C()}}function Na(x,D){if(S){let M=xa(x,D),j=S[M];if(typeof j=="number")return j}return null}function kr(x,D,M){if(d)if(x){let j=x[x.length-1].route;if(j.path&&(j.path==="*"||j.path.endsWith("/*")))return{active:!0,matches:Xc(D,M,u,!0)}}else return{active:!0,matches:Xc(D,M,u,!0)||[]};return{active:!1,matches:null}}async function is(x,D,M){let j=x,K=j.length>0?j[j.length-1].route:null;for(;;){let Z=a==null,ie=a||o;try{await I5(d,D,j,ie,s,i,zn,M)}catch(ee){return{type:"error",error:ee,partialMatches:j}}finally{Z&&(o=[...o])}if(M.aborted)return{type:"aborted"};let W=fs(ie,D,u),ce=!1;if(W){let ee=W[W.length-1].route;if(ee.index)return{type:"success",matches:W};if(ee.path&&ee.path.length>0)if(ee.path==="*")ce=!0;else return{type:"success",matches:W}}let te=Xc(ie,D,u,!0);if(!te||j.map(ee=>ee.route.id).join("-")===te.map(ee=>ee.route.id).join("-"))return{type:"success",matches:ce?W:null};if(j=te,K=j[j.length-1].route,K.path==="*")return{type:"success",matches:j}}}function It(x){s={},a=hu(x,i,void 0,s)}function zu(x,D){let M=a==null;FP(x,D,a||o,s,i),M&&(o=[...o],dt({}))}return U={get basename(){return u},get future(){return h},get state(){return k},get routes(){return o},get window(){return e},initialize:sh,subscribe:to,enableScrollRestoration:Cr,navigate:no,fetch:Uu,revalidate:Sa,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Ca,deleteFetcher:ts,dispose:eo,getBlocker:uh,deleteBlocker:so,patchRoutes:zu,_internalFetchControllers:Pe,_internalActiveDeferreds:Et,_internalSetRoutes:It},U}function w5(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function ng(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let h of e)if(u.push(h),h.route.id===o){c=h;break}}else u=e,c=e[e.length-1];let d=eh(i||".",Zf(u,s),Ea(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Cv(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:$r([n,d.pathname])),qs(d)}function xE(t,e,n,r){if(!r||!w5(r))return{path:n};if(r.formMethod&&!O5(r.formMethod))return{path:n,error:Kt(405,{method:r.formMethod})};let i=()=>({path:n,error:Kt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=UP(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Gn(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,S)=>{let[P,C]=S;return""+_+P+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Gn(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=rg(r.formData),c=r.formData;else if(r.body instanceof FormData)u=rg(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=ME(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=ME(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Gn(d.formMethod))return{path:n,submission:d};let h=Zi(n);return e&&h.search&&Cv(h.search)&&u.append("index",""),h.search="?"+u,{path:qs(h),submission:d}}function E5(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function NE(t,e,n,r,i,s,o,a,u,c,d,h,p,_,S,P){let C=P?fn(P[1])?P[1].error:P[1].data:void 0,T=t.createURL(e.location),y=t.createURL(i),I=P&&fn(P[1])?P[0]:void 0,N=I?E5(n,I):n,U=P?P[1].statusCode:void 0,k=o&&U&&U>=400,E=N.filter((w,A)=>{let{route:b}=w;if(b.lazy)return!0;if(b.loader==null)return!1;if(s)return typeof b.loader!="function"||b.loader.hydrate?!0:e.loaderData[b.id]===void 0&&(!e.errors||e.errors[b.id]===void 0);if(T5(e.loaderData,e.matches[A],w)||u.some(Re=>Re===w.route.id))return!0;let O=e.matches[A],R=w;return DE(w,$e({currentUrl:T,currentParams:O.params,nextUrl:y,nextParams:R.params},r,{actionResult:C,unstable_actionStatus:U,defaultShouldRevalidate:k?!1:a||T.pathname+T.search===y.pathname+y.search||T.search!==y.search||VP(O,R)}))}),g=[];return h.forEach((w,A)=>{if(s||!n.some(en=>en.route.id===w.routeId)||d.has(A))return;let b=fs(_,w.path,S);if(!b){g.push({key:A,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let O=e.fetchers.get(A),R=fl(b,w.path),Re=!1;p.has(A)?Re=!1:c.includes(A)?Re=!0:O&&O.state!=="idle"&&O.data===void 0?Re=a:Re=DE(R,$e({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:C,unstable_actionStatus:U,defaultShouldRevalidate:k?!1:a})),Re&&g.push({key:A,routeId:w.routeId,path:w.path,matches:b,match:R,controller:new AbortController})}),[E,g]}function T5(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function VP(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function DE(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function I5(t,e,n,r,i,s,o,a){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,h)=>{a.aborted||FP(d,h,r,i,s)}}),o.set(u,c)),c&&x5(c)&&await c}finally{o.delete(u)}}function FP(t,e,n,r,i){if(t){var s;let o=r[t];fe(o,"No route found to patch children into: routeId = "+t);let a=hu(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...a):o.children=a}else{let o=hu(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function OE(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];fe(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";ua(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!q6.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,$e({},e(i),{lazy:void 0}))}function S5(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function A5(t,e,n,r,i,s,o,a){let u=r.reduce((h,p)=>h.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(h=>{let p=u.has(h.route.id);return $e({},h,{shouldLoad:p,resolve:S=>(c.add(h.route.id),p?R5(e,n,h,s,o,S,a):Promise.resolve({type:Le.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(h=>fe(c.has(h.route.id),'`match.resolve()` was not called for route id "'+h.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((h,p)=>u.has(i[p].route.id))}async function R5(t,e,n,r,i,s,o){let a,u,c=d=>{let h,p=new Promise((P,C)=>h=C);u=()=>h(),e.signal.addEventListener("abort",u);let _=P=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...P!==void 0?[P]:[]),S;return s?S=s(P=>_(P)):S=(async()=>{try{return{type:"data",result:await _()}}catch(P){return{type:"error",result:P}}})(),Promise.race([S,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let h,[p]=await Promise.all([c(d).catch(_=>{h=_}),OE(n.route,i,r)]);if(h!==void 0)throw h;a=p}else if(await OE(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let h=new URL(e.url),p=h.pathname+h.search;throw Kt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Le.data,result:void 0};else if(d)a=await c(d);else{let h=new URL(e.url),p=h.pathname+h.search;throw Kt(404,{pathname:p})}fe(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Le.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function P5(t){let{result:e,type:n,status:r}=t;if(jP(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:Le.error,error:a}}return n===Le.error?{type:Le.error,error:new Rv(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Le.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Le.error)return{type:Le.error,error:e,statusCode:th(e)?e.status:r};if(D5(e)){var i,s;return{type:Le.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Le.data,data:e,statusCode:r}}function C5(t,e,n,r,i,s){let o=t.headers.get("Location");if(fe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Pv.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=ng(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function LE(t,e,n){if(Pv.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Ea(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function ho(t,e,n,r){let i=t.createURL(UP(e)).toString(),s={signal:n};if(r&&Gn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=rg(r.formData):s.body=r.formData}return new Request(i,s)}function rg(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ME(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function k5(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},h=r&&fn(r[1])?r[1].error:void 0;return n.forEach((p,_)=>{let S=e[_].route.id;if(fe(!ws(p),"Cannot handle redirect results in processLoaderData"),fn(p)){let P=p.error;h!==void 0&&(P=h,h=void 0),a=a||{};{let C=Ol(t,S);a[C.route.id]==null&&(a[C.route.id]=P)}o[S]=void 0,c||(c=!0,u=th(p.error)?p.error.status:500),p.headers&&(d[S]=p.headers)}else _s(p)?(i.set(S,p.deferredData),o[S]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[S]=p.headers)):(o[S]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[S]=p.headers))}),h!==void 0&&r&&(a={[r[0]]:h},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function VE(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=k5(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:h,match:p,controller:_}=s[d];fe(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let S=o[d];if(!(_&&_.signal.aborted))if(fn(S)){let P=Ol(t.matches,p==null?void 0:p.route.id);c&&c[P.route.id]||(c=$e({},c,{[P.route.id]:S.error})),t.fetchers.delete(h)}else if(ws(S))fe(!1,"Unhandled fetcher revalidation redirect");else if(_s(S))fe(!1,"Unhandled fetcher deferred data");else{let P=fi(S.data);t.fetchers.set(h,P)}}return{loaderData:u,errors:c}}function FE(t,e,n,r){let i=$e({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function UE(t){return t?fn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ol(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function jE(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Kt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",u='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Rv(t||500,a,new Error(u),!0)}function zE(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ws(n))return{result:n,idx:e}}}function UP(t){let e=typeof t=="string"?Zi(t):t;return qs($e({},e,{hash:""}))}function b5(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function x5(t){return typeof t=="object"&&t!=null&&"then"in t}function N5(t){return jP(t.result)&&m5.has(t.result.status)}function _s(t){return t.type===Le.deferred}function fn(t){return t.type===Le.error}function ws(t){return(t&&t.type)===Le.redirect}function D5(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function jP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function O5(t){return p5.has(t.toLowerCase())}function Gn(t){return f5.has(t.toLowerCase())}async function BE(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(h=>h.route.id===u.route.id),d=c!=null&&!VP(c,u)&&(s&&s[u.route.id])!==void 0;if(_s(a)&&(i||d)){let h=r[o];fe(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await zP(a,h,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function zP(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Le.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Le.error,error:i}}return{type:Le.data,data:t.deferredData.data}}}function Cv(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function fl(t,e){let n=typeof e=="string"?Zi(e).search:e.search;if(t[t.length-1].route.index&&Cv(n||""))return t[t.length-1];let r=DP(t);return r[r.length-1]}function $E(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function mp(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function L5(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function el(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function M5(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function fi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function V5(t,e){try{let n=t.sessionStorage.getItem(MP);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function F5(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(MP,JSON.stringify(n))}catch(r){ua(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xd.apply(this,arguments)}const nh=z.createContext(null),BP=z.createContext(null),es=z.createContext(null),kv=z.createContext(null),Ar=z.createContext({outlet:null,matches:[],isDataRoute:!1}),$P=z.createContext(null);function U5(t,e){let{relative:n}=e===void 0?{}:e;Ta()||fe(!1);let{basename:r,navigator:i}=z.useContext(es),{hash:s,pathname:o,search:a}=WP(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:$r([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ta(){return z.useContext(kv)!=null}function Zs(){return Ta()||fe(!1),z.useContext(kv).location}function HP(t){z.useContext(es).static||z.useLayoutEffect(t)}function rh(){let{isDataRoute:t}=z.useContext(Ar);return t?ej():j5()}function j5(){Ta()||fe(!1);let t=z.useContext(nh),{basename:e,future:n,navigator:r}=z.useContext(es),{matches:i}=z.useContext(Ar),{pathname:s}=Zs(),o=JSON.stringify(Zf(i,n.v7_relativeSplatPath)),a=z.useRef(!1);return HP(()=>{a.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=eh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:$r([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,s,t])}const z5=z.createContext(null);function B5(t){let e=z.useContext(Ar).outlet;return e&&z.createElement(z5.Provider,{value:t},e)}function $5(){let{matches:t}=z.useContext(Ar),e=t[t.length-1];return e?e.params:{}}function WP(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(es),{matches:i}=z.useContext(Ar),{pathname:s}=Zs(),o=JSON.stringify(Zf(i,r.v7_relativeSplatPath));return z.useMemo(()=>eh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function H5(t,e,n,r){Ta()||fe(!1);let{navigator:i}=z.useContext(es),{matches:s}=z.useContext(Ar),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Zs(),d;d=c;let h=d.pathname||"/",p=h;if(u!=="/"){let P=u.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(P.length).join("/")}let _=fs(t,{pathname:p});return Q5(_&&_.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:$r([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:$r([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function W5(){let t=Z5(),e=th(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const q5=z.createElement(W5,null);class K5 extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Ar.Provider,{value:this.props.routeContext},z.createElement($P.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G5(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(nh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Ar.Provider,{value:e},r)}function Q5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:_}=n,S=h.route.loader&&p[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let _,S=!1,P=null,C=null;n&&(_=a&&h.route.id?a[h.route.id]:void 0,P=h.route.errorElement||q5,u&&(c<0&&p===0?(S=!0,C=null):c===p&&(S=!0,C=h.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,p+1)),y=()=>{let I;return _?I=P:S?I=C:h.route.Component?I=z.createElement(h.route.Component,null):h.route.element?I=h.route.element:I=d,z.createElement(G5,{match:h,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:I})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?z.createElement(K5,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var qP=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qP||{}),Jd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Jd||{});function Y5(t){let e=z.useContext(nh);return e||fe(!1),e}function X5(t){let e=z.useContext(BP);return e||fe(!1),e}function J5(t){let e=z.useContext(Ar);return e||fe(!1),e}function KP(t){let e=J5(),n=e.matches[e.matches.length-1];return n.route.id||fe(!1),n.route.id}function Z5(){var t;let e=z.useContext($P),n=X5(Jd.UseRouteError),r=KP(Jd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ej(){let{router:t}=Y5(qP.UseNavigateStable),e=KP(Jd.UseNavigateStable),n=z.useRef(!1);return HP(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xd({fromRouteId:e},s)))},[t,e])}function tj(t){let{to:e,replace:n,state:r,relative:i}=t;Ta()||fe(!1);let{future:s,static:o}=z.useContext(es),{matches:a}=z.useContext(Ar),{pathname:u}=Zs(),c=rh(),d=eh(e,Zf(a,s.v7_relativeSplatPath),u,i==="path"),h=JSON.stringify(d);return z.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:i}),[c,h,i,n,r]),null}function nj(t){return B5(t.context)}function rj(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ot.Pop,navigator:s,static:o=!1,future:a}=t;Ta()&&fe(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:Xd({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Zi(r));let{pathname:d="/",search:h="",hash:p="",state:_=null,key:S="default"}=r,P=z.useMemo(()=>{let C=Ea(d,u);return C==null?null:{location:{pathname:C,search:h,hash:p,state:_,key:S},navigationType:i}},[u,d,h,p,_,S,i]);return P==null?null:z.createElement(es.Provider,{value:c},z.createElement(kv.Provider,{children:n,value:P}))}new Promise(()=>{});function ij(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:z.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:z.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:z.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pu.apply(this,arguments)}function sj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aj(t,e){return t.button===0&&(!e||e==="_self")&&!oj(t)}const lj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],uj="6";try{window.__reactRouterVersion=uj}catch{}function cj(t,e){return _5({basename:void 0,future:pu({},void 0,{v7_prependBasename:!0}),history:$6({window:void 0}),hydrationData:dj(),routes:t,mapRouteProperties:ij,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function dj(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=pu({},e,{errors:fj(e.errors)})),e}function fj(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Rv(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const hj=z.createContext({isTransitioning:!1}),pj=z.createContext(new Map),mj="startTransition",HE=gp[mj],gj="flushSync",WE=zb[gj];function yj(t){HE?HE(t):t()}function tl(t){WE?WE(t):t()}class vj{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function _j(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=z.useState(n.state),[o,a]=z.useState(),[u,c]=z.useState({isTransitioning:!1}),[d,h]=z.useState(),[p,_]=z.useState(),[S,P]=z.useState(),C=z.useRef(new Map),{v7_startTransition:T}=r||{},y=z.useCallback(E=>{T?yj(E):E()},[T]),I=z.useCallback((E,g)=>{let{deletedFetchers:w,unstable_flushSync:A,unstable_viewTransitionOpts:b}=g;w.forEach(R=>C.current.delete(R)),E.fetchers.forEach((R,Re)=>{R.data!==void 0&&C.current.set(Re,R.data)});let O=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!b||O){A?tl(()=>s(E)):y(()=>s(E));return}if(A){tl(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation})});let R=n.window.document.startViewTransition(()=>{tl(()=>s(E))});R.finished.finally(()=>{tl(()=>{h(void 0),_(void 0),a(void 0),c({isTransitioning:!1})})}),tl(()=>_(R));return}p?(d&&d.resolve(),p.skipTransition(),P({state:E,currentLocation:b.currentLocation,nextLocation:b.nextLocation})):(a(E),c({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}))},[n.window,p,d,C,y]);z.useLayoutEffect(()=>n.subscribe(I),[n,I]),z.useEffect(()=>{u.isTransitioning&&!u.flushSync&&h(new vj)},[u]),z.useEffect(()=>{if(d&&o&&n.window){let E=o,g=d.promise,w=n.window.document.startViewTransition(async()=>{y(()=>s(E)),await g});w.finished.finally(()=>{h(void 0),_(void 0),a(void 0),c({isTransitioning:!1})}),_(w)}},[y,o,d,n.window]),z.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),z.useEffect(()=>{!u.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),P(void 0))},[u.isTransitioning,S]),z.useEffect(()=>{},[]);let N=z.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,g,w)=>n.navigate(E,{state:g,preventScrollReset:w==null?void 0:w.preventScrollReset}),replace:(E,g,w)=>n.navigate(E,{replace:!0,state:g,preventScrollReset:w==null?void 0:w.preventScrollReset})}),[n]),U=n.basename||"/",k=z.useMemo(()=>({router:n,navigator:N,static:!1,basename:U}),[n,N,U]);return z.createElement(z.Fragment,null,z.createElement(nh.Provider,{value:k},z.createElement(BP.Provider,{value:i},z.createElement(pj.Provider,{value:C.current},z.createElement(hj.Provider,{value:u},z.createElement(rj,{basename:U,location:i.location,navigationType:i.historyAction,navigator:N,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?z.createElement(wj,{routes:n.routes,future:n.future,state:i}):e))))),null)}function wj(t){let{routes:e,future:n,state:r}=t;return H5(e,void 0,r,n)}const Ej=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ho=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:h}=e,p=sj(e,lj),{basename:_}=z.useContext(es),S,P=!1;if(typeof c=="string"&&Tj.test(c)&&(S=c,Ej))try{let I=new URL(window.location.href),N=c.startsWith("//")?new URL(I.protocol+c):new URL(c),U=Ea(N.pathname,_);N.origin===I.origin&&U!=null?c=U+N.search+N.hash:P=!0}catch{}let C=U5(c,{relative:i}),T=Ij(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(I){r&&r(I),I.defaultPrevented||T(I)}return z.createElement("a",pu({},p,{href:S||C,onClick:P||s?r:y,ref:n,target:u}))});var qE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qE||(qE={}));var KE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(KE||(KE={}));function Ij(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=rh(),c=Zs(),d=WP(t,{relative:o});return z.useCallback(h=>{if(aj(h,n)){h.preventDefault();let p=r!==void 0?r:qs(c)===qs(d);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}const Sj={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},GP={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Aj={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},GE={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Rj=({chat:t})=>{const[e,n]=z.useState(t.notSeenedMessages);return z.useEffect(()=>{const r=sa(Bi(We,"chat_message"),mt("from","==",t.email),mt("seen","==",!1)),i=Cl(r,s=>{n(s.size)});return()=>{i()}},[]),V.jsx(V.Fragment,{children:V.jsxs(Ho,{to:`/chat/${t.email}`,className:"flex items-center justify-between border-t hover:bg-base/50 text-sm px-5 py-3 transition-colors duration-300",children:[V.jsxs("div",{className:"flex items-center",children:[t.photoUrl?V.jsx("img",{src:t.photoUrl,alt:"profile",className:"size-10 object-cover rounded-full"}):V.jsx("div",{className:"size-10 border-2 rounded-full bg-base flex items-center justify-center",children:V.jsx($t,{icon:Av,size:"lg"})}),V.jsx("div",{className:"ps-2",children:V.jsx("div",{children:t.name})})]}),e?V.jsx("div",{className:"size-5 text-xs font-semibold rounded-full bg-red-500 text-white text-center flex items-center justify-center",children:e}):""]},t.email)})},ih=dx.withTypes(),Ki=ha.withTypes();function Pj(){var s;const[t,e]=z.useState(!1),n=ih(),r=Ki(o=>o.user),i=()=>{e(!0),n(UR({profileUrl:r.profile.photoUrl,userEmail:r.data.email})).then(()=>e(!1))};return V.jsx(V.Fragment,{children:V.jsxs("div",{className:"relative rounded-full overflow-hidden group",children:[V.jsx("img",{src:(s=r.profile)==null?void 0:s.photoUrl,alt:"profile",className:"size-[65px] object-cover"}),V.jsx("div",{onClick:i,className:`${!t&&"opacity-0"} absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`,children:t?V.jsx("div",{className:"size-5 border-2 border-e-transparent animate-spin border-white rounded-full"}):V.jsx($t,{icon:bP,color:"#fff",size:"xl"})})]})})}const Cj=()=>{var a,u;const[t,e]=z.useState(!1),n=Ki(c=>c.user),r=Ki(c=>c.chats.list),i=Zs(),s=rh(),o=async()=>{e(!0),J4(OR).then(()=>{e(!1),s("/login")})};if(n.profile&&((a=n.data)!=null&&a.email))return V.jsxs("div",{className:`w-full lg:max-w-[325px] h-full min-h-screen bg-white border-e flex flex-col shadow-xl ${i.pathname!=="/"&&"max-lg:hidden"}`,children:[V.jsxs("div",{className:"p-6 flex items-center justify-between",children:[V.jsxs("div",{className:"flex items-center",children:[V.jsxs("div",{className:"relative",children:[n.profile.photoUrl?V.jsx(Pj,{}):V.jsx("div",{className:"size-[65px] border-2 rounded-full bg-base flex items-center justify-center",children:V.jsx($t,{icon:Av,size:"xl"})}),V.jsx(Ho,{to:"/edit-profile",className:"absolute bottom-0 right-0 bg-black/85 text-white rounded-full flex items-center justify-center text-center w-[22px] h-[22px]",children:V.jsx($t,{icon:Sj,size:"2xs"})})]}),V.jsxs("div",{className:"ps-4",children:[V.jsx("div",{className:"font-bold",children:n.profile.name}),V.jsx("div",{className:"text-xs mt-2 text-black/60",children:(u=n.data)==null?void 0:u.email})]})]}),V.jsx("button",{className:Xn({className:"lg:hidden"}),children:"Logout"})]}),V.jsx("div",{children:r.map((c,d)=>V.jsx(Rj,{chat:c},d))}),V.jsxs("div",{className:"p-6 mt-auto",children:[V.jsx(Ho,{to:"/create-chat",className:Xn({intent:"dark",className:"w-full hidden lg:flex"}),children:"Create chat"}),V.jsx(Ho,{to:"/create-chat",className:Xn({intent:"dark",size:"large",className:"w-full flex lg:hidden"}),children:"Create chat"}),V.jsx("button",{disabled:t,onClick:o,className:Xn({className:"w-full max-lg:hidden mt-2"}),children:"Logout"})]})]})};function QP(){return V.jsx("div",{className:"fixed inset-0 w-full h-full bg-white/40 backdrop-blur-sm flex items-center justify-center",children:V.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[V.jsx("div",{className:"size-10 border-4 border-e-transparent animate-spin border-black rounded-full mb-4"}),V.jsx("span",{className:"text-sm text-black/75",children:"Please wait ..."})]})})}const kj=()=>{const t=ih(),e=Zs(),n=Ki(s=>s.user),r=Ki(s=>s.chats.status),i=async s=>{await Du(We,async o=>{o.update(Un(We,"profile",n.data.email),{lastActivity:s})})};return z.useEffect(()=>{if(n.status==="authenticated"){const s=Ye.fromDate(new Date);i(s);const o=setInterval(()=>{const a=Ye.fromDate(new Date);i(a)},3e4);return()=>clearInterval(o)}},[n]),z.useLayoutEffect(()=>{const s=X4(OR,o=>{t(k3(o!=null&&o.email?{email:o.email}:null)),o&&t(VR(o.email)).then(()=>{t(BR(o.email))}),!o&&t(D3("userUnauthenticated")),t(b3(o?"authenticated":"unauthenticated"))});return()=>{s()}},[]),n.status!=="loading"&&r!=="loading"?V.jsxs("div",{className:"lg:flex min-h-screen bg-[url('/background.svg')] bg-cover",children:[e.pathname!=="/login"&&V.jsx(Cj,{}),V.jsx(nj,{})]}):V.jsx(QP,{})},bj=()=>{const t=ha(e=>e.user);if(t.status==="authenticated")return V.jsx("div",{className:"bg-white rounded-full py-4 px-6 border shadow-sm text-sm m-auto font-semibold hidden lg:block",children:"First select a chat to start"});if(t.status==="unauthenticated")return V.jsx(tj,{to:"/login"})},xj=({email:t})=>{const e=ha(a=>a.user.data.email),[n,r]=z.useState(""),[i,s]=z.useState(!1),o=async()=>{s(!0),r(""),await fA(Bi(We,"chat_message"),{content:n,from:e,seen:!1,timestamp:Ye.fromDate(new Date),to:t,type:"text"}),s(!1)};return V.jsx("div",{className:"mt-5",children:V.jsxs("div",{className:"p-3 shadow-sm rounded-full border bg-white flex",children:[V.jsx("input",{type:"text",placeholder:"Type your message...",className:"focus:outline-none w-full max-w-none",value:n,onChange:a=>r(a.target.value)}),V.jsxs("button",{className:Xn({intent:"dark",className:`${i&&"pointer-events-none opacity-70"} !rounded-full`}),onClick:o,children:["Send",V.jsx($t,{icon:j6,className:"ms-1.5"})]})]})})},Nj=({profile:t})=>{const e=ha(a=>a.user.data),[n,r]=z.useState(),[i,s]=z.useState(0),o=async()=>{await Du(We,async a=>{a.update(Un(We,"chat_room",n.id),{isBlocked:!n.isBlocked,blockedFrom:n.blockedFrom?"":e==null?void 0:e.email})})};return z.useEffect(()=>{const a=setInterval(()=>s(Ye.now().seconds),5e3),u=sa(Bi(We,"chat_room"),jd(ko(mt("user_2","==",t.email),mt("user_1","==",e==null?void 0:e.email)),ko(mt("user_1","==",t.email),mt("user_2","==",e==null?void 0:e.email))),oA(1)),c=Cl(u,d=>{d.forEach(h=>{r({...h.data(),id:h.id})})});return()=>{clearInterval(a),c()}},[t]),V.jsxs("div",{className:"flex items-center mt-4",children:[V.jsx(Ho,{to:"/",className:"lg:hidden me-2.5",children:V.jsx($t,{icon:GP,size:"lg"})}),V.jsx("div",{className:"bg-white border shadow-sm px-4 py-3 rounded-full w-full",children:V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{className:"flex items-center",children:[t.photoUrl?V.jsx("img",{src:t.photoUrl,alt:"profile",className:"size-12 object-cover rounded-full"}):V.jsx("div",{className:"size-12 border-2 rounded-full bg-base flex items-center justify-center",children:V.jsx($t,{icon:Av,size:"lg"})}),V.jsxs("div",{className:"ps-2 flex flex-col",children:[V.jsx("span",{className:"text-sm text-black/75 font-bold",children:t.name}),i-t.lastActivity.seconds<65&&i!==0&&V.jsx("span",{className:"text-blue-500 text-xs font-medium inline-block mt-1",children:"Online"})]})]}),n&&(n.blockedFrom===(e==null?void 0:e.email)||!n.isBlocked)&&V.jsx("button",{className:Xn({intent:n.isBlocked?"default":"danger",className:"!rounded-full"}),onClick:o,children:n.isBlocked?"Unblock":"Block"})]})})]})},Dj=({message:t})=>{var r,i,s,o;const e=ha(a=>a.user),n=async()=>{const a=Un(We,"chat_message",t.id);await Du(We,async u=>{u.update(a,{seen:!0})})};return z.useEffect(()=>{var a;((a=e.data)==null?void 0:a.email)===t.to&&n()},[e]),V.jsx(V.Fragment,{children:V.jsx("div",{className:`flex ${((r=e.data)==null?void 0:r.email)!==t.from&&"justify-end"} mt-1`,children:V.jsxs("div",{className:`${((i=e.data)==null?void 0:i.email)===t.from?"bg-blue-600 text-white":"bg-white border"} w-fit max-w-[400px] min-w-32 shadow-sm p-3 text-sm rounded-lg`,children:[t.content,V.jsxs("div",{className:"mt-1 flex justify-end",children:[V.jsx("div",{className:`text-xs ${((s=e.data)==null?void 0:s.email)===t.from?"text-white/50":"text-black/50"}`,children:`${new Date(t.timestamp.seconds*1e3).getHours()}:${new Date(t.timestamp.seconds*1e3).getMinutes()}`}),t.from===((o=e.data)==null?void 0:o.email)&&V.jsxs("div",{className:"translate-y-[-1px] ms-1",children:[t.seen&&V.jsx($t,{icon:GE,width:10,height:10,className:"translate-x-[5px] text-white"}),V.jsx($t,{icon:GE,width:10,height:10})]})]})]})})})},Oj=()=>{const t=ha(d=>d.user.data),{email:e}=$5(),[n,r]=z.useState(!0),[i,s]=z.useState(),[o,a]=z.useState([]),[u,c]=z.useState();if(z.useEffect(()=>{const d=sa(Bi(We,"chat_message"),jd(ko(mt("from","==",e),mt("to","==",t==null?void 0:t.email)),ko(mt("to","==",e),mt("from","==",t==null?void 0:t.email))),kL("timestamp","asc")),h=Cl(d,S=>{let P=[];S.forEach(C=>{P.push({...C.data(),id:C.id})}),a(P)}),p=Un(We,"profile",String(e)),_=Cl(p,S=>{s({...S.data(),email:S.id})});return()=>{h(),_()}},[e]),z.useEffect(()=>{if(i){const d=sa(Bi(We,"chat_room"),jd(ko(mt("user_2","==",i.email),mt("user_1","==",t==null?void 0:t.email)),ko(mt("user_1","==",i.email),mt("user_2","==",t==null?void 0:t.email))),oA(1)),h=Cl(d,p=>{p.forEach(_=>{c({..._.data(),id:_.id})})});return()=>h()}},[i]),z.useEffect(()=>{i&&u&&o&&r(!1)},[i,u,o,e]),n)return V.jsx(QP,{});if(i&&u)return V.jsxs("div",{className:"w-full max-w-[800px] min-h-screen mx-auto flex flex-col px-5",children:[V.jsx(Nj,{profile:i}),V.jsxs("div",{className:"h-full flex flex-col justify-end py-5 mt-auto",children:[o.map(d=>V.jsx(Dj,{message:d},d.id)),V.jsxs("div",{children:[u.isBlocked!=="loading"&&u.blockedFrom===(t==null?void 0:t.email)&&V.jsx("div",{className:"text-center pb-5 mt-auto",children:V.jsxs("span",{children:["You have blocked ",i.name]})}),u.isBlocked&&u.blockedFrom===e&&V.jsx("div",{className:"text-center pb-5 mt-auto",children:V.jsxs("span",{children:["You have been blocked by ",i.name]})}),!u.isBlocked&&e&&V.jsx(xj,{email:e})]})]})]});OP("/not-found")},Lj=()=>V.jsx(V.Fragment,{children:V.jsxs("div",{className:"flex justify-center items-center text-4xl font-black",children:[V.jsx("div",{className:"bg-black text-center flex items-center justify-center text-white w-[50px] h-[50px] me-[4px] rounded-full",children:V.jsx("span",{children:"C"})}),"HATIX"]})}),Mj={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Vj=()=>{const t=gR(),e=async()=>{const n=new Lr;n.addScope("https://www.googleapis.com/auth/contacts.readonly"),t.useDeviceLanguage();const r=await _V(t,n);if(r.user.email){const i=Un(We,"profile",r.user.email);(await Uf(i)).exists()||await NL(Un(We,"profile",r.user.email),{biography:"",isOnline:!0,name:"New user",photoUrl:""}),OP("/")}};return V.jsx("div",{className:"flex min-h-screen w-full justify-center items-center",children:V.jsxs("div",{className:"bg-white rounded-xl p-10 w-full max-w-[450px] shadow",children:[V.jsx("div",{className:"border-b pb-7",children:V.jsx(Lj,{})}),V.jsx("h1",{className:"text-2xl font-bold mb-2 mt-5",children:"Login"}),V.jsxs("span",{className:"text-sm text-black/60",children:["Welcome to ",V.jsx("span",{className:"font-bold text-black",children:"Chatix"})]}),V.jsxs("button",{onClick:e,className:Xn({className:"w-full mt-4"}),children:[V.jsx($t,{icon:Mj,className:"size-5 me-2.5"}),"Signin with google"]})]})})},ig=qR("block w-full max-w-none outline-none",{variants:{intent:{default:"border bg-white focus:border-black/15"},size:{medium:"p-2 rounded-lg text-sm"}},defaultVariants:{intent:"default",size:"medium"}});function Fj(){const t=ih(),e=Ki(d=>d.user),n=rh(),[r,i]=z.useState(""),[s,o]=z.useState(!1),[a,u]=z.useState(""),c=async d=>{d.preventDefault(),o(!0);const h=Un(We,"profile",r);(await Uf(h)).exists()?(await fA(Bi(We,"chat_room"),{user_1:e.data.email,user_2:r,isBlocked:!1,blockedFrom:""}),t($R({user_1:e.data.email,user_2:r})).then(()=>{n(`/chat/${r}`)})):(u("There is no user with this email"),setTimeout(()=>{u("")},1e4)),i(""),o(!1)};return V.jsx(V.Fragment,{children:V.jsxs("div",{className:"bg-white rounded-xl shadow-sm border p-8 h-fit m-auto w-full max-w-lg",children:[V.jsx("h2",{className:"font-bold text-2xl",children:"Create chat"}),V.jsx("p",{className:"text-sm mt-3 text-black/60",children:"Enter the desired person's email to create a new chat"}),a&&V.jsxs("div",{className:"bg-red-500/5 border text-sm text-red-500 border-red-500/50 rounded-lg p-3 mt-5 flex items-center",children:[V.jsx($t,{className:"me-2.5 size-5",icon:B6}),a]}),V.jsxs("form",{onSubmit:c,className:"mt-5",children:[V.jsx("label",{htmlFor:"",children:"Email:"}),V.jsx("input",{type:"email",required:!0,className:ig(),value:r,onChange:d=>i(d.target.value)}),V.jsx("button",{type:"submit",disabled:s,className:Xn({intent:"dark",size:"large",className:"w-full mt-5"}),children:"Create"})]})]})})}function Uj(){const[t,e]=z.useState(!1),n=ih(),r=Ki(p=>p.user.data.email),i=Ki(p=>p.user.profile),[s,o]=z.useState(i),[a,u]=z.useState(null),c=z.useRef(null),d=()=>{if(c.current){const p=new DataTransfer;c.current.files=p.files,u(null)}},h=()=>{e(!0),n(FR({userEmail:r,biography:s.biography,name:s.name,profileImage:a,defaultProfileUrl:i.photoUrl})).then(()=>{e(!1),d()})};return V.jsxs("div",{className:"p-4 min-h-screen w-full flex flex-col items-start",children:[V.jsx(Ho,{to:"/",className:"lg:hidden",children:V.jsx($t,{icon:GP,size:"lg"})}),V.jsxs("div",{className:"p-8 rounded-xl bg-white shadow-sm border w-full max-w-2xl m-auto h-fit",children:[V.jsx("h2",{className:"font-bold text-2xl pb-[11px] border-b",children:"Edit profile"}),V.jsxs("div",{className:"grid grid-cols-2 mt-3 gap-4",children:[V.jsxs("div",{children:[V.jsx("label",{htmlFor:"name",className:"text-sm inline-block mb-1",children:"Name"}),V.jsx("input",{id:"name",value:s.name,onChange:p=>o(_=>({..._,name:p.target.value})),type:"text",className:ig()})]}),V.jsxs("div",{children:[V.jsx("label",{htmlFor:"profileImage",className:"text-sm inline-block mb-1",children:"New profile image"}),V.jsx("input",{id:"profileImage",accept:"image/*",onChange:p=>u(p.target.files[0]),type:"file",hidden:!0,ref:c}),a?V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{className:"flex items-center",children:[V.jsx("img",{src:URL.createObjectURL(a),className:"object-cover size-8 me-2.5 rounded-md"}),V.jsxs("div",{children:[V.jsx("div",{className:"text-sm mb-0.5",children:a.name}),V.jsxs("div",{className:"text-xs text-black/60",children:[(a.size/10**6).toFixed(2)," MB"]})]})]}),V.jsx("button",{className:Xn({intent:"danger",className:"size-8"}),onClick:d,children:V.jsx($t,{icon:bP})})]}):V.jsxs("label",{htmlFor:"profileImage",className:Xn(),children:[V.jsx($t,{icon:Aj,className:"me-2"}),"Choose file"]})]})]}),V.jsxs("div",{className:"mt-4",children:[V.jsxs("label",{htmlFor:"biography",className:"text-sm inline-block mb-1",children:["Biography",V.jsxs("span",{className:"text-xs font-light text-black/75 ms-1.5",children:[s.biography.length,"/180"]})]}),V.jsx("textarea",{value:s.biography,onChange:p=>o(_=>({..._,biography:p.target.value})),className:ig(),maxLength:180,rows:3,id:"biography"})]}),V.jsx("button",{disabled:t,className:Xn({intent:"dark",size:"large",className:"w-full mt-4"}),onClick:h,children:"Submit changes"})]})]})}const jj=cj([{path:"/",element:V.jsx(kj,{}),children:[{path:"/",element:V.jsx(bj,{})},{path:"/create-chat",element:V.jsx(Fj,{})},{path:"/chat/:email",element:V.jsx(Oj,{})},{path:"/login",element:V.jsx(Vj,{})},{path:"/edit-profile",element:V.jsx(Uj,{})}]}]);function zj(){return V.jsx("div",{className:"min-h-screen",children:V.jsx(lx,{store:O3,children:V.jsx(_j,{router:jj})})})}yp.createRoot(document.getElementById("root")).render(V.jsx(zj,{}));
