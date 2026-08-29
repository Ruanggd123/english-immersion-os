import{r as w,j as c,c as po,R as mo}from"./react-vendor-Ds7D3P6J.js";import{S as zn,C as vn,G as Et,B as It,T as xi,D as go,F as Bn,R as _o,A as Ei,a as yo,b as Ii,M as vo,c as bo,d as Co,P as ks,e as So,V as Nt,f as wo,g as xo,H as Eo,h as Io,Z as bn,i as To,j as No,E as Ro,k as ko,l as Ao,L as As,X as Do}from"./icons-B4Sh4QNq.js";import{g as qe}from"./data-RuIHB0H8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Po=()=>{};var Ds={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw Be(e)},Be=function(n){return new Error("Firebase Database ("+Ti.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Oo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|d>>6,p=d&63;l||(p=64,o||(f=64)),s.push(t[u],t[h],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ni(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Oo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||d==null||h==null)throw new Mo;const f=r<<2|a>>4;if(s.push(f),d!==64){const p=a<<4&240|d>>2;if(s.push(p),h!==64){const g=d<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ri=function(n){const e=Ni(n);return Vn.encodeByteArray(e,!0)},Rt=function(n){return Ri(n).replace(/\./g,"")},Cn=function(n){try{return Vn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){return ki(void 0,n)}function ki(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Lo(t)||(n[t]=ki(n[t],e[t]));return n}function Lo(n){return n!=="__proto__"}/**
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
 */function Fo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wo=()=>Fo().__FIREBASE_DEFAULTS__,zo=()=>{if(typeof process>"u"||typeof Ds>"u")return;const n=Ds.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cn(n[1]);return e&&JSON.parse(e)},Ai=()=>{try{return Po()||Wo()||zo()||Bo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vo=n=>{var e,t;return(t=(e=Ai())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Uo=n=>{const e=Vo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Di=()=>{var n;return(n=Ai())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ho(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rt(JSON.stringify(t)),Rt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($o())}function Go(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qo(){return Ti.NODE_ADMIN===!0}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function Qo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="FirebaseError";class mt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ko,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jo(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mt(i,a,s)}}function Jo(n,e){try{let t=0,s="";for(;t<n.length;){const i=n.indexOf("{$",t);if(i===-1){s+=n.substring(t);break}const r=n.indexOf("}",i+2);if(r===-1){s+=n.substring(t);break}const o=n.substring(i+2,r),a=e[o];s+=n.substring(t,i)+(a!=null?String(a):`<${o}?>`),t=r+1}return s}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return JSON.parse(n)}function F(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=it(Cn(r[0])||""),t=it(Cn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Xo=function(n){const e=Mi(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Zo=function(n){const e=Mi(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Le(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ps(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function At(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Os(r)&&Os(o)){if(!At(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Os(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],d,u;for(let h=0;h<80;h++){h<40?h<20?(d=a^r&(o^a),u=1518500249):(d=r^o^a,u=1859775393):h<60?(d=r&o|a&(r|o),u=2400959708):(d=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+d+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Un(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}/**
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
 */function ji(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sa(n){return(await fetch(n,{credentials:"include"})).ok}class rt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const we="[DEFAULT]";/**
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
 */class ia{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Yt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oa(e))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=we){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=we){return this.instances.has(e)}getOptions(e=we){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ra(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=we){return this.component?this.component.multipleInstances?e:we:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ra(n){return n===we?void 0:n}function oa(n){return n.instantiationMode==="EAGER"}/**
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
 */class aa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ia(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const la={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},ca=D.INFO,da={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},ha=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=da[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Li{constructor(e){this.name=e,this._logLevel=ca,this._logHandler=ha,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?la[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const ua=(n,e)=>e.some(t=>n instanceof t);let Ms,js;function fa(){return Ms||(Ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pa(){return js||(js=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fi=new WeakMap,Sn=new WeakMap,Wi=new WeakMap,an=new WeakMap,Hn=new WeakMap;function ma(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(me(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Fi.set(t,n)}).catch(()=>{}),Hn.set(e,n),e}function ga(n){if(Sn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Sn.set(n,e)}let wn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return me(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _a(n){wn=n(wn)}function ya(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ln(this),e,...t);return Wi.set(s,e.sort?e.sort():[e]),me(s)}:pa().includes(n)?function(...e){return n.apply(ln(this),e),me(Fi.get(this))}:function(...e){return me(n.apply(ln(this),e))}}function va(n){return typeof n=="function"?ya(n):(n instanceof IDBTransaction&&ga(n),ua(n,fa())?new Proxy(n,wn):n)}function me(n){if(n instanceof IDBRequest)return ma(n);if(an.has(n))return an.get(n);const e=va(n);return e!==n&&(an.set(n,e),Hn.set(e,n)),e}const ln=n=>Hn.get(n);function ba(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=me(o);return s&&o.addEventListener("upgradeneeded",l=>{s(me(o.result),l.oldVersion,l.newVersion,me(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const Ca=["get","getKey","getAll","getAllKeys","count"],Sa=["put","add","delete","clear"],cn=new Map;function Ls(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cn.get(e))return cn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Sa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ca.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[t](...a),i&&l.done]))[0]};return cn.set(e,r),r}_a(n=>({...n,get:(e,t,s)=>Ls(e,t)||n.get(e,t,s),has:(e,t)=>!!Ls(e,t)||n.has(e,t)}));/**
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
 */class wa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xa(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xn="@firebase/app",Fs="0.16.1";/**
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
 */const de=new Li("@firebase/app"),Ea="@firebase/app-compat",Ia="@firebase/analytics-compat",Ta="@firebase/analytics",Na="@firebase/app-check-compat",Ra="@firebase/app-check",ka="@firebase/auth",Aa="@firebase/auth-compat",Da="@firebase/database",Pa="@firebase/data-connect",Oa="@firebase/database-compat",Ma="@firebase/functions",ja="@firebase/functions-compat",La="@firebase/installations",Fa="@firebase/installations-compat",Wa="@firebase/messaging",za="@firebase/messaging-compat",Ba="@firebase/performance",Va="@firebase/performance-compat",Ua="@firebase/remote-config",Ha="@firebase/remote-config-compat",$a="@firebase/storage",Ga="@firebase/storage-compat",qa="@firebase/firestore",Ya="@firebase/ai",Qa="@firebase/firestore-compat",Ka="firebase",Ja="12.18.0";/**
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
 */const En="[DEFAULT]",Xa={[xn]:"fire-core",[Ea]:"fire-core-compat",[Ta]:"fire-analytics",[Ia]:"fire-analytics-compat",[Ra]:"fire-app-check",[Na]:"fire-app-check-compat",[ka]:"fire-auth",[Aa]:"fire-auth-compat",[Da]:"fire-rtdb",[Pa]:"fire-data-connect",[Oa]:"fire-rtdb-compat",[Ma]:"fire-fn",[ja]:"fire-fn-compat",[La]:"fire-iid",[Fa]:"fire-iid-compat",[Wa]:"fire-fcm",[za]:"fire-fcm-compat",[Ba]:"fire-perf",[Va]:"fire-perf-compat",[Ua]:"fire-rc",[Ha]:"fire-rc-compat",[$a]:"fire-gcs",[Ga]:"fire-gcs-compat",[qa]:"fire-fst",[Qa]:"fire-fst-compat",[Ya]:"fire-vertex","fire-js":"fire-js",[Ka]:"fire-js-all"};/**
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
 */const Dt=new Map,Za=new Map,In=new Map;function Ws(n,e){try{n.container.addComponent(e)}catch(t){de.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pt(n){const e=n.name;if(In.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;In.set(e,n);for(const t of Dt.values())Ws(t,n);for(const t of Za.values())Ws(t,n);return!0}function el(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const nl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new Oi("app","Firebase",nl);/**
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
 */class sl{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
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
 */const il=Ja;function zi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:En,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ae.create("bad-app-name",{appName:String(i)});if(t||(t=Di()),!t)throw ae.create("no-options");const r=Dt.get(i);if(r)if(At(t,r.options)){if(At(s,r.config))return r;throw ae.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw ae.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});const o=new aa(i);for(const l of In.values())o.addComponent(l);const a=new sl(t,s,o);return Dt.set(i,a),a}function rl(n=En){const e=Dt.get(n);if(!e&&n===En&&Di())return zi();if(!e)throw ae.create("no-app",{appName:n});return e}function Oe(n,e,t){let s=Xa[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(o.join(" "));return}Pt(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ol="firebase-heartbeat-database",al=1,ot="firebase-heartbeat-store";let dn=null;function Bi(){return dn||(dn=ba(ol,al,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ot)}catch(t){console.warn(t)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),dn}async function ll(n){try{const t=(await Bi()).transaction(ot),s=await t.objectStore(ot).get(Vi(n));return await t.done,s}catch(e){if(e instanceof mt)de.warn(e.message);else{const t=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});de.warn(t.message)}}}async function zs(n,e){try{const s=(await Bi()).transaction(ot,"readwrite");await s.objectStore(ot).put(e,Vi(n)),await s.done}catch(t){if(t instanceof mt)de.warn(t.message);else{const s=ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});de.warn(s.message)}}}function Vi(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cl=1024,dl=30;class hl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bs();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>dl){const o=pl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){de.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bs(),{heartbeatsToSend:s,unsentEntries:i}=ul(this._heartbeatsCache.heartbeats),r=Rt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return de.warn(t),""}}}function Bs(){return new Date().toISOString().substring(0,10)}function ul(n,e=cl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Vs(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vs(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ll(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return zs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return zs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vs(n){return Rt(JSON.stringify({version:2,heartbeats:n})).length}function pl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ml(n){Pt(new rt("platform-logger",e=>new wa(e),"PRIVATE")),Pt(new rt("heartbeat",e=>new hl(e),"PRIVATE")),Oe(xn,Fs,n),Oe(xn,Fs,"esm2020"),Oe("fire-js","")}/**
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
 */ml("");var Us={};const Hs="@firebase/database",$s="1.1.5";/**
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
 */let Ui="";function gl(n){Ui=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),F(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:it(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _l(e)}}catch{}return new yl},Ee=Hi("localStorage"),vl=Hi("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Li("@firebase/database"),bl=function(){let n=1;return function(){return n++}}(),$i=function(n){const e=na(n),t=new ta;t.update(e);const s=t.digest();return Vn.encodeByteArray(s)},gt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gt.apply(null,s):typeof s=="object"?e+=F(s):e+=s,e+=" "}return e};let Ze=null,Gs=!0;const Cl=function(n,e){m(!0,"Can't turn on custom loggers persistently."),Me.logLevel=D.VERBOSE,Ze=Me.log.bind(Me)},$=function(...n){if(Gs===!0&&(Gs=!1,Ze===null&&vl.get("logging_enabled")===!0&&Cl()),Ze){const e=gt.apply(null,n);Ze(e)}},_t=function(n){return function(...e){$(n,...e)}},Tn=function(...n){const e="FIREBASE INTERNAL ERROR: "+gt(...n);Me.error(e)},he=function(...n){const e=`FIREBASE FATAL ERROR: ${gt(...n)}`;throw Me.error(e),new Error(e)},J=function(...n){const e="FIREBASE WARNING: "+gt(...n);Me.warn(e)},Sl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Fe="[MIN_NAME]",Te="[MAX_NAME]",Ue=function(n,e){if(n===e)return 0;if(n===Fe||e===Te)return-1;if(e===Fe||n===Te)return 1;{const t=qs(n),s=qs(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},xl=function(n,e){return n===e?0:n<e?-1:1},Ye=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+F(e))},$n=function(n){if(typeof n!="object"||n===null)return F(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=F(e[s]),t+=":",t+=$n(n[e[s]]);return t+="}",t},qi=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function X(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Yi=function(n){m(!Gi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const d=[];for(l=t;l;l-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)d.push(r%2?1:0),r=Math.floor(r/2);d.push(i?1:0),d.reverse();const u=d.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},El=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Il=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Nl=new RegExp("^-?(0*)\\d{1,10}$"),Rl=-2147483648,kl=2147483647,qs=function(n){if(Nl.test(n)){const e=Number(n);if(e>=Rl&&e<=kl)return e}return null},He=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw J("Exception was thrown by user callback.",t),e},Math.floor(0))}},Al=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},et=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Dl{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,tl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Tt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="5",Qi="v",Ki="s",Ji="r",Xi="f",Zi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,er="ls",tr="p",Nn="ac",nr="websocket",sr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,d=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ee.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ee.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ol(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function rr(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===nr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===sr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ol(n)&&(t.ns=n.namespace);const i=[];return X(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.counters_={}}incrementCounter(e,t=1){ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jo(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={},un={};function qn(n){const e=n.toString();return hn[e]||(hn[e]=new Ml),hn[e]}function jl(n,e){const t=n.toString();return un[t]||(un[t]=e()),un[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&He(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="start",Fl="close",Wl="pLPCommand",zl="pRTLPCB",or="id",ar="pw",lr="ser",Bl="cb",Vl="seg",Ul="ts",Hl="d",$l="dframe",cr=1870,dr=30,Gl=cr-dr,ql=25e3,Yl=3e4;class Pe{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_t(e),this.stats_=qn(t),this.urlFn=l=>(this.appCheckToken&&(l[Nn]=this.appCheckToken),rr(t,sr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ll(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yl)),wl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yn((...r)=>{const[o,a,l,d,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ys)this.id=a,this.password=l;else if(o===Fl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ys]="t",s[lr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Bl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qi]=Gn,this.transportSessionId&&(s[Ki]=this.transportSessionId),this.lastSessionId&&(s[er]=this.lastSessionId),this.applicationId&&(s[tr]=this.applicationId),this.appCheckToken&&(s[Nn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zi.test(location.hostname)&&(s[Ji]=Xi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pe.forceAllow_=!0}static forceDisallow(){Pe.forceDisallow_=!0}static isAvailable(){return Pe.forceAllow_?!0:!Pe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!El()&&!Il()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=F(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ri(t),i=qi(s,Gl);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[$l]="t",s[or]=e,s[ar]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=F(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bl(),window[Wl+this.uniqueCallbackIdentifier]=e,window[zl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$("frame writing exception"),a.stack&&$(a.stack),$(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[or]=this.myID,e[ar]=this.myPW,e[lr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dr+s.length<=cr;){const o=this.pendingSegs.shift();s=s+"&"+Vl+i+"="+o.seg+"&"+Ul+i+"="+o.ts+"&"+Hl+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ql)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{$("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=16384,Kl=45e3;let Ot=null;typeof MozWebSocket<"u"?Ot=MozWebSocket:typeof WebSocket<"u"&&(Ot=WebSocket);class te{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_t(this.connId),this.stats_=qn(t),this.connURL=te.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Qi]=Gn,typeof location<"u"&&location.hostname&&Zi.test(location.hostname)&&(o[Ji]=Xi),t&&(o[Ki]=t),s&&(o[er]=s),i&&(o[Nn]=i),r&&(o[tr]=r),rr(e,nr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ee.set("previous_websocket_failure",!0);try{let s;qo(),this.mySock=new Ot(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){te.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ot!==null&&!te.forceDisallow_}static previouslyFailed(){return Ee.isInMemoryStorage||Ee.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ee.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=it(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=F(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=qi(t,Ql);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}te.responsesRequiredToBeHealthy=2;te.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static get ALL_TRANSPORTS(){return[Pe,te]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=te&&te.isAvailable();let s=t&&!te.previouslyFailed();if(e.webSocketOnly&&(t||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[te];else{const i=this.transports_=[];for(const r of at.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);at.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}at.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=6e4,Xl=5e3,Zl=10*1024,ec=100*1024,fn="t",Qs="d",tc="s",Ks="r",nc="e",Js="o",Xs="a",Zs="n",ei="p",sc="h";class ic{constructor(e,t,s,i,r,o,a,l,d,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=d,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_t("c:"+this.id+":"),this.transportManager_=new at(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=et(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ec?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fn in e){const t=e[fn];t===Xs?this.upgradeIfSecondaryHealthy_():t===Ks?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Js&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ye("t",e),s=Ye("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ei,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ye("t",e),s=Ye("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ye(fn,e);if(Qs in e){const s=e[Qs];if(t===sc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Zs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tc?this.onConnectionShutdown_(s):t===Ks?this.onReset_(s):t===nc?Tn("Server Error: "+s):t===Js?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Gn!==s&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),et(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):et(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ei,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ee.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends ur{static getInstance(){return new Mt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=32,ni=768;class R{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new R("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ye(n){return n.pieces_.length-n.pieceNum_}function P(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new R(n.pieces_,e)}function fr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function rc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function mr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new R(e,0)}function W(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof R)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new R(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return Y(P(n),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Qn(n,e){if(ye(n)!==ye(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ne(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ye(n)>ye(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class oc{constructor(e,t){this.errorPrefix_=t,this.parts_=pr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qt(this.parts_[s]);gr(this)}}function ac(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Qt(e),gr(n)}function lc(n){const e=n.parts_.pop();n.byteLength_-=Qt(e),n.parts_.length>0&&(n.byteLength_-=1)}function gr(n){if(n.byteLength_>ni)throw new Error(n.errorPrefix_+"has a key path longer than "+ni+" bytes ("+n.byteLength_+").");if(n.parts_.length>ti)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ti+") or object contains a cycle "+xe(n))}function xe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ur{static getInstance(){return new Kn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=1e3,cc=60*5*1e3,si=30*1e3,dc=1.3,hc=3e4,uc="server_kill",ii=3;class ce extends hr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ce.nextPersistentConnectionId_++,this.log_=_t("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qe,this.maxReconnectDelay_=cc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(F(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Yt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,d=a.s;ce.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(d,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ue(e,"w")){const s=Le(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=si)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Xo(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+F(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Tn("Unrecognized action received from server: "+F(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hc&&(this.reconnectDelay_=Qe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ce.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},d=function(h){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:d};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$("getToken() completed but was canceled"):($("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new ic(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{J(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(uc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&J(h),l())}}}interrupt(e){$("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ps(this.interruptReasons_)&&(this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>$n(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new R(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){$("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ii&&(this.reconnectDelay_=si,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ii&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ui.replace(/\./g,"-")]=1,Pi()?e["framework.cordova"]=1:Go()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mt.getInstance().currentlyOnline();return Ps(this.interruptReasons_)&&e}}ce.nextPersistentConnectionId_=0;ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(Fe,e),i=new S(Fe,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt;class _r extends Kt{static get __EMPTY_NODE(){return wt}static set __EMPTY_NODE(e){wt=e}compare(e,t){return Ue(e.name,t.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(Te,wt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,wt)}toString(){return".key"}}const je=new _r;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class B{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??B.RED,this.left=i??K.EMPTY_NODE,this.right=r??K.EMPTY_NODE}copy(e,t,s,i,r){return new B(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return K.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return K.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}B.RED=!0;B.BLACK=!1;class fc{copy(e,t,s,i,r){return this}insert(e,t,s){return new B(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class K{constructor(e,t=K.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new K(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,B.BLACK,null,null))}remove(e){return new K(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,B.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xt(this.root_,null,this.comparator_,!0,e)}}K.EMPTY_NODE=new fc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e){return Ue(n.name,e.name)}function Jn(n,e){return Ue(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;function mc(n){Rn=n}const yr=function(n){return typeof n=="number"?"number:"+Yi(n):"string:"+n},vr=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ue(e,".sv"),"Priority must be a string or number.")}else m(n===Rn||n.isEmpty(),"priority of unexpected type.");m(n===Rn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class z{static set __childrenNodeConstructor(e){ri=e}static get __childrenNodeConstructor(){return ri}constructor(e,t=z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:C(e)===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||ye(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,z.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Yi(this.value_):e+=this.value_,this.lazyHash_=$i(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof z.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=z.VALUE_TYPE_ORDER.indexOf(t),r=z.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br,Cr;function gc(n){br=n}function _c(n){Cr=n}class yc extends Kt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ue(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Te,new z("[PRIORITY-POST]",Cr))}makePost(e,t){const s=br(e);return new S(t,new z("[PRIORITY-POST]",s))}toString(){return".priority"}}const L=new yc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=Math.log(2);class bc{constructor(e){const t=r=>parseInt(Math.log(r)/vc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jt=function(n,e,t,s){n.sort(e);const i=function(l,d){const u=d-l;let h,f;if(u===0)return null;if(u===1)return h=n[l],f=t?t(h):h,new B(f,h.node,B.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),b=i(p+1,d);return h=n[p],f=t?t(h):h,new B(f,h.node,B.BLACK,g,b)}},r=function(l){let d=null,u=null,h=n.length;const f=function(g,b){const E=h-g,M=h;h-=g;const G=i(E+1,M),k=n[E],_=t?t(k):k;p(new B(_,k.node,b,null,G))},p=function(g){d?(d.left=g,d=g):(u=g,d=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));b?f(E,B.BLACK):(f(E,B.BLACK),f(E,B.RED))}return u},o=new bc(n.length),a=r(o);return new K(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;const De={};class le{static get Default(){return m(De&&L,"ChildrenNode.ts has not been loaded"),pn=pn||new le({".priority":De},{".priority":L}),pn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof K?t:null}hasIndex(e){return ue(this.indexSet_,e.toString())}addIndex(e,t){m(e!==je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=jt(s,e.getCompare()):a=De;const l=e.toString(),d={...this.indexSet_};d[l]=e;const u={...this.indexes_};return u[l]=a,new le(u,d)}addToIndexes(e,t){const s=kt(this.indexes_,(i,r)=>{const o=Le(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===De)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(S.Wrap);let d=l.getNext();for(;d;)d.name!==e.name&&a.push(d),d=l.getNext();return a.push(e),jt(a,o.getCompare())}else return De;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new S(e.name,a))),l.insert(e,e.node)}});return new le(s,this.indexSet_)}removeFromIndexes(e,t){const s=kt(this.indexes_,i=>{if(i===De)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new le(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke;class v{static get EMPTY_NODE(){return Ke||(Ke=new v(new K(Jn),null,le.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vr(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ke}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ke:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ke:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{m(C(e)!==".priority"||ye(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(P(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(L,(o,a)=>{t[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yr(this.getPriority().val())+":"),this.forEachChild(L,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":$i(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yt?-1:0}withIndex(e){if(e===je||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(L),i=t.getIterator(L);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===je?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cc extends v{constructor(){super(new K(Jn),v.EMPTY_NODE,le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const yt=new Cc;Object.defineProperties(S,{MIN:{value:new S(Fe,v.EMPTY_NODE)},MAX:{value:new S(Te,yt)}});_r.__EMPTY_NODE=v.EMPTY_NODE;z.__childrenNodeConstructor=v;mc(yt);_c(yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=!0;function V(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new z(t,V(e))}if(!(n instanceof Array)&&Sc){const t=[];let s=!1;if(X(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new S(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=jt(t,pc,o=>o.name,Jn);if(s){const o=jt(t,L.getCompare());return new v(r,V(e),new le({".priority":o},{".priority":L}))}else return new v(r,V(e),le.Default)}else{let t=v.EMPTY_NODE;return X(n,(s,i)=>{if(ue(n,s)&&s.substring(0,1)!=="."){const r=V(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(V(e))}}gc(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Kt{constructor(e){super(),this.indexPath_=e,m(!x(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ue(e.name,t.name):r}makePost(e,t){const s=V(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,yt);return new S(Te,e)}toString(){return pr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Kt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ue(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=V(e);return new S(t,s)}toString(){return".value"}}const Ec=new xc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){return{type:"value",snapshotNode:n}}function We(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function lt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ct(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ic(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(lt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(We(t,s)):o.trackChildChange(ct(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(L,(i,r)=>{t.hasChild(i)||s.trackChildChange(lt(i,r))}),t.isLeafNode()||t.forEachChild(L,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ct(i,r,o))}else s.trackChildChange(We(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.indexedFilter_=new Xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dt.getStartPost_(e),this.endPost_=dt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(L,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new dt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new S(t,s),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,d,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ct(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(lt(t,h));const b=a.updateImmediateChild(t,v.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(We(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(d,l)>=0?(r!=null&&(r.trackChildChange(lt(d.name,d.node)),r.trackChildChange(We(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(d.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=L}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fe}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Te}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L}copy(){const e=new Zn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nc(n){return n.loadsAllData()?new Xn(n.getIndex()):n.hasLimit()?new Tc(n):new dt(n)}function oi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===L?t="$priority":n.index_===Ec?t="$value":n.index_===je?t="$key":(m(n.index_ instanceof wc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=F(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=F(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+F(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=F(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+F(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ai(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==L&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends hr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_t("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Lt.getListenId_(e,s),a={};this.listens_[o]=a;const l=oi(e._queryParams);this.restRequest_(r+".json",l,(d,u)=>{let h=u;if(d===404&&(h=null,d=null),d===null&&this.onDataUpdate_(r,h,!1,s),Le(this.listens_,o)===a){let f;d?d===401?f="permission_denied":f="rest_error:"+d:f="ok",i(f,null)}})}unlisten(e,t){const s=Lt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=oi(e._queryParams),s=e._path.toString(),i=new Yt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ea(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=it(a.responseText)}catch{J("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return{value:null,children:new Map}}function wr(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,Ft());const i=n.children.get(s);e=P(e),wr(i,e,t)}}function kn(n,e,t){n.value!==null?t(e,n.value):kc(n,(s,i)=>{const r=new R(e.toString()+"/"+s);kn(i,r,t)})}function kc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&X(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=10*1e3,Dc=30*1e3,Pc=5*60*1e3;class Oc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ac(e);const s=li+(Dc-li)*Math.random();et(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;X(e,(i,r)=>{r>0&&ue(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),et(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pc))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(se||(se={}));function xr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function es(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ts(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=se.ACK_USER_WRITE,this.source=xr()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new R(e));return new Wt(T(),t,this.revert)}}else return m(C(this.path)===e,"operationForChild called for unrelated child."),new Wt(P(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.source=e,this.path=t,this.type=se.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new ht(this.source,T()):new ht(this.source,P(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=se.OVERWRITE}operationForChild(e){return x(this.path)?new Ne(this.source,T(),this.snap.getImmediateChild(e)):new Ne(this.source,P(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=se.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new R(e));return t.isEmpty()?null:t.value?new Ne(this.source,T(),t.value):new ut(this.source,T(),t)}else return m(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ut(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jc(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ic(o.childName,o.snapshotNode))}),Je(n,i,"child_removed",e,s,t),Je(n,i,"child_added",e,s,t),Je(n,i,"child_moved",r,s,t),Je(n,i,"child_changed",e,s,t),Je(n,i,"value",e,s,t),i}function Je(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Fc(n,a,l)),o.forEach(a=>{const l=Lc(n,a,r);i.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(l,n.query_))})})}function Lc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Fc(n,e,t){if(e.childName==null||t.childName==null)throw Be("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,e){return{eventCache:n,serverCache:e}}function tt(n,e,t,s){return Jt(new ve(e,t,s),n.serverCache)}function Er(n,e,t,s){return Jt(n.eventCache,new ve(e,t,s))}function zt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Re(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;const Wc=()=>(mn||(mn=new K(xl)),mn);class O{static fromObject(e){let t=new O(null);return X(e,(s,i)=>{t=t.set(new R(s),i)}),t}constructor(e,t=Wc()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(x(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(P(e),t);return r!=null?{path:W(new R(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(P(e)):new O(null)}}set(e,t){if(x(e))return new O(t,this.children);{const s=C(e),r=(this.children.get(s)||new O(null)).set(P(e),t),o=this.children.insert(s,r);return new O(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new O(null):new O(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(P(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new O(null):new O(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(P(e)):null}}setTree(e,t){if(x(e))return t;{const s=C(e),r=(this.children.get(s)||new O(null)).setTree(P(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new O(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(W(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(x(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(P(e),W(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,s){if(x(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(P(e),W(t,i),s):new O(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(W(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.writeTree_=e}static empty(){return new ie(new O(null))}}function nt(n,e,t){if(x(e))return new ie(new O(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Y(i,e);return r=r.updateChild(o,t),new ie(n.writeTree_.set(i,r))}else{const i=new O(t),r=n.writeTree_.setTree(e,i);return new ie(r)}}}function ci(n,e,t){let s=n;return X(t,(i,r)=>{s=nt(s,W(e,i),r)}),s}function di(n,e){if(x(e))return ie.empty();{const t=n.writeTree_.setTree(e,new O(null));return new ie(t)}}function An(n,e){return ke(n,e)!=null}function ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function hi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(L,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function ge(n,e){if(x(e))return n;{const t=ke(n,e);return t!=null?new ie(new O(t)):new ie(n.writeTree_.subtree(e))}}function Dn(n){return n.writeTree_.isEmpty()}function ze(n,e){return Ir(T(),n.writeTree_,e)}function Ir(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ir(W(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(W(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,e){return kr(e,n)}function zc(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=nt(n.visibleWrites,e,t)),n.lastWriteId=s}function Bc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Vc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Uc(a,s.path)?i=!1:ne(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Hc(n),!0;if(s.snap)n.visibleWrites=di(n.visibleWrites,s.path);else{const a=s.children;X(a,l=>{n.visibleWrites=di(n.visibleWrites,W(s.path,l))})}return!0}else return!1}function Uc(n,e){if(n.snap)return ne(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ne(W(n.path,t),e))return!0;return!1}function Hc(n){n.visibleWrites=Tr(n.allWrites,$c,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function $c(n){return n.visible}function Tr(n,e,t){let s=ie.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ne(t,o)?(a=Y(t,o),s=nt(s,a,r.snap)):ne(o,t)&&(a=Y(o,t),s=nt(s,T(),r.snap.getChild(a)));else if(r.children){if(ne(t,o))a=Y(t,o),s=ci(s,a,r.children);else if(ne(o,t))if(a=Y(o,t),x(a))s=ci(s,T(),r.children);else{const l=Le(r.children,C(a));if(l){const d=l.getChild(P(a));s=nt(s,T(),d)}}}else throw Be("WriteRecord should have .snap or .children")}}return s}function Nr(n,e,t,s,i){if(!s&&!i){const r=ke(n.visibleWrites,e);if(r!=null)return r;{const o=ge(n.visibleWrites,e);if(Dn(o))return t;if(t==null&&!An(o,T()))return null;{const a=t||v.EMPTY_NODE;return ze(o,a)}}}else{const r=ge(n.visibleWrites,e);if(!i&&Dn(r))return t;if(!i&&t==null&&!An(r,T()))return null;{const o=function(d){return(d.visible||i)&&(!s||!~s.indexOf(d.writeId))&&(ne(d.path,e)||ne(e,d.path))},a=Tr(n.allWrites,o,e),l=t||v.EMPTY_NODE;return ze(a,l)}}}function Gc(n,e,t){let s=v.EMPTY_NODE;const i=ke(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(L,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ge(n.visibleWrites,e);return t.forEachChild(L,(o,a)=>{const l=ze(ge(r,new R(o)),a);s=s.updateImmediateChild(o,l)}),hi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ge(n.visibleWrites,e);return hi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qc(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=W(e,t);if(An(n.visibleWrites,r))return null;{const o=ge(n.visibleWrites,r);return Dn(o)?i.getChild(t):ze(o,i.getChild(t))}}function Yc(n,e,t,s){const i=W(e,t),r=ke(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ge(n.visibleWrites,i);return ze(o,s.getNode().getImmediateChild(t))}else return null}function Qc(n,e){return ke(n.visibleWrites,e)}function Kc(n,e,t,s,i,r,o){let a;const l=ge(n.visibleWrites,e),d=ke(l,T());if(d!=null)a=d;else if(t!=null)a=ze(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Jc(){return{visibleWrites:ie.empty(),allWrites:[],lastWriteId:-1}}function Bt(n,e,t,s){return Nr(n.writeTree,n.treePath,e,t,s)}function ns(n,e){return Gc(n.writeTree,n.treePath,e)}function ui(n,e,t,s){return qc(n.writeTree,n.treePath,e,t,s)}function Vt(n,e){return Qc(n.writeTree,W(n.treePath,e))}function Xc(n,e,t,s,i,r){return Kc(n.writeTree,n.treePath,e,t,s,i,r)}function ss(n,e,t){return Yc(n.writeTree,n.treePath,e,t)}function Rr(n,e){return kr(W(n.treePath,e),n.writeTree)}function kr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,ct(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,lt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,We(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,ct(s,e.snapshotNode,i.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ar=new ed;class is{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ve(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ss(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Re(this.viewCache_),r=Xc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){return{filter:n}}function nd(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sd(n,e,t,s,i){const r=new Zc;let o,a;if(t.type===se.OVERWRITE){const d=t;d.source.fromUser?o=Pn(n,e,d.path,d.snap,s,i,r):(m(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!x(d.path),o=Ut(n,e,d.path,d.snap,s,i,a,r))}else if(t.type===se.MERGE){const d=t;d.source.fromUser?o=rd(n,e,d.path,d.children,s,i,r):(m(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=On(n,e,d.path,d.children,s,i,a,r))}else if(t.type===se.ACK_USER_WRITE){const d=t;d.revert?o=ld(n,e,d.path,s,i,r):o=od(n,e,d.path,d.affectedTree,s,i,r)}else if(t.type===se.LISTEN_COMPLETE)o=ad(n,e,t.path,s,r);else throw Be("Unknown operation type: "+t.type);const l=r.getChanges();return id(e,o,l),{viewCache:o,changes:l}}function id(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=zt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Sr(zt(e)))}}function Dr(n,e,t,s,i,r){const o=e.eventCache;if(Vt(s,t)!=null)return e;{let a,l;if(x(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Re(e),u=d instanceof v?d:v.EMPTY_NODE,h=ns(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const d=Bt(s,Re(e));a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const d=C(t);if(d===".priority"){m(ye(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ui(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=P(t);let h;if(o.isCompleteForChild(d)){l=e.serverCache.getNode();const f=ui(s,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(d).updateChild(u,f):h=o.getNode().getImmediateChild(d)}else h=ss(s,d,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),d,h,u,i,r):a=o.getNode()}}return tt(e,a,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function Ut(n,e,t,s,i,r,o,a){const l=e.serverCache;let d;const u=o?n.filter:n.filter.getIndexedFilter();if(x(t))d=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);d=u.updateFullNode(l.getNode(),p,null)}else{const p=C(t);if(!l.isCompleteForPath(t)&&ye(t)>1)return e;const g=P(t),E=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?d=u.updatePriority(l.getNode(),E):d=u.updateChild(l.getNode(),p,E,g,Ar,null)}const h=Er(e,d,l.isFullyInitialized()||x(t),u.filtersNodes()),f=new is(i,h,r);return Dr(n,h,t,i,f,a)}function Pn(n,e,t,s,i,r,o){const a=e.eventCache;let l,d;const u=new is(i,e,r);if(x(t))d=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=tt(e,d,!0,n.filter.filtersNodes());else{const h=C(t);if(h===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),s),l=tt(e,d,a.isFullyInitialized(),a.isFiltered());else{const f=P(t),p=a.getNode().getImmediateChild(h);let g;if(x(f))g=s;else{const b=u.getCompleteChild(h);b!=null?fr(f)===".priority"&&b.getChild(mr(f)).isEmpty()?g=b:g=b.updateChild(f,s):g=v.EMPTY_NODE}if(p.equals(g))l=e;else{const b=n.filter.updateChild(a.getNode(),h,g,f,u,o);l=tt(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function fi(n,e){return n.eventCache.isCompleteForChild(e)}function rd(n,e,t,s,i,r,o){let a=e;return s.foreach((l,d)=>{const u=W(t,l);fi(e,C(u))&&(a=Pn(n,a,u,d,i,r,o))}),s.foreach((l,d)=>{const u=W(t,l);fi(e,C(u))||(a=Pn(n,a,u,d,i,r,o))}),a}function pi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function On(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,d;x(t)?d=s:d=new O(null).setTree(t,s);const u=e.serverCache.getNode();return d.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=pi(n,p,f);l=Ut(n,l,new R(h),g,i,r,o,a)}}),d.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),b=pi(n,g,f);l=Ut(n,l,new R(h),b,i,r,o,a)}}),l}function od(n,e,t,s,i,r,o){if(Vt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(x(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Ut(n,e,t,l.getNode().getChild(t),i,r,a,o);if(x(t)){let d=new O(null);return l.getNode().forEachChild(je,(u,h)=>{d=d.set(new R(u),h)}),On(n,e,t,d,i,r,a,o)}else return e}else{let d=new O(null);return s.foreach((u,h)=>{const f=W(t,u);l.isCompleteForPath(f)&&(d=d.set(u,l.getNode().getChild(f)))}),On(n,e,t,d,i,r,a,o)}}function ad(n,e,t,s,i){const r=e.serverCache,o=Er(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return Dr(n,o,t,s,Ar,i)}function ld(n,e,t,s,i,r){let o;if(Vt(s,t)!=null)return e;{const a=new is(s,e,i),l=e.eventCache.getNode();let d;if(x(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Bt(s,Re(e));else{const h=e.serverCache.getNode();m(h instanceof v,"serverChildren would be complete if leaf node"),u=ns(s,h)}u=u,d=n.filter.updateFullNode(l,u,r)}else{const u=C(t);let h=ss(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?d=n.filter.updateChild(l,u,h,P(t),a,r):e.eventCache.getNode().hasChild(u)?d=n.filter.updateChild(l,u,v.EMPTY_NODE,P(t),a,r):d=l,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bt(s,Re(e)),o.isLeafNode()&&(d=n.filter.updateFullNode(d,o,r)))}return o=e.serverCache.isFullyInitialized()||Vt(s,T())!=null,tt(e,d,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Xn(s.getIndex()),r=Nc(s);this.processor_=td(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),d=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new ve(l,o.isFullyInitialized(),i.filtersNodes()),h=new ve(d,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Jt(h,u),this.eventGenerator_=new Mc(this.query_)}get query(){return this.query_}}function dd(n){return n.viewCache_.serverCache.getNode()}function hd(n){return zt(n.viewCache_)}function ud(n,e){const t=Re(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function mi(n){return n.eventRegistrations_.length===0}function fd(n,e){n.eventRegistrations_.push(e)}function gi(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function _i(n,e,t,s){e.type===se.MERGE&&e.source.queryId!==null&&(m(Re(n.viewCache_),"We should always have a full cache before handling merges"),m(zt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=sd(n.processor_,i,e,t,s);return nd(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Pr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function pd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(L,(r,o)=>{s.push(We(r,o))}),t.isFullyInitialized()&&s.push(Sr(t.getNode())),Pr(n,s,t.getNode(),e)}function Pr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return jc(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;class Or{constructor(){this.views=new Map}}function md(n){m(!Ht,"__referenceConstructor has already been defined"),Ht=n}function gd(){return m(Ht,"Reference.ts has not been loaded"),Ht}function _d(n){return n.views.size===0}function rs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),_i(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(_i(o,e,t,s));return r}}function Mr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Bt(t,i?s:null),l=!1;a?l=!0:s instanceof v?(a=ns(t,s),l=!1):(a=v.EMPTY_NODE,l=!1);const d=Jt(new ve(a,l,!1),new ve(s,i,!1));return new cd(e,d)}return o}function yd(n,e,t,s,i,r){const o=Mr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),fd(o,t),pd(o,t)}function vd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=be(n);if(i==="default")for(const[l,d]of n.views.entries())o=o.concat(gi(d,t,s)),mi(d)&&(n.views.delete(l),d.query._queryParams.loadsAllData()||r.push(d.query));else{const l=n.views.get(i);l&&(o=o.concat(gi(l,t,s)),mi(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!be(n)&&r.push(new(gd())(e._repo,e._path)),{removed:r,events:o}}function jr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function _e(n,e){let t=null;for(const s of n.views.values())t=t||ud(s,e);return t}function Lr(n,e){if(e._queryParams.loadsAllData())return Zt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Fr(n,e){return Lr(n,e)!=null}function be(n){return Zt(n)!=null}function Zt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;function bd(n){m(!$t,"__referenceConstructor has already been defined"),$t=n}function Cd(){return m($t,"Reference.ts has not been loaded"),$t}let Sd=1;class yi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new O(null),this.pendingWriteTree_=Jc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wr(n,e,t,s,i){return zc(n.pendingWriteTree_,e,t,s,i),i?bt(n,new Ne(xr(),e,t)):[]}function Ie(n,e,t=!1){const s=Bc(n.pendingWriteTree_,e);if(Vc(n.pendingWriteTree_,e)){let r=new O(null);return s.snap!=null?r=r.set(T(),!0):X(s.children,o=>{r=r.set(new R(o),!0)}),bt(n,new Wt(s.path,r,t))}else return[]}function vt(n,e,t){return bt(n,new Ne(es(),e,t))}function wd(n,e,t){const s=O.fromObject(t);return bt(n,new ut(es(),e,s))}function xd(n,e){return bt(n,new ht(es(),e))}function Ed(n,e,t){const s=as(n,t);if(s){const i=ls(s),r=i.path,o=i.queryId,a=Y(r,e),l=new ht(ts(o),a);return cs(n,r,l)}else return[]}function Gt(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Fr(o,e))){const l=vd(o,e,t,s);_d(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const d=l.removed;if(a=l.events,!i){const u=d.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,p)=>be(p));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Nd(f);for(let g=0;g<p.length;++g){const b=p[g],E=b.query,M=Ur(n,b);n.listenProvider_.startListening(st(E),ft(n,E),M.hashFn,M.onComplete)}}}!h&&d.length>0&&!s&&(u?n.listenProvider_.stopListening(st(e),null):d.forEach(f=>{const p=n.queryToTagMap.get(en(f));n.listenProvider_.stopListening(st(f),p)}))}Rd(n,d)}return a}function zr(n,e,t,s){const i=as(n,s);if(i!=null){const r=ls(i),o=r.path,a=r.queryId,l=Y(o,e),d=new Ne(ts(a),l,t);return cs(n,o,d)}else return[]}function Id(n,e,t,s){const i=as(n,s);if(i){const r=ls(i),o=r.path,a=r.queryId,l=Y(o,e),d=O.fromObject(t),u=new ut(ts(a),l,d);return cs(n,o,u)}else return[]}function Mn(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=Y(f,i);r=r||_e(p,g),o=o||be(p)});let a=n.syncPointTree_.get(i);a?(o=o||be(a),r=r||_e(a,T())):(a=new Or,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const b=_e(g,T());b&&(r=r.updateImmediateChild(p,b))}));const d=Fr(a,e);if(!d&&!e._queryParams.loadsAllData()){const f=en(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=kd();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=Xt(n.pendingWriteTree_,i);let h=yd(a,e,t,u,r,l);if(!d&&!o&&!s){const f=Lr(a,e);h=h.concat(Ad(n,e,f))}return h}function os(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Y(o,e),d=_e(a,l);if(d)return d});return Nr(i,e,r,t,!0)}function Td(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(d,u)=>{const h=Y(d,t);s=s||_e(u,h)});let i=n.syncPointTree_.get(t);i?s=s||_e(i,T()):(i=new Or,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new ve(s,!0,!1):null,a=Xt(n.pendingWriteTree_,e._path),l=Mr(i,e,a,r?o.getNode():v.EMPTY_NODE,r);return hd(l)}function bt(n,e){return Br(e,n.syncPointTree_,null,Xt(n.pendingWriteTree_,T()))}function Br(n,e,t,s){if(x(n.path))return Vr(n,e,t,s);{const i=e.get(T());t==null&&i!=null&&(t=_e(i,T()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const d=t?t.getImmediateChild(o):null,u=Rr(s,o);r=r.concat(Br(a,l,d,u))}return i&&(r=r.concat(rs(i,n,s,t))),r}}function Vr(n,e,t,s){const i=e.get(T());t==null&&i!=null&&(t=_e(i,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,d=Rr(s,o),u=n.operationForChild(o);u&&(r=r.concat(Vr(u,a,l,d)))}),i&&(r=r.concat(rs(i,n,s,t))),r}function Ur(n,e){const t=e.query,s=ft(n,t);return{hashFn:()=>(dd(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ed(n,t._path,s):xd(n,t._path);{const r=Tl(i,t);return Gt(n,t,null,r)}}}}function ft(n,e){const t=en(e);return n.queryToTagMap.get(t)}function en(n){return n._path.toString()+"$"+n._queryIdentifier}function as(n,e){return n.tagToQueryMap.get(e)}function ls(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new R(n.substr(0,e))}}function cs(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Xt(n.pendingWriteTree_,e);return rs(s,t,i,null)}function Nd(n){return n.fold((e,t,s)=>{if(t&&be(t))return[Zt(t)];{let i=[];return t&&(i=jr(t)),X(s,(r,o)=>{i=i.concat(o)}),i}})}function st(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Cd())(n._repo,n._path):n}function Rd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=en(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function kd(){return Sd++}function Ad(n,e,t){const s=e._path,i=ft(n,e),r=Ur(n,t),o=n.listenProvider_.startListening(st(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!be(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((d,u,h)=>{if(!x(d)&&u&&be(u))return[Zt(u).query];{let f=[];return u&&(f=f.concat(jr(u).map(p=>p.query))),X(h,(p,g)=>{f=f.concat(g)}),f}});for(let d=0;d<l.length;++d){const u=l[d];n.listenProvider_.stopListening(st(u),ft(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ds(t)}node(){return this.node_}}class hs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=W(this.path_,e);return new hs(this.syncTree_,t)}node(){return os(this.syncTree_,this.path_)}}const Dd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},vi=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Pd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Od(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Pd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Od=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Md=function(n,e,t,s){return us(e,new hs(t,n),s)},Hr=function(n,e,t){return us(n,new ds(e),t)};function us(n,e,t){const s=n.getPriority().val(),i=vi(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=vi(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new z(a,V(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new z(i))),o.forEachChild(L,(a,l)=>{const d=us(l,e.getImmediateChild(a),t);d!==l&&(r=r.updateImmediateChild(a,d))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ps(n,e){let t=e instanceof R?e:new R(e),s=n,i=C(t);for(;i!==null;){const r=Le(s.node.children,i)||{children:{},childCount:0};s=new fs(i,s,r),t=P(t),i=C(t)}return s}function $e(n){return n.node.value}function $r(n,e){n.node.value=e,jn(n)}function Gr(n){return n.node.childCount>0}function jd(n){return $e(n)===void 0&&!Gr(n)}function tn(n,e){X(n.node.children,(t,s)=>{e(new fs(t,n,s))})}function qr(n,e,t,s){t&&e(n),tn(n,i=>{qr(i,e,!0)})}function Ld(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ct(n){return new R(n.parent===null?n.name:Ct(n.parent)+"/"+n.name)}function jn(n){n.parent!==null&&Fd(n.parent,n.name,n)}function Fd(n,e,t){const s=jd(t),i=ue(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,jn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,jn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=/[\[\].#$\/\u0000-\u001F\u007F]/,zd=/[\[\].#$\u0000-\u001F\u007F]/,gn=10*1024*1024,Yr=function(n){return typeof n=="string"&&n.length!==0&&!Wd.test(n)},Qr=function(n){return typeof n=="string"&&n.length!==0&&!zd.test(n)},Bd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qr(n)},Vd=function(n,e,t,s){ms(Un(n,"value"),e,t)},ms=function(n,e,t){const s=t instanceof R?new oc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xe(s));if(typeof e=="function")throw new Error(n+"contains a function "+xe(s)+" with contents = "+e.toString());if(Gi(e))throw new Error(n+"contains "+e.toString()+" "+xe(s));if(typeof e=="string"&&e.length>gn/3&&Qt(e)>gn)throw new Error(n+"contains a string greater than "+gn+" utf8 bytes "+xe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(X(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yr(o)))throw new Error(n+" contains an invalid key ("+o+") "+xe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ac(s,o),ms(n,a,s),lc(s)}),i&&r)throw new Error(n+' contains ".value" child '+xe(s)+" in addition to actual children.")}},Kr=function(n,e,t,s){if(!Qr(t))throw new Error(Un(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ud=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kr(n,e,t)},Hd=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},$d=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Bd(t))throw new Error(Un(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Qn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Jr(n,e,t){gs(n,t),Xr(n,s=>Qn(s,e))}function oe(n,e,t){gs(n,t),Xr(n,s=>ne(s,e)||ne(e,s))}function Xr(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(qd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ze&&$("event: "+t.toString()),He(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="repo_interrupt",Qd=25;class Kd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ft(),this.transactionQueueTree_=new fs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jd(n,e,t){if(n.stats_=qn(n.repoInfo_),n.forceRestClient_||Al())n.server_=new Lt(n.repoInfo_,(s,i,r,o)=>{bi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ci(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{F(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ce(n.repoInfo_,e,(s,i,r,o)=>{bi(n,s,i,r,o)},s=>{Ci(n,s)},s=>{Zd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=jl(n.repoInfo_,()=>new Oc(n.stats_,n.server_)),n.infoData_=new Rc,n.infoSyncTree_=new yi({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=vt(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ys(n,"connected",!1),n.serverSyncTree_=new yi({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const d=o(a,l);oe(n.eventQueue_,s._path,d)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Xd(n){const t=n.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function _s(n){return Dd({timestamp:Xd(n)})}function bi(n,e,t,s,i){n.dataUpdateCount++;const r=new R(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=kt(t,d=>V(d));o=Id(n.serverSyncTree_,r,l,i)}else{const l=V(t);o=zr(n.serverSyncTree_,r,l,i)}else if(s){const l=kt(t,d=>V(d));o=wd(n.serverSyncTree_,r,l)}else{const l=V(t);o=vt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=sn(n,r)),oe(n.eventQueue_,a,o)}function Ci(n,e){ys(n,"connected",e),e===!1&&nh(n)}function Zd(n,e){X(e,(t,s)=>{ys(n,t,s)})}function ys(n,e,t){const s=new R("/.info/"+e),i=V(t);n.infoData_.updateSnapshot(s,i);const r=vt(n.infoSyncTree_,s,i);oe(n.eventQueue_,s,r)}function Zr(n){return n.nextWriteId_++}function eh(n,e,t){const s=Td(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=V(i).withIndex(e._queryParams.getIndex());Mn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=vt(n.serverSyncTree_,e._path,r);else{const a=ft(n.serverSyncTree_,e);o=zr(n.serverSyncTree_,e._path,r,a)}return oe(n.eventQueue_,e._path,o),Gt(n.serverSyncTree_,e,t,null,!0),r},i=>(nn(n,"get for query "+F(e)+" failed: "+i),Promise.reject(new Error(i))))}function th(n,e,t,s,i){nn(n,"set",{path:e.toString(),value:t,priority:s});const r=_s(n),o=V(t,s),a=os(n.serverSyncTree_,e),l=Hr(o,a,r),d=Zr(n),u=Wr(n.serverSyncTree_,e,l,d,!0);gs(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||J("set at "+e+" failed: "+f);const b=Ie(n.serverSyncTree_,d,!g);oe(n.eventQueue_,e,b),oh(n,i,f,p)});const h=io(n,e);sn(n,h),oe(n.eventQueue_,h,[])}function nh(n){nn(n,"onDisconnectEvents");const e=_s(n),t=Ft();kn(n.onDisconnect_,T(),(i,r)=>{const o=Md(i,r,n.serverSyncTree_,e);wr(t,i,o)});let s=[];kn(t,T(),(i,r)=>{s=s.concat(vt(n.serverSyncTree_,i,r));const o=io(n,i);sn(n,o)}),n.onDisconnect_=Ft(),oe(n.eventQueue_,T(),s)}function sh(n,e,t){let s;C(e._path)===".info"?s=Mn(n.infoSyncTree_,e,t):s=Mn(n.serverSyncTree_,e,t),Jr(n.eventQueue_,e._path,s)}function ih(n,e,t){let s;C(e._path)===".info"?s=Gt(n.infoSyncTree_,e,t):s=Gt(n.serverSyncTree_,e,t),Jr(n.eventQueue_,e._path,s)}function rh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Yd)}function nn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$(t,...e)}function oh(n,e,t,s){e&&He(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function eo(n,e,t){return os(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function vs(n,e=n.transactionQueueTree_){if(e||rn(n,e),$e(e)){const t=no(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ah(n,Ct(e),t)}else Gr(e)&&tn(e,t=>{vs(n,t)})}function ah(n,e,t){const s=t.map(d=>d.currentWriteId),i=eo(n,e,s);let r=i;const o=i.hash();for(let d=0;d<t.length;d++){const u=t[d];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Y(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,d=>{nn(n,"transaction put response",{path:l.toString(),status:d});let u=[];if(d==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Ie(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();rn(n,ps(n.transactionQueueTree_,e)),vs(n,n.transactionQueueTree_),oe(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)He(h[f])}else{if(d==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{J("transaction at "+l.toString()+" failed: "+d);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=d}sn(n,e)}},o)}function sn(n,e){const t=to(n,e),s=Ct(t),i=no(n,t);return lh(n,i,s),s}function lh(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],d=Y(t,l.path);let u=!1,h;if(m(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qd)u=!0,h="maxretry",i=i.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0));else{const f=eo(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ms("transaction failed: Data returned ",p,l.path);let g=V(p);typeof p=="object"&&p!=null&&ue(p,".priority")||(g=g.updatePriority(f.getPriority()));const E=l.currentWriteId,M=_s(n),G=Hr(g,f,M);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=G,l.currentWriteId=Zr(n),o.splice(o.indexOf(E),1),i=i.concat(Wr(n.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),i=i.concat(Ie(n.serverSyncTree_,E,!0))}else u=!0,h="nodata",i=i.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0))}oe(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}rn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)He(s[a]);vs(n,n.transactionQueueTree_)}function to(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&$e(s)===void 0;)s=ps(s,t),e=P(e),t=C(e);return s}function no(n,e){const t=[];return so(n,e,t),t.sort((s,i)=>s.order-i.order),t}function so(n,e,t){const s=$e(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);tn(e,i=>{so(n,i,t)})}function rn(n,e){const t=$e(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,$r(e,t.length>0?t:void 0)}tn(e,s=>{rn(n,s)})}function io(n,e){const t=Ct(to(n,e)),s=ps(n.transactionQueueTree_,e);return Ld(s,i=>{_n(n,i)}),_n(n,s),qr(s,i=>{_n(n,i)}),t}function _n(n,e){const t=$e(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ie(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$r(e,void 0):t.length=r+1,oe(n.eventQueue_,Ct(e),i);for(let o=0;o<s.length;o++)He(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):J(`Invalid query segment '${t}' in query '${n}'`)}return e}const Si=function(n,e){const t=hh(n),s=t.namespace;t.domain==="firebase.com"&&he(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&he("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Sl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ir(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new R(t.pathString)}},hh=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(a=n.substring(0,d-1),n=n.substring(d+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=ch(n.substring(u,h)));const f=dh(n.substring(Math.min(n.length,h)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(d+1),10)):d=e.length;const p=e.slice(0,d);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+F(this.snapshot.exportVal())}}class fh{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:fr(this._path)}get ref(){return new fe(this._repo,this._path)}get _queryIdentifier(){const e=ai(this._queryParams),t=$n(e);return t==="{}"?"default":t}get _queryObject(){return ai(this._queryParams)}isEqual(e){if(e=Ve(e),!(e instanceof bs))return!1;const t=this._repo===e._repo,s=Qn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rc(this._path)}}class fe extends bs{constructor(e,t){super(e,t,new Zn,!1)}get parent(){const e=mr(this._path);return e===null?null:new fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new R(e),s=Ln(this.ref,e);return new pt(this._node.getChild(t),s,L)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new pt(i,Ln(this.ref,s),L)))}hasChild(e){const t=new R(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cs(n,e){return n=Ve(n),n._checkNotDeleted("ref"),e!==void 0?Ln(n._root,e):n._root}function Ln(n,e){return n=Ve(n),C(n._path)===null?Ud("child","path",e):Kr("child","path",e),new fe(n._repo,W(n._path,e))}function oo(n,e){n=Ve(n),Hd("set",n._path),Vd("set",e,n._path);const t=new Yt;return th(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ph(n){n=Ve(n);const e=new ro(()=>{}),t=new on(e);return eh(n._repo,n,t).then(s=>new pt(s,new fe(n._repo,n._path),n._queryParams.getIndex()))}class on{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new uh("value",this,new pt(e.snapshotNode,new fe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new fh(this,e,t):null}matches(e){return e instanceof on?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mh(n,e,t,s,i){const r=new ro(t,void 0),o=new on(r);return sh(n._repo,n,o),()=>ih(n._repo,n,o)}function gh(n,e,t,s){return mh(n,"value",e)}md(fe);bd(fe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="FIREBASE_DATABASE_EMULATOR_HOST",Fn={};let yh=!1;function vh(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=ji(r);n.repoInfo_=new ir(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function bh(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||he("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Si(r,i),a=o.repoInfo,l;typeof process<"u"&&Us&&(l=Us[_h]),l?(r=`http://${l}?ns=${a.namespace}`,o=Si(r,i),a=o.repoInfo):o.repoInfo.secure;const d=new Pl(n.name,n.options,e);$d("Invalid Firebase Database URL",o),x(o.path)||he("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Sh(a,n,d,new Dl(n,t));return new wh(u,n)}function Ch(n,e){const t=Fn[e];(!t||t[n.key]!==n)&&he(`Database ${e}(${n.repoInfo_}) has already been deleted.`),rh(n),delete t[n.key]}function Sh(n,e,t,s){let i=Fn[e.name];i||(i={},Fn[e.name]=i);let r=i[n.toURLString()];return r&&he("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Kd(n,yh,t,s),i[n.toURLString()]=r,r}class wh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fe(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ch(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&he("Cannot call "+e+" on a deleted database.")}}function xh(n=rl(),e){const t=el(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Uo("database");s&&Eh(t,...s)}return t}function Eh(n,e,t,s={}){n=Ve(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&At(s,r.repoInfo_.emulatorOptions))return;he("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&he('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Tt(Tt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Ho(s.mockUserToken,n.app.options.projectId);o=new Tt(a)}ji(e)&&sa(e),vh(r,i,s,o)}/**
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
 */function Ih(n){gl(il),Pt(new rt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bh(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Oe(Hs,$s,n),Oe(Hs,$s,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ce.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ce.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ih();var Th="firebase",Nh="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(Th,Nh,"app");const Rh={apiKey:"AIzaSyABiFO7TWD7o-V_wpVenOMOf52ovKYPKms",authDomain:"concursos-20cce.firebaseapp.com",databaseURL:"https://concursos-20cce-default-rtdb.firebaseio.com",projectId:"concursos-20cce",storageBucket:"concursos-20cce.firebasestorage.app",messagingSenderId:"830415520406",appId:"1:830415520406:web:06f25ae36a70cfd84738b7",measurementId:"G-BF6WV175XG"},kh=zi(Rh),Ss=xh(kh),ao="english_immersion_os/user_progress";let Wn=!1;const qt=async()=>{if(!Wn)try{const n={updatedAt:Date.now(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state"),english_journal_state:localStorage.getItem("english_journal_state"),english_saturday_tests:localStorage.getItem("english_saturday_tests")},e=Cs(Ss,ao);return await oo(e,n),!0}catch(n){return console.warn("Firebase sync upload note:",n),!1}},lo=async()=>{const n=Date.now();try{const e=Cs(Ss,"english_immersion_os/connection_test"),t={pingTimestamp:n,clientDevice:navigator.userAgent.includes("Mobile")?"Mobile":"Desktop",testStatus:"ACTIVE"};await oo(e,t);const i=(await ph(e)).val(),r=Date.now()-n;return{success:!!(i&&i.pingTimestamp===n),latencyMs:r,timestamp:new Date().toLocaleTimeString(),dbUrl:"https://concursos-20cce-default-rtdb.firebaseio.com",path:"english_immersion_os/user_progress"}}catch(e){return{success:!1,error:e.message||"Erro ao conectar com Firebase Realtime Database",latencyMs:0,timestamp:new Date().toLocaleTimeString()}}},Ah=n=>{try{const e=Cs(Ss,ao);return gh(e,s=>{const i=s.val();if(!i||!i.updatedAt)return;Wn=!0;let r=!1;["english_immersion_progress","english_game_stats","english_daily_vocab_goal","english_vocab_srs_state","english_journal_state","english_saturday_tests"].forEach(a=>{i[a]&&i[a]!==localStorage.getItem(a)&&(localStorage.setItem(a,i[a]),r=!0)}),r&&n&&n(i),setTimeout(()=>{Wn=!1},300)})}catch(e){return console.warn("Firebase realtime subscription error:",e),()=>{}}};function Dh({progressData:n,setTab:e}){const{currentDay:t,completedDays:s,totalHours:i,streak:r}=n,[o,a]=w.useState(!1),[l,d]=w.useState(null),[u,h]=w.useState(!1);w.useEffect(()=>{f()},[]);const f=async()=>{h(!0);const E=await lo();d(E),h(!1)},p=(()=>{try{const E=JSON.parse(localStorage.getItem("english_game_stats")||"{}"),M=JSON.parse(localStorage.getItem("english_daily_vocab_goal")||"{}"),G=JSON.parse(localStorage.getItem("english_vocab_srs_state")||"{}"),k=Object.values(G),_=k.filter(U=>U.stage>=3||U.mastered).length,I=k.filter(U=>U.stage===1||U.stage===2).length,j=k.filter(U=>U.soundGap).length;return{xp:E.xp||0,level:E.level||1,bestStreak:E.bestStreak||0,todayCount:M.count||0,todayTarget:M.target||100,masteredCount:_,reviewingCount:I,soundGapCount:j,totalTracked:Object.keys(G).length}}catch{return{xp:0,level:1,bestStreak:0,todayCount:0,todayTarget:100,masteredCount:0,reviewingCount:0,soundGapCount:0,totalTracked:0}}})(),g=Math.min(100,Math.round(p.todayCount/p.todayTarget*100)),b=()=>{const E={version:"1.0",exportDate:new Date().toISOString(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state"),english_journal_state:localStorage.getItem("english_journal_state"),english_saturday_tests:localStorage.getItem("english_saturday_tests")},M=new Blob([JSON.stringify(E,null,2)],{type:"application/json"}),G=URL.createObjectURL(M),k=document.createElement("a");k.href=G,k.download=`english_immersion_backup_${new Date().toISOString().slice(0,10)}.json`,k.click(),URL.revokeObjectURL(G)};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"1000px",margin:"0 auto"},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)",border:"1px solid var(--accent-amber)",borderRadius:"var(--radius-xl)",padding:"1.75rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.25rem"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",flexWrap:"wrap"},children:[c.jsxs("span",{className:"badge badge-amber",children:[c.jsx(zn,{size:14})," Imersão Acelerada (180 Dias)"]}),c.jsxs("span",{className:"badge badge-emerald",children:[c.jsx(vn,{size:14})," Firebase Realtime Database"]})]}),c.jsx("h1",{style:{fontSize:"1.7rem",fontWeight:800,marginBottom:"0.4rem",color:"#ffffff"},children:"Seu Painel de Imersão & Fluência"}),c.jsxs("p",{style:{color:"var(--text-secondary)",maxWidth:"650px",fontSize:"0.92rem",lineHeight:1.5},children:["Sincronizado automaticamente em tempo real via ",c.jsx("strong",{children:"Firebase WebSocket"})," entre seu Computador e Celular!"]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",width:"100%",maxWidth:"380px"},children:[c.jsxs("button",{className:"btn btn-emerald",onClick:()=>e("game"),style:{flex:1,padding:"0.75rem 1rem",fontSize:"0.9rem"},children:[c.jsx(Et,{size:18})," Jogar Game"]}),c.jsxs("button",{className:"btn btn-primary",onClick:()=>e("ai"),style:{flex:1,padding:"0.75rem 1rem",fontSize:"0.9rem"},children:[c.jsx(It,{size:18})," Tutor IA por Voz"]})]})]}),c.jsxs("div",{className:"grid-cards",children:[c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"VOCABULÁRIO HOJE"}),c.jsx(xi,{size:20,color:"var(--accent-amber)"})]}),c.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-amber)",marginBottom:"0.5rem"},children:[p.todayCount," ",c.jsxs("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:["/ ",p.todayTarget," palavras"]})]}),c.jsx("div",{className:"progress-bar-bg",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${g}%`}})}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.5rem",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[c.jsxs("span",{children:[g,"% da Meta de Hoje"]}),c.jsxs("span",{children:["Faltam ",Math.max(0,p.todayTarget-p.todayCount)," palavras"]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"BANCO DE RETENÇÃO (SRS)"}),c.jsx(go,{size:20,color:"var(--accent-emerald)"})]}),c.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-emerald)",marginBottom:"0.5rem"},children:[p.masteredCount," ",c.jsx("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:"dominadas"})]}),c.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["🟨 ",c.jsx("strong",{children:p.reviewingCount})," em revisão • 👂 ",c.jsx("strong",{children:p.soundGapCount})," foco em som"]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"NÍVEL & COMBO"}),c.jsx(Bn,{size:20,color:"var(--accent-amber)"})]}),c.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-blue)",marginBottom:"0.5rem"},children:["Nível ",p.level," ",c.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-amber)",fontWeight:700},children:["(",p.xp," XP)"]})]}),c.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["Sequência: ",c.jsxs("strong",{children:[r," dias"]})," • Recorde: ",c.jsxs("strong",{children:[p.bestStreak,"x combo 🔥"]})]})]})]}),c.jsxs("div",{className:"card",style:{borderColor:l!=null&&l.success?"rgba(16, 185, 129, 0.4)":"rgba(56, 189, 248, 0.3)",background:"linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.06) 100%)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem",flexWrap:"wrap"},children:[c.jsx(vn,{size:18,color:l!=null&&l.success?"var(--accent-emerald)":"var(--accent-blue)"}),c.jsx("span",{className:`badge ${l!=null&&l.success?"badge-emerald":"badge-blue"}`,children:l!=null&&l.success?"🟢 Realtime Database Ativo & Sincronizando":"🟡 Verificando Conexão..."}),(l==null?void 0:l.latencyMs)&&c.jsxs("span",{className:"badge badge-amber",children:["⚡ Latência: ",l.latencyMs," ms"]})]}),c.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#ffffff"},children:"Auditoria de Banco de Dados Firebase Realtime"}),c.jsxs("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:"0.2rem",maxWidth:"680px",lineHeight:1.5},children:["URL do Banco: ",c.jsx("strong",{style:{color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:"https://concursos-20cce-default-rtdb.firebaseio.com"}),c.jsx("br",{}),"Caminho de Sincronização: ",c.jsx("code",{style:{color:"var(--accent-emerald)"},children:"english_immersion_os/user_progress"})]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center",width:"100%",maxWidth:"420px"},children:[c.jsxs("button",{className:"btn btn-emerald",onClick:f,disabled:u,style:{flex:1,fontSize:"0.88rem"},children:[u?c.jsx(_o,{size:16,className:"spin"}):c.jsx(Ei,{size:16}),"Testar Conexão Realtime Agora"]}),c.jsxs("button",{className:"btn btn-secondary",onClick:b,style:{fontSize:"0.85rem"},children:[c.jsx(yo,{size:15})," Backup (.json)"]})]})]}),l&&c.jsxs("div",{style:{marginTop:"1.25rem",padding:"1rem 1.25rem",background:l.success?"rgba(16, 185, 129, 0.1)":"rgba(244, 63, 94, 0.1)",border:l.success?"1px solid var(--accent-emerald)":"1px solid var(--accent-rose)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.75rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[c.jsx(Ii,{size:20,color:l.success?"var(--accent-emerald)":"var(--accent-rose)"}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"0.9rem",fontWeight:800,color:l.success?"var(--accent-emerald)":"var(--accent-rose)"},children:l.success?"✅ Teste de Leitura & Escrita Realtime Concluído com Sucesso!":"❌ Falha no teste de conexão"}),c.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:["Resposta em ",c.jsxs("strong",{children:[l.latencyMs,"ms"]})," às ",l.timestamp,". Dados de progresso salvos continuamente via WebSocket!"]})]})]}),c.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:c.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[c.jsx(vo,{size:13})," PC ↔ ",c.jsx(bo,{size:13})," Celular"]})})]}),o&&c.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--accent-emerald-glow)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-sm)",color:"var(--accent-emerald)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx(Co,{size:16})," Backup restaurado e sincronizado com o Firebase com sucesso!"]})]})]})}const Ph=()=>{const n=window.speechSynthesis.getVoices();return n.length===0?null:n.find(e=>e.lang.startsWith("en")&&(e.name.toLowerCase().includes("natural")||e.name.toLowerCase().includes("online")||e.name.toLowerCase().includes("google us english")||e.name.toLowerCase().includes("samantha")||e.name.toLowerCase().includes("jenny")||e.name.toLowerCase().includes("guy")||e.name.toLowerCase().includes("aria")))||n.find(e=>e.lang==="en-US")||n.find(e=>e.lang.startsWith("en"))},pe=(n,e=.9)=>{if(!n)return;const t=n.trim();if("speechSynthesis"in window&&window.speechSynthesis.cancel(),t.length<200)try{const s=`https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(t)}`,i=new Audio(s);i.playbackRate=e||.9;const r=i.play();r!==void 0&&r.then(()=>{}).catch(o=>{console.log("Fallback to WebSpeech SpeechSynthesis:",o),wi(t,e)});return}catch(s){console.warn("Neural audio stream fallback:",s)}wi(t,e)},wi=(n,e)=>{if(!("speechSynthesis"in window))return;const t=new SpeechSynthesisUtterance(n);t.lang="en-US",t.rate=e,t.pitch=1;const s=()=>{const i=Ph();i&&(t.voice=i),window.speechSynthesis.speak(t)};window.speechSynthesis.getVoices().length>0?s():window.speechSynthesis.onvoiceschanged=()=>{s(),window.speechSynthesis.onvoiceschanged=null}},Oh={hello:{pt:"olá",pos:"saudação"},ruan:{pt:"Ruan (seu nome)",pos:"nome próprio"},i:{pt:"eu",pos:"pronome"},am:{pt:"sou / estou",pos:"verbo to be"},your:{pt:"seu / sua",pos:"possessivo"},live:{pt:"ao vivo",pos:"adjetivo"},ai:{pt:"IA (Inteligência Artificial)",pos:"substantivo"},coach:{pt:"tutor / treinador",pos:"substantivo"},what:{pt:"qual / o que",pos:"pronome de pergunta"},technology:{pt:"tecnologia",pos:"substantivo"},do:{pt:"verbo auxiliar de pergunta",pos:"auxiliar"},you:{pt:"você",pos:"pronome"},like:{pt:"gostar",pos:"verbo"},software:{pt:"programa / software",pos:"substantivo"},development:{pt:"desenvolvimento",pos:"substantivo"},and:{pt:"e",pos:"conjunção"},english:{pt:"inglês",pos:"substantivo"},go:{pt:"ir / caminhar",pos:"verbo"},hand:{pt:"mão",pos:"substantivo"},in:{pt:"em / dentro",pos:"preposição"},favorite:{pt:"favorito / preferido",pos:"adjetivo"},awesome:{pt:"incrível / sensacional",pos:"adjetivo"},computer:{pt:"computador",pos:"substantivo"},science:{pt:"ciência",pos:"substantivo"},engineering:{pt:"engenharia",pos:"substantivo"},are:{pt:"são / estão",pos:"verbo to be"},great:{pt:"ótimo / grande",pos:"adjetivo"},fields:{pt:"áreas / campos de atuação",pos:"substantivo"},write:{pt:"escrever",pos:"verbo"},code:{pt:"código / programar",pos:"substantivo/verbo"},every:{pt:"todo / cada",pos:"adjetivo"},day:{pt:"dia",pos:"substantivo"},learning:{pt:"aprendendo",pos:"verbo gerúndio"},step:{pt:"passo",pos:"substantivo"},by:{pt:"por / através de",pos:"preposição"},is:{pt:"é / está",pos:"verbo to be"},main:{pt:"principal",pos:"adjetivo"},goal:{pt:"meta / objetivo",pos:"substantivo"}};function Mh(){const[n,e]=w.useState([{id:1,sender:"ai",text:"Hello Ruan! I am your Live AI Coach. What technology do you like?",ptTranslation:"Olá Ruan! Eu sou seu Tutor de IA Ao Vivo. De qual tecnologia você gosta?",suggestions:[{en:"I like Python and web development.",pt:"Eu gosto de Python e desenvolvimento web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}]}]),[t,s]=w.useState(""),[i,r]=w.useState(!1),[o,a]=w.useState(!1),[l,d]=w.useState(!1),[u,h]=w.useState(null),f=w.useRef(null),p=w.useRef(null);w.useEffect(()=>{if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){d(!0);const _=window.SpeechRecognition||window.webkitSpeechRecognition;p.current=new _,p.current.continuous=!1,p.current.interimResults=!1,p.current.lang="en-US",p.current.onresult=I=>{const j=I.results[0][0].transcript;s(j),E(j)},p.current.onend=()=>{r(!1),o&&setTimeout(()=>{var I;try{(I=p.current)==null||I.start(),r(!0)}catch(j){console.log("Recognition restart note:",j)}},1500)},p.current.onerror=()=>{r(!1)}}},[o]),w.useEffect(()=>{var _;(_=f.current)==null||_.scrollIntoView({behavior:"smooth"})},[n]);const g=()=>{var _;o?(a(!1),r(!1),(_=p.current)==null||_.stop()):(a(!0),r(!0),pe("Hello Ruan! Live call active. Speak to me naturally in English!",.88),setTimeout(()=>{var I;try{(I=p.current)==null||I.start()}catch{}},3500))},b=()=>{var _,I;l&&(i?((_=p.current)==null||_.stop(),r(!1)):(r(!0),(I=p.current)==null||I.start()))},E=(_=t)=>{if(!_.trim())return;const I={id:Date.now(),sender:"user",text:_};e(j=>[...j,I]),s(""),setTimeout(()=>{M(_)},600)},M=_=>{const I=_.toLowerCase();let j="Software development and English go hand in hand! What is your favorite technology?",U="Desenvolvimento de software e inglês andam de mãos dadas! Qual é a sua tecnologia favorita?",Q=[{en:"I like Python and web development.",pt:"Eu gosto de Python e dev web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}];I.includes("python")||I.includes("code")||I.includes("computer")||I.includes("javascript")?(j="Awesome! Computer science and software engineering are great fields. Do you write code every day?",U="Incrível! Ciência da computação e engenharia de software são ótimas áreas. Você escreve código todos os dias?",Q=[{en:"Yes, I code every day.",pt:"Sim, eu programo todos os dias."},{en:"I am building a new project.",pt:"Estou construindo um projeto novo."},{en:"I want to work in tech.",pt:"Quero trabalhar na área de tecnologia."}]):(I.includes("english")||I.includes("study")||I.includes("hello")||I.includes("hi"))&&(j="Learning English step by step is awesome! What is your main goal?",U="Aprender inglês passo a passo é incrível! Qual é o seu principal objetivo?",Q=[{en:"My goal is a tech job.",pt:"Meu objetivo é um emprego em tecnologia."},{en:"I want to speak fluently.",pt:"Quero falar com fluência."},{en:"I study 4 hours a day.",pt:"Estudo 4 horas por dia."}]);const q={id:Date.now()+1,sender:"ai",text:j,ptTranslation:U,suggestions:Q};e(N=>[...N,q]),pe(j,.88)},G=_=>{s(_),E(_)},k=_=>_.split(" ").map((j,U)=>{const Q=j.toLowerCase().replace(/[^a-z]/g,""),q=Oh[Q];return c.jsxs("span",{onClick:()=>{q&&(h({word:Q,info:q}),pe(Q,.82))},onMouseEnter:()=>{q&&h({word:Q,info:q})},style:{cursor:q?"pointer":"default",padding:"0 2px",borderRadius:"4px",textDecoration:q?"underline":"none",textDecorationColor:"var(--accent-blue)",textUnderlineOffset:"3px",color:"var(--text-primary)",transition:"all 0.15s ease"},title:q?`Clique ou passe o mouse: "${Q}" = ${q.pt}`:void 0,children:[j," "]},U)});return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"1000px",margin:"0 auto"},children:[c.jsxs("div",{style:{background:o?"linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(2, 132, 199, 0.25) 100%)":"linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(192, 132, 252, 0.18) 100%)",border:o?"2px solid var(--accent-emerald)":"1px solid var(--accent-blue)",borderRadius:"var(--radius-xl)",padding:"1.5rem",display:"flex",justify:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem"},children:c.jsxs("span",{className:`badge ${o?"badge-emerald":"badge-blue"}`,children:[c.jsx(ks,{size:14})," ",o?"📞 Chamada de Voz Ao Vivo Ativa (Full Duplex)":"🤖 Tutor de IA por Voz & Texto"]})}),c.jsx("h2",{style:{fontSize:"1.6rem",fontWeight:800},children:"Tutor de Inglês por Voz Ao Vivo"}),c.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:o?"A IA está te escutando continuamente pelo microfone! Fale em inglês naturalmente.":"Clique em 'Iniciar Chamada de Voz ao Vivo' para conversar continuamente sem mãos!"})]}),c.jsx("button",{className:"btn btn-emerald",onClick:g,style:{padding:"0.8rem 1.6rem",fontSize:"1rem",boxShadow:o?"0 0 20px var(--accent-emerald-glow)":"none"},children:o?c.jsxs(c.Fragment,{children:[c.jsx(So,{size:18})," Encerrar Chamada"]}):c.jsxs(c.Fragment,{children:[c.jsx(ks,{size:18})," Iniciar Chamada de Voz ao Vivo"]})})]}),u&&c.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--accent-blue)",padding:"0.85rem 1.25rem",borderRadius:"var(--radius-md)",display:"flex",justify:"space-between",alignItems:"center",boxShadow:"var(--shadow-md)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsx("span",{className:"badge badge-blue",children:"🔍 Dicionário Instantâneo"}),c.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',u.word,'"']}),c.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-emerald)",fontWeight:700},children:["= ",u.info.pt]}),c.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["(",u.info.pos,")"]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[c.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>pe(u.word,.82),children:[c.jsx(Nt,{size:14})," Ouvir Pronúncia"]}),c.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>h(null),children:"✕"})]})]}),c.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-xl)",padding:"1.5rem",minHeight:"400px",maxHeight:"600px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[n.map(_=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:_.sender==="user"?"flex-end":"flex-start"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"0.25rem",fontWeight:700},children:_.sender==="user"?"Você":"🤖 Tutor de IA"}),c.jsxs("div",{style:{maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:"var(--radius-lg)",background:_.sender==="user"?"linear-gradient(135deg, #0284c7 0%, #0369a1 100%)":"rgba(255, 255, 255, 0.06)",border:_.sender==="user"?"none":"1px solid var(--border-color)",color:"#ffffff",fontSize:"0.95rem",lineHeight:1.6},children:[c.jsxs("div",{style:{fontWeight:600},children:[_.sender==="ai"?k(_.text):_.text,_.sender==="ai"&&c.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"0.2rem",marginLeft:"0.4rem"},onClick:()=>pe(_.text,.88),children:c.jsx(Nt,{size:16,color:"var(--accent-blue)"})})]}),_.sender==="ai"&&_.ptTranslation&&c.jsxs("div",{style:{marginTop:"0.5rem",paddingTop:"0.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"0.85rem",color:"var(--accent-blue)"},children:["💬 ",c.jsx("strong",{children:"Tradução em PT:"}),' "',_.ptTranslation,'"']})]}),_.sender==="ai"&&_.suggestions&&c.jsxs("div",{style:{marginTop:"0.75rem",width:"100%",maxWidth:"85%"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700,display:"block",marginBottom:"0.4rem"},children:"💡 Dica do que responder (Clique para usar):"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:_.suggestions.map((I,j)=>c.jsxs("button",{onClick:()=>G(I.en),className:"btn btn-secondary",style:{justifyContent:"flex-start",textAlign:"left",fontSize:"0.82rem",padding:"0.5rem 0.8rem",borderColor:"var(--accent-emerald-glow)",background:"rgba(16, 185, 129, 0.06)"},children:[c.jsxs("span",{style:{color:"var(--accent-emerald)",fontWeight:800},children:['"',I.en,'"']}),c.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:"0.4rem",fontSize:"0.75rem"},children:["(",I.pt,")"]})]},j))})]})]},_.id)),c.jsx("div",{ref:f})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[c.jsx("button",{className:`btn ${i?"btn-emerald":"btn-secondary"}`,onClick:b,style:{padding:"0.8rem",borderRadius:"50%",width:"48px",height:"48px",flexShrink:0},title:i?"Escutando sua voz...":"Falar pelo Microfone",children:c.jsx(wo,{size:20,color:i?"#fff":"var(--accent-blue)"})}),c.jsx("input",{type:"text",className:"input-field",placeholder:"Digite, use a chamada ao vivo ou escolha uma sugestão acima...",value:t,onChange:_=>s(_.target.value),onKeyDown:_=>_.key==="Enter"&&E(),style:{flex:1,padding:"0.85rem 1.25rem",fontSize:"0.95rem"}}),c.jsxs("button",{className:"btn btn-primary",onClick:()=>E(),style:{padding:"0.85rem 1.5rem"},children:[c.jsx(xo,{size:18})," Enviar"]})]})]})}const yn=(n=50)=>{try{const e=document.createElement("canvas");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.pointerEvents="none",e.style.zIndex="999999",document.body.appendChild(e);const t=e.getContext("2d"),s=window.innerWidth,i=window.innerHeight;e.width=s,e.height=i;const r=["#38bdf8","#10b981","#fbbf24","#c084fc","#f43f5e"],o=[];for(let u=0;u<n;u++)o.push({x:s/2,y:i/2-50,vx:(Math.random()-.5)*14,vy:(Math.random()-.7)*16,size:Math.random()*8+5,color:r[Math.floor(Math.random()*r.length)],rotation:Math.random()*360,rSpeed:(Math.random()-.5)*10,opacity:1});let a=Date.now();const l=2200,d=()=>{const u=Date.now()-a;if(u>l){e.parentNode&&e.parentNode.removeChild(e);return}t.clearRect(0,0,s,i),o.forEach(h=>{h.x+=h.vx,h.y+=h.vy,h.vy+=.38,h.rotation+=h.rSpeed,h.opacity=Math.max(0,1-u/l),t.save(),t.translate(h.x,h.y),t.rotate(h.rotation*Math.PI/180),t.globalAlpha=h.opacity,t.fillStyle=h.color,t.fillRect(-h.size/2,-h.size/2,h.size,h.size),t.restore()}),requestAnimationFrame(d)};requestAnimationFrame(d)}catch(e){console.warn("Confetti effect note:",e)}},Xe=n=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;if(n==="correct")[523.25,659.25,783.99].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(i,t.currentTime+r*.08),a.gain.setValueAtTime(.15,t.currentTime+r*.08),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.08+.35),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.08),o.stop(t.currentTime+r*.08+.4)});else if(n==="wrong"){const s=t.createOscillator(),i=t.createGain();s.type="triangle",s.frequency.setValueAtTime(220,t.currentTime),s.frequency.setValueAtTime(175,t.currentTime+.1),i.gain.setValueAtTime(.18,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.3),s.connect(i),i.connect(t.destination),s.start(t.currentTime),s.stop(t.currentTime+.35)}else n==="victory"&&[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="triangle",o.frequency.setValueAtTime(i,t.currentTime+r*.1),a.gain.setValueAtTime(.2,t.currentTime+r*.1),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.1+.5),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.1),o.stop(t.currentTime+r*.1+.55)})}catch(e){console.warn("Sound effect note:",e)}};function jh({initialMode:n="listening"}){const[e,t]=w.useState(n),[s,i]=w.useState(null),[r,o]=w.useState(!1),[a,l]=w.useState(!1),[d,u]=w.useState(!1),[h,f]=w.useState(!1),[p,g]=w.useState(.88),[b,E]=w.useState(()=>{const y=localStorage.getItem("english_vocab_srs_state");return y?JSON.parse(y):{}}),[M,G]=w.useState(()=>{const y=localStorage.getItem("english_daily_vocab_goal"),A=new Date().toISOString().split("T")[0];if(y){const H=JSON.parse(y);if(H.date===A)return H}return{date:A,masteredIds:[],count:0,target:100}}),[k,_]=w.useState(()=>{const y=localStorage.getItem("english_game_stats");return y?JSON.parse(y):{xp:0,level:1,streak:0,bestStreak:0,totalAnswered:0,totalCorrect:0,lives:3}}),I=(y,A)=>{let H=qe.essentialWords;y==="tech"&&(H=qe.techWords),y==="sentences"&&(H=qe.sentences),y==="blitz"&&(H=[...qe.essentialWords,...qe.techWords]);const Ce=H.filter(ee=>{const Z=A[ee.id];return!Z||Z.stage<3}),re=H.filter(ee=>{const Z=A[ee.id];return Z&&Z.stage>=3}),Ae=[...Ce,...re].map(ee=>({...ee,shuffledOptions:[...ee.options].sort(()=>Math.random()-.5)}));return Ae.length>0?Ae:H},[j,U]=w.useState(()=>I(e,b)),[Q,q]=w.useState(0),N=j[Q]||j[0],ws=N?b[N.id]||{stage:0,soundGap:!1}:{stage:0,soundGap:!1};w.useEffect(()=>{localStorage.setItem("english_vocab_srs_state",JSON.stringify(b))},[b]),w.useEffect(()=>{localStorage.setItem("english_daily_vocab_goal",JSON.stringify(M))},[M]),w.useEffect(()=>{localStorage.setItem("english_game_stats",JSON.stringify(k))},[k]),w.useEffect(()=>{if(N){const y=setTimeout(()=>{pe(N.en,p)},200);return()=>clearTimeout(y)}},[Q,e]);const St=y=>{t(y);const A=I(y,b);U(A),q(0),i(null),o(!1),l(!1),u(y!=="listening"),f(!1)},xs=(y=p)=>{N&&pe(N.en,y)},co=()=>{if(u(!0),f(!0),N){const y=N.id;E(A=>({...A,[y]:{...A[y]||{stage:0,streak:0},soundGap:!0}}))}},ho=y=>{if(r||!N)return;i(y),o(!0);const A=y===N.pt;l(A);const H=N.id,Ce=b[H]||{stage:0,streak:0};if(A){Xe("correct");const re=Math.min(h?2:3,Ce.stage+1),Ae=Ce.streak+1,ee={...b,[H]:{stage:re,streak:Ae,lastReviewed:Date.now(),mastered:re>=3,soundGap:h}};if(E(ee),!M.masteredIds.includes(H)){const Se=M.count+1;G(Rs=>({...Rs,masteredIds:[...Rs.masteredIds,H],count:Se})),Se===M.target&&(Xe("victory"),yn(80))}const Z=k.streak+1;Z>0&&Z%5===0&&yn(40);const Ge=10+(Z>=3?5:0),Ts=k.xp+Ge,Ns=Math.floor(Ts/100)+1;Ns>k.level&&(Xe("victory"),yn(60)),_(Se=>({...Se,xp:Ts,level:Ns,streak:Z,bestStreak:Math.max(Se.bestStreak,Z),totalAnswered:Se.totalAnswered+1,totalCorrect:Se.totalCorrect+1}))}else{Xe("wrong");const re={...b,[H]:{stage:0,streak:0,lastReviewed:Date.now(),mastered:!1,soundGap:!0}};E(re);const Ae={...N,shuffledOptions:[...N.options].sort(()=>Math.random()-.5)},ee=[...j],Z=Math.min(ee.length,Q+3);ee.splice(Z,0,Ae),U(ee),_(Ge=>({...Ge,streak:0,lives:Math.max(0,Ge.lives-1),totalAnswered:Ge.totalAnswered+1}))}setTimeout(()=>{qt()},100)},uo=()=>{if(!N)return;const y=N.id;E(A=>({...A,[y]:{stage:3,streak:3,lastReviewed:Date.now(),mastered:!0,soundGap:!1}})),M.masteredIds.includes(y)||G(A=>({...A,masteredIds:[...A.masteredIds,y],count:A.count+1})),setTimeout(()=>{qt()},100),Es()},Es=()=>{if(Q+1<j.length)q(y=>y+1),i(null),o(!1),l(!1),u(e!=="listening"),f(!1);else{const y=I(e,b);U(y),q(0),i(null),o(!1),l(!1),u(e!=="listening"),f(!1),Xe("victory")}},fo=(y,A)=>A?c.jsx("span",{className:"badge badge-amber",children:"👂 Treinar Pronúncia/Som"}):y>=3?c.jsx("span",{className:"badge badge-emerald",children:"🟩 Dominada"}):y===2?c.jsx("span",{className:"badge badge-blue",children:"🟨 Em Revisão (2/3)"}):y===1?c.jsx("span",{className:"badge badge-amber",children:"🟧 Praticando (1/3)"}):c.jsx("span",{className:"badge",style:{background:"rgba(255,255,255,0.08)",color:"var(--text-muted)"},children:"🟥 Palavra Nova"}),Is=Math.min(100,Math.round(M.count/M.target*100));return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"900px",margin:"0 auto"},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(16, 185, 129, 0.18) 100%)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-xl)",padding:"1.25rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.75rem",boxShadow:"var(--shadow-sm)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx(xi,{size:20,color:"var(--accent-amber)"}),c.jsx("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#fff"},children:"🎯 Meta do Dia: 100 Palavras"})]}),c.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-emerald)"},children:[M.count," / ",M.target," Palavras Aprendidas Hoje (",Is,"%)"]})]}),c.jsx("div",{className:"progress-bar-bg",style:{height:"10px"},children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${Is}%`}})})]}),c.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsxs("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:800,fontSize:"1rem"},children:["Lv.",k.level]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:800},children:"PONTUAÇÃO"}),c.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"var(--accent-amber)"},children:["⚡ ",k.xp," XP"]})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[c.jsx(Bn,{size:20,color:k.streak>0?"var(--accent-amber)":"var(--text-muted)"}),c.jsxs("span",{style:{fontSize:"1rem",fontWeight:800,color:k.streak>0?"var(--accent-amber)":"var(--text-muted)"},children:[k.streak,"x Combo"]})]}),c.jsx("div",{style:{display:"flex",gap:"0.2rem",alignItems:"center"},children:[1,2,3].map(y=>c.jsx(Eo,{size:20,fill:y<=k.lives?"var(--accent-rose)":"none",color:y<=k.lives?"var(--accent-rose)":"var(--text-muted)"},y))})]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",overflowX:"auto",paddingBottom:"0.25rem"},children:[c.jsxs("button",{className:`btn ${e==="listening"?"btn-emerald":"btn-secondary"}`,onClick:()=>St("listening"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[c.jsx(Io,{size:15})," 🎧 1. Desafio Auditivo"]}),c.jsxs("button",{className:`btn ${e==="blitz"?"btn-emerald":"btn-secondary"}`,onClick:()=>St("blitz"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[c.jsx(bn,{size:15})," ⚡ 2. Flash Blitz"]}),c.jsxs("button",{className:`btn ${e==="sentences"?"btn-emerald":"btn-secondary"}`,onClick:()=>St("sentences"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[c.jsx(zn,{size:15})," 🧩 3. Frases"]}),c.jsxs("button",{className:`btn ${e==="tech"?"btn-emerald":"btn-secondary"}`,onClick:()=>St("tech"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[c.jsx(To,{size:15})," 💻 4. TI & Código"]})]}),N&&c.jsxs("div",{className:"card",style:{borderColor:"var(--accent-emerald)",padding:"1.75rem",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[fo(ws.stage,ws.soundGap),c.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["• ",N.category||"Vocabulário"]})]}),!r&&c.jsxs("button",{onClick:uo,style:{background:"rgba(255,255,255,0.06)",border:"1px solid var(--border-color)",color:"var(--text-secondary)",padding:"0.3rem 0.65rem",borderRadius:"var(--radius-sm)",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.3rem"},title:"Pular e marcar como dominada",children:[c.jsx(No,{size:13,color:"var(--accent-amber)"})," Já sei essa palavra"]})]}),c.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.35)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1.75rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.15rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[c.jsxs("button",{className:"btn btn-primary",onClick:()=>xs(p),style:{padding:"0.9rem 1.8rem",fontSize:"1.05rem",borderRadius:"var(--radius-xl)",boxShadow:"0 0 25px rgba(2, 132, 199, 0.4)"},children:[c.jsx(Nt,{size:22})," Ouvir Pronúncia"]}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>xs(.68),style:{padding:"0.8rem 1.1rem",fontSize:"0.85rem",borderRadius:"var(--radius-xl)"},children:"🐢 0.68x Bem Lento"})]}),e==="listening"&&!d&&!r?c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",marginTop:"0.3rem"},children:[c.jsx("span",{style:{fontSize:"1.3rem",fontWeight:800,color:"var(--text-muted)",letterSpacing:"0.25em"},children:"🔊 • • • • • •"}),c.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:["(Identifique o significado ",c.jsx("strong",{children:"apenas escutando"}),"!)"]}),c.jsxs("button",{onClick:co,style:{background:"rgba(56, 189, 248, 0.1)",border:"1px solid rgba(56, 189, 248, 0.3)",color:"var(--accent-blue)",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",padding:"0.4rem 0.8rem",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",gap:"0.4rem",marginTop:"0.4rem"},children:[c.jsx(Ro,{size:14})," Espiar escrita & Pronúncia"]})]}):c.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",width:"100%"},children:[c.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',N.en,'"']}),c.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.12)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-md)",padding:"0.75rem 1.25rem",maxWidth:"550px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",gap:"0.3rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",flexWrap:"wrap"},children:[c.jsx("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase"},children:"🗣️ Como se fala:"}),c.jsxs("span",{style:{fontSize:"1.15rem",fontWeight:800,color:"var(--accent-emerald)",fontFamily:"var(--font-mono)"},children:['"',N.phoneticPt||N.en,'"']}),N.ipa&&c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:N.ipa})]}),N.soundTip&&c.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",marginTop:"0.15rem"},children:["💡 ",c.jsx("strong",{children:"Dica de Som:"})," ",N.soundTip]})]}),h&&c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--accent-amber)",fontWeight:700},children:"⚠️ Você precisou ver a escrita: o sistema agendou esta palavra para mais treinos auditivos!"})]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:800,display:"block",marginBottom:"0.75rem",textTransform:"uppercase"},children:"Qual é o significado correto em português?"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"},children:(N.shuffledOptions||N.options).map((y,A)=>{const H=s===y,Ce=y===N.pt;let re={padding:"1rem 1.15rem",fontSize:"0.92rem",textAlign:"left",justifyContent:"flex-start",borderRadius:"var(--radius-md)",transition:"all 0.15s ease",fontWeight:700};if(r){if(Ce)return c.jsxs("button",{className:"btn btn-emerald",style:{...re,boxShadow:"0 0 15px var(--accent-emerald-glow)"},children:[c.jsx(Ii,{size:18})," ",y," (Correto! 🎉)"]},A);if(H&&!a)return c.jsxs("button",{className:"btn btn-secondary",style:{...re,borderColor:"var(--accent-rose)",color:"var(--accent-rose)",background:"rgba(244, 63, 94, 0.15)"},children:[c.jsx(ko,{size:18})," ",y," (Incorreto)"]},A)}return c.jsxs("button",{onClick:()=>ho(y),disabled:r,className:"btn btn-secondary",style:{...re,border:"1px solid var(--border-color)",background:"var(--bg-card)"},children:[c.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",marginRight:"0.5rem"},children:String.fromCharCode(65+A)}),y]},A)})})]}),r&&c.jsxs("div",{style:{background:a?"var(--accent-emerald-glow)":"rgba(244, 63, 94, 0.12)",border:a?"1px solid var(--accent-emerald)":"1px solid var(--accent-rose)",borderRadius:"var(--radius-md)",padding:"1.15rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:a?"var(--accent-emerald)":"var(--accent-rose)"},children:a?"🎯 Resposta Correta! (+10 XP)":"❌ Você errou! (Palavra re-inserida na fila de reforço)"}),c.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:['"',N.en,'" = ',c.jsxs("strong",{children:['"',N.pt,'"']})]})]}),c.jsxs("button",{className:"btn btn-primary",onClick:Es,style:{padding:"0.7rem 1.6rem",fontSize:"0.95rem",fontWeight:800},children:["Próxima Palavra ",c.jsx(Ao,{size:16})]})]})]})]})}function Lh(){const[n,e]=w.useState("game"),[t,s]=w.useState(!1),[i,r]=w.useState(!1),[o,a]=w.useState(""),[l,d]=w.useState(()=>{const f=localStorage.getItem("english_immersion_progress");return f?JSON.parse(f):{currentDay:1,completedDays:0,totalHours:0,streak:1,todayTasks:{game_practice:!0,ai_speaking:!1}}});w.useEffect(()=>{qt(),s(!0);const f=Ah(p=>{if(p.english_immersion_progress)try{d(JSON.parse(p.english_immersion_progress))}catch{}s(!0)});return()=>{f&&f()}},[]),w.useEffect(()=>{localStorage.setItem("english_immersion_progress",JSON.stringify(l)),qt()},[l]);const u=f=>{d(p=>({...p,todayTasks:{...p.todayTasks,[f]:!p.todayTasks[f]}}))},h=async()=>{a("Testando conexão com Firebase Realtime Database...");const f=await lo();f.success?a(`✅ Conectado em tempo real! Latência: ${f.latencyMs}ms`):a(`❌ Erro de conexão: ${f.error}`)};return c.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[c.jsx("header",{className:"app-header",children:c.jsxs("div",{className:"header-container",children:[c.jsxs("div",{className:"logo-group",children:[c.jsx("div",{className:"logo-icon",children:c.jsx(zn,{size:20})}),c.jsxs("div",{children:[c.jsx("h1",{className:"brand-title",children:"English Immersion OS"}),c.jsx("span",{className:"brand-subtitle",children:"Firebase Realtime Cloud • PC ↔ Celular"})]})]}),c.jsxs("nav",{className:"nav-tabs desktop-nav-tabs",children:[c.jsxs("button",{className:`tab-btn ${n==="game"?"active":""}`,onClick:()=>e("game"),style:{color:n==="game"?"var(--accent-amber)":"var(--text-secondary)",background:n==="game"?"rgba(251, 191, 36, 0.15)":"transparent",border:n==="game"?"1px solid rgba(251, 191, 36, 0.3)":"none"},children:[c.jsx(Et,{size:16})," 🎮 1. Game de Escuta"]}),c.jsxs("button",{className:`tab-btn ${n==="ai"?"active":""}`,onClick:()=>e("ai"),children:[c.jsx(It,{size:16})," 🤖 2. Tutor IA (Voz)"]}),c.jsxs("button",{className:`tab-btn ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[c.jsx(As,{size:16})," 📊 3. Progresso"]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.75rem",color:t?"var(--accent-emerald)":"var(--text-muted)",background:"rgba(16, 185, 129, 0.12)",padding:"0.25rem 0.6rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(16, 185, 129, 0.3)"},title:"Conectado ao Firebase Realtime Database",children:[c.jsx(vn,{size:13,color:"var(--accent-emerald)"})," Nuvem Conectada"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},className:"mobile-streak-pill",children:[c.jsx(Bn,{size:16,color:"var(--accent-amber)"}),c.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-amber)"},children:[l.streak,"d"]})]})]})]})}),c.jsxs("main",{className:"main-content",children:[n==="game"&&c.jsx(jh,{}),n==="ai"&&c.jsx(Mh,{}),n==="dashboard"&&c.jsx(Dh,{progressData:l,toggleTask:u,setTab:e})]}),c.jsx("button",{className:"fab-button pulse-glow",onClick:()=>r(!0),title:"Menu Rápido de Ações",children:c.jsx(bn,{size:24})}),i&&c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(8px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:c.jsxs("div",{className:"card",style:{maxWidth:"420px",width:"100%",borderColor:"var(--accent-blue)",boxShadow:"0 20px 60px rgba(0,0,0,0.8)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx(bn,{size:20,color:"var(--accent-amber)"}),c.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,color:"#fff"},children:"Ações Rápidas"})]}),c.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem",width:"32px",height:"32px",minHeight:0},onClick:()=>r(!1),children:c.jsx(Do,{size:16})})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[c.jsxs("button",{className:"btn btn-emerald",onClick:h,style:{justifyContent:"flex-start"},children:[c.jsx(Ei,{size:18})," Testar Firebase Realtime Database"]}),c.jsxs("button",{className:"btn btn-primary",onClick:()=>{pe("Welcome to English Immersion OS! Daily practice leads to fluency.",.88),a("🔊 Pronúnciando frase de teste em áudio natural!")},style:{justifyContent:"flex-start"},children:[c.jsx(Nt,{size:18})," Testar Pronúncia de Áudio (TTS)"]}),c.jsxs("button",{className:"btn btn-secondary",onClick:()=>{e("game"),r(!1)},style:{justifyContent:"flex-start"},children:[c.jsx(Et,{size:18})," Ir para o Game de Vocabulário"]}),c.jsxs("button",{className:"btn btn-secondary",onClick:()=>{e("ai"),r(!1)},style:{justifyContent:"flex-start"},children:[c.jsx(It,{size:18})," Ir para Tutor de Voz (IA)"]})]}),o&&c.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(56, 189, 248, 0.12)",border:"1px solid var(--accent-blue)",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",color:"var(--accent-blue)"},children:o})]})}),c.jsxs("nav",{className:"mobile-bottom-nav",children:[c.jsxs("button",{className:`mobile-nav-item ${n==="game"?"active-game":""}`,onClick:()=>e("game"),children:[c.jsx(Et,{size:20,color:n==="game"?"var(--accent-amber)":"inherit"}),c.jsx("span",{children:"Game"})]}),c.jsxs("button",{className:`mobile-nav-item ${n==="ai"?"active-ai":""}`,onClick:()=>e("ai"),children:[c.jsx(It,{size:20,color:n==="ai"?"var(--accent-blue)":"inherit"}),c.jsx("span",{children:"Tutor IA"})]}),c.jsxs("button",{className:`mobile-nav-item ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[c.jsx(As,{size:20}),c.jsx("span",{children:"Progresso"})]})]}),c.jsx("footer",{style:{textAlign:"center",padding:"1.5rem",borderTop:"1px solid var(--border-color)",color:"var(--text-muted)",fontSize:"0.85rem"},children:"English Immersion OS — Sincronização em Nuvem em Tempo Real com Firebase Database."})]})}po.createRoot(document.getElementById("root")).render(c.jsx(mo.StrictMode,{children:c.jsx(Lh,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/english-immersion-os/sw.js",{scope:"/english-immersion-os/"}).catch(n=>{console.warn("Service worker registration failed:",n)})});
