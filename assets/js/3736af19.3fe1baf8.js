"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7273],{36855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(31085),a=t(71184);const o={},r="Styling",c={id:"docs/advanced/styles",title:"Styling",description:"The article describes general patterns to style the UI5 Web Components.",source:"@site/docs/docs/2-advanced/11-styles.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/styles",permalink:"/ui5-webcomponents/docs/advanced/styles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Styling Scrollbars",permalink:"/ui5-webcomponents/docs/advanced/scrollbars-customization"},next:{title:"UI Theme Designer",permalink:"/ui5-webcomponents/docs/advanced/theming"}},i={},l=[{value:"Styles on Tag Level",id:"styles-on-tag-level",level:2},{value:"Usage of CSS Shadow Parts",id:"usage-of-css-shadow-parts",level:2},{value:"Changing CSS Variables",id:"changing-css-variables",level:2},{value:"Custom Theme Schema",id:"custom-theme-schema",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(n.p,{children:"The article describes general patterns to style the UI5 Web Components."}),"\n",(0,s.jsx)(n.p,{children:"One of the core principles of Web Components is the encapsulation. The HTML and styles are encapsulated in the Shadow DOM. This avoids clashes with any CSS brought by the rest of the application, but also makes customization harder. However, there are quite some options to apply custom styling."}),"\n",(0,s.jsx)(n.h2,{id:"styles-on-tag-level",children:"Styles on Tag Level"}),"\n",(0,s.jsx)(n.p,{children:"We designed some components such as Title, Label, Tag, Button, Input, and a few more in such a way that it is possible to set styles/classes on the custom elements that will take effect."}),"\n",(0,s.jsx)("b",{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"  ui5-input {\n    width: 150px;\n    color: yellow;\n    background: purple;\n  }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can try this yourself on the Input ",(0,s.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/main/playground/main/pages/Input/",children:"test page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately, this can't be done for all components because it depends on the complexity of the DOM structure."}),"\n",(0,s.jsx)(n.h2,{id:"usage-of-css-shadow-parts",children:"Usage of CSS Shadow Parts"}),"\n",(0,s.jsxs)(n.p,{children:["For more complex components, the styling on the tag level is not possible, therefore we introduced shadow parts on specific elements in the components\u2019 Shadow DOM that the user can restyle, using ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",children:"standard CSS syntax"})," for shadow parts."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{children:"For example:"})," You can change the appearance of the CardHeader status with the CSS shadow parts syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<ui5-card>\n\t<ui5-card-header\n        title-text="Quick Links"\n\t\tstatus="4 of 10"\n\t\tslot="header">\n\t</ui5-card-header>\n</ui5-card>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"ui5-card-header::part(status) {\n  color: red;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{children:"Note:"}),' All available shadow parts are described in the API reference as part of the "Overview" section of each component.']}),"\n",(0,s.jsx)(n.h2,{id:"changing-css-variables",children:"Changing CSS Variables"}),"\n",(0,s.jsxs)(n.p,{children:["The UI5 WebComponents leverage CSS variables, so if you inspect the elements inside the Shadow DOM, you will probably find which variable you need to change. Check the list of all ",(0,s.jsx)(n.a,{href:"https://github.com/SAP/theming-base-content/blob/master/content/Base/baseLib/sap_horizon/css_variables.css",children:"Global CSS Variables"})," that we use in the component. Altering them will change the component appearance."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{children:"For example:"})," You can change the button text color by overriding the ",(0,s.jsx)(n.code,{children:"--sapButton_TextColor"})," CSS variable as follows."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<ui5-button>Press</ui5-button>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"ui5-button {\n  --sapButton_TextColor: purple;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-theme-schema",children:"Custom Theme Schema"}),"\n",(0,s.jsx)(n.p,{children:"To change the entire colour scheme, users can create a custom theme.\nFor more information, see the next article."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(14041);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);