import{n as $e,s as $t,o as Ie,t as Pe}from"../chunks/scheduler.sojerKHq.js";import{a as It,b as M}from"../chunks/paths._rA4MscZ.js";new URL("sveltekit-internal://");function Pt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function jt(e){return e.split("%25").map(decodeURI).join("%25")}function xt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function je({href:e}){return e.split("#")[0]}const Lt=["href","pathname","search","toString","toJSON"];function Nt(e,n,s){const o=new URL(e);Object.defineProperty(o,"searchParams",{value:new Proxy(o.searchParams,{get(l,f){if(f==="get"||f==="getAll"||f==="has")return i=>(s(i),l[f](i));n();const _=Reflect.get(l,f);return typeof _=="function"?_.bind(l):_}}),enumerable:!0,configurable:!0});for(const l of Lt)Object.defineProperty(o,l,{get(){return n(),e[l]},enumerable:!0,configurable:!0});return Ut(o),o}function Ut(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Tt="/__data.json",Ct=".html__data.json";function Dt(e){return e.endsWith(".html")?e.replace(/\.html$/,Ct):e.replace(/\/$/,"")+Tt}function Vt(...e){let n=5381;for(const s of e)if(typeof s=="string"){let o=s.length;for(;o;)n=n*33^s.charCodeAt(--o)}else if(ArrayBuffer.isView(s)){const o=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);let l=o.length;for(;l;)n=n*33^o[--l]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const ht=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:n?.method||"GET")!=="GET"&&se.delete(Fe(e)),ht(e,n));const se=new Map;function Mt(e){const n=atob(e),s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s.buffer}function Ft(e,n){const s=Fe(e,n),o=document.querySelector(s);if(o?.textContent){let{body:l,...f}=JSON.parse(o.textContent);const _=o.getAttribute("data-ttl");return _&&se.set(s,{body:l,init:f,ttl:1e3*Number(_)}),o.getAttribute("data-b64")!==null&&(l=Mt(l)),Promise.resolve(new Response(l,f))}return window.fetch(e,n)}function qt(e,n,s){if(se.size>0){const o=Fe(e,s),l=se.get(o);if(l){if(performance.now()<l.ttl&&["default","force-cache","only-if-cached",void 0].includes(s?.cache))return new Response(l.body,l.init);se.delete(o)}}return window.fetch(n,s)}function Fe(e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n?.headers||n?.body){const l=[];n.headers&&l.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&l.push(n.body),o+=`[data-hash="${Vt(...l)}"]`}return o}const Bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Gt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Jt(e).map(o=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(l)return n.push({name:l[1],matcher:l[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return n.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const _=o.split(/\[(.+?)\](?!\])/);return"/"+_.map((d,c)=>{if(c%2){if(d.startsWith("x+"))return xe(String.fromCharCode(parseInt(d.slice(2),16)));if(d.startsWith("u+"))return xe(String.fromCharCode(...d.slice(2).split("-").map(R=>parseInt(R,16))));const g=Bt.exec(d);if(!g)throw new Error(`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,I,E,$]=g;return n.push({name:E,matcher:$,optional:!!w,rest:!!I,chained:I?c===1&&_[0]==="":!1}),I?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return xe(d)}).join("")}).join("")}/?$`),params:n}}function Ht(e){return!/^\([^)]+\)$/.test(e)}function Jt(e){return e.slice(1).split("/").filter(Ht)}function Kt(e,n,s){const o={},l=e.slice(1),f=l.filter(i=>i!==void 0);let _=0;for(let i=0;i<n.length;i+=1){const d=n[i];let c=l[i-_];if(d.chained&&d.rest&&_&&(c=l.slice(i-_,i+1).filter(g=>g).join("/"),_=0),c===void 0){d.rest&&(o[d.name]="");continue}if(!d.matcher||s[d.matcher](c)){o[d.name]=c;const g=n[i+1],w=l[i+1];g&&!g.rest&&g.optional&&w&&d.chained&&(_=0),!g&&!w&&Object.keys(o).length===f.length&&(_=0);continue}if(d.optional&&d.chained){_++;continue}return}if(!_)return o}function xe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function zt({nodes:e,server_loads:n,dictionary:s,matchers:o}){const l=new Set(n);return Object.entries(s).map(([i,[d,c,g]])=>{const{pattern:w,params:I}=Gt(i),E={id:i,exec:$=>{const R=w.exec($);if(R)return Kt(R,I,o)},errors:[1,...g||[]].map($=>e[$]),layouts:[0,...c||[]].map(_),leaf:f(d)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function f(i){const d=i<0;return d&&(i=~i),[d,e[i]]}function _(i){return i===void 0?i:[l.has(i),e[i]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Le(e,n,s=JSON.stringify){const o=s(n);try{sessionStorage[e]=o}catch{}}const W=[];function Be(e,n=$e){let s;const o=new Set;function l(i){if($t(e,i)&&(e=i,s)){const d=!W.length;for(const c of o)c[1](),W.push(c,e);if(d){for(let c=0;c<W.length;c+=2)W[c][0](W[c+1]);W.length=0}}}function f(i){l(i(e))}function _(i,d=$e){const c=[i,d];return o.add(c),o.size===1&&(s=n(l,f)||$e),i(e),()=>{o.delete(c),o.size===0&&s&&(s(),s=null)}}return{set:l,update:f,subscribe:_}}const Yt="1704622801356",_t="sveltekit:snapshot",gt="sveltekit:scroll",mt="sveltekit:states",Ne="sveltekit:pageurl",B="sveltekit:history",K="sveltekit:navigation",ve={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ie=location.origin;function ae(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const s=document.getElementsByTagName("base");n=s.length?s[0].href:document.URL}return new URL(e,n)}function Me(){return{x:pageXOffset,y:pageYOffset}}function X(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const at={...ve,"":ve.hover};function yt(e){let n=e.assignedSlot??e.parentNode;return n?.nodeType===11&&(n=n.host),n}function ot(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=yt(e)}}function Ue(e,n){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!s||!!o||ye(s,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=s?.origin===ie&&e.hasAttribute("download");return{url:s,external:l,target:o,download:f}}function _e(e){let n=null,s=null,o=null,l=null,f=null,_=null,i=e;for(;i&&i!==document.documentElement;)o===null&&(o=X(i,"preload-code")),l===null&&(l=X(i,"preload-data")),n===null&&(n=X(i,"keepfocus")),s===null&&(s=X(i,"noscroll")),f===null&&(f=X(i,"reload")),_===null&&(_=X(i,"replacestate")),i=yt(i);function d(c){switch(c){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:at[o??"off"],preload_data:at[l??"off"],keepfocus:d(n),noscroll:d(s),reload:d(f),replace_state:d(_)}}function st(e){const n=Be(e);let s=!0;function o(){s=!0,n.update(_=>_)}function l(_){s=!1,n.set(_)}function f(_){let i;return n.subscribe(d=>{(i===void 0||s&&d!==i)&&_(i=d)})}return{notify:o,set:l,subscribe:f}}function Wt(){const{set:e,subscribe:n}=Be(!1);let s;async function o(){clearTimeout(s);try{const l=await fetch(`${It}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const _=(await l.json()).version!==Yt;return _&&(e(!0),clearTimeout(s)),_}catch{return!1}}return{subscribe:n,check:o}}function ye(e,n){return e.origin!==ie||!e.pathname.startsWith(n)}class Te extends Error{constructor(n,s){super(n),this.name="DevalueError",this.path=s.join("")}}function it(e){return Object(e)!==e}const Xt=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zt(e){const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null||Object.getOwnPropertyNames(n).sort().join("\0")===Xt}function Qt(e){return Object.prototype.toString.call(e).slice(8,-1)}function en(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function Q(e){let n="",s=0;const o=e.length;for(let l=0;l<o;l+=1){const f=e[l],_=en(f);_&&(n+=e.slice(s,l)+_,s=l+1)}return`"${s===0?e:n+e.slice(s)}"`}const Ge=-1,vt=-2,wt=-3,bt=-4,Et=-5,He=-6;function tn(e,n){return kt(JSON.parse(e),n)}function kt(e,n){if(typeof e=="number")return l(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const s=e,o=Array(s.length);function l(f,_=!1){if(f===Ge)return;if(f===wt)return NaN;if(f===bt)return 1/0;if(f===Et)return-1/0;if(f===He)return-0;if(_)throw new Error("Invalid input");if(f in o)return o[f];const i=s[f];if(!i||typeof i!="object")o[f]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const d=i[0],c=n?.[d];if(c)return o[f]=c(l(i[1]));switch(d){case"Date":o[f]=new Date(i[1]);break;case"Set":const g=new Set;o[f]=g;for(let E=1;E<i.length;E+=1)g.add(l(i[E]));break;case"Map":const w=new Map;o[f]=w;for(let E=1;E<i.length;E+=2)w.set(l(i[E]),l(i[E+1]));break;case"RegExp":o[f]=new RegExp(i[1],i[2]);break;case"Object":o[f]=Object(i[1]);break;case"BigInt":o[f]=BigInt(i[1]);break;case"null":const I=Object.create(null);o[f]=I;for(let E=1;E<i.length;E+=2)I[i[E]]=l(i[E+1]);break;default:throw new Error(`Unknown type ${d}`)}}else{const d=new Array(i.length);o[f]=d;for(let c=0;c<i.length;c+=1){const g=i[c];g!==vt&&(d[c]=l(g))}}else{const d={};o[f]=d;for(const c in i){const g=i[c];d[c]=l(g)}}return o[f]}return l(0)}function nn(e,n){const s=[],o=new Map,l=[];for(const c in n)l.push({key:c,fn:n[c]});const f=[];let _=0;function i(c){if(typeof c=="function")throw new Te("Cannot stringify a function",f);if(o.has(c))return o.get(c);if(c===void 0)return Ge;if(Number.isNaN(c))return wt;if(c===1/0)return bt;if(c===-1/0)return Et;if(c===0&&1/c<0)return He;const g=_++;o.set(c,g);for(const{key:I,fn:E}of l){const $=E(c);if($)return s[g]=`["${I}",${i($)}]`,g}let w="";if(it(c))w=Ce(c);else switch(Qt(c)){case"Number":case"String":case"Boolean":w=`["Object",${Ce(c)}]`;break;case"BigInt":w=`["BigInt",${c}]`;break;case"Date":w=`["Date","${c.toISOString()}"]`;break;case"RegExp":const{source:E,flags:$}=c;w=$?`["RegExp",${Q(E)},"${$}"]`:`["RegExp",${Q(E)}]`;break;case"Array":w="[";for(let R=0;R<c.length;R+=1)R>0&&(w+=","),R in c?(f.push(`[${R}]`),w+=i(c[R]),f.pop()):w+=vt;w+="]";break;case"Set":w='["Set"';for(const R of c)w+=`,${i(R)}`;w+="]";break;case"Map":w='["Map"';for(const[R,D]of c)f.push(`.get(${it(R)?Ce(R):"..."})`),w+=`,${i(R)},${i(D)}`;w+="]";break;default:if(!Zt(c))throw new Te("Cannot stringify arbitrary non-POJOs",f);if(Object.getOwnPropertySymbols(c).length>0)throw new Te("Cannot stringify POJOs with symbolic keys",f);if(Object.getPrototypeOf(c)===null){w='["null"';for(const R in c)f.push(`.${R}`),w+=`,${Q(R)},${i(c[R])}`,f.pop();w+="]"}else{w="{";let R=!1;for(const D in c)R&&(w+=","),R=!0,f.push(`.${D}`),w+=`${Q(D)}:${i(c[D])}`,f.pop();w+="}"}}return s[g]=w,g}const d=i(e);return d<0?`${d}`:`[${s.join(",")}]`}function Ce(e){const n=typeof e;return n==="string"?Q(e):e instanceof String?Q(e.toString()):e===void 0?Ge.toString():e===0&&1/e<0?He.toString():n==="bigint"?`["BigInt","${e}"]`:String(e)}const St=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...St];const rn=new Set([...St]);[...rn];function an(e){return e.filter(n=>n!=null)}class we{constructor(n,s){this.status=n,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ct{constructor(n,s){this.status=n,this.location=s}}class Je extends Error{constructor(n,s,o){super(o),this.status=n,this.text=s}}const on="x-sveltekit-invalidated",sn="x-sveltekit-trailing-slash";function cn(e){e.client}const G={url:st({}),page:st({}),navigating:Be(null),updated:Wt()};function ge(e){return e instanceof we||e instanceof Je?e.status:500}function ln(e){return e instanceof Je?e.text:"Internal Error"}const z=qe(gt)??{},oe=qe(mt,tn)??{},ce=qe(_t)??{},lt=history.pushState,me=history.replaceState;function De(e){z[e]=Me()}function ft(e,n){let s=e+1;for(;z[s];)delete z[s],s+=1;for(s=n+1;ce[s];)delete ce[s],s+=1}function Z(e){return location.href=e.href,new Promise(()=>{})}function ut(){}function fn(e,n){const s=zt(e),o=e.nodes[0],l=e.nodes[1];o(),l();const f=document.documentElement,_=[],i=[];let d=null;const c={before_navigate:[],on_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},w=!1,I=!1,E=!0,$=!1,R=!1,D=!1,ee=!1,le=!1,F,L=history.state?.[B],V=history.state?.[K];L||(L=V=Date.now(),me.call(history,{...history.state,[B]:L,[K]:V},"",location.href));const be=z[L];be&&(history.scrollRestoration="manual",scrollTo(be.x,be.y));let j,Y,Ee;async function Ke(){if(await(Ee||=Promise.resolve()),!Ee)return;Ee=null;const r=ne(g.url,!0);d=null;const t=Y={},a=r&&await Ae(r);t===Y&&(a&&(a.type==="redirect"?await fe(new URL(a.location,g.url).href,{},1,t):(a.props.page!==void 0&&(j=a.props.page),F.$set(a.props))),_.length=0)}function ze(r){i.some(t=>t?.snapshot)&&(ce[r]=i.map(t=>t?.snapshot?.capture()))}function Ye(r){ce[r]?.forEach((t,a)=>{i[a]?.snapshot?.restore(t)})}function We(){De(L),Le(gt,z),ze(V),Le(_t,ce),Le(mt,oe,nn)}async function fe(r,t,a,u){return pe({type:"goto",url:ae(r),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,redirect_count:a,state:t.state,nav_token:u,accept:()=>{t.invalidateAll&&(le=!0)}})}async function Xe(r){return d={id:r.id,promise:Ae(r).then(t=>(t.type==="loaded"&&t.state.error&&(d=null),t))},d.promise}async function ue(r){const t=s.find(a=>a.exec(tt(r)));t&&await Promise.all([...t.layouts,t.leaf].map(a=>a?.[1]()))}function Ze(r){g=r.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),j=r.props.page,F=new e.root({target:n,props:{...r.props,stores:G,components:i},hydrate:!0}),Ye(V);const a={from:null,to:{params:g.params,route:{id:g.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};c.after_navigate.forEach(u=>u(a)),I=!0}async function te({url:r,params:t,branch:a,status:u,error:p,route:h,form:m}){let v="never";for(const A of a)A?.slash!==void 0&&(v=A.slash);r.pathname=Pt(r.pathname,v),r.search=r.search;const k={type:"loaded",state:{url:r,params:t,branch:a,error:p,route:h},props:{constructors:an(a).map(A=>A.node.component),page:j}};m!==void 0&&(k.props.form=m);let b={},N=!j,U=0;for(let A=0;A<Math.max(a.length,g.branch.length);A+=1){const x=a[A],O=g.branch[A];x?.data!==O?.data&&(N=!0),x&&(b={...b,...x.data},N&&(k.props[`data_${U}`]=b),U+=1)}return(!g.url||r.href!==g.url.href||g.error!==p||m!==void 0&&m!==j.form||N)&&(k.props.page={error:p,params:t,route:{id:h?.id??null},state:{},status:u,url:new URL(r),form:m??null,data:N?b:j.data}),k}async function ke({loader:r,parent:t,url:a,params:u,route:p,server_data_node:h}){let m=null,v=!0;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},b=await r();if(b.universal?.load){let N=function(...y){for(const A of y){const{href:x}=new URL(A,a);k.dependencies.add(x)}};const U={route:new Proxy(p,{get:(y,A)=>(v&&(k.route=!0),y[A])}),params:new Proxy(u,{get:(y,A)=>(v&&k.params.add(A),y[A])}),data:h?.data??null,url:Nt(a,()=>{v&&(k.url=!0)},y=>{v&&k.search_params.add(y)}),async fetch(y,A){let x;y instanceof Request?(x=y.url,A={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...A}):x=y;const O=new URL(x,a);return v&&N(O.href),O.origin===a.origin&&(x=O.href.slice(a.origin.length)),I?qt(x,O.href,A):Ft(x,A)},setHeaders:()=>{},depends:N,parent(){return v&&(k.parent=!0),t()},untrack(y){v=!1;try{return y()}finally{v=!0}}};m=await b.universal.load.call(null,U)??null}return{node:b,loader:r,server:h,universal:b.universal?.load?{type:"data",data:m,uses:k}:null,data:m??h?.data??null,slash:M&&(a.pathname===M||a.pathname===M+"/")?"always":b.universal?.trailingSlash??h?.slash}}function Qe(r,t,a,u,p,h){if(le)return!0;if(!p)return!1;if(p.parent&&r||p.route&&t||p.url&&a)return!0;for(const m of p.search_params)if(u.has(m))return!0;for(const m of p.params)if(h[m]!==g.params[m])return!0;for(const m of p.dependencies)if(_.some(v=>v(new URL(m))))return!0;return!1}function Se(r,t){return r?.type==="data"?r:r?.type==="skip"?t??null:null}function Rt(r,t){if(!r)return new Set(t.searchParams.keys());const a=new Set([...r.searchParams.keys(),...t.searchParams.keys()]);for(const u of a){const p=r.searchParams.getAll(u),h=t.searchParams.getAll(u);p.every(m=>h.includes(m))&&h.every(m=>p.includes(m))&&a.delete(u)}return a}async function Ae({id:r,invalidating:t,url:a,params:u,route:p}){if(d?.id===r)return d.promise;const{errors:h,layouts:m,leaf:v}=p,k=[...m,v];h.forEach(S=>S?.().catch(()=>{})),k.forEach(S=>S?.[1]().catch(()=>{}));let b=null;const N=g.url?r!==g.url.pathname+g.url.search:!1,U=g.route?p.id!==g.route.id:!1,y=Rt(g.url,a);let A=!1;const x=k.map((S,P)=>{const T=g.branch[P],C=!!S?.[0]&&(T?.loader!==S[1]||Qe(A,U,N,y,T.server?.uses,u));return C&&(A=!0),C});if(x.some(Boolean)){try{b=await dt(a,x)}catch(S){return de({status:ge(S),error:await re(S,{url:a,params:u,route:{id:p.id}}),url:a,route:p})}if(b.type==="redirect")return b}const O=b?.nodes;let q=!1;const H=k.map(async(S,P)=>{if(!S)return;const T=g.branch[P],C=O?.[P];if((!C||C.type==="skip")&&S[1]===T?.loader&&!Qe(q,U,N,y,T.universal?.uses,u))return T;if(q=!0,C?.type==="error")throw C;return ke({loader:S[1],url:a,params:u,route:p,parent:async()=>{const Re={};for(let Oe=0;Oe<P;Oe+=1)Object.assign(Re,(await H[Oe])?.data);return Re},server_data_node:Se(C===void 0&&S[0]?{type:"skip"}:C??null,S[0]?T?.server:void 0)})});for(const S of H)S.catch(()=>{});const J=[];for(let S=0;S<k.length;S+=1)if(k[S])try{J.push(await H[S])}catch(P){if(P instanceof ct)return{type:"redirect",location:P.location};let T=ge(P),C;if(O?.includes(P))T=P.status??T,C=P.error;else if(P instanceof we)C=P.body;else{if(await G.updated.check())return await Z(a);C=await re(P,{params:u,url:a,route:{id:p.id}})}const he=await et(S,J,h);return he?await te({url:a,params:u,branch:J.slice(0,he.idx).concat(he.node),status:T,error:C,route:p}):await rt(a,{id:p.id},C,T)}else J.push(void 0);return await te({url:a,params:u,branch:J,status:200,error:null,route:p,form:t?void 0:null})}async function et(r,t,a){for(;r--;)if(a[r]){let u=r;for(;!t[u];)u-=1;try{return{idx:u+1,node:{node:await a[r](),loader:a[r],data:{},server:null,universal:null}}}catch{continue}}}async function de({status:r,error:t,url:a,route:u}){const p={};let h=null;if(e.server_loads[0]===0)try{const b=await dt(a,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=b.nodes[0]??null}catch{(a.origin!==ie||a.pathname!==location.pathname||w)&&await Z(a)}const v=await ke({loader:o,url:a,params:p,route:u,parent:()=>Promise.resolve({}),server_data_node:Se(h)}),k={node:await l(),loader:l,universal:null,server:null,data:null};return await te({url:a,params:p,branch:[v,k],status:r,error:t,route:null})}function ne(r,t){if(ye(r,M))return;const a=tt(r.pathname);for(const u of s){const p=u.exec(a);if(p)return{id:r.pathname+r.search,invalidating:t,route:u,params:xt(p),url:r}}}function tt(r){return jt(r.slice(M.length)||"/")}function nt({url:r,type:t,intent:a,delta:u}){let p=!1;const h=pt(g,a,r,t);u!==void 0&&(h.navigation.delta=u);const m={...h.navigation,cancel:()=>{p=!0,h.reject(new Error("navigation was cancelled"))}};return R||c.before_navigate.forEach(v=>v(m)),p?null:h}async function pe({type:r,url:t,popped:a,keepfocus:u,noscroll:p,replace_state:h,state:m={},redirect_count:v=0,nav_token:k={},accept:b=ut,block:N=ut}){const U=ne(t,!1),y=nt({url:t,type:r,delta:a?.delta,intent:U});if(!y){N();return}const A=L,x=V;b(),R=!0,I&&G.navigating.set(y.navigation),Y=k;let O=U&&await Ae(U);if(!O){if(ye(t,M))return await Z(t);O=await rt(t,{id:null},await re(new Je(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=U?.url||t,Y!==k)return y.reject(new Error("navigation was aborted")),!1;if(O.type==="redirect")if(v>=20)O=await de({status:500,error:await re(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return fe(new URL(O.location,t).href,{},v+1,k),!1;else O.props.page.status>=400&&await G.updated.check()&&await Z(t);if(_.length=0,le=!1,$=!0,De(A),ze(x),O.props.page.url.pathname!==t.pathname&&(t.pathname=O.props.page.url.pathname),m=a?a.state:m,!a){const S=h?0:1,P={[B]:L+=S,[K]:V+=S};(h?me:lt).call(history,P,"",t),h||ft(L,V)}if(oe[L]=m,d=null,O.props.page.state=m,I){g=O.state,O.props.page&&(O.props.page.url=t);const S=(await Promise.all(c.on_navigate.map(P=>P(y.navigation)))).filter(P=>typeof P=="function");if(S.length>0){let P=function(){c.after_navigate=c.after_navigate.filter(T=>!S.includes(T))};S.push(P),c.after_navigate.push(...S)}F.$set(O.props),ee=!0}else Ze(O);const{activeElement:q}=document;await Pe();const H=a?a.scroll:p?Me():null;if(E){const S=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));H?scrollTo(H.x,H.y):S?S.scrollIntoView():scrollTo(0,0)}const J=document.activeElement!==q&&document.activeElement!==document.body;!u&&!J&&Ve(),E=!0,O.props.page&&(j=O.props.page),R=!1,r==="popstate"&&Ye(V),y.fulfil(void 0),c.after_navigate.forEach(S=>S(y.navigation)),G.navigating.set(null),$=!1}async function rt(r,t,a,u){return r.origin===ie&&r.pathname===location.pathname&&!w?await de({status:u,error:a,url:r,route:t}):await Z(r)}function Ot(){let r;f.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(r),r=setTimeout(()=>{u(m,2)},20)});function t(h){u(h.composedPath()[0],1)}f.addEventListener("mousedown",t),f.addEventListener("touchstart",t,{passive:!0});const a=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ue(m.target.href),a.unobserve(m.target))},{threshold:0});function u(h,m){const v=ot(h,f);if(!v)return;const{url:k,external:b,download:N}=Ue(v,M);if(b||N)return;const U=_e(v);if(!U.reload)if(m<=U.preload_data){const y=ne(k,!1);y&&Xe(y)}else m<=U.preload_code&&ue(k.pathname)}function p(){a.disconnect();for(const h of f.querySelectorAll("a")){const{url:m,external:v,download:k}=Ue(h,M);if(v||k)continue;const b=_e(h);b.reload||(b.preload_code===ve.viewport&&a.observe(h),b.preload_code===ve.eager&&ue(m.pathname))}}c.after_navigate.push(p),p()}function re(r,t){if(r instanceof we)return r.body;const a=ge(r),u=ln(r);return e.hooks.handleError({error:r,event:t,status:a,message:u})??{message:u}}return{after_navigate:r=>{Ie(()=>(c.after_navigate.push(r),()=>{const t=c.after_navigate.indexOf(r);c.after_navigate.splice(t,1)}))},before_navigate:r=>{Ie(()=>(c.before_navigate.push(r),()=>{const t=c.before_navigate.indexOf(r);c.before_navigate.splice(t,1)}))},on_navigate:r=>{Ie(()=>(c.on_navigate.push(r),()=>{const t=c.on_navigate.indexOf(r);c.on_navigate.splice(t,1)}))},disable_scroll_handling:()=>{($||!I)&&(E=!1)},goto:(r,t={})=>(r=ae(r),r.origin!==ie?Promise.reject(new Error("goto: invalid URL")):fe(r,t,0)),invalidate:r=>{if(typeof r=="function")_.push(r);else{const{href:t}=new URL(r,location.href);_.push(a=>a.href===t)}return Ke()},invalidate_all:()=>(le=!0,Ke()),preload_data:async r=>{const t=ae(r),a=ne(t,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);const u=await Xe(a);if(u.type==="redirect")return{type:u.type,location:u.location};const{status:p,data:h}=u.props.page??j;return{type:u.type,status:p,data:h}},preload_code:r=>ue(r),push_state:(r,t)=>{const a={[B]:L+=1,[K]:V,[Ne]:j.url.href};lt.call(history,a,"",ae(r)),j={...j,state:t},F.$set({page:j}),oe[L]=t,ft(L,V)},replace_state:(r,t)=>{const a={[B]:L,[K]:V,[Ne]:j.url.href};me.call(history,a,"",ae(r)),j={...j,state:t},F.$set({page:j}),oe[L]=t},apply_action:async r=>{if(r.type==="error"){const t=new URL(location.href),{branch:a,route:u}=g;if(!u)return;const p=await et(g.branch.length,a,u.errors);if(p){const h=await te({url:t,params:g.params,branch:a.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:u});g=h.state,F.$set(h.props),Pe().then(Ve)}}else r.type==="redirect"?fe(r.location,{invalidateAll:!0},0):(F.$set({form:null,page:{...j,form:r.data,status:r.status}}),await Pe(),F.$set({form:r.data}),r.type==="success"&&Ve())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(We(),!R){const u=pt(g,void 0,null,"leave"),p={...u.navigation,cancel:()=>{a=!0,u.reject(new Error("navigation was cancelled"))}};c.before_navigate.forEach(h=>h(p))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&We()}),navigator.connection?.saveData||Ot(),f.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=ot(t.composedPath()[0],f);if(!a)return;const{url:u,external:p,target:h,download:m}=Ue(a,M);if(!u)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const v=_e(a);if(!(a instanceof SVGAElement)&&u.protocol!==location.protocol&&!(u.protocol==="https:"||u.protocol==="http:")||m)return;if(p||v.reload){nt({url:u,type:"link"})?R=!0:t.preventDefault();return}const[b,N]=u.href.split("#");if(N!==void 0&&b===je(location)){if(g.url.hash===u.hash){t.preventDefault(),a.ownerDocument.getElementById(N)?.scrollIntoView();return}if(D=!0,De(L),r(u),!v.replace_state)return;D=!1}t.preventDefault(),pe({type:"link",url:u,keepfocus:v.keepfocus,noscroll:v.noscroll,replace_state:v.replace_state??u.href===location.href})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),u=t.submitter;if((u?.formMethod||a.method)!=="get")return;const h=new URL(u?.hasAttribute("formaction")&&u?.formAction||a.action);if(ye(h,M))return;const m=t.target,v=_e(m);if(v.reload)return;t.preventDefault(),t.stopPropagation();const k=new FormData(m),b=u?.getAttribute("name");b&&k.append(b,u?.getAttribute("value")??""),h.search=new URLSearchParams(k).toString(),pe({type:"form",url:h,keepfocus:v.keepfocus,noscroll:v.noscroll,replace_state:v.replace_state??h.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[B]){const a=t.state[B];if(Y={},a===L)return;const u=z[a],p=oe[a]??{},h=new URL(t.state[Ne]??location.href),m=t.state[K],v=je(location)===je(g.url);if(m===V&&(ee||v)){r(h),z[L]=Me(),u&&scrollTo(u.x,u.y),p!==j.state&&(j={...j,state:p},F.$set({page:j})),L=a;return}const b=a-L;await pe({type:"popstate",url:h,popped:{state:p,scroll:u,delta:b},accept:()=>{L=a,V=m},block:()=>{history.go(-b)},nav_token:Y})}else if(!D){const a=new URL(location.href);r(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,me.call(history,{...history.state,[B]:++L,[K]:V},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&G.navigating.set(null)});function r(t){g.url=t,G.page.set({...j,url:t}),G.page.notify()}},_hydrate:async({status:r=200,error:t,node_ids:a,params:u,route:p,data:h,form:m})=>{w=!0;const v=new URL(location.href);({params:u={},route:p={id:null}}=ne(v,!1)||{});let k;try{const b=a.map(async(y,A)=>{const x=h[A];return x?.uses&&(x.uses=At(x.uses)),ke({loader:e.nodes[y],url:v,params:u,route:p,parent:async()=>{const O={};for(let q=0;q<A;q+=1)Object.assign(O,(await b[q]).data);return O},server_data_node:Se(x)})}),N=await Promise.all(b),U=s.find(({id:y})=>y===p.id);if(U){const y=U.layouts;for(let A=0;A<y.length;A++)y[A]||N.splice(A,0,void 0)}k=await te({url:v,params:u,branch:N,status:r,error:t,form:m,route:U??null})}catch(b){if(b instanceof ct){await Z(new URL(b.location,location.href));return}k=await de({status:ge(b),error:await re(b,{url:v,params:u,route:p}),url:v,route:p})}k.props.page&&(k.props.page.state={}),Ze(k)}}}async function dt(e,n){const s=new URL(e);s.pathname=Dt(e.pathname),e.pathname.endsWith("/")&&s.searchParams.append(sn,"1"),s.searchParams.append(on,n.map(l=>l?"1":"0").join(""));const o=await ht(s.href);if(!o.ok){let l;throw o.headers.get("content-type")?.includes("application/json")?l=await o.json():o.status===404?l="Not Found":o.status===500&&(l="Internal Error"),new we(o.status,l)}return new Promise(async l=>{const f=new Map,_=o.body.getReader(),i=new TextDecoder;function d(g){return kt(g,{Promise:w=>new Promise((I,E)=>{f.set(w,{fulfil:I,reject:E})})})}let c="";for(;;){const{done:g,value:w}=await _.read();if(g&&!c)break;for(c+=!w&&c?`
`:i.decode(w);;){const I=c.indexOf(`
`);if(I===-1)break;const E=JSON.parse(c.slice(0,I));if(c=c.slice(I+1),E.type==="redirect")return l(E);if(E.type==="data")E.nodes?.forEach($=>{$?.type==="data"&&($.uses=At($.uses),$.data=d($.data))}),l(E);else if(E.type==="chunk"){const{id:$,data:R,error:D}=E,ee=f.get($);f.delete($),D?ee.reject(d(D)):ee.fulfil(d(R))}}}})}function At(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Ve(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,s=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),s!==null?n.setAttribute("tabindex",s):n.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const l=[];for(let f=0;f<o.rangeCount;f+=1)l.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===l.length){for(let f=0;f<o.rangeCount;f+=1){const _=l[f],i=o.getRangeAt(f);if(_.commonAncestorContainer!==i.commonAncestorContainer||_.startContainer!==i.startContainer||_.endContainer!==i.endContainer||_.startOffset!==i.startOffset||_.endOffset!==i.endOffset)return}o.removeAllRanges()}})}}}function pt(e,n,s,o){let l,f;const _=new Promise((d,c)=>{l=d,f=c});return _.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:s&&{params:n?.params??null,route:{id:n?.route?.id??null},url:s},willUnload:!n,type:o,complete:_},fulfil:l,reject:f}}async function pn(e,n,s){const o=fn(e,n);cn({client:o}),s?await o._hydrate(s):o.goto(location.href,{replaceState:!0}),o._start_router()}export{pn as start};
