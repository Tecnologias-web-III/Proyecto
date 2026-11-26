import{L as zr,I as Te,_ as $r,C as Kr,r as qn,F as Gr,e as Be,j as Qr,m as jr,c as ee,M as Wr,S as Hr,X as Yr,t as Xr,u as Vt,v as Jr,w as Zr,x as ei,W as it,y as ti,z as Bn}from"./firebase-shared-DyhMkR-B.js";const zn="@firebase/firestore";/**
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
 */class Q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
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
 */let _e="9.23.0";/**
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
 */const fe=new zr("@firebase/firestore");function $n(){return fe.logLevel}function y(s,...e){if(fe.logLevel<=Be.DEBUG){const t=e.map(nn);fe.debug(`Firestore (${_e}): ${s}`,...t)}}function ne(s,...e){if(fe.logLevel<=Be.ERROR){const t=e.map(nn);fe.error(`Firestore (${_e}): ${s}`,...t)}}function ze(s,...e){if(fe.logLevel<=Be.WARN){const t=e.map(nn);fe.warn(`Firestore (${_e}): ${s}`,...t)}}function nn(s){if(typeof s=="string")return s;try{return e=s,JSON.stringify(e)}catch{return s}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function v(s="Unexpected state"){const e=`FIRESTORE (${_e}) INTERNAL ASSERTION FAILED: `+s;throw ne(e),new Error(e)}function k(s,e){s||v()}function C(s,e){return s}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class oe{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ni{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class si{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Q.UNAUTHENTICATED)))}shutdown(){}}class ri{constructor(e){this.t=e,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new oe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new oe,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new oe)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(k(typeof n.accessToken=="string"),new ni(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string"),new Q(e)}}class ii{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class oi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ii(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Q.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ai{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ui{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(k(typeof t.token=="string"),this.T=t.token,new ai(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ns{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ci(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function b(s,e){return s<e?-1:s>e?1:0}function Se(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
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
 */class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?b(this.nanoseconds,e.nanoseconds):b(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class T{constructor(e){this.timestamp=e}static fromTimestamp(e){return new T(e)}static min(){return new T(new M(0,0))}static max(){return new T(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class $e{constructor(e,t,n){t===void 0?t=0:t>e.length&&v(),n===void 0?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return $e.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $e?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class D extends $e{construct(e,t,n){return new D(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new p(d.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new D(t)}static emptyPath(){return new D([])}}const li=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends $e{construct(e,t,n){return new B(e,t,n)}static isValidIdentifier(e){return li.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new B(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new p(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new p(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(i(),r++)}if(i(),o)throw new p(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(D.fromString(e))}static fromName(e){return new w(D.fromString(e).popFirst(5))}static empty(){return new w(D.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&D.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return D.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new D(e.slice()))}}function hi(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=T.fromTimestamp(n===1e9?new M(t+1,0):new M(t,n));return new ue(r,w.empty(),e)}function di(s){return new ue(s.readTime,s.key,-1)}class ue{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ue(T.min(),w.empty(),-1)}static max(){return new ue(T.max(),w.empty(),-1)}}function fi(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(s.documentKey,e.documentKey),t!==0?t:b(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ye(s){if(s.code!==d.FAILED_PRECONDITION||s.message!==mi)throw s;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):m.reject(t)}static resolve(e){return new m(((t,n)=>{t(e)}))}static reject(e){return new m(((t,n)=>{n(e)}))}static waitFor(e){return new m(((t,n)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(u=>n(u)))})),o=!0,i===r&&t()}))}static or(e){let t=m.resolve(!1);for(const n of e)t=t.next((r=>r?m.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new m(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>r(l)))}}))}static doWhile(e,t){return new m(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function Xe(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class sn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ot(n),this.ut=n=>t.writeSequenceNumber(n))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sn.ct=-1;function Et(s){return s==null}function mt(s){return s===0&&1/s==-1/0}function pi(s){return typeof s=="number"&&Number.isInteger(s)&&!mt(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */function Kn(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function ye(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function bs(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class _{constructor(e,t){this.comparator=e,this.root=t||P.EMPTY}insert(e,t){return new _(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,P.BLACK,null,null))}remove(e){return new _(this.comparator,this.root.remove(e,this.comparator).copy(null,null,P.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ot(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ot(this.root,e,this.comparator,!1)}getReverseIterator(){return new ot(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ot(this.root,e,this.comparator,!0)}}class ot{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class P{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??P.RED,this.left=r??P.EMPTY,this.right=i??P.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new P(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return P.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return P.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,P.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,P.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}P.EMPTY=null,P.RED=!0,P.BLACK=!1;P.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(s,e,t,n,r){return this}insert(s,e,t){return new P(s,e)}remove(s,e){return this}isEmpty(){return!0}inorderTraversal(s){return!1}reverseTraversal(s){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class z{constructor(e){this.comparator=e,this.data=new _(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gn(this.data.getIterator())}getIteratorFrom(e){return new Gn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof z)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new z(this.comparator);return t.data=e,t}}class Gn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.fields=e,e.sort(B.comparator)}static empty(){return new W([])}unionWith(e){let t=new z(B.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new W(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Se(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Ds extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(n){try{return atob(n)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ds("Invalid base64 string: "+r):r}})(e);return new K(t)}static fromUint8Array(e){const t=(function(n){let r="";for(let i=0;i<n.length;++i)r+=String.fromCharCode(n[i]);return r})(e);return new K(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return b(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}K.EMPTY_BYTE_STRING=new K("");const yi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ce(s){if(k(!!s),typeof s=="string"){let e=0;const t=yi.exec(s);if(k(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:R(s.seconds),nanos:R(s.nanos)}}function R(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function me(s){return typeof s=="string"?K.fromBase64String(s):K.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function on(s){const e=s.mapValue.fields.__previous_value__;return rn(e)?on(e):e}function Ke(s){const e=ce(s.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}/**
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
 */class wi{constructor(e,t,n,r,i,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ge{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ge&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={mapValue:{}};function ge(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?rn(s)?4:vi(s)?9007199254740991:10:v()}function te(s,e){if(s===e)return!0;const t=ge(s);if(t!==ge(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Ke(s).isEqual(Ke(e));case 3:return(function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const i=ce(n.timestampValue),o=ce(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(n,r){return me(n.bytesValue).isEqual(me(r.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(n,r){return R(n.geoPointValue.latitude)===R(r.geoPointValue.latitude)&&R(n.geoPointValue.longitude)===R(r.geoPointValue.longitude)})(s,e);case 2:return(function(n,r){if("integerValue"in n&&"integerValue"in r)return R(n.integerValue)===R(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const i=R(n.doubleValue),o=R(r.doubleValue);return i===o?mt(i)===mt(o):isNaN(i)&&isNaN(o)}return!1})(s,e);case 9:return Se(s.arrayValue.values||[],e.arrayValue.values||[],te);case 10:return(function(n,r){const i=n.mapValue.fields||{},o=r.mapValue.fields||{};if(Kn(i)!==Kn(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!te(i[a],o[a])))return!1;return!0})(s,e);default:return v()}}function Qe(s,e){return(s.values||[]).find((t=>te(t,e)))!==void 0}function Ae(s,e){if(s===e)return 0;const t=ge(s),n=ge(e);if(t!==n)return b(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return b(s.booleanValue,e.booleanValue);case 2:return(function(r,i){const o=R(r.integerValue||r.doubleValue),a=R(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1})(s,e);case 3:return Qn(s.timestampValue,e.timestampValue);case 4:return Qn(Ke(s),Ke(e));case 5:return b(s.stringValue,e.stringValue);case 6:return(function(r,i){const o=me(r),a=me(i);return o.compareTo(a)})(s.bytesValue,e.bytesValue);case 7:return(function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)})(s.referenceValue,e.referenceValue);case 8:return(function(r,i){const o=b(R(r.latitude),R(i.latitude));return o!==0?o:b(R(r.longitude),R(i.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return(function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Ae(o[u],a[u]);if(c)return c}return b(o.length,a.length)})(s.arrayValue,e.arrayValue);case 10:return(function(r,i){if(r===at.mapValue&&i===at.mapValue)return 0;if(r===at.mapValue)return 1;if(i===at.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=b(a[l],c[l]);if(h!==0)return h;const f=Ae(o[a[l]],u[c[l]]);if(f!==0)return f}return b(a.length,c.length)})(s.mapValue,e.mapValue);default:throw v()}}function Qn(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return b(s,e);const t=ce(s),n=ce(e),r=b(t.seconds,n.seconds);return r!==0?r:b(t.nanos,n.nanos)}function Ne(s){return Bt(s)}function Bt(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(n){const r=ce(n);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?me(s.bytesValue).toBase64():"referenceValue"in s?(t=s.referenceValue,w.fromName(t).toString()):"geoPointValue"in s?`geo(${(e=s.geoPointValue).latitude},${e.longitude})`:"arrayValue"in s?(function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Bt(o);return r+"]"})(s.arrayValue):"mapValue"in s?(function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Bt(n.fields[a])}`;return i+"}"})(s.mapValue):v();var e,t}function jn(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function zt(s){return!!s&&"integerValue"in s}function an(s){return!!s&&"arrayValue"in s}function Wn(s){return!!s&&"nullValue"in s}function Hn(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function lt(s){return!!s&&"mapValue"in s}function Oe(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return ye(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Oe(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oe(s.arrayValue.values[t]);return e}return Object.assign({},s)}function vi(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class j{constructor(e){this.value=e}static empty(){return new j({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!lt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oe(t)}setAll(e){let t=B.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=Oe(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());lt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return te(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];lt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ye(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new j(Oe(this.value))}}function ks(s){const e=[];return ye(s.fields,((t,n)=>{const r=new B([t]);if(lt(n)){const i=ks(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new W(e)}/**
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
 */class q{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new q(e,0,T.min(),T.min(),T.min(),j.empty(),0)}static newFoundDocument(e,t,n,r){return new q(e,1,t,T.min(),n,r,0)}static newNoDocument(e,t){return new q(e,2,t,T.min(),T.min(),j.empty(),0)}static newUnknownDocument(e,t){return new q(e,3,t,T.min(),T.min(),j.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=j.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=j.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof q&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gt{constructor(e,t){this.position=e,this.inclusive=t}}function Yn(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=w.comparator(w.fromName(o.referenceValue),t.key):n=Ae(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Xn(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!te(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pe{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ei(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class _s{}class L extends _s{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Ii(e,t,n):t==="array-contains"?new Ai(e,n):t==="in"?new Ni(e,n):t==="not-in"?new bi(e,n):t==="array-contains-any"?new Di(e,n):new L(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ci(e,n):new Si(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ae(t,this.value)):t!==null&&ge(this.value)===ge(t)&&this.matchesComparison(Ae(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Y extends _s{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Y(e,t)}matches(e){return xs(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((t=>t.isInequality()));return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function xs(s){return s.op==="and"}function Rs(s){return Ti(s)&&xs(s)}function Ti(s){for(const e of s.filters)if(e instanceof Y)return!1;return!0}function $t(s){if(s instanceof L)return s.field.canonicalString()+s.op.toString()+Ne(s.value);if(Rs(s))return s.filters.map((e=>$t(e))).join(",");{const e=s.filters.map((t=>$t(t))).join(",");return`${s.op}(${e})`}}function Ls(s,e){return s instanceof L?(function(t,n){return n instanceof L&&t.op===n.op&&t.field.isEqual(n.field)&&te(t.value,n.value)})(s,e):s instanceof Y?(function(t,n){return n instanceof Y&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce(((r,i,o)=>r&&Ls(i,n.filters[o])),!0):!1})(s,e):void v()}function Ms(s){return s instanceof L?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ne(e.value)}`})(s):s instanceof Y?(function(e){return e.op.toString()+" {"+e.getFilters().map(Ms).join(" ,")+"}"})(s):"Filter"}class Ii extends L{constructor(e,t,n){super(e,t,n),this.key=w.fromName(n.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ci extends L{constructor(e,t){super(e,"in",t),this.keys=Fs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Si extends L{constructor(e,t){super(e,"not-in",t),this.keys=Fs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fs(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>w.fromName(n.referenceValue)))}class Ai extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return an(t)&&Qe(t.arrayValue,this.value)}}class Ni extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qe(this.value.arrayValue,t)}}class bi extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qe(this.value.arrayValue,t)}}class Di extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!an(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Qe(this.value.arrayValue,n)))}}/**
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
 */class ki{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Jn(s,e=null,t=[],n=[],r=null,i=null,o=null){return new ki(s,e,t,n,r,i,o)}function un(s){const e=C(s);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>$t(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(r){return r.field.canonicalString()+r.dir})(n))).join(","),Et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Ne(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Ne(n))).join(",")),e.dt=t}return e.dt}function cn(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Ei(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Ls(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Xn(s.startAt,e.startAt)&&Xn(s.endAt,e.endAt)}function Kt(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class Je{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function _i(s,e,t,n,r,i,o,a){return new Je(s,e,t,n,r,i,o,a)}function Tt(s){return new Je(s)}function Zn(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Vs(s){return s.explicitOrderBy.length>0?s.explicitOrderBy[0].field:null}function ln(s){for(const e of s.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Os(s){return s.collectionGroup!==null}function Ie(s){const e=C(s);if(e.wt===null){e.wt=[];const t=ln(e),n=Vs(e);if(t!==null&&n===null)t.isKeyField()||e.wt.push(new Pe(t)),e.wt.push(new Pe(B.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Pe(B.keyField(),i))}}}return e.wt}function se(s){const e=C(s);if(!e._t)if(e.limitType==="F")e._t=Jn(e.path,e.collectionGroup,Ie(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ie(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Pe(i.field,o))}const n=e.endAt?new gt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new gt(e.startAt.position,e.startAt.inclusive):null;e._t=Jn(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function Gt(s,e){e.getFirstInequalityField(),ln(s);const t=s.filters.concat([e]);return new Je(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function Qt(s,e,t){return new Je(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function It(s,e){return cn(se(s),se(e))&&s.limitType===e.limitType}function Ps(s){return`${un(se(s))}|lt:${s.limitType}`}function jt(s){return`Query(target=${(function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((n=>Ms(n))).join(", ")}]`),Et(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((n=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(n))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Ne(n))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Ne(n))).join(",")),`Target(${t})`})(se(s))}; limitType=${s.limitType})`}function Ct(s,e){return e.isFoundDocument()&&(function(t,n){const r=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):w.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)})(s,e)&&(function(t,n){for(const r of Ie(t))if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0})(s,e)&&(function(t,n){for(const r of t.filters)if(!r.matches(n))return!1;return!0})(s,e)&&(function(t,n){return!(t.startAt&&!(function(r,i,o){const a=Yn(r,i,o);return r.inclusive?a<=0:a<0})(t.startAt,Ie(t),n)||t.endAt&&!(function(r,i,o){const a=Yn(r,i,o);return r.inclusive?a>=0:a>0})(t.endAt,Ie(t),n))})(s,e)}function xi(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Us(s){return(e,t)=>{let n=!1;for(const r of Ie(s)){const i=Ri(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function Ri(s,e,t){const n=s.field.isKeyField()?w.comparator(e.key,t.key):(function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Ae(a,u):v()})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return v()}}/**
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
 */class xe{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ye(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return bs(this.inner)}size(){return this.innerSize}}/**
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
 */const Li=new _(w.comparator);function re(){return Li}const qs=new _(w.comparator);function Me(...s){let e=qs;for(const t of s)e=e.insert(t.key,t);return e}function Bs(s){let e=qs;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function de(){return Ue()}function zs(){return Ue()}function Ue(){return new xe((s=>s.toString()),((s,e)=>s.isEqual(e)))}const Mi=new _(w.comparator),Fi=new z(w.comparator);function A(...s){let e=Fi;for(const t of s)e=e.add(t);return e}const Vi=new z(b);function Oi(){return Vi}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mt(e)?"-0":e}}function Ks(s){return{integerValue:""+s}}function Pi(s,e){return pi(e)?Ks(e):$s(s,e)}/**
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
 */class St{constructor(){this._=void 0}}function Ui(s,e,t){return s instanceof je?(function(n,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&rn(r)&&(r=on(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}})(t,e):s instanceof We?Qs(s,e):s instanceof He?js(s,e):(function(n,r){const i=Gs(n,r),o=es(i)+es(n.gt);return zt(i)&&zt(n.gt)?Ks(o):$s(n.serializer,o)})(s,e)}function qi(s,e,t){return s instanceof We?Qs(s,e):s instanceof He?js(s,e):t}function Gs(s,e){return s instanceof pt?zt(t=e)||(function(n){return!!n&&"doubleValue"in n})(t)?e:{integerValue:0}:null;var t}class je extends St{}class We extends St{constructor(e){super(),this.elements=e}}function Qs(s,e){const t=Ws(e);for(const n of s.elements)t.some((r=>te(r,n)))||t.push(n);return{arrayValue:{values:t}}}class He extends St{constructor(e){super(),this.elements=e}}function js(s,e){let t=Ws(e);for(const n of s.elements)t=t.filter((r=>!te(r,n)));return{arrayValue:{values:t}}}class pt extends St{constructor(e,t){super(),this.serializer=e,this.gt=t}}function es(s){return R(s.integerValue||s.doubleValue)}function Ws(s){return an(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class Bi{constructor(e,t){this.field=e,this.transform=t}}function zi(s,e){return s.field.isEqual(e.field)&&(function(t,n){return t instanceof We&&n instanceof We||t instanceof He&&n instanceof He?Se(t.elements,n.elements,te):t instanceof pt&&n instanceof pt?te(t.gt,n.gt):t instanceof je&&n instanceof je})(s.transform,e.transform)}class $i{constructor(e,t){this.version=e,this.transformResults=t}}class H{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new H}static exists(e){return new H(void 0,e)}static updateTime(e){return new H(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ht(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class At{}function Hs(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new hn(s.key,H.none()):new Ze(s.key,s.data,H.none());{const t=s.data,n=j.empty();let r=new z(B.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new he(s.key,n,new W(r.toArray()),H.none())}}function Ki(s,e,t){s instanceof Ze?(function(n,r,i){const o=n.value.clone(),a=ns(n.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()})(s,e,t):s instanceof he?(function(n,r,i){if(!ht(n.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ns(n.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ys(n)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()})(s,e,t):(function(n,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()})(0,e,t)}function qe(s,e,t,n){return s instanceof Ze?(function(r,i,o,a){if(!ht(r.precondition,i))return o;const u=r.value.clone(),c=ss(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null})(s,e,t,n):s instanceof he?(function(r,i,o,a){if(!ht(r.precondition,i))return o;const u=ss(r.fieldTransforms,a,i),c=i.data;return c.setAll(Ys(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((l=>l.field)))})(s,e,t,n):(function(r,i,o){return ht(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o})(s,e,t)}function Gi(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=Gs(n.transform,r||null);i!=null&&(t===null&&(t=j.empty()),t.set(n.field,i))}return t||null}function ts(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&Se(t,n,((r,i)=>zi(r,i)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Ze extends At{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class he extends At{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ys(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function ns(s,e,t){const n=new Map;k(s.length===t.length);for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,a=e.data.field(i.field);n.set(i.field,qi(o,a,t[r]))}return n}function ss(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,Ui(i,o,e))}return n}class hn extends At{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qi extends At{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ji{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ki(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=qe(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=qe(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=zs();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const u=Hs(o,a);u!==null&&n.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),A())}isEqual(e){return this.batchId===e.batchId&&Se(this.mutations,e.mutations,((t,n)=>ts(t,n)))&&Se(this.baseMutations,e.baseMutations,((t,n)=>ts(t,n)))}}class dn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){k(e.mutations.length===n.length);let r=Mi;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new dn(e,t,n,r)}}/**
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
 */class Wi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hi{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var x,N;function Yi(s){switch(s){default:return v();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Xs(s){if(s===void 0)return ne("GRPC error has no .code"),d.UNKNOWN;switch(s){case x.OK:return d.OK;case x.CANCELLED:return d.CANCELLED;case x.UNKNOWN:return d.UNKNOWN;case x.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case x.INTERNAL:return d.INTERNAL;case x.UNAVAILABLE:return d.UNAVAILABLE;case x.UNAUTHENTICATED:return d.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case x.NOT_FOUND:return d.NOT_FOUND;case x.ALREADY_EXISTS:return d.ALREADY_EXISTS;case x.PERMISSION_DENIED:return d.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case x.ABORTED:return d.ABORTED;case x.OUT_OF_RANGE:return d.OUT_OF_RANGE;case x.UNIMPLEMENTED:return d.UNIMPLEMENTED;case x.DATA_LOSS:return d.DATA_LOSS;default:return v()}}(N=x||(x={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fn{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ut}static getOrCreateInstance(){return ut===null&&(ut=new fn),ut}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let ut=null;/**
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
 */function Xi(){return new TextEncoder}/**
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
 */const Ji=new Te([4294967295,4294967295],0);function rs(s){const e=Xi().encode(s),t=new Wr;return t.update(e),new Uint8Array(t.digest())}function is(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Te([t,n],0),new Te([r,i],0)]}class mn{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fe(`Invalid padding: ${t}`);if(n<0)throw new Fe(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fe(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fe(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Te.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Te.fromNumber(n)));return r.compare(Ji)===1&&(r=new Te([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=rs(e),[n,r]=is(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(n,r,i);if(!this.At(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mn(i,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.It===0)return;const t=rs(e),[n,r]=is(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(n,r,i);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nt{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,et.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Nt(T.min(),r,new _(b),re(),A())}}class et{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new et(n,t,A(),A(),A())}}/**
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
 */class dt{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Js{constructor(e,t){this.targetId=e,this.Vt=t}}class Zs{constructor(e,t,n=K.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class os{constructor(){this.St=0,this.Dt=us(),this.Ct=K.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=A(),t=A(),n=A();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}})),new et(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=us()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Zi{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=re(),this.zt=as(),this.Wt=new _(b)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:v()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((n,r)=>{this.te(r)&&t(r)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const o=i.target;if(Kt(o))if(r===0){const a=new w(o.path);this.Yt(n,a,q.newNoDocument(a,T.min()))}else k(r===1);else{const a=this.ie(n);if(a!==r){const u=this.re(e,a);if(u!==0){this.ee(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,c)}(t=fn.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch((function(c,l,h){var f,g,I,S,E,F;const V={localCacheCount:l,existenceFilterCount:h.count},G=h.unchangedNames;return G&&(V.bloomFilter={applied:c===0,hashCount:(f=G==null?void 0:G.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(S=(I=(g=G==null?void 0:G.bits)===null||g===void 0?void 0:g.bitmap)===null||I===void 0?void 0:I.length)!==null&&S!==void 0?S:0,padding:(F=(E=G==null?void 0:G.bits)===null||E===void 0?void 0:E.padding)!==null&&F!==void 0?F:0}),V})(u,a,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=n;let u,c;try{u=me(i).toUint8Array()}catch(l){if(l instanceof Ds)return ze("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{c=new mn(u,o,a)}catch(l){return ze(l instanceof Fe?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return c.It===0?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.vt(a)||(this.Yt(e,i,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((i,o)=>{const a=this.se(o);if(a){if(i.current&&Kt(a.target)){const u=new w(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,q.newNoDocument(u,e))}i.Mt&&(t.set(o,i.Ot()),i.Ft())}}));let n=A();this.zt.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.jt.forEach(((i,o)=>o.setReadTime(e)));const r=new Nt(e,t,this.Wt,this.jt,n);return this.jt=re(),this.zt=as(),this.Wt=new _(b),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new os,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new z(b),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new os),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function as(){return new _(w.comparator)}function us(){return new _(w.comparator)}const eo={asc:"ASCENDING",desc:"DESCENDING"},to={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},no={and:"AND",or:"OR"};class so{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wt(s,e){return s.useProto3Json||Et(e)?e:{value:e}}function yt(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function er(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function ro(s,e){return yt(s,e.toTimestamp())}function J(s){return k(!!s),T.fromTimestamp((function(e){const t=ce(e);return new M(t.seconds,t.nanos)})(s))}function gn(s,e){return(function(t){return new D(["projects",t.projectId,"databases",t.database])})(s).child("documents").child(e).canonicalString()}function tr(s){const e=D.fromString(s);return k(ir(e)),e}function Ht(s,e){return gn(s.databaseId,e.path)}function Ot(s,e){const t=tr(e);if(t.get(1)!==s.databaseId.projectId)throw new p(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new p(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new w(nr(t))}function Yt(s,e){return gn(s.databaseId,e)}function io(s){const e=tr(s);return e.length===4?D.emptyPath():nr(e)}function Xt(s){return new D(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function nr(s){return k(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function cs(s,e,t){return{name:Ht(s,e),fields:t.value.mapValue.fields}}function oo(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:v()})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,c){return u.useProto3Json?(k(c===void 0||typeof c=="string"),K.fromBase64String(c||"")):(k(c===void 0||c instanceof Uint8Array),K.fromUint8Array(c||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const c=u.code===void 0?d.UNKNOWN:Xs(u.code);return new p(c,u.message||"")})(o);t=new Zs(n,r,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=Ot(s,n.document.name),i=J(n.document.updateTime),o=n.document.createTime?J(n.document.createTime):T.min(),a=new j({mapValue:{fields:n.document.fields}}),u=q.newFoundDocument(r,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new dt(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=Ot(s,n.document),i=n.readTime?J(n.readTime):T.min(),o=q.newNoDocument(r,i),a=n.removedTargetIds||[];t=new dt([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=Ot(s,n.document),i=n.removedTargetIds||[];t=new dt([],i,r,null)}else{if(!("filter"in e))return v();{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new Hi(r,i),a=n.targetId;t=new Js(a,o)}}return t}function ao(s,e){let t;if(e instanceof Ze)t={update:cs(s,e.key,e.value)};else if(e instanceof hn)t={delete:Ht(s,e.key)};else if(e instanceof he)t={update:cs(s,e.key,e.data),updateMask:yo(e.fieldMask)};else{if(!(e instanceof Qi))return v();t={verify:Ht(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(r,i){const o=i.transform;if(o instanceof je)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof We)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof He)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pt)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw v()})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(n,r){return r.updateTime!==void 0?{updateTime:ro(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:v()})(s,e.precondition)),t}function uo(s,e){return s&&s.length>0?(k(e!==void 0),s.map((t=>(function(n,r){let i=n.updateTime?J(n.updateTime):J(r);return i.isEqual(T.min())&&(i=J(r)),new $i(i,n.transformResults||[])})(t,e)))):[]}function co(s,e){return{documents:[Yt(s,e.path)]}}function lo(s,e){const t={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(t.parent=Yt(s,n),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Yt(s,n.popLast()),t.structuredQuery.from=[{collectionId:n.lastSegment()}]);const r=(function(u){if(u.length!==0)return rr(Y.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const i=(function(u){if(u.length!==0)return u.map((c=>(function(l){return{field:ve(l.field),direction:mo(l.dir)}})(c)))})(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=Wt(s,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),t}function ho(s){let e=io(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){k(n===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(l){const h=sr(l);return h instanceof Y&&Rs(h)?h.getFilters():[h]})(t.where));let o=[];t.orderBy&&(o=t.orderBy.map((l=>(function(h){return new Pe(Ee(h.field),(function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(h.direction))})(l))));let a=null;t.limit&&(a=(function(l){let h;return h=typeof l=="object"?l.value:l,Et(h)?null:h})(t.limit));let u=null;t.startAt&&(u=(function(l){const h=!!l.before,f=l.values||[];return new gt(f,h)})(t.startAt));let c=null;return t.endAt&&(c=(function(l){const h=!l.before,f=l.values||[];return new gt(f,h)})(t.endAt)),_i(e,r,o,i,a,"F",u,c)}function fo(s,e){const t=(function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sr(s){return s.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ee(e.unaryFilter.field);return L.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ee(e.unaryFilter.field);return L.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ee(e.unaryFilter.field);return L.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ee(e.unaryFilter.field);return L.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}})(s):s.fieldFilter!==void 0?(function(e){return L.create(Ee(e.fieldFilter.field),(function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}})(e.fieldFilter.op),e.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(e){return Y.create(e.compositeFilter.filters.map((t=>sr(t))),(function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}})(e.compositeFilter.op))})(s):v()}function mo(s){return eo[s]}function go(s){return to[s]}function po(s){return no[s]}function ve(s){return{fieldPath:s.canonicalString()}}function Ee(s){return B.fromServerFormat(s.fieldPath)}function rr(s){return s instanceof L?(function(e){if(e.op==="=="){if(Hn(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NAN"}};if(Wn(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hn(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NAN"}};if(Wn(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ve(e.field),op:go(e.op),value:e.value}}})(s):s instanceof Y?(function(e){const t=e.getFilters().map((n=>rr(n)));return t.length===1?t[0]:{compositeFilter:{op:po(e.op),filters:t}}})(s):v()}function yo(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ir(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class ie{constructor(e,t,n,r,i=T.min(),o=T.min(),a=K.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ie(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wo{constructor(e){this.fe=e}}function vo(s){const e=ho({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Qt(e,e.limit,"L"):e}/**
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
 */class Eo{constructor(){this.rn=new To}addToCollectionParentIndex(e,t){return this.rn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(ue.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(ue.min())}updateCollectionGroup(e,t,n){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class To{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new z(D.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new z(D.comparator)).toArray()}}/**
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
 */class be{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new be(0)}static Mn(){return new be(-1)}}/**
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
 */class Io{constructor(){this.changes=new xe((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,q.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?m.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Co{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class So{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&qe(n.mutation,r,W.empty(),M.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,A()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=A()){const r=de();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=Me();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=de();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,A())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let i=re();const o=Ue(),a=Ue();return t.forEach(((u,c)=>{const l=n.get(c.key);r.has(c.key)&&(l===void 0||l.mutation instanceof he)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),qe(l.mutation,c,l.mutation.getFieldMask(),M.now())):o.set(c.key,W.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),t.forEach(((c,l)=>{var h;return a.set(c,new Co(l,(h=o.get(c))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Ue();let r=new _(((o,a)=>o-a)),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||W.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(r.get(a.batchId)||A()).add(u);r=r.insert(a.batchId,h)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=zs();l.forEach((f=>{if(!i.has(f)){const g=Hs(t.get(f),n.get(f));g!==null&&h.set(f,g),i=i.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return m.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n){return(function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Os(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):m.resolve(de());let a=-1,u=i;return o.next((c=>m.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next((f=>{u=u.insert(l,f)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,A()))).next((l=>({batchId:a,changes:Bs(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next((n=>{let r=Me();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Me();return this.indexManager.getCollectionParents(e,r).next((o=>m.forEach(o,(a=>{const u=(function(c,l){return new Je(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)})(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,n).next((c=>{c.forEach(((l,h)=>{i=i.insert(l,h)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((i=>{r.forEach(((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,q.newInvalidDocument(c)))}));let o=Me();return i.forEach(((a,u)=>{const c=r.get(a);c!==void 0&&qe(c.mutation,u,W.empty(),M.now()),Ct(t,u)&&(o=o.insert(a,u))})),o}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return m.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:J(n.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,(function(n){return{name:n.name,query:vo(n.bundledQuery),readTime:J(n.readTime)}})(t)),m.resolve()}}/**
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
 */class No{constructor(){this.overlays=new _(w.comparator),this.ls=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const n=de();return m.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.we(e,t,i)})),m.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.ls.delete(n)),m.resolve()}getOverlaysForCollection(e,t,n){const r=de(),i=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&r.set(u.getKey(),u)}return m.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=de(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=de(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=r)););return m.resolve(a)}we(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Wi(t,n));let i=this.ls.get(t);i===void 0&&(i=A(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}/**
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
 */class pn{constructor(){this.fs=new z(O.ds),this.ws=new z(O._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new O(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.ys(new O(e,t))}ps(e,t){e.forEach((n=>this.removeReference(n,t)))}Is(e){const t=new w(new D([])),n=new O(t,e),r=new O(t,e+1),i=[];return this.ws.forEachInRange([n,r],(o=>{this.ys(o),i.push(o.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new w(new D([])),n=new O(t,e),r=new O(t,e+1);let i=A();return this.ws.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new O(e,0),n=this.fs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class O{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return w.comparator(e.key,t.key)||b(e.As,t.As)}static _s(e,t){return b(e.As,t.As)||w.comparator(e.key,t.key)}}/**
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
 */class bo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new z(O.ds)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ji(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new O(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new O(t,0),r=new O(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(o=>{const a=this.Ps(o.As);i.push(a)})),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new z(b);return t.forEach((r=>{const i=new O(r,0),o=new O(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],(a=>{n=n.add(a.As)}))})),m.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;w.isDocumentKey(i)||(i=i.child(""));const o=new O(new w(i),0);let a=new z(b);return this.Rs.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)}),o),m.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach((n=>{const r=this.Ps(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){k(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Rs;return m.forEach(t.mutations,(r=>{const i=new O(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new O(t,0),r=this.Rs.firstAfterOrEqual(n);return m.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Do{constructor(e){this.Ds=e,this.docs=new _(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return m.resolve(n?n.document.mutableCopy():q.newInvalidDocument(t))}getEntries(e,t){let n=re();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():q.newInvalidDocument(r))})),m.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=re();const o=t.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fi(di(l),n)<=0||(r.has(l.key)||Ct(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(e,t,n,r){v()}Cs(e,t){return m.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new ko(this)}getSize(e){return m.resolve(this.size)}}class ko extends Io{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),m.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class _o{constructor(e){this.persistence=e,this.xs=new xe((t=>un(t)),cn),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Ns=0,this.ks=new pn,this.targetCount=0,this.Ms=be.kn()}forEachTarget(e,t){return this.xs.forEach(((n,r)=>t(r))),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),m.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new be(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Fn(t),m.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),m.waitFor(i).next((()=>r))}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return m.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),m.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),m.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),m.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return m.resolve(n)}containsKey(e,t){return m.resolve(this.ks.containsKey(t))}}/**
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
 */class xo{constructor(e,t){this.$s={},this.overlays={},this.Os=new sn(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new _o(this),this.indexManager=new Eo,this.remoteDocumentCache=(function(n){return new Do(n)})((n=>this.referenceDelegate.Ls(n))),this.serializer=new wo(t),this.qs=new Ao(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new No,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new bo(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);const r=new Ro(this.Os.next());return this.referenceDelegate.Us(),n(r).next((i=>this.referenceDelegate.Ks(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Gs(e,t){return m.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Ro extends gi{constructor(e){super(),this.currentSequenceNumber=e}}class yn{constructor(e){this.persistence=e,this.Qs=new pn,this.js=null}static zs(e){return new yn(e)}get Ws(){if(this.js)return this.js;throw v()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),m.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),m.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((r=>this.Ws.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.Ws.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ws,(n=>{const r=w.fromPath(n);return this.Hs(e,r).next((i=>{i||t.removeEntry(r,T.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((n=>{n?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return m.or([()=>m.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
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
 */class wn{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=A(),r=A();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wn(e,t.fromCache,n,r)}}/**
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
 */class Lo{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((i=>i||this.Qi(e,t)))}Ki(e,t){if(Zn(t))return m.resolve(null);let n=se(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Qt(t,null,"F"),n=se(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=A(...i);return this.Ui.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((u=>{const c=this.ji(t,a);return this.zi(t,c,o,u.readTime)?this.Ki(e,Qt(t,null,"F")):this.Wi(e,c,t,u)}))))})))))}Gi(e,t,n,r){return Zn(t)||r.isEqual(T.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const o=this.ji(t,i);return this.zi(t,o,n,r)?this.Qi(e,t):($n()<=Be.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jt(t)),this.Wi(e,o,t,hi(r,-1)))}))}ji(e,t){let n=new z(Us(e));return t.forEach(((r,i)=>{Ct(e,i)&&(n=n.add(i))})),n}zi(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return $n()<=Be.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",jt(t)),this.Ui.getDocumentsMatchingQuery(e,t,ue.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new _(b),this.Yi=new xe((i=>un(i)),cn),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new So(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Fo(s,e,t,n){return new Mo(s,e,t,n)}async function or(s,e){const t=C(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.tr(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=A();for(const c of r){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next((c=>({er:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function Vo(s,e){const t=C(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.Zi.newChangeBuffer({trackRemovals:!0});return(function(o,a,u,c){const l=u.batch,h=l.keys();let f=m.resolve();return h.forEach((g=>{f=f.next((()=>c.getEntry(a,g))).next((I=>{const S=u.docVersions.get(g);k(S!==null),I.version.compareTo(S)<0&&(l.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),c.addEntry(I)))}))})),f.next((()=>o.mutationQueue.removeMutationBatch(a,l)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function ar(s){const e=C(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Oo(s,e){const t=C(s),n=e.snapshotVersion;let r=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});r=t.Ji;const a=[];e.targetChanges.forEach(((l,h)=>{const f=r.get(h);if(!f)return;a.push(t.Bs.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.Bs.addMatchingKeys(i,l.addedDocuments,h))));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(K.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,n)),r=r.insert(h,g),(function(I,S,E){return I.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0})(f,g,l)&&a.push(t.Bs.updateTargetData(i,g))}));let u=re(),c=A();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(Po(i,o,e.documentUpdates).next((l=>{u=l.nr,c=l.sr}))),!n.isEqual(T.min())){const l=t.Bs.getLastRemoteSnapshotVersion(i).next((h=>t.Bs.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return m.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.Ji=r,i)))}function Po(s,e,t){let n=A(),r=A();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=re();return t.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{nr:o,sr:r}}))}function Uo(s,e){const t=C(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function qo(s,e){const t=C(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.Bs.getTargetData(n,e).next((i=>i?(r=i,m.resolve(r)):t.Bs.allocateTargetId(n).next((o=>(r=new ie(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Bs.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Ji.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(n.targetId,n),t.Yi.set(e,n.targetId)),n}))}async function Jt(s,e,t){const n=C(s),r=n.Ji.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Xe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ji=n.Ji.remove(e),n.Yi.delete(r.target)}function ls(s,e,t){const n=C(s);let r=T.min(),i=A();return n.persistence.runTransaction("Execute query","readonly",(o=>(function(a,u,c){const l=C(a),h=l.Yi.get(c);return h!==void 0?m.resolve(l.Ji.get(h)):l.Bs.getTargetData(u,c)})(n,o,se(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.Bs.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Hi.getDocumentsMatchingQuery(o,e,t?r:T.min(),t?i:A()))).next((a=>(Bo(n,xi(e),a),{documents:a,ir:i})))))}function Bo(s,e,t){let n=s.Xi.get(e)||T.min();t.forEach(((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),s.Xi.set(e,n)}class hs{constructor(){this.activeTargetIds=Oi()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zo{constructor(){this.Hr=new hs,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new hs,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $o{Yr(e){}shutdown(){}}/**
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
 */class ds{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ct=null;function Pt(){return ct===null?ct=268435456+Math.round(2147483648*Math.random()):ct++,"0x"+ct.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Go{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const U="WebChannelConnection";class Qo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const o=Pt(),a=this.To(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,n);const u={};return this.Eo(u,r,i),this.Ao(e,a,u,n).then((c=>(y("RestConnection",`Received RPC '${e}' ${o}: `,c),c)),(c=>{throw ze("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",n),c}))}vo(e,t,n,r,i,o){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_e,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r))}To(e,t){const n=Ko[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Pt();return new Promise(((o,a)=>{const u=new Yr;u.setWithCredentials(!0),u.listenOnce(Xr.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Vt.NO_ERROR:const l=u.getResponseJson();y(U,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Vt.TIMEOUT:y(U,`RPC '${e}' ${i} timed out`),a(new p(d.DEADLINE_EXCEEDED,"Request time out"));break;case Vt.HTTP_ERROR:const h=u.getStatus();if(y(U,`RPC '${e}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const I=(function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(E)>=0?E:d.UNKNOWN})(g.status);a(new p(I,g.message))}else a(new p(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new p(d.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{y(U,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);y(U,`RPC '${e}' ${i} sending request:`,r),u.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Pt(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jr(),a=Zr(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new ei({})),this.Eo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=i.join("");y(U,`Creating RPC '${e}' stream ${r}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,g=!1;const I=new Go({ro:E=>{g?y(U,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(f||(y(U,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),y(U,`RPC '${e}' stream ${r} sending:`,E),h.send(E))},oo:()=>h.close()}),S=(E,F,V)=>{E.listen(F,(G=>{try{V(G)}catch(X){setTimeout((()=>{throw X}),0)}}))};return S(h,it.EventType.OPEN,(()=>{g||y(U,`RPC '${e}' stream ${r} transport opened.`)})),S(h,it.EventType.CLOSE,(()=>{g||(g=!0,y(U,`RPC '${e}' stream ${r} transport closed`),I.wo())})),S(h,it.EventType.ERROR,(E=>{g||(g=!0,ze(U,`RPC '${e}' stream ${r} transport errored:`,E),I.wo(new p(d.UNAVAILABLE,"The operation could not be completed")))})),S(h,it.EventType.MESSAGE,(E=>{var F;if(!g){const V=E.data[0];k(!!V);const G=V,X=G.error||((F=G[0])===null||F===void 0?void 0:F.error);if(X){y(U,`RPC '${e}' stream ${r} received error:`,X);const rt=X.status;let Ft=(function(Br){const Un=x[Br];if(Un!==void 0)return Xs(Un)})(rt),Pn=X.message;Ft===void 0&&(Ft=d.INTERNAL,Pn="Unknown error status: "+rt+" with message "+X.message),g=!0,I.wo(new p(Ft,Pn)),h.close()}else y(U,`RPC '${e}' stream ${r} received:`,V),I._o(V)}})),S(a,ti.STAT_EVENT,(E=>{E.stat===Bn.PROXY?y(U,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===Bn.NOPROXY&&y(U,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{I.fo()}),0),I}}function Ut(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(s){return new so(s,!0)}/**
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
 */class ur{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class cr{constructor(e,t,n,r,i,o,a,u){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ur(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===d.RESOURCE_EXHAUSTED?(ne(t.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.Fo===t&&this.Zo(n,r)}),(n=>{e((()=>{const r=new p(d.UNKNOWN,"Fetching auth token failed: "+n.message);return this.tu(r)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((r=>{n((()=>this.tu(r)))})),this.stream.onMessage((r=>{n((()=>this.onMessage(r)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jo extends cr{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=oo(this.serializer,e),n=(function(r){if(!("targetChange"in r))return T.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?T.min():i.readTime?J(i.readTime):T.min()})(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Xt(this.serializer),t.addTarget=(function(r,i){let o;const a=i.target;if(o=Kt(a)?{documents:co(r,a)}:{query:lo(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=er(r,i.resumeToken);const u=Wt(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(T.min())>0){o.readTime=yt(r,i.snapshotVersion.toTimestamp());const u=Wt(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o})(this.serializer,e);const n=fo(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Xt(this.serializer),t.removeTarget=e,this.Wo(t)}}class Wo extends cr{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(k(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=uo(e.writeResults,e.commitTime),n=J(e.commitTime);return this.listener.cu(n,t)}return k(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Xt(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ao(this.serializer,n)))};this.Wo(t)}}/**
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
 */class Ho extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new p(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new p(d.UNKNOWN,r.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(e,t,n,i,o,r))).catch((i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(d.UNKNOWN,i.toString())}))}terminate(){this.lu=!0}}class Yo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ne(t),this.mu=!1):y("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class Xo{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((o=>{n.enqueueAndForget((async()=>{we(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await(async function(a){const u=C(a);u.vu.add(4),await tt(u),u.bu.set("Unknown"),u.vu.delete(4),await Dt(u)})(this))}))})),this.bu=new Yo(n,r)}}async function Dt(s){if(we(s))for(const e of s.Ru)await e(!0)}async function tt(s){for(const e of s.Ru)await e(!1)}function lr(s,e){const t=C(s);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Tn(t)?En(t):Re(t).Ko()&&vn(t,e))}function hr(s,e){const t=C(s),n=Re(t);t.Au.delete(e),n.Ko()&&dr(t,e),t.Au.size===0&&(n.Ko()?n.jo():we(t)&&t.bu.set("Unknown"))}function vn(s,e){if(s.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(T.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Re(s).su(e)}function dr(s,e){s.Vu.qt(e),Re(s).iu(e)}function En(s){s.Vu=new Zi({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),le:e=>s.Au.get(e)||null,ue:()=>s.datastore.serializer.databaseId}),Re(s).start(),s.bu.gu()}function Tn(s){return we(s)&&!Re(s).Uo()&&s.Au.size>0}function we(s){return C(s).vu.size===0}function fr(s){s.Vu=void 0}async function Jo(s){s.Au.forEach(((e,t)=>{vn(s,e)}))}async function Zo(s,e){fr(s),Tn(s)?(s.bu.Iu(e),En(s)):s.bu.set("Unknown")}async function ea(s,e,t){if(s.bu.set("Online"),e instanceof Zs&&e.state===2&&e.cause)try{await(async function(n,r){const i=r.cause;for(const o of r.targetIds)n.Au.has(o)&&(await n.remoteSyncer.rejectListen(o,i),n.Au.delete(o),n.Vu.removeTarget(o))})(s,e)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wt(s,n)}else if(e instanceof dt?s.Vu.Ht(e):e instanceof Js?s.Vu.ne(e):s.Vu.Xt(e),!t.isEqual(T.min()))try{const n=await ar(s.localStore);t.compareTo(n)>=0&&await(function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach(((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}})),o.targetMismatches.forEach(((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),dr(r,a);const l=new ie(c.target,a,u,c.sequenceNumber);vn(r,l)})),r.remoteSyncer.applyRemoteEvent(o)})(s,t)}catch(n){y("RemoteStore","Failed to raise snapshot:",n),await wt(s,n)}}async function wt(s,e,t){if(!Xe(e))throw e;s.vu.add(1),await tt(s),s.bu.set("Offline"),t||(t=()=>ar(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),s.vu.delete(1),await Dt(s)}))}function mr(s,e){return e().catch((t=>wt(s,t,e)))}async function kt(s){const e=C(s),t=le(e);let n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ta(e);)try{const r=await Uo(e.localStore,n);if(r===null){e.Eu.length===0&&t.jo();break}n=r.batchId,na(e,r)}catch(r){await wt(e,r)}gr(e)&&pr(e)}function ta(s){return we(s)&&s.Eu.length<10}function na(s,e){s.Eu.push(e);const t=le(s);t.Ko()&&t.ou&&t.uu(e.mutations)}function gr(s){return we(s)&&!le(s).Uo()&&s.Eu.length>0}function pr(s){le(s).start()}async function sa(s){le(s).hu()}async function ra(s){const e=le(s);for(const t of s.Eu)e.uu(t.mutations)}async function ia(s,e,t){const n=s.Eu.shift(),r=dn.from(n,e,t);await mr(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await kt(s)}async function oa(s,e){e&&le(s).ou&&await(async function(t,n){if(r=n.code,Yi(r)&&r!==d.ABORTED){const i=t.Eu.shift();le(t).Qo(),await mr(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,n))),await kt(t)}var r})(s,e),gr(s)&&pr(s)}async function fs(s,e){const t=C(s);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const n=we(t);t.vu.add(3),await tt(t),n&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Dt(t)}async function aa(s,e){const t=C(s);e?(t.vu.delete(2),await Dt(t)):e||(t.vu.add(2),await tt(t),t.bu.set("Unknown"))}function Re(s){return s.Su||(s.Su=(function(e,t,n){const r=C(e);return r.fu(),new jo(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)})(s.datastore,s.asyncQueue,{uo:Jo.bind(null,s),ao:Zo.bind(null,s),nu:ea.bind(null,s)}),s.Ru.push((async e=>{e?(s.Su.Qo(),Tn(s)?En(s):s.bu.set("Unknown")):(await s.Su.stop(),fr(s))}))),s.Su}function le(s){return s.Du||(s.Du=(function(e,t,n){const r=C(e);return r.fu(),new Wo(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)})(s.datastore,s.asyncQueue,{uo:sa.bind(null,s),ao:oa.bind(null,s),au:ra.bind(null,s),cu:ia.bind(null,s)}),s.Ru.push((async e=>{e?(s.Du.Qo(),await kt(s)):(await s.Du.stop(),s.Eu.length>0&&(y("RemoteStore",`Stopping write stream with ${s.Eu.length} pending writes`),s.Eu=[]))}))),s.Du}/**
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
 */class In{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new In(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cn(s,e){if(ne("AsyncQueue",`${e}: ${s}`),Xe(s))return new p(d.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class Ce{constructor(e){this.comparator=e?(t,n)=>e(t,n)||w.comparator(t.key,n.key):(t,n)=>w.comparator(t.key,n.key),this.keyedMap=Me(),this.sortedSet=new _(this.comparator)}static emptySet(e){return new Ce(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ce;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ms{constructor(){this.Cu=new _(w.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?e.type!==0&&n.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&n.type!==1?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Cu=this.Cu.remove(t):e.type===1&&n.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):v():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class De{constructor(e,t,n,r,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new De(e,t,Ce.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&It(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class ua{constructor(){this.Nu=void 0,this.listeners=[]}}class ca{constructor(){this.queries=new xe((e=>Ps(e)),It),this.onlineState="Unknown",this.ku=new Set}}async function yr(s,e){const t=C(s),n=e.query;let r=!1,i=t.queries.get(n);if(i||(r=!0,i=new ua),r)try{i.Nu=await t.onListen(n)}catch(o){const a=Cn(o,`Initialization of query '${jt(e.query)}' failed`);return void e.onError(a)}t.queries.set(n,i),i.listeners.push(e),e.Mu(t.onlineState),i.Nu&&e.$u(i.Nu)&&Sn(t)}async function wr(s,e){const t=C(s),n=e.query;let r=!1;const i=t.queries.get(n);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(n),t.onUnlisten(n)}function la(s,e){const t=C(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(n=!0);o.Nu=r}}n&&Sn(t)}function ha(s,e,t){const n=C(s),r=n.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);n.queries.delete(e)}function Sn(s){s.ku.forEach((e=>{e.next()}))}class vr{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new De(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n=t!=="Offline";return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=De.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Er{constructor(e){this.key=e}}class Tr{constructor(e){this.key=e}}class da{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=A(),this.mutatedKeys=A(),this.tc=Us(e),this.ec=new Ce(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new ms,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((l,h)=>{const f=r.get(l),g=Ct(this.query,h)?h:null,I=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;f&&g?f.data.isEqual(g.data)?I!==S&&(n.track({type:3,doc:g}),E=!0):this.rc(f,g)||(n.track({type:2,doc:g}),E=!0,(u&&this.tc(g,u)>0||c&&this.tc(g,c)<0)&&(a=!0)):!f&&g?(n.track({type:0,doc:g}),E=!0):f&&!g&&(n.track({type:1,doc:f}),E=!0,(u||c)&&(a=!0)),E&&(g?(o=o.add(g),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{ec:o,ic:n,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((c,l)=>(function(h,f){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return g(h)-g(f)})(c.type,l.type)||this.tc(c.doc,l.doc))),this.oc(n);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new De(this.query,e.ec,r,i,e.mutatedKeys,a===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ms,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=A(),this.ec.forEach((n=>{this.ac(n.key)&&(this.Zu=this.Zu.add(n.key))}));const t=[];return e.forEach((n=>{this.Zu.has(n)||t.push(new Tr(n))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Er(n))})),t}hc(e){this.Yu=e.ir,this.Zu=A();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return De.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class fa{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ma{constructor(e){this.key=e,this.fc=!1}}class ga{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new xe((a=>Ps(a)),It),this._c=new Map,this.mc=new Set,this.gc=new _(w.comparator),this.yc=new Map,this.Ic=new pn,this.Tc={},this.Ec=new Map,this.Ac=be.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function pa(s,e){const t=Na(s);let n,r;const i=t.wc.get(e);if(i)n=i.targetId,t.sharedClientState.addLocalQueryTarget(n),r=i.view.lc();else{const o=await qo(t.localStore,se(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);n=o.targetId,r=await ya(t,e,n,a==="current",o.resumeToken),t.isPrimaryClient&&lr(t.remoteStore,o)}return r}async function ya(s,e,t,n,r){s.Rc=(h,f,g)=>(async function(I,S,E,F){let V=S.view.sc(E);V.zi&&(V=await ls(I.localStore,S.query,!1).then((({documents:rt})=>S.view.sc(rt,V))));const G=F&&F.targetChanges.get(S.targetId),X=S.view.applyChanges(V,I.isPrimaryClient,G);return ps(I,S.targetId,X.cc),X.snapshot})(s,h,f,g);const i=await ls(s.localStore,e,!0),o=new da(e,i.ir),a=o.sc(i.documents),u=et.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),c=o.applyChanges(a,s.isPrimaryClient,u);ps(s,t,c.cc);const l=new fa(e,t,o);return s.wc.set(e,l),s._c.has(t)?s._c.get(t).push(e):s._c.set(t,[e]),c.snapshot}async function wa(s,e){const t=C(s),n=t.wc.get(e),r=t._c.get(n.targetId);if(r.length>1)return t._c.set(n.targetId,r.filter((i=>!It(i,e)))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(n.targetId),t.sharedClientState.isActiveQueryTarget(n.targetId)||await Jt(t.localStore,n.targetId,!1).then((()=>{t.sharedClientState.clearQueryState(n.targetId),hr(t.remoteStore,n.targetId),Zt(t,n.targetId)})).catch(Ye)):(Zt(t,n.targetId),await Jt(t.localStore,n.targetId,!0))}async function va(s,e,t){const n=ba(s);try{const r=await(function(i,o){const a=C(i),u=M.now(),c=o.reduce(((f,g)=>f.add(g.key)),A());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",(f=>{let g=re(),I=A();return a.Zi.getEntries(f,c).next((S=>{g=S,g.forEach(((E,F)=>{F.isValidDocument()||(I=I.add(E))}))})).next((()=>a.localDocuments.getOverlayedDocuments(f,g))).next((S=>{l=S;const E=[];for(const F of o){const V=Gi(F,l.get(F.key).overlayedDocument);V!=null&&E.push(new he(F.key,V,ks(V.value.mapValue),H.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,E,o)})).next((S=>{h=S;const E=S.applyToLocalDocumentSet(l,I);return a.documentOverlayCache.saveOverlays(f,S.batchId,E)}))})).then((()=>({batchId:h.batchId,changes:Bs(l)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(i,o,a){let u=i.Tc[i.currentUser.toKey()];u||(u=new _(b)),u=u.insert(o,a),i.Tc[i.currentUser.toKey()]=u})(n,r.batchId,t),await nt(n,r.changes),await kt(n.remoteStore)}catch(r){const i=Cn(r,"Failed to persist write");t.reject(i)}}async function Ir(s,e){const t=C(s);try{const n=await Oo(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.yc.get(i);o&&(k(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?k(o.fc):r.removedDocuments.size>0&&(k(o.fc),o.fc=!1))})),await nt(t,n,e)}catch(n){await Ye(n)}}function gs(s,e,t){const n=C(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.wc.forEach(((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)})),(function(i,o){const a=C(i);a.onlineState=o;let u=!1;a.queries.forEach(((c,l)=>{for(const h of l.listeners)h.Mu(o)&&(u=!0)})),u&&Sn(a)})(n.eventManager,e),r.length&&n.dc.nu(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Ea(s,e,t){const n=C(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.yc.get(e),i=r&&r.key;if(i){let o=new _(w.comparator);o=o.insert(i,q.newNoDocument(i,T.min()));const a=A().add(i),u=new Nt(T.min(),new Map,new _(b),o,a);await Ir(n,u),n.gc=n.gc.remove(i),n.yc.delete(e),An(n)}else await Jt(n.localStore,e,!1).then((()=>Zt(n,e,t))).catch(Ye)}async function Ta(s,e){const t=C(s),n=e.batch.batchId;try{const r=await Vo(t.localStore,e);Sr(t,n,null),Cr(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await nt(t,r)}catch(r){await Ye(r)}}async function Ia(s,e,t){const n=C(s);try{const r=await(function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next((l=>(k(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l)))).next((()=>a.mutationQueue.performConsistencyCheck(u))).next((()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o))).next((()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c))).next((()=>a.localDocuments.getDocuments(u,c)))}))})(n.localStore,e);Sr(n,e,t),Cr(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await nt(n,r)}catch(r){await Ye(r)}}function Cr(s,e){(s.Ec.get(e)||[]).forEach((t=>{t.resolve()})),s.Ec.delete(e)}function Sr(s,e,t){const n=C(s);let r=n.Tc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Tc[n.currentUser.toKey()]=r}}function Zt(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s._c.get(e))s.wc.delete(n),t&&s.dc.Pc(n,t);s._c.delete(e),s.isPrimaryClient&&s.Ic.Is(e).forEach((n=>{s.Ic.containsKey(n)||Ar(s,n)}))}function Ar(s,e){s.mc.delete(e.path.canonicalString());const t=s.gc.get(e);t!==null&&(hr(s.remoteStore,t),s.gc=s.gc.remove(e),s.yc.delete(t),An(s))}function ps(s,e,t){for(const n of t)n instanceof Er?(s.Ic.addReference(n.key,e),Ca(s,n)):n instanceof Tr?(y("SyncEngine","Document no longer in limbo: "+n.key),s.Ic.removeReference(n.key,e),s.Ic.containsKey(n.key)||Ar(s,n.key)):v()}function Ca(s,e){const t=e.key,n=t.path.canonicalString();s.gc.get(t)||s.mc.has(n)||(y("SyncEngine","New document in limbo: "+t),s.mc.add(n),An(s))}function An(s){for(;s.mc.size>0&&s.gc.size<s.maxConcurrentLimboResolutions;){const e=s.mc.values().next().value;s.mc.delete(e);const t=new w(D.fromString(e)),n=s.Ac.next();s.yc.set(n,new ma(t)),s.gc=s.gc.insert(t,n),lr(s.remoteStore,new ie(se(Tt(t.path)),n,"TargetPurposeLimboResolution",sn.ct))}}async function nt(s,e,t){const n=C(s),r=[],i=[],o=[];n.wc.isEmpty()||(n.wc.forEach(((a,u)=>{o.push(n.Rc(u,e,t).then((c=>{if((c||t)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const l=wn.Li(u.targetId,c);i.push(l)}})))})),await Promise.all(o),n.dc.nu(r),await(async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",(l=>m.forEach(u,(h=>m.forEach(h.Fi,(f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f))).next((()=>m.forEach(h.Bi,(f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))))))}catch(l){if(!Xe(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.Ji.get(h),g=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(g);c.Ji=c.Ji.insert(h,I)}}})(n.localStore,i))}async function Sa(s,e){const t=C(s);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const n=await or(t.localStore,e);t.currentUser=e,(function(r,i){r.Ec.forEach((o=>{o.forEach((a=>{a.reject(new p(d.CANCELLED,i))}))})),r.Ec.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await nt(t,n.er)}}function Aa(s,e){const t=C(s),n=t.yc.get(e);if(n&&n.fc)return A().add(n.key);{let r=A();const i=t._c.get(e);if(!i)return r;for(const o of i){const a=t.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function Na(s){const e=C(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ir.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Aa.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ea.bind(null,e),e.dc.nu=la.bind(null,e.eventManager),e.dc.Pc=ha.bind(null,e.eventManager),e}function ba(s){const e=C(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ta.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ia.bind(null,e),e}class ys{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bt(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Fo(this.persistence,new Lo,e.initialUser,this.serializer)}createPersistence(e){return new xo(yn.zs,this.serializer)}createSharedClientState(e){return new zo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Da{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gs(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sa.bind(null,this.syncEngine),await aa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ca}createDatastore(e){const t=bt(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Qo(r));var r;return(function(i,o,a,u){return new Ho(i,o,a,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=a=>gs(this.syncEngine,a,0),o=ds.D()?new ds:new $o,new Xo(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return(function(n,r,i,o,a,u,c){const l=new ga(n,r,i,o,a,u);return c&&(l.vc=!0),l})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return(async function(e){const t=C(e);y("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await tt(t),t.Pu.shutdown(),t.bu.set("Unknown")})(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ne("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class ka{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Q.UNAUTHENTICATED,this.clientId=Ns.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i})),this.appCheckCredentials.start(n,(i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Cn(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function qt(s,e){s.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await s.getConfiguration();await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await or(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function ws(s,e){s.asyncQueue.verifyOperationInProgress();const t=await xa(s);y("FirestoreClient","Initializing OnlineComponentProvider");const n=await s.getConfiguration();await e.initialize(t,n),s.setCredentialChangeListener((r=>fs(e.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,i)=>fs(e.remoteStore,i))),s._onlineComponents=e}function _a(s){return s.name==="FirebaseError"?s.code===d.FAILED_PRECONDITION||s.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}async function xa(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await qt(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!_a(t))throw t;ze("Error using user provided cache. Falling back to memory cache: "+t),await qt(s,new ys)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await qt(s,new ys);return s._offlineComponents}async function br(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await ws(s,s._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await ws(s,new Da))),s._onlineComponents}function Ra(s){return br(s).then((e=>e.syncEngine))}async function en(s){const e=await br(s),t=e.eventManager;return t.onListen=pa.bind(null,e.syncEngine),t.onUnlisten=wa.bind(null,e.syncEngine),t}function La(s,e,t={}){const n=new oe;return s.asyncQueue.enqueueAndForget((async()=>(function(r,i,o,a,u){const c=new Nr({next:h=>{i.enqueueAndForget((()=>wr(r,l)));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new p(d.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new p(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new vr(Tt(o.path),c,{includeMetadataChanges:!0,Ku:!0});return yr(r,l)})(await en(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function Dr(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map;/**
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
 */function kr(s,e,t){if(!t)throw new p(d.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Ma(s,e,t,n){if(e===!0&&n===!0)throw new p(d.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Es(s){if(!w.isDocumentKey(s))throw new p(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Ts(s){if(w.isDocumentKey(s))throw new p(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function _t(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(t){return t.constructor?t.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":v()}function Z(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new p(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_t(s);throw new p(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new p(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ma("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dr((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new p(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new p(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new p(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Nn{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Is({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Is(e),e.credentials!==void 0&&(this._authCredentials=(function(t){if(!t)return new si;switch(t.type){case"firstParty":return new oi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new p(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=vs.get(e);t&&(y("ComponentProvider","Removing Datastore"),vs.delete(e),t.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $(this.firestore,e,this._key)}}class Le{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Le(this.firestore,e,this._query)}}class ae extends Le{constructor(e,t,n){super(e,t,Tt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $(this.firestore,null,new w(e))}withConverter(e){return new ae(this.firestore,e,this._path)}}function Za(s,e,...t){if(s=ee(s),kr("collection","path",e),s instanceof Nn){const n=D.fromString(e,...t);return Ts(n),new ae(s,null,n)}{if(!(s instanceof $||s instanceof ae))throw new p(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(D.fromString(e,...t));return Ts(n),new ae(s.firestore,null,n)}}function eu(s,e,...t){if(s=ee(s),arguments.length===1&&(e=Ns.A()),kr("doc","path",e),s instanceof Nn){const n=D.fromString(e,...t);return Es(n),new $(s,null,new w(n))}{if(!(s instanceof $||s instanceof ae))throw new p(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(D.fromString(e,...t));return Es(n),new $(s.firestore,s instanceof ae?s.converter:null,new w(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ur(this,"async_queue_retry"),this.Xc=()=>{const t=Ut();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ut();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ut();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new oe;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Xe(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((n=>{this.Wc=n,this.Hc=!1;const r=(function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o})(n);throw ne("INTERNAL UNHANDLED ERROR: ",r),n})).then((n=>(this.Hc=!1,n))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=In.createAndSchedule(this,e,t,n,(i=>this.na(i)));return this.zc.push(r),r}Zc(){this.Wc&&v()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Cs(s){return(function(e,t){if(typeof e!="object"||e===null)return!1;const n=e;for(const r of t)if(r in n&&typeof n[r]=="function")return!0;return!1})(s,["next","error","complete"])}class pe extends Nn{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Fa,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_r(this),this._firestoreClient.terminate()}}function tu(s,e,t){t||(t="(default)");const n=Qr(s,"firestore");if(n.isInitialized(t)){const r=n.getImmediate({identifier:t}),i=n.getOptions(t);if(jr(i,e))return r;throw new p(d.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new p(d.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function bn(s){return s._firestoreClient||_r(s),s._firestoreClient.verifyNotTerminated(),s._firestoreClient}function _r(s){var e,t,n;const r=s._freezeSettings(),i=(function(o,a,u,c){return new wi(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Dr(c.experimentalLongPollingOptions),c.useFetchStreams)})(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,r);s._firestoreClient=new ka(s._authCredentials,s._appCheckCredentials,s._queue,i),!((t=r.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=r.cache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ke(K.fromBase64String(e))}catch(t){throw new p(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ke(K.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._methodName=e}}/**
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
 */class Dn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return b(this._lat,e._lat)||b(this._long,e._long)}}/**
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
 */const Va=/^__.*__$/;class Oa{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new he(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ze(e,this.data,t,this.fieldTransforms)}}class xr{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new he(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rr(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class kn{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new kn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return vt(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Rr(this.ca)&&Va.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Pa{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bt(e)}ya(e,t,n,r=!1){return new kn({ca:e,methodName:t,ga:n,path:B.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _n(s){const e=s._freezeSettings(),t=bt(s._databaseId);return new Pa(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Ua(s,e,t,n,r,i={}){const o=s.ya(i.merge||i.mergeFields?2:0,e,t,r);Rn("Data must be an object, but it was:",o,n);const a=Lr(n,o);let u,c;if(i.merge)u=new W(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=tn(e,h,t);if(!o.contains(f))throw new p(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Fr(l,f)||l.push(f)}u=new W(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new Oa(new j(a),u,c)}class Lt extends Rt{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lt}}class xn extends Rt{_toFieldTransform(e){return new Bi(e.path,new je)}isEqual(e){return e instanceof xn}}function qa(s,e,t,n){const r=s.ya(1,e,t);Rn("Data must be an object, but it was:",r,n);const i=[],o=j.empty();ye(n,((u,c)=>{const l=Ln(e,u,t);c=ee(c);const h=r.da(l);if(c instanceof Lt)i.push(l);else{const f=st(c,h);f!=null&&(i.push(l),o.set(l,f))}}));const a=new W(i);return new xr(o,a,r.fieldTransforms)}function Ba(s,e,t,n,r,i){const o=s.ya(1,e,t),a=[tn(e,n,t)],u=[r];if(i.length%2!=0)throw new p(d.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(tn(e,i[f])),u.push(i[f+1]);const c=[],l=j.empty();for(let f=a.length-1;f>=0;--f)if(!Fr(c,a[f])){const g=a[f];let I=u[f];I=ee(I);const S=o.da(g);if(I instanceof Lt)c.push(g);else{const E=st(I,S);E!=null&&(c.push(g),l.set(g,E))}}const h=new W(c);return new xr(l,h,o.fieldTransforms)}function za(s,e,t,n=!1){return st(t,s.ya(n?4:3,e))}function st(s,e){if(Mr(s=ee(s)))return Rn("Unsupported field value:",e,s),Lr(s,e);if(s instanceof Rt)return(function(t,n){if(!Rr(n.ca))throw n._a(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n._a(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(n);r&&n.fieldTransforms.push(r)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return(function(t,n){const r=[];let i=0;for(const o of t){let a=st(o,n.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}})(s,e)}return(function(t,n){if((t=ee(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Pi(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=M.fromDate(t);return{timestampValue:yt(n.serializer,r)}}if(t instanceof M){const r=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:yt(n.serializer,r)}}if(t instanceof Dn)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ke)return{bytesValue:er(n.serializer,t._byteString)};if(t instanceof $){const r=n.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw n._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:gn(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n._a(`Unsupported field value: ${_t(t)}`)})(s,e)}function Lr(s,e){const t={};return bs(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ye(s,((n,r)=>{const i=st(r,e.ha(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Mr(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof M||s instanceof Dn||s instanceof ke||s instanceof $||s instanceof Rt)}function Rn(s,e,t){if(!Mr(t)||!(function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)})(t)){const n=_t(t);throw n==="an object"?e._a(s+" a custom object"):e._a(s+" "+n)}}function tn(s,e,t){if((e=ee(e))instanceof xt)return e._internalPath;if(typeof e=="string")return Ln(s,e);throw vt("Field path arguments must be of type string or ",s,!1,void 0,t)}const $a=new RegExp("[~\\*/\\[\\]]");function Ln(s,e,t){if(e.search($a)>=0)throw vt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new xt(...e.split("."))._internalPath}catch{throw vt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function vt(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${r}`),u+=")"),new p(d.INVALID_ARGUMENT,a+s+u)}function Fr(s,e){return s.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ka(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ka extends Vr{data(){return super.data()}}function Mn(s,e){return typeof e=="string"?Ln(s,e):e instanceof xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new p(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fn{}class Qa extends Fn{}function nu(s,e,...t){let n=[];e instanceof Fn&&n.push(e),n=n.concat(t),(function(r){const i=r.filter((a=>a instanceof Vn)).length,o=r.filter((a=>a instanceof Mt)).length;if(i>1||i>0&&o>0)throw new p(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class Mt extends Qa{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Mt(e,t,n)}_apply(e){const t=this._parse(e);return Or(e._query,t),new Le(e.firestore,e.converter,Gt(e._query,t))}_parse(e){const t=_n(e.firestore);return(function(r,i,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new p(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){As(l,c);const f=[];for(const g of l)f.push(Ss(a,r,g));h={arrayValue:{values:f}}}else h=Ss(a,r,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||As(l,c),h=za(o,i,l,c==="in"||c==="not-in");return L.create(u,c,h)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function su(s,e,t){const n=e,r=Mn("where",s);return Mt._create(r,n,t)}class Vn extends Fn{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vn(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Y.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(n,r){let i=n;const o=r.getFlattenedFilters();for(const a of o)Or(i,a),i=Gt(i,a)})(e._query,t),new Le(e.firestore,e.converter,Gt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ss(s,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new p(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Os(e)&&t.indexOf("/")!==-1)throw new p(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(D.fromString(t));if(!w.isDocumentKey(n))throw new p(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return jn(s,new w(n))}if(t instanceof $)return jn(s,t._key);throw new p(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_t(t)}.`)}function As(s,e){if(!Array.isArray(s)||s.length===0)throw new p(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Or(s,e){if(e.isInequality()){const n=ln(s),r=e.field;if(n!==null&&!n.isEqual(r))throw new p(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Vs(s);i!==null&&ja(s,r,i)}const t=(function(n,r){for(const i of n)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null})(s.filters,(function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new p(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ja(s,e,t){if(!t.isEqual(e))throw new p(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Wa{convertValue(e,t="none"){switch(ge(e)){case 0:return null;case 1:return e.booleanValue;case 2:return R(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ye(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Dn(R(e.latitude),R(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=on(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ke(e));default:return null}}convertTimestamp(e){const t=ce(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=D.fromString(e);k(ir(n));const r=new Ge(n.get(1),n.get(3)),i=new w(n.popFirst(5));return r.isEqual(t)||ne(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(s,e,t){let n;return n=s?s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends Vr{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ft(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Mn("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ft extends Pr{data(e={}){return super.data(e)}}class Ya{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ve(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ft(this._firestore,this._userDataWriter,n.key,n,new Ve(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(n,r){if(n._snapshot.oldDocs.isEmpty()){let i=0;return n._snapshot.docChanges.map((o=>{const a=new ft(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Ve(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}}))}{let i=n._snapshot.oldDocs;return n._snapshot.docChanges.filter((o=>r||o.type!==3)).map((o=>{const a=new ft(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Ve(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Xa(o.type),doc:a,oldIndex:u,newIndex:c}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Xa(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(s){s=Z(s,$);const e=Z(s.firestore,pe);return La(bn(e),s._key).then((t=>qr(e,s,t)))}class Ur extends Wa{constructor(e){super(),this.firestore=e}convertBytes(e){return new ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}function iu(s,e,t){s=Z(s,$);const n=Z(s.firestore,pe),r=Ha(s.converter,e);return On(n,[Ua(_n(n),"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,H.none())])}function ou(s,e,t,...n){s=Z(s,$);const r=Z(s.firestore,pe),i=_n(r);let o;return o=typeof(e=ee(e))=="string"||e instanceof xt?Ba(i,"updateDoc",s._key,e,t,n):qa(i,"updateDoc",s._key,e),On(r,[o.toMutation(s._key,H.exists(!0))])}function au(s){return On(Z(s.firestore,pe),[new hn(s._key,H.none())])}function uu(s,...e){var t,n,r;s=ee(s);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Cs(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Cs(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,c,l;if(s instanceof $)c=Z(s.firestore,pe),l=Tt(s._key.path),u={next:h=>{e[o]&&e[o](qr(c,s,h))},error:e[o+1],complete:e[o+2]};else{const h=Z(s,Le);c=Z(h.firestore,pe),l=h._query;const f=new Ur(c);u={next:g=>{e[o]&&e[o](new Ya(c,f,h,g))},error:e[o+1],complete:e[o+2]},Ga(s._query)}return(function(h,f,g,I){const S=new Nr(I),E=new vr(f,S,g);return h.asyncQueue.enqueueAndForget((async()=>yr(await en(h),E))),()=>{S.Dc(),h.asyncQueue.enqueueAndForget((async()=>wr(await en(h),E)))}})(bn(c),l,a,u)}function On(s,e){return(function(t,n){const r=new oe;return t.asyncQueue.enqueueAndForget((async()=>va(await Ra(t),n,r))),r.promise})(bn(s),e)}function qr(s,e,t){const n=t.docs.get(e._key),r=new Ur(s);return new Pr(s,r,e._key,n,new Ve(t.hasPendingWrites,t.fromCache),e.converter)}function cu(){return new xn("serverTimestamp")}(function(s,e=!0){(function(t){_e=t})(Hr),$r(new Kr("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new pe(new ri(t.getProvider("auth-internal")),new ui(t.getProvider("app-check-internal")),(function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new p(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ge(a.options.projectId,u)})(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),qn(zn,"3.13.0",s),qn(zn,"3.13.0","esm2017")})();export{cu as G,uu as I,tu as R,Za as _,ru as a,ou as b,nu as c,su as d,eu as g,iu as m,au as y};
