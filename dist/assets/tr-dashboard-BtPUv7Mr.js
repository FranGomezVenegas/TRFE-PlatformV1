const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tr-default-Dss8_bYx.js","assets/index-D3UNHSMc.js"])))=>i.map(i=>d[i]);
var pa=Object.defineProperty,ua=Object.defineProperties;var ma=Object.getOwnPropertyDescriptors;var _i=Object.getOwnPropertySymbols;var ha=Object.prototype.hasOwnProperty,fa=Object.prototype.propertyIsEnumerable;var ki=(i,e,t)=>e in i?pa(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Me=(i,e)=>{for(var t in e||(e={}))ha.call(e,t)&&ki(i,t,e[t]);if(_i)for(var t of _i(e))fa.call(e,t)&&ki(i,t,e[t]);return i},ft=(i,e)=>ua(i,ma(e));import{p as Ci,u as ba,q as co,s as ye,x as m,i as q,_ as p,e as J,A as I,r as U,v as lo,l as ga,w as Te,y as re,a as xe,z as va,n as $,B as Et,C as po,o as Ee,E as ya,F as ge,g as uo,j as mo,h as xa,k as wa}from"./index-D3UNHSMc.js";import{g as Ht,b as _a,c as ka,d as Ai,e as Si,f as Ca,h as Dr,I as qr,t as N}from"./list-item-BNcmRXHV.js";/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const zi=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Br=(i,e,t=null)=>{for(;e!==t;){const r=e.nextSibling;i.removeChild(e),e=r}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ue=`{{lit-${String(Math.random()).slice(2)}}}`,ho=`<!--${ue}-->`,Ei=new RegExp(`${ue}|${ho}`),Qe="$lit$";class fo{constructor(e,t){this.parts=[],this.element=t;const r=[],o=[],a=document.createTreeWalker(t.content,133,null,!1);let s=0,n=-1,c=0;const{strings:u,values:{length:l}}=e;for(;c<l;){const d=a.nextNode();if(d===null){a.currentNode=o.pop();continue}if(n++,d.nodeType===1){if(d.hasAttributes()){const f=d.attributes,{length:h}=f;let y=0;for(let _=0;_<h;_++)Ii(f[_].name,Qe)&&y++;for(;y-- >0;){const _=u[c],k=tr.exec(_)[2],C=k.toLowerCase()+Qe,v=d.getAttribute(C);d.removeAttribute(C);const w=v.split(Ei);this.parts.push({type:"attribute",index:n,name:k,strings:w}),c+=w.length-1}}d.tagName==="TEMPLATE"&&(o.push(d),a.currentNode=d.content)}else if(d.nodeType===3){const f=d.data;if(f.indexOf(ue)>=0){const h=d.parentNode,y=f.split(Ei),_=y.length-1;for(let k=0;k<_;k++){let C,v=y[k];if(v==="")C=be();else{const w=tr.exec(v);w!==null&&Ii(w[2],Qe)&&(v=v.slice(0,w.index)+w[1]+w[2].slice(0,-Qe.length)+w[3]),C=document.createTextNode(v)}h.insertBefore(C,d),this.parts.push({type:"node",index:++n})}y[_]===""?(h.insertBefore(be(),d),r.push(d)):d.data=y[_],c+=_}}else if(d.nodeType===8)if(d.data===ue){const f=d.parentNode;(d.previousSibling===null||n===s)&&(n++,f.insertBefore(be(),d)),s=n,this.parts.push({type:"node",index:n}),d.nextSibling===null?d.data="":(r.push(d),n--),c++}else{let f=-1;for(;(f=d.data.indexOf(ue,f+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(const d of r)d.parentNode.removeChild(d)}}const Ii=(i,e)=>{const t=i.length-e.length;return t>=0&&i.slice(t)===e},bo=i=>i.index!==-1,be=()=>document.createComment(""),tr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Hr=133;function go(i,e){const{element:{content:t},parts:r}=i,o=document.createTreeWalker(t,Hr,null,!1);let a=Ze(r),s=r[a],n=-1,c=0;const u=[];let l=null;for(;o.nextNode();){n++;const d=o.currentNode;for(d.previousSibling===l&&(l=null),e.has(d)&&(u.push(d),l===null&&(l=d)),l!==null&&c++;s!==void 0&&s.index===n;)s.index=l!==null?-1:s.index-c,a=Ze(r,a),s=r[a]}u.forEach(d=>d.parentNode.removeChild(d))}const Aa=i=>{let e=i.nodeType===11?0:1;const t=document.createTreeWalker(i,Hr,null,!1);for(;t.nextNode();)e++;return e},Ze=(i,e=-1)=>{for(let t=e+1;t<i.length;t++){const r=i[t];if(bo(r))return t}return-1};function Sa(i,e,t=null){const{element:{content:r},parts:o}=i;if(t==null){r.appendChild(e);return}const a=document.createTreeWalker(r,Hr,null,!1);let s=Ze(o),n=0,c=-1;for(;a.nextNode();)for(c++,a.currentNode===t&&(n=Aa(e),t.parentNode.insertBefore(e,t));s!==-1&&o[s].index===c;){if(n>0){for(;s!==-1;)o[s].index+=n,s=Ze(o,s);return}s=Ze(o,s)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const vo=new WeakMap,yo=i=>(...e)=>{const t=i(...e);return vo.set(t,!0),t},rt=i=>typeof i=="function"&&vo.has(i);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Z={},Ct={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class rr{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)r!==void 0&&r.setValue(e[t]),t++;for(const r of this.__parts)r!==void 0&&r.commit()}_clone(){const e=zi?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a=0,s=0,n,c=o.nextNode();for(;a<r.length;){if(n=r[a],!bo(n)){this.__parts.push(void 0),a++;continue}for(;s<n.index;)s++,c.nodeName==="TEMPLATE"&&(t.push(c),o.currentNode=c.content),(c=o.nextNode())===null&&(o.currentNode=t.pop(),c=o.nextNode());if(n.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(c.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));a++}return zi&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $i=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:i=>i}),za=` ${ue} `;class xo{constructor(e,t,r,o){this.strings=e,this.values=t,this.type=r,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const a=this.strings[o],s=a.lastIndexOf("<!--");r=(s>-1||r)&&a.indexOf("-->",s+1)===-1;const n=tr.exec(a);n===null?t+=a+(r?za:ho):t+=a.substr(0,n.index)+n[1]+n[2]+Qe+n[3]+ue}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return $i!==void 0&&(t=$i.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ur=i=>i===null||!(typeof i=="object"||typeof i=="function"),ir=i=>Array.isArray(i)||!!(i&&i[Symbol.iterator]);class wo{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let o=0;o<r.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new It(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(t===1&&e[0]===""&&e[1]===""){const a=r[0].value;if(typeof a=="symbol")return String(a);if(typeof a=="string"||!ir(a))return a}let o="";for(let a=0;a<t;a++){o+=e[a];const s=r[a];if(s!==void 0){const n=s.value;if(Ur(n)||!ir(n))o+=typeof n=="string"?n:String(n);else for(const c of n)o+=typeof c=="string"?c:String(c)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class It{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==Z&&(!Ur(e)||e!==this.value)&&(this.value=e,rt(e)||(this.committer.dirty=!0))}commit(){for(;rt(this.value);){const e=this.value;this.value=Z,e(this)}this.value!==Z&&this.committer.commit()}}class $t{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(be()),this.endNode=e.appendChild(be())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=be()),e.__insert(this.endNode=be())}insertAfterPart(e){e.__insert(this.startNode=be()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;rt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Z,t(this)}const e=this.__pendingValue;e!==Z&&(Ur(e)?e!==this.value&&this.__commitText(e):e instanceof xo?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):ir(e)?this.__commitIterable(e):e===Ct?(this.value=Ct,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const r=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof rr&&this.value.template===t)this.value.update(e.values);else{const r=new rr(t,e.processor,this.options),o=r._clone();r.update(e.values),this.__commitNode(o),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r=0,o;for(const a of e)o=t[r],o===void 0&&(o=new $t(this.options),t.push(o),r===0?o.appendIntoPart(this):o.insertAfterPart(t[r-1])),o.setValue(a),o.commit(),r++;r<t.length&&(t.length=r,this.clear(o&&o.endNode))}clear(e=this.startNode){Br(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ea{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,r.length!==2||r[0]!==""||r[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;rt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Z,t(this)}if(this.__pendingValue===Z)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Z}}class Ia extends wo{constructor(e,t,r){super(e,t,r),this.single=r.length===2&&r[0]===""&&r[1]===""}_createPart(){return new _o(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _o extends It{}let ko=!1;(()=>{try{const i={get capture(){return ko=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch(i){}})();class $a{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=o=>this.handleEvent(o)}setValue(e){this.__pendingValue=e}commit(){for(;rt(this.__pendingValue);){const a=this.__pendingValue;this.__pendingValue=Z,a(this)}if(this.__pendingValue===Z)return;const e=this.__pendingValue,t=this.value,r=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=e!=null&&(t==null||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=Ta(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Z}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Ta=i=>i&&(ko?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Pa(i){let e=it.get(i.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},it.set(i.type,e));let t=e.stringsArray.get(i.strings);if(t!==void 0)return t;const r=i.strings.join(ue);return t=e.keyString.get(r),t===void 0&&(t=new fo(i,i.getTemplateElement()),e.keyString.set(r,t)),e.stringsArray.set(i.strings,t),t}const it=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Le=new WeakMap,Ra=(i,e,t)=>{let r=Le.get(e);r===void 0&&(Br(e,e.firstChild),Le.set(e,r=new $t(Object.assign({templateFactory:Pa},t))),r.appendInto(e)),r.setValue(i),r.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ma{handleAttributeExpressions(e,t,r,o){const a=t[0];return a==="."?new Ia(e,t.slice(1),r).parts:a==="@"?[new $a(e,t.slice(1),o.eventContext)]:a==="?"?[new Ea(e,t.slice(1),r)]:new wo(e,t,r).parts}handleTextExpression(e){return new $t(e)}}const La=new Ma;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const E=(i,...e)=>new xo(i,e,"html",La);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Co=(i,e)=>`${i}--${e}`;let At=!0;typeof window.ShadyCSS=="undefined"?At=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),At=!1);const Na=i=>e=>{const t=Co(e.type,i);let r=it.get(t);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},it.set(t,r));let o=r.stringsArray.get(e.strings);if(o!==void 0)return o;const a=e.strings.join(ue);if(o=r.keyString.get(a),o===void 0){const s=e.getTemplateElement();At&&window.ShadyCSS.prepareTemplateDom(s,i),o=new fo(e,s),r.keyString.set(a,o)}return r.stringsArray.set(e.strings,o),o},Oa=["html","svg"],Fa=i=>{Oa.forEach(e=>{const t=it.get(Co(e,i));t!==void 0&&t.keyString.forEach(r=>{const{element:{content:o}}=r,a=new Set;Array.from(o.querySelectorAll("style")).forEach(s=>{a.add(s)}),go(r,a)})})},Ao=new Set,Da=(i,e,t)=>{Ao.add(i);const r=t?t.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:a}=o;if(a===0){window.ShadyCSS.prepareTemplateStyles(r,i);return}const s=document.createElement("style");for(let u=0;u<a;u++){const l=o[u];l.parentNode.removeChild(l),s.textContent+=l.textContent}Fa(i);const n=r.content;t?Sa(t,s,n.firstChild):n.insertBefore(s,n.firstChild),window.ShadyCSS.prepareTemplateStyles(r,i);const c=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(t){n.insertBefore(s,n.firstChild);const u=new Set;u.add(s),go(t,u)}},qa=(i,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const r=t.scopeName,o=Le.has(e),a=At&&e.nodeType===11&&!!e.host,s=a&&!Ao.has(r),n=s?document.createDocumentFragment():e;if(Ra(i,n,Object.assign({templateFactory:Na(r)},t)),s){const c=Le.get(n);Le.delete(n);const u=c.value instanceof rr?c.value.template:void 0;Da(r,n,u),Br(e,e.firstChild),e.appendChild(n),Le.set(e,c)}!o&&a&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var So;window.JSCompiler_renameProperty=(i,e)=>i;const or={toAttribute(i,e){switch(e){case Boolean:return i?"":null;case Object:case Array:return i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){switch(e){case Boolean:return i!==null;case Number:return i===null?null:Number(i);case Object:case Array:return JSON.parse(i)}return i}},zo=(i,e)=>e!==i&&(e===e||i===i),Ut={attribute:!0,type:String,converter:or,reflect:!1,hasChanged:zo},jt=1,Vt=4,Gt=8,Wt=16,ar="finalized";class Eo extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const o=this._attributeNameForProperty(r,t);o!==void 0&&(this._attributeToPropertyMap.set(o,r),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,r)=>this._classProperties.set(r,t))}}static createProperty(e,t=Ut){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r=typeof e=="symbol"?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdateInternal(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Ut}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ar)||e.finalize(),this[ar]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const o of r)this.createProperty(o,t[o])}}static _attributeNameForProperty(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=zo){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,o=t.converter||or,a=typeof o=="function"?o:o.fromAttribute;return a?a(e,r):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const r=t.type,o=t.converter;return(o&&o.toAttribute||or.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const r=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,r)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=Ut){const o=this.constructor,a=o._attributeNameForProperty(e,r);if(a!==void 0){const s=o._propertyValueToAttribute(t,r);if(s===void 0)return;this._updateState=this._updateState|Gt,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._updateState=this._updateState&~Gt}}_attributeToProperty(e,t){if(this._updateState&Gt)return;const r=this.constructor,o=r._attributeToPropertyMap.get(e);if(o!==void 0){const a=r.getPropertyOptions(o);this._updateState=this._updateState|Wt,this[o]=r._propertyValueFromAttribute(t,a),this._updateState=this._updateState&~Wt}}requestUpdateInternal(e,t,r){let o=!0;if(e!==void 0){const a=this.constructor;r=r||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),r.reflect===!0&&!(this._updateState&Wt)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|Vt;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&Vt}get hasUpdated(){return this._updateState&jt}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(r){throw e=!1,this._markUpdated(),r}e&&(this._updateState&jt||(this._updateState=this._updateState|jt,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Vt}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,r)=>this._propertyToAttribute(r,this[r],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}So=ar;Eo[So]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ba=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ha=(i,e,t)=>{e.constructor.createProperty(t,i)};function x(i){return(e,t)=>t!==void 0?Ha(i,e,t):Ba(i,e)}function at(i,e){return(t,r)=>{const o={get(){return this.renderRoot.querySelector(i)},enumerable:!0,configurable:!0};return r!==void 0?Io(o,t,r):$o(o,t)}}const Io=(i,e,t)=>{Object.defineProperty(e,t,i)},$o=(i,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:i}),Ti=Element.prototype,Ua=Ti.msMatchesSelector||Ti.webkitMatchesSelector;function To(i="",e=!1,t=""){return(r,o)=>{const a={get(){const s=`slot${i?`[name=${i}]`:":not([name])"}`,n=this.renderRoot.querySelector(s);let c=n&&n.assignedNodes({flatten:e});return c&&t&&(c=c.filter(u=>u.nodeType===Node.ELEMENT_NODE&&(u.matches?u.matches(t):Ua.call(u,t)))),c},enumerable:!0,configurable:!0};return o!==void 0?Io(a,r,o):$o(a,r)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Pi={};class ae extends Eo{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(a,s)=>a.reduceRight((n,c)=>Array.isArray(c)?t(c,n):(n.add(c),n),s),r=t(e,new Set),o=[];r.forEach(a=>o.unshift(a)),this._styles=o}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Ci){const r=Array.prototype.slice.call(t.cssRules).reduce((o,a)=>o+a.cssText,"");return ba(r)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):Ci?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Pi&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(r=>{const o=document.createElement("style");o.textContent=r.cssText,this.renderRoot.appendChild(o)}))}render(){return Pi}}ae.finalized=!0;ae.render=qa;ae.shadowRootOptions={mode:"open"};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Xt=new WeakMap,L=yo(i=>e=>{const t=Xt.get(e);if(i===void 0&&e instanceof It){if(t!==void 0||!Xt.has(e)){const r=e.committer.name;e.committer.element.removeAttribute(r)}}else i!==t&&e.setValue(i);Xt.set(e,i)});/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ja{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const r of t)this.classes.add(r)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const Ri=new WeakMap,Va=yo(i=>e=>{if(!(e instanceof It)||e instanceof _o||e.committer.name!=="class"||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:t}=e,{element:r}=t;let o=Ri.get(e);o===void 0&&(r.setAttribute("class",t.strings.join(" ")),Ri.set(e,o=new Set));const a=r.classList||new ja(r);o.forEach(s=>{s in i||(a.remove(s),o.delete(s))});for(const s in i){const n=i[s];n!=o.has(s)&&(n?(a.add(s),o.add(s)):(a.remove(s),o.delete(s)))}typeof a.commit=="function"&&a.commit()});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jr(i){return co({finisher:(e,t)=>{Object.assign(e.prototype[t],i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Po(i){return co({descriptor:e=>({async get(){var t;return await this.updateComplete,(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector(i)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ga=class extends ye{render(){return m`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}};/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Wa=q`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let sr=class extends Ga{};sr.styles=[Wa];sr=p([J("md-icon")],sr);const de={proceduresOption:{tabLabel_en:"Procedures",tabLabel_es:"Procesos"},windowOpenable:{en:"Window has pending linked SOP certifications",es:"La ventana tiene SOPs vinculados pendientes de certificación"}};class Xa extends ye{static get styles(){return q`
      .menu-item {
        transition: background-color 0.3s, color 0.3s;
        cursor: pointer;
      }
      .menu-item:hover {
        background-color: #32C3EC;
        color: white;
      }
      .sublist {
        display: none;
        padding-left: 20px;
      }
      .menu-item:hover .sublist {
        display: block;
      }
      md-icon {
        transition: transform 0.3s;
      }
      .menu-item:hover md-icon {
        transform: scale(1.1);
      }
      .sp-menu-item {
        background: linear-gradient(79deg, rgb(56, 76, 142), rgb(41, 6, 78));
      }
      .flex-row {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}static get properties(){return{procAccess:{type:Array},collapses:{type:Array}}}constructor(){super(),this.procAccess=[],this.collapses=[]}firstUpdated(){this.collapses=[];let e=JSON.parse(sessionStorage.getItem("userSession"));e.procedures_list.procedures.forEach(t=>this.collapses.push({proc:t.procInstanceName,val:!1})),this.procAccess=e.procedures_list.procedures.map(t=>t)}updateProceduresMenu(){let e=JSON.parse(sessionStorage.getItem("userSession"));this.procAccess=e.procedures_list.procedures.map(t=>t),this.requestUpdate()}setCollapses(e){this.collapses.forEach(t=>{t.proc==e.procInstanceName?t.val=!t.val:t.val=!1}),this.requestUpdate()}getCollapse(e){return this.collapses.filter(r=>r.proc==e.procInstanceName)[0].val}mobileVersion(){return m`
      <style>
      md-icon{
        color: #32C3EC;
      }
      md-list-item {
        font-size: 1.2em; /* Adjust the size as needed */
        font-family: Myriad Pro;
        color: rgb(36, 192, 235);
        font-weight: bold;
        height: 2.3em; /* Provides more space for each item */
        padding: 0.5em; /* Adds some padding for touch targets */
        position: relative; /* Required for positioning the pseudo-element */
        linear-gradient(166deg, rgb(132 228 255) 2.85%, rgb(255, 255, 255) 71.66%);
      }
      
      md-list-item::before {
        content: '•'; /* The bullet character */
        color: rgb(36, 192, 235); /* Bullet color */
        font-size: 1.2em; /* Bullet size, adjust as needed */
        position: absolute;
        left: -1.5em; /* Adjust horizontal position */
        top: 50%;
        transform: translateY(-50%); /* Center the bullet vertically */
      }
      
      </style>
      <md-list class="sublist" ?hidden="${!this.procCollapse}">
        ${this.procAccess.map(e=>m`
          <div class="${e.procInstanceName}">
            <md-list-item @click="${()=>this.setCollapses(e)}">
              <span style="margin-left:2vw; font-weight: bold; font-size:16px;">${e["label_"+this.lang]}</span>
            </md-list-item>
            <md-list class="sublist two" ?hidden="${!this.getCollapse(e)}">
              ${e.icons_up!==void 0&&e.icons_up.length?m`
                  <md-list-item style="pointer-events: none">
                    <div class="subproc">
                      ${e.icons_up.map(t=>m`${t.icon_name=="icons:search"?m`<md-icon style="--mdc-icon-size:2vw;pointer-events: auto;margin-right:15px;"
                          @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)}>search</md-icon>`:m`<img src="${t.icon_name}" style="width:2.2vw; pointer-events: auto;margin-right:1.5vw;" @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)}>`}`)}
                    </div>
                  </md-list-item>
                `:I}
              ${e.new_definition===void 0?m``:m`
              ${e.new_definition.map(t=>m`
                  ${t.label_en?m`
                      <md-list-item style=${t.icons?this.setCertifiedPointer(t.icons):""}>
                        <div class="subproc">
                          ${t.icons?m`
                              ${t.icons.map((r,o)=>m`
                                  <img title="${r.sops_passed==!1?de.windowOpenable[this.lang]:null}" 
                                    src="/images/${r.sops_passed?r.icon_name||`noImage${o}.png`:r.icon_name_when_not_certified||`noImage${o}.png`}" style="width:2.2vw; pointer-events: auto;margin-right:1.5vw;"
                                    @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}&filterName=${r.name}`)}>
                                `)}
                              <label title="${this.setCertifiedLabel(t.icons)}" style="font-size:14px; margin-left: 0.2vw; color: ${this.setCertifiedColor(t.icons)}">${t["label_"+this.lang]}</label>
                            `:m`
                              <label title="${t.sops_passed==!1?de.windowOpenable[this.lang]:null}" style="font-size:14px; margin-left: 2vw; cursor: pointer; color: ${t.sops_passed==!1?"red":"auto"}"
                                @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}&filterName=${t.name}`)}>${t["label_"+this.lang]}</label>
                            `}
                        </div>
                      </md-list-item>
                    `:I}
                `)}
              `}

              ${e.icons_up!==void 0&&e.icons_up.length?m`              
                ${e.icons_down.map(t=>m`
                    <md-list-item style="pointer-events: none">
                      <div class="subproc">
                        <img src="/images/noImage1.png" style="width:2.2vw; pointer-events: auto;margin-right:15px;">
                        <label style="margin-left: 2.5vw; pointer-events: none;">${t["label_"+this.lang]}</label>
                      </div>
                    </md-list-item>
                  `)}
                `:I}
            </md-list>
          </div>
          `)}
      </md-list>
    `}setCertifiedLabel(e){return e.filter(r=>r.sops_passed==!1).length?de.windowOpenable[this.lang]:null}setCertifiedColor(e){return e.filter(r=>r.sops_passed==!1).length?"red":"auto"}setCertifiedPointer(e){return e.filter(r=>r.sops_passed==!1).length?"":"pointer-events: none;"}desktopVersion2(){return m`  
    ${this.procAccess.map(e=>m`
    <div  class="menu-item" @click="${()=>this.setCollapses(e)}">
      ${e["label_"+this.lang]}
      <md-icon>arrow_right</md-icon>
      <div class="sublist">
        ${e.icons_up.length?m`
            <sp-menu-item style="background-color:#E3F0FA; pointer-events: none; height: 35px; width: 275px">
              <div style="display: flex;align-items:center;color:rgb(36, 192, 235); font-weight:bold;">
                ${e.icons_up.map(t=>m`${t.icon_name=="icons:search"?m`<md-icon style="--mdc-icon-size:2vw; pointer-events: auto;" @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)}>search</md-icon>`:m`<img src="${t.icon_name}" style="width:20px; pointer-events: auto;" @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)}>`}`)}
              </div>
            </sp-menu-item>
          `:I}
        ${e.new_definition.map(t=>m`
            ${t.label_en?m`
                ${t.icons?m`
                    <sp-menu-item style='; background:linear-gradient(79deg, rgb(56, 76, 142), rgb(41, 6, 78)); height: 35px; width: 275px;${this.setCertifiedPointer(t.icons)}'>
                      <div style="display: flex;align-items: center;color: rgb(36, 192, 235);font-weight:bold;">
                        ${t.icons.map((r,o)=>m`
                            <img title="${r.sops_passed==!1?de.windowOpenable[this.lang]:null}" 
                              src="/images/${r.sops_passed?r.icon_name||`noImage${o}.png`:r.icon_name_when_not_certified||`noImage${o}.png`}" style="width:20px; pointer-events: auto;margin-right:10px;"
                              @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}&filterName=${r.name}`)}>
                          `)}
                        <label title="${this.setCertifiedLabel(t.icons)}" style="margin-left: 10px; color: ${this.setCertifiedColor(t.icons)}">${t["label_"+this.lang]}</label>
                      </div>
                    </sp-menu-item>
                  `:m`
                    <sp-menu-item style='background-color:#E3F0FA; height: 35px; width: 275px; pointer-events: none;'>
                      <div style="display: flex;align-items: center;color: rgb(36, 192, 235); font-weight:bold;">
                        <label title="${t.sops_passed==!1?de.windowOpenable[this.lang]:null}" style="margin-left: 70px; pointer-events: auto; cursor: pointer; color: ${t.sops_passed==!1?"red":"auto"}"
                          @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}&filterName=${t.name}`)}>${t["label_"+this.lang]}</label>
                      </div>
                    </sp-menu-item>
                  `}
              `:I}
          `)}
        ${e.icons_down.length?m`
            <sp-menu-item style="background-color:#E3F0FA; pointer-events: none; height: 45px; width: 275px">
              <div style="display: flex;align-items: center;color: white; background-color:#D6E9F8;" >
                ${e.icons_down.map(t=>m`<img src="${t.icon_name}" style="width:20px; pointer-events: auto;">`)}
              </div>
            </sp-menu-item>
          `:I}        
      </div>
    </div>    
    `)}
    
  `}desktopVersion(){return m`
    <sp-action-menu class="topMenu" id="dashboardprocedures" size="m">
      <div slot="icon"></div>
      <span slot="label" @mouseover=${()=>this.menuHover("dashboardprocedures")}>${de.proceduresOption["tabLabel_"+this.lang]}</span>
      ${this.procAccess.map(e=>m`
          <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
            <sp-action-menu style="z-index:2; position:relative;" class="topMenu procMenu" id="${e.procInstanceName}" placement="right-start" size="m" 
              @mouseover=${this.subMenuHover}>
              <div slot="icon"></div>
              <span slot="label" style="color:rgb(36, 192, 235);font-weight:bold;">${e["label_"+this.lang]}</span>
              ${e.icons_up!==void 0?m`
                  <sp-menu-item style="background-color:#E3F0FA; pointer-events: none; height: 35px; width: 275px">
                    <div style="display: flex;align-items:center;color:rgb(36, 192, 235); font-weight:bold;">
                      ${e.icons_up.map(t=>m`${t.icon_name=="icons:search"?m`<md-icon style="--mdc-icon-size:2vw; pointer-events: auto;" @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)}>search</md-icon>`:m`<img src="${t.icon_name}" style="width:20px; pointer-events: auto;" @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)}>`}`)}
                    </div>
                  </sp-menu-item>
                `:I}
            ${e.new_definition!==void 0?m`
              ${e.new_definition.map(t=>m`
                  ${t.label_en?m`
                      ${t.icons?m`
                          <sp-menu-item style='; background:linear-gradient(166deg, rgb(132 228 255) 2.85%, rgb(255, 255, 255) 71.66%); height: 35px; width: 275px;${this.setCertifiedPointer(t.icons)}'>
                            <div style="display: flex;align-items: center;color: rgb(36, 192, 235);font-weight:bold;">
                              ${t.icons.map((r,o)=>m`
                                  <img title="${r.sops_passed==!1?de.windowOpenable[this.lang]:null}" 
                                    src="/images/${r.sops_passed?r.icon_name||`noImage${o}.png`:r.icon_name_when_not_certified||`noImage${o}.png`}" style="width:20px; pointer-events: auto;margin-right:10px;"
                                    @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}&filterName=${r.name}`)}>
                                `)}
                              <label title="${this.setCertifiedLabel(t.icons)}" style="margin-left: 10px; color: ${this.setCertifiedColor(t.icons)}">${t["label_"+this.lang]}</label>
                            </div>
                          </sp-menu-item>
                        `:m`
                          <sp-menu-item style='background:linear-gradient(166deg, rgb(132 228 255) 2.85%, rgb(255, 255, 255) 71.66%); height: 35px; width: 275px; pointer-events: none;'>
                            <div style="display: flex;align-items: center;color: rgb(36, 192, 235); font-weight:bold;">
                              <label title="${t.sops_passed==!1?de.windowOpenable[this.lang]:null}" style="margin-left: 70px; pointer-events: auto; cursor: pointer; color: ${t.sops_passed==!1?"red":"auto"}"
                                @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}&filterName=${t.name}`)}>${t["label_"+this.lang]}</label>
                            </div>
                          </sp-menu-item>
                        `}
                    `:I}
                `)}
            `:I}
              ${e.icons_down!==void 0?m`
                  <sp-menu-item style="background:linear-gradient(166deg, rgba(224 214 248 / 81%) 43.85%, rgba(255, 255, 255, 1) 58.66%); pointer-events: none; height: 45px; width: 275px">
                    <div style="display: flex;align-items: center;color: white; background-color:#D6E9F8;" >
                      ${e.icons_down.map(t=>m`<img src="${t.icon_name}" style="width:20px; pointer-events: auto;">`)}
                    </div>
                  </sp-menu-item>
                `:I}
            </sp-action-menu>
          </sp-menu-item>
          `)}
      </sp-action-menu>
    `}desktopVersion4(){return m`
      <sp-action-menu class="topMenu" id="dashboardprocedures" size="m">
        <div slot="icon"></div>
        <span slot="label">${de.proceduresOption["tabLabel_"+this.lang]}</span>
        ${this.procAccess.map(e=>m`
          <sp-menu-item style="color:rgb(36, 192, 235); font-weight:bold; background-color:#E3F0FA;">
            <sp-action-menu class="topMenu procMenu" id="${e.procInstanceName}" placement="right-start" size="m"
              @mouseover=${()=>this.subMenuHover(e.procInstanceName)}>
              <div slot="icon"></div>
              <span slot="label" style="color:rgb(36, 192, 235); font-weight:bold;">${e["label_"+this.lang]}</span>
              ${this.renderSubMenu(e)}
            </sp-action-menu>
          </sp-menu-item>
          `)}
      </sp-action-menu>
    `}renderSubMenu(e){return m`
    ${e.icons_up.map(t=>m`<sp-menu-item @mouseover=${r=>r.stopPropagation()} style="background-color:#E3F0FA;">
        <md-icon @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)} style="--mdc-icon-size:2vw;">${t.icon_name}</md-icon>
      </sp-menu-item>`)}
    ${e.new_definition.map(t=>m`
        <sp-menu-item @mouseover=${r=>r.stopPropagation()} style="background-color:#E3F0FA;">
          <div @click=${()=>this.selectedMenu(`/dashboard/procedures?procName=${e.procInstanceName}&viewName=${t.lp_frontend_page_name}`)} style="display: flex; align-items: center;">
            <label>${t["label_"+this.lang]}</label>
          </div>
        </sp-menu-item>
      `)}
  `}subMenuHover(e){clearTimeout(this.hoverTimeout),this.openedSubMenu?this.openedSubMenu.id==e.target.id?(e.target.open=!1,e.target.open=!0):e.target.getAttribute("class")=="topMenu procMenu"&&(this.openedSubMenu.open=!1,e.target.open=!0,this.openedSubMenu=e.target):e.target.getAttribute("class")=="topMenu procMenu"&&(e.target.open=!0,this.openedSubMenu=e.target),e.target.open&&setTimeout(()=>{document.querySelectorAll("sp-popover").forEach(r=>{r.style.setProperty("--spectrum-popover-background-color","rgb(3, 169, 244)"),r.style.borderBottom="1px solid black",r.style.boxShadow="1px 1px #888888",r.querySelectorAll("sp-menu").forEach(s=>{s.tabIndex<0&&(s.style.margin="0",s.style.width="280px")}),r.querySelectorAll("sp-menu-item").forEach(s=>{s.style.borderBottom="1px solid black",s.style.boxShadow="1px 1px #888"})})})}connectedCallback(){super.connectedCallback(),window.addEventListener("open-tab",this.handleOpenTab.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("open-tab",this.handleOpenTab.bind(this))}handleOpenTab(e){const{procName:t,vwName:r,fltrName:o}=e.detail;this.query.procName=t,this.query.filterName=o,this.query.viewName=r,this.selectedMenu(`/dashboard/procedures?procName=${t}&viewName=${vwNamee}&filterName=${o}`),this.requestUpdate()}}const nr=new Set,Ka=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";nr.forEach(e=>{e.setAttribute("dir",i)})},Ja=new MutationObserver(Ka);Ja.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Qa=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function Za(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!Qa(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)nr.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?nr.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}let Ro=class extends Za(ae){};function Ya(i,{validSizes:e=["s","m","l","xl"],noDefaultSize:t}={}){class r extends i{constructor(){super(...arguments),this._size="m"}get size(){return this._size||"m"}set size(a){const s=t?null:"m",n=a&&a.toLocaleLowerCase(),c=e.includes(n)?n:s;if(c&&this.setAttribute("size",c),this._size===c)return;const u=this._size;this._size=c,this.requestUpdate("size",u)}firstUpdated(a){super.firstUpdated(a),!this.hasAttribute("size")&&!t&&this.setAttribute("size",this.size)}}return p([x({type:String,reflect:!0})],r.prototype,"size",null),r}const es=U`
:host{--spectrum-button-line-height:1.3}#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(--spectrum-button-line-height);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(
--spectrum-picker-textonly-padding-left
);padding-right:var(--spectrum-picker-textonly-padding-right)}:host([dir=rtl]) #button{padding-left:var(--spectrum-picker-textonly-padding-right);padding-right:var(
--spectrum-picker-textonly-padding-left
)}#button{align-items:center;border-radius:var(--spectrum-picker-border-radius);border-style:solid;border-width:var(--spectrum-picker-border-size);display:flex;height:var(--spectrum-picker-height);justify-content:center;margin:0;min-width:var(--spectrum-picker-min-width);padding-bottom:0;padding-top:0;transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s);width:var(--spectrum-picker-width)}#button:disabled,:host([disabled]) #button{border-width:var(
--spectrum-picker-disabled-border-size
);cursor:default}:host([dir=ltr]) #button .icon{margin-right:var(
--spectrum-picker-icon-gap
)}:host([dir=rtl]) #button .icon{margin-left:var(
--spectrum-picker-icon-gap
)}.icon{flex-shrink:0}:host([dir=ltr]) #button #label+.icon{margin-left:var(
--spectrum-picker-icon-gap
)}:host([dir=rtl]) #button #label+.icon{margin-right:var(
--spectrum-picker-icon-gap
)}:host([size=s]){--spectrum-picker-border-size:var(
--spectrum-picker-s-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-text-size:var(
--spectrum-picker-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s)
);--spectrum-picker-height:var(
--spectrum-picker-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-s-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-s-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-s-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-s-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-min-width:var(
--spectrum-picker-s-min-width,var(--spectrum-global-dimension-size-450)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-s-popover-max-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-s-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-s)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-s-error-icon-margin-left,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-s-textonly-padding-left,var(--spectrum-alias-item-padding-s)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-s-textonly-padding-right,var(--spectrum-alias-item-padding-s)
)}:host([size=m]){--spectrum-picker-border-size:var(
--spectrum-picker-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-text-size:var(
--spectrum-picker-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-picker-height:var(
--spectrum-picker-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-m-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-m-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-m-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-m-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-min-width:var(
--spectrum-picker-m-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-m-popover-max-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-m-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-m)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-m-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-m-textonly-padding-left,var(--spectrum-alias-item-padding-m)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-m-textonly-padding-right,var(--spectrum-alias-item-padding-m)
)}:host([size=l]){--spectrum-picker-border-size:var(
--spectrum-picker-l-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-text-size:var(
--spectrum-picker-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-picker-height:var(
--spectrum-picker-l-height,var(--spectrum-alias-item-height-l)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-l-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-l-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-l-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-l-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-min-width:var(
--spectrum-picker-l-min-width,var(--spectrum-global-dimension-size-750)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-l-popover-max-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-l-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-l)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-l-error-icon-margin-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-l-textonly-padding-left,var(--spectrum-alias-item-padding-l)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-l-textonly-padding-right,var(--spectrum-alias-item-padding-l)
)}:host([size=xl]){--spectrum-picker-border-size:var(
--spectrum-picker-xl-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-picker-text-size:var(
--spectrum-picker-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-picker-height:var(
--spectrum-picker-xl-height,var(--spectrum-alias-item-height-xl)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-xl-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-xl-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-xl-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-xl-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-min-width:var(
--spectrum-picker-xl-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-xl-popover-max-width,var(--spectrum-global-dimension-size-3600)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-xl-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-xl)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-xl-error-icon-margin-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-xl-textonly-padding-left,var(--spectrum-alias-item-padding-xl)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-xl-textonly-padding-right,var(--spectrum-alias-item-padding-xl)
)}:host{--spectrum-picker-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-picker-disabled-border-size:0;--spectrum-picker-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-width:var(--spectrum-global-dimension-size-2400);--spectrum-picker-border-size-increase-focus:1px}:host([quiet]) #button{--spectrum-picker-border-size:0;--spectrum-picker-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0}:host([quiet]) #button{min-width:0;width:auto}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;font-size:var(--spectrum-picker-text-size);height:calc(var(--spectrum-picker-height) - var(--spectrum-picker-border-size)*2);line-height:calc(var(--spectrum-picker-height) - var(--spectrum-picker-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{font-style:var(--spectrum-picker-placeholder-text-font-style);font-weight:var(
--spectrum-picker-placeholder-text-font-weight
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;flex-shrink:0;position:relative;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;vertical-align:top}:host([dir=ltr]) .validationIcon{margin-left:var(
--spectrum-picker-error-icon-margin-left
)}:host([dir=rtl]) .validationIcon{margin-right:var(
--spectrum-picker-error-icon-margin-left
)}:host([dir=ltr]) #label~.picker{margin-left:var(
--spectrum-picker-ui-icon-gap
)}:host([dir=rtl]) #label~.picker{margin-right:var(
--spectrum-picker-ui-icon-gap
)}#popover{max-width:var(
--spectrum-picker-popover-max-width
)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc(-1*(var(
--spectrum-picker-quiet-m-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
)))}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc(-1*(var(
--spectrum-picker-quiet-m-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
)))}#button{background-color:var(
--spectrum-picker-m-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-picker-m-border-color,var(--spectrum-alias-border-color)
);color:var(
--spectrum-picker-m-text-color,var(--spectrum-alias-text-color)
)}#button:hover{background-color:var(
--spectrum-picker-m-background-color-hover,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-picker-m-border-color-hover,var(--spectrum-alias-border-color-hover)
);color:var(
--spectrum-picker-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#button:hover .picker{color:var(
--spectrum-picker-m-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}#button:active,:host([open]) #button{background-color:var(
--spectrum-picker-m-background-color-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-picker-m-border-color-down,var(--spectrum-alias-border-color-down)
)}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(
--spectrum-picker-m-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-picker-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-picker-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([invalid]) #button{border-color:var(
--spectrum-picker-m-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid]) #button .validationIcon{color:var(
--spectrum-picker-m-validation-icon-color-error,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]) #button:hover{border-color:var(
--spectrum-picker-m-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(
--spectrum-picker-m-border-color-error-down,var(--spectrum-global-color-red-600)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--spectrum-picker-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-picker-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#button:disabled .icon,#button:disabled .picker,#button:disabled .validationIcon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validationIcon{color:var(
--spectrum-picker-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.picker{color:var(
--spectrum-picker-m-icon-color,var(--spectrum-alias-icon-color)
)}#label.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color,var(--spectrum-alias-placeholder-text-color)
)}#label.placeholder:hover{color:var(
--spectrum-picker-m-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.placeholder:active{color:var(
--spectrum-picker-m-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color)
)}:host([quiet]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-quiet-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-picker-m-text-color,var(--spectrum-alias-text-color)
)}:host([quiet]) #button:hover{background-color:var(
--spectrum-picker-quiet-m-background-color-hover,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-picker-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-quiet-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-quiet-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-quiet-m-border-color-down,var(--spectrum-alias-border-color-transparent)
)}:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-picker-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validationIcon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`,ts=U`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp75,.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}
`;var rs=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};(function(i,e){(function(t,r){r()})(rs,function(){function t(o){var a=!0,s=!1,n=null,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(b){return!!(b&&b!==document&&b.nodeName!=="HTML"&&b.nodeName!=="BODY"&&"classList"in b&&"contains"in b.classList)}function l(b){var A=b.type,S=b.tagName;return!!(S==="INPUT"&&c[A]&&!b.readOnly||S==="TEXTAREA"&&!b.readOnly||b.isContentEditable)}function d(b){b.classList.contains("focus-visible")||(b.classList.add("focus-visible"),b.setAttribute("data-focus-visible-added",""))}function f(b){b.hasAttribute("data-focus-visible-added")&&(b.classList.remove("focus-visible"),b.removeAttribute("data-focus-visible-added"))}function h(b){b.metaKey||b.altKey||b.ctrlKey||(u(o.activeElement)&&d(o.activeElement),a=!0)}function y(b){a=!1}function _(b){u(b.target)&&(a||l(b.target))&&d(b.target)}function k(b){u(b.target)&&(b.target.classList.contains("focus-visible")||b.target.hasAttribute("data-focus-visible-added"))&&(s=!0,window.clearTimeout(n),n=window.setTimeout(function(){s=!1},100),f(b.target))}function C(b){document.visibilityState==="hidden"&&(s&&(a=!0),v())}function v(){document.addEventListener("mousemove",g),document.addEventListener("mousedown",g),document.addEventListener("mouseup",g),document.addEventListener("pointermove",g),document.addEventListener("pointerdown",g),document.addEventListener("pointerup",g),document.addEventListener("touchmove",g),document.addEventListener("touchstart",g),document.addEventListener("touchend",g)}function w(){document.removeEventListener("mousemove",g),document.removeEventListener("mousedown",g),document.removeEventListener("mouseup",g),document.removeEventListener("pointermove",g),document.removeEventListener("pointerdown",g),document.removeEventListener("pointerup",g),document.removeEventListener("touchmove",g),document.removeEventListener("touchstart",g),document.removeEventListener("touchend",g)}function g(b){b.target.nodeName&&b.target.nodeName.toLowerCase()==="html"||(a=!1,w())}document.addEventListener("keydown",h,!0),document.addEventListener("mousedown",y,!0),document.addEventListener("pointerdown",y,!0),document.addEventListener("touchstart",y,!0),document.addEventListener("visibilitychange",C,!0),v(),o.addEventListener("focus",_,!0),o.addEventListener("blur",k,!0),o.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&o.host?o.host.setAttribute("data-js-focus-visible",""):o.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window!="undefined"&&typeof document!="undefined"){window.applyFocusVisiblePolyfill=t;var r;try{r=new CustomEvent("focus-visible-polyfill-ready")}catch(o){r=document.createEvent("CustomEvent"),r.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(r)}typeof document!="undefined"&&t(document)})})();let cr=!0;try{document.body.querySelector(":focus-visible")}catch(i){cr=!1}const is=i=>{var e;const t=a=>{if(a.shadowRoot==null||a.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(a.shadowRoot),a.manageAutoFocus&&a.manageAutoFocus();else{const s=()=>{self.applyFocusVisiblePolyfill&&a.shadowRoot&&self.applyFocusVisiblePolyfill(a.shadowRoot),a.manageAutoFocus&&a.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",s,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",s)}}return()=>{}},r=Symbol("endPolyfillCoordination");class o extends i{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),cr||requestAnimationFrame(()=>{this[r]==null&&(this[r]=t(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),cr||requestAnimationFrame(()=>{this[r]!=null&&(this[r](),this[r]=null)})}}return e=r,o};let Tt=class extends is(Ro){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const e=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||e<0?-1:this.focusElement?this.focusElement.tabIndex:e}set tabIndex(e){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(e!==this.tabIndex){this._tabIndex=e;const t=this.disabled?"-1":""+e;this.setAttribute("tabindex",t)}return}if(e===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),e===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),e!==-1&&this.manageFocusElementTabindex(e);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(e)}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(e){this.focusElement||await this.updateComplete,e===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=e}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(e){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(e):HTMLElement.prototype.focus.apply(this,[e]))}blur(){const e=this.focusElement||this;e!==this?e.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const e=this.focusElement||this;e!==this?e.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(e){super.firstUpdated(e),this.manageAutoFocus(),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","")}update(e){e.has("disabled")&&this.handleDisabledChanged(this.disabled,e.get("disabled")),super.update(e)}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(e,t){const r=()=>this.focusElement!==this&&typeof this.focusElement.disabled!="undefined";e?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,r()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):t&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,r()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}};p([x({type:Boolean,reflect:!0})],Tt.prototype,"disabled",void 0);p([x({type:Boolean})],Tt.prototype,"autofocus",void 0);p([x({type:Number})],Tt.prototype,"tabIndex",null);function os(i,e,t=[]){for(let r=0;r<e.length;++r){const o=e[r],a=i[r],s=a.parentElement||a.getRootNode();t[r]&&t[r](o),s&&s!==a&&s.replaceChild(o,a),delete i[r]}return e}const as=(i,e,t)=>{const r=[],o=[];for(let a=0;a<i.length;++a){const s=i[a];t&&o.push(t(s)||(()=>{}));const n=document.createComment("placeholder for reparented element");r.push(n);const c=s.parentElement||s.getRootNode();c&&c!==s&&c.replaceChild(n,s),e.append(s)}return function(){return os(r,i,o)}},ss=U`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}
`;let Vr=class extends Ro{static get styles(){return[ss]}render(){return E`
            <slot></slot>
        `}};p([x()],Vr.prototype,"label",void 0);p([x({reflect:!0})],Vr.prototype,"size",void 0);let lr;const ns=function(i,...e){return lr?lr(i,...e):e.reduce((t,r,o)=>t+r+i[o+1],i[0])},cs=i=>{lr=i},ls=()=>ns`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`;class ds extends Vr{render(){return cs(E),ls()}}customElements.define("sp-icon-chevron100",ds);const dr=new Set,ps=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";dr.forEach(e=>{e.setAttribute("dir",i)})},us=new MutationObserver(ps);us.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ms=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function hs(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!ms(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)dr.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?dr.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}let fs=class extends hs(ae){};const bs=U`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}
