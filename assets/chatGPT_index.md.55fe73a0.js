import{d as We,h as A,C as Ve,o as T,c as F,k as m,F as ae,D as Je,t as Q,a0 as Ke,a1 as Ge,H as me,w as ze,a as Qe,p as Ye,m as Ze,_ as et}from"./chunks/framework.3deaef37.js";import{m as ue}from"./chunks/index.2a594c1f.js";const b="4.10.0";class tt{constructor(e,t){this.response=e,this.controller=t,this.decoder=new nt}async*iterMessages(){if(!this.response.body)throw this.controller.abort(),new Error("Attempted to iterate over a response with no body");const e=new x,t=st(this.response.body);for await(const r of t)for(const s of e.decode(r)){const i=this.decoder.decode(s);i&&(yield i)}for(const r of e.flush()){const s=this.decoder.decode(r);s&&(yield s)}}async*[Symbol.asyncIterator](){let e=!1;try{for await(const t of this.iterMessages())if(!e){if(t.data.startsWith("[DONE]")){e=!0;continue}if(t.event===null)try{yield JSON.parse(t.data)}catch(r){throw console.error("Could not parse message into JSON:",t.data),console.error("From chunk:",t.raw),r}}e=!0}catch(t){if(t instanceof Error&&t.name==="AbortError")return;throw t}finally{e||this.controller.abort()}}}class nt{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const i={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],i}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,r,s]=rt(e,":");return s.startsWith(" ")&&(s=s.substring(1)),t==="event"?this.event=s:t==="data"&&this.data.push(s),null}}class x{constructor(){this.buffer=[],this.trailingCR=!1}decode(e){let t=this.decodeText(e);if(this.trailingCR&&(t="\r"+t,this.trailingCR=!1),t.endsWith("\r")&&(this.trailingCR=!0,t=t.slice(0,-1)),!t)return[];const r=x.NEWLINE_CHARS.has(t[t.length-1]||"");let s=t.split(x.NEWLINE_REGEXP);return s.length===1&&!r?(this.buffer.push(s[0]),[]):(this.buffer.length>0&&(s=[this.buffer.join("")+s[0],...s.slice(1)],this.buffer=[]),r||(this.buffer=[s.pop()||""]),s)}decodeText(e){var t;if(e==null)return"";if(typeof e=="string")return e;if(typeof Buffer<"u"){if(e instanceof Buffer)return e.toString();if(e instanceof Uint8Array)return Buffer.from(e).toString();throw new Error(`Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)}if(typeof TextDecoder<"u"){if(e instanceof Uint8Array||e instanceof ArrayBuffer)return(t=this.textDecoder)!==null&&t!==void 0||(this.textDecoder=new TextDecoder("utf8")),this.textDecoder.decode(e);throw new Error(`Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`)}throw new Error("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")}flush(){if(!this.buffer.length&&!this.trailingCR)return[];const e=[this.buffer.join("")];return this.buffer=[],this.trailingCR=!1,e}}x.NEWLINE_CHARS=new Set([`
`,"\r","\v","\f","","","","","\u2028","\u2029"]);x.NEWLINE_REGEXP=/\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g;function rt(n,e){const t=n.indexOf(e);return t!==-1?[n.substring(0,t),e,n.substring(t+e.length)]:[n,"",""]}function st(n){if(n[Symbol.asyncIterator])return n;const e=n.getReader();return{async next(){try{const t=await e.read();return t!=null&&t.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){const t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}class d extends Error{constructor(e,t,r,s){super(`${e} ${d.makeMessage(t,r)}`),this.status=e,this.headers=s;const i=t;this.error=i,this.code=i==null?void 0:i.code,this.param=i==null?void 0:i.param,this.type=i==null?void 0:i.type}static makeMessage(e,t){return e!=null&&e.message?typeof e.message=="string"?e.message:JSON.stringify(e.message):e?JSON.stringify(e):t||"status code (no body)"}static generate(e,t,r,s){if(!e)return new K({cause:re(t)});const i=t==null?void 0:t.error;return e===400?new ge(e,i,r,s):e===401?new ye(e,i,r,s):e===403?new we(e,i,r,s):e===404?new be(e,i,r,s):e===409?new xe(e,i,r,s):e===422?new ve(e,i,r,s):e===429?new Pe(e,i,r,s):e>=500?new _e(e,i,r,s):new d(e,i,r,s)}}class ee extends d{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0),this.status=void 0}}class K extends d{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),this.status=void 0,t&&(this.cause=t)}}class se extends K{constructor({message:e}={}){super({message:e??"Request timed out."})}}class ge extends d{constructor(){super(...arguments),this.status=400}}class ye extends d{constructor(){super(...arguments),this.status=401}}class we extends d{constructor(){super(...arguments),this.status=403}}class be extends d{constructor(){super(...arguments),this.status=404}}class xe extends d{constructor(){super(...arguments),this.status=409}}class ve extends d{constructor(){super(...arguments),this.status=422}}class Pe extends d{constructor(){super(...arguments),this.status=429}}class _e extends d{}let ce=!1,E,Ee,Se,te,Re,Ae,Ie,ke;function it(n,e={auto:!1}){if(ce)throw new Error(`you must \`import 'openai/shims/${n.kind}'\` before importing anything else from openai`);if(E)throw new Error(`can't \`import 'openai/shims/${n.kind}'\` after \`import 'openai/shims/${E}'\``);ce=e.auto,E=n.kind,Ee=n.fetch,n.Request,n.Response,n.Headers,Se=n.FormData,n.Blob,te=n.File,Re=n.getMultipartRequestOptions,Ae=n.getDefaultAgent,Ie=n.fileFromPath,ke=n.isFsReadStream}class ot{constructor(e){this.body=e}get[Symbol.toStringTag](){return"MultipartBody"}}function at({manuallyImported:n}={}){const e=n?"You may need to use polyfills":"Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";let t,r,s,i;try{t=fetch,r=Request,s=Response,i=Headers}catch(o){throw new Error(`this environment is missing the following Web Fetch API type: ${o.message}. ${e}`)}return{kind:"web",fetch:t,Request:r,Response:s,Headers:i,FormData:typeof FormData<"u"?FormData:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${e}`)}},Blob:typeof Blob<"u"?Blob:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${e}`)}},File:typeof File<"u"?File:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${e}`)}},getMultipartRequestOptions:async(o,a)=>({...a,body:new ot(o)}),getDefaultAgent:o=>{},fileFromPath:()=>{throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads")},isFsReadStream:o=>!1}}E||it(at(),{auto:!0});const Te=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function",ut=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&Fe(n),Fe=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",ct=n=>ut(n)||Te(n)||ke(n);async function $e(n,e,t={}){var r,s,i;if(n=await n,Te(n)){const a=await n.blob();return e||(e=(r=new URL(n.url).pathname.split(/[\\/]/).pop())!==null&&r!==void 0?r:"unknown_file"),new te([a],e,t)}const o=await lt(n);if(e||(e=(s=ft(n))!==null&&s!==void 0?s:"unknown_file"),!t.type){const a=(i=o[0])===null||i===void 0?void 0:i.type;typeof a=="string"&&(t={...t,type:a})}return new te(o,e,t)}async function lt(n){var e;let t=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)t.push(n);else if(Fe(n))t.push(await n.arrayBuffer());else if(ht(n))for await(const r of n)t.push(r);else throw new Error(`Unexpected data type: ${typeof n}; constructor: ${(e=n==null?void 0:n.constructor)===null||e===void 0?void 0:e.name}; props: ${dt(n)}`);return t}function dt(n){return`[${Object.getOwnPropertyNames(n).map(t=>`"${t}"`).join(", ")}]`}function ft(n){var e;return Y(n.name)||Y(n.filename)||((e=Y(n.path))===null||e===void 0?void 0:e.split(/[\\/]/).pop())}const Y=n=>{if(typeof n=="string")return n;if(typeof Buffer<"u"&&n instanceof Buffer)return String(n)},ht=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function",le=n=>n&&typeof n=="object"&&n.body&&n[Symbol.toStringTag]==="MultipartBody",S=async n=>{const e=await pt(n.body);return Re(e,n)},pt=async n=>{const e=new Se;return await Promise.all(Object.entries(n||{}).map(([t,r])=>ne(e,t,r))),e},ne=async(n,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")n.append(e,String(t));else if(ct(t)){const r=await $e(t);n.append(e,r)}else if(Array.isArray(t))await Promise.all(t.map(r=>ne(n,e+"[]",r)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([r,s])=>ne(n,`${e}[${r}]`,s)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}};var mt=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(n,t):s?s.value=t:e.set(n,t),t},gt=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(n):r?r.value:e.get(n)},I;const yt=2;async function Ce(n){const{response:e}=n;if(n.options.stream)return new tt(e,n.controller);const t=e.headers.get("content-type");if(t!=null&&t.includes("application/json")){const s=await e.json();return $("response",e.status,e.url,e.headers,s),s}const r=await e.text();return $("response",e.status,e.url,e.headers,r),r}class G extends Promise{constructor(e,t=Ce){super(r=>{r(null)}),this.responsePromise=e,this.parseResponse=t}_thenUnwrap(e){return new G(this.responsePromise,async t=>e(await this.parseResponse(t)))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(this.parseResponse)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}class wt{constructor({baseURL:e,maxRetries:t,timeout:r=6e5,httpAgent:s,fetch:i}){this.baseURL=e,this.maxRetries=Z("maxRetries",t??yt),this.timeout=Z("timeout",r),this.httpAgent=s,this.fetch=i??Ee}authHeaders(e){return{}}defaultHeaders(e){return{Accept:"application/json","Content-Type":"application/json","User-Agent":this.getUserAgent(),...Et(),...this.authHeaders(e)}}validateHeaders(e,t){}defaultIdempotencyKey(){return`stainless-node-retry-${kt()}`}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,r){return this.request(Promise.resolve(r).then(s=>({method:e,path:t,...s})))}getAPIList(e,t,r){return this.requestAPIList(t,{method:"get",path:e,...r})}calculateContentLength(e){if(typeof e=="string"){if(typeof Buffer<"u")return Buffer.byteLength(e,"utf8").toString();if(typeof TextEncoder<"u")return new TextEncoder().encode(e).length.toString()}return null}buildRequest(e){var t,r,s,i,o,a;const{method:u,path:h,query:y,headers:c={}}=e,p=le(e.body)?e.body.body:e.body?JSON.stringify(e.body,null,2):null,v=this.calculateContentLength(p),P=this.buildURL(h,y);"timeout"in e&&Z("timeout",e.timeout);const _=(t=e.timeout)!==null&&t!==void 0?t:this.timeout,g=(s=(r=e.httpAgent)!==null&&r!==void 0?r:this.httpAgent)!==null&&s!==void 0?s:Ae(P),R=_+1e3;typeof((i=g==null?void 0:g.options)===null||i===void 0?void 0:i.timeout)=="number"&&R>((o=g.options.timeout)!==null&&o!==void 0?o:0)&&(g.options.timeout=R),this.idempotencyHeader&&u!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),c[this.idempotencyHeader]=e.idempotencyKey);const w={...v&&{"Content-Length":v},...this.defaultHeaders(e),...c};le(e.body)&&E!=="node"&&delete w["Content-Type"],Object.keys(w).forEach(oe=>w[oe]===null&&delete w[oe]);const He={method:u,...p&&{body:p},headers:w,...g&&{agent:g},signal:(a=e.signal)!==null&&a!==void 0?a:null};return this.validateHeaders(w,c),{req:He,url:P,timeout:_}}async prepareRequest(e,{url:t,options:r}){}parseHeaders(e){return e?Symbol.iterator in e?Object.fromEntries(Array.from(e).map(t=>[...t])):{...e}:{}}makeStatusError(e,t,r,s){return d.generate(e,t,r,s)}request(e,t=null){return new G(this.makeRequest(e,t))}async makeRequest(e,t){var r,s,i;const o=await e;t==null&&(t=(r=o.maxRetries)!==null&&r!==void 0?r:this.maxRetries);const{req:a,url:u,timeout:h}=this.buildRequest(o);if(await this.prepareRequest(a,{url:u,options:o}),$("request",u,o,a.headers),!((s=o.signal)===null||s===void 0)&&s.aborted)throw new ee;const y=new AbortController,c=await this.fetchWithTimeout(u,a,h,y).catch(re);if(c instanceof Error){if(!((i=o.signal)===null||i===void 0)&&i.aborted)throw new ee;if(t)return this.retryRequest(o,t);throw c.name==="AbortError"?new se:new K({cause:c})}const p=xt(c.headers);if(!c.ok){if(t&&this.shouldRetry(c))return this.retryRequest(o,t,p);const v=await c.text().catch(R=>re(R).message),P=St(v),_=P?void 0:v;throw $("response",c.status,u,p,_),this.makeStatusError(c.status,P,_,p)}return{response:c,options:o,controller:y}}requestAPIList(e,t){const r=this.makeRequest(t,null);return new bt(this,r,e)}buildURL(e,t){const r=At(e)?new URL(e):new URL(this.baseURL+(this.baseURL.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),s=this.defaultQuery();return Oe(s)||(t={...s,...t}),t&&(r.search=this.stringifyQuery(t)),r.toString()}stringifyQuery(e){return Object.entries(e).filter(([t,r])=>typeof r<"u").map(([t,r])=>{if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")return`${encodeURIComponent(t)}=${encodeURIComponent(r)}`;if(r===null)return`${encodeURIComponent(t)}=`;throw new Error(`Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}async fetchWithTimeout(e,t,r,s){const{signal:i,...o}=t||{};i&&i.addEventListener("abort",()=>s.abort());const a=setTimeout(()=>s.abort(),r);return this.getRequestClient().fetch.call(void 0,e,{signal:s.signal,...o}).finally(()=>{clearTimeout(a)})}getRequestClient(){return{fetch:this.fetch}}shouldRetry(e){const t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,r){var s;t-=1;const i=parseInt((r==null?void 0:r["retry-after"])||""),o=(s=e.maxRetries)!==null&&s!==void 0?s:this.maxRetries,a=this.calculateRetryTimeoutSeconds(t,i,o)*1e3;return await je(a),this.makeRequest(e,t)}calculateRetryTimeoutSeconds(e,t,r){if(Number.isInteger(t)&&t<=60)return t;const o=r-e,a=Math.min(.5*Math.pow(o-1,2),2),u=Math.random()-.5;return a+u}getUserAgent(){return`${this.constructor.name}/JS ${b}`}}class Le{constructor(e,t,r,s){I.set(this,void 0),mt(this,I,e,"f"),this.options=s,this.response=t,this.body=r}hasNextPage(){return this.getPaginatedItems().length?this.nextPageInfo()!=null:!1}async getNextPage(){const e=this.nextPageInfo();if(!e)throw new Error("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");const t={...this.options};if("params"in e)t.query={...t.query,...e.params};else if("url"in e){const r=[...Object.entries(t.query||{}),...e.url.searchParams.entries()];for(const[s,i]of r)e.url.searchParams.set(s,i);t.query=void 0,t.path=e.url.toString()}return await gt(this,I,"f").requestAPIList(this.constructor,t)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(I=new WeakMap,Symbol.asyncIterator)](){for await(const e of this.iterPages())for(const t of e.getPaginatedItems())yield t}}class bt extends G{constructor(e,t,r){super(t,async s=>new r(e,s.response,await Ce(s),s.options))}async*[Symbol.asyncIterator](){const e=await this;for await(const t of e)yield t}}const xt=n=>new Proxy(Object.fromEntries(n.entries()),{get(e,t){const r=t.toString();return e[r.toLowerCase()]||e[r]}}),vt={method:!0,path:!0,query:!0,body:!0,headers:!0,maxRetries:!0,stream:!0,timeout:!0,httpAgent:!0,signal:!0,idempotencyKey:!0},de=n=>typeof n=="object"&&n!==null&&!Oe(n)&&Object.keys(n).every(e=>It(vt,e)),Pt=()=>{if(typeof Deno<"u"&&Deno.build!=null)return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":b,"X-Stainless-OS":he(Deno.build.os),"X-Stainless-Arch":fe(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":Deno.version};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":b,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":process.version};if(Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":b,"X-Stainless-OS":he(process.platform),"X-Stainless-Arch":fe(process.arch),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":process.version};const n=_t();return n?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":b,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${n.browser}`,"X-Stainless-Runtime-Version":n.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":b,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function _t(){if(typeof navigator>"u"||!navigator)return null;const n=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:e,pattern:t}of n){const r=t.exec(navigator.userAgent);if(r){const s=r[1]||0,i=r[2]||0,o=r[3]||0;return{browser:e,version:`${s}.${i}.${o}`}}}return null}const fe=n=>n==="x32"?"x32":n==="x86_64"||n==="x64"?"x64":n==="arm"?"arm":n==="aarch64"||n==="arm64"?"arm64":n?`other:${n}`:"unknown",he=n=>(n=n.toLowerCase(),n.includes("ios")?"iOS":n==="android"?"Android":n==="darwin"?"MacOS":n==="win32"?"Windows":n==="freebsd"?"FreeBSD":n==="openbsd"?"OpenBSD":n==="linux"?"Linux":n?`Other:${n}`:"Unknown");let k;const Et=()=>k??(k=Pt()),St=n=>{try{return JSON.parse(n)}catch{return}},Rt=new RegExp("^(?:[a-z]+:)?//","i"),At=n=>Rt.test(n),je=n=>new Promise(e=>setTimeout(e,n)),Z=(n,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new Error(`${n} must be an integer`);if(e<0)throw new Error(`${n} must be a positive integer`);return e},re=n=>n instanceof Error?n:new Error(n),pe=n=>{var e,t,r,s;if(typeof process<"u")return(t=(e=process.env)===null||e===void 0?void 0:e[n])!==null&&t!==void 0?t:void 0;if(typeof Deno<"u")return(s=(r=Deno.env)===null||r===void 0?void 0:r.get)===null||s===void 0?void 0:s.call(r,n)};function Oe(n){if(!n)return!0;for(const e in n)return!1;return!0}function It(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $(n,...e){typeof process<"u"&&process.env.DEBUG==="true"&&console.log(`OpenAI:DEBUG:${n}`,...e)}const kt=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),Tt=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";class z extends Le{constructor(e,t,r,s){super(e,t,r,s),this.object=r.object,this.data=r.data}getPaginatedItems(){return this.data}nextPageParams(){return null}nextPageInfo(){return null}}class ie extends Le{constructor(e,t,r,s){super(e,t,r,s),this.data=r.data}getPaginatedItems(){return this.data}nextPageParams(){const e=this.nextPageInfo();if(!e)return null;if("params"in e)return e.params;const t=Object.fromEntries(e.url.searchParams);return Object.keys(t).length?t:null}nextPageInfo(){var e,t;if(!(!((e=this.data)===null||e===void 0)&&e.length))return null;const r=(t=this.data[this.data.length-1])===null||t===void 0?void 0:t.id;return r?{params:{after:r}}:null}}class f{constructor(e){this.client=e,this.get=e.get.bind(e),this.post=e.post.bind(e),this.patch=e.patch.bind(e),this.put=e.put.bind(e),this.delete=e.delete.bind(e),this.getAPIList=e.getAPIList.bind(e)}}class C extends f{create(e,t){return this.post("/audio/transcriptions",S({body:e,...t}))}}C||(C={});class L extends f{create(e,t){return this.post("/audio/translations",S({body:e,...t}))}}L||(L={});class j extends f{constructor(){super(...arguments),this.transcriptions=new C(this.client),this.translations=new L(this.client)}}(function(n){n.Transcriptions=C,n.Translations=L})(j||(j={}));let O=class extends f{create(e,t){var r;return this.post("/chat/completions",{body:e,...t,stream:(r=e.stream)!==null&&r!==void 0?r:!1})}};O||(O={});class B extends f{constructor(){super(...arguments),this.completions=new O(this.client)}}(function(n){n.Completions=O})(B||(B={}));class D extends f{create(e,t){var r;return this.post("/completions",{body:e,...t,stream:(r=e.stream)!==null&&r!==void 0?r:!1})}}D||(D={});class N extends f{create(e,t){return this.post("/embeddings",{body:e,...t})}}N||(N={});class q extends f{create(e,t){return this.post("/edits",{body:e,...t})}}q||(q={});class U extends f{create(e,t){return this.post("/files",S({body:e,...t}))}retrieve(e,t){return this.get(`/files/${e}`,t)}list(e){return this.getAPIList("/files",Be,e)}del(e,t){return this.delete(`/files/${e}`,t)}retrieveContent(e,t){return this.get(`/files/${e}/content`,{...t,headers:{Accept:"application/json",...t==null?void 0:t.headers}})}async waitForProcessing(e,{pollInterval:t=5e3,maxWait:r=30*60*1e3}={}){const s=new Set(["processed","error","deleted"]),i=Date.now();let o=await this.retrieve(e);for(;!o.status||!s.has(o.status);)if(await je(t),o=await this.retrieve(e),Date.now()-i>r)throw new se({message:`Giving up on waiting for file ${e} to finish processing after ${r} milliseconds.`});return o}}class Be extends z{}U||(U={});class M extends f{create(e,t){return this.post("/fine-tunes",{body:e,...t})}retrieve(e,t){return this.get(`/fine-tunes/${e}`,t)}list(e){return this.getAPIList("/fine-tunes",De,e)}cancel(e,t){return this.post(`/fine-tunes/${e}/cancel`,t)}listEvents(e,t,r){var s;return this.get(`/fine-tunes/${e}/events`,{query:t,timeout:864e5,...r,stream:(s=t==null?void 0:t.stream)!==null&&s!==void 0?s:!1})}}class De extends z{}M||(M={});class X extends f{create(e,t){return this.post("/fine_tuning/jobs",{body:e,...t})}retrieve(e,t){return this.get(`/fine_tuning/jobs/${e}`,t)}list(e={},t){return de(e)?this.list({},e):this.getAPIList("/fine_tuning/jobs",Ne,{query:e,...t})}cancel(e,t){return this.post(`/fine_tuning/jobs/${e}/cancel`,t)}listEvents(e,t={},r){return de(t)?this.listEvents(e,{},t):this.getAPIList(`/fine_tuning/jobs/${e}/events`,qe,{query:t,...r})}}class Ne extends ie{}class qe extends ie{}X||(X={});class H extends f{constructor(){super(...arguments),this.jobs=new X(this.client)}}(function(n){n.Jobs=X,n.FineTuningJobsPage=Ne,n.FineTuningJobEventsPage=qe})(H||(H={}));class W extends f{createVariation(e,t){return this.post("/images/variations",S({body:e,...t}))}edit(e,t){return this.post("/images/edits",S({body:e,...t}))}generate(e,t){return this.post("/images/generations",{body:e,...t})}}W||(W={});class V extends f{retrieve(e,t){return this.get(`/models/${e}`,t)}list(e){return this.getAPIList("/models",Ue,e)}del(e,t){return this.delete(`/models/${e}`,t)}}class Ue extends z{}V||(V={});class J extends f{create(e,t){return this.post("/moderations",{body:e,...t})}}J||(J={});var Me;class l extends wt{constructor(e){var t,r,s,{apiKey:i=pe("OPENAI_API_KEY"),organization:o=(t=pe("OPENAI_ORG_ID"))!==null&&t!==void 0?t:null,...a}=e===void 0?{}:e;if(i===void 0)throw new Error("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'my apiKey' }).");const u={apiKey:i,organization:o,...a,baseURL:(r=a.baseURL)!==null&&r!==void 0?r:"https://api.openai.com/v1"};if(!u.dangerouslyAllowBrowser&&Tt())throw new Error(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);super({baseURL:u.baseURL,timeout:(s=u.timeout)!==null&&s!==void 0?s:6e5,httpAgent:u.httpAgent,maxRetries:u.maxRetries,fetch:u.fetch}),this.completions=new D(this),this.chat=new B(this),this.edits=new q(this),this.embeddings=new N(this),this.files=new U(this),this.images=new W(this),this.audio=new j(this),this.moderations=new J(this),this.models=new V(this),this.fineTuning=new H(this),this.fineTunes=new M(this),this._options=u,this.apiKey=i,this.organization=o}defaultQuery(){return this._options.defaultQuery}defaultHeaders(e){return{...super.defaultHeaders(e),"OpenAI-Organization":this.organization,...this._options.defaultHeaders}}authHeaders(e){return{Authorization:`Bearer ${this.apiKey}`}}}Me=l;l.OpenAI=Me;l.APIError=d;l.APIConnectionError=K;l.APIConnectionTimeoutError=se;l.APIUserAbortError=ee;l.NotFoundError=be;l.ConflictError=xe;l.RateLimitError=Pe;l.BadRequestError=ge;l.AuthenticationError=ye;l.InternalServerError=_e;l.PermissionDeniedError=we;l.UnprocessableEntityError=ve;(function(n){n.toFile=$e,n.fileFromPath=Ie,n.Page=z,n.CursorPage=ie,n.Completions=D,n.Chat=B,n.Edits=q,n.Embeddings=N,n.Files=U,n.FileObjectsPage=Be,n.Images=W,n.Audio=j,n.Moderations=J,n.Models=V,n.ModelsPage=Ue,n.FineTuning=H,n.FineTunes=M,n.FineTunesPage=De})(l||(l={}));const Ft=l,Xe=n=>(Ye("data-v-6ffacfac"),n=n(),Ze(),n),$t={class:"page"},Ct={class:"text"},Lt=Xe(()=>m("div",{class:"text-logo"},"🥷",-1)),jt={class:"text-span"},Ot={class:"result"},Bt=Xe(()=>m("div",{class:"text-logo"},"💻",-1)),Dt={class:"text-span"},Nt={class:"fixed-box"},qt=We({__name:"gptApi",setup(n){const e=A(null),t=A([]),r=A(""),s=A(!1),i=new Ft({apiKey:"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",dangerouslyAllowBrowser:!0});function o(){r.value=String(r.value).trim(),e.value.style.height="auto",e.value.style.height=e.value.scrollHeight+"px"}function a(){if(!r.value){ue.info("请输入问题哦！！！");return}s.value=!0;const u=JSON.parse(JSON.stringify(r.value));i.chat.completions.create({messages:[{role:"user",content:r.value}],model:"gpt-3.5-turbo"}).then(h=>{r.value="",t.value=[...t.value,{text:u,result:h.choices[0].message.content}],s.value=!1}).catch(h=>{ue.error(h.msg),s.value=!1})}return(u,h)=>{const y=Ve("a-button");return T(),F(ae,null,[m("div",$t,[(T(!0),F(ae,null,Je(t.value,(c,p)=>(T(),F("div",{class:"item",key:p},[m("div",Ct,[Lt,m("div",jt,Q(c.text),1)]),m("div",Ot,[Bt,m("div",Dt,Q(c.result),1)])]))),128))]),m("div",Nt,[Ke(m("textarea",{ref_key:"textareaDom",ref:e,class:"blog-textarea",autofocus:"","onUpdate:modelValue":h[0]||(h[0]=c=>r.value=c),placeholder:"请输入您的问题",onInput:o},null,544),[[Ge,r.value]]),me(y,{type:"primary",disabled:s.value,onClick:a},{default:ze(()=>[Qe(Q(s.value?"请求中...":"⦊"),1)]),_:1},8,["disabled"])])],64)}}});const Ut=et(qt,[["__scopeId","data-v-6ffacfac"]]),Gt=JSON.parse('{"title":"","description":"","frontmatter":{"footer":false},"headers":[],"relativePath":"chatGPT/index.md","filePath":"chatGPT/index.md"}'),Mt={name:"chatGPT/index.md"},zt=Object.assign(Mt,{setup(n){return(e,t)=>(T(),F("div",null,[me(Ut)]))}});export{Gt as __pageData,zt as default};
