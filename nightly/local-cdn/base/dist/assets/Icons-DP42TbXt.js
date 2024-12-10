(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const O={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},x=O.themes.default,pt=O.themes.all,v=O.languages.default,h=O.locales.default,pe=O.locales.all,mt=typeof document>"u",Ut=()=>{if(mt)return v;const e=navigator.languages,t=()=>navigator.language;return e&&e[0]||t()||v};var Fe={},xe=Fe.hasOwnProperty,wt=Fe.toString,Be=xe.toString,yt=Be.call(Object),me=function(e){var t,n;return!e||wt.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=xe.call(t,"constructor")&&t.constructor,typeof n=="function"&&Be.call(n)===yt):!0)},St=Object.create(null),ze=function(e,t,n,s){var r,o,a,c,g,y,p=arguments[2]||{},X=3,ht=arguments.length,ge=arguments[0]||!1,gt=arguments[1]?void 0:St;for(typeof p!="object"&&typeof p!="function"&&(p={});X<ht;X++)if((g=arguments[X])!=null)for(c in g)r=p[c],a=g[c],!(c==="__proto__"||p===a)&&(ge&&a&&(me(a)||(o=Array.isArray(a)))?(o?(o=!1,y=r&&Array.isArray(r)?r:[]):y=r&&me(r)?r:{},p[c]=ze(ge,arguments[1],y,a)):a!==gt&&(p[c]=a));return p};const Ve=function(e,t){return ze(!0,!1,...arguments)};class T{constructor(){this._eventRegistry=new Map}attachEvent(t,n){const s=this._eventRegistry,r=s.get(t);if(!Array.isArray(r)){s.set(t,[n]);return}r.includes(n)||r.push(n)}detachEvent(t,n){const s=this._eventRegistry,r=s.get(t);if(!r)return;const o=r.indexOf(n);o!==-1&&r.splice(o,1),r.length===0&&s.delete(t)}fireEvent(t,n){const r=this._eventRegistry.get(t);return r?r.map(o=>o.call(this,n)):[]}fireEventAsync(t,n){return Promise.all(this.fireEvent(t,n))}isHandlerAttached(t,n){const r=this._eventRegistry.get(t);return r?r.includes(n):!1}hasListeners(t){return!!this._eventRegistry.get(t)}}const je=new Map,_s=(e,t)=>{je.set(e,t)},b=e=>je.get(e),Ne=typeof document>"u",_t={search(){return Ne?"":window.location.search}},Ue=()=>Ne?"":window.location.href,At=()=>_t.search(),Et=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},bt=e=>{const t=Et("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},Ct=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},We=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,Ue()).toString();else{const n=new URL(e),s=n.origin;s&&bt(s)?t=n.toString():t=Ct(n.toString(),Ue())}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var ce;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(ce||(ce={}));const Tt=ce,vt=new T,Lt="configurationReset",W=e=>{vt.attachEvent(Lt,e)};let we=!1,u={animationMode:Tt.Full,theme:x,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1,defaultFontLoading:!0,enableDefaultTooltips:!0};const As=()=>(l(),u.animationMode),Pt=()=>(l(),u.theme),Ot=()=>(l(),u.themeRoot),Rt=()=>(l(),u.language),Dt=()=>(l(),u.fetchDefaultLanguage),Es=()=>(l(),u.noConflict),It=()=>(l(),u.defaultFontLoading),bs=()=>(l(),u.enableDefaultTooltips),Cs=()=>(l(),u.calendarType),Ts=()=>(l(),u.formatSettings),B=new Map;B.set("true",!0);B.set("false",!1);const $t=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(u=Ve(u,t))}},Mt=()=>{const e=new URLSearchParams(At());e.forEach((t,n)=>{const s=n.split("sap-").length;s===0||s===n.split("sap-ui-").length||ye(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&ye(n,t,"sap-ui")})},kt=e=>{const t=e.split("@")[1];return We(t)},Ft=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,ye=(e,t,n)=>{const s=t.toLowerCase(),r=e.split(`${n}-`)[1];B.has(t)&&(t=B.get(s)),r==="theme"?(u.theme=Ft(r,t),t&&t.includes("@")&&(u.themeRoot=kt(t))):u[r]=t},xt=()=>{const e=b("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();u=Ve(u,t)},l=()=>{typeof document>"u"||we||(Bt(),we=!0)},Bt=e=>{$t(),Mt(),xt()},Ze=new T,He="languageChange",Ge=e=>{Ze.attachEvent(He,e)},zt=e=>Ze.fireEventAsync(He,e),Se=10;class Vt{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const s=new Map;for(n=this.shift();n;){const r=s.get(n)||0;if(r>Se)throw new Error(`Web component processed too many times this task, max allowed is: ${Se}`);t(n),s.set(n,r+1),n=this.shift()}}}const jt=(e,t=document.body,n)=>{let s=document.querySelector(e);return s||(s=n?n():document.createElement(e),t.insertBefore(s,t.firstChild))},Nt=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},Wt=()=>typeof document>"u"?null:jt('meta[name="ui5-shared-resources"]',document.head,Nt),Z=(e,t)=>{const n=e.split(".");let s=Wt();if(!s)return t;for(let r=0;r<n.length;r++){const o=n[r],a=r===n.length-1;Object.prototype.hasOwnProperty.call(s,o)||(s[o]=a?t:{}),s=s[o]}return s},Zt={version:"2.5.0",major:2,minor:5,patch:0,suffix:"",isNext:!1,buildTime:1733837638};let Ht,Gt={include:[/^ui5-/],exclude:[]};const qt=()=>Ht,Kt=()=>Gt;let I,Jt="";const Y=new Map,z=Z("Runtimes",[]),Xt=()=>{if(I===void 0){I=z.length;const e=Zt;z.push({...e,get scopingSuffix(){return qt()},get registeredTags(){return qe()},get scopingRules(){return Kt()},alias:Jt,description:`Runtime ${I} - ver ${e.version}`})}},H=()=>I,Yt=(e,t)=>{const n=`${e},${t}`;if(Y.has(n))return Y.get(n);const s=z[e],r=z[t];if(!s||!r)throw new Error("Invalid runtime index supplied");if(s.isNext||r.isNext)return s.buildTime-r.buildTime;const o=s.major-r.major;if(o)return o;const a=s.minor-r.minor;if(a)return a;const c=s.patch-r.patch;if(c)return c;const y=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(s.suffix,r.suffix);return Y.set(n,y),y};Z("Tags",new Map);const Qt=new Set,qe=()=>[...Qt.values()],en=new Set,tn=e=>en.has(e),Ke=new Set,nn=new T,L=new Vt;let S,$,Q,R;const sn=async e=>{L.add(e),await on()},rn=e=>{nn.fireEvent("beforeComponentRender",e),Ke.add(e),e._render()},on=async()=>{R||(R=new Promise(e=>{window.requestAnimationFrame(()=>{L.process(rn),R=null,e(),Q||(Q=setTimeout(()=>{Q=void 0,L.isEmpty()&&fn()},200))})})),await R},an=()=>S||(S=new Promise(e=>{$=e,window.requestAnimationFrame(()=>{L.isEmpty()&&(S=void 0,e())})}),S),cn=()=>{const e=qe().map(t=>customElements.whenDefined(t));return Promise.all(e)},un=async()=>{await cn(),await an()},fn=()=>{L.isEmpty()&&$&&($(),$=void 0,S=void 0)},Je=async e=>{Ke.forEach(t=>{const n=t.constructor,s=n.getMetadata().getTag(),r=tn(n),o=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!e||e.tag===s||e.rtlAware&&r||e.languageAware&&o||e.themeAware&&a)&&sn(t)}),await un()},ln=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),dn=typeof document>"u",G=(e,t)=>t?`${e}|${t}`:e,hn=e=>e===void 0?!0:Yt(H(),parseInt(e))===1,q=(e,t,n="",s)=>{const r=typeof e=="string"?e:e.content,o=H(),a=new CSSStyleSheet;a.replaceSync(r),a._ui5StyleId=G(t,n),s&&(a._ui5RuntimeIndex=o,a._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]},gn=(e,t,n="",s)=>{const r=typeof e=="string"?e:e.content,o=H(),a=document.adoptedStyleSheets.find(c=>c._ui5StyleId===G(t,n));if(a)if(!s)a.replaceSync(r||"");else{const c=a._ui5RuntimeIndex;(a._ui5Theme!==s||hn(c))&&(a.replaceSync(r||""),a._ui5RuntimeIndex=String(o),a._ui5Theme=s)}},K=(e,t="")=>dn?!0:!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===G(e,t)),pn=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==G(e,t))},Xe=(e,t,n="",s)=>{K(t,n)?gn(e,t,n,s):q(e,t,n,s)},mn=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}},Un={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`},wn={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"};let M;W(()=>{M=void 0});const yn=()=>(M===void 0&&(M=It()),M),Sn=()=>{const e=b("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&_n(),An()},_n=()=>{const e=document.querySelector("head>style[data-ui5-font-face]");!yn()||e||K("data-ui5-font-face")||q(Un,"data-ui5-font-face")},An=()=>{K("data-ui5-font-face-override")||q(wn,"data-ui5-font-face-override")},En={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}"},bn=()=>{K("data-ui5-system-css-vars")||q(En,"data-ui5-system-css-vars")},Ye=new T,Qe="themeRegistered",Cn=e=>{Ye.attachEvent(Qe,e)},Tn=e=>Ye.fireEvent(Qe,e),_e=new Map,et=new Map,vn=new Map,tt=new Set,V=new Set,vs=(e,t,n)=>{et.set(`${e}/${t}`,n),tt.add(e),V.add(t),Tn(t)},nt=async(e,t,n)=>{const s=`${e}_${t}_${n||""}`,r=_e.get(s);if(r!==void 0)return r;if(!V.has(t)){const g=[...V.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${x}. Registered themes are: ${g}`),ee(e,x)}const[o,a]=await Promise.all([ee(e,t),n?ee(e,n,!0):void 0]),c=mn(o,a);return c&&_e.set(s,c),c},ee=async(e,t,n=!1)=>{const r=(n?vn:et).get(`${e}/${t}`);if(!r){n||console.error(`Theme [${t}] not registered for package [${e}]`);return}let o;try{o=await r(t)}catch(c){console.error(e,c.message);return}return o._||o},st=()=>tt,Ln=e=>V.has(e),_=new Set,Pn=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},On=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let n=t[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{_.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),_.add("decode"));return}try{return JSON.parse(n)}catch{_.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),_.add("parse"))}}},Rn=e=>{let t,n;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],n=e.Extends[0]}catch{_.has("object")||(console.warn("Malformed theme metadata Object",e),_.add("object"));return}return{themeName:t,baseThemeName:n}},ue=()=>{const e=Pn();if(!e||e==="none")return;const t=On(e);if(t)return Rn(t)},Dn=new T,In="themeLoaded",$n=e=>Dn.fireEvent(In,e),Mn=(e,t)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",t&&Object.entries(t).forEach(s=>n.setAttribute(...s)),n.href=e,document.head.appendChild(n),new Promise(s=>{n.addEventListener("load",s),n.addEventListener("error",s)})};let A;W(()=>{A=void 0});const rt=()=>(A===void 0&&(A=Ot()),A),Ls=e=>{if(A!==e){if(A=e,!We(e)){console.warn(`The ${e} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);return}return ot(C())}},kn=e=>`${rt()}Base/baseLib/${e}/css_variables.css`,ot=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await Mn(kn(e),{"sap-ui-webcomponents-theme":e})},P="@ui5/webcomponents-theming",Fn=()=>st().has(P),xn=async e=>{if(!Fn())return;const t=await nt(P,e);t&&Xe(t,"data-ui5-theme-properties",P,e)},Bn=()=>{pn("data-ui5-theme-properties",P)},zn=async(e,t)=>{const s=[...st()].map(async r=>{if(r===P)return;const o=await nt(r,e,t);o&&Xe(o,`data-ui5-component-properties-${H()}`,r)});return Promise.all(s)},Vn=async e=>{var s;const t=ue();if(t)return t;const n=b("OpenUI5Support");if(n&&n.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(s=n.getConfigurationSettingsObject())==null?void 0:s.theme,baseThemeName:""}}else if(rt())return await ot(e),ue()},fe=async e=>{const t=await Vn(e);!t||e!==t.themeName?await xn(e):Bn();const n=Ln(e)?e:t&&t.baseThemeName;await zn(n||x,t&&t.themeName===e?e:void 0),$n(e)};let w;W(()=>{w=void 0});const C=()=>(w===void 0&&(w=Pt()),w),Ps=async e=>{w!==e&&(w=e,it()&&(await fe(w),await Je({themeAware:!0})))},jn=()=>{var t,n;const e=C();return Nn(e)?!e.startsWith("sap_horizon"):!((n=(t=ue())==null?void 0:t.baseThemeName)!=null&&n.startsWith("sap_horizon"))},Nn=e=>pt.includes(e),f=typeof document>"u",i={get userAgent(){return f?"":navigator.userAgent},get touch(){return f?!1:"ontouchstart"in window||navigator.maxTouchPoints>0},get chrome(){return f?!1:/(Chrome|CriOS)/.test(i.userAgent)},get firefox(){return f?!1:/Firefox/.test(i.userAgent)},get safari(){return f?!1:!i.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(i.userAgent)},get webkit(){return f?!1:/webkit/.test(i.userAgent)},get windows(){return f?!1:navigator.platform.indexOf("Win")!==-1},get macOS(){return f?!1:!!navigator.userAgent.match(/Macintosh|Mac OS X/i)},get iOS(){return f?!1:!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(i.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){return f?!1:!i.windows&&/Android/.test(i.userAgent)},get androidPhone(){return f?!1:i.android&&/(?=android)(?=.*mobile)/i.test(i.userAgent)},get ipad(){return f?!1:/ipad/i.test(i.userAgent)||/Macintosh/i.test(i.userAgent)&&"ontouchend"in document},_isPhone(){return Hn(),i.touch&&!U}};let te,ne,U;const Wn=()=>{if(f||!i.windows)return!1;if(te===void 0){const e=i.userAgent.match(/Windows NT (\d+).(\d)/);te=e?parseFloat(e[1]):0}return te>=8},Zn=()=>{if(f||!i.webkit)return!1;if(ne===void 0){const e=i.userAgent.match(/(webkit)[ /]([\w.]+)/);ne=e?parseFloat(e[1]):0}return ne>=537.1},Hn=()=>{if(f)return!1;if(U===void 0){if(i.ipad){U=!0;return}if(i.touch){if(Wn()){U=!0;return}if(i.chrome&&i.android){U=!/Mobile Safari\/[.0-9]+/.test(i.userAgent);return}let e=window.devicePixelRatio?window.devicePixelRatio:1;i.android&&Zn()&&(e=1),U=Math.min(window.screen.width/e,window.screen.height/e)>=600;return}U=i.userAgent.indexOf("Touch")!==-1||i.android&&!i.androidPhone}},Gn=()=>i.safari,qn=()=>i.iOS;let Ae=!1;const Kn=()=>{Gn()&&qn()&&!Ae&&(document.body.addEventListener("touchstart",()=>{}),Ae=!0)};let J=!1,D;const at=new T,it=()=>J,Os=e=>{if(!J){at.attachEvent("boot",e);return}e()},Rs=async()=>{if(D!==void 0)return D;const e=async t=>{if(Xt(),typeof document>"u"){t();return}Cn(Jn);const n=b("OpenUI5Support"),s=n?n.isOpenUI5Detected():!1,r=b("F6Navigation");n&&await n.init(),r&&!s&&r.init(),await ln(),await fe(C()),n&&n.attachListeners(),Sn(),bn(),Kn(),t(),J=!0,at.fireEvent("boot")};return D=new Promise(e),D},Jn=e=>{J&&e===C()&&fe(C())};let E,k;W(()=>{E=void 0,k=void 0});const Xn=()=>(E===void 0&&(E=Rt()),E),Ds=async e=>{E!==e&&(E=e,await zt(e),it()&&await Je({languageAware:!0}))},Yn=()=>(k===void 0&&(k=Dt()),k),Qn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class ct{constructor(t){const n=Qn.exec(t.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${t} does not adhere to BCP-47.`);this.sLocaleId=t,this.sLanguage=n[1]||v,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,s=>s.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(t){return this.getPrivateUseSubtags().indexOf(t)>=0}toString(){const t=[this.sLanguage];return this.sScript&&t.push(this.sScript),this.sRegion&&t.push(this.sRegion),this.sVariant&&t.push(this.sVariant),this.sExtension&&t.push(this.sExtension),this.sPrivateUse&&t.push(this.sPrivateUse),t.join("-")}}const se=new Map,ut=e=>(se.has(e)||se.set(e,new ct(e)),se.get(e)),es=e=>{try{if(e&&typeof e=="string")return ut(e)}catch{}return new ct(h)},F=e=>{const t=Xn();return t?ut(t):es(Ut())},ts=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,Ee=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,ns={he:"iw",yi:"ji",nb:"no",sr:"sh"},ss=e=>{let t;if(!e)return h;if(typeof e=="string"&&(t=ts.exec(e.replace(/_/g,"-")))){let n=t[1].toLowerCase(),s=t[3]?t[3].toUpperCase():void 0;const r=t[2]?t[2].toLowerCase():void 0,o=t[4]?t[4].slice(1):void 0,a=t[6];return n=ns[n]||n,a&&(t=Ee.exec(a))||o&&(t=Ee.exec(o))?`en_US_${t[1].toLowerCase()}`:(n==="zh"&&!s&&(r==="hans"?s="CN":r==="hant"&&(s="TW")),n+(s?"_"+s+(o?"_"+o.replace("-","_"):""):""))}return h},rs=e=>{if(!e)return h;if(e==="zh_HK")return"zh_TW";const t=e.lastIndexOf("_");return t>=0?e.slice(0,t):e!==h?h:""},be=new Set,Ce=new Set,le=new Map,re=new Map,de=new Map,Is=(e,t,n)=>{const s=`${e}/${t}`;de.set(s,n)},Te=(e,t)=>{le.set(e,t)},$s=e=>le.get(e),ft=(e,t)=>{const n=`${e}/${t}`;return de.has(n)},os=(e,t)=>{const n=`${e}/${t}`,s=de.get(n);return s&&!re.get(n)&&re.set(n,s(t)),re.get(n)},as=e=>{be.has(e)||(console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),be.add(e))},ve=(e,t)=>t!==v&&!ft(e,t),is=async e=>{const t=F().getLanguage(),n=F().getRegion(),s=F().getVariant();let r=t+(n?`-${n}`:"")+(s?`-${s}`:"");if(ve(e,r))for(r=ss(r);ve(e,r);)r=rs(r);const o=Yn();if(r===v&&!o){Te(e,null);return}if(!ft(e,r)){as(e);return}try{const a=await os(e,r);Te(e,a)}catch(a){const c=a;Ce.has(c.message)||(Ce.add(c.message),console.error(c.message))}};Ge(e=>{const t=[...le.keys()];return Promise.all(t.map(is))});const cs=new Map,j=new Map,oe=new Map,Le=new Set;let Pe=!1;const us={iw:"he",ji:"yi",in:"id"},Oe=e=>{Pe||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),Pe=!0)},fs=(e,t,n)=>{e=e&&us[e]||e,e==="no"&&(e="nb"),e==="zh"&&!t&&(n==="Hans"?t="CN":n==="Hant"&&(t="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr",t="Latn");let s=`${e}_${t}`;return pe.includes(s)||(s=e,pe.includes(s))?j.has(s)?s:(Oe(s),h):h},Re=(e,t)=>{cs.set(e,t)},ls=e=>{if(!oe.get(e)){const t=j.get(e);if(!t)throw new Error(`CLDR data for locale ${e} is not loaded!`);oe.set(e,t(e))}return oe.get(e)},ds=async(e,t,n)=>{const s=fs(e,t,n),r=b("OpenUI5Support");if(r){const o=r.getLocaleDataObject();if(o){Re(s,o);return}}try{const o=await ls(s);Re(s,o)}catch(o){const a=o;Le.has(a.message)||(Le.add(a.message),console.error(a.message))}},hs=(e,t)=>{j.set(e,t)};hs("en",async()=>(await fetch("https://sdk.openui5.org/1.120.17/resources/sap/ui/core/cldr/en.json")).json());Ge(()=>{const e=F();return ds(e.getLanguage(),e.getRegion(),e.getScript())});var N;(function(e){e["SAP-icons"]="SAP-icons-v4",e.horizon="SAP-icons-v5",e["SAP-icons-TNT"]="tnt",e.BusinessSuiteInAppSymbols="business-suite"})(N||(N={}));const lt=e=>N[e]?N[e]:e;var m;(function(e){e.SAPIconsV4="SAP-icons-v4",e.SAPIconsV5="SAP-icons-v5",e.SAPIconsTNTV2="tnt-v2",e.SAPIconsTNTV3="tnt-v3",e.SAPBSIconsV1="business-suite-v1",e.SAPBSIconsV2="business-suite-v2"})(m||(m={}));const d=new Map;d.set("SAP-icons",{legacy:m.SAPIconsV4,sap_horizon:m.SAPIconsV5});d.set("tnt",{legacy:m.SAPIconsTNTV2,sap_horizon:m.SAPIconsTNTV3});d.set("business-suite",{legacy:m.SAPBSIconsV1,sap_horizon:m.SAPBSIconsV2});const gs=(e,t)=>{if(d.has(e)){d.set(e,{...t,...d.get(e)});return}d.set(e,t)},De=e=>{const t=jn()?"legacy":"sap_horizon";return d.has(e)?d.get(e)[t]:e},ps=new Map,ms=e=>ps.get(e),dt=e=>{const t=ms(C());return!e&&t?lt(t):De(e||"SAP-icons")},Us="legacy",Ie=new Map,he=Z("SVGIcons.registry",new Map),ae=Z("SVGIcons.promises",new Map),$e="ICON_NOT_FOUND",ws=async e=>{if(!ae.has(e)){if(!Ie.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=Ie.get(e);ae.set(e,t(e))}return ae.get(e)},Me=e=>{Object.keys(e.data).forEach(t=>{const n=e.data[t];ys(t,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:e.collection,packageName:e.packageName})})},ys=(e,t)=>{const n=`${t.collection}/${e}`;he.set(n,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})},Ss=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return[e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=lt(t)),{name:e,collection:t}},ie=async e=>{const{name:t,collection:n}=Ss(e);let s=$e;try{s=await ws(dt(n))}catch(o){console.error(o.message)}if(s===$e)return s;const r=ke(n,t);return r||(Array.isArray(s)?s.forEach(o=>{Me(o),gs(n,{[o.themeFamily||Us]:o.collection})}):Me(s),ke(n,t))},ke=(e,t)=>{const n=`${dt(e)}/${t}`;return he.get(n)},Ms=async()=>(await ie("edit"),await ie("tnt/arrow"),await ie("business-suite/3d"),Array.from(he.keys()));export{T as E,Ms as _,Os as a,Rs as b,_s as c,W as d,As as e,is as f,$s as g,K as h,Cs as i,bs as j,Es as k,Ts as l,b as m,Je as n,Xn as o,Ds as p,C as q,vs as r,Ps as s,rt as t,Ls as u,yn as v,H as w,Is as x,un as y};