`;let st=class extends fs{static get styles(){return[bs]}render(){return E`
            <slot></slot>
        `}};p([x()],st.prototype,"label",void 0);p([x({reflect:!0})],st.prototype,"size",void 0);let pr;const Gr=function(i,...e){return pr?pr(i,...e):e.reduce((t,r,o)=>t+r+i[o+1],i[0])},Wr=i=>{pr=i},gs=({width:i=24,height:e=24,hidden:t=!1,title:r="Alert"}={})=>Gr`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${i}"
    aria-hidden="${t?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M17.127 2.579L.4 32.512A1 1 0 001.272 34h33.456a1 1 0 00.872-1.488L18.873 2.579a1 1 0 00-1.746 0zM20 29.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
    />
  </svg>`;class vs extends st{render(){return Wr(E),gs({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-alert",vs);const ur=new Set,ys=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";ur.forEach(e=>{e.setAttribute("dir",i)})},xs=new MutationObserver(ys);xs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ws=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function _s(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!ws(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)ur.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?ur.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}let Xr=class extends _s(ae){};const ks=U`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}
`;let Kr=class extends Xr{static get styles(){return[ks]}render(){return E`
            <slot></slot>
        `}};p([x()],Kr.prototype,"label",void 0);p([x({reflect:!0})],Kr.prototype,"size",void 0);let mr;const Cs=function(i,...e){return mr?mr(i,...e):e.reduce((t,r,o)=>t+r+i[o+1],i[0])},As=i=>{mr=i},Ss=()=>Cs`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`;class zs extends Kr{render(){return As(E),Ss()}}customElements.define("sp-icon-checkmark100",zs);function Es(i){class e extends i{renderAnchor({id:r,className:o,ariaHidden:a,labelledby:s,tabindex:n,anchorContent:c=E`<slot></slot>`}){return E`<a
                    id=${r}
                    class=${L(o)}
                    href=${L(this.href)}
                    download=${L(this.download)}
                    target=${L(this.target)}
                    aria-label=${L(this.label)}
                    aria-labelledby=${L(s)}
                    aria-hidden=${L(a?"true":void 0)}
                    tabindex=${L(n)}
                    rel=${L(this.rel)}
                >${c}</a>`}}return p([x({reflect:!0})],e.prototype,"download",void 0),p([x()],e.prototype,"label",void 0),p([x({reflect:!0})],e.prototype,"href",void 0),p([x({reflect:!0})],e.prototype,"target",void 0),p([x({reflect:!0})],e.prototype,"rel",void 0),e}let hr=!0;try{document.body.querySelector(":focus-visible")}catch(i){hr=!1}const Is=i=>{var e;const t=a=>{if(a.shadowRoot==null||a.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(a.shadowRoot),a.manageAutoFocus&&a.manageAutoFocus();else{const s=()=>{self.applyFocusVisiblePolyfill&&a.shadowRoot&&self.applyFocusVisiblePolyfill(a.shadowRoot),a.manageAutoFocus&&a.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",s,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",s)}}return()=>{}},r=Symbol("endPolyfillCoordination");class o extends i{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),hr||requestAnimationFrame(()=>{this[r]==null&&(this[r]=t(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),hr||requestAnimationFrame(()=>{this[r]!=null&&(this[r](),this[r]=null)})}}return e=r,o};let Pt=class extends Is(Xr){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const e=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||e<0?-1:this.focusElement?this.focusElement.tabIndex:e}set tabIndex(e){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(e!==this.tabIndex){this._tabIndex=e;const t=this.disabled?"-1":""+e;this.setAttribute("tabindex",t)}return}if(e===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),e===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),e!==-1&&this.manageFocusElementTabindex(e);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(e)}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(e){this.focusElement||await this.updateComplete,e===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=e}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(e){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(e):HTMLElement.prototype.focus.apply(this,[e]))}blur(){const e=this.focusElement||this;e!==this?e.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const e=this.focusElement||this;e!==this?e.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(e){super.firstUpdated(e),this.manageAutoFocus(),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","")}update(e){e.has("disabled")&&this.handleDisabledChanged(this.disabled,e.get("disabled")),super.update(e)}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(e,t){const r=()=>this.focusElement!==this&&typeof this.focusElement.disabled!="undefined";e?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,r()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):t&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,r()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}};p([x({type:Boolean,reflect:!0})],Pt.prototype,"disabled",void 0);p([x({type:Boolean})],Pt.prototype,"autofocus",void 0);p([x({type:Number})],Pt.prototype,"tabIndex",null);const $s=U`
.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .checkmark{margin-right:var(
--spectrum-listitem-icon-gap
)}.checkmark{flex-grow:0;margin-top:var(--spectrum-listitem-icon-margin-top)}:host([dir=ltr]) .chevron{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .chevron{margin-right:var(
--spectrum-listitem-icon-gap
)}.chevron{flex-grow:0;margin-top:var(--spectrum-listitem-icon-margin-top)}:host([dir=ltr]){border-left:var(--spectrum-listitem-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-text-size);font-style:normal;font-weight:var(--spectrum-listitem-text-font-weight);margin:0;min-height:var(--spectrum-listitem-height);padding:var(--spectrum-listitem-padding-y) var(--spectrum-listitem-padding-right) var(--spectrum-listitem-padding-y) var(--spectrum-listitem-padding-left);position:relative;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(
--spectrum-listitem-icon-gap
)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-listitem-icon-gap) - var(--spectrum-listitem-thumbnail-padding-left) - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
))}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{margin-right:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-text-color,var(--spectrum-alias-text-color)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-text-color-key-focus,var(--spectrum-alias-text-color)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-text-color-key-focus,var(--spectrum-alias-text-color)
)}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-text-color-hover,var(--spectrum-alias-text-color)
)}:host([selected]){color:var(
--spectrum-listitem-m-text-color-selected,var(--spectrum-alias-text-color)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host(:active),:host([active]){background-color:var(
--spectrum-listitem-m-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-listitem-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}#button{bottom:0;left:0;position:absolute;right:0;top:0}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}
`,Ts=U`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}
`;class Ps extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(e){this._item=e}}class Rs extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(e){this.item.menuData.focusRoot=this.item.menuData.focusRoot||e}set selectionRoot(e){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||e}get item(){return this._item}set currentAncestorWithSelects(e){this._currentAncestorWithSelects=e}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(e){this._item=e,this._currentAncestorWithSelects=void 0,e.menuData={focusRoot:void 0,selectionRoot:void 0}}}const bt=new Rs,Mi=new Ps;class te extends Es(Pt){constructor(){super(),this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.noWrap=!1,this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}static get styles(){return[$s,Ts]}get value(){return this._value||this.itemText}set value(e){e!==this._value&&(this._value=e||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}get focusElement(){return this}get itemChildren(){const e=this.shadowRoot.querySelector('slot[name="icon"]'),t=e?e.assignedElements().map(a=>{const s=a.cloneNode(!0);return s.removeAttribute("slot"),s.classList.toggle("icon"),s}):[],r=this.shadowRoot.querySelector("slot:not([name])"),o=r?r.assignedNodes().map(a=>a.cloneNode(!0)):[];return{icon:t,content:o}}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(e){if(this.disabled)return e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let e=!1;return this.anchorElement&&(this.anchorElement.click(),e=!0),e}render(){return E`
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="value"></slot>
            ${this.selected?E`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 icon checkmark"
                      ></sp-icon-checkmark100>
                  `:E``}
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):E``}
        `}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}firstUpdated(e){super.firstUpdated(e),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id=`sp-menu-item-${te.instanceCount++}`)}updateAriaSelected(){const e=this.getAttribute("role");e==="option"?this.setAttribute("aria-selected",this.selected?"true":"false"):(e==="menuitemcheckbox"||e==="menuitemradio")&&this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(e){this.setAttribute("role",e),this.updateAriaSelected()}updated(e){super.updated(e),e.has("label")&&this.setAttribute("aria-label",this.label||""),e.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),e.has("selected")&&this.updateAriaSelected()}connectedCallback(){super.connectedCallback(),bt.reset(this),this.dispatchEvent(bt),this._parentElement=this.parentElement}disconnectedCallback(){var e;Mi.reset(this),(e=this._parentElement)===null||e===void 0||e.dispatchEvent(Mi),super.disconnectedCallback()}async triggerUpdate(){await new Promise(e=>requestAnimationFrame(e)),bt.reset(this),this.dispatchEvent(bt)}}te.instanceCount=0;p([x({type:Boolean,reflect:!0})],te.prototype,"active",void 0);p([x({type:Boolean,reflect:!0})],te.prototype,"focused",void 0);p([x({type:Boolean,reflect:!0})],te.prototype,"selected",void 0);p([x({type:String})],te.prototype,"value",null);p([x({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged(){return!1}})],te.prototype,"noWrap",void 0);p([at(".anchor")],te.prototype,"anchorElement",void 0);const Ms=U`
