"use strict";import{attachLanguageChange as g}from"../locale/languageChange.js";import h from"../locale/getLocale.js";import{DEFAULT_LOCALE as a,SUPPORTED_LOCALES as L}from"../generated/AssetParameters.js";import{getFeature as w}from"../FeaturesRegistry.js";const f=new Map,s=new Map,i=new Map,D=new Set;let d=!1;const O={iw:"he",ji:"yi",in:"id"},l=t=>{d||(console.warn(`[LocaleData] Supported locale "${t}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),d=!0)},R=(t,e,n)=>{t=t&&O[t]||t,t==="no"&&(t="nb"),t==="zh"&&!e&&(n==="Hans"?e="CN":n==="Hant"&&(e="TW")),(t==="sh"||t==="sr"&&n==="Latn")&&(t="sr",e="Latn");let r=`${t}_${e}`;return L.includes(r)?s.has(r)?r:(l(r),a):(r=t,L.includes(r)?s.has(r)?r:(l(r),a):a)},m=(t,e)=>{f.set(t,e)},S=t=>{s.has(t)||(t=a);const e=f.get(t);if(!e)throw new Error(`CLDR data for locale ${t} is not loaded!`);return e},_=t=>{if(!i.get(t)){const e=s.get(t);if(!e)throw new Error(`CLDR data for locale ${t} is not loaded!`);i.set(t,e(t))}return i.get(t)},u=async(t,e,n)=>{const r=R(t,e,n),p=w("OpenUI5Support");if(p){const o=p.getLocaleDataObject();if(o){m(r,o);return}}try{const o=await _(r);m(r,o)}catch(o){const c=o;D.has(c.message)||(D.add(c.message),console.error(c.message))}},C=(t,e)=>{s.set(t,e)};C("en",async()=>(await fetch("https://sdk.openui5.org/1.120.17/resources/sap/ui/core/cldr/en.json")).json()),g(()=>{const t=h();return u(t.getLanguage(),t.getRegion(),t.getScript())});export{C as registerLocaleDataLoader,u as fetchCldr,S as getLocaleData};
//# sourceMappingURL=LocaleData.js.map
