"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6847],{89641:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var n=t(31085),i=t(71184);const d={title:"Using Assets"},c="Using Additional Assets",o={id:"docs/advanced/using-assets",title:"Using Assets",description:"Most UI5 Web Components packages offer additional assets. This section explains what these are and how to use them.",source:"@site/docs/docs/2-advanced/04-using-assets.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/using-assets",permalink:"/ui5-webcomponents/docs/advanced/using-assets",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using Assets"},sidebar:"documentationSidebar",previous:{title:"Using Icons",permalink:"/ui5-webcomponents/docs/advanced/using-icons"},next:{title:"Using Features",permalink:"/ui5-webcomponents/docs/advanced/using-features"}},r={},a=[{value:"What Are Additional Assets",id:"what-are-additional-assets",level:2},{value:"Importing Additional Assets",id:"importing-additional-assets",level:2},{value:"Technical Aspects",id:"technical-aspects",level:2},{value:"Assets.js",id:"assetsjs",level:3},{value:"Assets-fetch.js",id:"assets-fetchjs",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"using-additional-assets",children:"Using Additional Assets"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["Most UI5 Web Components packages offer ",(0,n.jsx)(s.strong,{children:"additional assets"}),". This section explains what these are and how to use them."]})}),"\n",(0,n.jsx)(s.h2,{id:"what-are-additional-assets",children:"What Are Additional Assets"}),"\n",(0,n.jsxs)(s.p,{children:["These are ",(0,n.jsx)(s.strong,{children:"themes"}),", ",(0,n.jsx)(s.strong,{children:"text translations"}),", ",(0,n.jsx)(s.strong,{children:"locale data"})," etc. that are not shipped as part of the components/icons themselves, but can be loaded separately, if needed."]}),"\n",(0,n.jsxs)(s.p,{children:["These assets are important for ",(0,n.jsx)(s.strong,{children:"accessibility"})," and ",(0,n.jsx)(s.strong,{children:"globalization"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"importing-additional-assets",children:"Importing Additional Assets"}),"\n",(0,n.jsxs)(s.p,{children:["Import the ",(0,n.jsx)(s.code,{children:"dist/Assets.js"})," file of the respective NPM package:"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:'import "@ui5/<PACKAGE-NAME>/dist/Assets.js'}),"\n",(0,n.jsx)(s.code,{children:'import "@ui5/<PACKAGE-NAME>/dist/Assets-fetch.js'})]}),"\n",(0,n.jsx)(s.p,{children:'** Note: read "Techcnocal aspects" below on how to choose which one to use**'}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Project"}),(0,n.jsx)(s.th,{children:"NPM Package"}),(0,n.jsx)(s.th,{children:"Assets"}),(0,n.jsx)(s.th,{children:"Module"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"main"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents",children:"@ui5/webcomponents"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"i18n"}),", ",(0,n.jsx)(s.code,{children:"themes"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"@ui5/webcomponents/dist/Assets.js"})}),(0,n.jsxs)(s.td,{children:["Theming parameters and translations for the components  ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsxs)(s.em,{children:["Automatically imports also:",(0,n.jsx)("br",{})," ",(0,n.jsx)(s.code,{children:"@ui5/webcomponents-localization/dist/Assets.js"})," ",(0,n.jsx)("br",{})," and ",(0,n.jsx)("br",{})," ",(0,n.jsx)(s.code,{children:"@ui5/webcomponents-theming/dist/Assets.js"})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"fiori"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-fiori",children:"@ui5/webcomponents-fiori"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"i18n"}),", ",(0,n.jsx)(s.code,{children:"themes"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"@ui5/webcomponents-fiori/dist/Assets.js"})}),(0,n.jsxs)(s.td,{children:["Theming parameters and translations for the components  ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsxs)(s.em,{children:["Automatically imports also:",(0,n.jsx)("br",{})," ",(0,n.jsx)(s.code,{children:"@ui5/webcomponents/dist/Assets.js"})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"icons"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons",children:"@ui5/webcomponents-icons"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"i18n"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"@ui5/webcomponents-icons/dist/Assets.js"})}),(0,n.jsx)(s.td,{children:'Translations for the tooltips / "aria labels" of several icons'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"icons-tnt"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt",children:"@ui5/webcomponents-icons-tnt"})}),(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"icons-business-suite"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite",children:"@ui5/webcomponents-icons-business-suite"})}),(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"localization"})," *"]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-localization",children:"@ui5/webcomponents-localization"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CLDR"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"@ui5/webcomponents-localization/dist/Assets.js"})}),(0,n.jsxs)(s.td,{children:["Locale data, needed for date/time/currency-related components ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(s.em,{children:"You don't need to import the assets of this package directly."})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"theming"})," *"]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-theming",children:"@ui5/webcomponents-theming"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"themes"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"@ui5/webcomponents-theming/dist/Assets.js"})}),(0,n.jsxs)(s.td,{children:["Additional themes' base parameters ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(s.em,{children:"You don't need to import the assets of this package directly."})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"*"})," Only listed for completeness, included automatically by other packages."]}),"\n",(0,n.jsx)(s.p,{children:"For example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:'import "@ui5/webcomponents/dist/Assets.js";\n'})}),"\n",(0,n.jsx)(s.p,{children:"and use:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:"<ui5-date-picker></ui5-date-picker>\n"})}),"\n",(0,n.jsx)(s.p,{children:"with another language and another theme:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:'import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";\nimport { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";\n\nsetLanguage("es");\nsetTheme("sap_fiori_3_hcb");\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"ui5-date-picker"})," component will have all translatable texts in Spanish, and the Spanish format settings (e.g. date format) will be used, and will be rendered with the ",(0,n.jsx)(s.code,{children:"sap_fiori_3_hcb"})," accessibility theme instead of the default theme."]}),"\n",(0,n.jsx)(s.h2,{id:"technical-aspects",children:"Technical Aspects"}),"\n",(0,n.jsxs)(s.p,{children:["Additional assets are ",(0,n.jsx)(s.code,{children:".json"})," files with the respective data."]}),"\n",(0,n.jsx)(s.p,{children:"There are two ways to reference them."}),"\n",(0,n.jsx)(s.h3,{id:"assetsjs",children:"Assets.js"}),"\n",(0,n.jsxs)(s.p,{children:["When you import the ",(0,n.jsx)(s.code,{children:"dist/Assets.js"})," file of a given package, assets are only ",(0,n.jsx)(s.strong,{children:"registered"}),", but not yet fetched. When they are needed, they are loaded on the fly with ",(0,n.jsx)(s.strong,{children:"dymamic imports"}),", and then used. This only works with bundlers which copy the JSON file as a JS file and rewrite the import URL to the correct location."]}),"\n",(0,n.jsx)(s.p,{children:"One drawback with this is that it doesn't work with CDN usage when the JSON files are hosted directly as JSON - the import expects a JS file and the browser gets a JSON content-type back with leads to an error."}),"\n",(0,n.jsx)(s.p,{children:"Use this approach only with a bundler."}),"\n",(0,n.jsx)(s.h3,{id:"assets-fetchjs",children:"Assets-fetch.js"}),"\n",(0,n.jsxs)(s.p,{children:["When you import the ",(0,n.jsx)(s.code,{children:"dist/Assets-fetch.js"})," file of a given package, assets are only ",(0,n.jsx)(s.strong,{children:"registered"}),", but not yet fetched. When they are needed, they are loaded on the fly with ",(0,n.jsx)(s.strong,{children:"fetch"}),", and then used."]}),"\n",(0,n.jsxs)(s.p,{children:["The issue is how to get the correct URL for the fetch to work and this is solved by using ",(0,n.jsx)(s.code,{children:"import.meta.url"})," to resolve a relative path from a module to a JSON file"]}),"\n",(0,n.jsx)(s.p,{children:"The approach can be used with a bundler and for CDN usage."})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},71184:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(14041);const i={},d=n.createContext(i);function c(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);