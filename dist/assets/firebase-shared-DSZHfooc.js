var Fn={};/**
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
 */const Si=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},hs=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=s>>2,A=(s&3)<<4|a>>4;let B=(a&15)<<2|u>>6,k=u&63;c||(k=64,o||(B=64)),i.push(n[l],n[A],n[B],n[k])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Si(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hs(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const A=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||A==null)throw new us;const B=s<<2|a>>4;if(i.push(B),u!==64){const k=a<<4&240|u>>2;if(i.push(k),A!==64){const nt=u<<6&192|A;i.push(nt)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class us extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ls=function(t){const e=Si(t);return bi.encodeByteArray(e,!0)},Ti=function(t){return ls(t).replace(/\./g,"")},fs=function(t){try{return bi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ds(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ps=()=>ds().__FIREBASE_DEFAULTS__,gs=()=>{if(typeof process>"u"||typeof Fn>"u")return;const t=Fn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ms=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fs(t[1]);return e&&JSON.parse(e)},sn=()=>{try{return ps()||gs()||ms()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Th=t=>{var e,n;return(n=(e=sn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ai=()=>{var t;return(t=sn())===null||t===void 0?void 0:t.config},Ah=t=>{var e;return(e=sn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Di(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Di())}function _h(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ch(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kh(){const t=Di();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _i(){try{return typeof indexedDB=="object"}catch{return!1}}function Ci(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ws="FirebaseError";class ct extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ws,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Es(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ct(r,a,i)}}function Es(t,e){return t.replace(Is,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Is=/\{\$([^}]+)}/g;function Oh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ne(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Hn(s)&&Hn(o)){if(!Ne(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Hn(t){return t!==null&&typeof t=="object"}/**
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
 */function Mh(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Rh(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Bh(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ph(t,e){const n=new Ss(t,e);return n.subscribe.bind(n)}class Ss{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");bs(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=fe),r.error===void 0&&(r.error=fe),r.complete===void 0&&(r.complete=fe);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bs(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fe(){}/**
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
 */function Ts(t){return t&&t._delegate?t._delegate:t}class H{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const K="[DEFAULT]";/**
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
 */class As{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ys;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_s(e))try{this.getOrInitializeService({instanceIdentifier:K})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=K){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=K){return this.instances.has(e)}getOptions(e=K){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ds(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=K){return this.component?this.component.multipleInstances?e:K:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ds(t){return t===K?void 0:t}function _s(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new As(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var p;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(p||(p={}));const ks={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},Os=p.INFO,Ms={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},Rs=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Ms[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=Os,this._logHandler=Rs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ks[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}const Ps=(t,e)=>e.some(n=>t instanceof n);let Vn,Un;function Ns(){return Vn||(Vn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function js(){return Un||(Un=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ki=new WeakMap,je=new WeakMap,Oi=new WeakMap,de=new WeakMap,on=new WeakMap;function $s(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(L(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ki.set(n,t)}).catch(()=>{}),on.set(e,t),e}function Ls(t){if(je.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});je.set(t,e)}let $e={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return je.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xs(t){$e=t($e)}function Fs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(pe(this),e,...n);return Oi.set(i,e.sort?e.sort():[e]),L(i)}:js().includes(t)?function(...e){return t.apply(pe(this),e),L(ki.get(this))}:function(...e){return L(t.apply(pe(this),e))}}function Hs(t){return typeof t=="function"?Fs(t):(t instanceof IDBTransaction&&Ls(t),Ps(t,Ns())?new Proxy(t,$e):t)}function L(t){if(t instanceof IDBRequest)return $s(t);if(de.has(t))return de.get(t);const e=Hs(t);return e!==t&&(de.set(t,e),on.set(e,t)),e}const pe=t=>on.get(t);function Vs(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=L(o);return i&&o.addEventListener("upgradeneeded",c=>{i(L(o.result),c.oldVersion,c.newVersion,L(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Us=["get","getKey","getAll","getAllKeys","count"],Ks=["put","add","delete","clear"],ge=new Map;function Kn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ge.get(e))return ge.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ks.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Us.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ge.set(e,s),s}xs(t=>({...t,get:(e,n,i)=>Kn(e,n)||t.get(e,n,i),has:(e,n)=>!!Kn(e,n)||t.has(e,n)}));/**
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
 */class Ws{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zs(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function zs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Le="@firebase/app",Wn="0.9.13";/**
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
 */const J=new Bs("@firebase/app"),qs="@firebase/app-compat",Gs="@firebase/analytics-compat",Xs="@firebase/analytics",Js="@firebase/app-check-compat",Ys="@firebase/app-check",Zs="@firebase/auth",Qs="@firebase/auth-compat",to="@firebase/database",eo="@firebase/database-compat",no="@firebase/functions",io="@firebase/functions-compat",ro="@firebase/installations",so="@firebase/installations-compat",oo="@firebase/messaging",ao="@firebase/messaging-compat",co="@firebase/performance",ho="@firebase/performance-compat",uo="@firebase/remote-config",lo="@firebase/remote-config-compat",fo="@firebase/storage",po="@firebase/storage-compat",go="@firebase/firestore",mo="@firebase/firestore-compat",yo="firebase",vo="9.23.0";/**
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
 */const xe="[DEFAULT]",wo={[Le]:"fire-core",[qs]:"fire-core-compat",[Xs]:"fire-analytics",[Gs]:"fire-analytics-compat",[Ys]:"fire-app-check",[Js]:"fire-app-check-compat",[Zs]:"fire-auth",[Qs]:"fire-auth-compat",[to]:"fire-rtdb",[eo]:"fire-rtdb-compat",[no]:"fire-fn",[io]:"fire-fn-compat",[ro]:"fire-iid",[so]:"fire-iid-compat",[oo]:"fire-fcm",[ao]:"fire-fcm-compat",[co]:"fire-perf",[ho]:"fire-perf-compat",[uo]:"fire-rc",[lo]:"fire-rc-compat",[fo]:"fire-gcs",[po]:"fire-gcs-compat",[go]:"fire-fst",[mo]:"fire-fst-compat","fire-js":"fire-js",[yo]:"fire-js-all"};/**
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
 */const ot=new Map,Fe=new Map;function Eo(t,e){try{t.container.addComponent(e)}catch(n){J.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Y(t){const e=t.name;if(Fe.has(e))return J.debug(`There were multiple attempts to register component ${e}.`),!1;Fe.set(e,t);for(const n of ot.values())Eo(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Io={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x=new Wt("app","Firebase",Io);/**
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
 */class So{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new H("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}/**
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
 */const Nh=vo;function bo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:xe,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw x.create("bad-app-name",{appName:String(r)});if(n||(n=Ai()),!n)throw x.create("no-options");const s=ot.get(r);if(s){if(Ne(n,s.options)&&Ne(i,s.config))return s;throw x.create("duplicate-app",{appName:r})}const o=new Cs(r);for(const c of Fe.values())o.addComponent(c);const a=new So(n,i,o);return ot.set(r,a),a}function To(t=xe){const e=ot.get(t);if(!e&&t===xe&&Ai())return bo();if(!e)throw x.create("no-app",{appName:t});return e}async function jh(t){const e=t.name;ot.has(e)&&(ot.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function G(t,e,n){var i;let r=(i=wo[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),J.warn(a.join(" "));return}Y(new H(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ao="firebase-heartbeat-database",Do=1,mt="firebase-heartbeat-store";let me=null;function Mi(){return me||(me=Vs(Ao,Do,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mt)}}}).catch(t=>{throw x.create("idb-open",{originalErrorMessage:t.message})})),me}async function _o(t){try{return await(await Mi()).transaction(mt).objectStore(mt).get(Ri(t))}catch(e){if(e instanceof ct)J.warn(e.message);else{const n=x.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});J.warn(n.message)}}}async function zn(t,e){try{const i=(await Mi()).transaction(mt,"readwrite");await i.objectStore(mt).put(e,Ri(t)),await i.done}catch(n){if(n instanceof ct)J.warn(n.message);else{const i=x.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});J.warn(i.message)}}}function Ri(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Co=1024,ko=720*60*60*1e3;class Oo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ro(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=ko}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qn(),{heartbeatsToSend:n,unsentEntries:i}=Mo(this._heartbeatsCache.heartbeats),r=Ti(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qn(){return new Date().toISOString().substring(0,10)}function Mo(t,e=Co){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Gn(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ro{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _i()?Ci().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _o(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gn(t){return Ti(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bo(t){Y(new H("platform-logger",e=>new Ws(e),"PRIVATE")),Y(new H("heartbeat",e=>new Oo(e),"PRIVATE")),G(Le,Wn,t),G(Le,Wn,"esm2017"),G("fire-js","")}Bo("");var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h,cn=cn||{},f=Po||self;function zt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function No(t,e,n){return t.call.apply(t.bind,arguments)}function jo(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function I(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I=No:I=jo,I.apply(null,arguments)}function Bt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function v(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function V(){this.s=this.s,this.o=this.o}var $o=0;V.prototype.s=!1;V.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$o!=0)};V.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bi=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Xn(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(zt(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var Lo=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",()=>{},e),f.removeEventListener("test",()=>{},e)}catch{}return t})();function yt(t){return/^[\s\xa0]*$/.test(t)}function Gt(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return Gt().indexOf(t)!=-1}function un(t){return un[" "](t),t}un[" "]=function(){};function xo(t,e){var n=Ra;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Fo=O("Opera"),at=O("Trident")||O("MSIE"),Pi=O("Edge"),He=Pi||at,Ni=O("Gecko")&&!(Gt().toLowerCase().indexOf("webkit")!=-1&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),Ho=Gt().toLowerCase().indexOf("webkit")!=-1&&!O("Edge");function ji(){var t=f.document;return t?t.documentMode:void 0}var Ve;t:{var ye="",ve=(function(){var t=Gt();if(Ni)return/rv:([^\);]+)(\)|;)/.exec(t);if(Pi)return/Edge\/([\d\.]+)/.exec(t);if(at)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ho)return/WebKit\/(\S+)/.exec(t);if(Fo)return/(?:Version)[ \/]?(\S+)/.exec(t)})();if(ve&&(ye=ve?ve[1]:""),at){var we=ji();if(we!=null&&we>parseFloat(ye)){Ve=String(we);break t}}Ve=ye}var Ue;if(f.document&&at){var Jn=ji();Ue=Jn||parseInt(Ve,10)||void 0}else Ue=void 0;var Vo=Ue;function vt(t,e){if(S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ni){t:{try{un(e.nodeName);var r=!0;break t}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Uo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vt.$.h.call(this)}}v(vt,S);var Uo={2:"touch",3:"pen",4:"mouse"};vt.prototype.h=function(){vt.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),Ko=0;function Wo(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Ko,this.fa=this.ia=!1}function Jt(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ln(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function zo(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function $i(t){const e={};for(const n in t)e[n]=t[n];return e}const Yn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Li(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Yn.length;s++)n=Yn[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Yt(t){this.src=t,this.g={},this.h=0}Yt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=We(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Wo(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function Ke(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Bi(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Jt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function We(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var fn="closure_lm_"+(1e6*Math.random()|0),Ee={};function xi(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xi(t,e[s],n,i,r);return null}return n=Vi(n),t&&t[Xt]?t.O(e,n,qt(i)?!!i.capture:!1,r):qo(t,e,n,!1,i,r)}function qo(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=qt(r)?!!r.capture:!!r,a=pn(t);if(a||(t[fn]=a=new Yt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Go(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Lo||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Hi(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Go(){function t(n){return e.call(t.src,t.listener,n)}const e=Xo;return t}function Fi(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fi(t,e[s],n,i,r);else i=qt(i)?!!i.capture:!!i,n=Vi(n),t&&t[Xt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=We(s,n,i,r),-1<n&&(Jt(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=We(e,n,i,r)),(n=-1<t?e[t]:null)&&dn(n))}function dn(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xt])Ke(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Hi(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=pn(e))?(Ke(n,t),n.h==0&&(n.src=null,e[fn]=null)):Jt(t)}}}function Hi(t){return t in Ee?Ee[t]:Ee[t]="on"+t}function Xo(t,e){if(t.fa)t=!0;else{e=new vt(e,this);var n=t.listener,i=t.la||t.src;t.ia&&dn(t),t=n.call(i,e)}return t}function pn(t){return t=t[fn],t instanceof Yt?t:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vi(t){return typeof t=="function"?t:(t[Ie]||(t[Ie]=function(e){return t.handleEvent(e)}),t[Ie])}function y(){V.call(this),this.i=new Yt(this),this.S=this,this.J=null}v(y,V);y.prototype[Xt]=!0;y.prototype.removeEventListener=function(t,e,n,i){Fi(this,t,e,n,i)};function E(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;e=new S(i,t),Li(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Pt(o,i,!0,e)&&r}if(o=e.g=t,r=Pt(o,i,!0,e)&&r,r=Pt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Pt(o,i,!1,e)&&r}y.prototype.N=function(){if(y.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Jt(n[i]);delete t.g[e],t.h--}}this.J=null};y.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};y.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Pt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ke(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var gn=f.JSON.stringify;class Jo{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Yo(){var t=mn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Zo{constructor(){this.h=this.g=null}add(e,n){const i=Ui.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ui=new Jo(()=>new Qo,t=>t.reset());class Qo{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ta(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ea(t){f.setTimeout(()=>{throw t},0)}let wt,Et=!1,mn=new Zo,Ki=()=>{const t=f.Promise.resolve(void 0);wt=()=>{t.then(na)}};var na=()=>{for(var t;t=Yo();){try{t.h.call(t.g)}catch(n){ea(n)}var e=Ui;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Et=!1};function Zt(t,e){y.call(this),this.h=t||1,this.g=e||f,this.j=I(this.qb,this),this.l=Date.now()}v(Zt,y);h=Zt.prototype;h.ga=!1;h.T=null;h.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),E(this,"tick"),this.ga&&(yn(this),this.start()))}};h.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yn(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}h.N=function(){Zt.$.N.call(this),yn(this),delete this.g};function vn(t,e,n){if(typeof t=="function")n&&(t=I(t,n));else if(t&&typeof t.handleEvent=="function")t=I(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Wi(t){t.g=vn(()=>{t.g=null,t.i&&(t.i=!1,Wi(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ia extends V{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wi(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(t){V.call(this),this.h=t,this.g={}}v(It,V);var Zn=[];function zi(t,e,n,i){Array.isArray(n)||(n&&(Zn[0]=n.toString()),n=Zn);for(var r=0;r<n.length;r++){var s=xi(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qi(t){ln(t.g,function(e,n){this.g.hasOwnProperty(n)&&dn(e)},t),t.g={}}It.prototype.N=function(){It.$.N.call(this),qi(this)};It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qt(){this.g=!0}Qt.prototype.Ea=function(){this.g=!1};function ra(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var A=l.split("_");o=2<=A.length&&A[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function sa(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function rt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aa(t,n)+(i?" "+i:"")})}function oa(t,e){t.info(function(){return"TIMEOUT: "+e})}Qt.prototype.info=function(){};function aa(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return gn(n)}catch{return e}}var et={},Qn=null;function te(){return Qn=Qn||new y}et.Ta="serverreachability";function Gi(t){S.call(this,et.Ta,t)}v(Gi,S);function St(t){const e=te();E(e,new Gi(e))}et.STAT_EVENT="statevent";function Xi(t,e){S.call(this,et.STAT_EVENT,t),this.stat=e}v(Xi,S);function b(t){const e=te();E(e,new Xi(e,t))}et.Ua="timingevent";function Ji(t,e){S.call(this,et.Ua,t),this.size=e}v(Ji,S);function Dt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var ee={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wn(){}wn.prototype.h=null;function ti(t){return t.h||(t.h=t.i())}function Zi(){}var _t={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function En(){S.call(this,"d")}v(En,S);function In(){S.call(this,"c")}v(In,S);var ze;function ne(){}v(ne,wn);ne.prototype.g=function(){return new XMLHttpRequest};ne.prototype.i=function(){return{}};ze=new ne;function Ct(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new It(this),this.P=ca,t=He?125:void 0,this.V=new Zt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qi}function Qi(){this.i=null,this.g="",this.h=!1}var ca=45e3,qe={},$t={};h=Ct.prototype;h.setTimeout=function(t){this.P=t};function Ge(t,e,n){t.L=1,t.v=re($(e)),t.s=n,t.S=!0,tr(t,null)}function tr(t,e){t.G=Date.now(),kt(t),t.A=$(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),cr(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Qi,t.g=kr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ia(I(t.Pa,t,t.g),t.O)),zi(t.U,t.g,"readystatechange",t.nb),e=t.I?$i(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),St(),ra(t.j,t.u,t.A,t.m,t.W,t.s)}h.nb=function(t){t=t.target;const e=this.M;e&&M(t)==3?e.l():this.Pa(t)};h.Pa=function(t){try{if(t==this.g)t:{const l=M(this.g);var e=this.g.Ia();const A=this.g.da();if(!(3>l)&&(l!=3||He||this.g&&(this.h.h||this.g.ja()||ri(this.g)))){this.J||l!=4||e==7||(e==8||0>=A?St(3):St(2)),ie(this);var n=this.g.da();this.ca=n;e:if(er(this)){var i=ri(this.g);t="";var r=i.length,s=M(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){W(this),gt(this);var o="";break e}this.h.i=new f.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sa(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yt(a)){var u=a;break e}}u=null}if(n=u)rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xe(this,n);else{this.i=!1,this.o=3,b(12),W(this),gt(this);break t}}this.S?(nr(this,l,o),He&&this.i&&l==3&&(zi(this.U,this.V,"tick",this.mb),this.V.start())):(rt(this.j,this.m,o,null),Xe(this,o)),l==4&&W(this),this.i&&!this.J&&(l==4?Ar(this.l,this):(this.i=!1,kt(this)))}else ka(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,b(12)):(this.o=0,b(13)),W(this),gt(this)}}}catch{}finally{}};function er(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function nr(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=ha(t,n),r==$t){e==4&&(t.o=4,b(14),i=!1),rt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==qe){t.o=4,b(15),rt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else rt(t.j,t.m,r,null),Xe(t,r);er(t)&&r!=$t&&r!=qe&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,b(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),_n(e),e.M=!0,b(11))):(rt(t.j,t.m,n,"[Invalid Chunked Response]"),W(t),gt(t))}h.mb=function(){if(this.g){var t=M(this.g),e=this.g.ja();this.C<e.length&&(ie(this),nr(this,t,e),this.i&&t!=4&&kt(this))}};function ha(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?$t:(n=Number(e.substring(n,i)),isNaN(n)?qe:(i+=1,i+n>e.length?$t:(e=e.slice(i,i+n),t.C=i+n,e)))}h.cancel=function(){this.J=!0,W(this)};function kt(t){t.Y=Date.now()+t.P,ir(t,t.P)}function ir(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Dt(I(t.lb,t),e)}function ie(t){t.B&&(f.clearTimeout(t.B),t.B=null)}h.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oa(this.j,this.A),this.L!=2&&(St(),b(17)),W(this),this.o=2,gt(this)):ir(this,this.Y-t)};function gt(t){t.l.H==0||t.J||Ar(t.l,t)}function W(t){ie(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,yn(t.V),qi(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xe(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Je(n.i,t))){if(!t.K&&Je(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ft(n),ae(n);else break t;Dn(n),b(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Dt(I(n.ib,n),6e3));if(1>=lr(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else z(n,11)}else if((t.K||n.g==t)&&Ft(n),!yt(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const A=u[4];A!=null&&(n.Ga=A,n.l.info("SVER="+n.Ga));const B=u[5];B!=null&&typeof B=="number"&&0<B&&(i=1.5*B,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const k=t.g;if(k){const nt=k.g?k.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nt){var s=i.i;s.g||nt.indexOf("spdy")==-1&&nt.indexOf("quic")==-1&&nt.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sn(s,s.h),s.h=null))}if(i.F){const le=k.g?k.g.getResponseHeader("X-HTTP-Session-Id"):null;le&&(i.Da=le,g(i.I,i.F,le))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Cr(i,i.J?i.pa:null,i.Y),o.K){fr(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(ie(a),kt(a)),i.g=o}else br(i);0<n.j.length&&ce(n)}else u[0]!="stop"&&u[0]!="close"||z(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?z(n,7):An(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}St(4)}catch{}}function ua(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function la(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function rr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=la(t),i=ua(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var sr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function X(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof X){this.h=t.h,Lt(this,t.j),this.s=t.s,this.g=t.g,xt(this,t.m),this.l=t.l;var e=t.i,n=new bt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ei(this,n),this.o=t.o}else t&&(e=String(t).match(sr))?(this.h=!1,Lt(this,e[1]||"",!0),this.s=dt(e[2]||""),this.g=dt(e[3]||"",!0),xt(this,e[4]),this.l=dt(e[5]||"",!0),ei(this,e[6]||"",!0),this.o=dt(e[7]||"")):(this.h=!1,this.i=new bt(null,this.h))}X.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pt(e,ni,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pt(e,ni,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(pt(n,n.charAt(0)=="/"?ga:pa,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pt(n,ya)),t.join("")};function $(t){return new X(t)}function Lt(t,e,n){t.j=n?dt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ei(t,e,n){e instanceof bt?(t.i=e,va(t.i,t.h)):(n||(e=pt(e,ma)),t.i=new bt(e,t.h))}function g(t,e,n){t.i.set(e,n)}function re(t){return g(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,da),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function da(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ni=/[#\/\?@]/g,pa=/[#\?:]/g,ga=/[#\?]/g,ma=/[#\?@]/g,ya=/#/g;function bt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function U(t){t.g||(t.g=new Map,t.h=0,t.i&&fa(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}h=bt.prototype;h.add=function(t,e){U(this),this.i=null,t=ht(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function or(t,e){U(t),e=ht(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ar(t,e){return U(t),e=ht(t,e),t.g.has(e)}h.forEach=function(t,e){U(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};h.ta=function(){U(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};h.Z=function(t){U(this);let e=[];if(typeof t=="string")ar(this,t)&&(e=e.concat(this.g.get(ht(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};h.set=function(t,e){return U(this),this.i=null,t=ht(this,t),ar(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};h.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cr(t,e,n){or(t,e),0<n.length&&(t.i=null,t.g.set(ht(t,e),hn(n)),t.h+=n.length)}h.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function ht(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function va(t,e){e&&!t.j&&(U(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(or(this,i),cr(this,r,n))},t)),t.j=e}var wa=class{constructor(t,e){this.g=t,this.map=e}};function hr(t){this.l=t||Ea,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ka&&f.g.Ka()&&f.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ea=10;function ur(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lr(t){return t.h?1:t.g?t.g.size:0}function Je(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sn(t,e){t.g?t.g.add(e):t.h=e}function fr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hr.prototype.cancel=function(){if(this.i=dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dr(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hn(t.i)}var Ia=class{stringify(t){return f.JSON.stringify(t,void 0)}parse(t){return f.JSON.parse(t,void 0)}};function Sa(){this.g=new Ia}function ba(t,e,n){const i=n||"";try{rr(t,function(r,s){let o=r;qt(r)&&(o=gn(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Ta(t,e){const n=new Qt;if(f.Image){const i=new Image;i.onload=Bt(Nt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Bt(Nt,n,i,"TestLoadImage: error",!1,e),i.onabort=Bt(Nt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Bt(Nt,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Nt(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Ot(t){this.l=t.fc||null,this.j=t.ob||!1}v(Ot,wn);Ot.prototype.g=function(){return new se(this.l,this.j)};Ot.prototype.i=(function(t){return function(){return t}})({});function se(t,e){y.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(se,y);var bn=0;h=se.prototype;h.open=function(t,e){if(this.readyState!=bn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tt(this)};h.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||f).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};h.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mt(this)),this.readyState=bn};h.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tt(this)),this.g&&(this.readyState=3,Tt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pr(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pr(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}h.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mt(this):Tt(this),this.readyState==3&&pr(this)}};h.Za=function(t){this.g&&(this.response=this.responseText=t,Mt(this))};h.Ya=function(t){this.g&&(this.response=t,Mt(this))};h.ka=function(){this.g&&Mt(this)};function Mt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tt(t)}h.setRequestHeader=function(t,e){this.v.append(t,e)};h.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};h.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Tt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(se.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Aa=f.JSON.parse;function m(t){y.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gr,this.L=this.M=!1}v(m,y);var gr="",Da=/^https?$/i,_a=["POST","PUT"];h=m.prototype;h.Oa=function(t){this.M=t};h.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ze.g(),this.C=this.u?ti(this.u):ti(ze),this.g.onreadystatechange=I(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ii(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=f.FormData&&t instanceof f.FormData,!(0<=Bi(_a,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vr(this),0<this.B&&((this.L=Ca(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.ua,this)):this.A=vn(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ii(this,s)}};function Ca(t){return at&&typeof t.timeout=="number"&&t.ontimeout!==void 0}h.ua=function(){typeof cn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,E(this,"timeout"),this.abort(8))};function ii(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mr(t),oe(t)}function mr(t){t.F||(t.F=!0,E(t,"complete"),E(t,"error"))}h.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,E(this,"complete"),E(this,"abort"),oe(this))};h.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oe(this,!0)),m.$.N.call(this)};h.La=function(){this.s||(this.G||this.v||this.l?yr(this):this.kb())};h.kb=function(){yr(this)};function yr(t){if(t.h&&typeof cn<"u"&&(!t.C[1]||M(t)!=4||t.da()!=2)){if(t.v&&M(t)==4)vn(t.La,0,t);else if(E(t,"readystatechange"),M(t)==4){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(sr)[1]||null;!r&&f.self&&f.self.location&&(r=f.self.location.protocol.slice(0,-1)),i=!Da.test(r?r.toLowerCase():"")}n=i}if(n)E(t,"complete"),E(t,"success");else{t.m=6;try{var s=2<M(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",mr(t)}}finally{oe(t)}}}}function oe(t,e){if(t.g){vr(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||E(t,"ready");try{n.onreadystatechange=i}catch{}}}function vr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}h.isActive=function(){return!!this.g};function M(t){return t.g?t.g.readyState:0}h.da=function(){try{return 2<M(this)?this.g.status:-1}catch{return-1}};h.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};h.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Aa(e)}};function ri(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ka(t){const e={};t=(t.g&&2<=M(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(yt(t[i]))continue;var n=ta(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}zo(e,function(i){return i.join(", ")})}h.Ia=function(){return this.m};h.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wr(t){let e="";return ln(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Tn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=wr(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):g(t,e,n))}function lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Er(t){this.Ga=0,this.j=[],this.l=new Qt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=lt("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=lt("baseRetryDelayMs",5e3,t),this.hb=lt("retryDelaySeedMs",1e4,t),this.eb=lt("forwardChannelMaxRetries",2,t),this.xa=lt("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hr(t&&t.concurrentRequestLimit),this.Ja=new Sa,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}h=Er.prototype;h.ra=8;h.H=1;function An(t){if(Ir(t),t.H==3){var e=t.W++,n=$(t.I);if(g(n,"SID",t.K),g(n,"RID",e),g(n,"TYPE","terminate"),Rt(t,n),e=new Ct(t,t.l,e),e.L=2,e.v=re($(n)),n=!1,f.navigator&&f.navigator.sendBeacon)try{n=f.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=kr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),kt(e)}_r(t)}function ae(t){t.g&&(_n(t),t.g.cancel(),t.g=null)}function Ir(t){ae(t),t.u&&(f.clearTimeout(t.u),t.u=null),Ft(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function ce(t){if(!ur(t.i)&&!t.m){t.m=!0;var e=t.Na;wt||Ki(),Et||(wt(),Et=!0),mn.add(e,t),t.C=0}}function Oa(t,e){return lr(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Dt(I(t.Na,t,e),Dr(t,t.C)),t.C++,!0)}h.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ct(this,this.l,t);let s=this.s;if(this.U&&(s?(s=$i(s),Li(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Sr(this,r,e),n=$(this.I),g(n,"RID",t),g(n,"CVER",22),this.F&&g(n,"X-HTTP-Session-Id",this.F),Rt(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(wr(s)))+"&"+e:this.o&&Tn(n,this.o,s)),Sn(this.i,r),this.bb&&g(n,"TYPE","init"),this.P?(g(n,"$req",e),g(n,"SID","null"),r.aa=!0,Ge(r,n,null)):Ge(r,n,e),this.H=2}}else this.H==3&&(t?si(this,t):this.j.length==0||ur(this.i)||si(this))};function si(t,e){var n;e?n=e.m:n=t.W++;const i=$(t.I);g(i,"SID",t.K),g(i,"RID",n),g(i,"AID",t.V),Rt(t,i),t.o&&t.s&&Tn(i,t.o,t.s),n=new Ct(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Sr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sn(t.i,n),Ge(n,i,e)}function Rt(t,e){t.na&&ln(t.na,function(n,i){g(e,i,n)}),t.h&&rr({},function(n,i){g(e,i,n)})}function Sr(t,e,n){n=Math.min(t.j.length,n);var i=t.h?I(t.h.Va,t.h,t):null;t:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=r[c].g;const l=r[c].map;if(u-=s,0>u)s=Math.max(0,r[c].g-100),a=!1;else try{ba(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function br(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wt||Ki(),Et||(wt(),Et=!0),mn.add(e,t),t.A=0}}function Dn(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Dt(I(t.Ma,t),Dr(t,t.A)),t.A++,!0)}h.Ma=function(){if(this.u=null,Tr(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Dt(I(this.jb,this),t)}};h.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,b(10),ae(this),Tr(this))};function _n(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function Tr(t){t.g=new Ct(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=$(t.wa);g(e,"RID","rpc"),g(e,"SID",t.K),g(e,"AID",t.V),g(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&g(e,"TO",t.qa),g(e,"TYPE","xmlhttp"),Rt(t,e),t.o&&t.s&&Tn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=re($(e)),n.s=null,n.S=!0,tr(n,t)}h.ib=function(){this.v!=null&&(this.v=null,ae(this),Dn(this),b(19))};function Ft(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function Ar(t,e){var n=null;if(t.g==e){Ft(t),_n(t),t.g=null;var i=2}else if(Je(t.i,e))n=e.F,fr(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=te(),E(i,new Ji(i,n)),ce(t)}else br(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&Oa(t,e)||i==2&&Dn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:z(t,5);break;case 4:z(t,10);break;case 3:z(t,6);break;default:z(t,2)}}}function Dr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function z(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=I(t.pb,t);n||(n=new X("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Lt(n,"https"),re(n)),Ta(n.toString(),i)}else b(2);t.H=0,t.h&&t.h.za(e),_r(t),Ir(t)}h.pb=function(t){t?(this.l.info("Successfully pinged google.com"),b(2)):(this.l.info("Failed to ping google.com"),b(1))};function _r(t){if(t.H=0,t.ma=[],t.h){const e=dr(t.i);(e.length!=0||t.j.length!=0)&&(Xn(t.ma,e),Xn(t.ma,t.j),t.i.i.length=0,hn(t.j),t.j.length=0),t.h.ya()}}function Cr(t,e,n){var i=n instanceof X?$(n):new X(n);if(i.g!="")e&&(i.g=e+"."+i.g),xt(i,i.m);else{var r=f.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new X(null);i&&Lt(s,i),e&&(s.g=e),r&&xt(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&g(i,n,e),g(i,"VER",t.ra),Rt(t,i),i}function kr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new m(new Ot({ob:!0})):new m(t.va),e.Oa(t.J),e}h.isActive=function(){return!!this.h&&this.h.isActive(this)};function Or(){}h=Or.prototype;h.Ba=function(){};h.Aa=function(){};h.za=function(){};h.ya=function(){};h.isActive=function(){return!0};h.Va=function(){};function Ht(){if(at&&!(10<=Number(Vo)))throw Error("Environmental error: no available transport.")}Ht.prototype.g=function(t,e){return new D(t,e)};function D(t,e){y.call(this),this.g=new Er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!yt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yt(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ut(this)}v(D,y);D.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;b(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Cr(t,null,t.Y),ce(t)};D.prototype.close=function(){An(this.g)};D.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gn(t),t=n);e.j.push(new wa(e.fb++,t)),e.H==3&&ce(e)};D.prototype.N=function(){this.g.h=null,delete this.j,An(this.g),delete this.g,D.$.N.call(this)};function Mr(t){En.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}v(Mr,En);function Rr(){In.call(this),this.status=1}v(Rr,In);function ut(t){this.g=t}v(ut,Or);ut.prototype.Ba=function(){E(this.g,"a")};ut.prototype.Aa=function(t){E(this.g,new Mr(t))};ut.prototype.za=function(t){E(this.g,new Rr)};ut.prototype.ya=function(){E(this.g,"b")};function Ma(){this.blockSize=-1}function C(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}v(C,Ma);C.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Se(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}C.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Se(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Se(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Se(this,i),r=0;break}}this.h=r,this.i+=e};C.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function d(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var Ra={};function Cn(t){return-128<=t&&128>t?xo(t,function(e){return new d([e|0],0>e?-1:0)}):new d([t|0],0>t?-1:0)}function R(t){if(isNaN(t)||!isFinite(t))return st;if(0>t)return w(R(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ye;return new d(e,0)}function Br(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return w(Br(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=R(Math.pow(e,8)),i=st,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=R(Math.pow(e,s)),i=i.R(s).add(R(o))):(i=i.R(n),i=i.add(R(o)))}return i}var Ye=4294967296,st=Cn(0),Ze=Cn(1),oi=Cn(16777216);h=d.prototype;h.ea=function(){if(_(this))return-w(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ye+i)*e,e*=Ye}return t};h.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(N(this))return"0";if(_(this))return"-"+w(this).toString(t);for(var e=R(Math.pow(t,6)),n=this,i="";;){var r=Ut(n,e).g;n=Vt(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,N(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};h.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function N(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function _(t){return t.h==-1}h.X=function(t){return t=Vt(this,t),_(t)?-1:N(t)?0:1};function w(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new d(n,~t.h).add(Ze)}h.abs=function(){return _(this)?w(this):this};h.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new d(n,n[n.length-1]&-2147483648?-1:0)};function Vt(t,e){return t.add(w(e))}h.R=function(t){if(N(this)||N(t))return st;if(_(this))return _(t)?w(this).R(w(t)):w(w(this).R(t));if(_(t))return w(this.R(w(t)));if(0>this.X(oi)&&0>t.X(oi))return R(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*i+2*r]+=o*c,jt(n,2*i+2*r),n[2*i+2*r+1]+=s*c,jt(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,jt(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,jt(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new d(n,0)};function jt(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ft(t,e){this.g=t,this.h=e}function Ut(t,e){if(N(e))throw Error("division by zero");if(N(t))return new ft(st,st);if(_(t))return e=Ut(w(t),e),new ft(w(e.g),w(e.h));if(_(e))return e=Ut(t,w(e)),new ft(w(e.g),e.h);if(30<t.g.length){if(_(t)||_(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ze,i=e;0>=i.X(t);)n=ai(n),i=ai(i);var r=it(n,1),s=it(i,1);for(i=it(i,2),n=it(n,2);!N(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=it(i,1),n=it(n,1)}return e=Vt(t,r.R(e)),new ft(r,e)}for(r=st;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=R(n),o=s.R(e);_(o)||0<o.X(t);)n-=i,s=R(n),o=s.R(e);N(s)&&(s=Ze),r=r.add(s),t=Vt(t,o)}return new ft(r,t)}h.gb=function(t){return Ut(this,t).h};h.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new d(n,this.h&t.h)};h.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new d(n,this.h|t.h)};h.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new d(n,this.h^t.h)};function ai(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new d(n,t.h)}function it(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new d(r,t.h)}Ht.prototype.createWebChannel=Ht.prototype.g;D.prototype.send=D.prototype.u;D.prototype.open=D.prototype.m;D.prototype.close=D.prototype.close;ee.NO_ERROR=0;ee.TIMEOUT=8;ee.HTTP_ERROR=6;Yi.COMPLETE="complete";Zi.EventType=_t;_t.OPEN="a";_t.CLOSE="b";_t.ERROR="c";_t.MESSAGE="d";y.prototype.listen=y.prototype.O;m.prototype.listenOnce=m.prototype.P;m.prototype.getLastError=m.prototype.Sa;m.prototype.getLastErrorCode=m.prototype.Ia;m.prototype.getStatus=m.prototype.da;m.prototype.getResponseJson=m.prototype.Wa;m.prototype.getResponseText=m.prototype.ja;m.prototype.send=m.prototype.ha;m.prototype.setWithCredentials=m.prototype.Oa;C.prototype.digest=C.prototype.l;C.prototype.reset=C.prototype.reset;C.prototype.update=C.prototype.j;d.prototype.add=d.prototype.add;d.prototype.multiply=d.prototype.R;d.prototype.modulo=d.prototype.gb;d.prototype.compare=d.prototype.X;d.prototype.toNumber=d.prototype.ea;d.prototype.toString=d.prototype.toString;d.prototype.getBits=d.prototype.D;d.fromNumber=R;d.fromString=Br;var $h=function(){return new Ht},Lh=function(){return te()},xh=ee,Fh=Yi,Hh=et,Vh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Uh=Ot,Kh=Zi,Wh=m,zh=C,qh=d;const Ba=(t,e)=>e.some(n=>t instanceof n);let ci,hi;function Pa(){return ci||(ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Na(){return hi||(hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pr=new WeakMap,Qe=new WeakMap,Nr=new WeakMap,be=new WeakMap,kn=new WeakMap;function ja(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(F(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pr.set(n,t)}).catch(()=>{}),kn.set(e,t),e}function $a(t){if(Qe.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qe.set(t,e)}let tn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function La(t){tn=t(tn)}function xa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Te(this),e,...n);return Nr.set(i,e.sort?e.sort():[e]),F(i)}:Na().includes(t)?function(...e){return t.apply(Te(this),e),F(Pr.get(this))}:function(...e){return F(t.apply(Te(this),e))}}function Fa(t){return typeof t=="function"?xa(t):(t instanceof IDBTransaction&&$a(t),Ba(t,Pa())?new Proxy(t,tn):t)}function F(t){if(t instanceof IDBRequest)return ja(t);if(be.has(t))return be.get(t);const e=Fa(t);return e!==t&&(be.set(t,e),kn.set(e,t)),e}const Te=t=>kn.get(t);function Ha(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=F(o);return i&&o.addEventListener("upgradeneeded",c=>{i(F(o.result),c.oldVersion,c.newVersion,F(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Va=["get","getKey","getAll","getAllKeys","count"],Ua=["put","add","delete","clear"],Ae=new Map;function ui(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ae.get(e))return Ae.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ua.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Va.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ae.set(e,s),s}La(t=>({...t,get:(e,n,i)=>ui(e,n)||t.get(e,n,i),has:(e,n)=>!!ui(e,n)||t.has(e,n)}));const jr="@firebase/installations",On="0.6.4";/**
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
 */const $r=1e4,Lr=`w:${On}`,xr="FIS_v2",Ka="https://firebaseinstallations.googleapis.com/v1",Wa=3600*1e3,za="installations",qa="Installations";/**
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
 */const Ga={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Z=new Wt(za,qa,Ga);function Fr(t){return t instanceof ct&&t.code.includes("request-failed")}/**
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
 */function Hr({projectId:t}){return`${Ka}/projects/${t}/installations`}function Vr(t){return{token:t.token,requestStatus:2,expiresIn:Ja(t.expiresIn),creationTime:Date.now()}}async function Ur(t,e){const i=(await e.json()).error;return Z.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Kr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xa(t,{refreshToken:e}){const n=Kr(t);return n.append("Authorization",Ya(e)),n}async function Wr(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ja(t){return Number(t.replace("s","000"))}function Ya(t){return`${xr} ${t}`}/**
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
 */async function Za({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Hr(t),r=Kr(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:xr,appId:t.appId,sdkVersion:Lr},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Wr(()=>fetch(i,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Vr(u.authToken)}}else throw await Ur("Create Installation",c)}/**
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
 */function zr(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Qa(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tc=/^[cdef][\w-]{21}$/,en="";function ec(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=nc(t);return tc.test(n)?n:en}catch{return en}}function nc(t){return Qa(t).substr(0,22)}/**
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
 */function he(t){return`${t.appName}!${t.appId}`}/**
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
 */const qr=new Map;function Gr(t,e){const n=he(t);Xr(n,e),ic(n,e)}function Xr(t,e){const n=qr.get(t);if(n)for(const i of n)i(e)}function ic(t,e){const n=rc();n&&n.postMessage({key:t,fid:e}),sc()}let q=null;function rc(){return!q&&"BroadcastChannel"in self&&(q=new BroadcastChannel("[Firebase] FID Change"),q.onmessage=t=>{Xr(t.data.key,t.data.fid)}),q}function sc(){qr.size===0&&q&&(q.close(),q=null)}/**
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
 */const oc="firebase-installations-database",ac=1,Q="firebase-installations-store";let De=null;function Mn(){return De||(De=Ha(oc,ac,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Q)}}})),De}async function Kt(t,e){const n=he(t),r=(await Mn()).transaction(Q,"readwrite"),s=r.objectStore(Q),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Gr(t,e.fid),e}async function Jr(t){const e=he(t),i=(await Mn()).transaction(Q,"readwrite");await i.objectStore(Q).delete(e),await i.done}async function ue(t,e){const n=he(t),r=(await Mn()).transaction(Q,"readwrite"),s=r.objectStore(Q),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Gr(t,a.fid),a}/**
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
 */async function Rn(t){let e;const n=await ue(t.appConfig,i=>{const r=cc(i),s=hc(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===en?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function cc(t){const e=t||{fid:ec(),registrationStatus:0};return Yr(e)}function hc(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Z.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=uc(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lc(t)}:{installationEntry:e}}async function uc(t,e){try{const n=await Za(t,e);return Kt(t.appConfig,n)}catch(n){throw Fr(n)&&n.customData.serverCode===409?await Jr(t.appConfig):await Kt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lc(t){let e=await li(t.appConfig);for(;e.registrationStatus===1;)await zr(100),e=await li(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Rn(t);return i||n}return e}function li(t){return ue(t,e=>{if(!e)throw Z.create("installation-not-found");return Yr(e)})}function Yr(t){return fc(t)?{fid:t.fid,registrationStatus:0}:t}function fc(t){return t.registrationStatus===1&&t.registrationTime+$r<Date.now()}/**
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
 */async function dc({appConfig:t,heartbeatServiceProvider:e},n){const i=pc(t,n),r=Xa(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Lr,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Wr(()=>fetch(i,a));if(c.ok){const u=await c.json();return Vr(u)}else throw await Ur("Generate Auth Token",c)}function pc(t,{fid:e}){return`${Hr(t)}/${e}/authTokens:generate`}/**
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
 */async function Bn(t,e=!1){let n;const i=await ue(t.appConfig,s=>{if(!Zr(s))throw Z.create("not-registered");const o=s.authToken;if(!e&&yc(o))return s;if(o.requestStatus===1)return n=gc(t,e),s;{if(!navigator.onLine)throw Z.create("app-offline");const a=wc(s);return n=mc(t,a),a}});return n?await n:i.authToken}async function gc(t,e){let n=await fi(t.appConfig);for(;n.authToken.requestStatus===1;)await zr(100),n=await fi(t.appConfig);const i=n.authToken;return i.requestStatus===0?Bn(t,e):i}function fi(t){return ue(t,e=>{if(!Zr(e))throw Z.create("not-registered");const n=e.authToken;return Ec(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mc(t,e){try{const n=await dc(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Kt(t.appConfig,i),n}catch(n){if(Fr(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jr(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kt(t.appConfig,i)}throw n}}function Zr(t){return t!==void 0&&t.registrationStatus===2}function yc(t){return t.requestStatus===2&&!vc(t)}function vc(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wa}function wc(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ec(t){return t.requestStatus===1&&t.requestTime+$r<Date.now()}/**
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
 */async function Ic(t){const e=t,{installationEntry:n,registrationPromise:i}=await Rn(e);return i?i.catch(console.error):Bn(e).catch(console.error),n.fid}/**
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
 */async function Sc(t,e=!1){const n=t;return await bc(n),(await Bn(n,e)).token}async function bc(t){const{registrationPromise:e}=await Rn(t);e&&await e}/**
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
 */function Tc(t){if(!t||!t.options)throw _e("App Configuration");if(!t.name)throw _e("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _e(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _e(t){return Z.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="installations",Ac="installations-internal",Dc=t=>{const e=t.getProvider("app").getImmediate(),n=Tc(e),i=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},_c=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,Qr).getImmediate();return{getId:()=>Ic(n),getToken:r=>Sc(n,r)}};function Cc(){Y(new H(Qr,Dc,"PUBLIC")),Y(new H(Ac,_c,"PRIVATE"))}Cc();G(jr,On);G(jr,On,"esm2017");const kc=(t,e)=>e.some(n=>t instanceof n);let di,pi;function Oc(){return di||(di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mc(){return pi||(pi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ts=new WeakMap,nn=new WeakMap,es=new WeakMap,Ce=new WeakMap,Pn=new WeakMap;function Rc(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(j(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ts.set(n,t)}).catch(()=>{}),Pn.set(e,t),e}function Bc(t){if(nn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nn.set(t,e)}let rn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||es.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pc(t){rn=t(rn)}function Nc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ke(this),e,...n);return es.set(i,e.sort?e.sort():[e]),j(i)}:Mc().includes(t)?function(...e){return t.apply(ke(this),e),j(ts.get(this))}:function(...e){return j(t.apply(ke(this),e))}}function jc(t){return typeof t=="function"?Nc(t):(t instanceof IDBTransaction&&Bc(t),kc(t,Oc())?new Proxy(t,rn):t)}function j(t){if(t instanceof IDBRequest)return Rc(t);if(Ce.has(t))return Ce.get(t);const e=jc(t);return e!==t&&(Ce.set(t,e),Pn.set(e,t)),e}const ke=t=>Pn.get(t);function ns(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=j(o);return i&&o.addEventListener("upgradeneeded",c=>{i(j(o.result),c.oldVersion,c.newVersion,j(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}function Oe(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),j(n).then(()=>{})}const $c=["get","getKey","getAll","getAllKeys","count"],Lc=["put","add","delete","clear"],Me=new Map;function gi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Me.get(e))return Me.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Lc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||$c.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Me.set(e,s),s}Pc(t=>({...t,get:(e,n,i)=>gi(e,n)||t.get(e,n,i),has:(e,n)=>!!gi(e,n)||t.has(e,n)}));/**
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
 */const xc="/firebase-messaging-sw.js",Fc="/firebase-cloud-messaging-push-scope",is="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Hc="https://fcmregistrations.googleapis.com/v1",rs="google.c.a.c_id",Vc="google.c.a.c_l",Uc="google.c.a.ts",Kc="google.c.a.e";var mi;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(mi||(mi={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var At;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(At||(At={}));/**
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
 */function P(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Wc(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}/**
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
 */const Re="fcm_token_details_db",zc=5,yi="fcm_token_object_Store";async function qc(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Re))return null;let e=null;return(await ns(Re,zc,{upgrade:async(i,r,s,o)=>{var a;if(r<2||!i.objectStoreNames.contains(yi))return;const c=o.objectStore(yi),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(r===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:P(l.vapidKey)}}}else if(r===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:P(l.auth),p256dh:P(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:P(l.vapidKey)}}}else if(r===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:P(l.auth),p256dh:P(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:P(l.vapidKey)}}}}}})).close(),await Oe(Re),await Oe("fcm_vapid_details_db"),await Oe("undefined"),Gc(e)?e:null}function Gc(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Xc="firebase-messaging-database",Jc=1,tt="firebase-messaging-store";let Be=null;function Nn(){return Be||(Be=ns(Xc,Jc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tt)}}})),Be}async function ss(t){const e=$n(t),i=await(await Nn()).transaction(tt).objectStore(tt).get(e);if(i)return i;{const r=await qc(t.appConfig.senderId);if(r)return await jn(t,r),r}}async function jn(t,e){const n=$n(t),r=(await Nn()).transaction(tt,"readwrite");return await r.objectStore(tt).put(e,n),await r.done,e}async function Yc(t){const e=$n(t),i=(await Nn()).transaction(tt,"readwrite");await i.objectStore(tt).delete(e),await i.done}function $n({appConfig:t}){return t.appId}/**
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
 */const Zc={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},T=new Wt("messaging","Messaging",Zc);/**
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
 */async function Qc(t,e){const n=await xn(t),i=as(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(Ln(t.appConfig),r)).json()}catch(o){throw T.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw T.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw T.create("token-subscribe-no-token");return s.token}async function th(t,e){const n=await xn(t),i=as(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${Ln(t.appConfig)}/${e.token}`,r)).json()}catch(o){throw T.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw T.create("token-update-failed",{errorInfo:o})}if(!s.token)throw T.create("token-update-no-token");return s.token}async function os(t,e){const i={method:"DELETE",headers:await xn(t)};try{const s=await(await fetch(`${Ln(t.appConfig)}/${e}`,i)).json();if(s.error){const o=s.error.message;throw T.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw T.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Ln({projectId:t}){return`${Hc}/projects/${t}/registrations`}async function xn({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function as({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==is&&(r.web.applicationPubKey=i),r}/**
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
 */const eh=10080*60*1e3;async function nh(t){const e=await sh(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:P(e.getKey("auth")),p256dh:P(e.getKey("p256dh"))},i=await ss(t.firebaseDependencies);if(i){if(oh(i.subscriptionOptions,n))return Date.now()>=i.createTime+eh?rh(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await os(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return vi(t.firebaseDependencies,n)}else return vi(t.firebaseDependencies,n)}async function ih(t){const e=await ss(t.firebaseDependencies);e&&(await os(t.firebaseDependencies,e.token),await Yc(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function rh(t,e){try{const n=await th(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await jn(t.firebaseDependencies,i),n}catch(n){throw await ih(t),n}}async function vi(t,e){const i={token:await Qc(t,e),createTime:Date.now(),subscriptionOptions:e};return await jn(t,i),i.token}async function sh(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Wc(e)})}function oh(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ah(e,t),ch(e,t),hh(e,t),e}function ah(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r);const s=e.notification.icon;s&&(t.notification.icon=s)}function ch(t,e){e.data&&(t.data=e.data)}function hh(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(r=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function uh(t){return typeof t=="object"&&!!t&&rs in t}/**
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
 */cs("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");cs("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function cs(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}/**
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
 */function lh(t){if(!t||!t.options)throw Pe("App Configuration Object");if(!t.name)throw Pe("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw Pe(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Pe(t){return T.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=lh(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(t){try{t.swRegistration=await navigator.serviceWorker.register(xc,{scope:Fc}),t.swRegistration.update().catch(()=>{})}catch(e){throw T.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ph(t,e){if(!e&&!t.swRegistration&&await dh(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw T.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=is)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(t,e){if(!navigator)throw T.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw T.create("permission-blocked");return await gh(t,e==null?void 0:e.vapidKey),await ph(t,e==null?void 0:e.serviceWorkerRegistration),nh(t)}/**
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
 */async function yh(t,e,n){const i=vh(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[rs],message_name:n[Vc],message_time:n[Uc],message_device_time:Math.floor(Date.now()/1e3)})}function vh(t){switch(t){case At.NOTIFICATION_CLICKED:return"notification_open";case At.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function wh(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===At.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(wi(n)):t.onMessageHandler.next(wi(n)));const i=n.data;uh(i)&&i[Kc]==="1"&&await yh(t,n.messageType,i)}const Ei="@firebase/messaging",Ii="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=t=>{const e=new fh(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>wh(e,n)),e},Ih=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:i=>mh(e,i)}};function Sh(){Y(new H("messaging",Eh,"PUBLIC")),Y(new H("messaging-internal",Ih,"PRIVATE")),G(Ei,Ii),G(Ei,Ii,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(){try{await Ci()}catch{return!1}return typeof window<"u"&&_i()&&vs()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Gh(t=To()){return bh().then(e=>{if(!e)throw T.create("unsupported-browser")},e=>{throw T.create("indexed-db-unsupported")}),an(Ts(t),"messaging").getImmediate()}Sh();export{bo as A,bh as B,H as C,Gh as D,Wt as E,ct as F,jh as G,qh as I,Bs as L,zh as M,Nh as S,Kh as W,Wh as X,Y as _,Ch as a,_h as b,Ts as c,Ph as d,p as e,Di as f,Ah as g,fs as h,Dh as i,an as j,Th as k,To as l,Ne as m,kh as n,Oh as o,Rh as p,Mh as q,G as r,Bh as s,Fh as t,xh as u,$h as v,Lh as w,Uh as x,Hh as y,Vh as z};