:host{--spectrum-menu-margin-x:var(
--spectrum-global-dimension-size-40
);--spectrum-listitem-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-heading-text-font-weight:400;--spectrum-listitem-heading-text-transform:uppercase;--spectrum-listitem-heading-letter-spacing:0.06em;--spectrum-listitem-heading-margin:var(--spectrum-global-dimension-size-75) 0 0 0;--spectrum-listitem-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-padding-y:var(--spectrum-global-dimension-size-85);--spectrum-listitem-icon-margin-top:var(
--spectrum-global-dimension-size-50
);--spectrum-listitem-label-line-height:1.3;--spectrum-listitem-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-divider-size:var(
--spectrum-listitem-m-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-divider-padding:var(
--spectrum-listitem-m-divider-padding,3px
);--spectrum-listitem-focus-indicator-size:var(
--spectrum-listitem-m-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-text-font-weight:var(
--spectrum-listitem-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-text-size:var(
--spectrum-listitem-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-listitem-height:var(
--spectrum-listitem-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-listitem-icon-gap:var(
--spectrum-listitem-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-listitem-padding-left:var(
--spectrum-listitem-m-padding-left,var(--spectrum-alias-item-workflow-padding-left-m)
);--spectrum-listitem-padding-right:var(
--spectrum-listitem-m-padding-right,var(--spectrum-alias-item-padding-m)
);--spectrum-listitem-thumbnail-padding-left:var(
--spectrum-listitem-m-thumbnail-padding-left,var(--spectrum-alias-item-padding-m)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(
--spectrum-listitem-selectable-padding-right
)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(
--spectrum-listitem-selectable-padding-right
)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(
--spectrum-global-color-gray-700
)}:host{background-color:var(
--spectrum-listitem-m-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap))}:host(:focus){outline:none}:host sp-menu{display:block}
`;function Li(i,e){return!!e&&(i===e||i.contains(e))}class we extends Xr{constructor(){super(),this.label="",this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[Ms]}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){this.cachedChildItems=[];const e=this.menuSlot.assignedElements({flatten:!0});for(const t of e){const r=t instanceof te?[t]:[...t.querySelectorAll("*")];for(const o of r)this.childItemSet.has(o)&&this.cachedChildItems.push(o)}return this.cachedChildItems}get childRole(){if(this.resolvedRole==="listbox")return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(e){var t;e.item.menuData.focusRoot&&(this.tabIndex=-1),e.focusRoot=this,this.addChildItem(e.item),this.selects==="inherit"?(this.resolvedSelects="inherit",this.resolvedRole=((t=e.currentAncestorWithSelects)===null||t===void 0?void 0:t.getAttribute("role"))||this.getAttribute("role")||void 0):this.selects?(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,e.currentAncestorWithSelects=this):(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.resolvedRole==="none"?"ignore":"none")}onSelectableItemAddedOrUpdated(e){(this.resolvedSelects==="single"||this.resolvedSelects==="multiple"||!this.selects&&this.resolvedSelects!=="ignore")&&!e.item.menuData.selectionRoot&&(e.item.setRole(this.childRole),e.selectionRoot=this)}addChildItem(e){this.childItemSet.add(e),this.handleItemsChanged()}async removeChildItem(e){this.childItemSet.delete(e.item),this.cachedChildItems=void 0,e.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:e}={}){if(!this.childItems.length||this.childItems.every(r=>r.disabled))return;if(this.childItems.some(r=>r.menuData.focusRoot!==this)){super.focus({preventScroll:e});return}this.focusMenuItemByOffset(0),super.focus({preventScroll:e});const t=this.querySelector("[selected]");t&&!e&&t.scrollIntoView({block:"nearest"})}onClick(e){if(e.defaultPrevented)return;const r=e.composedPath().find(o=>o instanceof Element?o.getAttribute("role")===this.childRole:!1);if(!(r!=null&&r.href&&r.href.length)){if((r==null?void 0:r.menuData.selectionRoot)===this)e.preventDefault(),this.selectOrToggleItem(r);else return;this.prepareToCleanUp()}}handleFocusin(e){var t;const r=Li(this,e.relatedTarget);if(r||this.childItems.some(s=>s.menuData.focusRoot!==this))return;const o=this.getRootNode().activeElement,a=((t=this.childItems[this.focusedItemIndex])===null||t===void 0?void 0:t.menuData.selectionRoot)||this;if((o!==a||!r)&&(a.focus({preventScroll:!0}),o&&this.focusedItemIndex===0)){const s=this.childItems.findIndex(n=>n===o);s>0&&this.focusMenuItemByOffset(s)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(e){if(Li(this,e.relatedTarget)){e.composedPath()[0].focused=!1;return}if(this.stopListeningToKeyboard(),e.target===this&&this.childItems.some(t=>t.menuData.focusRoot===this)){const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1)}this.removeAttribute("aria-activedescendant")}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(e){const t=this.resolvedSelects,r=new Map(this.selectedItemsMap),o=this.selected.slice(),a=this.selectedItems.slice(),s=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(e),this.forwardFocusVisibleToItem(e),t==="multiple"){this.selectedItemsMap.has(e)?this.selectedItemsMap.delete(e):this.selectedItemsMap.set(e,!0);const c=[],u=[];this.childItemSet.forEach(l=>{l.menuData.selectionRoot===this&&this.selectedItemsMap.has(l)&&(c.push(l.value),u.push(l))}),this.selected=c,this.selectedItems=u,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(e,!0),this.value=e.value,this.selected=[e.value],this.selectedItems=[e];if(await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))){this.selected=o,this.selectedItems=a,this.selectedItemsMap=r,this.value=s;return}if(t==="single"){for(const c of r.keys())c!==e&&(c.selected=!1);e.selected=!0}else t==="multiple"&&(e.selected=!e.selected)}handleKeydown(e){var t;const{code:r}=e;if(r==="Tab"){this.prepareToCleanUp();return}if(r==="Space"||r==="Enter"){(t=this.childItems[this.focusedItemIndex])===null||t===void 0||t.click();return}if(r!=="ArrowDown"&&r!=="ArrowUp")return;const o=this.childItems[this.focusedItemIndex],a=r==="ArrowDown"?1:-1,s=this.focusMenuItemByOffset(a);s!==o&&(e.preventDefault(),s.scrollIntoView({block:"nearest"}))}focusMenuItemByOffset(e){const t=e||1,r=this.childItems[this.focusedItemIndex];r.focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],a=this.childItems.length;for(;o.disabled&&a;)a-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return o!=null&&o.disabled||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",()=>{requestAnimationFrame(()=>{const e=this.childItems[this.focusedItemIndex];e&&(e.focused=!1,this.updateSelectedItemIndex())})},{once:!0})}updateSelectedItemIndex(){let e=0;const t=new Map,r=[],o=[];let a=this.childItems.length;for(;a;){a-=1;const s=this.childItems[a];s.menuData.selectionRoot===this&&(s.selected&&(e=a,t.set(s,!0),r.unshift(s.value),o.unshift(s)),a!==e&&(s.focused=!1))}o.map((s,n)=>{n>0&&(s.focused=!1)}),this.selectedItemsMap=t,this.selected=r,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=e,this.focusInItemIndex=e}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let e=()=>{};this.cacheUpdated=new Promise(t=>e=t),this._willUpdateItems=!0,window.requestAnimationFrame(()=>{this.cachedChildItems===void 0&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,e()})}}updateItemFocus(){if(this.childItems.length==0)return;const e=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===e.menuData.focusRoot&&this.forwardFocusVisibleToItem(e)}forwardFocusVisibleToItem(e){if(e.menuData.focusRoot!==this)return;const t=this.getRootNode().activeElement;let r=!1;try{r=t.matches(":focus-visible")||t.matches(".focus-visible")}catch(o){r=t.matches(".focus-visible")}e.focused=r,this.setAttribute("aria-activedescendant",e.id),e.menuData.selectionRoot&&e.menuData.selectionRoot!==this&&e.menuData.selectionRoot.focus()}render(){return E`
            <slot></slot>
        `}firstUpdated(e){if(super.firstUpdated(e),!this.hasAttribute("tabindex")){const r=this.getAttribute("role");r==="group"?this.tabIndex=-1:r!=="none"&&(this.tabIndex=0)}const t=[new Promise(r=>requestAnimationFrame(()=>r(!0)))];[...this.children].forEach(r=>{r.localName==="sp-menu-item"&&t.push(r.updateComplete)}),this.childItemsUpdated=Promise.all(t)}updated(e){super.updated(e),e.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),e.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const e=[new Promise(t=>requestAnimationFrame(()=>t(!0)))];this.childItemSet.forEach(t=>{e.push(t.triggerUpdate())}),this.childItemsUpdated=Promise.all(e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role",this.ownRole),this.updateComplete.then(()=>this.updateItemFocus())}async _getUpdateComplete(){const e=await super._getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,e}}p([x({type:String,reflect:!0})],we.prototype,"label",void 0);p([x({type:String,reflect:!0})],we.prototype,"selects",void 0);p([x({type:String})],we.prototype,"value",void 0);p([x({type:String,attribute:"value-separator"})],we.prototype,"valueSeparator",void 0);p([x({attribute:!1})],we.prototype,"selected",void 0);p([x({attribute:!1})],we.prototype,"selectedItems",void 0);p([at("slot:not([name])")],we.prototype,"menuSlot",void 0);customElements.define("sp-menu",we);const fr=new Set,Ls=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";fr.forEach(e=>{e.setAttribute("dir",i)})},Ns=new MutationObserver(Ls);Ns.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Os=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function Fs(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!Os(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)fr.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?fr.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}let Ds=class extends Fs(ae){};const qs=U`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(-1*var(--spectrum-overlay-animation-distance)))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(-1*var(--spectrum-overlay-animation-distance)))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400)}:host{border-radius:var(
--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-height:var(
--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400)
);min-width:var(
--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400)
);outline:none;position:absolute}#tip{position:absolute;-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
)}:host([dialog]){min-width:var(
--spectrum-popover-dialog-min-width
);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(
--spectrum-popover-target-offset
)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(
--spectrum-popover-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(--spectrum-global-dimension-size-150)*-1);top:50%}:host([placement*=bottom][tip]){margin-top:var(
--spectrum-popover-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(
--spectrum-popover-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
);-webkit-clip-path:inset(-30px -30px);clip-path:inset(-30px -30px);filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));-webkit-filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));will-change:filter}#tip .triangle{fill:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);stroke:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
)}:host{--sp-popover-tip-size:24px}:host([placement*=bottom]),:host([placement*=top]){max-height:calc(100% - var(--spectrum-overlay-animation-distance))}:host([placement*=left]),:host([placement*=right]){max-width:calc(100% - var(--spectrum-overlay-animation-distance))}::slotted(*){overscroll-behavior:contain}.tip{height:calc(var(--sp-popover-tip-size)/2);left:0;position:absolute;width:var(--sp-popover-tip-size)}:host([placement*=right]) #tip{transform:none}:host([placement*=bottom]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform:rotate(-90deg) translateY(-200%);transform-origin:100% 0}:host([placement*=right]) .tip{transform:rotate(90deg);transform-origin:0 0}
`;class Rt extends Ds{constructor(){super(...arguments),this.open=!1,this.placement="none",this.tip=!1}static get styles(){return[qs]}renderTip(){return E`
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("sp-overlay-query",this.onOverlayQuery)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sp-overlay-query",this.onOverlayQuery)}onOverlayQuery(e){if(!e.target||e.target!==this)return;const r=this.shadowRoot.querySelector("#tip");r&&(e.detail.overlayContentTipElement=r)}render(){return E`
            <slot></slot>
            ${this.tip?this.renderTip():Ct}
        `}}p([x({type:Boolean,reflect:!0})],Rt.prototype,"open",void 0);p([x({reflect:!0})],Rt.prototype,"placement",void 0);p([x({type:Boolean,reflect:!0})],Rt.prototype,"tip",void 0);customElements.define("sp-popover",Rt);const br=new Set,Bs=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";br.forEach(e=>{e.setAttribute("dir",i)})},Hs=new MutationObserver(Bs);Hs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Us=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function js(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!Us(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)br.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?br.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}let Vs=class extends js(ae){};function Gs(i,e,t=[]){for(let r=0;r<e.length;++r){const o=e[r],a=i[r],s=a.parentElement||a.getRootNode();t[r]&&t[r](o),s&&s!==a&&s.replaceChild(o,a),delete i[r]}return e}const Ws=(i,e,t)=>{const r=[],o=[];for(let a=0;a<i.length;++a){const s=i[a];t&&o.push(t(s)||(()=>{}));const n=document.createComment("placeholder for reparented element");r.push(n);const c=s.parentElement||s.getRootNode();c&&c!==s&&c.replaceChild(n,s),e.append(s)}return function(){return Gs(r,i,o)}},Xs=U`
