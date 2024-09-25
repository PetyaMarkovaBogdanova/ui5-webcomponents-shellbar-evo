"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2820],{568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>h,toc:()=>u});var s=t(31085),i=t(71184);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n<body style="background-color: var(--sapBackgroundColor)">\n\x3c!-- playground-fold-end --\x3e\n\n    <ui5-bar design="Header">\n        <ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>\n        <ui5-label id="basic-label">Content</ui5-label>\n        <ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>\n    </ui5-bar>\n\x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n</html>\n\x3c!-- playground-fold-end --\x3e\n\n',r='import "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Bar.js";\nimport "@ui5/webcomponents-icons/dist/home.js"\nimport "@ui5/webcomponents-icons/dist/action-settings.js"\n';function d(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:o,js:r})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const a={ui5_tag_name:"ui5-bar",ui5_since:"1.0.0-rc.11"},c=void 0,h={id:"components/main/Bar",title:"Bar",description:"The Bar is a container which is primarily used to hold titles, buttons and input elements",source:"@site/docs/components/main/Bar.mdx",sourceDirName:"components/main",slug:"/components/main/Bar",permalink:"/ui5-webcomponents/components/main/Bar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{ui5_tag_name:"ui5-bar",ui5_since:"1.0.0-rc.11"},sidebar:"componentsSidebar",previous:{title:"AvatarGroup",permalink:"/ui5-webcomponents/components/AvatarGroup"},next:{title:"Breadcrumbs",permalink:"/ui5-webcomponents/components/Breadcrumbs"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"design",id:"design",level:3},{value:"Slots",id:"slots",level:2},{value:"startContent",id:"startcontent",level:3},{value:"default",id:"default",level:3},{value:"endContent",id:"endcontent",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function x(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Bar is a container which is primarily used to hold titles, buttons and input elements\nand its design and functionality is the basis for page headers and footers.\nThe component consists of three areas to hold its content - startContent slot, default slot and endContent slot.\nIt has the capability to center content, such as a title, while having other components on the left and right side."}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior."]}),"\n",(0,s.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,s.jsx)(n.p,{children:"The default slot will be centered in the available space between the startContent and the endContent areas,\ntherefore it might not always be centered in the entire bar."}),"\n",(0,s.jsx)(n.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,s.jsx)(n.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,s.jsxs)(n.p,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,s.jsx)(n.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,s.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Bar.js";'})}),"\n",(0,s.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"design",children:"design"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the component's design."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"Header" | "Subheader" | "Footer" | "FloatingFooter"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"Header"'})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(n.h3,{id:"startcontent",children:"startContent"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the content at the start of the bar."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the content in the middle of the bar."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"endcontent",children:"endContent"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the content at the end of the bar."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.p,{children:"No events available for this component."}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,s.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bar"}),(0,s.jsx)(n.td,{children:"Used to style the wrapper of the content of the component"})]})})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(14041);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);