import{r as b,j as l,c as Oo,R as jo}from"./react-vendor-Ds7D3P6J.js";import{S as Li,C as In,G as Tn,B as Nn,T as kn,D as Mo,F as Fi,R as Lo,A as Wi,a as Fo,b as Rn,M as Wo,c as Rt,d as zi,P as Fs,e as zo,V as Dt,f as Bo,g as Vo,Z as An,h as Uo,i as Ho,E as $o,j as Go,k as Ws,L as zs,l as qo,m as Bs,X as Vs}from"./icons-BxanBcvZ.js";import{g as fn,a as Yo,C as Us,b as Hs,B as Qo}from"./data-C-Ir4dd-.js";import"./phase-1-DoRlKjLf.js";import"./phase-2a-DGACCUXY.js";import"./phase-2b-BMBAOXY3.js";import"./phase-3a-Cjwfo6qQ.js";import"./phase-3b-CEAUSXPe.js";import"./phase-4a-BXILQOTN.js";import"./phase-4b-CDUmd3nW.js";import"./phase-4c-Cub_cTmo.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ko=()=>{};var $s={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw He(e)},He=function(n){return new Error("Firebase Database ("+Bi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|d>>6,p=d&63;c||(p=64,o||(f=64)),s.push(t[u],t[h],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||d==null||h==null)throw new Xo;const f=r<<2|a>>4;if(s.push(f),d!==64){const p=a<<4&240|d>>2;if(s.push(p),h!==64){const _=d<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ui=function(n){const e=Vi(n);return Jn.encodeByteArray(e,!0)},Pt=function(n){return Ui(n).replace(/\./g,"")},Dn=function(n){try{return Jn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){return Hi(void 0,n)}function Hi(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ea(t)||(n[t]=Hi(n[t],e[t]));return n}function ea(n){return n!=="__proto__"}/**
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
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ta().__FIREBASE_DEFAULTS__,sa=()=>{if(typeof process>"u"||typeof $s>"u")return;const n=$s.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ia=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Dn(n[1]);return e&&JSON.parse(e)},$i=()=>{try{return Ko()||na()||sa()||ia()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ra=n=>{var e,t;return(t=(e=$i())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},oa=n=>{const e=ra(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Gi=()=>{var n;return(n=$i())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function aa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pt(JSON.stringify(t)),Pt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(la())}function ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function da(){return Bi.NODE_ADMIN===!0}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function ua(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="FirebaseError";class gt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=fa,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?pa(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gt(i,a,s)}}function pa(n,e){try{let t=0,s="";for(;t<n.length;){const i=n.indexOf("{$",t);if(i===-1){s+=n.substring(t);break}const r=n.indexOf("}",i+2);if(r===-1){s+=n.substring(t);break}const o=n.substring(i+2,r),a=e[o];s+=n.substring(t,i)+(a!=null?String(a):`<${o}?>`),t=r+1}return s}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n){return JSON.parse(n)}function B(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=rt(Dn(r[0])||""),t=rt(Dn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ma=function(n){const e=Qi(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ga=function(n){const e=Qi(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ze(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ot(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(qs(r)&&qs(o)){if(!jt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function qs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],d,u;for(let h=0;h<80;h++){h<40?h<20?(d=a^r&(o^a),u=1518500249):(d=r^o^a,u=1859775393):h<60?(d=r&o|a&(r|o),u=2400959708):(d=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+d+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function $e(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ba(n){return(await fetch(n,{credentials:"include"})).ok}class ot{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ee="[DEFAULT]";/**
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
 */class xa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Xt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sa(e))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ee){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ee){return this.instances.has(e)}getOptions(e=Ee){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ca(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ee){return this.component?this.component.multipleInstances?e:Ee:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ca(n){return n===Ee?void 0:n}function Sa(n){return n.instantiationMode==="EAGER"}/**
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
 */class wa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Ea={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Ia=O.INFO,Ta={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Na=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ta[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ji{constructor(e){this.name=e,this._logLevel=Ia,this._logHandler=Na,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ka=(n,e)=>e.some(t=>n instanceof t);let Ys,Qs;function Ra(){return Ys||(Ys=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Aa(){return Qs||(Qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xi=new WeakMap,Pn=new WeakMap,Zi=new WeakMap,pn=new WeakMap,Zn=new WeakMap;function Da(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ve(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xi.set(t,n)}).catch(()=>{}),Zn.set(e,n),e}function Pa(n){if(Pn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Pn.set(n,e)}let On={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Oa(n){On=n(On)}function ja(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(mn(this),e,...t);return Zi.set(s,e.sort?e.sort():[e]),ve(s)}:Aa().includes(n)?function(...e){return n.apply(mn(this),e),ve(Xi.get(this))}:function(...e){return ve(n.apply(mn(this),e))}}function Ma(n){return typeof n=="function"?ja(n):(n instanceof IDBTransaction&&Pa(n),ka(n,Ra())?new Proxy(n,On):n)}function ve(n){if(n instanceof IDBRequest)return Da(n);if(pn.has(n))return pn.get(n);const e=Ma(n);return e!==n&&(pn.set(n,e),Zn.set(e,n)),e}const mn=n=>Zn.get(n);function La(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ve(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ve(o.result),c.oldVersion,c.newVersion,ve(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const Fa=["get","getKey","getAll","getAllKeys","count"],Wa=["put","add","delete","clear"],gn=new Map;function Ks(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gn.get(e))return gn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Wa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Fa.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[t](...a),i&&c.done]))[0]};return gn.set(e,r),r}Oa(n=>({...n,get:(e,t,s)=>Ks(e,t)||n.get(e,t,s),has:(e,t)=>!!Ks(e,t)||n.has(e,t)}));/**
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
 */class za{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ba(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ba(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jn="@firebase/app",Js="0.16.1";/**
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
 */const fe=new Ji("@firebase/app"),Va="@firebase/app-compat",Ua="@firebase/analytics-compat",Ha="@firebase/analytics",$a="@firebase/app-check-compat",Ga="@firebase/app-check",qa="@firebase/auth",Ya="@firebase/auth-compat",Qa="@firebase/database",Ka="@firebase/data-connect",Ja="@firebase/database-compat",Xa="@firebase/functions",Za="@firebase/functions-compat",el="@firebase/installations",tl="@firebase/installations-compat",nl="@firebase/messaging",sl="@firebase/messaging-compat",il="@firebase/performance",rl="@firebase/performance-compat",ol="@firebase/remote-config",al="@firebase/remote-config-compat",ll="@firebase/storage",cl="@firebase/storage-compat",dl="@firebase/firestore",hl="@firebase/ai",ul="@firebase/firestore-compat",fl="firebase",pl="12.18.0";/**
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
 */const Mn="[DEFAULT]",ml={[jn]:"fire-core",[Va]:"fire-core-compat",[Ha]:"fire-analytics",[Ua]:"fire-analytics-compat",[Ga]:"fire-app-check",[$a]:"fire-app-check-compat",[qa]:"fire-auth",[Ya]:"fire-auth-compat",[Qa]:"fire-rtdb",[Ka]:"fire-data-connect",[Ja]:"fire-rtdb-compat",[Xa]:"fire-fn",[Za]:"fire-fn-compat",[el]:"fire-iid",[tl]:"fire-iid-compat",[nl]:"fire-fcm",[sl]:"fire-fcm-compat",[il]:"fire-perf",[rl]:"fire-perf-compat",[ol]:"fire-rc",[al]:"fire-rc-compat",[ll]:"fire-gcs",[cl]:"fire-gcs-compat",[dl]:"fire-fst",[ul]:"fire-fst-compat",[hl]:"fire-vertex","fire-js":"fire-js",[fl]:"fire-js-all"};/**
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
 */const Mt=new Map,gl=new Map,Ln=new Map;function Xs(n,e){try{n.container.addComponent(e)}catch(t){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Lt(n){const e=n.name;if(Ln.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Ln.set(e,n);for(const t of Mt.values())Xs(t,n);for(const t of gl.values())Xs(t,n);return!0}function _l(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},de=new Yi("app","Firebase",vl);/**
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
 */class bl{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
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
 */const xl=pl;function er(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Mn,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw de.create("bad-app-name",{appName:String(i)});if(t||(t=Gi()),!t)throw de.create("no-options");const r=Mt.get(i);if(r)if(jt(t,r.options)){if(jt(s,r.config))return r;throw de.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw de.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});const o=new wa(i);for(const c of Ln.values())o.addComponent(c);const a=new bl(t,s,o);return Mt.set(i,a),a}function Cl(n=Mn){const e=Mt.get(n);if(!e&&n===Mn&&Gi())return er();if(!e)throw de.create("no-app",{appName:n});return e}function Le(n,e,t){let s=ml[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(o.join(" "));return}Lt(new ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Sl="firebase-heartbeat-database",wl=1,at="firebase-heartbeat-store";let _n=null;function tr(){return _n||(_n=La(Sl,wl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(at)}catch(t){console.warn(t)}}}}).catch(n=>{throw de.create("idb-open",{originalErrorMessage:n.message})})),_n}async function El(n){try{const t=(await tr()).transaction(at),s=await t.objectStore(at).get(nr(n));return await t.done,s}catch(e){if(e instanceof gt)fe.warn(e.message);else{const t=de.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(t.message)}}}async function Zs(n,e){try{const s=(await tr()).transaction(at,"readwrite");await s.objectStore(at).put(e,nr(n)),await s.done}catch(t){if(t instanceof gt)fe.warn(t.message);else{const s=de.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fe.warn(s.message)}}}function nr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Il=1024,Tl=30;class Nl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ei();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Tl){const o=Al(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){fe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ei(),{heartbeatsToSend:s,unsentEntries:i}=kl(this._heartbeatsCache.heartbeats),r=Pt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return fe.warn(t),""}}}function ei(){return new Date().toISOString().substring(0,10)}function kl(n,e=Il){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ti(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ti(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Rl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await El(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ti(n){return Pt(JSON.stringify({version:2,heartbeats:n})).length}function Al(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Dl(n){Lt(new ot("platform-logger",e=>new za(e),"PRIVATE")),Lt(new ot("heartbeat",e=>new Nl(e),"PRIVATE")),Le(jn,Js,n),Le(jn,Js,"esm2020"),Le("fire-js","")}/**
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
 */Dl("");var ni={};const si="@firebase/database",ii="1.1.5";/**
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
 */let sr="";function Pl(n){sr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ol(e)}}catch{}return new jl},Te=ir("localStorage"),Ml=ir("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new Ji("@firebase/database"),Ll=function(){let n=1;return function(){return n++}}(),rr=function(n){const e=va(n),t=new ya;t.update(e);const s=t.digest();return Jn.encodeByteArray(s)},_t=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=_t.apply(null,s):typeof s=="object"?e+=B(s):e+=s,e+=" "}return e};let et=null,ri=!0;const Fl=function(n,e){m(!0,"Can't turn on custom loggers persistently."),Fe.logLevel=O.VERBOSE,et=Fe.log.bind(Fe)},K=function(...n){if(ri===!0&&(ri=!1,et===null&&Ml.get("logging_enabled")===!0&&Fl()),et){const e=_t.apply(null,n);et(e)}},yt=function(n){return function(...e){K(n,...e)}},Fn=function(...n){const e="FIREBASE INTERNAL ERROR: "+_t(...n);Fe.error(e)},pe=function(...n){const e=`FIREBASE FATAL ERROR: ${_t(...n)}`;throw Fe.error(e),new Error(e)},ne=function(...n){const e="FIREBASE WARNING: "+_t(...n);Fe.warn(e)},Wl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},or=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Be="[MIN_NAME]",ke="[MAX_NAME]",Ge=function(n,e){if(n===e)return 0;if(n===Be||e===ke)return-1;if(e===Be||n===ke)return 1;{const t=oi(n),s=oi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Bl=function(n,e){return n===e?0:n<e?-1:1},Ke=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+B(e))},es=function(n){if(typeof n!="object"||n===null)return B(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=B(e[s]),t+=":",t+=es(n[e[s]]);return t+="}",t},ar=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lr=function(n){m(!or(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const d=[];for(c=t;c;c-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)d.push(r%2?1:0),r=Math.floor(r/2);d.push(i?1:0),d.reverse();const u=d.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Vl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ul=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const $l=new RegExp("^-?(0*)\\d{1,10}$"),Gl=-2147483648,ql=2147483647,oi=function(n){if($l.test(n)){const e=Number(n);if(e>=Gl&&e<=ql)return e}return null},qe=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ne("Exception was thrown by user callback.",t),e},Math.floor(0))}},Yl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},tt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ql{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,yl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="5",cr="v",dr="s",hr="r",ur="f",fr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pr="ls",mr="p",Wn="ac",gr="websocket",_r="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,d=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Te.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Te.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Jl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vr(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===gr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_r)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jl(n)&&(t.ns=n.namespace);const i=[];return se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.counters_={}}incrementCounter(e,t=1){me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Zo(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={},vn={};function ns(n){const e=n.toString();return yn[e]||(yn[e]=new Xl),yn[e]}function Zl(n,e){const t=n.toString();return vn[t]||(vn[t]=e()),vn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qe(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="start",tc="close",nc="pLPCommand",sc="pRTLPCB",br="id",xr="pw",Cr="ser",ic="cb",rc="seg",oc="ts",ac="d",lc="dframe",Sr=1870,wr=30,cc=Sr-wr,dc=25e3,hc=3e4;class Me{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yt(e),this.stats_=ns(t),this.urlFn=c=>(this.appCheckToken&&(c[Wn]=this.appCheckToken),vr(t,_r,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ec(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hc)),zl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ss((...r)=>{const[o,a,c,d,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ai)this.id=a,this.password=c;else if(o===tc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ai]="t",s[Cr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ic]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cr]=ts,this.transportSessionId&&(s[dr]=this.transportSessionId),this.lastSessionId&&(s[pr]=this.lastSessionId),this.applicationId&&(s[mr]=this.applicationId),this.appCheckToken&&(s[Wn]=this.appCheckToken),typeof location<"u"&&location.hostname&&fr.test(location.hostname)&&(s[hr]=ur);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return Me.forceAllow_?!0:!Me.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vl()&&!Ul()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ui(t),i=ar(s,cc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[lc]="t",s[br]=e,s[xr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ss{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ll(),window[nc+this.uniqueCallbackIdentifier]=e,window[sc+this.uniqueCallbackIdentifier]=t,this.myIFrame=ss.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){K("frame writing exception"),a.stack&&K(a.stack),K(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[br]=this.myID,e[xr]=this.myPW,e[Cr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wr+s.length<=Sr;){const o=this.pendingSegs.shift();s=s+"&"+rc+i+"="+o.seg+"&"+oc+i+"="+o.ts+"&"+ac+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(dc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=16384,fc=45e3;let Ft=null;typeof MozWebSocket<"u"?Ft=MozWebSocket:typeof WebSocket<"u"&&(Ft=WebSocket);class re{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yt(this.connId),this.stats_=ns(t),this.connURL=re.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[cr]=ts,typeof location<"u"&&location.hostname&&fr.test(location.hostname)&&(o[hr]=ur),t&&(o[dr]=t),s&&(o[pr]=s),i&&(o[Wn]=i),r&&(o[mr]=r),vr(e,gr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Te.set("previous_websocket_failure",!0);try{let s;da(),this.mySock=new Ft(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ft!==null&&!re.forceDisallow_}static previouslyFailed(){return Te.isInMemoryStorage||Te.get("previous_websocket_failure")===!0}markConnectionHealthy(){Te.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=rt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ar(t,uc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static get ALL_TRANSPORTS(){return[Me,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=re&&re.isAvailable();let s=t&&!re.previouslyFailed();if(e.webSocketOnly&&(t||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[re];else{const i=this.transports_=[];for(const r of lt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);lt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=6e4,mc=5e3,gc=10*1024,_c=100*1024,bn="t",li="d",yc="s",ci="r",vc="e",di="o",hi="a",ui="n",fi="p",bc="h";class xc{constructor(e,t,s,i,r,o,a,c,d,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=d,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yt("c:"+this.id+":"),this.transportManager_=new lt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=tt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_c?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bn in e){const t=e[bn];t===hi?this.upgradeIfSecondaryHealthy_():t===ci?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===di&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ke("t",e),s=Ke("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ui,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ke("t",e),s=Ke("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ke(bn,e);if(li in e){const s=e[li];if(t===bc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ui){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===yc?this.onConnectionShutdown_(s):t===ci?this.onReset_(s):t===vc?Fn("Server Error: "+s):t===di?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ts!==s&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),tt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Te.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ir{static getInstance(){return new Wt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=32,mi=768;class P{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function A(){return new P("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ce(n){return n.pieces_.length-n.pieceNum_}function j(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new P(n.pieces_,e)}function Tr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Cc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Nr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function kr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new P(e,0)}function V(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof P)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new P(t,0)}function w(n){return n.pieceNum_>=n.pieces_.length}function Z(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return Z(j(n),j(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function is(n,e){if(Ce(n)!==Ce(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function oe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ce(n)>Ce(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Sc{constructor(e,t){this.errorPrefix_=t,this.parts_=Nr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zt(this.parts_[s]);Rr(this)}}function wc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Zt(e),Rr(n)}function Ec(n){const e=n.parts_.pop();n.byteLength_-=Zt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Rr(n){if(n.byteLength_>mi)throw new Error(n.errorPrefix_+"has a key path longer than "+mi+" bytes ("+n.byteLength_+").");if(n.parts_.length>pi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pi+") or object contains a cycle "+Ie(n))}function Ie(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Ir{static getInstance(){return new rs}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=1e3,Ic=60*5*1e3,gi=30*1e3,Tc=1.3,Nc=3e4,kc="server_kill",_i=3;class ue extends Er{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ue.nextPersistentConnectionId_++,this.log_=yt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Je,this.maxReconnectDelay_=Ic,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(B(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Xt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,d=a.s;ue.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(d,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&me(e,"w")){const s=ze(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ga(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ma(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Fn("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nc&&(this.reconnectDelay_=Je),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Tc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ue.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},d=function(h){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:d};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new xc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{ne(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(kc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ne(h),c())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gs(this.interruptReasons_)&&(this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>es(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new P(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){K("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_i&&(this.reconnectDelay_=gi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){K("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_i&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sr.replace(/\./g,"-")]=1,qi()?e["framework.cordova"]=1:ca()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wt.getInstance().currentlyOnline();return Gs(this.interruptReasons_)&&e}}ue.nextPersistentConnectionId_=0;ue.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(Be,e),i=new S(Be,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt;class Ar extends en{static get __EMPTY_NODE(){return Nt}static set __EMPTY_NODE(e){Nt=e}compare(e,t){return Ge(e.name,t.name)}isDefinedOn(e){throw He("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(ke,Nt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,Nt)}toString(){return".key"}}const We=new Ar;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??G.RED,this.left=i??te.EMPTY_NODE,this.right=r??te.EMPTY_NODE}copy(e,t,s,i,r){return new G(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return te.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Rc{copy(e,t,s,i,r){return this}insert(e,t,s){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class te{constructor(e,t=te.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new te(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new kt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new kt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new kt(this.root_,null,this.comparator_,!0,e)}}te.EMPTY_NODE=new Rc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e){return Ge(n.name,e.name)}function os(n,e){return Ge(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;function Dc(n){zn=n}const Dr=function(n){return typeof n=="number"?"number:"+lr(n):"string:"+n},Pr=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&me(e,".sv"),"Priority must be a string or number.")}else m(n===zn||n.isEmpty(),"priority of unexpected type.");m(n===zn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class ${static set __childrenNodeConstructor(e){yi=e}static get __childrenNodeConstructor(){return yi}constructor(e,t=$.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:C(e)===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Ce(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$.__childrenNodeConstructor.EMPTY_NODE.updateChild(j(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lr(this.value_):e+=this.value_,this.lazyHash_=rr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=$.VALUE_TYPE_ORDER.indexOf(t),r=$.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or,jr;function Pc(n){Or=n}function Oc(n){jr=n}class jc extends en{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ge(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(ke,new $("[PRIORITY-POST]",jr))}makePost(e,t){const s=Or(e);return new S(t,new $("[PRIORITY-POST]",s))}toString(){return".priority"}}const z=new jc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=Math.log(2);class Lc{constructor(e){const t=r=>parseInt(Math.log(r)/Mc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zt=function(n,e,t,s){n.sort(e);const i=function(c,d){const u=d-c;let h,f;if(u===0)return null;if(u===1)return h=n[c],f=t?t(h):h,new G(f,h.node,G.BLACK,null,null);{const p=parseInt(u/2,10)+c,_=i(c,p),E=i(p+1,d);return h=n[p],f=t?t(h):h,new G(f,h.node,G.BLACK,_,E)}},r=function(c){let d=null,u=null,h=n.length;const f=function(_,E){const I=h-_,N=h;h-=_;const k=i(I+1,N),U=n[I],y=t?t(U):U;p(new G(y,U.node,E,null,k))},p=function(_){d?(d.left=_,d=_):(u=_,d=_)};for(let _=0;_<c.count;++_){const E=c.nextBitIsOne(),I=Math.pow(2,c.count-(_+1));E?f(I,G.BLACK):(f(I,G.BLACK),f(I,G.RED))}return u},o=new Lc(n.length),a=r(o);return new te(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn;const je={};class he{static get Default(){return m(je&&z,"ChildrenNode.ts has not been loaded"),xn=xn||new he({".priority":je},{".priority":z}),xn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ze(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof te?t:null}hasIndex(e){return me(this.indexSet_,e.toString())}addIndex(e,t){m(e!==We,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zt(s,e.getCompare()):a=je;const c=e.toString(),d={...this.indexSet_};d[c]=e;const u={...this.indexes_};return u[c]=a,new he(u,d)}addToIndexes(e,t){const s=Ot(this.indexes_,(i,r)=>{const o=ze(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===je)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(S.Wrap);let d=c.getNext();for(;d;)d.name!==e.name&&a.push(d),d=c.getNext();return a.push(e),zt(a,o.getCompare())}else return je;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new S(e.name,a))),c.insert(e,e.node)}});return new he(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ot(this.indexes_,i=>{if(i===je)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new he(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe;class v{static get EMPTY_NODE(){return Xe||(Xe=new v(new te(os),null,he.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Pr(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xe}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Xe:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(j(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xe:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{m(C(e)!==".priority"||Ce(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(j(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(z,(o,a)=>{t[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dr(this.getPriority().val())+":"),this.forEachChild(z,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":rr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vt?-1:0}withIndex(e){if(e===We||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===We||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(z),i=t.getIterator(z);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===We?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Fc extends v{constructor(){super(new te(os),v.EMPTY_NODE,he.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const vt=new Fc;Object.defineProperties(S,{MIN:{value:new S(Be,v.EMPTY_NODE)},MAX:{value:new S(ke,vt)}});Ar.__EMPTY_NODE=v.EMPTY_NODE;$.__childrenNodeConstructor=v;Dc(vt);Oc(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=!0;function q(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $(t,q(e))}if(!(n instanceof Array)&&Wc){const t=[];let s=!1;if(se(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=q(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new S(o,c)))}}),t.length===0)return v.EMPTY_NODE;const r=zt(t,Ac,o=>o.name,os);if(s){const o=zt(t,z.getCompare());return new v(r,q(e),new he({".priority":o},{".priority":z}))}else return new v(r,q(e),he.Default)}else{let t=v.EMPTY_NODE;return se(n,(s,i)=>{if(me(n,s)&&s.substring(0,1)!=="."){const r=q(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(q(e))}}Pc(q);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends en{constructor(e){super(),this.indexPath_=e,m(!w(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ge(e.name,t.name):r}makePost(e,t){const s=q(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,vt);return new S(ke,e)}toString(){return Nr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends en{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ge(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=q(e);return new S(t,s)}toString(){return".value"}}const Vc=new Bc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return{type:"value",snapshotNode:n}}function Ve(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ct(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Uc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ct(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ve(t,s)):o.trackChildChange(dt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(z,(i,r)=>{t.hasChild(i)||s.trackChildChange(ct(i,r))}),t.isLeafNode()||t.forEachChild(z,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(dt(i,r,o))}else s.trackChildChange(Ve(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.indexedFilter_=new as(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ht.getStartPost_(e),this.endPost_=ht.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(z,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ht(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new S(t,s),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,d,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,c);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(dt(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(ct(t,h));const E=a.updateImmediateChild(t,v.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ve(f.name,f.node)),E.updateImmediateChild(f.name,f.node)):E}}else return s.isEmpty()?e:u&&o(d,c)>=0?(r!=null&&(r.trackChildChange(ct(d.name,d.node)),r.trackChildChange(Ve(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(d.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Be}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ke}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new ls;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $c(n){return n.loadsAllData()?new as(n.getIndex()):n.hasLimit()?new Hc(n):new ht(n)}function vi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===z?t="$priority":n.index_===Vc?t="$value":n.index_===We?t="$key":(m(n.index_ instanceof zc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=B(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=B(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+B(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=B(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+B(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function bi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==z&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Er{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=yt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Bt.getListenId_(e,s),a={};this.listens_[o]=a;const c=vi(e._queryParams);this.restRequest_(r+".json",c,(d,u)=>{let h=u;if(d===404&&(h=null,d=null),d===null&&this.onDataUpdate_(r,h,!1,s),ze(this.listens_,o)===a){let f;d?d===401?f="permission_denied":f="rest_error:"+d:f="ok",i(f,null)}})}unlisten(e,t){const s=Bt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=vi(e._queryParams),s=e._path.toString(),i=new Xt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_a(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=rt(a.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return{value:null,children:new Map}}function Lr(n,e,t){if(w(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,Vt());const i=n.children.get(s);e=j(e),Lr(i,e,t)}}function Bn(n,e,t){n.value!==null?t(e,n.value):qc(n,(s,i)=>{const r=new P(e.toString()+"/"+s);Bn(i,r,t)})}function qc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=10*1e3,Qc=30*1e3,Kc=5*60*1e3;class Jc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Yc(e);const s=xi+(Qc-xi)*Math.random();tt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;se(e,(i,r)=>{r>0&&me(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),tt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Kc))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ae||(ae={}));function Fr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ds(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ae.ACK_USER_WRITE,this.source=Fr()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new P(e));return new Ut(A(),t,this.revert)}}else return m(C(this.path)===e,"operationForChild called for unrelated child."),new Ut(j(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.source=e,this.path=t,this.type=ae.LISTEN_COMPLETE}operationForChild(e){return w(this.path)?new ut(this.source,A()):new ut(this.source,j(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ae.OVERWRITE}operationForChild(e){return w(this.path)?new Re(this.source,A(),this.snap.getImmediateChild(e)):new Re(this.source,j(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ae.MERGE}operationForChild(e){if(w(this.path)){const t=this.children.subtree(new P(e));return t.isEmpty()?null:t.value?new Re(this.source,A(),t.value):new ft(this.source,A(),t)}else return m(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ft(this.source,j(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Zc(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Uc(o.childName,o.snapshotNode))}),Ze(n,i,"child_removed",e,s,t),Ze(n,i,"child_added",e,s,t),Ze(n,i,"child_moved",r,s,t),Ze(n,i,"child_changed",e,s,t),Ze(n,i,"value",e,s,t),i}function Ze(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>td(n,a,c)),o.forEach(a=>{const c=ed(n,a,r);i.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(c,n.query_))})})}function ed(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function td(n,e,t){if(e.childName==null||t.childName==null)throw He("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,e){return{eventCache:n,serverCache:e}}function nt(n,e,t,s){return tn(new Se(e,t,s),n.serverCache)}function Wr(n,e,t,s){return tn(n.eventCache,new Se(e,t,s))}function Ht(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ae(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;const nd=()=>(Cn||(Cn=new te(Bl)),Cn);class M{static fromObject(e){let t=new M(null);return se(e,(s,i)=>{t=t.set(new P(s),i)}),t}constructor(e,t=nd()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:A(),value:this.value};if(w(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(j(e),t);return r!=null?{path:V(new P(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(j(e)):new M(null)}}set(e,t){if(w(e))return new M(t,this.children);{const s=C(e),r=(this.children.get(s)||new M(null)).set(j(e),t),o=this.children.insert(s,r);return new M(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(j(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(j(e)):null}}setTree(e,t){if(w(e))return t;{const s=C(e),r=(this.children.get(s)||new M(null)).setTree(j(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new M(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(V(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,A(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(w(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(j(e),V(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,A(),t)}foreachOnPath_(e,t,s){if(w(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(j(e),V(t,i),s):new M(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(V(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.writeTree_=e}static empty(){return new le(new M(null))}}function st(n,e,t){if(w(e))return new le(new M(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Z(i,e);return r=r.updateChild(o,t),new le(n.writeTree_.set(i,r))}else{const i=new M(t),r=n.writeTree_.setTree(e,i);return new le(r)}}}function Ci(n,e,t){let s=n;return se(t,(i,r)=>{s=st(s,V(e,i),r)}),s}function Si(n,e){if(w(e))return le.empty();{const t=n.writeTree_.setTree(e,new M(null));return new le(t)}}function Vn(n,e){return De(n,e)!=null}function De(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Z(t.path,e)):null}function wi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(z,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function be(n,e){if(w(e))return n;{const t=De(n,e);return t!=null?new le(new M(t)):new le(n.writeTree_.subtree(e))}}function Un(n){return n.writeTree_.isEmpty()}function Ue(n,e){return zr(A(),n.writeTree_,e)}function zr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=zr(V(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(V(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e){return Hr(e,n)}function sd(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=st(n.visibleWrites,e,t)),n.lastWriteId=s}function id(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function rd(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&od(a,s.path)?i=!1:oe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ad(n),!0;if(s.snap)n.visibleWrites=Si(n.visibleWrites,s.path);else{const a=s.children;se(a,c=>{n.visibleWrites=Si(n.visibleWrites,V(s.path,c))})}return!0}else return!1}function od(n,e){if(n.snap)return oe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&oe(V(n.path,t),e))return!0;return!1}function ad(n){n.visibleWrites=Br(n.allWrites,ld,A()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ld(n){return n.visible}function Br(n,e,t){let s=le.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)oe(t,o)?(a=Z(t,o),s=st(s,a,r.snap)):oe(o,t)&&(a=Z(o,t),s=st(s,A(),r.snap.getChild(a)));else if(r.children){if(oe(t,o))a=Z(t,o),s=Ci(s,a,r.children);else if(oe(o,t))if(a=Z(o,t),w(a))s=Ci(s,A(),r.children);else{const c=ze(r.children,C(a));if(c){const d=c.getChild(j(a));s=st(s,A(),d)}}}else throw He("WriteRecord should have .snap or .children")}}return s}function Vr(n,e,t,s,i){if(!s&&!i){const r=De(n.visibleWrites,e);if(r!=null)return r;{const o=be(n.visibleWrites,e);if(Un(o))return t;if(t==null&&!Vn(o,A()))return null;{const a=t||v.EMPTY_NODE;return Ue(o,a)}}}else{const r=be(n.visibleWrites,e);if(!i&&Un(r))return t;if(!i&&t==null&&!Vn(r,A()))return null;{const o=function(d){return(d.visible||i)&&(!s||!~s.indexOf(d.writeId))&&(oe(d.path,e)||oe(e,d.path))},a=Br(n.allWrites,o,e),c=t||v.EMPTY_NODE;return Ue(a,c)}}}function cd(n,e,t){let s=v.EMPTY_NODE;const i=De(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(z,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=be(n.visibleWrites,e);return t.forEachChild(z,(o,a)=>{const c=Ue(be(r,new P(o)),a);s=s.updateImmediateChild(o,c)}),wi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=be(n.visibleWrites,e);return wi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dd(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,t);if(Vn(n.visibleWrites,r))return null;{const o=be(n.visibleWrites,r);return Un(o)?i.getChild(t):Ue(o,i.getChild(t))}}function hd(n,e,t,s){const i=V(e,t),r=De(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=be(n.visibleWrites,i);return Ue(o,s.getNode().getImmediateChild(t))}else return null}function ud(n,e){return De(n.visibleWrites,e)}function fd(n,e,t,s,i,r,o){let a;const c=be(n.visibleWrites,e),d=De(c,A());if(d!=null)a=d;else if(t!=null)a=Ue(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function pd(){return{visibleWrites:le.empty(),allWrites:[],lastWriteId:-1}}function $t(n,e,t,s){return Vr(n.writeTree,n.treePath,e,t,s)}function hs(n,e){return cd(n.writeTree,n.treePath,e)}function Ei(n,e,t,s){return dd(n.writeTree,n.treePath,e,t,s)}function Gt(n,e){return ud(n.writeTree,V(n.treePath,e))}function md(n,e,t,s,i,r){return fd(n.writeTree,n.treePath,e,t,s,i,r)}function us(n,e,t){return hd(n.writeTree,n.treePath,e,t)}function Ur(n,e){return Hr(V(n.treePath,e),n.writeTree)}function Hr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,dt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ct(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ve(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,dt(s,e.snapshotNode,i.oldSnap));else throw He("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const $r=new _d;class fs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return us(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ae(this.viewCache_),r=md(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){return{filter:n}}function vd(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function bd(n,e,t,s,i){const r=new gd;let o,a;if(t.type===ae.OVERWRITE){const d=t;d.source.fromUser?o=Hn(n,e,d.path,d.snap,s,i,r):(m(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!w(d.path),o=qt(n,e,d.path,d.snap,s,i,a,r))}else if(t.type===ae.MERGE){const d=t;d.source.fromUser?o=Cd(n,e,d.path,d.children,s,i,r):(m(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=$n(n,e,d.path,d.children,s,i,a,r))}else if(t.type===ae.ACK_USER_WRITE){const d=t;d.revert?o=Ed(n,e,d.path,s,i,r):o=Sd(n,e,d.path,d.affectedTree,s,i,r)}else if(t.type===ae.LISTEN_COMPLETE)o=wd(n,e,t.path,s,r);else throw He("Unknown operation type: "+t.type);const c=r.getChanges();return xd(e,o,c),{viewCache:o,changes:c}}function xd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ht(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Mr(Ht(e)))}}function Gr(n,e,t,s,i,r){const o=e.eventCache;if(Gt(s,t)!=null)return e;{let a,c;if(w(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Ae(e),u=d instanceof v?d:v.EMPTY_NODE,h=hs(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const d=$t(s,Ae(e));a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const d=C(t);if(d===".priority"){m(Ce(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Ei(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=j(t);let h;if(o.isCompleteForChild(d)){c=e.serverCache.getNode();const f=Ei(s,t,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(d).updateChild(u,f):h=o.getNode().getImmediateChild(d)}else h=us(s,d,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),d,h,u,i,r):a=o.getNode()}}return nt(e,a,o.isFullyInitialized()||w(t),n.filter.filtersNodes())}}function qt(n,e,t,s,i,r,o,a){const c=e.serverCache;let d;const u=o?n.filter:n.filter.getIndexedFilter();if(w(t))d=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);d=u.updateFullNode(c.getNode(),p,null)}else{const p=C(t);if(!c.isCompleteForPath(t)&&Ce(t)>1)return e;const _=j(t),I=c.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?d=u.updatePriority(c.getNode(),I):d=u.updateChild(c.getNode(),p,I,_,$r,null)}const h=Wr(e,d,c.isFullyInitialized()||w(t),u.filtersNodes()),f=new fs(i,h,r);return Gr(n,h,t,i,f,a)}function Hn(n,e,t,s,i,r,o){const a=e.eventCache;let c,d;const u=new fs(i,e,r);if(w(t))d=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=nt(e,d,!0,n.filter.filtersNodes());else{const h=C(t);if(h===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),s),c=nt(e,d,a.isFullyInitialized(),a.isFiltered());else{const f=j(t),p=a.getNode().getImmediateChild(h);let _;if(w(f))_=s;else{const E=u.getCompleteChild(h);E!=null?Tr(f)===".priority"&&E.getChild(kr(f)).isEmpty()?_=E:_=E.updateChild(f,s):_=v.EMPTY_NODE}if(p.equals(_))c=e;else{const E=n.filter.updateChild(a.getNode(),h,_,f,u,o);c=nt(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ii(n,e){return n.eventCache.isCompleteForChild(e)}function Cd(n,e,t,s,i,r,o){let a=e;return s.foreach((c,d)=>{const u=V(t,c);Ii(e,C(u))&&(a=Hn(n,a,u,d,i,r,o))}),s.foreach((c,d)=>{const u=V(t,c);Ii(e,C(u))||(a=Hn(n,a,u,d,i,r,o))}),a}function Ti(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $n(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,d;w(t)?d=s:d=new M(null).setTree(t,s);const u=e.serverCache.getNode();return d.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Ti(n,p,f);c=qt(n,c,new P(h),_,i,r,o,a)}}),d.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),E=Ti(n,_,f);c=qt(n,c,new P(h),E,i,r,o,a)}}),c}function Sd(n,e,t,s,i,r,o){if(Gt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(w(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return qt(n,e,t,c.getNode().getChild(t),i,r,a,o);if(w(t)){let d=new M(null);return c.getNode().forEachChild(We,(u,h)=>{d=d.set(new P(u),h)}),$n(n,e,t,d,i,r,a,o)}else return e}else{let d=new M(null);return s.foreach((u,h)=>{const f=V(t,u);c.isCompleteForPath(f)&&(d=d.set(u,c.getNode().getChild(f)))}),$n(n,e,t,d,i,r,a,o)}}function wd(n,e,t,s,i){const r=e.serverCache,o=Wr(e,r.getNode(),r.isFullyInitialized()||w(t),r.isFiltered());return Gr(n,o,t,s,$r,i)}function Ed(n,e,t,s,i,r){let o;if(Gt(s,t)!=null)return e;{const a=new fs(s,e,i),c=e.eventCache.getNode();let d;if(w(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$t(s,Ae(e));else{const h=e.serverCache.getNode();m(h instanceof v,"serverChildren would be complete if leaf node"),u=hs(s,h)}u=u,d=n.filter.updateFullNode(c,u,r)}else{const u=C(t);let h=us(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?d=n.filter.updateChild(c,u,h,j(t),a,r):e.eventCache.getNode().hasChild(u)?d=n.filter.updateChild(c,u,v.EMPTY_NODE,j(t),a,r):d=c,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$t(s,Ae(e)),o.isLeafNode()&&(d=n.filter.updateFullNode(d,o,r)))}return o=e.serverCache.isFullyInitialized()||Gt(s,A())!=null,nt(e,d,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new as(s.getIndex()),r=$c(s);this.processor_=yd(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),d=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new Se(c,o.isFullyInitialized(),i.filtersNodes()),h=new Se(d,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=tn(h,u),this.eventGenerator_=new Xc(this.query_)}get query(){return this.query_}}function Td(n){return n.viewCache_.serverCache.getNode()}function Nd(n){return Ht(n.viewCache_)}function kd(n,e){const t=Ae(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!w(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function Ni(n){return n.eventRegistrations_.length===0}function Rd(n,e){n.eventRegistrations_.push(e)}function ki(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ri(n,e,t,s){e.type===ae.MERGE&&e.source.queryId!==null&&(m(Ae(n.viewCache_),"We should always have a full cache before handling merges"),m(Ht(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=bd(n.processor_,i,e,t,s);return vd(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,qr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ad(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(z,(r,o)=>{s.push(Ve(r,o))}),t.isFullyInitialized()&&s.push(Mr(t.getNode())),qr(n,s,t.getNode(),e)}function qr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Zc(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;class Yr{constructor(){this.views=new Map}}function Dd(n){m(!Yt,"__referenceConstructor has already been defined"),Yt=n}function Pd(){return m(Yt,"Reference.ts has not been loaded"),Yt}function Od(n){return n.views.size===0}function ps(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Ri(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ri(o,e,t,s));return r}}function Qr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=$t(t,i?s:null),c=!1;a?c=!0:s instanceof v?(a=hs(t,s),c=!1):(a=v.EMPTY_NODE,c=!1);const d=tn(new Se(a,c,!1),new Se(s,i,!1));return new Id(e,d)}return o}function jd(n,e,t,s,i,r){const o=Qr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Rd(o,t),Ad(o,t)}function Md(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=we(n);if(i==="default")for(const[c,d]of n.views.entries())o=o.concat(ki(d,t,s)),Ni(d)&&(n.views.delete(c),d.query._queryParams.loadsAllData()||r.push(d.query));else{const c=n.views.get(i);c&&(o=o.concat(ki(c,t,s)),Ni(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!we(n)&&r.push(new(Pd())(e._repo,e._path)),{removed:r,events:o}}function Kr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function xe(n,e){let t=null;for(const s of n.views.values())t=t||kd(s,e);return t}function Jr(n,e){if(e._queryParams.loadsAllData())return sn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Xr(n,e){return Jr(n,e)!=null}function we(n){return sn(n)!=null}function sn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;function Ld(n){m(!Qt,"__referenceConstructor has already been defined"),Qt=n}function Fd(){return m(Qt,"Reference.ts has not been loaded"),Qt}let Wd=1;class Ai{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=pd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zr(n,e,t,s,i){return sd(n.pendingWriteTree_,e,t,s,i),i?xt(n,new Re(Fr(),e,t)):[]}function Ne(n,e,t=!1){const s=id(n.pendingWriteTree_,e);if(rd(n.pendingWriteTree_,e)){let r=new M(null);return s.snap!=null?r=r.set(A(),!0):se(s.children,o=>{r=r.set(new P(o),!0)}),xt(n,new Ut(s.path,r,t))}else return[]}function bt(n,e,t){return xt(n,new Re(cs(),e,t))}function zd(n,e,t){const s=M.fromObject(t);return xt(n,new ft(cs(),e,s))}function Bd(n,e){return xt(n,new ut(cs(),e))}function Vd(n,e,t){const s=gs(n,t);if(s){const i=_s(s),r=i.path,o=i.queryId,a=Z(r,e),c=new ut(ds(o),a);return ys(n,r,c)}else return[]}function Kt(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Xr(o,e))){const c=Md(o,e,t,s);Od(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const d=c.removed;if(a=c.events,!i){const u=d.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,p)=>we(p));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=$d(f);for(let _=0;_<p.length;++_){const E=p[_],I=E.query,N=so(n,E);n.listenProvider_.startListening(it(I),pt(n,I),N.hashFn,N.onComplete)}}}!h&&d.length>0&&!s&&(u?n.listenProvider_.stopListening(it(e),null):d.forEach(f=>{const p=n.queryToTagMap.get(rn(f));n.listenProvider_.stopListening(it(f),p)}))}Gd(n,d)}return a}function eo(n,e,t,s){const i=gs(n,s);if(i!=null){const r=_s(i),o=r.path,a=r.queryId,c=Z(o,e),d=new Re(ds(a),c,t);return ys(n,o,d)}else return[]}function Ud(n,e,t,s){const i=gs(n,s);if(i){const r=_s(i),o=r.path,a=r.queryId,c=Z(o,e),d=M.fromObject(t),u=new ft(ds(a),c,d);return ys(n,o,u)}else return[]}function Gn(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const _=Z(f,i);r=r||xe(p,_),o=o||we(p)});let a=n.syncPointTree_.get(i);a?(o=o||we(a),r=r||xe(a,A())):(a=new Yr,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,_)=>{const E=xe(_,A());E&&(r=r.updateImmediateChild(p,E))}));const d=Xr(a,e);if(!d&&!e._queryParams.loadsAllData()){const f=rn(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=qd();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=nn(n.pendingWriteTree_,i);let h=jd(a,e,t,u,r,c);if(!d&&!o&&!s){const f=Jr(a,e);h=h.concat(Yd(n,e,f))}return h}function ms(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Z(o,e),d=xe(a,c);if(d)return d});return Vr(i,e,r,t,!0)}function Hd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(d,u)=>{const h=Z(d,t);s=s||xe(u,h)});let i=n.syncPointTree_.get(t);i?s=s||xe(i,A()):(i=new Yr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Se(s,!0,!1):null,a=nn(n.pendingWriteTree_,e._path),c=Qr(i,e,a,r?o.getNode():v.EMPTY_NODE,r);return Nd(c)}function xt(n,e){return to(e,n.syncPointTree_,null,nn(n.pendingWriteTree_,A()))}function to(n,e,t,s){if(w(n.path))return no(n,e,t,s);{const i=e.get(A());t==null&&i!=null&&(t=xe(i,A()));let r=[];const o=C(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const d=t?t.getImmediateChild(o):null,u=Ur(s,o);r=r.concat(to(a,c,d,u))}return i&&(r=r.concat(ps(i,n,s,t))),r}}function no(n,e,t,s){const i=e.get(A());t==null&&i!=null&&(t=xe(i,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,d=Ur(s,o),u=n.operationForChild(o);u&&(r=r.concat(no(u,a,c,d)))}),i&&(r=r.concat(ps(i,n,s,t))),r}function so(n,e){const t=e.query,s=pt(n,t);return{hashFn:()=>(Td(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Vd(n,t._path,s):Bd(n,t._path);{const r=Hl(i,t);return Kt(n,t,null,r)}}}}function pt(n,e){const t=rn(e);return n.queryToTagMap.get(t)}function rn(n){return n._path.toString()+"$"+n._queryIdentifier}function gs(n,e){return n.tagToQueryMap.get(e)}function _s(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new P(n.substr(0,e))}}function ys(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=nn(n.pendingWriteTree_,e);return ps(s,t,i,null)}function $d(n){return n.fold((e,t,s)=>{if(t&&we(t))return[sn(t)];{let i=[];return t&&(i=Kr(t)),se(s,(r,o)=>{i=i.concat(o)}),i}})}function it(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Fd())(n._repo,n._path):n}function Gd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=rn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function qd(){return Wd++}function Yd(n,e,t){const s=e._path,i=pt(n,e),r=so(n,t),o=n.listenProvider_.startListening(it(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!we(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((d,u,h)=>{if(!w(d)&&u&&we(u))return[sn(u).query];{let f=[];return u&&(f=f.concat(Kr(u).map(p=>p.query))),se(h,(p,_)=>{f=f.concat(_)}),f}});for(let d=0;d<c.length;++d){const u=c[d];n.listenProvider_.stopListening(it(u),pt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vs(t)}node(){return this.node_}}class bs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=V(this.path_,e);return new bs(this.syncTree_,t)}node(){return ms(this.syncTree_,this.path_)}}const Qd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Di=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Kd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Jd(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Kd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Jd=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Xd=function(n,e,t,s){return xs(e,new bs(t,n),s)},io=function(n,e,t){return xs(n,new vs(e),t)};function xs(n,e,t){const s=n.getPriority().val(),i=Di(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Di(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new $(a,q(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $(i))),o.forEachChild(z,(a,c)=>{const d=xs(c,e.getImmediateChild(a),t);d!==c&&(r=r.updateImmediateChild(a,d))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ss(n,e){let t=e instanceof P?e:new P(e),s=n,i=C(t);for(;i!==null;){const r=ze(s.node.children,i)||{children:{},childCount:0};s=new Cs(i,s,r),t=j(t),i=C(t)}return s}function Ye(n){return n.node.value}function ro(n,e){n.node.value=e,qn(n)}function oo(n){return n.node.childCount>0}function Zd(n){return Ye(n)===void 0&&!oo(n)}function on(n,e){se(n.node.children,(t,s)=>{e(new Cs(t,n,s))})}function ao(n,e,t,s){t&&e(n),on(n,i=>{ao(i,e,!0)})}function eh(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ct(n){return new P(n.parent===null?n.name:Ct(n.parent)+"/"+n.name)}function qn(n){n.parent!==null&&th(n.parent,n.name,n)}function th(n,e,t){const s=Zd(t),i=me(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,qn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,qn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=/[\[\].#$\/\u0000-\u001F\u007F]/,sh=/[\[\].#$\u0000-\u001F\u007F]/,Sn=10*1024*1024,lo=function(n){return typeof n=="string"&&n.length!==0&&!nh.test(n)},co=function(n){return typeof n=="string"&&n.length!==0&&!sh.test(n)},ih=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),co(n)},rh=function(n,e,t,s){ws(Xn(n,"value"),e,t)},ws=function(n,e,t){const s=t instanceof P?new Sc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ie(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ie(s)+" with contents = "+e.toString());if(or(e))throw new Error(n+"contains "+e.toString()+" "+Ie(s));if(typeof e=="string"&&e.length>Sn/3&&Zt(e)>Sn)throw new Error(n+"contains a string greater than "+Sn+" utf8 bytes "+Ie(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lo(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ie(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wc(s,o),ws(n,a,s),Ec(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ie(s)+" in addition to actual children.")}},ho=function(n,e,t,s){if(!co(t))throw new Error(Xn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ho(n,e,t)},ah=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},lh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ih(t))throw new Error(Xn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Es(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!is(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function uo(n,e,t){Es(n,t),fo(n,s=>is(s,e))}function ce(n,e,t){Es(n,t),fo(n,s=>oe(s,e)||oe(e,s))}function fo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(dh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function dh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();et&&K("event: "+t.toString()),qe(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="repo_interrupt",uh=25;class fh{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ch,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vt(),this.transactionQueueTree_=new Cs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ph(n,e,t){if(n.stats_=ns(n.repoInfo_),n.forceRestClient_||Yl())n.server_=new Bt(n.repoInfo_,(s,i,r,o)=>{Pi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Oi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ue(n.repoInfo_,e,(s,i,r,o)=>{Pi(n,s,i,r,o)},s=>{Oi(n,s)},s=>{gh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Zl(n.repoInfo_,()=>new Jc(n.stats_,n.server_)),n.infoData_=new Gc,n.infoSyncTree_=new Ai({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=bt(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ts(n,"connected",!1),n.serverSyncTree_=new Ai({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const d=o(a,c);ce(n.eventQueue_,s._path,d)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function mh(n){const t=n.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Is(n){return Qd({timestamp:mh(n)})}function Pi(n,e,t,s,i){n.dataUpdateCount++;const r=new P(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Ot(t,d=>q(d));o=Ud(n.serverSyncTree_,r,c,i)}else{const c=q(t);o=eo(n.serverSyncTree_,r,c,i)}else if(s){const c=Ot(t,d=>q(d));o=zd(n.serverSyncTree_,r,c)}else{const c=q(t);o=bt(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=ln(n,r)),ce(n.eventQueue_,a,o)}function Oi(n,e){Ts(n,"connected",e),e===!1&&vh(n)}function gh(n,e){se(e,(t,s)=>{Ts(n,t,s)})}function Ts(n,e,t){const s=new P("/.info/"+e),i=q(t);n.infoData_.updateSnapshot(s,i);const r=bt(n.infoSyncTree_,s,i);ce(n.eventQueue_,s,r)}function po(n){return n.nextWriteId_++}function _h(n,e,t){const s=Hd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=q(i).withIndex(e._queryParams.getIndex());Gn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=bt(n.serverSyncTree_,e._path,r);else{const a=pt(n.serverSyncTree_,e);o=eo(n.serverSyncTree_,e._path,r,a)}return ce(n.eventQueue_,e._path,o),Kt(n.serverSyncTree_,e,t,null,!0),r},i=>(an(n,"get for query "+B(e)+" failed: "+i),Promise.reject(new Error(i))))}function yh(n,e,t,s,i){an(n,"set",{path:e.toString(),value:t,priority:s});const r=Is(n),o=q(t,s),a=ms(n.serverSyncTree_,e),c=io(o,a,r),d=po(n),u=Zr(n.serverSyncTree_,e,c,d,!0);Es(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||ne("set at "+e+" failed: "+f);const E=Ne(n.serverSyncTree_,d,!_);ce(n.eventQueue_,e,E),Sh(n,i,f,p)});const h=vo(n,e);ln(n,h),ce(n.eventQueue_,h,[])}function vh(n){an(n,"onDisconnectEvents");const e=Is(n),t=Vt();Bn(n.onDisconnect_,A(),(i,r)=>{const o=Xd(i,r,n.serverSyncTree_,e);Lr(t,i,o)});let s=[];Bn(t,A(),(i,r)=>{s=s.concat(bt(n.serverSyncTree_,i,r));const o=vo(n,i);ln(n,o)}),n.onDisconnect_=Vt(),ce(n.eventQueue_,A(),s)}function bh(n,e,t){let s;C(e._path)===".info"?s=Gn(n.infoSyncTree_,e,t):s=Gn(n.serverSyncTree_,e,t),uo(n.eventQueue_,e._path,s)}function xh(n,e,t){let s;C(e._path)===".info"?s=Kt(n.infoSyncTree_,e,t):s=Kt(n.serverSyncTree_,e,t),uo(n.eventQueue_,e._path,s)}function Ch(n){n.persistentConnection_&&n.persistentConnection_.interrupt(hh)}function an(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),K(t,...e)}function Sh(n,e,t,s){e&&qe(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function mo(n,e,t){return ms(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Ns(n,e=n.transactionQueueTree_){if(e||cn(n,e),Ye(e)){const t=_o(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&wh(n,Ct(e),t)}else oo(e)&&on(e,t=>{Ns(n,t)})}function wh(n,e,t){const s=t.map(d=>d.currentWriteId),i=mo(n,e,s);let r=i;const o=i.hash();for(let d=0;d<t.length;d++){const u=t[d];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Z(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,d=>{an(n,"transaction put response",{path:c.toString(),status:d});let u=[];if(d==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Ne(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();cn(n,Ss(n.transactionQueueTree_,e)),Ns(n,n.transactionQueueTree_),ce(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)qe(h[f])}else{if(d==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ne("transaction at "+c.toString()+" failed: "+d);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=d}ln(n,e)}},o)}function ln(n,e){const t=go(n,e),s=Ct(t),i=_o(n,t);return Eh(n,i,s),s}function Eh(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],d=Z(t,c.path);let u=!1,h;if(m(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ne(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=uh)u=!0,h="maxretry",i=i.concat(Ne(n.serverSyncTree_,c.currentWriteId,!0));else{const f=mo(n,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ws("transaction failed: Data returned ",p,c.path);let _=q(p);typeof p=="object"&&p!=null&&me(p,".priority")||(_=_.updatePriority(f.getPriority()));const I=c.currentWriteId,N=Is(n),k=io(_,f,N);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=k,c.currentWriteId=po(n),o.splice(o.indexOf(I),1),i=i.concat(Zr(n.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Ne(n.serverSyncTree_,I,!0))}else u=!0,h="nodata",i=i.concat(Ne(n.serverSyncTree_,c.currentWriteId,!0))}ce(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}cn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)qe(s[a]);Ns(n,n.transactionQueueTree_)}function go(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&Ye(s)===void 0;)s=Ss(s,t),e=j(e),t=C(e);return s}function _o(n,e){const t=[];return yo(n,e,t),t.sort((s,i)=>s.order-i.order),t}function yo(n,e,t){const s=Ye(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);on(e,i=>{yo(n,i,t)})}function cn(n,e){const t=Ye(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ro(e,t.length>0?t:void 0)}on(e,s=>{cn(n,s)})}function vo(n,e){const t=Ct(go(n,e)),s=Ss(n.transactionQueueTree_,e);return eh(s,i=>{wn(n,i)}),wn(n,s),ao(s,i=>{wn(n,i)}),t}function wn(n,e){const t=Ye(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ne(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ro(e,void 0):t.length=r+1,ce(n.eventQueue_,Ct(e),i);for(let o=0;o<s.length;o++)qe(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Th(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ne(`Invalid query segment '${t}' in query '${n}'`)}return e}const ji=function(n,e){const t=Nh(n),s=t.namespace;t.domain==="firebase.com"&&pe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&pe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Wl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new P(t.pathString)}},Nh=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(a=n.substring(0,d-1),n=n.substring(d+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Ih(n.substring(u,h)));const f=Th(n.substring(Math.min(n.length,h)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(d+1),10)):d=e.length;const p=e.slice(0,d);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class Rh{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return w(this._path)?null:Tr(this._path)}get ref(){return new ge(this._repo,this._path)}get _queryIdentifier(){const e=bi(this._queryParams),t=es(e);return t==="{}"?"default":t}get _queryObject(){return bi(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof ks))return!1;const t=this._repo===e._repo,s=is(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cc(this._path)}}class ge extends ks{constructor(e,t){super(e,t,new ls,!1)}get parent(){const e=kr(this._path);return e===null?null:new ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new P(e),s=Yn(this.ref,e);return new mt(this._node.getChild(t),s,z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new mt(i,Yn(this.ref,s),z)))}hasChild(e){const t=new P(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rs(n,e){return n=$e(n),n._checkNotDeleted("ref"),e!==void 0?Yn(n._root,e):n._root}function Yn(n,e){return n=$e(n),C(n._path)===null?oh("child","path",e):ho("child","path",e),new ge(n._repo,V(n._path,e))}function xo(n,e){n=$e(n),ah("set",n._path),rh("set",e,n._path);const t=new Xt;return yh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ah(n){n=$e(n);const e=new bo(()=>{}),t=new dn(e);return _h(n._repo,n,t).then(s=>new mt(s,new ge(n._repo,n._path),n._queryParams.getIndex()))}class dn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new kh("value",this,new mt(e.snapshotNode,new ge(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Rh(this,e,t):null}matches(e){return e instanceof dn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Dh(n,e,t,s,i){const r=new bo(t,void 0),o=new dn(r);return bh(n._repo,n,o),()=>xh(n._repo,n,o)}function Ph(n,e,t,s){return Dh(n,"value",e)}Dd(ge);Ld(ge);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="FIREBASE_DATABASE_EMULATOR_HOST",Qn={};let jh=!1;function Mh(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Ki(r);n.repoInfo_=new yr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Lh(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||pe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ji(r,i),a=o.repoInfo,c;typeof process<"u"&&ni&&(c=ni[Oh]),c?(r=`http://${c}?ns=${a.namespace}`,o=ji(r,i),a=o.repoInfo):o.repoInfo.secure;const d=new Kl(n.name,n.options,e);lh("Invalid Firebase Database URL",o),w(o.path)||pe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Wh(a,n,d,new Ql(n,t));return new zh(u,n)}function Fh(n,e){const t=Qn[e];(!t||t[n.key]!==n)&&pe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ch(n),delete t[n.key]}function Wh(n,e,t,s){let i=Qn[e.name];i||(i={},Qn[e.name]=i);let r=i[n.toURLString()];return r&&pe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fh(n,jh,t,s),i[n.toURLString()]=r,r}class zh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ph(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ge(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Fh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pe("Cannot call "+e+" on a deleted database.")}}function Bh(n=Cl(),e){const t=_l(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=oa("database");s&&Vh(t,...s)}return t}function Vh(n,e,t,s={}){n=$e(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&jt(s,r.repoInfo_.emulatorOptions))return;pe("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&pe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new At(At.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:aa(s.mockUserToken,n.app.options.projectId);o=new At(a)}Ki(e)&&ba(e),Mh(r,i,s,o)}/**
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
 */function Uh(n){Pl(xl),Lt(new ot("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Lh(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Le(si,ii,n),Le(si,ii,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ue.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Uh();var Hh="firebase",$h="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(Hh,$h,"app");const Gh={apiKey:"AIzaSyABiFO7TWD7o-V_wpVenOMOf52ovKYPKms",authDomain:"concursos-20cce.firebaseapp.com",databaseURL:"https://concursos-20cce-default-rtdb.firebaseio.com",projectId:"concursos-20cce",storageBucket:"concursos-20cce.firebasestorage.app",messagingSenderId:"830415520406",appId:"1:830415520406:web:06f25ae36a70cfd84738b7",measurementId:"G-BF6WV175XG"},qh=er(Gh),As=Bh(qh),Co="english_immersion_os/user_progress";let Kn=!1;const Jt=async()=>{if(!Kn)try{const n={updatedAt:Date.now(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state"),english_unlocked_blocks:localStorage.getItem("english_unlocked_blocks"),english_active_block_id:localStorage.getItem("english_active_block_id"),english_journal_state:localStorage.getItem("english_journal_state"),english_saturday_tests:localStorage.getItem("english_saturday_tests")},e=Rs(As,Co);return await xo(e,n),!0}catch(n){return console.warn("Firebase sync upload note:",n),!1}},So=async()=>{const n=Date.now();try{const e=Rs(As,"english_immersion_os/connection_test"),t={pingTimestamp:n,clientDevice:navigator.userAgent.includes("Mobile")?"Mobile":"Desktop",testStatus:"ACTIVE"};await xo(e,t);const i=(await Ah(e)).val(),r=Date.now()-n;return{success:!!(i&&i.pingTimestamp===n),latencyMs:r,timestamp:new Date().toLocaleTimeString(),dbUrl:"https://concursos-20cce-default-rtdb.firebaseio.com",path:"english_immersion_os/user_progress"}}catch(e){return{success:!1,error:e.message||"Erro ao conectar com Firebase Realtime Database",latencyMs:0,timestamp:new Date().toLocaleTimeString()}}},Yh=n=>{try{const e=Rs(As,Co);return Ph(e,s=>{const i=s.val();if(!i||!i.updatedAt)return;Kn=!0;let r=!1;["english_immersion_progress","english_game_stats","english_daily_vocab_goal","english_vocab_srs_state","english_unlocked_blocks","english_active_block_id","english_journal_state","english_saturday_tests"].forEach(a=>{i[a]&&i[a]!==localStorage.getItem(a)&&(localStorage.setItem(a,i[a]),r=!0)}),r&&n&&n(i),setTimeout(()=>{Kn=!1},300)})}catch(e){return console.warn("Firebase realtime subscription error:",e),()=>{}}};function Qh({progressData:n,setTab:e}){const{currentDay:t,completedDays:s,totalHours:i,streak:r}=n,[o,a]=b.useState(!1),[c,d]=b.useState(null),[u,h]=b.useState(!1);b.useEffect(()=>{f()},[]);const f=async()=>{h(!0);const I=await So();d(I),h(!1)},p=(()=>{try{const I=JSON.parse(localStorage.getItem("english_game_stats")||"{}"),N=JSON.parse(localStorage.getItem("english_daily_vocab_goal")||"{}"),k=JSON.parse(localStorage.getItem("english_vocab_srs_state")||"{}"),U=Object.values(k),y=U.filter(Y=>Y.stage>=3||Y.mastered).length,R=U.filter(Y=>Y.stage===1||Y.stage===2).length,L=U.filter(Y=>Y.soundGap).length;return{xp:I.xp||0,level:I.level||1,bestStreak:I.bestStreak||0,todayCount:N.count||0,todayTarget:N.target||100,masteredCount:y,reviewingCount:R,soundGapCount:L,totalTracked:Object.keys(k).length}}catch{return{xp:0,level:1,bestStreak:0,todayCount:0,todayTarget:100,masteredCount:0,reviewingCount:0,soundGapCount:0,totalTracked:0}}})(),_=Math.min(100,Math.round(p.todayCount/p.todayTarget*100)),E=()=>{const I={version:"1.0",exportDate:new Date().toISOString(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state"),english_journal_state:localStorage.getItem("english_journal_state"),english_saturday_tests:localStorage.getItem("english_saturday_tests")},N=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),k=URL.createObjectURL(N),U=document.createElement("a");U.href=k,U.download=`english_immersion_backup_${new Date().toISOString().slice(0,10)}.json`,U.click(),URL.revokeObjectURL(k)};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"1000px",margin:"0 auto"},children:[l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)",border:"1px solid var(--accent-amber)",borderRadius:"var(--radius-xl)",padding:"1.75rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.25rem"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",flexWrap:"wrap"},children:[l.jsxs("span",{className:"badge badge-amber",children:[l.jsx(Li,{size:14})," Imersão Acelerada (180 Dias)"]}),l.jsxs("span",{className:"badge badge-emerald",children:[l.jsx(In,{size:14})," Firebase Realtime Database"]})]}),l.jsx("h1",{style:{fontSize:"1.7rem",fontWeight:800,marginBottom:"0.4rem",color:"#ffffff"},children:"Seu Painel de Imersão & Fluência"}),l.jsxs("p",{style:{color:"var(--text-secondary)",maxWidth:"650px",fontSize:"0.92rem",lineHeight:1.5},children:["Sincronizado automaticamente em tempo real via ",l.jsx("strong",{children:"Firebase WebSocket"})," entre seu Computador e Celular!"]})]}),l.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",width:"100%",maxWidth:"380px"},children:[l.jsxs("button",{className:"btn btn-emerald",onClick:()=>e("game"),style:{flex:1,padding:"0.75rem 1rem",fontSize:"0.9rem"},children:[l.jsx(Tn,{size:18})," Jogar Game"]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>e("ai"),style:{flex:1,padding:"0.75rem 1rem",fontSize:"0.9rem"},children:[l.jsx(Nn,{size:18})," Tutor IA por Voz"]})]})]}),l.jsxs("div",{className:"grid-cards",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"VOCABULÁRIO HOJE"}),l.jsx(kn,{size:20,color:"var(--accent-amber)"})]}),l.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-amber)",marginBottom:"0.5rem"},children:[p.todayCount," ",l.jsxs("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:["/ ",p.todayTarget," palavras"]})]}),l.jsx("div",{className:"progress-bar-bg",children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${_}%`}})}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.5rem",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[l.jsxs("span",{children:[_,"% da Meta de Hoje"]}),l.jsxs("span",{children:["Faltam ",Math.max(0,p.todayTarget-p.todayCount)," palavras"]})]})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"BANCO DE RETENÇÃO (SRS)"}),l.jsx(Mo,{size:20,color:"var(--accent-emerald)"})]}),l.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-emerald)",marginBottom:"0.5rem"},children:[p.masteredCount," ",l.jsx("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:"dominadas"})]}),l.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["🟨 ",l.jsx("strong",{children:p.reviewingCount})," em revisão • 👂 ",l.jsx("strong",{children:p.soundGapCount})," foco em som"]})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"NÍVEL & COMBO"}),l.jsx(Fi,{size:20,color:"var(--accent-amber)"})]}),l.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-blue)",marginBottom:"0.5rem"},children:["Nível ",p.level," ",l.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-amber)",fontWeight:700},children:["(",p.xp," XP)"]})]}),l.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["Sequência: ",l.jsxs("strong",{children:[r," dias"]})," • Recorde: ",l.jsxs("strong",{children:[p.bestStreak,"x combo 🔥"]})]})]})]}),l.jsxs("div",{className:"card",style:{borderColor:c!=null&&c.success?"rgba(16, 185, 129, 0.4)":"rgba(56, 189, 248, 0.3)",background:"linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.06) 100%)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem",flexWrap:"wrap"},children:[l.jsx(In,{size:18,color:c!=null&&c.success?"var(--accent-emerald)":"var(--accent-blue)"}),l.jsx("span",{className:`badge ${c!=null&&c.success?"badge-emerald":"badge-blue"}`,children:c!=null&&c.success?"🟢 Realtime Database Ativo & Sincronizando":"🟡 Verificando Conexão..."}),(c==null?void 0:c.latencyMs)&&l.jsxs("span",{className:"badge badge-amber",children:["⚡ Latência: ",c.latencyMs," ms"]})]}),l.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#ffffff"},children:"Auditoria de Banco de Dados Firebase Realtime"}),l.jsxs("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:"0.2rem",maxWidth:"680px",lineHeight:1.5},children:["URL do Banco: ",l.jsx("strong",{style:{color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:"https://concursos-20cce-default-rtdb.firebaseio.com"}),l.jsx("br",{}),"Caminho de Sincronização: ",l.jsx("code",{style:{color:"var(--accent-emerald)"},children:"english_immersion_os/user_progress"})]})]}),l.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center",width:"100%",maxWidth:"420px"},children:[l.jsxs("button",{className:"btn btn-emerald",onClick:f,disabled:u,style:{flex:1,fontSize:"0.88rem"},children:[u?l.jsx(Lo,{size:16,className:"spin"}):l.jsx(Wi,{size:16}),"Testar Conexão Realtime Agora"]}),l.jsxs("button",{className:"btn btn-secondary",onClick:E,style:{fontSize:"0.85rem"},children:[l.jsx(Fo,{size:15})," Backup (.json)"]})]})]}),c&&l.jsxs("div",{style:{marginTop:"1.25rem",padding:"1rem 1.25rem",background:c.success?"rgba(16, 185, 129, 0.1)":"rgba(244, 63, 94, 0.1)",border:c.success?"1px solid var(--accent-emerald)":"1px solid var(--accent-rose)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.75rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[l.jsx(Rn,{size:20,color:c.success?"var(--accent-emerald)":"var(--accent-rose)"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.9rem",fontWeight:800,color:c.success?"var(--accent-emerald)":"var(--accent-rose)"},children:c.success?"✅ Teste de Leitura & Escrita Realtime Concluído com Sucesso!":"❌ Falha no teste de conexão"}),l.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:["Resposta em ",l.jsxs("strong",{children:[c.latencyMs,"ms"]})," às ",c.timestamp,". Dados de progresso salvos continuamente via WebSocket!"]})]})]}),l.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:l.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx(Wo,{size:13})," PC ↔ ",l.jsx(Rt,{size:13})," Celular"]})})]}),o&&l.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--accent-emerald-glow)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-sm)",color:"var(--accent-emerald)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(zi,{size:16})," Backup restaurado e sincronizado com o Firebase com sucesso!"]})]})]})}const Kh=()=>{const n=window.speechSynthesis.getVoices();return n.length===0?null:n.find(e=>e.lang.startsWith("en")&&(e.name.toLowerCase().includes("natural")||e.name.toLowerCase().includes("online")||e.name.toLowerCase().includes("google us english")||e.name.toLowerCase().includes("samantha")||e.name.toLowerCase().includes("jenny")||e.name.toLowerCase().includes("guy")||e.name.toLowerCase().includes("aria")))||n.find(e=>e.lang==="en-US")||n.find(e=>e.lang.startsWith("en"))},ye=(n,e=.9)=>{if(!n)return;const t=n.trim();if("speechSynthesis"in window&&window.speechSynthesis.cancel(),t.length<200)try{const s=`https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(t)}`,i=new Audio(s);i.playbackRate=e||.9;const r=i.play();r!==void 0&&r.then(()=>{}).catch(o=>{console.log("Fallback to WebSpeech SpeechSynthesis:",o),Mi(t,e)});return}catch(s){console.warn("Neural audio stream fallback:",s)}Mi(t,e)},Mi=(n,e)=>{if(!("speechSynthesis"in window))return;const t=new SpeechSynthesisUtterance(n);t.lang="en-US",t.rate=e,t.pitch=1;const s=()=>{const i=Kh();i&&(t.voice=i),window.speechSynthesis.speak(t)};window.speechSynthesis.getVoices().length>0?s():window.speechSynthesis.onvoiceschanged=()=>{s(),window.speechSynthesis.onvoiceschanged=null}},Jh={hello:{pt:"olá",pos:"saudação"},ruan:{pt:"Ruan (seu nome)",pos:"nome próprio"},i:{pt:"eu",pos:"pronome"},am:{pt:"sou / estou",pos:"verbo to be"},your:{pt:"seu / sua",pos:"possessivo"},live:{pt:"ao vivo",pos:"adjetivo"},ai:{pt:"IA (Inteligência Artificial)",pos:"substantivo"},coach:{pt:"tutor / treinador",pos:"substantivo"},what:{pt:"qual / o que",pos:"pronome de pergunta"},technology:{pt:"tecnologia",pos:"substantivo"},do:{pt:"verbo auxiliar de pergunta",pos:"auxiliar"},you:{pt:"você",pos:"pronome"},like:{pt:"gostar",pos:"verbo"},software:{pt:"programa / software",pos:"substantivo"},development:{pt:"desenvolvimento",pos:"substantivo"},and:{pt:"e",pos:"conjunção"},english:{pt:"inglês",pos:"substantivo"},go:{pt:"ir / caminhar",pos:"verbo"},hand:{pt:"mão",pos:"substantivo"},in:{pt:"em / dentro",pos:"preposição"},favorite:{pt:"favorito / preferido",pos:"adjetivo"},awesome:{pt:"incrível / sensacional",pos:"adjetivo"},computer:{pt:"computador",pos:"substantivo"},science:{pt:"ciência",pos:"substantivo"},engineering:{pt:"engenharia",pos:"substantivo"},are:{pt:"são / estão",pos:"verbo to be"},great:{pt:"ótimo / grande",pos:"adjetivo"},fields:{pt:"áreas / campos de atuação",pos:"substantivo"},write:{pt:"escrever",pos:"verbo"},code:{pt:"código / programar",pos:"substantivo/verbo"},every:{pt:"todo / cada",pos:"adjetivo"},day:{pt:"dia",pos:"substantivo"},learning:{pt:"aprendendo",pos:"verbo gerúndio"},step:{pt:"passo",pos:"substantivo"},by:{pt:"por / através de",pos:"preposição"},is:{pt:"é / está",pos:"verbo to be"},main:{pt:"principal",pos:"adjetivo"},goal:{pt:"meta / objetivo",pos:"substantivo"}};function Xh(){const[n,e]=b.useState([{id:1,sender:"ai",text:"Hello Ruan! I am your Live AI Coach. What technology do you like?",ptTranslation:"Olá Ruan! Eu sou seu Tutor de IA Ao Vivo. De qual tecnologia você gosta?",suggestions:[{en:"I like Python and web development.",pt:"Eu gosto de Python e desenvolvimento web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}]}]),[t,s]=b.useState(""),[i,r]=b.useState(!1),[o,a]=b.useState(!1),[c,d]=b.useState(!1),[u,h]=b.useState(null),f=b.useRef(null),p=b.useRef(null);b.useEffect(()=>{if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){d(!0);const y=window.SpeechRecognition||window.webkitSpeechRecognition;p.current=new y,p.current.continuous=!1,p.current.interimResults=!1,p.current.lang="en-US",p.current.onresult=R=>{const L=R.results[0][0].transcript;s(L),I(L)},p.current.onend=()=>{r(!1),o&&setTimeout(()=>{var R;try{(R=p.current)==null||R.start(),r(!0)}catch(L){console.log("Recognition restart note:",L)}},1500)},p.current.onerror=()=>{r(!1)}}},[o]),b.useEffect(()=>{var y;(y=f.current)==null||y.scrollIntoView({behavior:"smooth"})},[n]);const _=()=>{var y;o?(a(!1),r(!1),(y=p.current)==null||y.stop()):(a(!0),r(!0),ye("Hello Ruan! Live call active. Speak to me naturally in English!",.88),setTimeout(()=>{var R;try{(R=p.current)==null||R.start()}catch{}},3500))},E=()=>{var y,R;c&&(i?((y=p.current)==null||y.stop(),r(!1)):(r(!0),(R=p.current)==null||R.start()))},I=(y=t)=>{if(!y.trim())return;const R={id:Date.now(),sender:"user",text:y};e(L=>[...L,R]),s(""),setTimeout(()=>{N(y)},600)},N=y=>{const R=y.toLowerCase();let L="Software development and English go hand in hand! What is your favorite technology?",Y="Desenvolvimento de software e inglês andam de mãos dadas! Qual é a sua tecnologia favorita?",ee=[{en:"I like Python and web development.",pt:"Eu gosto de Python e dev web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}];R.includes("python")||R.includes("code")||R.includes("computer")||R.includes("javascript")?(L="Awesome! Computer science and software engineering are great fields. Do you write code every day?",Y="Incrível! Ciência da computação e engenharia de software são ótimas áreas. Você escreve código todos os dias?",ee=[{en:"Yes, I code every day.",pt:"Sim, eu programo todos os dias."},{en:"I am building a new project.",pt:"Estou construindo um projeto novo."},{en:"I want to work in tech.",pt:"Quero trabalhar na área de tecnologia."}]):(R.includes("english")||R.includes("study")||R.includes("hello")||R.includes("hi"))&&(L="Learning English step by step is awesome! What is your main goal?",Y="Aprender inglês passo a passo é incrível! Qual é o seu principal objetivo?",ee=[{en:"My goal is a tech job.",pt:"Meu objetivo é um emprego em tecnologia."},{en:"I want to speak fluently.",pt:"Quero falar com fluência."},{en:"I study 4 hours a day.",pt:"Estudo 4 horas por dia."}]);const J={id:Date.now()+1,sender:"ai",text:L,ptTranslation:Y,suggestions:ee};e(Pe=>[...Pe,J]),ye(L,.88)},k=y=>{s(y),I(y)},U=y=>y.split(" ").map((L,Y)=>{const ee=L.toLowerCase().replace(/[^a-z]/g,""),J=Jh[ee];return l.jsxs("span",{onClick:()=>{J&&(h({word:ee,info:J}),ye(ee,.82))},onMouseEnter:()=>{J&&h({word:ee,info:J})},style:{cursor:J?"pointer":"default",padding:"0 2px",borderRadius:"4px",textDecoration:J?"underline":"none",textDecorationColor:"var(--accent-blue)",textUnderlineOffset:"3px",color:"var(--text-primary)",transition:"all 0.15s ease"},title:J?`Clique ou passe o mouse: "${ee}" = ${J.pt}`:void 0,children:[L," "]},Y)});return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"1000px",margin:"0 auto"},children:[l.jsxs("div",{style:{background:o?"linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(2, 132, 199, 0.25) 100%)":"linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(192, 132, 252, 0.18) 100%)",border:o?"2px solid var(--accent-emerald)":"1px solid var(--accent-blue)",borderRadius:"var(--radius-xl)",padding:"1.5rem",display:"flex",justify:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem"},children:l.jsxs("span",{className:`badge ${o?"badge-emerald":"badge-blue"}`,children:[l.jsx(Fs,{size:14})," ",o?"📞 Chamada de Voz Ao Vivo Ativa (Full Duplex)":"🤖 Tutor de IA por Voz & Texto"]})}),l.jsx("h2",{style:{fontSize:"1.6rem",fontWeight:800},children:"Tutor de Inglês por Voz Ao Vivo"}),l.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:o?"A IA está te escutando continuamente pelo microfone! Fale em inglês naturalmente.":"Clique em 'Iniciar Chamada de Voz ao Vivo' para conversar continuamente sem mãos!"})]}),l.jsx("button",{className:"btn btn-emerald",onClick:_,style:{padding:"0.8rem 1.6rem",fontSize:"1rem",boxShadow:o?"0 0 20px var(--accent-emerald-glow)":"none"},children:o?l.jsxs(l.Fragment,{children:[l.jsx(zo,{size:18})," Encerrar Chamada"]}):l.jsxs(l.Fragment,{children:[l.jsx(Fs,{size:18})," Iniciar Chamada de Voz ao Vivo"]})})]}),u&&l.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--accent-blue)",padding:"0.85rem 1.25rem",borderRadius:"var(--radius-md)",display:"flex",justify:"space-between",alignItems:"center",boxShadow:"var(--shadow-md)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("span",{className:"badge badge-blue",children:"🔍 Dicionário Instantâneo"}),l.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',u.word,'"']}),l.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-emerald)",fontWeight:700},children:["= ",u.info.pt]}),l.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["(",u.info.pos,")"]})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[l.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>ye(u.word,.82),children:[l.jsx(Dt,{size:14})," Ouvir Pronúncia"]}),l.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>h(null),children:"✕"})]})]}),l.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-xl)",padding:"1.5rem",minHeight:"400px",maxHeight:"600px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[n.map(y=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:y.sender==="user"?"flex-end":"flex-start"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"0.25rem",fontWeight:700},children:y.sender==="user"?"Você":"🤖 Tutor de IA"}),l.jsxs("div",{style:{maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:"var(--radius-lg)",background:y.sender==="user"?"linear-gradient(135deg, #0284c7 0%, #0369a1 100%)":"rgba(255, 255, 255, 0.06)",border:y.sender==="user"?"none":"1px solid var(--border-color)",color:"#ffffff",fontSize:"0.95rem",lineHeight:1.6},children:[l.jsxs("div",{style:{fontWeight:600},children:[y.sender==="ai"?U(y.text):y.text,y.sender==="ai"&&l.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"0.2rem",marginLeft:"0.4rem"},onClick:()=>ye(y.text,.88),children:l.jsx(Dt,{size:16,color:"var(--accent-blue)"})})]}),y.sender==="ai"&&y.ptTranslation&&l.jsxs("div",{style:{marginTop:"0.5rem",paddingTop:"0.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"0.85rem",color:"var(--accent-blue)"},children:["💬 ",l.jsx("strong",{children:"Tradução em PT:"}),' "',y.ptTranslation,'"']})]}),y.sender==="ai"&&y.suggestions&&l.jsxs("div",{style:{marginTop:"0.75rem",width:"100%",maxWidth:"85%"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700,display:"block",marginBottom:"0.4rem"},children:"💡 Dica do que responder (Clique para usar):"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:y.suggestions.map((R,L)=>l.jsxs("button",{onClick:()=>k(R.en),className:"btn btn-secondary",style:{justifyContent:"flex-start",textAlign:"left",fontSize:"0.82rem",padding:"0.5rem 0.8rem",borderColor:"var(--accent-emerald-glow)",background:"rgba(16, 185, 129, 0.06)"},children:[l.jsxs("span",{style:{color:"var(--accent-emerald)",fontWeight:800},children:['"',R.en,'"']}),l.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:"0.4rem",fontSize:"0.75rem"},children:["(",R.pt,")"]})]},L))})]})]},y.id)),l.jsx("div",{ref:f})]}),l.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[l.jsx("button",{className:`btn ${i?"btn-emerald":"btn-secondary"}`,onClick:E,style:{padding:"0.8rem",borderRadius:"50%",width:"48px",height:"48px",flexShrink:0},title:i?"Escutando sua voz...":"Falar pelo Microfone",children:l.jsx(Bo,{size:20,color:i?"#fff":"var(--accent-blue)"})}),l.jsx("input",{type:"text",className:"input-field",placeholder:"Digite, use a chamada ao vivo ou escolha uma sugestão acima...",value:t,onChange:y=>s(y.target.value),onKeyDown:y=>y.key==="Enter"&&I(),style:{flex:1,padding:"0.85rem 1.25rem",fontSize:"0.95rem"}}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>I(),style:{padding:"0.85rem 1.5rem"},children:[l.jsx(Vo,{size:18})," Enviar"]})]})]})}const Zh=(n=50)=>{try{const e=document.createElement("canvas");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.pointerEvents="none",e.style.zIndex="999999",document.body.appendChild(e);const t=e.getContext("2d"),s=window.innerWidth,i=window.innerHeight;e.width=s,e.height=i;const r=["#38bdf8","#10b981","#fbbf24","#c084fc","#f43f5e"],o=[];for(let u=0;u<n;u++)o.push({x:s/2,y:i/2-50,vx:(Math.random()-.5)*14,vy:(Math.random()-.7)*16,size:Math.random()*8+5,color:r[Math.floor(Math.random()*r.length)],rotation:Math.random()*360,rSpeed:(Math.random()-.5)*10,opacity:1});let a=Date.now();const c=2200,d=()=>{const u=Date.now()-a;if(u>c){e.parentNode&&e.parentNode.removeChild(e);return}t.clearRect(0,0,s,i),o.forEach(h=>{h.x+=h.vx,h.y+=h.vy,h.vy+=.38,h.rotation+=h.rSpeed,h.opacity=Math.max(0,1-u/c),t.save(),t.translate(h.x,h.y),t.rotate(h.rotation*Math.PI/180),t.globalAlpha=h.opacity,t.fillStyle=h.color,t.fillRect(-h.size/2,-h.size/2,h.size,h.size),t.restore()}),requestAnimationFrame(d)};requestAnimationFrame(d)}catch(e){console.warn("Confetti effect note:",e)}},En=n=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;if(n==="correct")[523.25,659.25,783.99].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(i,t.currentTime+r*.08),a.gain.setValueAtTime(.15,t.currentTime+r*.08),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.08+.35),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.08),o.stop(t.currentTime+r*.08+.4)});else if(n==="wrong"){const s=t.createOscillator(),i=t.createGain();s.type="triangle",s.frequency.setValueAtTime(220,t.currentTime),s.frequency.setValueAtTime(175,t.currentTime+.1),i.gain.setValueAtTime(.18,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.3),s.connect(i),i.connect(t.destination),s.start(t.currentTime),s.stop(t.currentTime+.35)}else n==="victory"&&[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="triangle",o.frequency.setValueAtTime(i,t.currentTime+r*.1),a.gain.setValueAtTime(.2,t.currentTime+r*.1),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.1+.5),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.1),o.stop(t.currentTime+r*.1+.55)})}catch(e){console.warn("Sound effect note:",e)}};function eu(){const[n,e]=b.useState("game"),[t,s]=b.useState("A1"),[i,r]=b.useState("listening"),[o,a]=b.useState(.88),[c,d]=b.useState(()=>{const g=localStorage.getItem("english_unlocked_blocks");return g?JSON.parse(g):["block_1"]}),[u,h]=b.useState(()=>localStorage.getItem("english_active_block_id")||"block_1"),[f,p]=b.useState(()=>{const g=localStorage.getItem("english_vocab_srs_state");return g?JSON.parse(g):{}}),[_,E]=b.useState(()=>{const g=localStorage.getItem("english_daily_vocab_goal"),x=new Date().toISOString().split("T")[0];if(g){const T=JSON.parse(g);if(T.date===x)return T}return{date:x,masteredIds:[],count:0,target:100}}),[I,N]=b.useState(()=>{const g=localStorage.getItem("english_game_stats");return g?JSON.parse(g):{xp:0,level:1,streak:0,bestStreak:0,totalAnswered:0,totalCorrect:0,lives:3}}),[k,U]=b.useState(null);b.useEffect(()=>{localStorage.setItem("english_unlocked_blocks",JSON.stringify(c)),localStorage.setItem("english_active_block_id",u),localStorage.setItem("english_vocab_srs_state",JSON.stringify(f)),localStorage.setItem("english_daily_vocab_goal",JSON.stringify(_)),localStorage.setItem("english_game_stats",JSON.stringify(I))},[c,u,f,_,I]);const y=fn(u),R=g=>{const x=g.words||[];if(x.length===0)return{mastered:0,total:0,pct:0,isComplete:!1};let T=0;for(const F of x){const W=f[F.id];W&&(W.stage>=3||W.mastered)&&T++}const Q=Math.round(T/x.length*100);return{mastered:T,total:x.length,pct:Q,isComplete:T===x.length}},L=R(y),Y=(g,x)=>{const T=g.words||[],Q=T.filter(X=>{const H=x[X.id];return!H||H.stage<3}),F=T.filter(X=>{const H=x[X.id];return H&&H.stage>=3}),W=[...Q,...F];return W.length>0?W:T},[ee,J]=b.useState(()=>Y(y,f)),[Pe,hn]=b.useState(0),[wo,St]=b.useState(null),[Oe,wt]=b.useState(!1),[Qe,Et]=b.useState(!1),[Eo,It]=b.useState(!1),[un,Tt]=b.useState(!1);b.useEffect(()=>{const g=fn(u);J(Y(g,f)),hn(0),St(null),wt(!1),Et(!1),It(i!=="listening"),Tt(!1)},[u]);const D=ee[Pe]||ee[0],Ds=D?f[D.id]||{stage:0,soundGap:!1}:{stage:0,soundGap:!1};b.useEffect(()=>{if(D&&n==="game"&&!k){const g=setTimeout(()=>{ye(D.en,o)},200);return()=>clearTimeout(g)}},[Pe,u,n,k]);const Ps=(g=o)=>{D&&ye(D.en,g)},Io=()=>{if(It(!0),Tt(!0),D){const g=D.id;p(x=>({...x,[g]:{...x[g]||{stage:0,streak:0},soundGap:!0}}))}},Os=g=>{const x=fn(u);if((x.words||[]).every(F=>{const W=g[F.id];return W&&(W.stage>=3||W.mastered)})){const F=x.num+1,W=`block_${F}`;Qo.some(H=>H.id===W)&&!c.includes(W)&&(d(H=>[...H,W]),U({completedBlock:x,nextBlockId:W,nextBlockNum:F}),En("victory"),Zh(60))}},To=g=>{if(Oe||!D)return;St(g),wt(!0);const x=g===D.pt;Et(x);const T=D.id,Q=f[T]||{stage:0,streak:0};if(x){En("correct");const F=Math.min(un?2:3,Q.stage+1),W=Q.streak+1,X=F>=3,H={...f,[T]:{stage:F,streak:W,lastReviewed:Date.now(),mastered:X,soundGap:un}};p(H),_.masteredIds.includes(T)||E(_e=>({..._e,masteredIds:[..._e.masteredIds,T],count:_e.count+1}));const ie=I.streak+1,Do=10+(ie>=3?5:0),Ls=I.xp+Do,Po=Math.floor(Ls/100)+1;N(_e=>({..._e,xp:Ls,level:Po,streak:ie,bestStreak:Math.max(_e.bestStreak,ie),totalAnswered:_e.totalAnswered+1,totalCorrect:_e.totalCorrect+1})),X&&Os(H)}else{En("wrong");const F={...f,[T]:{stage:0,streak:0,lastReviewed:Date.now(),mastered:!1,soundGap:!0}};p(F);const W={...D},X=[...ee],H=Math.min(X.length,Pe+3);X.splice(H,0,W),J(X),N(ie=>({...ie,streak:0,lives:Math.max(0,ie.lives-1),totalAnswered:ie.totalAnswered+1}))}setTimeout(()=>{Jt()},150)},No=()=>{if(!D)return;const g=D.id,x={...f,[g]:{stage:3,streak:3,lastReviewed:Date.now(),mastered:!0,soundGap:!1}};p(x),_.masteredIds.includes(g)||E(T=>({...T,masteredIds:[...T.masteredIds,g],count:T.count+1})),Os(x),setTimeout(()=>{Jt()},150),js()},js=()=>{if(Pe+1<ee.length)hn(g=>g+1),St(null),wt(!1),Et(!1),It(i!=="listening"),Tt(!1);else{const g=Y(y,f);J(g),hn(0),St(null),wt(!1),Et(!1),It(i!=="listening"),Tt(!1)}},ko=g=>{c.includes(g)&&(h(g),e("game"))},Ro=()=>{k&&(h(k.nextBlockId),U(null),e("game"))},Ao=(g,x)=>x?l.jsx("span",{className:"badge badge-amber",children:"👂 Treinar Som"}):g>=3?l.jsx("span",{className:"badge badge-emerald",children:"🟩 Dominada"}):g===2?l.jsx("span",{className:"badge badge-blue",children:"🟨 Em Revisão (2/3)"}):g===1?l.jsx("span",{className:"badge badge-amber",children:"🟧 Praticando (1/3)"}):l.jsx("span",{className:"badge",style:{background:"rgba(255,255,255,0.08)",color:"var(--text-muted)"},children:"🟥 Nova"});Yo();const Ms=Math.min(100,Math.round(_.count/_.target*100));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"950px",margin:"0 auto"},children:[l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(16, 185, 129, 0.18) 100%)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-xl)",padding:"1.25rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.75rem",boxShadow:"var(--shadow-sm)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(kn,{size:20,color:"var(--accent-amber)"}),l.jsx("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#fff"},children:"🎯 Meta do Dia: 100 Palavras"})]}),l.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-emerald)"},children:[_.count," / ",_.target," Palavras Aprendidas Hoje (",Ms,"%)"]})]}),l.jsx("div",{className:"progress-bar-bg",style:{height:"10px"},children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${Ms}%`}})})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.75rem",background:"var(--bg-card)",padding:"0.75rem 1.25rem",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsxs("span",{style:{fontSize:"1rem",fontWeight:800,color:"var(--accent-blue)"},children:["📍 ",y.title]}),l.jsxs("span",{className:"badge badge-emerald",style:{fontSize:"0.75rem"},children:[L.mastered,"/",L.total," Dominadas (",L.pct,"%)"]})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[l.jsxs("button",{className:`btn ${n==="game"?"btn-emerald":"btn-secondary"}`,onClick:()=>e("game"),style:{padding:"0.45rem 0.95rem",fontSize:"0.82rem"},children:[l.jsx(An,{size:15})," Jogar Bloco"]}),l.jsxs("button",{className:`btn ${n==="map"?"btn-primary":"btn-secondary"}`,onClick:()=>e("map"),style:{padding:"0.45rem 0.95rem",fontSize:"0.82rem"},children:[l.jsx(Uo,{size:15})," 🗺️ Mapa de Blocos"]})]})]}),n==="map"&&l.jsxs("div",{className:"card",style:{borderColor:"var(--accent-blue)",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:800,textTransform:"uppercase",marginBottom:"0.6rem"},children:"Selecione o Nível de Domínio:"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"0.6rem"},children:Us.map(g=>{const x=t===g.id,T=Hs(g.id),Q=T.filter(F=>R(F).isComplete).length;return l.jsxs("button",{onClick:()=>s(g.id),style:{background:x?"linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(16, 185, 129, 0.2) 100%)":"rgba(0,0,0,0.25)",border:x?"1px solid var(--accent-blue)":"1px solid var(--border-color)",padding:"1rem",borderRadius:"var(--radius-md)",textAlign:"left",cursor:"pointer",transition:"all 0.2s ease"},children:[l.jsxs("div",{style:{fontSize:"1.2rem",marginBottom:"0.2rem"},children:[g.icon," ",g.name]}),l.jsxs("div",{style:{fontSize:"0.78rem",color:x?"var(--accent-emerald)":"var(--text-muted)",fontWeight:700},children:[Q," / ",T.length," Blocos Concluídos"]})]},g.id)})})]}),(()=>{const g=Us.find(x=>x.id===t);return l.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"0.85rem 1.2rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",fontSize:"0.88rem",color:"var(--text-secondary)"},children:["💡 ",l.jsxs("strong",{children:["Objetivo do ",g.name,":"]})," ",g.description]})})(),l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:800,textTransform:"uppercase",marginBottom:"0.75rem"},children:["Blocos de Vocabulário do ",t," (Desbloqueio Progressivo):"]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"0.85rem"},children:Hs(t).map(g=>{const x=c.includes(g.id),T=u===g.id,Q=R(g);let F="rgba(0, 0, 0, 0.35)",W="var(--border-color)",X=l.jsx(qo,{size:16,color:"var(--text-muted)"}),H="Bloqueado",ie="var(--text-muted)";return Q.isComplete?(F="rgba(16, 185, 129, 0.12)",W="var(--accent-emerald)",X=l.jsx(Rn,{size:16,color:"var(--accent-emerald)"}),H="100% Dominado!",ie="var(--accent-emerald)"):x&&(F=T?"rgba(56, 189, 248, 0.15)":"rgba(255, 255, 255, 0.04)",W=T?"var(--accent-blue)":"rgba(56, 189, 248, 0.3)",X=l.jsx(zs,{size:16,color:"var(--accent-blue)"}),H=T?"Jogando Agora":"Disponível",ie="var(--accent-blue)"),l.jsxs("div",{onClick:()=>x&&ko(g.id),style:{background:F,border:`1px solid ${W}`,borderRadius:"var(--radius-md)",padding:"1.1rem",display:"flex",flexDirection:"column",gap:"0.65rem",cursor:x?"pointer":"not-allowed",opacity:x?1:.6,transition:"all 0.2s ease",boxShadow:T?"0 0 15px rgba(56, 189, 248, 0.2)":"none"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#fff"},children:["Bloco ",g.num]}),X]}),l.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:[g.wordsCount," Palavras • ",g.level]}),l.jsx("div",{className:"progress-bar-bg",style:{height:"6px"},children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${Q.pct}%`}})}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.75rem",marginTop:"0.2rem"},children:[l.jsx("span",{style:{color:ie,fontWeight:700},children:H}),l.jsxs("span",{style:{color:"var(--text-muted)"},children:[Q.mastered,"/",Q.total]})]}),x&&l.jsx("button",{className:`btn ${T?"btn-emerald":"btn-secondary"}`,style:{padding:"0.35rem 0.65rem",fontSize:"0.75rem",width:"100%",marginTop:"0.2rem"},children:T?"Continuar Jogando ➔":"Treinar Este Bloco"})]},g.id)})})]})]}),n==="game"&&D&&l.jsxs("div",{className:"card",style:{borderColor:"var(--accent-emerald)",padding:"1.75rem",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("span",{className:"badge badge-blue",children:y.title}),Ao(Ds.stage,Ds.soundGap),l.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["• ",D.category||"Vocabulário"]})]}),!Oe&&l.jsxs("button",{onClick:No,style:{background:"rgba(255,255,255,0.06)",border:"1px solid var(--border-color)",color:"var(--text-secondary)",padding:"0.35rem 0.75rem",borderRadius:"var(--radius-sm)",fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.35rem"},title:"Já sabe esta palavra? Marque como dominada para avançar no bloco!",children:[l.jsx(Ho,{size:13,color:"var(--accent-amber)"})," Já sei essa palavra"]})]}),l.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.35)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1.75rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.15rem"},children:[l.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[l.jsxs("button",{className:"btn btn-primary",onClick:()=>Ps(o),style:{padding:"0.9rem 1.8rem",fontSize:"1.05rem",borderRadius:"var(--radius-xl)",boxShadow:"0 0 25px rgba(2, 132, 199, 0.4)"},children:[l.jsx(Dt,{size:22})," Ouvir Pronúncia"]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>Ps(.68),style:{padding:"0.8rem 1.1rem",fontSize:"0.85rem",borderRadius:"var(--radius-xl)"},children:"🐢 0.68x Bem Lento"})]}),i==="listening"&&!Eo&&!Oe?l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",marginTop:"0.3rem"},children:[l.jsx("span",{style:{fontSize:"1.3rem",fontWeight:800,color:"var(--text-muted)",letterSpacing:"0.25em"},children:"🔊 • • • • • •"}),l.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:["(Identifique o significado ",l.jsx("strong",{children:"apenas escutando"}),"!)"]}),l.jsxs("button",{onClick:Io,style:{background:"rgba(56, 189, 248, 0.1)",border:"1px solid rgba(56, 189, 248, 0.3)",color:"var(--accent-blue)",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",padding:"0.4rem 0.8rem",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",gap:"0.4rem",marginTop:"0.4rem"},children:[l.jsx($o,{size:14})," Espiar escrita & Pronúncia"]})]}):l.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",width:"100%"},children:[l.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',D.en,'"']}),l.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.12)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-md)",padding:"0.75rem 1.25rem",maxWidth:"550px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",gap:"0.3rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase"},children:"🗣️ Como se fala:"}),l.jsxs("span",{style:{fontSize:"1.15rem",fontWeight:800,color:"var(--accent-emerald)",fontFamily:"var(--font-mono)"},children:['"',D.phoneticPt||D.en,'"']}),D.ipa&&l.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:D.ipa})]}),D.soundTip&&l.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",marginTop:"0.15rem"},children:["💡 ",l.jsx("strong",{children:"Dica:"})," ",D.soundTip]})]}),un&&l.jsx("div",{style:{fontSize:"0.75rem",color:"var(--accent-amber)",fontWeight:700},children:"⚠️ Você precisou ver a escrita: esta palavra reaparecerá no modo auditivo para fixar o som!"})]})]}),l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:800,display:"block",marginBottom:"0.75rem",textTransform:"uppercase"},children:"Qual é o significado correto em português?"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"},children:(D.options||[]).map((g,x)=>{const T=wo===g,Q=g===D.pt;let F={padding:"1rem 1.15rem",fontSize:"0.92rem",textAlign:"left",justifyContent:"flex-start",borderRadius:"var(--radius-md)",transition:"all 0.15s ease",fontWeight:700};if(Oe){if(Q)return l.jsxs("button",{className:"btn btn-emerald",style:{...F,boxShadow:"0 0 15px var(--accent-emerald-glow)"},children:[l.jsx(Rn,{size:18})," ",g," (Correto! 🎉)"]},x);if(T&&!Qe)return l.jsxs("button",{className:"btn btn-secondary",style:{...F,borderColor:"var(--accent-rose)",color:"var(--accent-rose)",background:"rgba(244, 63, 94, 0.15)"},children:[l.jsx(Go,{size:18})," ",g," (Incorreto)"]},x)}return l.jsxs("button",{onClick:()=>To(g),disabled:Oe,className:"btn btn-secondary",style:{...F,border:"1px solid var(--border-color)",background:"var(--bg-card)"},children:[l.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",marginRight:"0.5rem"},children:String.fromCharCode(65+x)}),g]},x)})})]}),Oe&&l.jsxs("div",{style:{background:Qe?"var(--accent-emerald-glow)":"rgba(244, 63, 94, 0.12)",border:Qe?"1px solid var(--accent-emerald)":"1px solid var(--accent-rose)",borderRadius:"var(--radius-md)",padding:"1.15rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:Qe?"var(--accent-emerald)":"var(--accent-rose)"},children:Qe?"🎯 Resposta Correta! (+10 XP)":"❌ Você errou! (Re-inserida na fila de reforço)"}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:['"',D.en,'" = ',l.jsxs("strong",{children:['"',D.pt,'"']})]})]}),l.jsxs("button",{className:"btn btn-primary",onClick:js,style:{padding:"0.7rem 1.6rem",fontSize:"0.95rem",fontWeight:800},children:["Próxima Palavra ",l.jsx(Ws,{size:16})]})]})]}),k&&l.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(16px)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"},children:l.jsxs("div",{style:{background:"var(--bg-card)",border:"2px solid var(--accent-emerald)",borderRadius:"var(--radius-xl)",padding:"2.5rem 2rem",maxWidth:"520px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.25rem",boxShadow:"0 0 50px rgba(16, 185, 129, 0.4)"},children:[l.jsx("div",{style:{width:"75px",height:"75px",borderRadius:"50%",background:"linear-gradient(135deg, #10b981 0%, #0284c7 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 0 35px rgba(16, 185, 129, 0.6)"},children:l.jsx(kn,{size:40})}),l.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,color:"#fff"},children:["🎉 BLOCO ",k.completedBlock.num," CONCLUÍDO!"]}),l.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",lineHeight:1.6},children:["Parabéns! Você memorizou e dominou todas as ",l.jsxs("strong",{children:[k.completedBlock.wordsCount," palavras"]})," deste bloco!"]}),l.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-md)",padding:"1rem",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",color:"var(--accent-emerald)",fontWeight:800,fontSize:"1rem"},children:[l.jsx(zs,{size:20})," Bloco ",k.nextBlockNum," Desbloqueado!"]}),l.jsxs("div",{style:{display:"flex",gap:"0.75rem",width:"100%",flexWrap:"wrap"},children:[l.jsxs("button",{className:"btn btn-emerald",onClick:Ro,style:{flex:1,padding:"0.85rem",fontSize:"1rem"},children:["Avançar para o Bloco ",k.nextBlockNum," ",l.jsx(Ws,{size:18})]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>{U(null),e("map")},style:{padding:"0.85rem",fontSize:"0.9rem"},children:"Ver Mapa de Fases"})]})]})})]})}function tu(){const[n,e]=b.useState("game"),[t,s]=b.useState(!1),[i,r]=b.useState(!1),[o,a]=b.useState(!1),[c,d]=b.useState(""),[u,h]=b.useState(null),[f,p]=b.useState(()=>{const N=localStorage.getItem("english_immersion_progress");return N?JSON.parse(N):{currentDay:1,completedDays:0,totalHours:0,streak:1,todayTasks:{game_practice:!0,ai_speaking:!1}}});b.useEffect(()=>{const N=k=>{k.preventDefault(),h(k)};return window.addEventListener("beforeinstallprompt",N),()=>window.removeEventListener("beforeinstallprompt",N)},[]);const _=async()=>{u?(u.prompt(),(await u.userChoice).outcome==="accepted"&&h(null)):a(!0)};b.useEffect(()=>{Jt(),s(!0);const N=Yh(k=>{if(k.english_immersion_progress)try{p(JSON.parse(k.english_immersion_progress))}catch{}s(!0)});return()=>{N&&N()}},[]),b.useEffect(()=>{localStorage.setItem("english_immersion_progress",JSON.stringify(f)),Jt()},[f]);const E=N=>{p(k=>({...k,todayTasks:{...k.todayTasks,[N]:!k.todayTasks[N]}}))},I=async()=>{d("Testando conexão com Firebase Realtime Database...");const N=await So();N.success?d(`✅ Conectado em tempo real! Latência: ${N.latencyMs}ms`):d(`❌ Erro de conexão: ${N.error}`)};return l.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[l.jsx("header",{className:"app-header",children:l.jsxs("div",{className:"header-container",children:[l.jsxs("div",{className:"logo-group",children:[l.jsx("div",{className:"logo-icon",children:l.jsx(Li,{size:20})}),l.jsxs("div",{children:[l.jsx("h1",{className:"brand-title",children:"English Immersion OS"}),l.jsx("span",{className:"brand-subtitle",children:"Firebase Realtime Cloud • PC ↔ Celular"})]})]}),l.jsxs("nav",{className:"nav-tabs desktop-nav-tabs",children:[l.jsxs("button",{className:`tab-btn ${n==="game"?"active":""}`,onClick:()=>e("game"),style:{color:n==="game"?"var(--accent-amber)":"var(--text-secondary)",background:n==="game"?"rgba(251, 191, 36, 0.15)":"transparent",border:n==="game"?"1px solid rgba(251, 191, 36, 0.3)":"none"},children:[l.jsx(Tn,{size:16})," 🎮 1. Game de Escuta"]}),l.jsxs("button",{className:`tab-btn ${n==="ai"?"active":""}`,onClick:()=>e("ai"),children:[l.jsx(Nn,{size:16})," 🤖 2. Tutor IA (Voz)"]}),l.jsxs("button",{className:`tab-btn ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[l.jsx(Bs,{size:16})," 📊 3. Progresso"]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsxs("button",{onClick:_,className:"btn btn-secondary",style:{padding:"0.3rem 0.65rem",fontSize:"0.75rem",borderRadius:"var(--radius-sm)",borderColor:"rgba(56, 189, 248, 0.4)",color:"var(--accent-blue)",background:"rgba(56, 189, 248, 0.12)"},title:"Instalar no Celular como Aplicativo Nativo",children:[l.jsx(Rt,{size:14})," ",l.jsx("span",{className:"hide-on-mobile-tiny",children:"Instalar App"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.75rem",color:t?"var(--accent-emerald)":"var(--text-muted)",background:"rgba(16, 185, 129, 0.12)",padding:"0.25rem 0.6rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(16, 185, 129, 0.3)"},title:"Conectado ao Firebase Realtime Database",children:[l.jsx(In,{size:13,color:"var(--accent-emerald)"})," ",l.jsx("span",{className:"hide-on-mobile-tiny",children:"Nuvem Conectada"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},className:"mobile-streak-pill",children:[l.jsx(Fi,{size:16,color:"var(--accent-amber)"}),l.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-amber)"},children:[f.streak,"d"]})]})]})]})}),l.jsxs("main",{className:"main-content",children:[n==="game"&&l.jsx(eu,{}),n==="ai"&&l.jsx(Xh,{}),n==="dashboard"&&l.jsx(Qh,{progressData:f,toggleTask:E,setTab:e})]}),l.jsx("button",{className:"fab-button pulse-glow",onClick:()=>r(!0),title:"Menu Rápido de Ações",children:l.jsx(An,{size:22})}),i&&l.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(10px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:l.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1.75rem",maxWidth:"460px",width:"100%",boxShadow:"var(--shadow-lg)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(An,{size:20,color:"var(--accent-amber)"}),l.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800},children:"Ações Rápidas & Diagnóstico"})]}),l.jsx("button",{onClick:()=>{r(!1),d("")},style:{background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer"},children:l.jsx(Vs,{size:20})})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[l.jsxs("button",{className:"btn btn-emerald",onClick:_,style:{justifyContent:"flex-start"},children:[l.jsx(Rt,{size:18})," Instalar no Celular como Aplicativo"]}),l.jsxs("button",{className:"btn btn-primary",onClick:I,style:{justifyContent:"flex-start"},children:[l.jsx(Wi,{size:18})," Testar Conexão Firebase em Tempo Real"]}),l.jsxs("button",{className:"btn btn-secondary",onClick:()=>{ye("Welcome to English Immersion OS! Daily practice leads to fluency.",.88),d("🔊 Pronúnciando frase de teste em áudio natural!")},style:{justifyContent:"flex-start"},children:[l.jsx(Dt,{size:18})," Testar Pronúncia de Áudio (TTS)"]})]}),c&&l.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(56, 189, 248, 0.12)",border:"1px solid var(--accent-blue)",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",color:"var(--accent-blue)"},children:c})]})}),o&&l.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.82)",backdropFilter:"blur(12px)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.25rem"},children:l.jsxs("div",{style:{background:"var(--bg-card)",border:"2px solid var(--accent-blue)",borderRadius:"var(--radius-xl)",padding:"2rem 1.75rem",maxWidth:"480px",width:"100%",boxShadow:"0 0 40px rgba(56, 189, 248, 0.35)",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[l.jsx(Rt,{size:24,color:"var(--accent-blue)"}),l.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#fff"},children:"Colocar na Tela do Celular"})]}),l.jsx("button",{onClick:()=>a(!1),style:{background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer"},children:l.jsx(Vs,{size:22})})]}),l.jsxs("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5},children:["O ",l.jsx("strong",{children:"English Immersion OS"})," pode ser instalado como um aplicativo nativo no seu smartphone (Android ou iPhone), funcionando em ",l.jsx("strong",{children:"tela cheia"})," com som e carregamento instantâneo:"]}),l.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"var(--radius-md)",padding:"1rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[l.jsx("div",{style:{fontWeight:800,fontSize:"0.92rem",color:"var(--accent-emerald)",display:"flex",alignItems:"center",gap:"0.4rem"},children:"🤖 No Android (Google Chrome):"}),l.jsxs("ol",{style:{paddingLeft:"1.2rem",fontSize:"0.82rem",color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:"0.3rem"},children:[l.jsxs("li",{children:["Abra o link no navegador ",l.jsx("strong",{children:"Chrome"}),"."]}),l.jsxs("li",{children:["Toque nos ",l.jsx("strong",{children:"3 pontinhos (⋮)"})," no canto superior direito."]}),l.jsxs("li",{children:["Selecione ",l.jsx("strong",{children:'"Instalar aplicativo"'})," ou ",l.jsx("strong",{children:'"Adicionar à tela inicial"'}),"."]})]})]}),l.jsxs("div",{style:{background:"rgba(56, 189, 248, 0.1)",border:"1px solid rgba(56, 189, 248, 0.3)",borderRadius:"var(--radius-md)",padding:"1rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[l.jsx("div",{style:{fontWeight:800,fontSize:"0.92rem",color:"var(--accent-blue)",display:"flex",alignItems:"center",gap:"0.4rem"},children:"🍏 No iPhone / iPad (Safari):"}),l.jsxs("ol",{style:{paddingLeft:"1.2rem",fontSize:"0.82rem",color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:"0.3rem"},children:[l.jsxs("li",{children:["Abra o link no navegador ",l.jsx("strong",{children:"Safari"}),"."]}),l.jsxs("li",{children:["Toque no botão de ",l.jsx("strong",{children:"Compartilhar 📤"})," (quadrado com seta para cima)."]}),l.jsxs("li",{children:["Role para baixo e toque em ",l.jsx("strong",{children:'"Adicionar à Tela de Início" ➕'}),"."]}),l.jsxs("li",{children:["Toque em ",l.jsx("strong",{children:'"Adicionar"'})," no canto superior."]})]})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!1),style:{width:"100%",padding:"0.8rem",fontSize:"0.95rem",fontWeight:800},children:["Entendido! ",l.jsx(zi,{size:18})]})]})}),l.jsxs("nav",{className:"mobile-bottom-nav",children:[l.jsxs("button",{className:`mobile-nav-item ${n==="game"?"active-game":""}`,onClick:()=>e("game"),children:[l.jsx(Tn,{size:20,color:n==="game"?"var(--accent-amber)":"inherit"}),l.jsx("span",{children:"Game"})]}),l.jsxs("button",{className:`mobile-nav-item ${n==="ai"?"active-ai":""}`,onClick:()=>e("ai"),children:[l.jsx(Nn,{size:20,color:n==="ai"?"var(--accent-blue)":"inherit"}),l.jsx("span",{children:"Tutor IA"})]}),l.jsxs("button",{className:`mobile-nav-item ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[l.jsx(Bs,{size:20}),l.jsx("span",{children:"Progresso"})]})]}),l.jsx("footer",{style:{textAlign:"center",padding:"1.5rem",borderTop:"1px solid var(--border-color)",color:"var(--text-muted)",fontSize:"0.85rem"},children:"English Immersion OS — Sincronização em Nuvem em Tempo Real com Firebase Database."})]})}Oo.createRoot(document.getElementById("root")).render(l.jsx(jo.StrictMode,{children:l.jsx(tu,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/english-immersion-os/sw.js",{scope:"/english-immersion-os/"}).catch(n=>{console.warn("Service worker registration failed:",n)})});