@keyframes spOverlayFadeIn{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes spOverlayFadeOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{display:inline-block;left:0;pointer-events:none;position:absolute;top:0;z-index:1000}:host(:focus){outline:none}#contents,sp-theme{height:100%}#contents{animation-duration:var(--spectrum-global-animation-duration-200,.16s);animation-timing-function:var(
--spectrum-global-animation-ease-out,ease-out
);display:inline-block;opacity:1;pointer-events:none;visibility:visible}:host([data-popper-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75))}:host([data-popper-placement*=right]) #contents{--sp-overlay-from:translateX(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75))}:host([animating]) ::slotted(*){pointer-events:none}:host(:not([animating])) ::slotted(*){pointer-events:auto}#contents ::slotted(*){position:relative}
`;var G="top",Y="bottom",ee="right",W="left",Jr="auto",nt=[G,Y,ee,W],Ne="start",ot="end",Ks="clippingParents",Mo="viewport",Ge="popper",Js="reference",Ni=nt.reduce(function(i,e){return i.concat([e+"-"+Ne,e+"-"+ot])},[]),Lo=[].concat(nt,[Jr]).reduce(function(i,e){return i.concat([e,e+"-"+Ne,e+"-"+ot])},[]),Qs="beforeRead",Zs="read",Ys="afterRead",en="beforeMain",tn="main",rn="afterMain",on="beforeWrite",an="write",sn="afterWrite",nn=[Qs,Zs,Ys,en,tn,rn,on,an,sn];function ie(i){return i.split("-")[0]}function X(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function Ie(i){var e=X(i).Element;return i instanceof e||i instanceof Element}function K(i){var e=X(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function Qr(i){if(typeof ShadowRoot=="undefined")return!1;var e=X(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}var Se=Math.max,St=Math.min,Oe=Math.round;function gr(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function No(){return!/^((?!chrome|android).)*safari/i.test(gr())}function Fe(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=i.getBoundingClientRect(),o=1,a=1;e&&K(i)&&(o=i.offsetWidth>0&&Oe(r.width)/i.offsetWidth||1,a=i.offsetHeight>0&&Oe(r.height)/i.offsetHeight||1);var s=Ie(i)?X(i):window,n=s.visualViewport,c=!No()&&t,u=(r.left+(c&&n?n.offsetLeft:0))/o,l=(r.top+(c&&n?n.offsetTop:0))/a,d=r.width/o,f=r.height/a;return{width:d,height:f,top:l,right:u+d,bottom:l+f,left:u,x:u,y:l}}function Zr(i){var e=Fe(i),t=i.offsetWidth,r=i.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:i.offsetLeft,y:i.offsetTop,width:t,height:r}}function Oo(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&Qr(t)){var r=e;do{if(r&&i.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(i){return i?(i.nodeName||"").toLowerCase():null}function me(i){return X(i).getComputedStyle(i)}function cn(i){return["table","td","th"].indexOf(oe(i))>=0}function _e(i){return((Ie(i)?i.ownerDocument:i.document)||window.document).documentElement}function Mt(i){return oe(i)==="html"?i:i.assignedSlot||i.parentNode||(Qr(i)?i.host:null)||_e(i)}function Oi(i){return!K(i)||me(i).position==="fixed"?null:i.offsetParent}function ln(i){var e=/firefox/i.test(gr()),t=/Trident/i.test(gr());if(t&&K(i)){var r=me(i);if(r.position==="fixed")return null}var o=Mt(i);for(Qr(o)&&(o=o.host);K(o)&&["html","body"].indexOf(oe(o))<0;){var a=me(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ct(i){for(var e=X(i),t=Oi(i);t&&cn(t)&&me(t).position==="static";)t=Oi(t);return t&&(oe(t)==="html"||oe(t)==="body"&&me(t).position==="static")?e:t||ln(i)||e}function Yr(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Ye(i,e,t){return Se(i,St(e,t))}function dn(i,e,t){var r=Ye(i,e,t);return r>t?t:r}function Fo(){return{top:0,right:0,bottom:0,left:0}}function Do(i){return Object.assign({},Fo(),i)}function qo(i,e){return e.reduce(function(t,r){return t[r]=i,t},{})}var pn=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Do(typeof e!="number"?e:qo(e,nt))};function un(i){var e,t=i.state,r=i.name,o=i.options,a=t.elements.arrow,s=t.modifiersData.popperOffsets,n=ie(t.placement),c=Yr(n),u=[W,ee].indexOf(n)>=0,l=u?"height":"width";if(!(!a||!s)){var d=pn(o.padding,t),f=Zr(a),h=c==="y"?G:W,y=c==="y"?Y:ee,_=t.rects.reference[l]+t.rects.reference[c]-s[c]-t.rects.popper[l],k=s[c]-t.rects.reference[c],C=ct(a),v=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,w=_/2-k/2,g=d[h],b=v-f[l]-d[y],A=v/2-f[l]/2+w,S=Ye(g,A,b),z=c;t.modifiersData[r]=(e={},e[z]=S,e.centerOffset=S-A,e)}}function mn(i){var e=i.state,t=i.options,r=t.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||Oo(e.elements.popper,o)&&(e.elements.arrow=o))}const hn={name:"arrow",enabled:!0,phase:"main",fn:un,effect:mn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};var fn={left:"right",right:"left",bottom:"top",top:"bottom"};function _t(i){return i.replace(/left|right|bottom|top/g,function(e){return fn[e]})}var bn={start:"end",end:"start"};function Fi(i){return i.replace(/start|end/g,function(e){return bn[e]})}function ei(i){var e=X(i),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function ti(i){return Fe(_e(i)).left+ei(i).scrollLeft}function gn(i,e){var t=X(i),r=_e(i),o=t.visualViewport,a=r.clientWidth,s=r.clientHeight,n=0,c=0;if(o){a=o.width,s=o.height;var u=No();(u||!u&&e==="fixed")&&(n=o.offsetLeft,c=o.offsetTop)}return{width:a,height:s,x:n+ti(i),y:c}}function vn(i){var e,t=_e(i),r=ei(i),o=(e=i.ownerDocument)==null?void 0:e.body,a=Se(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Se(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),n=-r.scrollLeft+ti(i),c=-r.scrollTop;return me(o||t).direction==="rtl"&&(n+=Se(t.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:n,y:c}}function ri(i){var e=me(i),t=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+o+r)}function Bo(i){return["html","body","#document"].indexOf(oe(i))>=0?i.ownerDocument.body:K(i)&&ri(i)?i:Bo(Mt(i))}function et(i,e){var t;e===void 0&&(e=[]);var r=Bo(i),o=r===((t=i.ownerDocument)==null?void 0:t.body),a=X(r),s=o?[a].concat(a.visualViewport||[],ri(r)?r:[]):r,n=e.concat(s);return o?n:n.concat(et(Mt(s)))}function vr(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function yn(i,e){var t=Fe(i,!1,e==="fixed");return t.top=t.top+i.clientTop,t.left=t.left+i.clientLeft,t.bottom=t.top+i.clientHeight,t.right=t.left+i.clientWidth,t.width=i.clientWidth,t.height=i.clientHeight,t.x=t.left,t.y=t.top,t}function Di(i,e,t){return e===Mo?vr(gn(i,t)):Ie(e)?yn(e,t):vr(vn(_e(i)))}function xn(i){var e=et(Mt(i)),t=["absolute","fixed"].indexOf(me(i).position)>=0,r=t&&K(i)?ct(i):i;return Ie(r)?e.filter(function(o){return Ie(o)&&Oo(o,r)&&oe(o)!=="body"}):[]}function wn(i,e,t,r){var o=e==="clippingParents"?xn(i):[].concat(e),a=[].concat(o,[t]),s=a[0],n=a.reduce(function(c,u){var l=Di(i,u,r);return c.top=Se(l.top,c.top),c.right=St(l.right,c.right),c.bottom=St(l.bottom,c.bottom),c.left=Se(l.left,c.left),c},Di(i,s,r));return n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function De(i){return i.split("-")[1]}function Ho(i){var e=i.reference,t=i.element,r=i.placement,o=r?ie(r):null,a=r?De(r):null,s=e.x+e.width/2-t.width/2,n=e.y+e.height/2-t.height/2,c;switch(o){case G:c={x:s,y:e.y-t.height};break;case Y:c={x:s,y:e.y+e.height};break;case ee:c={x:e.x+e.width,y:n};break;case W:c={x:e.x-t.width,y:n};break;default:c={x:e.x,y:e.y}}var u=o?Yr(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(a){case Ne:c[u]=c[u]-(e[l]/2-t[l]/2);break;case ot:c[u]=c[u]+(e[l]/2-t[l]/2);break}}return c}function ii(i,e){e===void 0&&(e={});var t=e,r=t.placement,o=r===void 0?i.placement:r,a=t.strategy,s=a===void 0?i.strategy:a,n=t.boundary,c=n===void 0?Ks:n,u=t.rootBoundary,l=u===void 0?Mo:u,d=t.elementContext,f=d===void 0?Ge:d,h=t.altBoundary,y=h===void 0?!1:h,_=t.padding,k=_===void 0?0:_,C=Do(typeof k!="number"?k:qo(k,nt)),v=f===Ge?Js:Ge,w=i.rects.popper,g=i.elements[y?v:f],b=wn(Ie(g)?g:g.contextElement||_e(i.elements.popper),c,l,s),A=Fe(i.elements.reference),S=Ho({reference:A,element:w,strategy:"absolute",placement:o}),z=vr(Object.assign({},w,S)),R=f===Ge?z:A,T={top:b.top-R.top+C.top,bottom:R.bottom-b.bottom+C.bottom,left:b.left-R.left+C.left,right:R.right-b.right+C.right},P=i.modifiersData.offset;if(f===Ge&&P){var D=P[o];Object.keys(T).forEach(function(M){var ce=[ee,Y].indexOf(M)>=0?1:-1,le=[G,Y].indexOf(M)>=0?"y":"x";T[M]+=D[le]*ce})}return T}function _n(i,e){e===void 0&&(e={});var t=e,r=t.placement,o=t.boundary,a=t.rootBoundary,s=t.padding,n=t.flipVariations,c=t.allowedAutoPlacements,u=c===void 0?Lo:c,l=De(r),d=l?n?Ni:Ni.filter(function(y){return De(y)===l}):nt,f=d.filter(function(y){return u.indexOf(y)>=0});f.length===0&&(f=d);var h=f.reduce(function(y,_){return y[_]=ii(i,{placement:_,boundary:o,rootBoundary:a,padding:s})[ie(_)],y},{});return Object.keys(h).sort(function(y,_){return h[y]-h[_]})}function kn(i){if(ie(i)===Jr)return[];var e=_t(i);return[Fi(i),e,Fi(e)]}function Cn(i){var e=i.state,t=i.options,r=i.name;if(!e.modifiersData[r]._skip){for(var o=t.mainAxis,a=o===void 0?!0:o,s=t.altAxis,n=s===void 0?!0:s,c=t.fallbackPlacements,u=t.padding,l=t.boundary,d=t.rootBoundary,f=t.altBoundary,h=t.flipVariations,y=h===void 0?!0:h,_=t.allowedAutoPlacements,k=e.options.placement,C=ie(k),v=C===k,w=c||(v||!y?[_t(k)]:kn(k)),g=[k].concat(w).reduce(function(Re,fe){return Re.concat(ie(fe)===Jr?_n(e,{placement:fe,boundary:l,rootBoundary:d,padding:u,flipVariations:y,allowedAutoPlacements:_}):fe)},[]),b=e.rects.reference,A=e.rects.popper,S=new Map,z=!0,R=g[0],T=0;T<g.length;T++){var P=g[T],D=ie(P),M=De(P)===Ne,ce=[G,Y].indexOf(D)>=0,le=ce?"width":"height",V=ii(e,{placement:P,boundary:l,rootBoundary:d,altBoundary:f,padding:u}),Q=ce?M?ee:W:M?Y:G;b[le]>A[le]&&(Q=_t(Q));var dt=_t(Q),ke=[];if(a&&ke.push(V[D]<=0),n&&ke.push(V[Q]<=0,V[dt]<=0),ke.every(function(Re){return Re})){R=P,z=!1;break}S.set(P,ke)}if(z)for(var pt=y?3:1,Ft=function(fe){var Ve=g.find(function(mt){var Ce=S.get(mt);if(Ce)return Ce.slice(0,fe).every(function(Dt){return Dt})});if(Ve)return R=Ve,"break"},je=pt;je>0;je--){var ut=Ft(je);if(ut==="break")break}e.placement!==R&&(e.modifiersData[r]._skip=!0,e.placement=R,e.reset=!0)}}const An={name:"flip",enabled:!0,phase:"main",fn:Cn,requiresIfExists:["offset"],data:{_skip:!1}};function Sn(i,e,t){var r=ie(i),o=[W,G].indexOf(r)>=0?-1:1,a=typeof t=="function"?t(Object.assign({},e,{placement:i})):t,s=a[0],n=a[1];return s=s||0,n=(n||0)*o,[W,ee].indexOf(r)>=0?{x:n,y:s}:{x:s,y:n}}function zn(i){var e=i.state,t=i.options,r=i.name,o=t.offset,a=o===void 0?[0,0]:o,s=Lo.reduce(function(l,d){return l[d]=Sn(d,e.rects,a),l},{}),n=s[e.placement],c=n.x,u=n.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}const En={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zn};function In(i){return i==="x"?"y":"x"}function $n(i){var e=i.state,t=i.options,r=i.name,o=t.mainAxis,a=o===void 0?!0:o,s=t.altAxis,n=s===void 0?!1:s,c=t.boundary,u=t.rootBoundary,l=t.altBoundary,d=t.padding,f=t.tether,h=f===void 0?!0:f,y=t.tetherOffset,_=y===void 0?0:y,k=ii(e,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),C=ie(e.placement),v=De(e.placement),w=!v,g=Yr(C),b=In(g),A=e.modifiersData.popperOffsets,S=e.rects.reference,z=e.rects.popper,R=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,T=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,D={x:0,y:0};if(A){if(a){var M,ce=g==="y"?G:W,le=g==="y"?Y:ee,V=g==="y"?"height":"width",Q=A[g],dt=Q+k[ce],ke=Q-k[le],pt=h?-z[V]/2:0,Ft=v===Ne?S[V]:z[V],je=v===Ne?-z[V]:-S[V],ut=e.elements.arrow,Re=h&&ut?Zr(ut):{width:0,height:0},fe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Fo(),Ve=fe[ce],mt=fe[le],Ce=Ye(0,S[V],Re[V]),Dt=w?S[V]/2-pt-Ce-Ve-T.mainAxis:Ft-Ce-Ve-T.mainAxis,aa=w?-S[V]/2+pt+Ce+mt+T.mainAxis:je+Ce+mt+T.mainAxis,qt=e.elements.arrow&&ct(e.elements.arrow),sa=qt?g==="y"?qt.clientTop||0:qt.clientLeft||0:0,mi=(M=P==null?void 0:P[g])!=null?M:0,na=Q+Dt-mi-sa,ca=Q+aa-mi,hi=Ye(h?St(dt,na):dt,Q,h?Se(ke,ca):ke);A[g]=hi,D[g]=hi-Q}if(n){var fi,la=g==="x"?G:W,da=g==="x"?Y:ee,Ae=A[b],ht=b==="y"?"height":"width",bi=Ae+k[la],gi=Ae-k[da],Bt=[G,W].indexOf(C)!==-1,vi=(fi=P==null?void 0:P[b])!=null?fi:0,yi=Bt?bi:Ae-S[ht]-z[ht]-vi+T.altAxis,xi=Bt?Ae+S[ht]+z[ht]-vi-T.altAxis:gi,wi=h&&Bt?dn(yi,Ae,xi):Ye(h?yi:bi,Ae,h?xi:gi);A[b]=wi,D[b]=wi-Ae}e.modifiersData[r]=D}}const Tn={name:"preventOverflow",enabled:!0,phase:"main",fn:$n,requiresIfExists:["offset"]};function Pn(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function Rn(i){return i===X(i)||!K(i)?ei(i):Pn(i)}function Mn(i){var e=i.getBoundingClientRect(),t=Oe(e.width)/i.offsetWidth||1,r=Oe(e.height)/i.offsetHeight||1;return t!==1||r!==1}function Ln(i,e,t){t===void 0&&(t=!1);var r=K(e),o=K(e)&&Mn(e),a=_e(e),s=Fe(i,o,t),n={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((oe(e)!=="body"||ri(a))&&(n=Rn(e)),K(e)?(c=Fe(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):a&&(c.x=ti(a))),{x:s.left+n.scrollLeft-c.x,y:s.top+n.scrollTop-c.y,width:s.width,height:s.height}}function Nn(i){var e=new Map,t=new Set,r=[];i.forEach(function(a){e.set(a.name,a)});function o(a){t.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(n){if(!t.has(n)){var c=e.get(n);c&&o(c)}}),r.push(a)}return i.forEach(function(a){t.has(a.name)||o(a)}),r}function On(i){var e=Nn(i);return nn.reduce(function(t,r){return t.concat(e.filter(function(o){return o.phase===r}))},[])}function Fn(i){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(i())})})),e}}function Dn(i){var e=i.reduce(function(t,r){var o=t[r.name];return t[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var qi={placement:"bottom",modifiers:[],strategy:"absolute"};function Bi(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function qn(i){i===void 0&&(i={});var e=i,t=e.defaultModifiers,r=t===void 0?[]:t,o=e.defaultOptions,a=o===void 0?qi:o;return function(n,c,u){u===void 0&&(u=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},qi,a),modifiersData:{},elements:{reference:n,popper:c},attributes:{},styles:{}},d=[],f=!1,h={state:l,setOptions:function(C){var v=typeof C=="function"?C(l.options):C;_(),l.options=Object.assign({},a,l.options,v),l.scrollParents={reference:Ie(n)?et(n):n.contextElement?et(n.contextElement):[],popper:et(c)};var w=On(Dn([].concat(r,l.options.modifiers)));return l.orderedModifiers=w.filter(function(g){return g.enabled}),y(),h.update()},forceUpdate:function(){if(!f){var C=l.elements,v=C.reference,w=C.popper;if(Bi(v,w)){l.rects={reference:Ln(v,ct(w),l.options.strategy==="fixed"),popper:Zr(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(T){return l.modifiersData[T.name]=Object.assign({},T.data)});for(var g=0;g<l.orderedModifiers.length;g++){if(l.reset===!0){l.reset=!1,g=-1;continue}var b=l.orderedModifiers[g],A=b.fn,S=b.options,z=S===void 0?{}:S,R=b.name;typeof A=="function"&&(l=A({state:l,options:z,name:R,instance:h})||l)}}}},update:Fn(function(){return new Promise(function(k){h.forceUpdate(),k(l)})}),destroy:function(){_(),f=!0}};if(!Bi(n,c))return h;h.setOptions(u).then(function(k){!f&&u.onFirstUpdate&&u.onFirstUpdate(k)});function y(){l.orderedModifiers.forEach(function(k){var C=k.name,v=k.options,w=v===void 0?{}:v,g=k.effect;if(typeof g=="function"){var b=g({state:l,name:C,instance:h,options:w}),A=function(){};d.push(b||A)}})}function _(){d.forEach(function(k){return k()}),d=[]}return h}}var gt={passive:!0};function Bn(i){var e=i.state,t=i.instance,r=i.options,o=r.scroll,a=o===void 0?!0:o,s=r.resize,n=s===void 0?!0:s,c=X(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&u.forEach(function(l){l.addEventListener("scroll",t.update,gt)}),n&&c.addEventListener("resize",t.update,gt),function(){a&&u.forEach(function(l){l.removeEventListener("scroll",t.update,gt)}),n&&c.removeEventListener("resize",t.update,gt)}}const Hn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bn,data:{}};function Un(i){var e=i.state,t=i.name;e.modifiersData[t]=Ho({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const jn={name:"popperOffsets",enabled:!0,phase:"read",fn:Un,data:{}};var Vn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Gn(i,e){var t=i.x,r=i.y,o=e.devicePixelRatio||1;return{x:Oe(t*o)/o||0,y:Oe(r*o)/o||0}}function Hi(i){var e,t=i.popper,r=i.popperRect,o=i.placement,a=i.variation,s=i.offsets,n=i.position,c=i.gpuAcceleration,u=i.adaptive,l=i.roundOffsets,d=i.isFixed,f=s.x,h=f===void 0?0:f,y=s.y,_=y===void 0?0:y,k=typeof l=="function"?l({x:h,y:_}):{x:h,y:_};h=k.x,_=k.y;var C=s.hasOwnProperty("x"),v=s.hasOwnProperty("y"),w=W,g=G,b=window;if(u){var A=ct(t),S="clientHeight",z="clientWidth";if(A===X(t)&&(A=_e(t),me(A).position!=="static"&&n==="absolute"&&(S="scrollHeight",z="scrollWidth")),A=A,o===G||(o===W||o===ee)&&a===ot){g=Y;var R=d&&A===b&&b.visualViewport?b.visualViewport.height:A[S];_-=R-r.height,_*=c?1:-1}if(o===W||(o===G||o===Y)&&a===ot){w=ee;var T=d&&A===b&&b.visualViewport?b.visualViewport.width:A[z];h-=T-r.width,h*=c?1:-1}}var P=Object.assign({position:n},u&&Vn),D=l===!0?Gn({x:h,y:_},X(t)):{x:h,y:_};if(h=D.x,_=D.y,c){var M;return Object.assign({},P,(M={},M[g]=v?"0":"",M[w]=C?"0":"",M.transform=(b.devicePixelRatio||1)<=1?"translate("+h+"px, "+_+"px)":"translate3d("+h+"px, "+_+"px, 0)",M))}return Object.assign({},P,(e={},e[g]=v?_+"px":"",e[w]=C?h+"px":"",e.transform="",e))}function Wn(i){var e=i.state,t=i.options,r=t.gpuAcceleration,o=r===void 0?!0:r,a=t.adaptive,s=a===void 0?!0:a,n=t.roundOffsets,c=n===void 0?!0:n,u={placement:ie(e.placement),variation:De(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Hi(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Hi(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Xn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Wn,data:{}};function Kn(i){var e=i.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},o=e.attributes[t]||{},a=e.elements[t];!K(a)||!oe(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(s){var n=o[s];n===!1?a.removeAttribute(s):a.setAttribute(s,n===!0?"":n)}))})}function Jn(i){var e=i.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var o=e.elements[r],a=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),n=s.reduce(function(c,u){return c[u]="",c},{});!K(o)||!oe(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){o.removeAttribute(c)}))})}}const Qn={name:"applyStyles",enabled:!0,phase:"write",fn:Kn,effect:Jn,requires:["computeStyles"]};var Zn=[Hn,jn,Xn,Qn],oi="top",zt="bottom",ai="right",Uo="left",Yn=[oi,zt,ai,Uo],ec="start",tc="end",rc="clippingParents",jo="viewport",We="popper",ic="reference";function $e(i){return i?(i.nodeName||"").toLowerCase():null}function he(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function qe(i){var e=he(i).Element;return i instanceof e||i instanceof Element}function Be(i){var e=he(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function si(i){if(typeof ShadowRoot=="undefined")return!1;var e=he(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function oc(i){return i.split("-")[0]}var tt=Math.max,Ui=Math.min,ji=Math.round;function yr(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Vo(){return!/^((?!chrome|android).)*safari/i.test(yr())}function ni(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=i.getBoundingClientRect(),o=1,a=1;e&&Be(i)&&(o=i.offsetWidth>0&&ji(r.width)/i.offsetWidth||1,a=i.offsetHeight>0&&ji(r.height)/i.offsetHeight||1);var s=qe(i)?he(i):window,n=s.visualViewport,c=!Vo()&&t,u=(r.left+(c&&n?n.offsetLeft:0))/o,l=(r.top+(c&&n?n.offsetTop:0))/a,d=r.width/o,f=r.height/a;return{width:d,height:f,top:l,right:u+d,bottom:l+f,left:u,x:u,y:l}}function ac(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&si(t)){var r=e;do{if(r&&i.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ve(i){return he(i).getComputedStyle(i)}function sc(i){return["table","td","th"].indexOf($e(i))>=0}function He(i){return((qe(i)?i.ownerDocument:i.document)||window.document).documentElement}function Lt(i){return $e(i)==="html"?i:i.assignedSlot||i.parentNode||(si(i)?i.host:null)||He(i)}function Vi(i){return!Be(i)||ve(i).position==="fixed"?null:i.offsetParent}function nc(i){var e=/firefox/i.test(yr()),t=/Trident/i.test(yr());if(t&&Be(i)){var r=ve(i);if(r.position==="fixed")return null}var o=Lt(i);for(si(o)&&(o=o.host);Be(o)&&["html","body"].indexOf($e(o))<0;){var a=ve(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function cc(i){for(var e=he(i),t=Vi(i);t&&sc(t)&&ve(t).position==="static";)t=Vi(t);return t&&($e(t)==="html"||$e(t)==="body"&&ve(t).position==="static")?e:t||nc(i)||e}function lc(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function dc(){return{top:0,right:0,bottom:0,left:0}}function pc(i){return Object.assign({},dc(),i)}function uc(i,e){return e.reduce(function(t,r){return t[r]=i,t},{})}function mc(i){return i.split("-")[1]}function Go(i){var e=he(i),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function Wo(i){return ni(He(i)).left+Go(i).scrollLeft}function hc(i,e){var t=he(i),r=He(i),o=t.visualViewport,a=r.clientWidth,s=r.clientHeight,n=0,c=0;if(o){a=o.width,s=o.height;var u=Vo();(u||!u&&e==="fixed")&&(n=o.offsetLeft,c=o.offsetTop)}return{width:a,height:s,x:n+Wo(i),y:c}}function fc(i){var e,t=He(i),r=Go(i),o=(e=i.ownerDocument)==null?void 0:e.body,a=tt(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=tt(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),n=-r.scrollLeft+Wo(i),c=-r.scrollTop;return ve(o||t).direction==="rtl"&&(n+=tt(t.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:n,y:c}}function Xo(i){var e=ve(i),t=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+o+r)}function Ko(i){return["html","body","#document"].indexOf($e(i))>=0?i.ownerDocument.body:Be(i)&&Xo(i)?i:Ko(Lt(i))}function Jo(i,e){var t;e===void 0&&(e=[]);var r=Ko(i),o=r===((t=i.ownerDocument)==null?void 0:t.body),a=he(r),s=o?[a].concat(a.visualViewport||[],Xo(r)?r:[]):r,n=e.concat(s);return o?n:n.concat(Jo(Lt(s)))}function xr(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function bc(i,e){var t=ni(i,!1,e==="fixed");return t.top=t.top+i.clientTop,t.left=t.left+i.clientLeft,t.bottom=t.top+i.clientHeight,t.right=t.left+i.clientWidth,t.width=i.clientWidth,t.height=i.clientHeight,t.x=t.left,t.y=t.top,t}function Gi(i,e,t){return e===jo?xr(hc(i,t)):qe(e)?bc(e,t):xr(fc(He(i)))}function gc(i){var e=Jo(Lt(i)),t=["absolute","fixed"].indexOf(ve(i).position)>=0,r=t&&Be(i)?cc(i):i;return qe(r)?e.filter(function(o){return qe(o)&&ac(o,r)&&$e(o)!=="body"}):[]}function vc(i,e,t,r){var o=e==="clippingParents"?gc(i):[].concat(e),a=[].concat(o,[t]),s=a[0],n=a.reduce(function(c,u){var l=Gi(i,u,r);return c.top=tt(l.top,c.top),c.right=Ui(l.right,c.right),c.bottom=Ui(l.bottom,c.bottom),c.left=tt(l.left,c.left),c},Gi(i,s,r));return n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function yc(i){var e=i.reference,t=i.element,r=i.placement,o=r?oc(r):null,a=r?mc(r):null,s=e.x+e.width/2-t.width/2,n=e.y+e.height/2-t.height/2,c;switch(o){case oi:c={x:s,y:e.y-t.height};break;case zt:c={x:s,y:e.y+e.height};break;case ai:c={x:e.x+e.width,y:n};break;case Uo:c={x:e.x-t.width,y:n};break;default:c={x:e.x,y:e.y}}var u=o?lc(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(a){case ec:c[u]=c[u]-(e[l]/2-t[l]/2);break;case tc:c[u]=c[u]+(e[l]/2-t[l]/2);break}}return c}function xc(i,e){e===void 0&&(e={});var t=e,r=t.placement,o=r===void 0?i.placement:r,a=t.strategy,s=a===void 0?i.strategy:a,n=t.boundary,c=n===void 0?rc:n,u=t.rootBoundary,l=u===void 0?jo:u,d=t.elementContext,f=d===void 0?We:d,h=t.altBoundary,y=h===void 0?!1:h,_=t.padding,k=_===void 0?0:_,C=pc(typeof k!="number"?k:uc(k,Yn)),v=f===We?ic:We,w=i.rects.popper,g=i.elements[y?v:f],b=vc(qe(g)?g:g.contextElement||He(i.elements.popper),c,l,s),A=ni(i.elements.reference),S=yc({reference:A,element:w,strategy:"absolute",placement:o}),z=xr(Object.assign({},w,S)),R=f===We?z:A,T={top:b.top-R.top+C.top,bottom:R.bottom-b.bottom+C.bottom,left:b.left-R.left+C.left,right:R.right-b.right+C.right},P=i.modifiersData.offset;if(f===We&&P){var D=P[o];Object.keys(T).forEach(function(M){var ce=[ai,zt].indexOf(M)>=0?1:-1,le=[oi,zt].indexOf(M)>=0?"y":"x";T[M]+=D[le]*ce})}return T}var wc={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn:function(e){var t=e.state,r=e.name,o=e.options,a=xc(t,o),s=t.modifiersData.preventOverflow||{x:0,y:0},n=s.x,c=s.y,u=t.rects.popper,l=u.width,d=u.height,f=t.placement.split("-"),h=f[0],y=h==="left"?"left":"right",_=h==="top"?"top":"bottom";t.modifiersData[r]={width:l-a[y]-n,height:d-a[_]-c}}};const Kt=new WeakMap,_c={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:i}){const{height:e}=i.modifiersData.maxSize;Kt.has(i.elements.popper)||Kt.set(i.elements.popper,i.rects.popper.height);const t=Kt.get(i.elements.popper),o=e<t?`${e}px`:"";i.styles.popper.maxHeight=o,i.styles.popper.height=o}},kc=qn({defaultModifiers:[...Zn,An,Tn,hn,En]}),Wi={initial:"idle",states:{idle:{on:{active:"active"}},active:{on:{visible:"visible",hiding:"hiding",idle:"idle"}},visible:{on:{hiding:"hiding",idle:"idle"}},hiding:{on:{dispose:"dispose"}},dispose:{on:{disposed:"disposed"}},disposed:{on:{}}}},Xi=(i,e)=>i?e&&Wi.states[i].on[e]||i:Wi.initial,wr=i=>{const e=i.closest("active-overlay");if(e)return e;const t=i.getRootNode();return t.host?wr(t.host):null};class se extends Vs{constructor(){super(),this._state=Xi(),this.animating=!1,this.theme={},this.tabbingAway=!1,this.offset=6,this.interaction="hover",this.positionAnimationFrame=0,this.willNotifyClosed=!1,this.handleInlineTriggerKeydown=e=>{const{code:t,shiftKey:r}=e;if(t==="Tab"){if(r){this.tabbingAway=!0,this.dispatchEvent(new Event("close"));return}e.stopPropagation(),e.preventDefault(),this.focus()}},this.stealOverlayContentPromise=Promise.resolve(),this.stealOverlayContentPromise=new Promise(e=>this.stealOverlayContentResolver=e)}get state(){return this._state}set state(e){const t=Xi(this.state,e);t!==this.state&&(this._state=t,this.state==="active"||this.state==="visible"||this.state==="hiding"?this.setAttribute("state",this.state):this.removeAttribute("state"))}focus(){const e=this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');e?e.focus():super.focus(),this.removeAttribute("tabindex")}get hasTheme(){return!!this.theme.color||!!this.theme.scale||!!this.theme.lang}static get styles(){return[Xs]}get hasModalRoot(){return!!this._modalRoot}feature(){this.tabIndex=-1;const e=wr(this.trigger),t=e&&e.slot==="open";(this.interaction==="modal"||t||this._modalRoot)&&(this.slot="open",this._modalRoot&&(e==null||e.feature()))}obscure(e){if(this.slot&&e==="modal"){if(this.removeAttribute("slot"),this.interaction!=="modal"){const t=wr(this.trigger);return this._modalRoot=t==null?void 0:t.obscure(e),this._modalRoot}return this}}firstUpdated(e){super.firstUpdated(e),this.overlayContent&&(this.stealOverlayContent(this.overlayContent),!(!this.overlayContent||!this.trigger)&&(this.placement&&this.placement!=="none"&&(this.popper=kc(this.virtualTrigger||this.trigger,this,{placement:this.placement,modifiers:[wc,_c,{name:"arrow",options:{element:this.overlayContentTip}},{name:"offset",options:{offset:[0,this.offset]}}]})),this.state="active",document.addEventListener("sp-update-overlays",()=>{this.updateOverlayPosition(),this.state="visible"}),this.feature(),this.updateOverlayPosition().then(()=>this.applyContentAnimation("spOverlayFadeIn")).then(()=>{this.receivesFocus&&this.focus(),this.trigger.dispatchEvent(new CustomEvent("sp-opened",{bubbles:!0,composed:!0,cancelable:!0,detail:{interaction:this.interaction}}))})))}updateOverlayPopperPlacement(){this.overlayContent&&(this.dataPopperPlacement?this.overlayContent.setAttribute("placement",this.dataPopperPlacement):this.originalPlacement?this.overlayContent.setAttribute("placement",this.originalPlacement):this.overlayContent.removeAttribute("placement"))}updated(e){e.has("dataPopperPlacement")&&this.updateOverlayPopperPlacement()}open(e){this.extractDetail(e)}extractDetail(e){this.overlayContent=e.content,this.overlayContentTip=e.contentTip,this.trigger=e.trigger,this.virtualTrigger=e.virtualTrigger,this.placement=e.placement,this.offset=e.offset,this.interaction=e.interaction,this.theme=e.theme,this.receivesFocus=e.receivesFocus}dispose(){this.state==="dispose"&&(this.timeout&&(clearTimeout(this.timeout),delete this.timeout),this.popper&&(this.popper.destroy(),this.popper=void 0),this.trigger.removeEventListener("keydown",this.handleInlineTriggerKeydown),this.returnOverlayContent(),this.state="disposed",this.willNotifyClosed&&(this.overlayContent.dispatchEvent(new Event("sp-overlay-closed")),this.willNotifyClosed=!1))}stealOverlayContent(e){this.originalPlacement=e.getAttribute("placement"),this.restoreContent=Ws([e],this,t=>{const r=t.slot;return t.removeAttribute("slot"),o=>{o.slot=r}}),this.stealOverlayContentResolver()}returnOverlayContent(){if(!this.restoreContent)return;const[e]=this.restoreContent();this.restoreContent=void 0,this.willNotifyClosed=!0,this.originalPlacement&&(e.setAttribute("placement",this.originalPlacement),delete this.originalPlacement)}async updateOverlayPosition(){await(document.fonts?document.fonts.ready:Promise.resolve()),this.popper&&await this.popper.update()}async hide(e=!0){this.state="hiding",e&&await this.applyContentAnimation("spOverlayFadeOut"),this.state="dispose"}schedulePositionUpdate(){cancelAnimationFrame(this.positionAnimationFrame),this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition())}onSlotChange(){this.schedulePositionUpdate()}connectedCallback(){super.connectedCallback(),this.schedulePositionUpdate()}applyContentAnimation(e){return new Promise(t=>{const r=this.shadowRoot.querySelector("#contents"),o=a=>{e===a.animationName&&(r.removeEventListener("animationend",o),r.removeEventListener("animationcancel",o),this.animating=!1,t(a.type==="animationcancel"))};r.addEventListener("animationend",o),r.addEventListener("animationcancel",o),r.style.animationName=e,this.animating=!0})}renderTheme(e){const{color:t,scale:r,lang:o}=this.theme;return E`
            <sp-theme
                color=${L(t)}
                scale=${L(r)}
                lang=${L(o)}
                part="theme"
            >
                ${e}
            </sp-theme>
        `}render(){const e=E`
            <div id="contents">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `;return this.hasTheme?this.renderTheme(e):e}static create(e){const t=new se;return e.content&&t.open(e),t}async _getUpdateComplete(){const e=await super._getUpdateComplete();return await this.stealOverlayContentPromise,e}}p([x()],se.prototype,"_state",void 0);p([x({reflect:!0,type:Boolean})],se.prototype,"animating",void 0);p([x({reflect:!0})],se.prototype,"placement",void 0);p([x({attribute:!1})],se.prototype,"theme",void 0);p([x({attribute:!1})],se.prototype,"receivesFocus",void 0);p([x({attribute:"data-popper-placement"})],se.prototype,"dataPopperPlacement",void 0);const Cc=1e3,Ac=1e3;class Sc{constructor(e={}){this.warmUpDelay=Cc,this.coolDownDelay=Ac,this.isWarm=!1,this.timeout=0,Object.assign(this,e)}async openTimer(e){if(this.cancelCooldownTimer(),!this.component||e!==this.component)return this.component&&(this.close(this.component),this.cancelCooldownTimer()),this.component=e,this.isWarm?!1:(this.promise=new Promise(t=>{this.resolve=t,this.timeout=window.setTimeout(()=>{this.resolve&&(this.resolve(!1),this.isWarm=!0)},this.warmUpDelay)}),this.promise);if(this.promise)return this.promise;throw new Error("Inconsistent state")}close(e){this.component&&this.component===e&&(this.resetCooldownTimer(),this.timeout>0&&(clearTimeout(this.timeout),this.timeout=0),this.resolve&&(this.resolve(!0),delete this.resolve),delete this.promise,delete this.component)}resetCooldownTimer(){this.isWarm&&(this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=!1,delete this.cooldownTimeout},this.coolDownDelay))}cancelCooldownTimer(){this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),delete this.cooldownTimeout}}customElements.define("active-overlay",se);function zc(i){return i.button===0}function Ec(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}class Ic{constructor(){this.overlays=[],this.preventMouseRootClose=!1,this.root=document.body,this.handlingResize=!1,this.overlayTimer=new Sc,this.canTabTrap=!0,this.trappingInited=!1,this._eventsAreBound=!1,this.forwardContextmenuEvent=async e=>{if(this.overlays[this.overlays.length-1].interaction!=="modal")return;e.stopPropagation(),e.preventDefault(),await this.closeTopOverlay();let r=document.elementFromPoint(e.clientX,e.clientY);for(;r!=null&&r.shadowRoot;){const o=r.shadowRoot.elementFromPoint(e.clientX,e.clientY);if(!o||o===r)break;r=o}r==null||r.dispatchEvent(new MouseEvent("contextmenu",e))},this.handleMouseCapture=e=>{const t=this.topOverlay;if(!e.target||!t||!t.overlayContent||Ec(e)||!zc(e)){this.preventMouseRootClose=!0;return}if(e.target instanceof Node){if(e.composedPath().indexOf(t.overlayContent)>=0){this.preventMouseRootClose=!0;return}this.preventMouseRootClose=!1}},this._doesNotCloseOnFirstClick=!1,this.handleMouse=e=>{if(this._doesNotCloseOnFirstClick){this._doesNotCloseOnFirstClick=!1;return}this.preventMouseRootClose||e.defaultPrevented||this.closeTopOverlay()},this.handleKeyUp=e=>{if(e.code==="Escape"){const t=this.topOverlay;this.closeTopOverlay(),t&&t.trigger.focus()}},this.handleResize=()=>{this.handlingResize||(this.handlingResize=!0,requestAnimationFrame(async()=>{const e=this.overlays.map(t=>t.updateOverlayPosition());await Promise.all(e),this.handlingResize=!1}))}}initTabTrapping(){if(this.document.body.shadowRoot){this.canTabTrap=!1;return}if(this.document.body.attachShadow({mode:"open"}),!this.document.body.shadowRoot)return;const e=this.document.body.shadowRoot;e.innerHTML=`
            <div id="actual"><slot></slot></div>
            <style>
            #actual {
                position: relative;
                height: calc(100% - var(--swc-body-margins-block, 0px));
                z-index: 0;
                min-height: calc(100vh - var(--swc-body-margins-block, 0px));
            }
            #holder {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                position: fixed;
                pointer-events: none;
            }
            [name="open"]::slotted(*) {
                pointer-events: all;
            }
            #holder[hidden] {
                display: none !important;
            }
            #actual[tabindex="-1"] ::slotted(*) {
                pointer-events: none;  /* just in case? */
            }
            </style>
            <div id="holder" hidden><slot name="open"></slot></div>
        `,this.tabTrapper=e.querySelector("#actual"),this.overlayHolder=e.querySelector("#holder"),this.tabTrapper.attachShadow({mode:"open"}),this.tabTrapper.shadowRoot&&(this.tabTrapper.shadowRoot.innerHTML="<slot></slot>")}startTabTrapping(){this.trappingInited||(this.initTabTrapping(),this.trappingInited=!0),this.canTabTrap&&(this.tabTrapper.tabIndex=-1,this.tabTrapper.addEventListener("contextmenu",this.forwardContextmenuEvent,!0),this.tabTrapper.setAttribute("aria-hidden","true"),this.overlayHolder.hidden=!1,requestAnimationFrame(()=>{const e=getComputedStyle(document.body);this.tabTrapper.style.setProperty("--swc-body-margins-inline",`calc(${e.marginLeft} + ${e.marginRight})`),this.tabTrapper.style.setProperty("--swc-body-margins-block",`calc(${e.marginTop} + ${e.marginBottom})`)}))}stopTabTrapping(){!this.canTabTrap||!this.trappingInited||(this.tabTrapper.removeAttribute("tabindex"),this.tabTrapper.removeEventListener("contextmenu",this.forwardContextmenuEvent,!0),this.tabTrapper.removeAttribute("aria-hidden"),this.overlayHolder.hidden=!0)}get document(){return this.root.ownerDocument||document}get topOverlay(){return this.overlays.slice(-1)[0]}findOverlayForContent(e){for(const t of this.overlays)if(e===t.overlayContent)return t}addEventListeners(){this._eventsAreBound||(this._eventsAreBound=!0,this.document.addEventListener("click",this.handleMouseCapture,!0),this.document.addEventListener("click",this.handleMouse),this.document.addEventListener("keyup",this.handleKeyUp),window.addEventListener("resize",this.handleResize))}isClickOverlayActiveForTrigger(e){return this.overlays.some(t=>e===t.trigger&&t.interaction==="click")}async openOverlay(e){if(this.addEventListeners(),this.findOverlayForContent(e.content))return!1;e.notImmediatelyClosable&&(this._doesNotCloseOnFirstClick=!0),e.interaction==="modal"&&this.startTabTrapping();const t=e.content;if(t.overlayWillOpenCallback){const{trigger:o}=e;t.overlayWillOpenCallback({trigger:o})}if(e.delayed){const a=[this.overlayTimer.openTimer(e.content)];e.abortPromise&&a.push(e.abortPromise);const s=await Promise.race(a);if(s){if(t.overlayOpenCancelledCallback){const{trigger:n}=e;t.overlayOpenCancelledCallback({trigger:n})}return s}}if(e.interaction==="click")this.closeAllHoverOverlays();else if(e.interaction==="hover"&&this.isClickOverlayActiveForTrigger(e.trigger))return!0;const r=se.create(e);return this.overlays.length&&this.overlays[this.overlays.length-1].obscure(r.interaction),document.body.appendChild(r),new Promise(o=>requestAnimationFrame(o)).then(async()=>{if(this.overlays.push(r),await r.updateComplete,this.addOverlayEventListeners(r),typeof t.open!="undefined"&&(t.open=!0),t.overlayOpenCallback){const{trigger:o}=r;t.overlayOpenCallback({trigger:o})}return e.receivesFocus==="auto"&&r.focus(),!1})}addOverlayEventListeners(e){switch(e.addEventListener("close",()=>{this.hideAndCloseOverlay(e)}),e.interaction){case"replace":this.addReplaceOverlayEventListeners(e);break;case"inline":this.addInlineOverlayEventListeners(e);break}}addReplaceOverlayEventListeners(e){e.addEventListener("keydown",t=>{const{code:r}=t;r==="Tab"&&(t.stopPropagation(),this.closeOverlay(e.overlayContent),e.tabbingAway=!0,e.trigger.focus(),e.trigger.dispatchEvent(new KeyboardEvent("keydown",t)))})}addInlineOverlayEventListeners(e){e.trigger.addEventListener("keydown",e.handleInlineTriggerKeydown),e.addEventListener("keydown",t=>{const{code:r,shiftKey:o}=t;if(r!=="Tab")return;if(e.tabbingAway=!0,o){const s=document.createElement("span");s.tabIndex=-1,e.trigger.hasAttribute("slot")&&(s.slot=e.trigger.slot),e.trigger.insertAdjacentElement("afterend",s),s.focus(),s.remove();return}t.stopPropagation();const a=e.trigger;typeof a.open!="undefined"&&(a.open=!1),this.closeOverlay(e.overlayContent),e.trigger.focus()})}closeOverlay(e){this.overlayTimer.close(e),requestAnimationFrame(()=>{const t=this.findOverlayForContent(e);this.hideAndCloseOverlay(t)})}closeAllHoverOverlays(){for(const e of this.overlays)e.interaction==="hover"&&this.hideAndCloseOverlay(e,!1)}async hideAndCloseOverlay(e,t){if(e){await e.hide(t);const r=e.overlayContent;if(typeof r.open!="undefined"&&(r.open=!1),r.overlayCloseCallback){const{trigger:a}=e;r.overlayCloseCallback({trigger:a})}if(e.state!="dispose")return;const o=this.overlays.indexOf(e);if(o>=0&&this.overlays.splice(o,1),this.overlays.length){const a=this.overlays[this.overlays.length-1];a.feature(),a.interaction==="modal"||a.hasModalRoot?a.focus():this.stopTabTrapping()}else{if(this.stopTabTrapping(),e.interaction==="modal"||(e.interaction==="replace"||e.interaction==="inline")&&!e.tabbingAway){const s=e.overlayContent.getRootNode().activeElement,n=e.trigger.getRootNode(),c=n.activeElement;(e.overlayContent.contains(s)||e.trigger.getRootNode().contains(c)||n.host&&n.host===c)&&e.trigger.focus()}e.tabbingAway=!1}e.remove(),e.dispose(),e.trigger.dispatchEvent(new CustomEvent("sp-closed",{bubbles:!0,composed:!0,cancelable:!0,detail:{interaction:e.interaction}}))}}closeTopOverlay(){return this.hideAndCloseOverlay(this.topOverlay)}}class ze{constructor(e,t,r){this.isOpen=!1,this.owner=e,this.overlayElement=r,this.interaction=t}static async open(e,t,r,o){const a=new ze(e,t,r);return await a.open(o),()=>{a.close()}}static update(){const e=new CustomEvent("sp-update-overlays",{bubbles:!0,composed:!0,cancelable:!0});document.dispatchEvent(e)}async open({abortPromise:e,delayed:t,offset:r=0,placement:o="top",receivesFocus:a,notImmediatelyClosable:s,virtualTrigger:n}){if(this.isOpen)return!0;t===void 0&&(t=this.overlayElement.hasAttribute("delayed"));const c={color:void 0,scale:void 0,lang:void 0},u=new CustomEvent("sp-query-theme",{bubbles:!0,composed:!0,detail:c,cancelable:!0});this.owner.dispatchEvent(u);const l={},d=new CustomEvent("sp-overlay-query",{bubbles:!0,composed:!0,detail:l,cancelable:!0});return this.overlayElement.dispatchEvent(d),await ze.overlayStack.openOverlay(Object.assign({abortPromise:e,content:this.overlayElement,contentTip:l.overlayContentTipElement,delayed:t,offset:r,placement:o,trigger:this.owner,interaction:this.interaction,theme:c,receivesFocus:a,notImmediatelyClosable:s,virtualTrigger:n},l)),this.isOpen=!0,!0}close(){ze.overlayStack.closeOverlay(this.overlayElement)}}ze.overlayStack=new Ic;const $c=Object.freeze(Object.defineProperty({__proto__:null,Overlay:ze},Symbol.toStringTag,{value:"Module"})),Tc=async(i,e,t,r)=>{const{Overlay:o}=await lo(async()=>{const{Overlay:a}=await Promise.resolve().then(()=>$c);return{Overlay:a}},void 0);return o.open(i,e,t,r)},Pc={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class H extends Ya(Tt){constructor(){super(),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=e=>{e.code!=="ArrowDown"&&e.code!=="ArrowUp"||(e.preventDefault(),this.toggle(!0))},this.menuStatePromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(e){e.stopPropagation();const t=e.target,[r]=t.selectedItems;this.setValueFromItem(r,e)}async setValueFromItem(e,t){const r=this.selectedItem,o=this.value;if(this.selectedItem=e,this.value=e.value,this.open=!1,await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0}))){t&&t.preventDefault(),this.selectedItem=r,this.value=o,this.open=!0;return}r&&(r.selected=(this.selects,!1)),e.selected=!!this.selects}toggle(e){this.readonly||(this.open=typeof e!="undefined"?e:!this.open)}close(){this.readonly||(this.open=!1)}onOverlayClosed(){this.close(),this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.menuStateResolver()}async openMenu(){let e=[];const t=this.querySelector("sp-menu");if(t?e=Array.from(t.children):e=Array.from(this.children).filter(o=>!o.hasAttribute("slot")),e.length===0){this.menuStateResolver();return}this.restoreChildren=as(e,this.optionsMenu,()=>o=>{typeof o.focused!="undefined"&&(o.focused=!1)}),this.sizePopover(this.popover);const{popover:r}=this;this.addEventListener("sp-opened",()=>{this.manageSelection(),this.optionsMenu.updateComplete.then(()=>{this.menuStateResolver()})},{once:!0}),this.closeOverlay=await Qo.openOverlay(this,"inline",r,{placement:this.placement,receivesFocus:"auto"})}sizePopover(e){const t=!this.quiet&&`${this.offsetWidth}px`;t&&e.style.setProperty("min-width",t)}closeMenu(){this.closeOverlay&&(this.closeOverlay(),delete this.closeOverlay)}get selectedItemContent(){return!this._selectedItemContent&&this.selectedItem&&(this._selectedItemContent=this.selectedItem.itemChildren),this._selectedItemContent||{icon:[],content:[]}}renderLabelContent(e){return this.value&&this.selectedItem?e:E`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const e={"visually-hidden":this.icons==="only"&&!!this.value,placeholder:!this.value};return[E`
                <span id="icon" ?hidden=${this.icons==="none"}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${Va(e)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?E`
                          <sp-icon-alert class="validationIcon"></sp-icon-alert>
                      `:Ct}
                <sp-icon-chevron100
                    class="picker ${Pc[this.size]}"
                ></sp-icon-chevron100>
            `]}get renderButton(){return E`
            <span
                id="focus-helper"
                tabindex="${this.focused?"-1":"0"}"
                @focus=${this.onHelperFocus}
            ></span>
            <button
                aria-haspopup="true"
                aria-expanded=${this.open?"true":"false"}
                aria-labelledby="button icon label"
                id="button"
                class="button"
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
        `}update(e){e.has("selectedItem")&&(this._selectedItemContent=void 0),this.selects&&(this.selects="single"),super.update(e)}render(){return E`
            ${this.renderButton} ${this.renderPopover}
        `}get renderPopover(){return E`
            <sp-popover id="popover" @sp-overlay-closed=${this.onOverlayClosed}>
                <sp-menu
                    id="menu"
                    role="${this.listRole}"
                    selects="single"
                    @change=${this.handleChange}
                ></sp-menu>
            </sp-popover>
        `}updateMenuItems(){this.menuItems=[...this.querySelectorAll("sp-menu-item")]}firstUpdated(e){super.firstUpdated(e),this.optionsMenu=this.shadowRoot.querySelector("sp-menu"),this.updateMenuItems(),this.querySelector("sp-menu")&&console.warn(`Deprecation Notice: You no longer need to provide an sp-menu child to ${this.tagName.toLowerCase()}. Any styling or attributes on the sp-menu will be ignored.`)}updated(e){super.updated(e),e.has("value")&&!e.has("selectedItem")&&this.manageSelection(),e.has("disabled")&&this.disabled&&(this.open=!1),e.has("open")&&(this.open||typeof e.get("open")!="undefined")&&(this.menuStatePromise=new Promise(t=>this.menuStateResolver=t),this.open?this.openMenu():this.closeMenu())}manageSelection(){if(this.open||this.updateMenuItems(),this.menuItems.length>0){let e;this.menuItems.forEach(t=>{this.value===t.value&&!t.disabled?e=t:t.selected=(this.selects,!1)}),e?(e.selected=!!this.selects,this.selectedItem=e):(this.value="",this.selectedItem=void 0),this.open&&this.optionsMenu.updateComplete.then(()=>{this.optionsMenu.updateSelectedItemIndex()});return}}async _getUpdateComplete(){const e=await super._getUpdateComplete();return await this.menuStatePromise,e}connectedCallback(){this.open||this.updateMenuItems(),super.connectedCallback()}disconnectedCallback(){this.open=!1,super.disconnectedCallback()}}H.openOverlay=async(i,e,t,r)=>await Tc(i,e,t,r);p([at("#button")],H.prototype,"button",void 0);p([x({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0);p([x({type:Boolean,reflect:!0})],H.prototype,"focused",void 0);p([x({type:String,reflect:!0})],H.prototype,"icons",void 0);p([x({type:Boolean,reflect:!0})],H.prototype,"invalid",void 0);p([x()],H.prototype,"label",void 0);p([x({type:Boolean,reflect:!0})],H.prototype,"open",void 0);p([x({type:Boolean,reflect:!0})],H.prototype,"readonly",void 0);p([x()],H.prototype,"placement",void 0);p([x({type:Boolean,reflect:!0})],H.prototype,"quiet",void 0);p([x({type:String})],H.prototype,"value",void 0);p([x({attribute:!1})],H.prototype,"selectedItem",void 0);p([at("sp-popover")],H.prototype,"popover",void 0);class Qo extends H{constructor(){super(...arguments),this.onKeydown=e=>{const{code:t}=e;if(!t.startsWith("Arrow")||this.readonly)return;if(e.preventDefault(),t==="ArrowUp"||t==="ArrowDown"){this.toggle(!0);return}const r=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,o=!this.value||t==="ArrowRight"?1:-1;let a=r+o;for(;this.menuItems[a]&&this.menuItems[a].disabled;)a+=o;!this.menuItems[a]||this.menuItems[a].disabled||(!this.value||a!==r)&&this.setValueFromItem(this.menuItems[a])}}static get styles(){return[es,ts]}}Qo.openOverlay=async(i,e,t,r)=>await ze.open(i,e,t,r);const _r=new Set,Rc=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";_r.forEach(e=>{e.setAttribute("dir",i)})},Mc=new MutationObserver(Rc);Mc.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Lc=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function Nc(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!Lc(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)_r.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?_r.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}let Zo=class extends Nc(ae){};function Oc(i,{validSizes:e=["s","m","l","xl"],noDefaultSize:t}={}){class r extends i{constructor(){super(...arguments),this._size="m"}get size(){return this._size||"m"}set size(a){const s=t?null:"m",n=a&&a.toLocaleLowerCase(),c=e.includes(n)?n:s;if(c&&this.setAttribute("size",c),this._size===c)return;const u=this._size;this._size=c,this.requestUpdate("size",u)}firstUpdated(a){super.firstUpdated(a),!this.hasAttribute("size")&&!t&&this.setAttribute("size",this.size)}}return p([x({type:String,reflect:!0})],r.prototype,"size",null),r}function Fc(i){class e extends i{renderAnchor({id:r,className:o,ariaHidden:a,labelledby:s,tabindex:n,anchorContent:c=E`<slot></slot>`}){return E`<a
                    id=${r}
                    class=${L(o)}
                    href=${L(this.href)}
                    download=${L(this.download)}
                    target=${L(this.target)}
                    aria-label=${L(this.label)}
                    aria-labelledby=${L(s)}
                    aria-hidden=${L(a?"true":void 0)}
                    tabindex=${L(n)}
                    rel=${L(this.rel)}
                >${c}</a>`}}return p([x({reflect:!0})],e.prototype,"download",void 0),p([x()],e.prototype,"label",void 0),p([x({reflect:!0})],e.prototype,"href",void 0),p([x({reflect:!0})],e.prototype,"target",void 0),p([x({reflect:!0})],e.prototype,"rel",void 0),e}let kr=!0;try{document.body.querySelector(":focus-visible")}catch(i){kr=!1}const Dc=i=>{var e;const t=a=>{if(a.shadowRoot==null||a.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(a.shadowRoot),a.manageAutoFocus&&a.manageAutoFocus();else{const s=()=>{self.applyFocusVisiblePolyfill&&a.shadowRoot&&self.applyFocusVisiblePolyfill(a.shadowRoot),a.manageAutoFocus&&a.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",s,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",s)}}return()=>{}},r=Symbol("endPolyfillCoordination");class o extends i{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),kr||requestAnimationFrame(()=>{this[r]==null&&(this[r]=t(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),kr||requestAnimationFrame(()=>{this[r]!=null&&(this[r](),this[r]=null)})}}return e=r,o};class Nt extends Dc(Zo){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const e=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||e<0?-1:this.focusElement?this.focusElement.tabIndex:e}set tabIndex(e){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(e!==this.tabIndex){this._tabIndex=e;const t=this.disabled?"-1":""+e;this.setAttribute("tabindex",t)}return}if(e===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),e===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),e!==-1&&this.manageFocusElementTabindex(e);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(e)}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(e){this.focusElement||await this.updateComplete,e===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=e}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(e){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(e):HTMLElement.prototype.focus.apply(this,[e]))}blur(){const e=this.focusElement||this;e!==this?e.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const e=this.focusElement||this;e!==this?e.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(e){super.firstUpdated(e),this.manageAutoFocus(),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","")}update(e){e.has("disabled")&&this.handleDisabledChanged(this.disabled,e.get("disabled")),super.update(e)}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(e,t){const r=()=>this.focusElement!==this&&typeof this.focusElement.disabled!="undefined";e?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,r()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):t&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,r()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}}p([x({type:Boolean,reflect:!0})],Nt.prototype,"disabled",void 0);p([x({type:Boolean})],Nt.prototype,"autofocus",void 0);p([x({type:Number})],Nt.prototype,"tabIndex",null);const vt=Symbol("slotElementObserver"),Ki=Symbol("startObserving"),Xe=Symbol("slotContentIsPresent");function qc(i,e){var t;const r=Array.isArray(e)?e:[e];class o extends i{constructor(){super(...arguments),this[t]=new Map,this.managePresenceObservedSlot=()=>{r.forEach(s=>{this[Xe].set(s,!!this.querySelector(s))}),this.requestUpdate()}}get slotContentIsPresent(){if(r.length===1)return this[Xe].get(r[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(s){if(this[Xe].has(s))return this[Xe].get(s)||!1;throw new Error("The provided selector `` is not being observed.")}[(t=Xe,Ki)](){const s={childList:!0,subtree:!0};this[vt]||(this[vt]=new MutationObserver(this.managePresenceObservedSlot)),this[vt].observe(this,s),this.managePresenceObservedSlot()}connectedCallback(){super.connectedCallback(),this[Ki]()}disconnectedCallback(){this[vt].disconnect(),super.disconnectedCallback()}}return o}const Ke=Symbol("slotElementObserver"),Jt=Symbol("assignedNodes"),Ji=Symbol("startObserving");function Bc(i,e){var t;class r extends i{constructor(){super(...arguments),this.slotHasContent=!1}manageTextObservedSlot(){if(!this[Jt])return;const a=[...this[Jt]].filter(s=>s.tagName?!0:s.textContent?s.textContent.trim():!1);this.slotHasContent=a.length>0}firstUpdated(a){super.firstUpdated(a),this.manageTextObservedSlot()}[(t=Jt,Ji)](){const a={characterData:!0,subtree:!0};if(!this[Ke]){const s=n=>{for(const c of n)c.type==="characterData"&&this.manageTextObservedSlot()};this[Ke]=new MutationObserver(s)}this[Ke].observe(this,a)}connectedCallback(){super.connectedCallback(),this[Ji]()}disconnectedCallback(){this[Ke]&&this[Ke].disconnect(),super.disconnectedCallback()}}return p([x({type:Boolean,attribute:!1})],r.prototype,"slotHasContent",void 0),p([To(e,!0)],r.prototype,t,void 0),r}let Ot=class extends Fc(Bc(qc(Nt,'[slot="icon"]'))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const e=[E`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&e.unshift(E`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),e}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(e){if(this.disabled)return e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let e=!1;if(this.anchorElement)this.anchorElement.click(),e=!0;else if(this.type!=="button"){const t=document.createElement("button");t.type=this.type,this.insertAdjacentElement("afterend",t),t.click(),t.remove(),e=!0}return e}renderAnchor(){return E`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return E`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(e){const{code:t}=e;switch(t){case"Space":e.preventDefault(),typeof this.href=="undefined"&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0);break}}handleKeypress(e){const{code:t}=e;switch(t){case"Enter":case"NumpadEnter":this.click();break}}handleKeyup(e){const{code:t}=e;switch(t){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click();break}}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?(this.getAttribute("role")==="button"&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||this.getAttribute("role")==="link")&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(e){super.updated(e),e.has("href")&&this.manageAnchor(),e.has("label")&&this.setAttribute("aria-label",this.label||""),e.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}};p([x({type:Boolean,reflect:!0})],Ot.prototype,"active",void 0);p([x({type:String})],Ot.prototype,"type",void 0);p([at(".anchor")],Ot.prototype,"anchorElement",void 0);const Hc=U`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}
`;class ci extends Zo{static get styles(){return[Hc]}render(){return E`
            <slot></slot>
        `}}p([x()],ci.prototype,"label",void 0);p([x({reflect:!0})],ci.prototype,"size",void 0);let Cr;const Uc=function(i,...e){return Cr?Cr(i,...e):e.reduce((t,r,o)=>t+r+i[o+1],i[0])},jc=i=>{Cr=i},Vc=U`
:host{--spectrum-button-line-height:1.3;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(--spectrum-button-line-height);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-s-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-s-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-s-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-s-quiet-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-s-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-s-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-s-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-s-padding-left,var(--spectrum-alias-item-workflow-padding-left-s)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-s)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-s)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-alias-item-padding-s)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-alias-item-padding-s)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-25
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-25
)}:host([size=m]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-m-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-m-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-m-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-m-quiet-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-m-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-m-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-m-padding-left,var(--spectrum-alias-item-workflow-padding-left-m)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-m)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-m)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-alias-item-padding-m)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-alias-item-padding-m)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-40
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-40
)}:host([size=l]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-l-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-l-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-l-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-l-quiet-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-l-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-l-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-l-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-l-height,var(--spectrum-alias-item-height-l)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-l-padding-left,var(--spectrum-alias-item-workflow-padding-left-l)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-l)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-l)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-alias-item-padding-l)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-alias-item-padding-l)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-50
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-50
)}:host([size=xl]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-xl-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-xl-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-xl-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-xl-quiet-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-xl-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-xl-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-xl-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-xl-height,var(--spectrum-alias-item-height-xl)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-xl-padding-left,var(--spectrum-alias-item-workflow-padding-left-xl)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-xl)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-xl)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-alias-item-padding-xl)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-alias-item-padding-xl)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-65
)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted);padding-right:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-actionbutton-border-radius);border-width:var(--spectrum-actionbutton-border-size);font-size:var(--spectrum-actionbutton-text-size);font-weight:var(--spectrum-actionbutton-text-font-weight);height:var(--spectrum-actionbutton-height);line-height:var(--spectrum-actionbutton-text-line-height);min-width:var(--spectrum-actionbutton-min-width);position:relative}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-actionbutton-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-actionbutton-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only]::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon{margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted)));margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted)))}#label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) #hold-affordance{right:var(
--spectrum-actionbutton-hold-icon-padding-right
)}:host([dir=rtl]) #hold-affordance{left:var(
--spectrum-actionbutton-hold-icon-padding-right
)}:host([dir=rtl]) #hold-affordance{transform:matrix(-1,0,0,1,0,0)}#hold-affordance{bottom:var(--spectrum-actionbutton-hold-icon-padding-bottom);position:absolute}:host([quiet]){border-radius:var(--spectrum-actionbutton-quiet-border-radius);border-width:var(
--spectrum-actionbutton-quiet-border-size
);font-size:var(--spectrum-actionbutton-quiet-text-size);font-weight:var(--spectrum-actionbutton-quiet-text-font-weight)}:host{--spectrum-actionbutton-m-quiet-border-size-key-focus:1px}:host{background-color:var(
--spectrum-actionbutton-m-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-actionbutton-m-border-color,var(--spectrum-alias-border-color)
);color:var(
--spectrum-actionbutton-m-text-color,var(--spectrum-alias-text-color)
)}::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color,var(--spectrum-alias-icon-color)
)}#hold-affordance{color:var(
--spectrum-actionbutton-m-hold-icon-color,var(--spectrum-alias-icon-color)
)}:host(:hover){background-color:var(
--spectrum-actionbutton-m-background-color-hover,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-border-color-hover,var(--spectrum-alias-border-color-hover)
);color:var(
--spectrum-actionbutton-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(:hover) #hold-affordance{color:var(
--spectrum-actionbutton-m-hold-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)
) var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(:focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)
) var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host(:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(.focus-visible) #hold-affordance{color:var(
--spectrum-actionbutton-m-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:focus-visible) #hold-affordance{color:var(
--spectrum-actionbutton-m-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([active]){background-color:var(
--spectrum-actionbutton-m-background-color-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-down,var(--spectrum-alias-border-color-down)
);color:var(
--spectrum-actionbutton-m-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([active]) #hold-affordance{color:var(
--spectrum-actionbutton-m-hold-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host(:disabled),:host([disabled]){background-color:var(
--spectrum-actionbutton-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-disabled,var(--spectrum-alias-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host(:disabled) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host(:disabled) #hold-affordance,:host([disabled]) #hold-affordance{color:var(
--spectrum-actionbutton-m-hold-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([selected]){background-color:var(
--spectrum-actionbutton-m-background-color-selected,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected,var(--spectrum-alias-border-color)
);color:var(
--spectrum-actionbutton-m-text-color-selected,var(--spectrum-alias-text-color)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected,var(--spectrum-alias-icon-color)
)}:host([selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([selected].focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([selected]:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([selected]:hover){background-color:var(
--spectrum-actionbutton-m-background-color-selected-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-hover,var(--spectrum-alias-border-color-hover)
);color:var(
--spectrum-actionbutton-m-text-color-selected-hover,var(--spectrum-alias-text-color-hover)
)}:host([selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-hover,var(--spectrum-alias-icon-color-hover)
)}:host([selected][active]){background-color:var(
--spectrum-actionbutton-m-background-color-selected-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-down,var(--spectrum-alias-border-color-down)
);color:var(
--spectrum-actionbutton-m-text-color-selected-down,var(--spectrum-alias-text-color-down)
)}:host([selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-down,var(--spectrum-alias-icon-color-down)
)}:host([selected]:disabled),:host([selected][disabled]){background-color:var(
--spectrum-actionbutton-m-background-color-selected-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-disabled,var(--spectrum-alias-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([selected]:disabled) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([emphasized]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color,var(--spectrum-alias-border-color)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color,var(--spectrum-alias-text-color)
)}:host([emphasized]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color,var(--spectrum-alias-icon-color)
)}:host([emphasized]) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color,var(--spectrum-alias-icon-color)
)}:host([emphasized][selected]) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color-selected,var(--spectrum-global-color-static-white)
)}:host([emphasized][selected]:hover) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([emphasized]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-hover,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-hover,var(--spectrum-alias-border-color-hover)
);box-shadow:none;color:var(
--spectrum-actionbutton-m-emphasized-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([emphasized]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([emphasized]:hover) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([emphasized].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-key-focus,var(--spectrum-alias-border-color-hover)
);box-shadow:0 0 0 var(
--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)
) var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([emphasized]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-key-focus,var(--spectrum-alias-border-color-hover)
);box-shadow:0 0 0 var(
--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)
) var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([emphasized].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([emphasized]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([emphasized].focus-visible) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([emphasized]:focus-visible) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([emphasized][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-down,var(--spectrum-alias-border-color-down)
);box-shadow:none;color:var(
--spectrum-actionbutton-m-emphasized-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([emphasized][active]) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host([emphasized]:disabled),:host([emphasized][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-disabled,var(--spectrum-alias-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([emphasized]:disabled) ::slotted([slot=icon]),:host([emphasized][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([emphasized]:disabled) #hold-affordance,:host([emphasized][disabled]) #hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-hold-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected,var(--spectrum-semantic-cta-color-background-default)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected,var(--spectrum-semantic-cta-color-background-default)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-down,var(--spectrum-semantic-cta-color-background-down)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-down,var(--spectrum-semantic-cta-color-background-down)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-down,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-down,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:disabled),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected]:disabled),:host([emphasized][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-disabled,var(--spectrum-alias-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([emphasized][quiet][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([quiet]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color,var(--spectrum-alias-text-color)
)}:host([quiet]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-hover,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-hover,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([quiet].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)
) var(
--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)
) var(
--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet][active]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-down,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([quiet]:disabled),:host([quiet][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([quiet][selected]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected,var(--spectrum-alias-text-color)
)}:host([quiet][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-key-focus,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-key-focus,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet][selected]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-hover,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-hover,var(--spectrum-alias-text-color-hover)
)}:host([quiet][selected][active]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-down,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-down,var(--spectrum-alias-text-color-down)
)}:host([quiet][selected]:disabled),:host([quiet][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}@media (forced-colors:active){:host{--spectrum-actionbutton-m-background-color:ButtonFace;--spectrum-actionbutton-m-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-background-color-down:ButtonFace;--spectrum-actionbutton-m-background-color-hover:ButtonFace;--spectrum-actionbutton-m-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-background-color-selected:Highlight;--spectrum-actionbutton-m-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-background-color-selected-down:Highlight;--spectrum-actionbutton-m-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-border-color:ButtonText;--spectrum-actionbutton-m-border-color-disabled:GrayText;--spectrum-actionbutton-m-border-color-down:Highlight;--spectrum-actionbutton-m-border-color-hover:Highlight;--spectrum-actionbutton-m-border-color-key-focus:ButtonText;--spectrum-actionbutton-m-border-color-selected:HighlightText;--spectrum-actionbutton-m-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-border-color-selected-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-background-color:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-down:Highlight;--spectrum-actionbutton-m-emphasized-background-color-hover:Highlight;--spectrum-actionbutton-m-emphasized-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-selected:Highlight;--spectrum-actionbutton-m-emphasized-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-selected-down:Highlight;--spectrum-actionbutton-m-emphasized-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-emphasized-border-color:ButtonText;--spectrum-actionbutton-m-emphasized-border-color-disabled:GrayText;--spectrum-actionbutton-m-emphasized-border-color-down:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-hover:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-border-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-text-color:ButtonText;--spectrum-actionbutton-m-emphasized-text-color-disabled:GrayText;--spectrum-actionbutton-m-emphasized-text-color-down:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-hover:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-text-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-background-color:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-selected:Highlight;--spectrum-actionbutton-m-quiet-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-selected-down:Highlight;--spectrum-actionbutton-m-quiet-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-quiet-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-quiet-border-color:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-down:Highlight;--spectrum-actionbutton-m-quiet-border-color-hover:Highlight;--spectrum-actionbutton-m-quiet-border-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-border-color-selected:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-down:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-hover:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-text-color:ButtonText;--spectrum-actionbutton-m-quiet-text-color-disabled:GrayText;--spectrum-actionbutton-m-quiet-text-color-down:ButtonText;--spectrum-actionbutton-m-quiet-text-color-hover:ButtonText;--spectrum-actionbutton-m-quiet-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-text-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-text-color:ButtonText;--spectrum-actionbutton-m-text-color-disabled:GrayText;--spectrum-actionbutton-m-text-color-down:ButtonText;--spectrum-actionbutton-m-text-color-hover:ButtonText;--spectrum-actionbutton-m-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-text-color-selected:HighlightText;--spectrum-actionbutton-m-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-border-size-key-focus:3px;forced-color-adjust:none}:host([quiet][emphasized]:not(:disabled,[disabled]):hover){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([quiet][emphasized]:not(:disabled,[disabled])[active]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-down,var(--spectrum-semantic-cta-color-background-down)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-down,var(--spectrum-semantic-cta-color-background-down)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-down,var(--spectrum-global-color-static-white)
)}}:host{display:inline-flex;flex-direction:row}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{bottom:0;left:0;position:absolute;right:0;top:0}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`,Gc=U`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`,Wc=()=>Uc`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`;class Xc extends ci{render(){return jc(E),Wc()}}customElements.define("sp-icon-corner-triangle300",Xc);const Kc={s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"},Jc=300;let Qi;class Pe extends Oc(Ot){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{if(!this.toggles)return;this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected)},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[Vc,Gc]}get value(){return this._value||this.itemText}set value(e){e!==this._value&&(this._value=e||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(){this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),Qi=setTimeout(()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))},Jc)}onPointerup(){clearTimeout(Qi),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(e){if(!this.holdAffordance)return super.handleKeydown(e);const{code:t,altKey:r}=e;(t==="Space"||r&&t==="ArrowDown")&&(e.preventDefault(),t==="ArrowDown"&&(e.stopPropagation(),e.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(e){if(!this.holdAffordance)return super.handleKeyup(e);const{code:t,altKey:r}=e;(t==="Space"||r&&t==="ArrowDown")&&(e.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const e=super.buttonContent;return this.holdAffordance&&e.unshift(E`
                <sp-icon-corner-triangle300
                    id="hold-affordance"
                    class="${Kc[this.size]}"
                ></sp-icon-corner-triangle300>
            `),e}updated(e){super.updated(e),this.toggles&&e.has("selected")&&this.focusElement.setAttribute("aria-pressed",this.selected?"true":"false")}}p([x({type:Boolean,reflect:!0})],Pe.prototype,"emphasized",void 0);p([x({type:Boolean,reflect:!0,attribute:"hold-affordance"})],Pe.prototype,"holdAffordance",void 0);p([x({type:Boolean,reflect:!0})],Pe.prototype,"quiet",void 0);p([x({type:Boolean,reflect:!0})],Pe.prototype,"selected",void 0);p([x({type:Boolean,reflect:!0})],Pe.prototype,"toggles",void 0);p([x({type:String})],Pe.prototype,"value",null);customElements.define("sp-action-button",Pe);const Je=Symbol("slotElementObserver"),Qt=Symbol("assignedNodes"),Zi=Symbol("startObserving");function Qc(i,e){var t;class r extends i{constructor(){super(...arguments),this.slotHasContent=!1}manageTextObservedSlot(){if(!this[Qt])return;const a=[...this[Qt]].filter(s=>s.tagName?!0:s.textContent?s.textContent.trim():!1);this.slotHasContent=a.length>0}firstUpdated(a){super.firstUpdated(a),this.manageTextObservedSlot()}[(t=Qt,Zi)](){const a={characterData:!0,subtree:!0};if(!this[Je]){const s=n=>{for(const c of n)c.type==="characterData"&&this.manageTextObservedSlot()};this[Je]=new MutationObserver(s)}this[Je].observe(this,a)}connectedCallback(){super.connectedCallback(),this[Zi]()}disconnectedCallback(){this[Je]&&this[Je].disconnect(),super.disconnectedCallback()}}return p([x({type:Boolean,attribute:!1})],r.prototype,"slotHasContent",void 0),p([To(e,!0)],r.prototype,t,void 0),r}const Zc=({width:i=24,height:e=24,hidden:t=!1,title:r="More"}={})=>Gr`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${i}"
    height="${e}"
    viewBox="0 0 36 36"
    aria-hidden="${t?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <circle cx="17.8" cy="18.2" r="3.8" />
    <circle cx="29.5" cy="18.2" r="3.8" />
    <circle cx="6.1" cy="18.2" r="3.68" />
  </svg>`;class Yc extends st{render(){return Wr(E),Zc({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-more",Yc);const el=U`
:host{display:inline-flex}:host([quiet]){min-width:0}::slotted([slot=icon]){flex-shrink:0}.icon{flex-shrink:0}#popover{display:none;max-width:none;width:auto}:host([dir=ltr]) .icon,:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) .icon,:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir]) slot[icon-only] .icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted)));margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted)))}
`;class Yo extends Qc(H,"label"){constructor(){super(...arguments),this.selects=void 0,this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[el]}get hasLabel(){return this.slotHasContent}get buttonContent(){return[E`
                <slot name="icon" slot="icon" ?icon-only=${!this.hasLabel}>
                    <sp-icon-more class="icon"></sp-icon-more>
                </slot>
                <slot name="label" ?hidden=${!this.hasLabel}></slot>
            `]}get renderButton(){return E`
            <sp-action-button
                quiet
                ?selected=${this.open}
                aria-haspopup="true"
                aria-controls="popover"
                aria-expanded=${this.open?"true":"false"}
                aria-label=${L(this.label||void 0)}
                id="button"
                class="button"
                size=${this.size}
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
            >
                ${this.buttonContent}
            </sp-action-button>
        `}get renderPopover(){return E`
            <sp-popover id="popover" @sp-overlay-closed=${this.onOverlayClosed}>
                <sp-menu
                    id="menu"
                    role="${this.listRole}"
                    @change=${this.handleChange}
                    .selects=${this.selects}
                ></sp-menu>
            </sp-popover>
        `}updated(e){super.updated(e),e.has("invalid")&&(this.invalid=!1),this.quiet=!0}}p([x({type:String})],Yo.prototype,"selects",void 0);customElements.define("sp-action-menu",Yo);customElements.define("sp-menu-item",te);const tl=({width:i=24,height:e=24,hidden:t=!1,title:r="Settings"}={})=>Gr`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${i}"
    aria-hidden="${t?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M32.9 15.793h-3.111a11.953 11.953 0 00-1.842-4.507l2.205-2.206a1.1 1.1 0 000-1.56l-1.673-1.672a1.1 1.1 0 00-1.56 0l-2.205 2.205a11.925 11.925 0 00-4.507-1.841V3.1A1.1 1.1 0 0019.1 2h-2.2a1.1 1.1 0 00-1.1 1.1v3.112a11.925 11.925 0 00-4.507 1.841l-2.2-2.205a1.1 1.1 0 00-1.56 0L5.848 7.52a1.1 1.1 0 000 1.56l2.205 2.206a11.953 11.953 0 00-1.842 4.507H3.1A1.1 1.1 0 002 16.9v2.2a1.1 1.1 0 001.1 1.1h3.111a11.934 11.934 0 001.842 4.507l-2.205 2.212a1.1 1.1 0 000 1.56l1.673 1.673a1.1 1.1 0 001.56 0l2.205-2.205a11.925 11.925 0 004.507 1.841V32.9A1.1 1.1 0 0016.9 34h2.2a1.1 1.1 0 001.1-1.1v-3.112a11.925 11.925 0 004.507-1.841l2.205 2.205a1.1 1.1 0 001.56 0l1.673-1.673a1.1 1.1 0 000-1.56l-2.205-2.205a11.934 11.934 0 001.842-4.507H32.9A1.1 1.1 0 0034 19.1v-2.2a1.1 1.1 0 00-1.1-1.107zM22.414 18A4.414 4.414 0 1118 13.586 4.414 4.414 0 0122.414 18z"
    />
  </svg>`;class rl extends st{render(){return Wr(E),tl({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-settings",rl);const Ar=new Set,il=()=>{const i=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";Ar.forEach(e=>{e.setAttribute("dir",i)})},ol=new MutationObserver(il);ol.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const al=i=>typeof i.startManagingContentDirection!="undefined"||i.tagName==="SP-THEME";function sl(i){class e extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch(o){return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!al(r);)r=r.assignedSlot||r.parentNode||r.host;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",r===document.documentElement)Ar.add(this);else{const{localName:o}=r;o.search("-")>-1&&!customElements.get(o)?customElements.whenDefined(o).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?Ar.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return p([x({reflect:!0})],e.prototype,"dir",void 0),e}class nl extends sl(ae){}function cl(i,{validSizes:e=["s","m","l","xl"],noDefaultSize:t}={}){class r extends i{constructor(){super(...arguments),this._size="m"}get size(){return this._size||"m"}set size(a){const s=t?null:"m",n=a&&a.toLocaleLowerCase(),c=e.includes(n)?n:s;if(c&&this.setAttribute("size",c),this._size===c)return;const u=this._size;this._size=c,this.requestUpdate("size",u)}firstUpdated(a){super.firstUpdated(a),!this.hasAttribute("size")&&!t&&this.setAttribute("size",this.size)}}return p([x({type:String,reflect:!0})],r.prototype,"size",null),r}const ll=U`
:host([size=s]){--spectrum-divider-height:var(
--spectrum-divider-s-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-s-vertical-width,var(--spectrum-global-dimension-size-10)
)}:host([size=m]){--spectrum-divider-height:var(
--spectrum-divider-m-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-m-vertical-width,var(--spectrum-global-dimension-size-25)
)}:host([size=l]){--spectrum-divider-height:var(
--spectrum-divider-l-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-l-vertical-width,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-divider-vertical-height:100%}:host{border-width:medium;border:var(--spectrum-divider-height);border-radius:var(--spectrum-divider-height);height:var(--spectrum-divider-height);overflow:visible;width:100%}:host([vertical]){height:var(
--spectrum-divider-vertical-height
);width:var(--spectrum-divider-vertical-width)}:host{--spectrum-divider-l-background-color:var(
--spectrum-global-color-gray-800
);--spectrum-divider-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-divider-s-background-color:var(
--spectrum-global-color-gray-300
)}:host([size=l]){background-color:var(
--spectrum-divider-l-background-color,var(--spectrum-global-color-gray-800)
)}:host([size=m]){background-color:var(
--spectrum-divider-m-background-color,var(--spectrum-global-color-gray-300)
)}:host([size=s]){background-color:var(
--spectrum-divider-s-background-color,var(--spectrum-global-color-gray-300)
)}:host{display:block}hr{border:none;margin:0}
`;class li extends cl(nl,{validSizes:["s","m","l"]}){constructor(){super(...arguments),this.vertical=!1}render(){return E``}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","separator")}updated(e){super.updated(e),e.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}li.styles=[ll];p([x({type:Boolean,reflect:!0})],li.prototype,"vertical",void 0);customElements.define("sp-divider",li);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pe={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class dl{constructor(e){this.handleKeydown=l=>{const d=l.key;if(l.defaultPrevented||!this.isNavigableKey(d))return;const f=this.items;if(!f.length)return;const h=Ht(f,this.isActivatable);l.preventDefault();const y=this.isRtl(),_=y?pe.ArrowRight:pe.ArrowLeft,k=y?pe.ArrowLeft:pe.ArrowRight;let C=null;switch(d){case pe.ArrowDown:case k:C=Si(f,h,this.isActivatable,this.wrapNavigation());break;case pe.ArrowUp:case _:C=Ai(f,h,this.isActivatable,this.wrapNavigation());break;case pe.Home:C=ka(f,this.isActivatable);break;case pe.End:C=_a(f,this.isActivatable);break}C&&h&&h.item!==C&&(h.item.tabIndex=-1)},this.onDeactivateItems=()=>{const l=this.items;for(const d of l)this.deactivateItem(d)},this.onRequestActivation=l=>{this.onDeactivateItems();const d=l.target;this.activateItem(d),d.focus()},this.onSlotchange=()=>{const l=this.items;let d=!1;for(const h of l){if(!h.disabled&&h.tabIndex>-1&&!d){d=!0,h.tabIndex=0;continue}h.tabIndex=-1}if(d)return;const f=Ca(l,this.isActivatable);f&&(f.tabIndex=0)};const{isItem:t,getPossibleItems:r,isRtl:o,deactivateItem:a,activateItem:s,isNavigableKey:n,isActivatable:c,wrapNavigation:u}=e;this.isItem=t,this.getPossibleItems=r,this.isRtl=o,this.deactivateItem=a,this.activateItem=s,this.isNavigableKey=n,this.isActivatable=c,this.wrapNavigation=u!=null?u:()=>!0}get items(){const e=this.getPossibleItems(),t=[];for(const r of e){if(this.isItem(r)){t.push(r);continue}const a=r.item;a&&this.isItem(a)&&t.push(a)}return t}activateNextItem(){const e=this.items,t=Ht(e,this.isActivatable);return t&&(t.item.tabIndex=-1),Si(e,t,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,t=Ht(e,this.isActivatable);return t&&(t.item.tabIndex=-1),Ai(e,t,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pl=new Set(Object.values(pe));class ea extends ye{get items(){return this.listController.items}constructor(){super(),this.listController=new dl({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>pl.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return m`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}p([ga({flatten:!0})],ea.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ul=q`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Sr=class extends ea{};Sr.styles=[ul];Sr=p([J("md-list")],Sr);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ml=q`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled,[aria-disabled=true]){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true])::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zr=class extends qr{getRenderClasses(){return ft(Me({},super.getRenderClasses()),{filled:!0,"toggle-filled":this.toggle})}};zr.styles=[Dr,ml];zr=p([J("md-filled-icon-button")],zr);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const hl=q`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-height: var(--md-filled-tonal-icon-button-container-height, 40px);--_container-width: var(--md-filled-tonal-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-icon-color: var(--md-filled-tonal-icon-button-toggle-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filled-tonal-icon-button-container-shape-start-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-icon-button-container-shape-start-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-icon-button-container-shape-end-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-icon-button-container-shape-end-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]){color:var(--_toggle-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true])::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Er=class extends qr{getRenderClasses(){return ft(Me({},super.getRenderClasses()),{"filled-tonal":!0,"toggle-filled-tonal":this.toggle})}};Er.styles=[Dr,hl];Er=p([J("md-filled-tonal-icon-button")],Er);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fl=q`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ir=class extends qr{getRenderClasses(){return ft(Me({},super.getRenderClasses()),{standard:!0})}};Ir.styles=[Dr,fl];Ir=p([J("md-icon-button")],Ir);/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{var i,e,t;const r=Symbol(),o=Symbol(),a=Symbol(),s=Symbol(),n=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),d=Symbol(),f=Symbol(),h=Symbol(),y=Symbol(),_=Symbol();class k{constructor(){this[i]=[],this[e]=[],this[t]=new Set}destructor(){this[d](this[a]);const v=this;v[r]=null,v[a]=null,v[o]=null}get top(){const v=this[r];return v[v.length-1]||null}push(v){!v||v===this.top||(this.remove(v),this[c](v),this[r].push(v))}remove(v){const w=this[r].indexOf(v);return w===-1?!1:(this[r].splice(w,1),w===this[r].length&&this[c](this.top),!0)}pop(){const v=this.top;return v&&this.remove(v),v}has(v){return this[r].indexOf(v)!==-1}[(i=r,e=a,t=o,c)](v){const w=this[o],g=this[a];if(!v){this[d](g),w.clear(),this[a]=[];return}const b=this[f](v);if(b[b.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[a]=b;const A=this[h](v);if(!g.length){this[l](b,A,w);return}let S=g.length-1,z=b.length-1;for(;S>0&&z>0&&g[S]===b[z];)S--,z--;g[S]!==b[z]&&this[u](g[S],b[z]),S>0&&this[d](g.slice(0,S)),z>0&&this[l](b.slice(0,z),A,null)}[u](v,w){const g=v[s];this[y](v)&&!v.inert&&(v.inert=!0,g.add(v)),g.has(w)&&(w.inert=!1,g.delete(w)),w[n]=v[n],w[s]=g,v[n]=void 0,v[s]=void 0}[d](v){for(const w of v){w[n].disconnect(),w[n]=void 0;const b=w[s];for(const A of b)A.inert=!1;w[s]=void 0}}[l](v,w,g){for(const b of v){const A=b.parentNode,S=A.children,z=new Set;for(let D=0;D<S.length;D++){const M=S[D];M===b||!this[y](M)||w&&w.has(M)||(g&&M.inert?g.add(M):(M.inert=!0,z.add(M)))}b[s]=z;const R=new MutationObserver(this[_].bind(this));b[n]=R;let T=A;const P=T;P.__shady&&P.host&&(T=P.host),R.observe(T,{childList:!0})}}[_](v){const w=this[a],g=this[o];for(const b of v){const A=b.target.host||b.target,S=A===document.body?w.length:w.indexOf(A),z=w[S-1],R=z[s];for(let T=0;T<b.removedNodes.length;T++){const P=b.removedNodes[T];if(P===z){console.info("Detected removal of the top Blocking Element."),this.pop();return}R.has(P)&&(P.inert=!1,R.delete(P))}for(let T=0;T<b.addedNodes.length;T++){const P=b.addedNodes[T];this[y](P)&&(g&&P.inert?g.add(P):(P.inert=!0,R.add(P)))}}}[y](v){return/^(style|template|script)$/.test(v.localName)===!1}[f](v){const w=[];let g=v;for(;g&&g!==document.body;){if(g.nodeType===Node.ELEMENT_NODE&&w.push(g),g.assignedSlot){for(;g=g.assignedSlot;)w.push(g);g=w.pop();continue}g=g.parentNode||g.host}return w}[h](v){const w=v.shadowRoot;if(!w)return null;const g=new Set;let b,A,S;const z=w.querySelectorAll("slot");if(z.length&&z[0].assignedNodes)for(b=0;b<z.length;b++)for(S=z[b].assignedNodes({flatten:!0}),A=0;A<S.length;A++)S[A].nodeType===Node.ELEMENT_NODE&&g.add(S[A]);return g}}document.$blockingElements=new k})();var Zt=function(){function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}();function Yt(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window=="undefined"||typeof Element=="undefined")return;var i=Array.prototype.slice,e=Element.prototype.matches||Element.prototype.msMatchesSelector,t=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","video","[contenteditable]"].join(","),r=function(){function u(l,d){Yt(this,u),this._inertManager=d,this._rootElement=l,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return Zt(u,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(d){this._unmanageNode(d.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(d){var f=this;s(d,function(k){return f._visitNode(k)});var h=document.activeElement;if(!document.body.contains(d)){for(var y=d,_=void 0;y;){if(y.nodeType===Node.DOCUMENT_FRAGMENT_NODE){_=y;break}y=y.parentNode}_&&(h=_.activeElement)}d.contains(h)&&(h.blur(),h===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(d){if(d.nodeType===Node.ELEMENT_NODE){var f=d;f!==this._rootElement&&f.hasAttribute("inert")&&this._adoptInertRoot(f),(e.call(f,t)||f.hasAttribute("tabindex"))&&this._manageNode(f)}}},{key:"_manageNode",value:function(d){var f=this._inertManager.register(d,this);this._managedNodes.add(f)}},{key:"_unmanageNode",value:function(d){var f=this._inertManager.deregister(d,this);f&&this._managedNodes.delete(f)}},{key:"_unmanageSubtree",value:function(d){var f=this;s(d,function(h){return f._unmanageNode(h)})}},{key:"_adoptInertRoot",value:function(d){var f=this._inertManager.getInertRoot(d);f||(this._inertManager.setInert(d,!0),f=this._inertManager.getInertRoot(d)),f.managedNodes.forEach(function(h){this._manageNode(h.node)},this)}},{key:"_onMutation",value:function(d,f){d.forEach(function(h){var y=h.target;if(h.type==="childList")i.call(h.addedNodes).forEach(function(k){this._makeSubtreeUnfocusable(k)},this),i.call(h.removedNodes).forEach(function(k){this._unmanageSubtree(k)},this);else if(h.type==="attributes"){if(h.attributeName==="tabindex")this._manageNode(y);else if(y!==this._rootElement&&h.attributeName==="inert"&&y.hasAttribute("inert")){this._adoptInertRoot(y);var _=this._inertManager.getInertRoot(y);this._managedNodes.forEach(function(k){y.contains(k.node)&&_._manageNode(k.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(d){this._savedAriaHidden=d},get:function(){return this._savedAriaHidden}}]),u}(),o=function(){function u(l,d){Yt(this,u),this._node=l,this._overrodeFocusMethod=!1,this._inertRoots=new Set([d]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return Zt(u,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var d=this._node;this._savedTabIndex!==null?d.setAttribute("tabindex",this._savedTabIndex):d.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete d.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var d=this.node;if(e.call(d,t)){if(d.tabIndex===-1&&this.hasSavedTabIndex)return;d.hasAttribute("tabindex")&&(this._savedTabIndex=d.tabIndex),d.setAttribute("tabindex","-1"),d.nodeType===Node.ELEMENT_NODE&&(d.focus=function(){},this._overrodeFocusMethod=!0)}else d.hasAttribute("tabindex")&&(this._savedTabIndex=d.tabIndex,d.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(d){this._throwIfDestroyed(),this._inertRoots.add(d)}},{key:"removeInertRoot",value:function(d){this._throwIfDestroyed(),this._inertRoots.delete(d),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(d){this._throwIfDestroyed(),this._savedTabIndex=d},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),u}(),a=function(){function u(l){if(Yt(this,u),!l)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=l,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),n(l.head||l.body||l.documentElement),l.readyState==="loading"?l.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return Zt(u,[{key:"setInert",value:function(d,f){if(f){if(this._inertRoots.has(d))return;var h=new r(d,this);if(d.setAttribute("inert",""),this._inertRoots.set(d,h),!this._document.body.contains(d))for(var y=d.parentNode;y;)y.nodeType===11&&n(y),y=y.parentNode}else{if(!this._inertRoots.has(d))return;var _=this._inertRoots.get(d);_.destructor(),this._inertRoots.delete(d),d.removeAttribute("inert")}}},{key:"getInertRoot",value:function(d){return this._inertRoots.get(d)}},{key:"register",value:function(d,f){var h=this._managedNodes.get(d);return h!==void 0?h.addInertRoot(f):h=new o(d,f),this._managedNodes.set(d,h),h}},{key:"deregister",value:function(d,f){var h=this._managedNodes.get(d);return h?(h.removeInertRoot(f),h.destroyed&&this._managedNodes.delete(d),h):null}},{key:"_onDocumentLoaded",value:function(){var d=i.call(this._document.querySelectorAll("[inert]"));d.forEach(function(f){this.setInert(f,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(d,f){var h=this;d.forEach(function(y){switch(y.type){case"childList":i.call(y.addedNodes).forEach(function(C){if(C.nodeType===Node.ELEMENT_NODE){var v=i.call(C.querySelectorAll("[inert]"));e.call(C,"[inert]")&&v.unshift(C),v.forEach(function(w){this.setInert(w,!0)},h)}},h);break;case"attributes":if(y.attributeName!=="inert")return;var _=y.target,k=_.hasAttribute("inert");h.setInert(_,k);break}},this)}}]),u}();function s(u,l,d){if(u.nodeType==Node.ELEMENT_NODE){var f=u;l&&l(f);var h=f.shadowRoot;if(h){s(h,l);return}if(f.localName=="content"){for(var y=f,_=y.getDistributedNodes?y.getDistributedNodes():[],k=0;k<_.length;k++)s(_[k],l);return}if(f.localName=="slot"){for(var C=f,v=C.assignedNodes?C.assignedNodes({flatten:!0}):[],w=0;w<v.length;w++)s(v[w],l);return}}for(var g=u.firstChild;g!=null;)s(g,l),g=g.nextSibling}function n(u){if(!u.querySelector("style#inert-style, link#inert-style")){var l=document.createElement("style");l.setAttribute("id","inert-style"),l.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,u.appendChild(l)}}if(!HTMLElement.prototype.hasOwnProperty("inert")){var c=new a(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(l){c.setInert(this,l)}})}})();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var j={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},$r={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bl=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ta=function(i){Te(e,i);function e(t){var r=i.call(this,re(re({},e.defaultAdapter),t))||this;return r.animationFrame=0,r.animationTimer=0,r}return Object.defineProperty(e,"strings",{get:function(){return $r},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(j.OPEN),this.adapter.addClass(j.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(j.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(j.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(j.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(j.OPENING)||this.adapter.hasClass(j.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(j.CLOSING)},e.prototype.handleKeydown=function(t){var r=t.keyCode,o=t.key,a=o==="Escape"||r===27;a&&this.close()},e.prototype.handleTransitionEnd=function(t){var r=j.OPENING,o=j.CLOSING,a=j.OPEN,s=j.ANIMATE,n=j.ROOT,c=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,n);c&&(this.isClosing()?(this.adapter.removeClass(a),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(r),this.adapter.removeClass(o))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var r=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){r.animationFrame=0,clearTimeout(r.animationTimer),r.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(bl);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Yi=function(i){Te(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(ta);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const eo=document.$blockingElements;class Ue extends Et{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return this.type==="modal"?Yi:ta}createAdapter(){return Object.assign(Object.assign({},po(this.mdcRoot)),{elementHasClass:(e,t)=>e.classList.contains(t),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event($r.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event($r.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{eo.push(this),this.appContent.inert=!0},releaseFocus:()=>{eo.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof Yi&&this.mdcFoundation.handleScrimClick()}render(){const e=this.type==="dismissible"||this.type==="modal",t=this.type==="modal",r=this.hasHeader?m`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return m`
      <aside class="mdc-drawer ${Ee({"mdc-drawer--dismissible":e,"mdc-drawer--modal":t})}">
        ${r}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${t?m`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",e=>this.mdcFoundation.handleKeydown(e)),this.mdcRoot.addEventListener("transitionend",e=>this.mdcFoundation.handleTransitionEnd(e))}updated(e){e.has("type")&&this.createFoundation()}}p([xe(".mdc-drawer")],Ue.prototype,"mdcRoot",void 0);p([xe(".mdc-drawer-app-content")],Ue.prototype,"appContent",void 0);p([va(function(i){this.type!==""&&(i?this.mdcFoundation.open():this.mdcFoundation.close())}),$({type:Boolean,reflect:!0})],Ue.prototype,"open",void 0);p([$({type:Boolean})],Ue.prototype,"hasHeader",void 0);p([$({reflect:!0})],Ue.prototype,"type",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const gl=q`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Tr=class extends Ue{};Tr.styles=[gl];Tr=p([J("mwc-drawer")],Tr);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const vl=q`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pr={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},kt={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},ra={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yl=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xl=function(i){Te(e,i);function e(t){return i.call(this,re(re({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return ra},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Pr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(yl);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yt=0,ia=function(i){Te(e,i);function e(t){var r=i.call(this,t)||this;return r.wasDocked=!0,r.isDockedShowing=!0,r.currentAppBarOffsetTop=0,r.isCurrentlyBeingResized=!1,r.resizeThrottleId=yt,r.resizeDebounceId=yt,r.lastScrollPosition=r.adapter.getViewportScrollY(),r.topAppBarHeight=r.adapter.getTopAppBarHeight(),r}return e.prototype.destroy=function(){i.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),r=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=r,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=yt,t.throttledResizeHandler()},kt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=yt},kt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,r=this.currentAppBarOffsetTop<0,o=this.currentAppBarOffsetTop>t,a=r&&o;if(a)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==o)return this.isDockedShowing=o,!0}else return this.wasDocked=!0,!0;return a},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-kt.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(xl);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const di=ya?{passive:!0}:void 0;class lt extends Et{constructor(){super(...arguments),this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){this.unregisterScrollListener();const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=m`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=m`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),m`
      <header class="mdc-top-app-bar ${Ee(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:e}
        </section>
        ${this.centerTitle?e:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${Ee(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},po(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(ra.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,di)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}p([xe(".mdc-top-app-bar")],lt.prototype,"mdcRoot",void 0);p([xe('slot[name="actionItems"]')],lt.prototype,"_actionItemsSlot",void 0);p([$({type:Boolean})],lt.prototype,"centerTitle",void 0);p([$({type:Object})],lt.prototype,"scrollTarget",null);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class pi extends lt{constructor(){super(...arguments),this.mdcFoundationClass=ia,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,di)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}p([$({type:Boolean,reflect:!0})],pi.prototype,"prominent",void 0);p([$({type:Boolean,reflect:!0})],pi.prototype,"dense",void 0);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var wl=function(i){Te(e,i);function e(){var t=i!==null&&i.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(Pr.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Pr.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(ia);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _l extends pi{constructor(){super(...arguments),this.mdcFoundationClass=wl}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,di)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Rr=class extends _l{};Rr.styles=[vl];Rr=p([J("mwc-top-app-bar-fixed")],Rr);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function kl(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cl=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Al={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Sl={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},to={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function zl(i,e,t){if(!i)return{x:0,y:0};var r=e.x,o=e.y,a=r+t.left,s=o+t.top,n,c;if(i.type==="touchstart"){var u=i;n=u.changedTouches[0].pageX-a,c=u.changedTouches[0].pageY-s}else{var l=i;n=l.pageX-a,c=l.pageY-s}return{x:n,y:c}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ro=["touchstart","pointerdown","mousedown","keydown"],io=["touchend","pointerup","mouseup","contextmenu"],xt=[],El=function(i){Te(e,i);function e(t){var r=i.call(this,re(re({},e.defaultAdapter),t))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(o){r.activateImpl(o)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Al},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Sl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return to},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var o=e.cssClasses,a=o.ROOT,s=o.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var r=e.cssClasses,o=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(o),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var r=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var r,o;if(t){try{for(var a=ge(ro),s=a.next();!s.done;s=a.next()){var n=s.value;this.adapter.registerInteractionHandler(n,this.activateHandler)}}catch(c){r={error:c}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var r,o;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=ge(io),s=a.next();!s.done;s=a.next()){var n=s.value;this.adapter.registerDocumentInteractionHandler(n,this.deactivateHandler)}}catch(c){r={error:c}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}},e.prototype.deregisterRootHandlers=function(){var t,r;try{for(var o=ge(ro),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(n){t={error:n}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var o=ge(io),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(n){t={error:n}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,r=e.strings,o=Object.keys(r);o.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(r[a],null)})},e.prototype.activateImpl=function(t){var r=this;if(!this.adapter.isSurfaceDisabled()){var o=this.activationState;if(!o.isActivated){var a=this.previousActivationEvent,s=a&&t!==void 0&&a.type!==t.type;if(!s){o.isActivated=!0,o.isProgrammatic=t===void 0,o.activationEvent=t,o.wasActivatedByPointer=o.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var n=t!==void 0&&xt.length>0&&xt.some(function(c){return r.adapter.containsEventTarget(c)});if(n){this.resetActivationState();return}t!==void 0&&(xt.push(t.target),this.registerDeactivationHandlers(t)),o.wasElementMadeActive=this.checkElementMadeActive(t),o.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){xt=[],!o.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(o.wasElementMadeActive=r.checkElementMadeActive(t),o.wasElementMadeActive&&r.animateActivation()),o.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,r=e.strings,o=r.VAR_FG_TRANSLATE_START,a=r.VAR_FG_TRANSLATE_END,s=e.cssClasses,n=s.FG_DEACTIVATION,c=s.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",d="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,y=f.endPoint;l=h.x+"px, "+h.y+"px",d=y.x+"px, "+y.y+"px"}this.adapter.updateCssVariable(o,l),this.adapter.updateCssVariable(a,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(c),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,r=t.activationEvent,o=t.wasActivatedByPointer,a;o?a=zl(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,r=e.cssClasses.FG_DEACTIVATION,o=this.activationState,a=o.hasDeactivationUXRun,s=o.isActivated,n=a||!s;n&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(r)},to.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,r=this.activationState;if(r.isActivated){var o=re({},r);r.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(o)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(o),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var r=t.wasActivatedByPointer,o=t.wasElementMadeActive;(r||o)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),o=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:o();var a=Math.floor(r*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,r=t.VAR_FG_SIZE,o=t.VAR_LEFT,a=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(o,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(Cl);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let O=class extends Et{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=El}get isActive(){return kl(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t;break}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return m`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ee(r)}"
          style="${uo({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}};p([xe(".mdc-ripple-surface")],O.prototype,"mdcRoot",void 0);p([$({type:Boolean})],O.prototype,"primary",void 0);p([$({type:Boolean})],O.prototype,"accent",void 0);p([$({type:Boolean})],O.prototype,"unbounded",void 0);p([$({type:Boolean})],O.prototype,"disabled",void 0);p([$({type:Boolean})],O.prototype,"activated",void 0);p([$({type:Boolean})],O.prototype,"selected",void 0);p([$({type:Boolean})],O.prototype,"internalUseStateLayerCustomProperties",void 0);p([N()],O.prototype,"hovering",void 0);p([N()],O.prototype,"bgFocused",void 0);p([N()],O.prototype,"fgActivation",void 0);p([N()],O.prototype,"fgDeactivation",void 0);p([N()],O.prototype,"fgScale",void 0);p([N()],O.prototype,"fgSize",void 0);p([N()],O.prototype,"translateStart",void 0);p([N()],O.prototype,"translateEnd",void 0);p([N()],O.prototype,"leftPos",void 0);p([N()],O.prototype,"topPos",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Il=q`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Mr=class extends O{};Mr.styles=[Il];Mr=p([J("mwc-ripple")],Mr);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function $l(i,e,t){const r=i.constructor;if(!t){const n=`__${e}`;if(t=r.getPropertyDescriptor(e,n),!t)throw new Error("@ariaProperty must be used after a @property decorator")}const o=t;let a="";if(!o.set)throw new Error(`@ariaProperty requires a setter for ${e}`);if(i.dispatchWizEvent)return t;const s={configurable:!0,enumerable:!0,set(n){if(a===""){const c=r.getPropertyOptions(e);a=typeof c.attribute=="string"?c.attribute:e}this.hasAttribute(a)&&this.removeAttribute(a),o.set.call(this,n)}};return o.get&&(s.get=function(){return o.get.call(this)}),s}function ui(i,e,t){if(e!==void 0)return $l(i,e,t);throw new Error("@ariaProperty only supports TypeScript Decorators")}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Tl=class{constructor(e){this.startPress=t=>{e().then(r=>{r&&r.startPress(t)})},this.endPress=()=>{e().then(t=>{t&&t.endPress()})},this.startFocus=()=>{e().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{e().then(t=>{t&&t.endFocus()})},this.startHover=()=>{e().then(t=>{t&&t.startHover()})},this.endHover=()=>{e().then(t=>{t&&t.endHover()})}}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=i=>i!=null?i:I;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ne extends ye{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new Tl(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?m`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return m`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${oa(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon?m`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}p([$({type:Boolean,reflect:!0})],ne.prototype,"disabled",void 0);p([$({type:String})],ne.prototype,"icon",void 0);p([ui,$({type:String,attribute:"aria-label"})],ne.prototype,"ariaLabel",void 0);p([ui,$({type:String,attribute:"aria-haspopup"})],ne.prototype,"ariaHasPopup",void 0);p([xe("button")],ne.prototype,"buttonElement",void 0);p([Po("mwc-ripple")],ne.prototype,"ripple",void 0);p([N()],ne.prototype,"shouldRenderRipple",void 0);p([jr({passive:!0})],ne.prototype,"handleRippleMouseDown",null);p([jr({passive:!0})],ne.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Pl=q`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Lr=class extends ne{};Lr.styles=[Pl];Lr=p([J("mwc-icon-button")],Lr);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Rl=q`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Nr=class extends ye{render(){return m`<span><slot></slot></span>`}};Nr.styles=[Rl];Nr=p([J("mwc-icon")],Nr);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ml(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ll=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nl={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ol={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},oo={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function Fl(i,e,t){if(!i)return{x:0,y:0};var r=e.x,o=e.y,a=r+t.left,s=o+t.top,n,c;if(i.type==="touchstart"){var u=i;n=u.changedTouches[0].pageX-a,c=u.changedTouches[0].pageY-s}else{var l=i;n=l.pageX-a,c=l.pageY-s}return{x:n,y:c}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ao=["touchstart","pointerdown","mousedown","keydown"],so=["touchend","pointerup","mouseup","contextmenu"],wt=[],Dl=function(i){Te(e,i);function e(t){var r=i.call(this,re(re({},e.defaultAdapter),t))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(o){r.activateImpl(o)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Nl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ol},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return oo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var o=e.cssClasses,a=o.ROOT,s=o.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var r=e.cssClasses,o=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(o),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var r=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var r,o;if(t){try{for(var a=ge(ao),s=a.next();!s.done;s=a.next()){var n=s.value;this.adapter.registerInteractionHandler(n,this.activateHandler)}}catch(c){r={error:c}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var r,o;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=ge(so),s=a.next();!s.done;s=a.next()){var n=s.value;this.adapter.registerDocumentInteractionHandler(n,this.deactivateHandler)}}catch(c){r={error:c}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}},e.prototype.deregisterRootHandlers=function(){var t,r;try{for(var o=ge(ao),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(n){t={error:n}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var o=ge(so),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(n){t={error:n}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,r=e.strings,o=Object.keys(r);o.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(r[a],null)})},e.prototype.activateImpl=function(t){var r=this;if(!this.adapter.isSurfaceDisabled()){var o=this.activationState;if(!o.isActivated){var a=this.previousActivationEvent,s=a&&t!==void 0&&a.type!==t.type;if(!s){o.isActivated=!0,o.isProgrammatic=t===void 0,o.activationEvent=t,o.wasActivatedByPointer=o.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var n=t!==void 0&&wt.length>0&&wt.some(function(c){return r.adapter.containsEventTarget(c)});if(n){this.resetActivationState();return}t!==void 0&&(wt.push(t.target),this.registerDeactivationHandlers(t)),o.wasElementMadeActive=this.checkElementMadeActive(t),o.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){wt=[],!o.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(o.wasElementMadeActive=r.checkElementMadeActive(t),o.wasElementMadeActive&&r.animateActivation()),o.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,r=e.strings,o=r.VAR_FG_TRANSLATE_START,a=r.VAR_FG_TRANSLATE_END,s=e.cssClasses,n=s.FG_DEACTIVATION,c=s.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",d="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,y=f.endPoint;l=h.x+"px, "+h.y+"px",d=y.x+"px, "+y.y+"px"}this.adapter.updateCssVariable(o,l),this.adapter.updateCssVariable(a,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(c),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,r=t.activationEvent,o=t.wasActivatedByPointer,a;o?a=Fl(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,r=e.cssClasses.FG_DEACTIVATION,o=this.activationState,a=o.hasDeactivationUXRun,s=o.isActivated,n=a||!s;n&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(r)},oo.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,r=this.activationState;if(r.isActivated){var o=re({},r);r.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(o)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(o),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var r=t.wasActivatedByPointer,o=t.wasElementMadeActive;(r||o)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),o=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:o();var a=Math.floor(r*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,r=t.VAR_FG_SIZE,o=t.VAR_LEFT,a=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(o,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(Ll);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class F extends Et{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Dl}get isActive(){return Ml(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t;break}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return m`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ee(r)}"
          style="${uo({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}p([xe(".mdc-ripple-surface")],F.prototype,"mdcRoot",void 0);p([$({type:Boolean})],F.prototype,"primary",void 0);p([$({type:Boolean})],F.prototype,"accent",void 0);p([$({type:Boolean})],F.prototype,"unbounded",void 0);p([$({type:Boolean})],F.prototype,"disabled",void 0);p([$({type:Boolean})],F.prototype,"activated",void 0);p([$({type:Boolean})],F.prototype,"selected",void 0);p([$({type:Boolean})],F.prototype,"internalUseStateLayerCustomProperties",void 0);p([N()],F.prototype,"hovering",void 0);p([N()],F.prototype,"bgFocused",void 0);p([N()],F.prototype,"fgActivation",void 0);p([N()],F.prototype,"fgDeactivation",void 0);p([N()],F.prototype,"fgScale",void 0);p([N()],F.prototype,"fgSize",void 0);p([N()],F.prototype,"translateStart",void 0);p([N()],F.prototype,"translateEnd",void 0);p([N()],F.prototype,"leftPos",void 0);p([N()],F.prototype,"topPos",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const ql=q`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Or=class extends F{};Or.styles=[ql];Or=p([J("mwc-ripple")],Or);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Bl{constructor(e){this.startPress=t=>{e().then(r=>{r&&r.startPress(t)})},this.endPress=()=>{e().then(t=>{t&&t.endPress()})},this.startFocus=()=>{e().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{e().then(t=>{t&&t.endFocus()})},this.startHover=()=>{e().then(t=>{t&&t.startHover()})},this.endHover=()=>{e().then(t=>{t&&t.endHover()})}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class B extends ye{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Bl(()=>(this.shouldRenderRipple=!0,this.ripple))}renderOverlay(){return m``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?m`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return m`
      <button
          id="button"
          class="mdc-button ${Ee(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${oa(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${Ee({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return m`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}B.shadowRootOptions={mode:"open",delegatesFocus:!0};p([ui,$({type:String,attribute:"aria-haspopup"})],B.prototype,"ariaHasPopup",void 0);p([$({type:Boolean,reflect:!0})],B.prototype,"raised",void 0);p([$({type:Boolean,reflect:!0})],B.prototype,"unelevated",void 0);p([$({type:Boolean,reflect:!0})],B.prototype,"outlined",void 0);p([$({type:Boolean})],B.prototype,"dense",void 0);p([$({type:Boolean,reflect:!0})],B.prototype,"disabled",void 0);p([$({type:Boolean,attribute:"trailingicon"})],B.prototype,"trailingIcon",void 0);p([$({type:Boolean,reflect:!0})],B.prototype,"fullwidth",void 0);p([$({type:String})],B.prototype,"icon",void 0);p([$({type:String})],B.prototype,"label",void 0);p([$({type:Boolean})],B.prototype,"expandContent",void 0);p([xe("#button")],B.prototype,"buttonElement",void 0);p([Po("mwc-ripple")],B.prototype,"ripple",void 0);p([N()],B.prototype,"shouldRenderRipple",void 0);p([jr({passive:!0})],B.prototype,"handleRippleActivate",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Hl=q`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Fr=class extends B{};Fr.styles=[Hl];Fr=p([J("mwc-button")],Fr);class Ul extends ye{static get styles(){return q`
      div.t-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-right: 3px;
        background-color: rgba(78, 162, 240, 0.69);
        font-family : Montserrat;
        border-radius : 11px;
        -moz-border-radius : 11px;
        -webkit-border-radius : 11px;
        border-style:outset;
        border-color:rgb214, 233, 248);
        border-width: 0px 3px 3px 0px;
        font-size: 12px;
      }
      div.t-item.active {
        background-color:  rgba(49, 130, 189, 1);
        font-family : Myriad Pro;
        border-radius : 11px;
        -moz-border-radius : 11px;
        -webkit-border-radius : 11px;
        border-style:outset;
        border-color:rgb(3, 169, 244);
        border-width: 0px 3px 3px 0px;
      }
      mwc-button {
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-size: 12px;
        --mdc-theme-primary: #ffffff;
      }
      mwc-icon-button {
        color: aliceblue;
        --mdc-icon-button-size: 16px;
        --mdc-icon-size: 15px;
        --mdc-button-horizontal-padding: 3px;
        --mdc-button-horizontal-padding: 0px;
      }
    `}render(){return m`
      <div class="t-item ${this.activeTab?"active":null}">
        <mwc-button .label="${this.lang=="en"?this.tab.tabLabel_en:this.tab.tabLabel_es}" @click=${()=>this.dispatchEvent(new CustomEvent("tab-change",{detail:this.tab}))}></mwc-button>
        <mwc-icon-button @click=${()=>this.dispatchEvent(new CustomEvent("tab-remove",{detail:this.tab}))} icon="close"></mwc-icon-button>
      </div>
    `}static get properties(){return{lang:{type:String},tab:{type:Object},activeTab:{type:Boolean}}}constructor(){super(),this.tab={},this.activeTab=!1}firstUpdated(){this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("tab-rendered"))})}}customElements.define("tab-item",Ul);let no=[{lp_frontend_page_name:"Programs",route:"procedures?procName=em-demo-a&viewName=Programs&filterName=Programs",tabLabel_en:"Air (em-demo-a)-Programs",tabLabel_es:"Aire (em-demo-a)-Programas"},{lp_frontend_page_name:"Deviation",route:"procedures?procName=em-demo-a&viewName=Deviation&filterName=Deviation",tabLabel_en:"Air (em-demo-a)-Deviation",tabLabel_es:"Aire (em-demo-a)-Desviación"},{lp_frontend_page_name:"LogSamples",route:"procedures?procName=em-demo-a&viewName=LogSamples&filterName=SampleLogin",tabLabel_en:"Air (em-demo-a)-Login New Samples",tabLabel_es:"Aire (em-demo-a)-Registrar Nuevas Muestras"},{lp_frontend_page_name:"ProductionLots",route:"procedures?procName=em-demo-a&viewName=ProductionLots&filterName=SampleLot",tabLabel_en:"Air (em-demo-a)-Production Lots",tabLabel_es:"Aire (em-demo-a)-Lotes en producción"},{lp_frontend_page_name:"SamplePendingSampling",route:"procedures?procName=em-demo-a&viewName=SamplePendingSampling&filterName=SamplingSMP",tabLabel_en:"Air (em-demo-a)-Samples Sampling",tabLabel_es:"Aire (em-demo-a)-Muestreo de Muestras"},{lp_frontend_page_name:"SamplePendingSampling",route:"procedures?procName=em-demo-a&viewName=SamplePendingSampling&filterName=SamplingPERS",tabLabel_en:"Air (em-demo-a)-Sampling",tabLabel_es:"Aire (em-demo-a)-Muestreo"},{lp_frontend_page_name:"SamplePendingSamplingInterval",route:"procedures?procName=em-demo-a&viewName=SamplePendingSamplingInterval&filterName=SamplingSMP",tabLabel_en:"Air (em-demo-a)-Samples Sampling",tabLabel_es:"Aire (em-demo-a)-Muestreo de Muestras"},{lp_frontend_page_name:"SamplePendingSamplingInterval",route:"procedures?procName=em-demo-a&viewName=SamplePendingSamplingInterval&filterName=SamplingPERS",tabLabel_en:"Air (em-demo-a)-Sampling",tabLabel_es:"Aire (em-demo-a)-Muestreo"},{lp_frontend_page_name:"SamplePlateReading",route:"procedures?procName=em-demo-a&viewName=SamplePlateReading&filterName=PlateReadingSMP",tabLabel_en:"Air (em-demo-a)-Samples Plate Reading",tabLabel_es:"Aire (em-demo-a)-Lectura de Placas"},{lp_frontend_page_name:"SamplePlateReading",route:"procedures?procName=em-demo-a&viewName=SamplePlateReading&filterName=PlateReadingPERS",tabLabel_en:"Air (em-demo-a)-Plate Reading",tabLabel_es:"Aire (em-demo-a)-Lectura de Placas"},{lp_frontend_page_name:"SampleIncubation",route:"procedures?procName=em-demo-a&viewName=SampleIncubation&filterName=active_batches",tabLabel_en:"Air (em-demo-a)-Samples Incubation",tabLabel_es:"Aire (em-demo-a)-Incubation"},{lp_frontend_page_name:"SampleMicroorganism",route:"procedures?procName=em-demo-a&viewName=SampleMicroorganism&filterName=MicroOrganismSMP",tabLabel_en:"Air (em-demo-a)-Microorganism Identification",tabLabel_es:"Aire (em-demo-a)-Identificación de microorganismos"},{lp_frontend_page_name:"SampleMicroorganism",route:"procedures?procName=em-demo-a&viewName=SampleMicroorganism&filterName=MicroOrganismPERS",tabLabel_en:"Air (em-demo-a)-Microorganism Identification",tabLabel_es:"Aire (em-demo-a)-Identificación de microorganismos"},{lp_frontend_page_name:"Programs",route:"procedures?procName=proc-deploy&viewName=Programs&filterName=Programs",tabLabel_en:"Water (proc-deploy)-Programs",tabLabel_es:"Agua (proc-Deploy)-Programas"},{lp_frontend_page_name:"Deviation",route:"procedures?procName=proc-deploy&viewName=Deviation&filterName=Deviation",tabLabel_en:"Water (proc-deploy)-Deviation",tabLabel_es:"Agua (proc-Deploy)-Desviación"},{lp_frontend_page_name:"LogSamples",route:"procedures?procName=proc-deploy&viewName=LogSamples&filterName=SampleLogin",tabLabel_en:"Water (proc-deploy)-Login New Samples",tabLabel_es:"Agua (proc-Deploy)-Registrar Nuevas Muestras"},{lp_frontend_page_name:"ProductionLots",route:"procedures?procName=proc-deploy&viewName=ProductionLots&filterName=SampleLot",tabLabel_en:"Water (proc-deploy)-Production Lots",tabLabel_es:"Agua (proc-Deploy)-Lotes en producción"},{lp_frontend_page_name:"SamplePending",route:"procedures?procName=proc-deploy&viewName=SamplePending&filterName=sampling",tabLabel_en:"Water (proc-deploy)-Sampling",tabLabel_es:"Agua (proc-Deploy)-Muestreo"},{lp_frontend_page_name:"SampleEnterResult",route:"procedures?procName=proc-deploy&viewName=SampleEnterResult&filterName=ER-FQ",tabLabel_en:"Water (proc-deploy)-Sample Chem",tabLabel_es:"Agua (proc-Deploy)-Muestras FQ"},{lp_frontend_page_name:"SampleEnterResult",route:"procedures?procName=proc-deploy&viewName=SampleEnterResult&filterName=ER-MB",tabLabel_en:"Water (proc-deploy)-Sample MB",tabLabel_es:"Agua (proc-Deploy)-Muestras Micro"},{lp_frontend_page_name:"ReviewTesting",route:"procedures?procName=proc-deploy&viewName=ReviewTesting&filterName=RT-FQ",tabLabel_en:"Water (proc-deploy)-FQ Review Testing",tabLabel_es:"Agua (proc-Deploy)-Ensayos revisión FQ"},{lp_frontend_page_name:"ReviewTesting",route:"procedures?procName=proc-deploy&viewName=ReviewTesting&filterName=RT-MB",tabLabel_en:"Water (proc-deploy)-MB Review Testing",tabLabel_es:"Agua (proc-Deploy)-Ensayos revisión MB"},{lp_frontend_page_name:"ReviewTestingGroup",route:"procedures?procName=proc-deploy&viewName=ReviewTestingGroup&filterName=RTG-FQ",tabLabel_en:"Water (proc-deploy)-FQ Review Testing Group",tabLabel_es:"Agua (proc-Deploy)-Grupo Analítico revisión FQ"},{lp_frontend_page_name:"ReviewTestingGroup",route:"procedures?procName=proc-deploy&viewName=ReviewTestingGroup&filterName=RTG-MB",tabLabel_en:"Water (proc-deploy)-MB Review Testing Group",tabLabel_es:"Agua (proc-Deploy)-Grupo Ensayos revisión MB"},{lp_frontend_page_name:"ReviewSample",route:"procedures?procName=proc-deploy&viewName=ReviewSample&filterName=Review",tabLabel_en:"Water (proc-deploy)-Review Samples",tabLabel_es:"Agua (proc-Deploy)-Revisar Muestras"},{lp_frontend_page_name:"PlatformInstruments",route:"procedures?procName=app-proc&viewName=PlatformInstruments&filterName=Review",tabLabel_en:"Active Instruments",tabLabel_es:"Instrumentos activos"},{lp_frontend_page_name:"EventsInProgress",route:"procedures?procName=app-proc&viewName=EventsInProgress&filterName=Review",tabLabel_en:"Events in progress",tabLabel_es:"Eventos en curso"},{lp_frontend_page_name:"ProjectManager",route:"procedures?procName=genoma-1&viewName=ProjectManager",tabLabel_en:"(genoma-1)-Clinical Studies",tabLabel_es:"(genoma-1)-Estudios Clínicos"},{lp_frontend_page_name:"incident-management",route:"incidents",tabName:"incident-management",tabLabel_en:"Incidents",tabLabel_es:"Incidencias",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!1},{lp_frontend_page_name:"my-sops",route:"certifications?filterData=sop",tabName:"sop-allMySops",tabLabel_en:"All My SOPs",tabLabel_es:"Mis PNTs",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!1},{lp_frontend_page_name:"my-analysis",route:"certifications?filterData=analytic",tabName:"cert-allMyAnalysis",tabLabel_en:"All My Analysis",tabLabel_es:"Mis PNTs",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!1},{lp_frontend_page_name:"my-pending-certification-approvals",route:"certifications?filterData=myPendingCertificationApprovals",tabName:"cert-MyPendingApprovals",tabLabel_en:"My Pending Approvals",tabLabel_es:"Mis aprobaciones pendientes",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!1},{lp_frontend_page_name:"session-notifications",route:"notifications",tabName:"session-notifications",tabLabel_en:"Notifications",tabLabel_es:"Notificaciones",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!1},{lp_frontend_page_name:"user-profile",route:"user",tabName:"user-profile",tabLabel_en:"User Profile",tabLabel_es:"Perfil de usuario",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!0},{lp_frontend_page_name:"platform-usersesssions",route:"platformusersessions",tabName:"platform-usersesssions",tabLabel_en:"User Sessions",tabLabel_es:"Sesiones de usuario",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!0},{lp_frontend_page_name:"videotutorial-tab",route:"tutorial",tabName:"videotutorial-tab",tabLabel_en:"Video Tutorial",tabLabel_es:"Tutorial en Video",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!0},{lp_frontend_page_name:"endpoints-tab",route:"endpoints",tabName:"endpoints-tab",tabLabel_en:"Endpoints List",tabLabel_es:"Lista de punto API",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!0},{lp_frontend_page_name:"holidayscalendar-tab",route:"holidayscalendar",tabName:"endpoints-tab",tabLabel_en:"Holidays Calendars",tabLabel_es:"Calendarios Vacaciones",tabType:"systab",systemTab:!0,tabEsignRequired:!1,tabConfirmUserRequired:!0}];class jl extends mo(ye){static get styles(){return q`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      .tabWrap {
        display: flex;
        flex-direction: row;
        align-items: flex-start; /* o center, dependiendo del diseño que desees */
      }
      .tabContainer {
        overflow: auto;
        position: relative;
        top: 0px;
        display: flex;
        flex-direction: row;
        align-items: center; /* o center, dependiendo del diseño que desees */
      }
      .tabContainer::-webkit-scrollbar {
        display: none;
      }
      .tabContainer > * {
        display: inline-block;
        flex-shrink: 0;
      }
      mwc-button {
        --mdc-typography-button-text-transform: none;
      }
      mwc-icon-button {
        color: rgba(36, 192, 235, 1);
      }
      mwc-icon-button[hidden] {
        display: none;
      }
      @media (max-width: 460px) {
        .tabContainer {
          width: 75vw;
        }
      }
    `}render(){return m`
      <div class="tabWrap">
        <md-icon-button icon="navigate_before" @click=${this.prevTab} ?hidden=${!this.prev}></md-icon-button>
        <div class="tabContainer">
           <md-icon-button icon="save" @click=${this.saveTabs}></md-icon-button>
          ${this.tabs.map(e=>m`<tab-item .lang=${this.lang} .tab=${e} 
              @tab-rendered=${this.isScroll}
              @tab-change=${this.tabChanged}
              @tab-remove=${this.tabRemoved}></tab-item>`)}
        </div>
        <md-icon-button icon="navigate_next" @click=${this.nextTab} ?hidden=${!this.next}></md-icon-button>
      </div>
    `}get tabContainer(){return this.shadowRoot.querySelector(".tabContainer")}get tabElems(){return this.shadowRoot.querySelectorAll("tab-item")}prevTab(){this.tabContainer.scrollLeft=this.tabContainer.scrollLeft-200}nextTab(){this.tabContainer.scrollLeft=this.tabContainer.scrollLeft+200}isScroll(){this.tabContainer.offsetWidth<this.tabContainer.scrollWidth?this.next=!0:this.next=!1,this.tabElems.forEach(e=>{e.tab.route==this.currentTab?e.activeTab=!0:e.activeTab=!1})}firstUpdated(){super.firstUpdated();const e=window.matchMedia("(max-width: 460px)");this.mobile=e.matches,e.addEventListener("change",t=>this.mobile=t.matches)}xxxfirstUpdated(){super.firstUpdated(),installMediaQueryWatcher("(max-width: 460px)",e=>{this.mobile=e}),this.tabContainer.addEventListener("scroll",()=>{this.tabContainer.scrollLeft==0?this.prev=!1:this.prev=!0,this.tabContainer.offsetWidth+this.tabContainer.scrollLeft==this.tabContainer.scrollWidth?(this.next=!1,this.mobile&&(this.tabContainer.style.width="75vw")):(this.next=!0,this.mobile&&(this.tabContainer.scrollLeft==0?this.tabContainer.style.width="75vw":this.tabContainer.style.width="61vw"))})}tabChanged(e){this.currentTab=e.detail.route,this.navigate("/dashboard/"+e.detail.route),this.tabElems.forEach(t=>{t.tab.route==this.currentTab?t.activeTab=!0:t.activeTab=!1})}async tabRemoved(e){let t=this.tabs.findIndex(r=>r.route==this.currentTab);this.tabs=this.tabs.filter(r=>r.route!=e.detail.route),await this.requestUpdate(),e.detail.route!=this.currentTab?console.log("not current router"):(t>=this.tabs.length&&--t,t>-1?(this.navigate("/dashboard/"+this.tabs[t].route),this.currentTab=this.tabs[t].route):(this.navigate("/dashboard"),this.currentTab=""),this.tabElems.forEach(r=>{r.tab.route==this.currentTab?r.activeTab=!0:r.activeTab=!1}))}static get properties(){return{tabs:{type:Array},currentTab:{type:String},config:{type:Object},params:{type:Object},query:{type:Object},lang:{type:String},prev:{type:Boolean},next:{type:Boolean},mobile:{type:Boolean}}}constructor(){super(),this.prev=!1,this.next=!1,this.params={},this.query={},this.tabs=[],this.currentTab="",this.config={},this.mobile=!1}updated(e){e.has("config")&&this.setTabs(),e.has("params")&&this.pushTab()}pushTab(){let e=[];if(this.params.menu=="procedures")if(this.config.local)e=no.filter(t=>t.route==this.params.menu+"?procName="+this.query.procName+"&viewName="+this.query.viewName+"&filterName="+this.query.filterName);else{let r=JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures.filter(o=>o.procInstanceName==this.query.procName);if(r.length){let o=r[0].new_definition.filter(a=>a.lp_frontend_page_name==this.query.viewName);if(o.length){let a=!1,s="",n="";o[0].icons?(a=o[0].icons.filter(c=>c.name==this.query.filterName),a.length&&(s=a[0].label_en,n=a[0].label_es,a=!0)):(s=o[0].label_en,n=o[0].label_es,this.query.filterName===void 0||this.query.filterName==="undefined"||this.query.filterName===""?a=o[0].name==this.query.viewName||o[0].lp_frontend_page_name==this.query.viewName:a=(o[0].name==this.query.viewName||o[0].lp_frontend_page_name==this.query.viewName)&&o[0].lp_frontend_page_filter==this.query.filterName),a&&(sessionStorage.setItem("viewFilterForQuery",void 0),e=[{lp_frontend_page_name:this.query.viewName,route:"procedures?procName="+this.query.procName+"&viewName="+this.query.viewName+"&filterName="+this.query.filterName,tabLabel_en:r[0].label_en+"-"+s,tabLabel_es:r[0].label_es+"-"+n,procInstanceName:this.query.procName,viewName:this.query.viewName,filterName:this.query.filterName}],sessionStorage.setItem("currentOpenView",JSON.stringify(e[0])))}}else alert("Procedure "+this.query.procName+" not found")}else e=no.filter(t=>t.route==this.params.menu||t.route==this.params.menu+"?filterData="+this.query.filterData||t.route==this.params.menu+"?procName="+this.query.procName+"&viewName="+this.query.viewName+"&filterName="+this.query.filterName);e.length&&(this.tabs.filter(r=>r.route==e[0].route).length||(this.tabs=[...this.tabs,e[0]]),this.currentTab=e[0].route,this.requestUpdate())}setTabs(){let e=JSON.parse(sessionStorage.getItem("userSession")).userTabsOnLogin;e.length&&e[0].tabLabel_en&&(e.forEach(t=>{t.lp_frontend_page_name=="user-profile"?t.route="user":t.lp_frontend_page_name=="incident-management"?t.route="incidents":t.lp_frontend_page_name=="videotutorial-tab"?t.route="tutorial":t.lp_frontend_page_name=="session-notifications"?t.route="notifications":t.lp_frontend_page_name=="my-sops"?t.route="certifications?filterData=sop":t.lp_frontend_page_name=="my-analysis"?t.route="certifications?filterData=analytic":t.lp_frontend_page_name=="my-pending-certification-approvals"&&(t.route="certifications?filterData=myPendingCertificationApprovals")}),this.tabs=e,this.navigate("/dashboard/"+this.tabs[this.tabs.length-1].route),this.currentTab=this.tabs[this.tabs.length-1].route)}saveTabs(){let e=this.tabs.map(t=>{let r=[];for(const[o,a]of Object.entries(t))r.push(`${o}:${a}`);return r.join("*")});e=e.join("|"),this.fetchApi(this.config.backendUrl+this.config.appAuthenticateApiUrl+"?"+new URLSearchParams({finalToken:JSON.parse(sessionStorage.getItem("userSession")).finalToken,actionName:"SET_DEFAULT_TABS_ON_LOGIN",tabsString:e,isForTesting:this.config.isForTesting}))}fetchApi(e){return this.dispatchEvent(new CustomEvent("set-activity",{bubbles:!0,composed:!0})),fetch(e).then(async t=>{if(t.status==200)return t.json();throw await t.json()}).then(t=>(this.dispatchEvent(new CustomEvent("success",{detail:Me({},t),bubbles:!0,composed:!0})),t)).catch(t=>{this.dispatchEvent(new CustomEvent("error",{detail:Me({},t),bubbles:!0,composed:!0}))})}}customElements.define("tab-state",jl);const er={headerAreas:{proceduresOption:{display:!0,tabLabel_en:"Procedures",tabLabel_es:"Procesos"},notifications:{display:!0,tabLabel_en:"Notifications",tabLabel_es:"Notificaciones"},myCertifications:{tabLabel_en:"My Certifications",tabLabel_es:"Mis Certificaciones",display:!0,sop:{label_en:"SOP",label_es:"SOP"},analytic:{label_en:"Analytical Method",label_es:"Método analítico"},reviewerPendingSign:{label_en:"My Pending Approvals",label_es:"Mis aprobaciones pendientes"}},mySettings:{display:!0,tabLabel_en:"My Settings",tabLabel_es:"Mi Espacio",incidents:{display:!0,label_en:"Incidents",label_es:"Incidencias"},user:{display:!0,label_en:"User",label_es:"Usuario"},platformusersessions:{display:!0,label_en:"User Platform Sessions",label_es:"Sesiones de Plataforma de Usuario"},video:{display:!0,label_en:"Video Tutorial",label_es:"Tutorial en Video"},endpoint:{display:!0,label_en:"Endpoints List",label_es:"Lista de punto API"},holidaysCalendar:{display:!0,label_en:"Holidays Calendar",label_es:"Calendarios de Vacaciones"}},doLogout:{label_en:"Close Session",label_es:"Cerrar Sesión"}}},Vl=q`
  md-filled-icon-button {
    --md-filled-icon-button-container-color: transparent;
    --md-filled-icon-button-icon-color: #148cfa;
    --md-filled-icon-button-focus-icon-color: #148cfa;
    --md-filled-icon-button-outline-color: transparent;
    --md-filled-icon-button-hover-outline-color: transparent;
    transition: background-color 0.3s ease, transform 0.1s ease; 
  }

  md-filled-icon-button::part(container) {
    background-color: transparent; /* Fondo transparente en estado normal */
  }

  md-filled-icon-button:hover::part(container) {
    background-color: rgba(20, 140, 250, 0.1); /* Fondo suave al hacer hover */
  }

  md-filled-icon-button:active::part(container) {
    background-color: rgba(20, 140, 250, 0.2); /* Fondo más oscuro al hacer clic */
    transform: scale(0.95); /* Efecto de pulsar */
  }

  md-filled-icon-button:hover md-icon,
  md-filled-icon-button:active md-icon {
    color: #c314fa; /* Mantener el color del icono constante */
  }
`;class Gl extends xa(wa)(mo(Xa)){static get styles(){return[q`
      ${Vl}

      :host {
        display: block;
          --md-icon-button-icon-size: 32px;
  --md-sys-color-on-surface-variant: #dc362e;
  background-color: #fff8f6;
      }
      div#headerContent{
        padding: 3px;
        z-index: 1;
        position: relative;
      }
      div#procmgr { 
        /* background-image: url(/images/background_proc_management.jpg); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        width: 100%;        
      }
      div[hidden] {
        display: none;
      }
      mwc-drawer {
        height: 80px;
        --mdc-drawer-width: 70%; 
        position: sticky;
        top: 0;
        z-index: 10;       
      }
      mwc-drawer.isfortesting.false {
        height: 80px;
        --mdc-drawer-width: 70%;
      }
      mwc-drawer.isfortesting.true {
        height: 80px;
        --mdc-drawer-width: 70%;        
      }
     .isfortesting.false {
          background : -moz-linear-gradient(46.71% -341.1% -76deg,rgba(214, 233, 248, 1) 43.85%,rgba(255, 255, 255, 1) 58.66%);
          background : -webkit-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          background : -webkit-gradient(linear,46.71% -341.1% ,53.29% 441.1% ,color-stop(0.4385,rgba(214, 233, 248, 1) ),color-stop(0.5866,rgba(255, 255, 255, 1) ));
          background : -o-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          background : -ms-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8', endColorstr='#FFFFFF' ,GradientType=0)";
          background : linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          border-radius : 12px;
          position: sticky;
          -moz-border-radius : 12px;
          -webkit-border-radius : 12px;
          box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
          --background-gradient:linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2.77, Off=2.77, Color='#144E75') progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8',endColorstr='#FFFFFF' , GradientType=1);        
          
      }
      .isfortesting.true {
        background : -moz-linear-gradient(46.71% -341.1% -76deg,rgba(224 214 248, 1) 43.85%,rgba(255, 255, 255, 1) 58.66%);
        background : -webkit-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        background : -webkit-gradient(linear,46.71% -341.1% ,53.29% 441.1% ,color-stop(0.4385,rgba(214, 233, 248, 1) ),color-stop(0.5866,rgba(255, 255, 255, 1) ));
        background : -o-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        background : -ms-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8', endColorstr='#FFFFFF' ,GradientType=0)";
        background : linear-gradient(166deg, rgba(224 214 248 / 81%) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        border-radius : 12px;
        -moz-border-radius : 12px;
        -webkit-border-radius : 12px;
        box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
        --background-gradient: linear-gradient(166deg, rgba(98, 0, 238, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2.77, Off=2.77, Color='#144E75') progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8',endColorstr='#FFFFFF' , GradientType=1);        
      }      
      mwc-top-app-bar-fixed {
        --mdc-theme-primary: var(--background-gradient);
        --mdc-theme-on-primary: #57cbee;
      }
    .container {
      height: 100vh;
    }
    .flex-row {
      display: flex;
      flex-direction: row;
    }
    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: Myriad Pro;
      font-style: normal;
    }
      .header img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      md-outlined-icon-button[hidden] {
        display: none;
      }
      nav[hidden] {
        display: none;
      }
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
      nav a {
        text-decoration: none;
        background-color: #2ec3ec;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin-right: 20px;
        cursor: pointer;
      }
      sp-action-menu {
        margin-right: 5px;
      }
      sp-action-menu * {
        font-family : Myriad Pro;
        font-size : 18px;
        color : #24C0EB;
        color : rgb(36, 192, 235);   
      }
      #sessionLabel {
        font-family : Myriad Pro;
        font-size : 14px;
        line-height : 21px;
        color : #24C0EB;
        color : rgb(36, 192, 235);        
      }
      .sublist[hidden] {
        display: none;
      }
      md-list-item {
        font-size: 12px;   
        width: 90%;     
      }
      .subproc {
        margin-left: 15px;
        display: flex;
        align-items: center;
      }
      @media (max-width: 960px) {
        mwc-drawer {
          padding-top: 0;
          height: 50px;
        }
        .header img {
          width: 50px;
          height: 50px;
          margin-right: 0;
          margin-left: -10px;
        }
        #sessionLabel {
          line-height:normal;
          font-size:10px;
        }
        main {
          padding: 0 10px 10px;
          margin-top:-15px;
        }
        #tabHandle {
          position: absolute;
          top: 0px; 
          transform-origin: right bottom;
          transform: rotate(-180deg);
          cursor: pointer;
          
          /* left:-40px; */
          right: 60px;
        }
        #tabHandle md-icon {
          --mdc-icon-size: 50px;
          color: rgb(82, 193, 245);
        }
        #tabHandle div {
          border-radius: 10%;
          text-align: center;
          font-size: 10px;
          font-weight: bold;
          font-family: arial;
          background: #03a9f4;
          color: white;
          padding: 5px;
          margin-top: -18px;  
                
        }
        hr{
          height:100vh;
          width:.5vh;
          border-width:0;
          color:#000;
          background-color:#000;
        }   
        sp-menu-item.notif_item_divfalse{
          display:flex;
          align-items:center;          
          color: red; /* #0085ff; */
        }
        sp-menu-item.notif_item_divtrue{
          display:flex;
          align-items:center;          
          color: blue; /* #a33; */
        }       
      }
      div#headerout {
        position: absolute;
        z-index:9999;
        right: 10px;
      }
    `]}notifsPipeChanged(e){this.notifs=this.notifs.reverse();let t=10;if(this.notifs.length>0){let r=0;for(r=0;r<t;r++)r<=this.notifs.length-1&&(this.lastNotifs[r]=this.notifs[r]);if(this.notifs.length>t){let o={};o.message_en="... (Click to open view)",o.message_es="... (Pulsa para abrir ventana)",this.lastNotifs[9]=o}}}async loadConfig(){try{const e=await fetch("/config.json");this.config=await e.json()}catch(e){console.error("Error loading config:",e)}}firstUpdated(){this.loadConfig(),console.log("PlatformModel",this.PlatformModel),super.firstUpdated(),this.startSession=new Date().getTime(),this.drawer.parentNode.addEventListener("MDCTopAppBar:nav",()=>{this.drawer.open=!this.drawer.open});const t=window.matchMedia("(min-width: 960px)");if(this.desktop=t.matches,t.addEventListener("change",o=>this.desktop=o.matches),!sessionStorage.getItem("partialToken")||!sessionStorage.getItem("userSession"))return this.navigate("/");if(this.tabBar!=null&&this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("completed")),this.tabBar.updateComplete.then(()=>{this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.paddingLeft="5px",this.isForTesting?this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.background="linear-gradient(166deg, rgba(98, 0, 238, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);":this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.background="linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);"})}),this.tabBar===null)return;let r=JSON.parse(sessionStorage.getItem("userSession"));this.sops=[],r!==void 0&&r.all_my_sops,this.analytics=[],r!==void 0&&r.all_my_analysis_methods,r.all_my_pending_certif_approvals!==void 0&&r.all_my_pending_certif_approvals.num_objects>0&&(this.myPendingCertifApprovals=r.all_my_pending_certif_approvals.num_objects>0?r.all_my_pending_certif_approvals.objects:this.myPendingCertifApprovals)}userSession(){let e=JSON.parse(sessionStorage.getItem("userSession"));if(e)return m`
        <label id="sessionLabel" style="font-size:1vw;">
          ${e.header_info.first_name} ${e.header_info.last_name} (${e.userRole})<br>
          ${this.lang=="en"?"Session":"Sesión"} Id: ${e.appSessionId} (${this.config.dbName}${this.config.isForTesting===!0?" - Testing":""})<br>
          ${this.desktop?this.lang=="en"?"Date: ":"Fecha: ":null}${e.appSessionStartDate}
        </label>
      `}render(){return m`

      ${this.userRole.includes("trazit_pm")||this.userRole==="proc_management"?m`
        ${this.proceduresManagementPlatform()}        
      `:m`
        ${this.proceduresOperationPlatform()}
      `}
     
      
    `}setStyle(){console.log("setStyle");let e=this.shadowRoot.querySelectorAll("mwc-top-app-bar-fixed");e!=null&&e.length>0&&e.forEach((t,r)=>{console.log(r,t)}),console.log("chartObj",e)}certsUpdated(){let e=JSON.parse(sessionStorage.getItem("userSession"));this.sops=e.all_my_sops.length?e.all_my_sops[0].my_sops:this.sops,this.analytics=e.all_my_analysis_methods.length?e.all_my_analysis_methods[0].my_analysis_method_certifications:this.analytics,this.requestUpdate(),this.updateProceduresMenu()}tabState(){return m`
      <tab-state
        .lang=${this.lang} 
        .config=${this.config} 
        .params=${this.params} 
        .query=${this.query}
        .selectedProc=${this.selectedProc}></tab-state>
    `}tabMobileState(){return m`
      <tab-state
        ?hidden=${!this.showTab} 
        .lang=${this.lang} 
        .config=${this.config} 
        .params=${this.params} 
        .query=${this.query}
        .selectedProc=${this.selectedProc}></tab-state>
    `}get tabBar(){return this.shadowRoot.querySelector("mwc-top-app-bar-fixed")}get subMenu(){return this.shadowRoot.querySelectorAll("sp-action-menu.subMenu")}get actMenu(){return this.shadowRoot.querySelectorAll("sp-action-menu.topMenu")}get drawer(){return this.shadowRoot.querySelector("mwc-drawer")}get myCerts(){return this.shadowRoot.querySelector("my-certifications")}get tabs(){return this.shadowRoot.querySelector("tab-state")}get relogin(){this.shadowRoot.querySelector("relogin-dialog")}static get properties(){return{params:{type:Object},query:{type:Object},desktop:{type:Boolean},drawerState:{type:Boolean},config:{type:Object},lang:{type:String},flag:{type:String},sops:{type:Array},analytics:{type:Array},notifs:{type:Array},lastNotifs:{type:Array},notifsCollapse:{type:Boolean},procCollapse:{type:Boolean},airCollapse:{type:Boolean},waterCollapse:{type:Boolean},certCollapse:{type:Boolean},personalCollapse:{type:Boolean},showTab:{type:Boolean},PlatformModel:{type:Object},userRole:{type:String}}}constructor(){super(),this.params={},this.query={},this.drawerState=!1,this.config={},this.lang="en",this.sops=[],this.analytics=[],this.myPendingCertifApprovals=[],this.notifs=[],this.lastNotifs=[],this.showTab=!1,this.PlatformModel={},this.PlatformModel=er}allPending(){let e=this.sops.filter(r=>r.status=="NOT_PASS"),t=this.analytics.filter(r=>r.status=="NOT_PASS");return e.length+t.length>0?m`<span style="color: red">${e.length+t.length}</span>`:null}pendingSOP(){let e=this.sops.filter(t=>t.status=="NOT_PASS");return e.length?m`<span style="color: #d73535cc;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=psop")}>${e.length}</span>`:null}pendingAnalytic(){let e=this.analytics.filter(t=>t.status=="NOT_PASS");return e.length?m`<span style="color: #d73535cc;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=panalytic")}>${e.length}</span>`:null}myPendingCertificationApprovals(){let e=this.analytics.filter(t=>t.status=="NOT_PASS");return e.length?m`<span style="color: #d73535cc;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=myPendingCertificationApprovals")}>${e.length}</span>`:null}setNotif(e){e.detail.message_en!=="."&&e.detail.log&&(delete e.detail.log,delete e.detail.finalToken,this.notifs=[...this.notifs,e.detail],sessionStorage.setItem("notifs",JSON.stringify(this.notifs)),this.requestUpdate(),this.notifsPipeChanged())}updated(e){e.has("params")&&this._paramsChanged(),e.has("lang")&&this.changeFlag()}changeLang(){this.flag=="en"?(this.lang="en",this.flag="es"):(this.lang="es",this.flag="en")}changeFlag(){this.lang=="en"?this.flag="es":this.flag="en"}get trProc(){return this.shadowRoot.querySelector("tr-procedures")}_paramsChanged(){switch(this.requestUpdate(),this.params.menu){case"procedures":this.trProc.ready=!1,this.trProc.procName=this.query.procName,this.trProc.viewName=this.query.viewName,this.trProc.filterName=this.query.filterName,this.trProc.resetView(),this.trProc.authorized(),this.trProc.render(),this.drawerState=!1;break;case"notifications":break;case"certifications":break;case"incidents":break;case"user":break;case"tutorial":break;case"endpoints":break;case"holidayscalendar":break;case"platformusersessions":break;default:lo(()=>import("./tr-default-Dss8_bYx.js"),__vite__mapDeps([0,1]))}this.drawerState=!1}menuHoverShowLastNotif(){let e=[{id:1},{id:2}];e===void 0||e.length==0||this.shadowRoot.querySelectorAll("sp-action-menu").forEach(t=>{t.id=="notif-menu"?(t.open=!0,setTimeout(()=>{document.querySelectorAll("sp-popover").forEach(o=>{o.style.setProperty("--spectrum-popover-background-color","rgb(3, 169, 244)"),o.style.setProperty("background-color","white"),o.style.setProperty("max-width","calc(103% - var(--spectrum-overlay-animation-distance"),o.style.borderBottom="1px solid black",o.style.boxShadow="1px 1px #888";let a=o.querySelector("sp-menu");a.style.overflowX="hidden",a.style.margin="0",o.querySelectorAll("sp-menu-item").forEach((n,c)=>{n.style.borderBottom="1px solid black",n.style.boxShadow="1px 1px #888"})})})):t.open=!1})}menuHover(e){this.shadowRoot.querySelectorAll("sp-action-menu").forEach(t=>{t.id==e?(t.open=!0,setTimeout(()=>{document.querySelectorAll("sp-popover").forEach(o=>{o.style.setProperty("--spectrum-popover-background-color","rgb(227, 240, 250)"),o.style.borderBottom="1px solid black",o.style.boxShadow="1px 1px #888";let a=o.querySelector("sp-menu");a.style.margin="0",o.querySelectorAll("sp-menu-item").forEach((n,c)=>{n.style.setProperty("--spectrum-popover-background-color","rgb(36, 192, 235)"),n.style.borderBottom="1px solid black",n.style.boxShadow="1px 1px #888"})})})):t.open=!1})}selectedMenu(e){this.shadowRoot.querySelectorAll("sp-action-menu").forEach(t=>t.open=!1),this.navigate(e)}logout(){window.sessionStorage.clear(),window.location.href="/"}stateChanged(e){let t=JSON.parse(sessionStorage.getItem("userSession"));this.userRole=t.userRole,JSON.stringify(this.config)!=JSON.stringify(e.app.config)&&(this.config=e.app.config,console.log(this.config),this.config.local===!0?this.PlatformModel=er:t!==void 0&&t.platform_settings!==void 0&&(this.PlatformModel=t.platform_settings)),this.lang!=e.app.lang&&(this.lang=e.app.lang),e.app.activity&&(this.startSession=new Date().getTime())}proceduresManagementPlatform(){return m`
    <div class="container layout" id="procmgr">  
    <mwc-drawer style="display:none;"  type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${()=>this.drawerState=!1}">
    </mwc-drawer>

    <div id="headerContent" slot="appContent" style="position:sticky;">
    <!-- <mwc-top-app-bar-fixed class="isfortesting ${this.config.isForTesting}"> -->
      <div class="header isfortesting ${this.config.isForTesting}" slot="title" style="width:100%; max-height: 79px; position: fixed; top: 0; left: 0; z-index: 1000;">
        <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
        ${this.userSession()}
        <div class="layout horizontal center flex wrap" id="headerout2" style="display: flex; justify-content: flex-end;">    
        ${this.desktop?m`        
          <h1 style="font-size:2.7vw; padding-left:50px;color:#61c9f8;font-family: Montserrat;font-weight: bold;padding-right: 100px;flex-grow:1;">Procedures Definition</h1>
        `:I}
        <md-outlined-icon-button  style="color:#61c9f8" id="changelang" @click=${this.changeLang}>${this.flag}</md-outlined-icon-button>        
          <sp-menu-item id="logout" style="padding-left:10px;color:#03a9f4;margin-right: 17px;" @click=${this.logout} ><md-icon slot="icon">logout</md-icon></sp-menu-item>
          </div>  
      </div>
    <!-- </mwc-top-app-bar-fixed> -->
    </div>      
      <proc-management-home style="position:relative; top:80px;" .area="app" .lang=${this.lang} .config=${this.config}></proc-management-home>
    </div>
    `}proceduresOperationPlatform(){return this.PlatformModel.proceduresOption===void 0&&(this.PlatformModel=er),m`
    <style>
    .mainbackground{
      background-image: url(images/abstract.jpg);
      /* display: flex; */
      /* justify-content: center; */
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-image: url(/images/abstract.jpg);
      /* background-color: #0465fb; */
      background-size: cover;
      background-repeat: no-repeat;
      background: url(/images/abstract.jpg), #ffffffb0;
      background-size: cover;
      background-position: center;
      background-blend-mode: overlay;
      position: relative;      
    }

    mwc-drawer::part(mdc-drawer-app-content) {
      overflow: hidden;
    }    
    </style>
    
    <div class="container layout vertical">
    <mwc-drawer class="isfortesting ${this.config.isForTesting}" type="modal" style="position:sticky;" ?open=${this.drawerState} @MDCDrawer:closed="${()=>this.drawerState=!1}">
        <md-list>
          <md-list-item id="dashboardmyprocedures" @click="${()=>this.procCollapse=!this.procCollapse}">
            <span>${this.PlatformModel.headerAreas.proceduresOption["tabLabel_"+this.lang]}</span>
          </md-list-item>
          ${this.mobileVersion()}
          ${this.PlatformModel.headerAreas.notifications.display!==!0?I:m`
            
            <md-list-item id="dashboardnotifications" @click="${()=>this.selectedMenu("/dashboard/notifications")}">
              <span>${this.PlatformModel.headerAreas.notifications["tabLabel_"+this.lang]}${this.notifs.length?" "+this.notifs.length:null}</span>
            </md-list-item>            
          `}
          ${this.PlatformModel.headerAreas.myCertifications.display!==!0?I:m`        
            <md-list-item id="dashboardmycertifications" @click="${()=>this.certCollapse=!this.certCollapse}">
              <span>${this.PlatformModel.headerAreas.myCertifications["tabLabel_"+this.lang]} ${this.allPending()}</span>
            </md-list-item>
            <md-list class="sublist" ?hidden="${!this.certCollapse}">
              <md-list-item>
                <div style="display:flex;align-items:center;">
                  <div style="flex-grow:5;margin-left: 2vw;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.PlatformModel.headerAreas.myCertifications.sop["label_"+this.lang]} 
                    (<span style="color: #24c0eb;font-weight: bold;">${this.sops.length}</span>)</div>
                    ${this.pendingSOP()}
                </div>
              </md-list-item>
              <md-list-item>
                <div style="display:flex;align-items:center;">
                  <div style="flex-grow:5;margin-left: 2vw;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.PlatformModel.headerAreas.myCertifications.analytic["label_"+this.lang]} 
                  (<span style="color: #24c0eb;font-weight: bold;">00${this.analytics.length}</span>)</div>
                  ${this.pendingAnalytic()}
                </div>
              </md-list-item>
              ${this.myPendingCertifApprovals===void 0||this.myPendingCertifApprovals.length===0?I:m`  
                  <md-list-item>
                    <div style="display:flex;align-items:center;">
                      <div style="flex-grow:5;margin-left: 2vw;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=myPendingCertificationApprovals")}>${this.PlatformModel.headerAreas.myCertifications.reviewerPendingSign["label_"+this.lang]} 
                      (<span style="color: #24c0eb;font-weight: bold;">00${this.myPendingCertifApprovals.length}</span>)</div>
                      ${this.myPendingCertificationApprovals()}
                    </div>
                  </md-list-item>
                `}
            </md-list>
          `}
          ${this.PlatformModel.headerAreas.mySettings.display!==!0?I:m`              
            <md-list-item id="dashboardmysettings" @click="${()=>this.personalCollapse=!this.personalCollapse}">
              <span>${this.PlatformModel.headerAreas.mySettings["tabLabel_"+this.lang]}</span>
            </md-list-item>
            <md-list class="sublist" ?hidden="${!this.personalCollapse}">
            ${this.PlatformModel.headerAreas.mySettings.procedure===void 0||this.PlatformModel.headerAreas.mySettings.procedure.display===void 0||this.PlatformModel.headerAreas.mySettings.procedure.display!==!0?I:m`
              <md-list-item graphic="avatar" id="mysettingsprocedure" @click=${()=>this.selectedMenu("/dashboard/procedure")}>
                <span>${this.PlatformModel.headerAreas.mySettings.procedure["label_"+this.lang]}</span>
                <md-icon slot="graphic">route</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.incidents.display!==!0?I:m`  
              <md-list-item graphic="avatar" id="mysettingsincidents" @click=${()=>this.selectedMenu("/dashboard/incidents")}>
                <span>${this.PlatformModel.headerAreas.mySettings.incidents["label_"+this.lang]}</span>
                <md-filled-icon-button style="background-color: transparent; border: none;"><md-icon slot="graphic">bug_report</md-icon></md-filled-icon-button>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.user.display!==!0?I:m`  
              <md-list-item graphic="avatar" id="mysettingsuser" @click=${()=>this.selectedMenu("/dashboard/user")}>
                <span>${this.PlatformModel.headerAreas.mySettings.user["label_"+this.lang]}</span>
                <md-icon slot="graphic">person</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.platformusersessions===void 0||this.PlatformModel.headerAreas.mySettings.platformusersessions.display===void 0||this.PlatformModel.headerAreas.mySettings.platformusersessions.display!==!0?I:m`  
                <md-list-item graphic="avatar" id="mysettingsplatformusersessions" @click=${()=>this.selectedMenu("/dashboard/platformusersessions")}>
                  <span>${this.PlatformModel.headerAreas.mySettings.platformusersessions["label_"+this.lang]}</span>
                  <md-icon slot="graphic">person</md-icon>
                </md-list-item>
              `}            
            ${this.PlatformModel.headerAreas.mySettings.video.display!==!0?I:m`  
              <md-list-item graphic="avatar" id="mysettingstutorial" @click=${()=>this.selectedMenu("/dashboard/tutorial")}>
                <span>${this.PlatformModel.headerAreas.mySettings.video["label_"+this.lang]}</span>
                <md-icon slot="graphic">video_library</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.endpoint.display!==!0?I:m`  
              <md-list-item graphic="avatar" id="mysettingsendpoints" @click=${()=>this.selectedMenu("/dashboard/endpoints")}>
                <span>${this.PlatformModel.headerAreas.mySettings.endpoint["label_"+this.lang]}</span>
                <md-icon slot="graphic">list</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar.display!==!0?I:m`  
              <md-list-item graphic="avatar" id="mysettingsholidayscalendar" @click=${()=>this.selectedMenu("/dashboard/holidayscalendar")}>
                <span>${this.PlatformModel.headerAreas.mySettings.holidaysCalendar["label_"+this.lang]}</span>
                <md-icon slot="graphic">holidays_calendar</md-icon>
              </md-list-item>              
            `}
            </md-list>
          `}
          <sp-divider size="m"></sp-divider>
          <md-list-item id="logout" @click=${this.logout}>
            <span>${this.PlatformModel.headerAreas.doLogout["label_"+this.lang]}</span>
          </md-list-item>
        </md-list>
        
         <div id="headerContent" slot="appContent" style="position:sticky;"> 
        <!--   <mwc-top-app-bar-fixed class="isfortesting ${this.config.isForTesting}"> -->
            ${this.desktop?I:m`
              <md-filled-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}"
                @click="${()=>this.drawerState=!this.drawerState}"><md-icon>menu</md-icon></md-filled-icon-button>
            `}            
            <div class="header  ${this.config.isForTesting}" slot="title" style="width:96vw;">
              <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
              ${this.userSession()}
            
            <nav slot="actionItems" ?hidden="${this.desktop}">
              <md-outlined-icon-button id="changelang" style="color:#03a9f4" @click=${this.changeLang}>${this.lang}</md-outlined-icon-button>
            </nav>
            
            <nav slot="actionItems" ?hidden="${!this.desktop}">
              ${this.desktopVersion()}
              ${this.PlatformModel.headerAreas.notifications.display!==!0?I:m`      
                <sp-action-menu class="topMenu" id="notif-menu" size="m" @mouseover=${()=>this.menuHover("notif-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${()=>this.menuHover("notif-menu")} @click=${()=>this.selectedMenu("/dashboard/notifications")}>${this.PlatformModel.headerAreas.notifications["tabLabel_"+this.lang]}${this.notifs.length?" "+this.notifs.length:null}</span>

                  <div slot="icon"></div>
                  ${this.lastNotifs.map((e,t)=>m`
                    ${t>9?m``:m`
                      <sp-menu-item id="notif-item" class="notif_item_div${e.is_error}">
                        <div id="notif-item-div" style='display:flex;align-items:center;color:${this.notifItemColor(e)}'>
                          <div style="flex-grow:10;" @click=${()=>this.selectedMenu("/dashboard/notifications")}>${e["message_"+this.lang]}
                          </div>
                          ${this.pendingSOP()}
                        </div>
                      </sp-menu-item>
                      `}
                    `)}
                </sp-action-menu>
              `}
              ${this.PlatformModel.headerAreas.myCertifications.display!==!0?I:m`        
                <sp-action-menu class="topMenu" id="cert-menu" size="m" @mouseover=${()=>this.menuHover("cert-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${()=>this.menuHover("cert-menu")}>${this.PlatformModel.headerAreas.myCertifications["tabLabel_"+this.lang]}
                    ${this.allPending()}</span>
                  <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
                    <div style="display:flex;align-items:center;width:170px;color:#24c0eb;font-weight: bold;">
                      <div style="flex-grow:10;rgb(36, 192, 235);" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.PlatformModel.headerAreas.myCertifications.sop["label_"+this.lang]}
                      (<span style="color: #24c0eb;font-weight: bold;">${this.sops.length}</span>)</div>
                      ${this.pendingSOP()}
                    </div>
                  </sp-menu-item>
                  <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
                    <div style="display:flex;align-items:center;width:170px;color:#24c0eb;font-weight: bold;">
                      <div style="flex-grow:10;rgb(36, 192, 235);" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.PlatformModel.headerAreas.myCertifications.analytic["label_"+this.lang]}
                      (<span style="color: #24c0eb;font-weight: bold;">${this.analytics.length}</span>)</div>
                      ${this.pendingAnalytic()}
                    </div>
                  </sp-menu-item>
                  ${this.myPendingCertifApprovals===void 0||this.myPendingCertifApprovals.length===0?I:m`      
                      <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
                        <div style="display:flex;align-items:center;width:240px;color:#24c0eb;font-weight: bold;">
                          <div style="flex-grow:10;rgb(36, 192, 235);" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=myPendingCertificationApprovals")}>${this.PlatformModel.headerAreas.myCertifications.reviewerPendingSign["label_"+this.lang]}
                          (<span style="color: #24c0eb;font-weight: bold;">${this.myPendingCertifApprovals.length}</span>)</div>
                          ${this.myPendingCertificationApprovals()}
                        </div>
                      </sp-menu-item>
                  `}
                </sp-action-menu>
              `}
            ${this.PlatformModel.headerAreas.mySettings.display!==!0?m`
              `:m`                    
                <sp-action-menu class="topMenu" id="dashboardmysettings" size="m" @mouseover=${e=>this.menuHover("dashboardmysettings")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label">${this.PlatformModel.headerAreas.mySettings["tabLabel_"+this.lang]}</span>
                  ${this.PlatformModel.headerAreas.mySettings.procedure===void 0||this.PlatformModel.headerAreas.mySettings.procedure.display===void 0||this.PlatformModel.headerAreas.mySettings.procedure.display!==!0?I:m`
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsprocedure" @click=${()=>this.selectedMenu("/dashboard/procedure")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">route</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.procedure["label_"+this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.incidents.display!==!0?I:m`
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsincidents" @click=${()=>this.selectedMenu("/dashboard/incidents")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">bug_report</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.incidents["label_"+this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.user.display!==!0?I:m`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsuser" @click=${()=>this.selectedMenu("/dashboard/user")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">person</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.user["label_"+this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.platformusersessions===void 0||this.PlatformModel.headerAreas.mySettings.platformusersessions.display===void 0||this.PlatformModel.headerAreas.mySettings.platformusersessions.display!==!0?I:m`  
                      <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsplatformusersessions" @click=${()=>this.selectedMenu("/dashboard/platformusersessions")} style="color:rgb(36, 192, 235)">
                        <md-icon slot="icon">person</md-icon>
                        ${this.PlatformModel.headerAreas.mySettings.platformusersessions["label_"+this.lang]}
                      </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.video.display!==!0?I:m`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingstutorial" @click=${()=>this.selectedMenu("/dashboard/tutorial")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">video_library</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.video["label_"+this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.endpoint.display!==!0?I:m`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsendpoints" @click=${()=>this.selectedMenu("/dashboard/endpoints")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">list</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.endpoint["label_"+this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar.display!==!0?I:m`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsholidayscalendar" @click=${()=>this.selectedMenu("/dashboard/holidayscalendar")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">list</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar["label_"+this.lang]}
                    </sp-menu-item>                  
                  `}
                  <sp-divider size="m"></sp-divider>
                  <sp-menu-item style="color: rgb(235 36 110); background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingslogout" @click=${this.logout} style="color:rgb(36, 192, 235)">
                    <md-icon slot="icon">logout</md-icon>
                    ${this.PlatformModel.headerAreas.doLogout["label_"+this.lang]}
                  </sp-menu-item>
                </sp-action-menu>
              `}
              <sp-menu-item id="logout" @click=${this.logout} style="color:#D6E9F8">
              <md-filled-icon-button id="logout1" style="background-color: transparent; border: none;">
                <md-icon>logout</md-icon></md-filled-icon-button>
              </sp-menu-item>

              <md-icon-button  id="changelang" style="color:#61c9f8" @click=${this.changeLang}>${this.flag}</md-icon-button>

              </nav>
            </div>
        <!--   </mwc-top-app-bar-fixed> -->
         </div> 
      </mwc-drawer>
      <div class="mainbackground">
      <main class="layout vertical flex">
        ${this.desktop?m`${this.tabState()}`:I}
        <div class="content">
          ${this.desktop?I:m`
              <div id="tabHandle" 
                >
                <md-icon @click=${e=>{this.showTab=!this.showTab,e.target.icon=e.target.icon=="visibility"?"visibility_off":"visibility"}}>arrow_drop_up</md-icon>
                <div></div>
              </div>
              <div class="layout horizontal flex" style="margin-top:5px" style="display: flex; justify-content: flex-end;">
                ${this.tabMobileState()}
              </div>
            `}
          <tr-default ?hidden=${this.params.menu}></tr-default>
          <tr-procedures .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="procedures"}></tr-procedures>
          <platform-notif .lang=${this.lang} .notifs=${this.notifs} ?hidden=${this.params.menu!="notifications"} .params=${this.params}></platform-notif>
          <my-certifications 
            .lang=${this.lang} 
            .config=${this.config} 
            .filterData=${this.query.filterData} ?hidden=${this.params.menu!="certifications"} 
            .params=${this.params}
            @certs-updated=${this.certsUpdated}>
          </my-certifications>
          <my-incidents .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="incidents"} .params=${this.params}>
          </my-incidents>
          <user-profile .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="user"}
            .params=${this.params} @save-tabs=${()=>this.tabs.saveTabs()}></user-profile>
          <video-tutorial .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="tutorial"}
            .params=${this.params}></video-tutorial>
          <endpoints-listbymodule .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="endpoints"}
            .params=${this.params}></endpoints-listbymodule>
          <platform-usersessions .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="platformusersessions"}
            .params=${this.params}></platform-usersessions>
          <holiday-calendars .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu!="holidayscalendar"} .params=${this.params}>
          </holiday-calendars>              
        </div>
      </main>
    </div>
    </div>
    <relogin-dialog .lang=${this.lang} .config=${this.config} @logout=${this.logout}></relogin-dialog>     
    
    `}notifItemColor(e){return e.is_error?"#a33":"#0085ff"}}customElements.define("tr-dashboard",Gl);export{Gl as TrDashboard};
