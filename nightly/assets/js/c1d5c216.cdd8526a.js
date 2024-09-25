"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1172],{78288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=t(31085),s=t(71184);const i={},c="Custom Fonts",r={id:"docs/advanced/fonts",title:"Custom Fonts",description:"During boot, the UI5 Web Components framework loads the necessary fonts to achieve the desired design of its components.",source:"@site/docs/docs/2-advanced/14-fonts.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/fonts",permalink:"/ui5-webcomponents/nightly/docs/advanced/fonts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Custom Themes",permalink:"/ui5-webcomponents/nightly/docs/advanced/theming-part2"},next:{title:"Using the Framework",permalink:"/ui5-webcomponents/nightly/docs/advanced/other-framework-level-APIs"}},d={},a=[{value:"Customizing Fonts",id:"customizing-fonts",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"custom-fonts",children:"Custom Fonts"}),"\n",(0,o.jsx)(n.p,{children:"During boot, the UI5 Web Components framework loads the necessary fonts to achieve the desired design of its components."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Important:"})," These fonts are fetched via network requests."]}),"\n",(0,o.jsx)(n.h2,{id:"customizing-fonts",children:"Customizing Fonts"}),"\n",(0,o.jsx)(n.p,{children:"There are several reasons why you might need to customize fonts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"To specify different paths for fonts (e.g., due to restrictions on public internet access)."}),"\n",(0,o.jsxs)(n.li,{children:["To include additional declarations within ",(0,o.jsx)(n.code,{children:"@font-face"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To download additional fonts, such as ",(0,o.jsx)(n.code,{children:"72-Light"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"To prevent the default fonts from being fetched."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To achieve this, you can prevent the fetching of default fonts by configuring ",(0,o.jsx)(n.code,{children:"setDefaultFontLoading (@ui5/webcomponents-base/dist/config/Fonts.js)"})," to ",(0,o.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import { getDefaultFontLoading, setDefaultFontLoading } from "@ui5/webcomponents-base/dist/config/Fonts.js";\n\nsetDefaultFontLoading(false);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then, specify the custom font you intend to use. When the UI5 Web Components framework initializes, it will refrain from fetching default fonts and instead use the ones you have provided."}),"\n",(0,o.jsxs)(n.p,{children:["To use the ",(0,o.jsx)(n.code,{children:"72-Light"})," font in your application and specify the ",(0,o.jsx)(n.code,{children:"font-display"})," setting, you should define the font in your application's styles."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<style type="text/css">\n    @font-face {\n        font-family: "72";\n        font-style: normal;\n        font-weight: 200;\n        font-display: swap;\n        src: local("72-Light"),\n        url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Light.woff2?ui5-webcomponents) format("woff2");\n    }\n</style>\n'})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(14041);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);