import{L as Zr,I as Se,_ as ei,C as ti,r as Jn,F as ni,e as $e,j as si,m as ri,c as J,M as ii,S as oi,X as ai,t as ui,u as jt,v as ci,w as li,x as hi,W as dt,y as di,z as Zn}from"./firebase-shared-DSZHfooc.js";const es="@firebase/firestore";/**
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
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
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
 */let Re="9.23.0";/**
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
 */const me=new Zr("@firebase/firestore");function ts(){return me.logLevel}function y(s,...e){if(me.logLevel<=$e.DEBUG){const t=e.map(ln);me.debug(`Firestore (${Re}): ${s}`,...t)}}function re(s,...e){if(me.logLevel<=$e.ERROR){const t=e.map(ln);me.error(`Firestore (${Re}): ${s}`,...t)}}function Ke(s,...e){if(me.logLevel<=$e.WARN){const t=e.map(ln);me.warn(`Firestore (${Re}): ${s}`,...t)}}function ln(s){if(typeof s=="string")return s;try{return e=s,JSON.stringify(e)}catch{return s}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
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
 */function v(s="Unexpected state"){const e=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: `+s;throw re(e),new Error(e)}function b(s,e){s||v()}function I(s,e){return s}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends ni{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class te{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class fi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(W.UNAUTHENTICATED)))}shutdown(){}}class gi{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new te,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new te)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(b(typeof n.accessToken=="string"),new fi(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(e===null||typeof e=="string"),new W(e)}}class pi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new pi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(W.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(b(typeof t.token=="string"),this.T=t.token,new wi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ps{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ei(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function D(s,e){return s<e?-1:s>e?1:0}function De(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
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
 */class L{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new L(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class E{constructor(e){this.timestamp=e}static fromTimestamp(e){return new E(e)}static min(){return new E(new L(0,0))}static max(){return new E(new L(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ge{constructor(e,t,n){t===void 0?t=0:t>e.length&&v(),n===void 0?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ge?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class k extends Ge{construct(e,t,n){return new k(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new g(d.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new k(t)}static emptyPath(){return new k([])}}const Ti=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends Ge{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return Ti.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new g(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new g(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new g(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(i(),r++)}if(i(),o)throw new g(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(k.fromString(e))}static fromName(e){return new w(k.fromString(e).popFirst(5))}static empty(){return new w(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&k.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return k.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new k(e.slice()))}}function Ii(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=E.fromTimestamp(n===1e9?new L(t+1,0):new L(t,n));return new ce(r,w.empty(),e)}function Ci(s){return new ce(s.readTime,s.key,-1)}class ce{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ce(E.min(),w.empty(),-1)}static max(){return new ce(E.max(),w.empty(),-1)}}function Si(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(s.documentKey,e.documentKey),t!==0?t:D(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ni{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ze(s){if(s.code!==d.FAILED_PRECONDITION||s.message!==Ai)throw s;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):m.reject(t)}static resolve(e){return new m(((t,n)=>{t(e)}))}static reject(e){return new m(((t,n)=>{n(e)}))}static waitFor(e){return new m(((t,n)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(u=>n(u)))})),o=!0,i===r&&t()}))}static or(e){let t=m.resolve(!1);for(const n of e)t=t.next((r=>r?m.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new m(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>r(l)))}}))}static doWhile(e,t){return new m(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function et(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class hn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ot(n),this.ut=n=>t.writeSequenceNumber(n))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}hn.ct=-1;function tt(s){return s==null}function Tt(s){return s===0&&1/s==-1/0}function Di(s){return typeof s=="number"&&Number.isInteger(s)&&!Tt(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */function ns(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function we(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Us(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class _{constructor(e,t){this.comparator=e,this.root=t||U.EMPTY}insert(e,t){return new _(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,U.BLACK,null,null))}remove(e){return new _(this.comparator,this.root.remove(e,this.comparator).copy(null,null,U.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ft(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ft(this.root,e,this.comparator,!1)}getReverseIterator(){return new ft(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ft(this.root,e,this.comparator,!0)}}class ft{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class U{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??U.RED,this.left=r??U.EMPTY,this.right=i??U.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new U(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return U.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(s,e,t,n,r){return this}insert(s,e,t){return new U(s,e)}remove(s,e){return this}isEmpty(){return!0}inorderTraversal(s){return!1}reverseTraversal(s){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class K{constructor(e){this.comparator=e,this.data=new _(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ss(this.data.getIterator())}getIteratorFrom(e){return new ss(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof K)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new K(this.comparator);return t.data=e,t}}class ss{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new Y([])}unionWith(e){let t=new K($.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Y(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return De(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class qs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(n){try{return atob(n)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new qs("Invalid base64 string: "+r):r}})(e);return new G(t)}static fromUint8Array(e){const t=(function(n){let r="";for(let i=0;i<n.length;++i)r+=String.fromCharCode(n[i]);return r})(e);return new G(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const bi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function le(s){if(b(!!s),typeof s=="string"){let e=0;const t=bi.exec(s);if(b(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:R(s.seconds),nanos:R(s.nanos)}}function R(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function ge(s){return typeof s=="string"?G.fromBase64String(s):G.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fn(s){const e=s.mapValue.fields.__previous_value__;return dn(e)?fn(e):e}function Qe(s){const e=le(s.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}/**
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
 */class ki{constructor(e,t,n,r,i,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class je{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof je&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={mapValue:{}};function pe(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?dn(s)?4:_i(s)?9007199254740991:10:v()}function ne(s,e){if(s===e)return!0;const t=pe(s);if(t!==pe(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Qe(s).isEqual(Qe(e));case 3:return(function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const i=le(n.timestampValue),o=le(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(n,r){return ge(n.bytesValue).isEqual(ge(r.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(n,r){return R(n.geoPointValue.latitude)===R(r.geoPointValue.latitude)&&R(n.geoPointValue.longitude)===R(r.geoPointValue.longitude)})(s,e);case 2:return(function(n,r){if("integerValue"in n&&"integerValue"in r)return R(n.integerValue)===R(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const i=R(n.doubleValue),o=R(r.doubleValue);return i===o?Tt(i)===Tt(o):isNaN(i)&&isNaN(o)}return!1})(s,e);case 9:return De(s.arrayValue.values||[],e.arrayValue.values||[],ne);case 10:return(function(n,r){const i=n.mapValue.fields||{},o=r.mapValue.fields||{};if(ns(i)!==ns(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ne(i[a],o[a])))return!1;return!0})(s,e);default:return v()}}function We(s,e){return(s.values||[]).find((t=>ne(t,e)))!==void 0}function be(s,e){if(s===e)return 0;const t=pe(s),n=pe(e);if(t!==n)return D(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(s.booleanValue,e.booleanValue);case 2:return(function(r,i){const o=R(r.integerValue||r.doubleValue),a=R(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1})(s,e);case 3:return rs(s.timestampValue,e.timestampValue);case 4:return rs(Qe(s),Qe(e));case 5:return D(s.stringValue,e.stringValue);case 6:return(function(r,i){const o=ge(r),a=ge(i);return o.compareTo(a)})(s.bytesValue,e.bytesValue);case 7:return(function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=D(o[u],a[u]);if(c!==0)return c}return D(o.length,a.length)})(s.referenceValue,e.referenceValue);case 8:return(function(r,i){const o=D(R(r.latitude),R(i.latitude));return o!==0?o:D(R(r.longitude),R(i.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return(function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=be(o[u],a[u]);if(c)return c}return D(o.length,a.length)})(s.arrayValue,e.arrayValue);case 10:return(function(r,i){if(r===mt.mapValue&&i===mt.mapValue)return 0;if(r===mt.mapValue)return 1;if(i===mt.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=D(a[l],c[l]);if(h!==0)return h;const f=be(o[a[l]],u[c[l]]);if(f!==0)return f}return D(a.length,c.length)})(s.mapValue,e.mapValue);default:throw v()}}function rs(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return D(s,e);const t=le(s),n=le(e),r=D(t.seconds,n.seconds);return r!==0?r:D(t.nanos,n.nanos)}function ke(s){return Xt(s)}function Xt(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(n){const r=le(n);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?ge(s.bytesValue).toBase64():"referenceValue"in s?(t=s.referenceValue,w.fromName(t).toString()):"geoPointValue"in s?`geo(${(e=s.geoPointValue).latitude},${e.longitude})`:"arrayValue"in s?(function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Xt(o);return r+"]"})(s.arrayValue):"mapValue"in s?(function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Xt(n.fields[a])}`;return i+"}"})(s.mapValue):v();var e,t}function is(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Jt(s){return!!s&&"integerValue"in s}function mn(s){return!!s&&"arrayValue"in s}function os(s){return!!s&&"nullValue"in s}function as(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function yt(s){return!!s&&"mapValue"in s}function Pe(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return we(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Pe(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pe(s.arrayValue.values[t]);return e}return Object.assign({},s)}function _i(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Q{constructor(e){this.value=e}static empty(){return new Q({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!yt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pe(t)}setAll(e){let t=$.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=Pe(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());yt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ne(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];yt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){we(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new Q(Pe(this.value))}}function Bs(s){const e=[];return we(s.fields,((t,n)=>{const r=new $([t]);if(yt(n)){const i=Bs(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Y(e)}/**
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
 */class P{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new P(e,0,E.min(),E.min(),E.min(),Q.empty(),0)}static newFoundDocument(e,t,n,r){return new P(e,1,t,E.min(),n,r,0)}static newNoDocument(e,t){return new P(e,2,t,E.min(),E.min(),Q.empty(),0)}static newUnknownDocument(e,t){return new P(e,3,t,E.min(),E.min(),Q.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(E.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Q.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Q.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=E.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof P&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new P(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class It{constructor(e,t){this.position=e,this.inclusive=t}}function us(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=w.comparator(w.fromName(o.referenceValue),t.key):n=be(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function cs(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!ne(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ue{constructor(e,t="asc"){this.field=e,this.dir=t}}function xi(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class zs{}class F extends zs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Fi(e,t,n):t==="array-contains"?new Vi(e,n):t==="in"?new Oi(e,n):t==="not-in"?new Pi(e,n):t==="array-contains-any"?new Ui(e,n):new F(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Li(e,n):new Mi(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(be(t,this.value)):t!==null&&pe(this.value)===pe(t)&&this.matchesComparison(be(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Z extends zs{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Z(e,t)}matches(e){return $s(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((t=>t.isInequality()));return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function $s(s){return s.op==="and"}function Ks(s){return Ri(s)&&$s(s)}function Ri(s){for(const e of s.filters)if(e instanceof Z)return!1;return!0}function Zt(s){if(s instanceof F)return s.field.canonicalString()+s.op.toString()+ke(s.value);if(Ks(s))return s.filters.map((e=>Zt(e))).join(",");{const e=s.filters.map((t=>Zt(t))).join(",");return`${s.op}(${e})`}}function Gs(s,e){return s instanceof F?(function(t,n){return n instanceof F&&t.op===n.op&&t.field.isEqual(n.field)&&ne(t.value,n.value)})(s,e):s instanceof Z?(function(t,n){return n instanceof Z&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce(((r,i,o)=>r&&Gs(i,n.filters[o])),!0):!1})(s,e):void v()}function Qs(s){return s instanceof F?(function(e){return`${e.field.canonicalString()} ${e.op} ${ke(e.value)}`})(s):s instanceof Z?(function(e){return e.op.toString()+" {"+e.getFilters().map(Qs).join(" ,")+"}"})(s):"Filter"}class Fi extends F{constructor(e,t,n){super(e,t,n),this.key=w.fromName(n.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class Li extends F{constructor(e,t){super(e,"in",t),this.keys=js("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Mi extends F{constructor(e,t){super(e,"not-in",t),this.keys=js("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function js(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>w.fromName(n.referenceValue)))}class Vi extends F{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mn(t)&&We(t.arrayValue,this.value)}}class Oi extends F{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&We(this.value.arrayValue,t)}}class Pi extends F{constructor(e,t){super(e,"not-in",t)}matches(e){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!We(this.value.arrayValue,t)}}class Ui extends F{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>We(this.value.arrayValue,n)))}}/**
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
 */class qi{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function ls(s,e=null,t=[],n=[],r=null,i=null,o=null){return new qi(s,e,t,n,r,i,o)}function gn(s){const e=I(s);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Zt(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(r){return r.field.canonicalString()+r.dir})(n))).join(","),tt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>ke(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>ke(n))).join(",")),e.dt=t}return e.dt}function pn(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!xi(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Gs(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!cs(s.startAt,e.startAt)&&cs(s.endAt,e.endAt)}function en(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class nt{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Bi(s,e,t,n,r,i,o,a){return new nt(s,e,t,n,r,i,o,a)}function _t(s){return new nt(s)}function hs(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Ws(s){return s.explicitOrderBy.length>0?s.explicitOrderBy[0].field:null}function yn(s){for(const e of s.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Hs(s){return s.collectionGroup!==null}function Ae(s){const e=I(s);if(e.wt===null){e.wt=[];const t=yn(e),n=Ws(e);if(t!==null&&n===null)t.isKeyField()||e.wt.push(new Ue(t)),e.wt.push(new Ue($.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ue($.keyField(),i))}}}return e.wt}function ie(s){const e=I(s);if(!e._t)if(e.limitType==="F")e._t=ls(e.path,e.collectionGroup,Ae(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ae(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Ue(i.field,o))}const n=e.endAt?new It(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new It(e.startAt.position,e.startAt.inclusive):null;e._t=ls(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function tn(s,e){e.getFirstInequalityField(),yn(s);const t=s.filters.concat([e]);return new nt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function nn(s,e,t){return new nt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function xt(s,e){return pn(ie(s),ie(e))&&s.limitType===e.limitType}function Ys(s){return`${gn(ie(s))}|lt:${s.limitType}`}function sn(s){return`Query(target=${(function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((n=>Qs(n))).join(", ")}]`),tt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((n=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(n))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>ke(n))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>ke(n))).join(",")),`Target(${t})`})(ie(s))}; limitType=${s.limitType})`}function Rt(s,e){return e.isFoundDocument()&&(function(t,n){const r=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):w.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)})(s,e)&&(function(t,n){for(const r of Ae(t))if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0})(s,e)&&(function(t,n){for(const r of t.filters)if(!r.matches(n))return!1;return!0})(s,e)&&(function(t,n){return!(t.startAt&&!(function(r,i,o){const a=us(r,i,o);return r.inclusive?a<=0:a<0})(t.startAt,Ae(t),n)||t.endAt&&!(function(r,i,o){const a=us(r,i,o);return r.inclusive?a>=0:a>0})(t.endAt,Ae(t),n))})(s,e)}function zi(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Xs(s){return(e,t)=>{let n=!1;for(const r of Ae(s)){const i=$i(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function $i(s,e,t){const n=s.field.isKeyField()?w.comparator(e.key,t.key):(function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?be(a,u):v()})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return v()}}/**
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
 */class Fe{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){we(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Us(this.inner)}size(){return this.innerSize}}/**
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
 */const Ki=new _(w.comparator);function oe(){return Ki}const Js=new _(w.comparator);function Ve(...s){let e=Js;for(const t of s)e=e.insert(t.key,t);return e}function Zs(s){let e=Js;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function fe(){return qe()}function er(){return qe()}function qe(){return new Fe((s=>s.toString()),((s,e)=>s.isEqual(e)))}const Gi=new _(w.comparator),Qi=new K(w.comparator);function A(...s){let e=Qi;for(const t of s)e=e.add(t);return e}const ji=new K(D);function Wi(){return ji}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tt(e)?"-0":e}}function nr(s){return{integerValue:""+s}}function Hi(s,e){return Di(e)?nr(e):tr(s,e)}/**
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
 */class Ft{constructor(){this._=void 0}}function Yi(s,e,t){return s instanceof He?(function(n,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&dn(r)&&(r=fn(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}})(t,e):s instanceof Ye?rr(s,e):s instanceof Xe?ir(s,e):(function(n,r){const i=sr(n,r),o=ds(i)+ds(n.gt);return Jt(i)&&Jt(n.gt)?nr(o):tr(n.serializer,o)})(s,e)}function Xi(s,e,t){return s instanceof Ye?rr(s,e):s instanceof Xe?ir(s,e):t}function sr(s,e){return s instanceof Ct?Jt(t=e)||(function(n){return!!n&&"doubleValue"in n})(t)?e:{integerValue:0}:null;var t}class He extends Ft{}class Ye extends Ft{constructor(e){super(),this.elements=e}}function rr(s,e){const t=or(e);for(const n of s.elements)t.some((r=>ne(r,n)))||t.push(n);return{arrayValue:{values:t}}}class Xe extends Ft{constructor(e){super(),this.elements=e}}function ir(s,e){let t=or(e);for(const n of s.elements)t=t.filter((r=>!ne(r,n)));return{arrayValue:{values:t}}}class Ct extends Ft{constructor(e,t){super(),this.serializer=e,this.gt=t}}function ds(s){return R(s.integerValue||s.doubleValue)}function or(s){return mn(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class Ji{constructor(e,t){this.field=e,this.transform=t}}function Zi(s,e){return s.field.isEqual(e.field)&&(function(t,n){return t instanceof Ye&&n instanceof Ye||t instanceof Xe&&n instanceof Xe?De(t.elements,n.elements,ne):t instanceof Ct&&n instanceof Ct?ne(t.gt,n.gt):t instanceof He&&n instanceof He})(s.transform,e.transform)}class eo{constructor(e,t){this.version=e,this.transformResults=t}}class q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new q}static exists(e){return new q(void 0,e)}static updateTime(e){return new q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wt(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Lt{}function ar(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Mt(s.key,q.none()):new st(s.key,s.data,q.none());{const t=s.data,n=Q.empty();let r=new K($.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new de(s.key,n,new Y(r.toArray()),q.none())}}function to(s,e,t){s instanceof st?(function(n,r,i){const o=n.value.clone(),a=ms(n.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()})(s,e,t):s instanceof de?(function(n,r,i){if(!wt(n.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ms(n.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ur(n)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()})(s,e,t):(function(n,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()})(0,e,t)}function Be(s,e,t,n){return s instanceof st?(function(r,i,o,a){if(!wt(r.precondition,i))return o;const u=r.value.clone(),c=gs(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null})(s,e,t,n):s instanceof de?(function(r,i,o,a){if(!wt(r.precondition,i))return o;const u=gs(r.fieldTransforms,a,i),c=i.data;return c.setAll(ur(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((l=>l.field)))})(s,e,t,n):(function(r,i,o){return wt(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o})(s,e,t)}function no(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=sr(n.transform,r||null);i!=null&&(t===null&&(t=Q.empty()),t.set(n.field,i))}return t||null}function fs(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&De(t,n,((r,i)=>Zi(r,i)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class st extends Lt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class de extends Lt{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ur(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function ms(s,e,t){const n=new Map;b(s.length===t.length);for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,a=e.data.field(i.field);n.set(i.field,Xi(o,a,t[r]))}return n}function gs(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,Yi(i,o,e))}return n}class Mt extends Lt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cr extends Lt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class so{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&to(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Be(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Be(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=er();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const u=ar(o,a);u!==null&&n.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(E.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),A())}isEqual(e){return this.batchId===e.batchId&&De(this.mutations,e.mutations,((t,n)=>fs(t,n)))&&De(this.baseMutations,e.baseMutations,((t,n)=>fs(t,n)))}}class wn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=Gi;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new wn(e,t,n,r)}}/**
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
 */class ro{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class io{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var x,N;function lr(s){switch(s){default:return v();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function hr(s){if(s===void 0)return re("GRPC error has no .code"),d.UNKNOWN;switch(s){case x.OK:return d.OK;case x.CANCELLED:return d.CANCELLED;case x.UNKNOWN:return d.UNKNOWN;case x.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case x.INTERNAL:return d.INTERNAL;case x.UNAVAILABLE:return d.UNAVAILABLE;case x.UNAUTHENTICATED:return d.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case x.NOT_FOUND:return d.NOT_FOUND;case x.ALREADY_EXISTS:return d.ALREADY_EXISTS;case x.PERMISSION_DENIED:return d.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case x.ABORTED:return d.ABORTED;case x.OUT_OF_RANGE:return d.OUT_OF_RANGE;case x.UNIMPLEMENTED:return d.UNIMPLEMENTED;case x.DATA_LOSS:return d.DATA_LOSS;default:return v()}}(N=x||(x={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class vn{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gt}static getOrCreateInstance(){return gt===null&&(gt=new vn),gt}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let gt=null;/**
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
 */function oo(){return new TextEncoder}/**
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
 */const ao=new Se([4294967295,4294967295],0);function ps(s){const e=oo().encode(s),t=new ii;return t.update(e),new Uint8Array(t.digest())}function ys(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Se([t,n],0),new Se([r,i],0)]}class En{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Oe(`Invalid padding: ${t}`);if(n<0)throw new Oe(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Oe(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Oe(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Se.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Se.fromNumber(n)));return r.compare(ao)===1&&(r=new Se([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=ps(e),[n,r]=ys(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(n,r,i);if(!this.At(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new En(i,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.It===0)return;const t=ps(e),[n,r]=ys(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(n,r,i);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Oe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vt{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,rt.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vt(E.min(),r,new _(D),oe(),A())}}class rt{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new rt(n,t,A(),A(),A())}}/**
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
 */class vt{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class dr{constructor(e,t){this.targetId=e,this.Vt=t}}class fr{constructor(e,t,n=G.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ws{constructor(){this.St=0,this.Dt=Es(),this.Ct=G.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=A(),t=A(),n=A();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}})),new rt(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Es()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class uo{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=oe(),this.zt=vs(),this.Wt=new _(D)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:v()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((n,r)=>{this.te(r)&&t(r)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const o=i.target;if(en(o))if(r===0){const a=new w(o.path);this.Yt(n,a,P.newNoDocument(a,E.min()))}else b(r===1);else{const a=this.ie(n);if(a!==r){const u=this.re(e,a);if(u!==0){this.ee(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,c)}(t=vn.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch((function(c,l,h){var f,p,C,S,T,M;const V={localCacheCount:l,existenceFilterCount:h.count},j=h.unchangedNames;return j&&(V.bloomFilter={applied:c===0,hashCount:(f=j==null?void 0:j.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(S=(C=(p=j==null?void 0:j.bits)===null||p===void 0?void 0:p.bitmap)===null||C===void 0?void 0:C.length)!==null&&S!==void 0?S:0,padding:(M=(T=j==null?void 0:j.bits)===null||T===void 0?void 0:T.padding)!==null&&M!==void 0?M:0}),V})(u,a,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=n;let u,c;try{u=ge(i).toUint8Array()}catch(l){if(l instanceof qs)return Ke("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{c=new En(u,o,a)}catch(l){return Ke(l instanceof Oe?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return c.It===0?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.vt(a)||(this.Yt(e,i,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((i,o)=>{const a=this.se(o);if(a){if(i.current&&en(a.target)){const u=new w(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,P.newNoDocument(u,e))}i.Mt&&(t.set(o,i.Ot()),i.Ft())}}));let n=A();this.zt.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.jt.forEach(((i,o)=>o.setReadTime(e)));const r=new Vt(e,t,this.Wt,this.jt,n);return this.jt=oe(),this.zt=vs(),this.Wt=new _(D),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new ws,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new K(D),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ws),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function vs(){return new _(w.comparator)}function Es(){return new _(w.comparator)}const co={asc:"ASCENDING",desc:"DESCENDING"},lo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ho={and:"AND",or:"OR"};class fo{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rn(s,e){return s.useProto3Json||tt(e)?e:{value:e}}function St(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mr(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function mo(s,e){return St(s,e.toTimestamp())}function X(s){return b(!!s),E.fromTimestamp((function(e){const t=le(e);return new L(t.seconds,t.nanos)})(s))}function Tn(s,e){return(function(t){return new k(["projects",t.projectId,"databases",t.database])})(s).child("documents").child(e).canonicalString()}function gr(s){const e=k.fromString(s);return b(Er(e)),e}function At(s,e){return Tn(s.databaseId,e.path)}function ze(s,e){const t=gr(e);if(t.get(1)!==s.databaseId.projectId)throw new g(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new g(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new w(pr(t))}function on(s,e){return Tn(s.databaseId,e)}function go(s){const e=gr(s);return e.length===4?k.emptyPath():pr(e)}function Je(s){return new k(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function pr(s){return b(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function Ts(s,e,t){return{name:At(s,e),fields:t.value.mapValue.fields}}function po(s,e){return"found"in e?(function(t,n){b(!!n.found),n.found.name,n.found.updateTime;const r=ze(t,n.found.name),i=X(n.found.updateTime),o=n.found.createTime?X(n.found.createTime):E.min(),a=new Q({mapValue:{fields:n.found.fields}});return P.newFoundDocument(r,i,o,a)})(s,e):"missing"in e?(function(t,n){b(!!n.missing),b(!!n.readTime);const r=ze(t,n.missing),i=X(n.readTime);return P.newNoDocument(r,i)})(s,e):v()}function yo(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:v()})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,c){return u.useProto3Json?(b(c===void 0||typeof c=="string"),G.fromBase64String(c||"")):(b(c===void 0||c instanceof Uint8Array),G.fromUint8Array(c||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const c=u.code===void 0?d.UNKNOWN:hr(u.code);return new g(c,u.message||"")})(o);t=new fr(n,r,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=ze(s,n.document.name),i=X(n.document.updateTime),o=n.document.createTime?X(n.document.createTime):E.min(),a=new Q({mapValue:{fields:n.document.fields}}),u=P.newFoundDocument(r,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new vt(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=ze(s,n.document),i=n.readTime?X(n.readTime):E.min(),o=P.newNoDocument(r,i),a=n.removedTargetIds||[];t=new vt([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=ze(s,n.document),i=n.removedTargetIds||[];t=new vt([],i,r,null)}else{if(!("filter"in e))return v();{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new io(r,i),a=n.targetId;t=new dr(a,o)}}return t}function yr(s,e){let t;if(e instanceof st)t={update:Ts(s,e.key,e.value)};else if(e instanceof Mt)t={delete:At(s,e.key)};else if(e instanceof de)t={update:Ts(s,e.key,e.data),updateMask:No(e.fieldMask)};else{if(!(e instanceof cr))return v();t={verify:At(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(r,i){const o=i.transform;if(o instanceof He)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ye)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xe)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ct)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw v()})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(n,r){return r.updateTime!==void 0?{updateTime:mo(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:v()})(s,e.precondition)),t}function wo(s,e){return s&&s.length>0?(b(e!==void 0),s.map((t=>(function(n,r){let i=n.updateTime?X(n.updateTime):X(r);return i.isEqual(E.min())&&(i=X(r)),new eo(i,n.transformResults||[])})(t,e)))):[]}function vo(s,e){return{documents:[on(s,e.path)]}}function Eo(s,e){const t={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(t.parent=on(s,n),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=on(s,n.popLast()),t.structuredQuery.from=[{collectionId:n.lastSegment()}]);const r=(function(u){if(u.length!==0)return vr(Z.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const i=(function(u){if(u.length!==0)return u.map((c=>(function(l){return{field:Te(l.field),direction:Co(l.dir)}})(c)))})(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=rn(s,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),t}function To(s){let e=go(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){b(n===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(l){const h=wr(l);return h instanceof Z&&Ks(h)?h.getFilters():[h]})(t.where));let o=[];t.orderBy&&(o=t.orderBy.map((l=>(function(h){return new Ue(Ie(h.field),(function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(h.direction))})(l))));let a=null;t.limit&&(a=(function(l){let h;return h=typeof l=="object"?l.value:l,tt(h)?null:h})(t.limit));let u=null;t.startAt&&(u=(function(l){const h=!!l.before,f=l.values||[];return new It(f,h)})(t.startAt));let c=null;return t.endAt&&(c=(function(l){const h=!l.before,f=l.values||[];return new It(f,h)})(t.endAt)),Bi(e,r,o,i,a,"F",u,c)}function Io(s,e){const t=(function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wr(s){return s.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ie(e.unaryFilter.field);return F.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ie(e.unaryFilter.field);return F.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ie(e.unaryFilter.field);return F.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ie(e.unaryFilter.field);return F.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}})(s):s.fieldFilter!==void 0?(function(e){return F.create(Ie(e.fieldFilter.field),(function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}})(e.fieldFilter.op),e.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(e){return Z.create(e.compositeFilter.filters.map((t=>wr(t))),(function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}})(e.compositeFilter.op))})(s):v()}function Co(s){return co[s]}function So(s){return lo[s]}function Ao(s){return ho[s]}function Te(s){return{fieldPath:s.canonicalString()}}function Ie(s){return $.fromServerFormat(s.fieldPath)}function vr(s){return s instanceof F?(function(e){if(e.op==="=="){if(as(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(os(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(as(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(os(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:So(e.op),value:e.value}}})(s):s instanceof Z?(function(e){const t=e.getFilters().map((n=>vr(n)));return t.length===1?t[0]:{compositeFilter:{op:Ao(e.op),filters:t}}})(s):v()}function No(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Er(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class ae{constructor(e,t,n,r,i=E.min(),o=E.min(),a=G.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ae(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Do{constructor(e){this.fe=e}}function bo(s){const e=To({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?nn(e,e.limit,"L"):e}/**
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
 */class ko{constructor(){this.rn=new _o}addToCollectionParentIndex(e,t){return this.rn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(ce.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(ce.min())}updateCollectionGroup(e,t,n){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class _o{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new K(k.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new K(k.comparator)).toArray()}}/**
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
 */class _e{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new _e(0)}static Mn(){return new _e(-1)}}/**
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
 */class xo{constructor(){this.changes=new Fe((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,P.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?m.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ro{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Fo{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&Be(n.mutation,r,Y.empty(),L.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,A()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=A()){const r=fe();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=Ve();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=fe();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,A())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let i=oe();const o=qe(),a=qe();return t.forEach(((u,c)=>{const l=n.get(c.key);r.has(c.key)&&(l===void 0||l.mutation instanceof de)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Be(l.mutation,c,l.mutation.getFieldMask(),L.now())):o.set(c.key,Y.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),t.forEach(((c,l)=>{var h;return a.set(c,new Ro(l,(h=o.get(c))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=qe();let r=new _(((o,a)=>o-a)),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||Y.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(r.get(a.batchId)||A()).add(u);r=r.insert(a.batchId,h)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=er();l.forEach((f=>{if(!i.has(f)){const p=ar(t.get(f),n.get(f));p!==null&&h.set(f,p),i=i.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return m.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n){return(function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):m.resolve(fe());let a=-1,u=i;return o.next((c=>m.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next((f=>{u=u.insert(l,f)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,A()))).next((l=>({batchId:a,changes:Zs(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next((n=>{let r=Ve();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ve();return this.indexManager.getCollectionParents(e,r).next((o=>m.forEach(o,(a=>{const u=(function(c,l){return new nt(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)})(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,n).next((c=>{c.forEach(((l,h)=>{i=i.insert(l,h)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((i=>{r.forEach(((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,P.newInvalidDocument(c)))}));let o=Ve();return i.forEach(((a,u)=>{const c=r.get(a);c!==void 0&&Be(c.mutation,u,Y.empty(),L.now()),Rt(t,u)&&(o=o.insert(a,u))})),o}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return m.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:X(n.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,(function(n){return{name:n.name,query:bo(n.bundledQuery),readTime:X(n.readTime)}})(t)),m.resolve()}}/**
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
 */class Mo{constructor(){this.overlays=new _(w.comparator),this.ls=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const n=fe();return m.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.we(e,t,i)})),m.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.ls.delete(n)),m.resolve()}getOverlaysForCollection(e,t,n){const r=fe(),i=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&r.set(u.getKey(),u)}return m.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=fe(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=fe(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=r)););return m.resolve(a)}we(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ro(t,n));let i=this.ls.get(t);i===void 0&&(i=A(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}/**
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
 */class In{constructor(){this.fs=new K(O.ds),this.ws=new K(O._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new O(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.ys(new O(e,t))}ps(e,t){e.forEach((n=>this.removeReference(n,t)))}Is(e){const t=new w(new k([])),n=new O(t,e),r=new O(t,e+1),i=[];return this.ws.forEachInRange([n,r],(o=>{this.ys(o),i.push(o.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new w(new k([])),n=new O(t,e),r=new O(t,e+1);let i=A();return this.ws.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new O(e,0),n=this.fs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class O{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return w.comparator(e.key,t.key)||D(e.As,t.As)}static _s(e,t){return D(e.As,t.As)||w.comparator(e.key,t.key)}}/**
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
 */class Vo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new K(O.ds)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new so(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new O(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new O(t,0),r=new O(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(o=>{const a=this.Ps(o.As);i.push(a)})),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new K(D);return t.forEach((r=>{const i=new O(r,0),o=new O(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],(a=>{n=n.add(a.As)}))})),m.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;w.isDocumentKey(i)||(i=i.child(""));const o=new O(new w(i),0);let a=new K(D);return this.Rs.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)}),o),m.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach((n=>{const r=this.Ps(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){b(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Rs;return m.forEach(t.mutations,(r=>{const i=new O(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new O(t,0),r=this.Rs.firstAfterOrEqual(n);return m.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Oo{constructor(e){this.Ds=e,this.docs=new _(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return m.resolve(n?n.document.mutableCopy():P.newInvalidDocument(t))}getEntries(e,t){let n=oe();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():P.newInvalidDocument(r))})),m.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=oe();const o=t.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Si(Ci(l),n)<=0||(r.has(l.key)||Rt(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(e,t,n,r){v()}Cs(e,t){return m.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Po(this)}getSize(e){return m.resolve(this.size)}}class Po extends xo{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),m.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class Uo{constructor(e){this.persistence=e,this.xs=new Fe((t=>gn(t)),pn),this.lastRemoteSnapshotVersion=E.min(),this.highestTargetId=0,this.Ns=0,this.ks=new In,this.targetCount=0,this.Ms=_e.kn()}forEachTarget(e,t){return this.xs.forEach(((n,r)=>t(r))),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),m.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new _e(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Fn(t),m.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),m.waitFor(i).next((()=>r))}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return m.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),m.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),m.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),m.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return m.resolve(n)}containsKey(e,t){return m.resolve(this.ks.containsKey(t))}}/**
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
 */class qo{constructor(e,t){this.$s={},this.overlays={},this.Os=new hn(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Uo(this),this.indexManager=new ko,this.remoteDocumentCache=(function(n){return new Oo(n)})((n=>this.referenceDelegate.Ls(n))),this.serializer=new Do(t),this.qs=new Lo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mo,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Vo(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);const r=new Bo(this.Os.next());return this.referenceDelegate.Us(),n(r).next((i=>this.referenceDelegate.Ks(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Gs(e,t){return m.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Bo extends Ni{constructor(e){super(),this.currentSequenceNumber=e}}class Cn{constructor(e){this.persistence=e,this.Qs=new In,this.js=null}static zs(e){return new Cn(e)}get Ws(){if(this.js)return this.js;throw v()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),m.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),m.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((r=>this.Ws.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.Ws.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ws,(n=>{const r=w.fromPath(n);return this.Hs(e,r).next((i=>{i||t.removeEntry(r,E.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((n=>{n?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return m.or([()=>m.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
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
 */class Sn{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=A(),r=A();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sn(e,t.fromCache,n,r)}}/**
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
 */class zo{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((i=>i||this.Qi(e,t)))}Ki(e,t){if(hs(t))return m.resolve(null);let n=ie(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=nn(t,null,"F"),n=ie(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=A(...i);return this.Ui.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((u=>{const c=this.ji(t,a);return this.zi(t,c,o,u.readTime)?this.Ki(e,nn(t,null,"F")):this.Wi(e,c,t,u)}))))})))))}Gi(e,t,n,r){return hs(t)||r.isEqual(E.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const o=this.ji(t,i);return this.zi(t,o,n,r)?this.Qi(e,t):(ts()<=$e.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),sn(t)),this.Wi(e,o,t,Ii(r,-1)))}))}ji(e,t){let n=new K(Xs(e));return t.forEach(((r,i)=>{Rt(e,i)&&(n=n.add(i))})),n}zi(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return ts()<=$e.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",sn(t)),this.Ui.getDocumentsMatchingQuery(e,t,ce.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new _(D),this.Yi=new Fe((i=>gn(i)),pn),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fo(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Ko(s,e,t,n){return new $o(s,e,t,n)}async function Tr(s,e){const t=I(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.tr(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=A();for(const c of r){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next((c=>({er:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function Go(s,e){const t=I(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.Zi.newChangeBuffer({trackRemovals:!0});return(function(o,a,u,c){const l=u.batch,h=l.keys();let f=m.resolve();return h.forEach((p=>{f=f.next((()=>c.getEntry(a,p))).next((C=>{const S=u.docVersions.get(p);b(S!==null),C.version.compareTo(S)<0&&(l.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),c.addEntry(C)))}))})),f.next((()=>o.mutationQueue.removeMutationBatch(a,l)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function Ir(s){const e=I(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Qo(s,e){const t=I(s),n=e.snapshotVersion;let r=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});r=t.Ji;const a=[];e.targetChanges.forEach(((l,h)=>{const f=r.get(h);if(!f)return;a.push(t.Bs.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.Bs.addMatchingKeys(i,l.addedDocuments,h))));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(G.EMPTY_BYTE_STRING,E.min()).withLastLimboFreeSnapshotVersion(E.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,n)),r=r.insert(h,p),(function(C,S,T){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0})(f,p,l)&&a.push(t.Bs.updateTargetData(i,p))}));let u=oe(),c=A();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(jo(i,o,e.documentUpdates).next((l=>{u=l.nr,c=l.sr}))),!n.isEqual(E.min())){const l=t.Bs.getLastRemoteSnapshotVersion(i).next((h=>t.Bs.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return m.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.Ji=r,i)))}function jo(s,e,t){let n=A(),r=A();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=oe();return t.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(E.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{nr:o,sr:r}}))}function Wo(s,e){const t=I(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ho(s,e){const t=I(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.Bs.getTargetData(n,e).next((i=>i?(r=i,m.resolve(r)):t.Bs.allocateTargetId(n).next((o=>(r=new ae(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Bs.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Ji.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(n.targetId,n),t.Yi.set(e,n.targetId)),n}))}async function an(s,e,t){const n=I(s),r=n.Ji.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!et(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ji=n.Ji.remove(e),n.Yi.delete(r.target)}function Is(s,e,t){const n=I(s);let r=E.min(),i=A();return n.persistence.runTransaction("Execute query","readonly",(o=>(function(a,u,c){const l=I(a),h=l.Yi.get(c);return h!==void 0?m.resolve(l.Ji.get(h)):l.Bs.getTargetData(u,c)})(n,o,ie(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.Bs.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Hi.getDocumentsMatchingQuery(o,e,t?r:E.min(),t?i:A()))).next((a=>(Yo(n,zi(e),a),{documents:a,ir:i})))))}function Yo(s,e,t){let n=s.Xi.get(e)||E.min();t.forEach(((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),s.Xi.set(e,n)}class Cs{constructor(){this.activeTargetIds=Wi()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xo{constructor(){this.Hr=new Cs,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Cs,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jo{Yr(e){}shutdown(){}}/**
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
 */class Ss{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pt=null;function Wt(){return pt===null?pt=268435456+Math.round(2147483648*Math.random()):pt++,"0x"+pt.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ea{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const z="WebChannelConnection";class ta extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const o=Wt(),a=this.To(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,n);const u={};return this.Eo(u,r,i),this.Ao(e,a,u,n).then((c=>(y("RestConnection",`Received RPC '${e}' ${o}: `,c),c)),(c=>{throw Ke("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",n),c}))}vo(e,t,n,r,i,o){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Re,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r))}To(e,t){const n=Zo[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Wt();return new Promise(((o,a)=>{const u=new ai;u.setWithCredentials(!0),u.listenOnce(ui.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case jt.NO_ERROR:const l=u.getResponseJson();y(z,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case jt.TIMEOUT:y(z,`RPC '${e}' ${i} timed out`),a(new g(d.DEADLINE_EXCEEDED,"Request time out"));break;case jt.HTTP_ERROR:const h=u.getStatus();if(y(z,`RPC '${e}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const C=(function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(T)>=0?T:d.UNKNOWN})(p.status);a(new g(C,p.message))}else a(new g(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new g(d.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{y(z,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);y(z,`RPC '${e}' ${i} sending request:`,r),u.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Wt(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ci(),a=li(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new hi({})),this.Eo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=i.join("");y(z,`Creating RPC '${e}' stream ${r}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,p=!1;const C=new ea({ro:T=>{p?y(z,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(f||(y(z,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),y(z,`RPC '${e}' stream ${r} sending:`,T),h.send(T))},oo:()=>h.close()}),S=(T,M,V)=>{T.listen(M,(j=>{try{V(j)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return S(h,dt.EventType.OPEN,(()=>{p||y(z,`RPC '${e}' stream ${r} transport opened.`)})),S(h,dt.EventType.CLOSE,(()=>{p||(p=!0,y(z,`RPC '${e}' stream ${r} transport closed`),C.wo())})),S(h,dt.EventType.ERROR,(T=>{p||(p=!0,Ke(z,`RPC '${e}' stream ${r} transport errored:`,T),C.wo(new g(d.UNAVAILABLE,"The operation could not be completed")))})),S(h,dt.EventType.MESSAGE,(T=>{var M;if(!p){const V=T.data[0];b(!!V);const j=V,ee=j.error||((M=j[0])===null||M===void 0?void 0:M.error);if(ee){y(z,`RPC '${e}' stream ${r} received error:`,ee);const ht=ee.status;let Qt=(function(Jr){const Xn=x[Jr];if(Xn!==void 0)return hr(Xn)})(ht),Yn=ee.message;Qt===void 0&&(Qt=d.INTERNAL,Yn="Unknown error status: "+ht+" with message "+ee.message),p=!0,C.wo(new g(Qt,Yn)),h.close()}else y(z,`RPC '${e}' stream ${r} received:`,V),C._o(V)}})),S(a,di.STAT_EVENT,(T=>{T.stat===Zn.PROXY?y(z,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===Zn.NOPROXY&&y(z,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{C.fo()}),0),C}}function Ht(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(s){return new fo(s,!0)}/**
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
 */class An{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Cr{constructor(e,t,n,r,i,o,a,u){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new An(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===d.RESOURCE_EXHAUSTED?(re(t.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.Fo===t&&this.Zo(n,r)}),(n=>{e((()=>{const r=new g(d.UNKNOWN,"Fetching auth token failed: "+n.message);return this.tu(r)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((r=>{n((()=>this.tu(r)))})),this.stream.onMessage((r=>{n((()=>this.onMessage(r)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class na extends Cr{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=yo(this.serializer,e),n=(function(r){if(!("targetChange"in r))return E.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?E.min():i.readTime?X(i.readTime):E.min()})(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Je(this.serializer),t.addTarget=(function(r,i){let o;const a=i.target;if(o=en(a)?{documents:vo(r,a)}:{query:Eo(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=mr(r,i.resumeToken);const u=rn(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(E.min())>0){o.readTime=St(r,i.snapshotVersion.toTimestamp());const u=rn(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o})(this.serializer,e);const n=Io(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Je(this.serializer),t.removeTarget=e,this.Wo(t)}}class sa extends Cr{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=wo(e.writeResults,e.commitTime),n=X(e.commitTime);return this.listener.cu(n,t)}return b(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Je(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>yr(this.serializer,n)))};this.Wo(t)}}/**
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
 */class ra extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new g(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new g(d.UNKNOWN,r.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(e,t,n,i,o,r))).catch((i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(d.UNKNOWN,i.toString())}))}terminate(){this.lu=!0}}class ia{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(re(t),this.mu=!1):y("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class oa{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((o=>{n.enqueueAndForget((async()=>{ve(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await(async function(a){const u=I(a);u.vu.add(4),await it(u),u.bu.set("Unknown"),u.vu.delete(4),await Pt(u)})(this))}))})),this.bu=new ia(n,r)}}async function Pt(s){if(ve(s))for(const e of s.Ru)await e(!0)}async function it(s){for(const e of s.Ru)await e(!1)}function Sr(s,e){const t=I(s);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),bn(t)?Dn(t):Le(t).Ko()&&Nn(t,e))}function Ar(s,e){const t=I(s),n=Le(t);t.Au.delete(e),n.Ko()&&Nr(t,e),t.Au.size===0&&(n.Ko()?n.jo():ve(t)&&t.bu.set("Unknown"))}function Nn(s,e){if(s.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(E.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Le(s).su(e)}function Nr(s,e){s.Vu.qt(e),Le(s).iu(e)}function Dn(s){s.Vu=new uo({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),le:e=>s.Au.get(e)||null,ue:()=>s.datastore.serializer.databaseId}),Le(s).start(),s.bu.gu()}function bn(s){return ve(s)&&!Le(s).Uo()&&s.Au.size>0}function ve(s){return I(s).vu.size===0}function Dr(s){s.Vu=void 0}async function aa(s){s.Au.forEach(((e,t)=>{Nn(s,e)}))}async function ua(s,e){Dr(s),bn(s)?(s.bu.Iu(e),Dn(s)):s.bu.set("Unknown")}async function ca(s,e,t){if(s.bu.set("Online"),e instanceof fr&&e.state===2&&e.cause)try{await(async function(n,r){const i=r.cause;for(const o of r.targetIds)n.Au.has(o)&&(await n.remoteSyncer.rejectListen(o,i),n.Au.delete(o),n.Vu.removeTarget(o))})(s,e)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Nt(s,n)}else if(e instanceof vt?s.Vu.Ht(e):e instanceof dr?s.Vu.ne(e):s.Vu.Xt(e),!t.isEqual(E.min()))try{const n=await Ir(s.localStore);t.compareTo(n)>=0&&await(function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach(((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}})),o.targetMismatches.forEach(((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(G.EMPTY_BYTE_STRING,c.snapshotVersion)),Nr(r,a);const l=new ae(c.target,a,u,c.sequenceNumber);Nn(r,l)})),r.remoteSyncer.applyRemoteEvent(o)})(s,t)}catch(n){y("RemoteStore","Failed to raise snapshot:",n),await Nt(s,n)}}async function Nt(s,e,t){if(!et(e))throw e;s.vu.add(1),await it(s),s.bu.set("Offline"),t||(t=()=>Ir(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),s.vu.delete(1),await Pt(s)}))}function br(s,e){return e().catch((t=>Nt(s,t,e)))}async function Ut(s){const e=I(s),t=he(e);let n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;la(e);)try{const r=await Wo(e.localStore,n);if(r===null){e.Eu.length===0&&t.jo();break}n=r.batchId,ha(e,r)}catch(r){await Nt(e,r)}kr(e)&&_r(e)}function la(s){return ve(s)&&s.Eu.length<10}function ha(s,e){s.Eu.push(e);const t=he(s);t.Ko()&&t.ou&&t.uu(e.mutations)}function kr(s){return ve(s)&&!he(s).Uo()&&s.Eu.length>0}function _r(s){he(s).start()}async function da(s){he(s).hu()}async function fa(s){const e=he(s);for(const t of s.Eu)e.uu(t.mutations)}async function ma(s,e,t){const n=s.Eu.shift(),r=wn.from(n,e,t);await br(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await Ut(s)}async function ga(s,e){e&&he(s).ou&&await(async function(t,n){if(r=n.code,lr(r)&&r!==d.ABORTED){const i=t.Eu.shift();he(t).Qo(),await br(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,n))),await Ut(t)}var r})(s,e),kr(s)&&_r(s)}async function As(s,e){const t=I(s);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const n=ve(t);t.vu.add(3),await it(t),n&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Pt(t)}async function pa(s,e){const t=I(s);e?(t.vu.delete(2),await Pt(t)):e||(t.vu.add(2),await it(t),t.bu.set("Unknown"))}function Le(s){return s.Su||(s.Su=(function(e,t,n){const r=I(e);return r.fu(),new na(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)})(s.datastore,s.asyncQueue,{uo:aa.bind(null,s),ao:ua.bind(null,s),nu:ca.bind(null,s)}),s.Ru.push((async e=>{e?(s.Su.Qo(),bn(s)?Dn(s):s.bu.set("Unknown")):(await s.Su.stop(),Dr(s))}))),s.Su}function he(s){return s.Du||(s.Du=(function(e,t,n){const r=I(e);return r.fu(),new sa(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)})(s.datastore,s.asyncQueue,{uo:da.bind(null,s),ao:ga.bind(null,s),au:fa.bind(null,s),cu:ma.bind(null,s)}),s.Ru.push((async e=>{e?(s.Du.Qo(),await Ut(s)):(await s.Du.stop(),s.Eu.length>0&&(y("RemoteStore",`Stopping write stream with ${s.Eu.length} pending writes`),s.Eu=[]))}))),s.Du}/**
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
 */class kn{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new kn(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _n(s,e){if(re("AsyncQueue",`${e}: ${s}`),et(s))return new g(d.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class Ne{constructor(e){this.comparator=e?(t,n)=>e(t,n)||w.comparator(t.key,n.key):(t,n)=>w.comparator(t.key,n.key),this.keyedMap=Ve(),this.sortedSet=new _(this.comparator)}static emptySet(e){return new Ne(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ne;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Ns{constructor(){this.Cu=new _(w.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?e.type!==0&&n.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&n.type!==1?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Cu=this.Cu.remove(t):e.type===1&&n.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):v():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class xe{constructor(e,t,n,r,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new xe(e,t,Ne.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class ya{constructor(){this.Nu=void 0,this.listeners=[]}}class wa{constructor(){this.queries=new Fe((e=>Ys(e)),xt),this.onlineState="Unknown",this.ku=new Set}}async function xn(s,e){const t=I(s),n=e.query;let r=!1,i=t.queries.get(n);if(i||(r=!0,i=new ya),r)try{i.Nu=await t.onListen(n)}catch(o){const a=_n(o,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(a)}t.queries.set(n,i),i.listeners.push(e),e.Mu(t.onlineState),i.Nu&&e.$u(i.Nu)&&Fn(t)}async function Rn(s,e){const t=I(s),n=e.query;let r=!1;const i=t.queries.get(n);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(n),t.onUnlisten(n)}function va(s,e){const t=I(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(n=!0);o.Nu=r}}n&&Fn(t)}function Ea(s,e,t){const n=I(s),r=n.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);n.queries.delete(e)}function Fn(s){s.ku.forEach((e=>{e.next()}))}class Ln{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new xe(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n=t!=="Offline";return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=xe.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class xr{constructor(e){this.key=e}}class Rr{constructor(e){this.key=e}}class Ta{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=A(),this.mutatedKeys=A(),this.tc=Xs(e),this.ec=new Ne(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Ns,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((l,h)=>{const f=r.get(l),p=Rt(this.query,h)?h:null,C=!!f&&this.mutatedKeys.has(f.key),S=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;f&&p?f.data.isEqual(p.data)?C!==S&&(n.track({type:3,doc:p}),T=!0):this.rc(f,p)||(n.track({type:2,doc:p}),T=!0,(u&&this.tc(p,u)>0||c&&this.tc(p,c)<0)&&(a=!0)):!f&&p?(n.track({type:0,doc:p}),T=!0):f&&!p&&(n.track({type:1,doc:f}),T=!0,(u||c)&&(a=!0)),T&&(p?(o=o.add(p),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{ec:o,ic:n,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((c,l)=>(function(h,f){const p=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return p(h)-p(f)})(c.type,l.type)||this.tc(c.doc,l.doc))),this.oc(n);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new xe(this.query,e.ec,r,i,e.mutatedKeys,a===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ns,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=A(),this.ec.forEach((n=>{this.ac(n.key)&&(this.Zu=this.Zu.add(n.key))}));const t=[];return e.forEach((n=>{this.Zu.has(n)||t.push(new Rr(n))})),this.Zu.forEach((n=>{e.has(n)||t.push(new xr(n))})),t}hc(e){this.Yu=e.ir,this.Zu=A();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return xe.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Ia{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ca{constructor(e){this.key=e,this.fc=!1}}class Sa{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Fe((a=>Ys(a)),xt),this._c=new Map,this.mc=new Set,this.gc=new _(w.comparator),this.yc=new Map,this.Ic=new In,this.Tc={},this.Ec=new Map,this.Ac=_e.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Aa(s,e){const t=Ma(s);let n,r;const i=t.wc.get(e);if(i)n=i.targetId,t.sharedClientState.addLocalQueryTarget(n),r=i.view.lc();else{const o=await Ho(t.localStore,ie(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);n=o.targetId,r=await Na(t,e,n,a==="current",o.resumeToken),t.isPrimaryClient&&Sr(t.remoteStore,o)}return r}async function Na(s,e,t,n,r){s.Rc=(h,f,p)=>(async function(C,S,T,M){let V=S.view.sc(T);V.zi&&(V=await Is(C.localStore,S.query,!1).then((({documents:ht})=>S.view.sc(ht,V))));const j=M&&M.targetChanges.get(S.targetId),ee=S.view.applyChanges(V,C.isPrimaryClient,j);return bs(C,S.targetId,ee.cc),ee.snapshot})(s,h,f,p);const i=await Is(s.localStore,e,!0),o=new Ta(e,i.ir),a=o.sc(i.documents),u=rt.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),c=o.applyChanges(a,s.isPrimaryClient,u);bs(s,t,c.cc);const l=new Ia(e,t,o);return s.wc.set(e,l),s._c.has(t)?s._c.get(t).push(e):s._c.set(t,[e]),c.snapshot}async function Da(s,e){const t=I(s),n=t.wc.get(e),r=t._c.get(n.targetId);if(r.length>1)return t._c.set(n.targetId,r.filter((i=>!xt(i,e)))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(n.targetId),t.sharedClientState.isActiveQueryTarget(n.targetId)||await an(t.localStore,n.targetId,!1).then((()=>{t.sharedClientState.clearQueryState(n.targetId),Ar(t.remoteStore,n.targetId),un(t,n.targetId)})).catch(Ze)):(un(t,n.targetId),await an(t.localStore,n.targetId,!0))}async function ba(s,e,t){const n=Va(s);try{const r=await(function(i,o){const a=I(i),u=L.now(),c=o.reduce(((f,p)=>f.add(p.key)),A());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",(f=>{let p=oe(),C=A();return a.Zi.getEntries(f,c).next((S=>{p=S,p.forEach(((T,M)=>{M.isValidDocument()||(C=C.add(T))}))})).next((()=>a.localDocuments.getOverlayedDocuments(f,p))).next((S=>{l=S;const T=[];for(const M of o){const V=no(M,l.get(M.key).overlayedDocument);V!=null&&T.push(new de(M.key,V,Bs(V.value.mapValue),q.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,T,o)})).next((S=>{h=S;const T=S.applyToLocalDocumentSet(l,C);return a.documentOverlayCache.saveOverlays(f,S.batchId,T)}))})).then((()=>({batchId:h.batchId,changes:Zs(l)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(i,o,a){let u=i.Tc[i.currentUser.toKey()];u||(u=new _(D)),u=u.insert(o,a),i.Tc[i.currentUser.toKey()]=u})(n,r.batchId,t),await ot(n,r.changes),await Ut(n.remoteStore)}catch(r){const i=_n(r,"Failed to persist write");t.reject(i)}}async function Fr(s,e){const t=I(s);try{const n=await Qo(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.yc.get(i);o&&(b(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?b(o.fc):r.removedDocuments.size>0&&(b(o.fc),o.fc=!1))})),await ot(t,n,e)}catch(n){await Ze(n)}}function Ds(s,e,t){const n=I(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.wc.forEach(((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)})),(function(i,o){const a=I(i);a.onlineState=o;let u=!1;a.queries.forEach(((c,l)=>{for(const h of l.listeners)h.Mu(o)&&(u=!0)})),u&&Fn(a)})(n.eventManager,e),r.length&&n.dc.nu(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ka(s,e,t){const n=I(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.yc.get(e),i=r&&r.key;if(i){let o=new _(w.comparator);o=o.insert(i,P.newNoDocument(i,E.min()));const a=A().add(i),u=new Vt(E.min(),new Map,new _(D),o,a);await Fr(n,u),n.gc=n.gc.remove(i),n.yc.delete(e),Mn(n)}else await an(n.localStore,e,!1).then((()=>un(n,e,t))).catch(Ze)}async function _a(s,e){const t=I(s),n=e.batch.batchId;try{const r=await Go(t.localStore,e);Mr(t,n,null),Lr(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ot(t,r)}catch(r){await Ze(r)}}async function xa(s,e,t){const n=I(s);try{const r=await(function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next((l=>(b(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l)))).next((()=>a.mutationQueue.performConsistencyCheck(u))).next((()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o))).next((()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c))).next((()=>a.localDocuments.getDocuments(u,c)))}))})(n.localStore,e);Mr(n,e,t),Lr(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ot(n,r)}catch(r){await Ze(r)}}function Lr(s,e){(s.Ec.get(e)||[]).forEach((t=>{t.resolve()})),s.Ec.delete(e)}function Mr(s,e,t){const n=I(s);let r=n.Tc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Tc[n.currentUser.toKey()]=r}}function un(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s._c.get(e))s.wc.delete(n),t&&s.dc.Pc(n,t);s._c.delete(e),s.isPrimaryClient&&s.Ic.Is(e).forEach((n=>{s.Ic.containsKey(n)||Vr(s,n)}))}function Vr(s,e){s.mc.delete(e.path.canonicalString());const t=s.gc.get(e);t!==null&&(Ar(s.remoteStore,t),s.gc=s.gc.remove(e),s.yc.delete(t),Mn(s))}function bs(s,e,t){for(const n of t)n instanceof xr?(s.Ic.addReference(n.key,e),Ra(s,n)):n instanceof Rr?(y("SyncEngine","Document no longer in limbo: "+n.key),s.Ic.removeReference(n.key,e),s.Ic.containsKey(n.key)||Vr(s,n.key)):v()}function Ra(s,e){const t=e.key,n=t.path.canonicalString();s.gc.get(t)||s.mc.has(n)||(y("SyncEngine","New document in limbo: "+t),s.mc.add(n),Mn(s))}function Mn(s){for(;s.mc.size>0&&s.gc.size<s.maxConcurrentLimboResolutions;){const e=s.mc.values().next().value;s.mc.delete(e);const t=new w(k.fromString(e)),n=s.Ac.next();s.yc.set(n,new Ca(t)),s.gc=s.gc.insert(t,n),Sr(s.remoteStore,new ae(ie(_t(t.path)),n,"TargetPurposeLimboResolution",hn.ct))}}async function ot(s,e,t){const n=I(s),r=[],i=[],o=[];n.wc.isEmpty()||(n.wc.forEach(((a,u)=>{o.push(n.Rc(u,e,t).then((c=>{if((c||t)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const l=Sn.Li(u.targetId,c);i.push(l)}})))})),await Promise.all(o),n.dc.nu(r),await(async function(a,u){const c=I(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",(l=>m.forEach(u,(h=>m.forEach(h.Fi,(f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f))).next((()=>m.forEach(h.Bi,(f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))))))}catch(l){if(!et(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.Ji.get(h),p=f.snapshotVersion,C=f.withLastLimboFreeSnapshotVersion(p);c.Ji=c.Ji.insert(h,C)}}})(n.localStore,i))}async function Fa(s,e){const t=I(s);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const n=await Tr(t.localStore,e);t.currentUser=e,(function(r,i){r.Ec.forEach((o=>{o.forEach((a=>{a.reject(new g(d.CANCELLED,i))}))})),r.Ec.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ot(t,n.er)}}function La(s,e){const t=I(s),n=t.yc.get(e);if(n&&n.fc)return A().add(n.key);{let r=A();const i=t._c.get(e);if(!i)return r;for(const o of i){const a=t.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function Ma(s){const e=I(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fr.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=La.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ka.bind(null,e),e.dc.nu=va.bind(null,e.eventManager),e.dc.Pc=Ea.bind(null,e.eventManager),e}function Va(s){const e=I(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_a.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xa.bind(null,e),e}class ks{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ot(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ko(this.persistence,new zo,e.initialUser,this.serializer)}createPersistence(e){return new qo(Cn.zs,this.serializer)}createSharedClientState(e){return new Xo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ds(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fa.bind(null,this.syncEngine),await pa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wa}createDatastore(e){const t=Ot(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ta(r));var r;return(function(i,o,a,u){return new ra(i,o,a,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=a=>Ds(this.syncEngine,a,0),o=Ss.D()?new Ss:new Jo,new oa(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return(function(n,r,i,o,a,u,c){const l=new Sa(n,r,i,o,a,u);return c&&(l.vc=!0),l})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return(async function(e){const t=I(e);y("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await it(t),t.Pu.shutdown(),t.bu.set("Unknown")})(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vn{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):re("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class Pa{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(d.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await(async function(n,r){const i=I(n),o=Je(i.serializer)+"/documents",a={documents:r.map((h=>At(i.serializer,h)))},u=await i.vo("BatchGetDocuments",o,a,r.length),c=new Map;u.forEach((h=>{const f=po(i.serializer,h);c.set(f.key.toString(),f)}));const l=[];return r.forEach((h=>{const f=c.get(h.toString());b(!!f),l.push(f)})),l})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const r=w.fromPath(n);this.mutations.push(new cr(r,this.precondition(r)))})),await(async function(t,n){const r=I(t),i=Je(r.serializer)+"/documents",o={writes:n.map((a=>yr(r.serializer,a)))};await r.Io("Commit",i,o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=E.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new g(d.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(E.min())?q.exists(!1):q.updateTime(t):q.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(E.min()))throw new g(d.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return q.updateTime(t)}return q.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Ua{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new An(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No((async()=>{const e=new Pa(this.datastore),t=this.qc(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((r=>{this.Uc(r)}))))})).catch((n=>{this.Uc(n)}))}))}qc(e){try{const t=this.updateFunction(e);return!tt(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Lc(),Promise.resolve())))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!lr(t)}return!1}}/**
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
 */class qa{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=W.UNAUTHENTICATED,this.clientId=Ps.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i})),this.appCheckCredentials.start(n,(i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=_n(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Yt(s,e){s.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await s.getConfiguration();await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await Tr(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function _s(s,e){s.asyncQueue.verifyOperationInProgress();const t=await za(s);y("FirestoreClient","Initializing OnlineComponentProvider");const n=await s.getConfiguration();await e.initialize(t,n),s.setCredentialChangeListener((r=>As(e.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,i)=>As(e.remoteStore,i))),s._onlineComponents=e}function Ba(s){return s.name==="FirebaseError"?s.code===d.FAILED_PRECONDITION||s.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}async function za(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yt(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Ba(t))throw t;Ke("Error using user provided cache. Falling back to memory cache: "+t),await Yt(s,new ks)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Yt(s,new ks);return s._offlineComponents}async function On(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await _s(s,s._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await _s(s,new Oa))),s._onlineComponents}function $a(s){return On(s).then((e=>e.syncEngine))}function Ka(s){return On(s).then((e=>e.datastore))}async function Dt(s){const e=await On(s),t=e.eventManager;return t.onListen=Aa.bind(null,e.syncEngine),t.onUnlisten=Da.bind(null,e.syncEngine),t}function Ga(s,e,t={}){const n=new te;return s.asyncQueue.enqueueAndForget((async()=>(function(r,i,o,a,u){const c=new Vn({next:h=>{i.enqueueAndForget((()=>Rn(r,l)));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new g(d.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new g(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Ln(_t(o.path),c,{includeMetadataChanges:!0,Ku:!0});return xn(r,l)})(await Dt(s),s.asyncQueue,e,t,n))),n.promise}function Qa(s,e,t={}){const n=new te;return s.asyncQueue.enqueueAndForget((async()=>(function(r,i,o,a,u){const c=new Vn({next:h=>{i.enqueueAndForget((()=>Rn(r,l))),h.fromCache&&a.source==="server"?u.reject(new g(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Ln(o,c,{includeMetadataChanges:!0,Ku:!0});return xn(r,l)})(await Dt(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function Or(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map;/**
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
 */function Pr(s,e,t){if(!t)throw new g(d.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function ja(s,e,t,n){if(e===!0&&n===!0)throw new g(d.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Rs(s){if(!w.isDocumentKey(s))throw new g(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Fs(s){if(w.isDocumentKey(s))throw new g(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function qt(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(t){return t.constructor?t.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":v()}function H(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new g(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qt(s);throw new g(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new g(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ja("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Or((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new g(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new g(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new g(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Pn{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ls({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ls(e),e.credentials!==void 0&&(this._authCredentials=(function(t){if(!t)return new mi;switch(t.type){case"firstParty":return new yi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new g(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=xs.get(e);t&&(y("ComponentProvider","Removing Datastore"),xs.delete(e),t.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new B(this.firestore,e,this._key)}}class Ee{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ee(this.firestore,e,this._query)}}class ue extends Ee{constructor(e,t,n){super(e,t,_t(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new B(this.firestore,null,new w(e))}withConverter(e){return new ue(this.firestore,e,this._path)}}function cu(s,e,...t){if(s=J(s),Pr("collection","path",e),s instanceof Pn){const n=k.fromString(e,...t);return Fs(n),new ue(s,null,n)}{if(!(s instanceof B||s instanceof ue))throw new g(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(k.fromString(e,...t));return Fs(n),new ue(s.firestore,null,n)}}function Wa(s,e,...t){if(s=J(s),arguments.length===1&&(e=Ps.A()),Pr("doc","path",e),s instanceof Pn){const n=k.fromString(e,...t);return Rs(n),new B(s,null,new w(n))}{if(!(s instanceof B||s instanceof ue))throw new g(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(k.fromString(e,...t));return Rs(n),new B(s.firestore,s instanceof ue?s.converter:null,new w(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new An(this,"async_queue_retry"),this.Xc=()=>{const t=Ht();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ht();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ht();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new te;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!et(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((n=>{this.Wc=n,this.Hc=!1;const r=(function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o})(n);throw re("INTERNAL UNHANDLED ERROR: ",r),n})).then((n=>(this.Hc=!1,n))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=kn.createAndSchedule(this,e,t,n,(i=>this.na(i)));return this.zc.push(r),r}Zc(){this.Wc&&v()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Ms(s){return(function(e,t){if(typeof e!="object"||e===null)return!1;const n=e;for(const r of t)if(r in n&&typeof n[r]=="function")return!0;return!1})(s,["next","error","complete"])}class se extends Pn{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ha,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ur(this),this._firestoreClient.terminate()}}function lu(s,e,t){t||(t="(default)");const n=si(s,"firestore");if(n.isInitialized(t)){const r=n.getImmediate({identifier:t}),i=n.getOptions(t);if(ri(i,e))return r;throw new g(d.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new g(d.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function at(s){return s._firestoreClient||Ur(s),s._firestoreClient.verifyNotTerminated(),s._firestoreClient}function Ur(s){var e,t,n;const r=s._freezeSettings(),i=(function(o,a,u,c){return new ki(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Or(c.experimentalLongPollingOptions),c.useFetchStreams)})(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,r);s._firestoreClient=new qa(s._authCredentials,s._appCheckCredentials,s._queue,i),!((t=r.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=r.cache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ye(G.fromBase64String(e))}catch(t){throw new g(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ye(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._methodName=e}}/**
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
 */class Un{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
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
 */const Ya=/^__.*__$/;class Xa{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new de(e,this.data,this.fieldMask,t,this.fieldTransforms):new st(e,this.data,t,this.fieldTransforms)}}class qr{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new de(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Br(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class qn{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new qn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return bt(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Br(this.ca)&&Ya.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Ja{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ot(e)}ya(e,t,n,r=!1){return new qn({ca:e,methodName:t,ga:n,path:$.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ct(s){const e=s._freezeSettings(),t=Ot(s._databaseId);return new Ja(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Bn(s,e,t,n,r,i={}){const o=s.ya(i.merge||i.mergeFields?2:0,e,t,r);$n("Data must be an object, but it was:",o,n);const a=Kr(n,o);let u,c;if(i.merge)u=new Y(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=cn(e,h,t);if(!o.contains(f))throw new g(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Qr(l,f)||l.push(f)}u=new Y(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new Xa(new Q(a),u,c)}class zt extends Bt{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zt}}class zn extends Bt{_toFieldTransform(e){return new Ji(e.path,new He)}isEqual(e){return e instanceof zn}}function zr(s,e,t,n){const r=s.ya(1,e,t);$n("Data must be an object, but it was:",r,n);const i=[],o=Q.empty();we(n,((u,c)=>{const l=Kn(e,u,t);c=J(c);const h=r.da(l);if(c instanceof zt)i.push(l);else{const f=lt(c,h);f!=null&&(i.push(l),o.set(l,f))}}));const a=new Y(i);return new qr(o,a,r.fieldTransforms)}function $r(s,e,t,n,r,i){const o=s.ya(1,e,t),a=[cn(e,n,t)],u=[r];if(i.length%2!=0)throw new g(d.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(cn(e,i[f])),u.push(i[f+1]);const c=[],l=Q.empty();for(let f=a.length-1;f>=0;--f)if(!Qr(c,a[f])){const p=a[f];let C=u[f];C=J(C);const S=o.da(p);if(C instanceof zt)c.push(p);else{const T=lt(C,S);T!=null&&(c.push(p),l.set(p,T))}}const h=new Y(c);return new qr(l,h,o.fieldTransforms)}function Za(s,e,t,n=!1){return lt(t,s.ya(n?4:3,e))}function lt(s,e){if(Gr(s=J(s)))return $n("Unsupported field value:",e,s),Kr(s,e);if(s instanceof Bt)return(function(t,n){if(!Br(n.ca))throw n._a(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n._a(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(n);r&&n.fieldTransforms.push(r)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return(function(t,n){const r=[];let i=0;for(const o of t){let a=lt(o,n.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}})(s,e)}return(function(t,n){if((t=J(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Hi(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=L.fromDate(t);return{timestampValue:St(n.serializer,r)}}if(t instanceof L){const r=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:St(n.serializer,r)}}if(t instanceof Un)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ye)return{bytesValue:mr(n.serializer,t._byteString)};if(t instanceof B){const r=n.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw n._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Tn(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n._a(`Unsupported field value: ${qt(t)}`)})(s,e)}function Kr(s,e){const t={};return Us(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):we(s,((n,r)=>{const i=lt(r,e.ha(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Gr(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof L||s instanceof Un||s instanceof ye||s instanceof B||s instanceof Bt)}function $n(s,e,t){if(!Gr(t)||!(function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)})(t)){const n=qt(t);throw n==="an object"?e._a(s+" a custom object"):e._a(s+" "+n)}}function cn(s,e,t){if((e=J(e))instanceof ut)return e._internalPath;if(typeof e=="string")return Kn(s,e);throw bt("Field path arguments must be of type string or ",s,!1,void 0,t)}const eu=new RegExp("[~\\*/\\[\\]]");function Kn(s,e,t){if(e.search(eu)>=0)throw bt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new ut(...e.split("."))._internalPath}catch{throw bt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function bt(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${r}`),u+=")"),new g(d.INVALID_ARGUMENT,a+s+u)}function Qr(s,e){return s.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new B(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tu extends kt{data(){return super.data()}}function Gn(s,e){return typeof e=="string"?Kn(s,e):e instanceof ut?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new g(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qn{}class nu extends Qn{}function hu(s,e,...t){let n=[];e instanceof Qn&&n.push(e),n=n.concat(t),(function(r){const i=r.filter((a=>a instanceof jn)).length,o=r.filter((a=>a instanceof $t)).length;if(i>1||i>0&&o>0)throw new g(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class $t extends nu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new $t(e,t,n)}_apply(e){const t=this._parse(e);return Wr(e._query,t),new Ee(e.firestore,e.converter,tn(e._query,t))}_parse(e){const t=ct(e.firestore);return(function(r,i,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new g(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Os(l,c);const f=[];for(const p of l)f.push(Vs(a,r,p));h={arrayValue:{values:f}}}else h=Vs(a,r,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Os(l,c),h=Za(o,i,l,c==="in"||c==="not-in");return F.create(u,c,h)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function du(s,e,t){const n=e,r=Gn("where",s);return $t._create(r,n,t)}class jn extends Qn{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jn(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(n,r){let i=n;const o=r.getFlattenedFilters();for(const a of o)Wr(i,a),i=tn(i,a)})(e._query,t),new Ee(e.firestore,e.converter,tn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vs(s,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new g(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hs(e)&&t.indexOf("/")!==-1)throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(k.fromString(t));if(!w.isDocumentKey(n))throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return is(s,new w(n))}if(t instanceof B)return is(s,t._key);throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qt(t)}.`)}function Os(s,e){if(!Array.isArray(s)||s.length===0)throw new g(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wr(s,e){if(e.isInequality()){const n=yn(s),r=e.field;if(n!==null&&!n.isEqual(r))throw new g(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Ws(s);i!==null&&su(s,r,i)}const t=(function(n,r){for(const i of n)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null})(s.filters,(function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new g(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function su(s,e,t){if(!t.isEqual(e))throw new g(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Hr{convertValue(e,t="none"){switch(pe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return R(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ge(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return we(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Un(R(e.latitude),R(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=fn(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qe(e));default:return null}}convertTimestamp(e){const t=le(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=k.fromString(e);b(Er(n));const r=new je(n.get(1),n.get(3)),i=new w(n.popFirst(5));return r.isEqual(t)||re(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}class ru extends Hr{constructor(e){super(),this.firestore=e}convertBytes(e){return new ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hn extends kt{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Et(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Gn("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Et extends Hn{data(e={}){return super.data(e)}}class Yr{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ce(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Et(this._firestore,this._userDataWriter,n.key,n,new Ce(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(n,r){if(n._snapshot.oldDocs.isEmpty()){let i=0;return n._snapshot.docChanges.map((o=>{const a=new Et(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Ce(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}}))}{let i=n._snapshot.oldDocs;return n._snapshot.docChanges.filter((o=>r||o.type!==3)).map((o=>{const a=new Et(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Ce(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:iu(o.type),doc:a,oldIndex:u,newIndex:c}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function iu(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(s){s=H(s,B);const e=H(s.firestore,se);return Ga(at(e),s._key).then((t=>Xr(e,s,t)))}class Kt extends Hr{constructor(e){super(),this.firestore=e}convertBytes(e){return new ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}function mu(s){s=H(s,Ee);const e=H(s.firestore,se),t=at(e),n=new Kt(e);return jr(s._query),Qa(t,s._query).then((r=>new Yr(e,n,s,r)))}function gu(s,e,t){s=H(s,B);const n=H(s.firestore,se),r=Wn(s.converter,e,t);return Gt(n,[Bn(ct(n),"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,q.none())])}function pu(s,e,t,...n){s=H(s,B);const r=H(s.firestore,se),i=ct(r);let o;return o=typeof(e=J(e))=="string"||e instanceof ut?$r(i,"updateDoc",s._key,e,t,n):zr(i,"updateDoc",s._key,e),Gt(r,[o.toMutation(s._key,q.exists(!0))])}function yu(s){return Gt(H(s.firestore,se),[new Mt(s._key,q.none())])}function wu(s,e){const t=H(s.firestore,se),n=Wa(s),r=Wn(s.converter,e);return Gt(t,[Bn(ct(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,q.exists(!1))]).then((()=>n))}function vu(s,...e){var t,n,r;s=J(s);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ms(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ms(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,c,l;if(s instanceof B)c=H(s.firestore,se),l=_t(s._key.path),u={next:h=>{e[o]&&e[o](Xr(c,s,h))},error:e[o+1],complete:e[o+2]};else{const h=H(s,Ee);c=H(h.firestore,se),l=h._query;const f=new Kt(c);u={next:p=>{e[o]&&e[o](new Yr(c,f,h,p))},error:e[o+1],complete:e[o+2]},jr(s._query)}return(function(h,f,p,C){const S=new Vn(C),T=new Ln(f,S,p);return h.asyncQueue.enqueueAndForget((async()=>xn(await Dt(h),T))),()=>{S.Dc(),h.asyncQueue.enqueueAndForget((async()=>Rn(await Dt(h),T)))}})(at(c),l,a,u)}function Gt(s,e){return(function(t,n){const r=new te;return t.asyncQueue.enqueueAndForget((async()=>ba(await $a(t),n,r))),r.promise})(at(s),e)}function Xr(s,e,t){const n=t.docs.get(e._key),r=new Kt(s);return new Hn(s,r,e._key,n,new Ce(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const ou={maxAttempts:5};function Me(s,e){if((s=J(s)).firestore!==e)throw new g(d.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class au extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ct(e)}get(e){const t=Me(e,this._firestore),n=new ru(this._firestore);return this._transaction.lookup([t._key]).then((r=>{if(!r||r.length!==1)return v();const i=r[0];if(i.isFoundDocument())return new kt(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new kt(this._firestore,n,t._key,null,t.converter);throw v()}))}set(e,t,n){const r=Me(e,this._firestore),i=Wn(r.converter,t,n),o=Bn(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,n);return this._transaction.set(r._key,o),this}update(e,t,n,...r){const i=Me(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof ut?$r(this._dataReader,"Transaction.update",i._key,t,n,r):zr(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Me(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Me(e,this._firestore),n=new Kt(this._firestore);return super.get(e).then((r=>new Hn(this._firestore,n,t._key,r._document,new Ce(!1,!1),t.converter)))}}function Eu(s,e,t){s=H(s,se);const n=Object.assign(Object.assign({},ou),t);return(function(r){if(r.maxAttempts<1)throw new g(d.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(r,i,o){const a=new te;return r.asyncQueue.enqueueAndForget((async()=>{const u=await Ka(r);new Ua(r.asyncQueue,u,o,i,a).run()})),a.promise})(at(s),(r=>e(new au(s,r))),n)}function Tu(){return new zn("serverTimestamp")}(function(s,e=!0){(function(t){Re=t})(oi),ei(new ti("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new se(new gi(t.getProvider("auth-internal")),new vi(t.getProvider("app-check-internal")),(function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(a.options.projectId,u)})(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),Jn(es,"3.13.0",s),Jn(es,"3.13.0","esm2017")})();export{Tu as G,vu as I,lu as R,Eu as U,cu as _,fu as a,hu as b,du as c,mu as d,pu as e,Wa as g,L as i,gu as m,wu as p,yu as y};
