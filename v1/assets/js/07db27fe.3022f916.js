"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6172],{3380:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>j,contentTitle:()=>g,default:()=>y,frontMatter:()=>x,metadata:()=>v,toc:()=>b});var n=t(1085),o=t(1184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-side-navigation>\n\t\t<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>\n\t\t<ui5-side-navigation-group text="Group 1" expanded>\n\t\t\t<ui5-side-navigation-item text="External Link" icon="chain-link" href="https://sap.com" target="_blank"></ui5-side-navigation-item>\n\t\t\t<ui5-side-navigation-item text="People" expanded icon="group">\n\t\t\t\t<ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>\n\t\t\t\t<ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>\n\t\t\t</ui5-side-navigation-item>\n\t\t</ui5-side-navigation-group>\n\t\t<ui5-side-navigation-group text="Group 2" expanded>\n\t\t\t<ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>\n\t\t\t<ui5-side-navigation-item text="Locations" disabled icon="locate-me"></ui5-side-navigation-item>\n\t\t\t<ui5-side-navigation-item text="Events" icon="calendar">\n\t\t\t\t<ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>\n\t\t\t\t<ui5-side-navigation-sub-item text="External Link" href="https://sap.com" target="_blank"></ui5-side-navigation-sub-item>\n\t\t\t\t<ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>\n\t\t\t</ui5-side-navigation-item>\n\t\t</ui5-side-navigation-group>\n\t\t<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link">\n\t\t\t<ui5-side-navigation-sub-item text="External Link" href="https://sap.com" target="_blank"></ui5-side-navigation-sub-item>\n\t\t</ui5-side-navigation-item>\n\t\t<ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>\n    </ui5-side-navigation>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents-fiori/dist/SideNavigation.js";\nimport "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";\nimport "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";\n\nimport "@ui5/webcomponents-icons/dist/home.js";\nimport "@ui5/webcomponents-icons/dist/chain-link.js";\nimport "@ui5/webcomponents-icons/dist/group.js";\nimport "@ui5/webcomponents-icons/dist/locate-me.js";\nimport "@ui5/webcomponents-icons/dist/calendar.js";\nimport "@ui5/webcomponents-icons/dist/history.js";\nimport "@ui5/webcomponents-icons/dist/customer.js";',d="ui5-side-navigation {\n    height: 600px;\n}";function r(e){const{Editor:i}={...(0,o.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(i,{html:s,js:a,css:d})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n\n    <div class="tool-layout">\n        <ui5-shellbar primary-title="Product Name" secondary-title="Second Title" notifications-count="1"\n            show-notifications>\n            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n            <ui5-input slot="searchField"></ui5-input>\n            <ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>\n            <ui5-avatar slot="profile">\n                <img src="../assets/images/avatars/woman_avatar_5.png" />\n            </ui5-avatar>\n            <ui5-shellbar-item icon="source-code" text="Settings" title="Settings"></ui5-shellbar-item>\n            <ui5-shellbar-item icon="background" text="Settings" title="Settings"></ui5-shellbar-item>\n            <ui5-shellbar-item icon="activity-assigned-to-goal" text="Settings" title="Settings"></ui5-shellbar-item>\n            <ui5-shellbar-item icon="action-settings" text="Settings" title="Settings"></ui5-shellbar-item>\n        </ui5-shellbar>\n        <ui5-side-navigation>\n            <ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>\n            <ui5-side-navigation-item text="People" expanded icon="group">\n                <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>\n                <ui5-side-navigation-sub-item text="From Other Team"></ui5-side-navigation-sub-item>\n            </ui5-side-navigation-item>\n            <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>\n            <ui5-side-navigation-item text="Events" icon="calendar">\n                <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>\n                <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>\n                <ui5-side-navigation-sub-item text="External Link" href="https://sap.com" target="_blank">\n\t\t\t\t</ui5-side-navigation-sub-item>\n            </ui5-side-navigation-item>\n\t\t\t<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link">\n\t\t\t\t<ui5-side-navigation-sub-item text="External Link" href="https://sap.com" target="_blank">\n\t\t\t\t</ui5-side-navigation-sub-item>\n\t\t\t</ui5-side-navigation-item>\n\t\t\t<ui5-side-navigation-item slot="fixedItems" text="History" icon="history">\n\t\t\t</ui5-side-navigation-item>\n        </ui5-side-navigation>\n        <div class="content"></div>\n    </div>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',m='import "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/SideNavigation.js";\nimport "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";\nimport "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents-fiori/dist/ShellBarItem.js";\n\nimport "@ui5/webcomponents-icons/dist/home.js";\nimport "@ui5/webcomponents-icons/dist/group.js";\nimport "@ui5/webcomponents-icons/dist/menu.js";\nimport "@ui5/webcomponents-icons/dist/locate-me.js";\nimport "@ui5/webcomponents-icons/dist/calendar.js";\nimport "@ui5/webcomponents-icons/dist/history.js";\nimport "@ui5/webcomponents-icons/dist/source-code.js";\nimport "@ui5/webcomponents-icons/dist/background.js";\nimport "@ui5/webcomponents-icons/dist/activity-assigned-to-goal.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/chain-link.js";\n\nvar sidenav = document.querySelector("ui5-side-navigation");\ndocument.getElementById("toggle").addEventListener("click", () => {\n    sidenav.toggleAttribute("collapsed");\n});',h="ui5-side-navigation {\n    height: 600px;\n}\n\nui5-shellbar::part(root) {\n    padding-inline-start: 0.75rem;\n    padding-inline-end: 1.25rem;\n    border-radius: 0.5rem;\n    box-shadow:\n        0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),\n        0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);\n}\n\n.tool-layout {\n    padding: 0.5rem 0.5rem 0 0.5rem;\n    background: color-mix(in srgb, black 4%, var(--sapBackgroundColor));\n    display: grid;\n    gap: 0.5rem;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: auto 1fr;\n}\n\nui5-shellbar {\n    grid-column: 1 / span 2;\n    grid-row: 1 / 2;\n}\n\n.content {\n    position: relative;\n    background: var(--sapBackgroundColor);\n    border-radius: 0.5rem 0.5rem 0 0;\n    box-shadow:\n        0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),\n        0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);\n}";function u(e){const{Editor:i}={...(0,o.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(i,{html:c,js:m,css:h})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}const x={},g=void 0,v={id:"components/fiori/SideNavigation/SideNavigation",title:"SideNavigation",description:"The SideNavigation is used as a standard menu in applications.",source:"@site/docs/components/fiori/SideNavigation/SideNavigation.mdx",sourceDirName:"components/fiori/SideNavigation",slug:"/components/fiori/SideNavigation/",permalink:"/ui5-webcomponents/v1/components/fiori/SideNavigation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"ShellBarItem",permalink:"/ui5-webcomponents/v1/components/fiori/ShellBarItem"},next:{title:"SideNavigationGroup",permalink:"/ui5-webcomponents/v1/components/fiori/SideNavigationGroup"}},j={},b=[{value:"Usage",id:"usage",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Fast Navigation",id:"fast-navigation",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"collapsed",id:"collapsed",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"fixedItems",id:"fixeditems",level:3},{value:"header",id:"header",level:3},{value:"Events",id:"events",level:2},{value:"selection-change",id:"selection-change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"SideNavigation in Tool Layout",id:"sidenavigation-in-tool-layout",level:3}];function f(e){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"SideNavigation"})," is used as a standard menu in applications.\nIt consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned)."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The header is meant for displaying user related information - profile data, avatar, etc."}),"\n",(0,n.jsx)(i.li,{children:"The main navigation section is related to the user\u2019s current work context"}),"\n",(0,n.jsx)(i.li,{children:"The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on)."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:["Use the available ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-group"}),", ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-item"}),"\nand ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-sub-item"})," components to build your menu.\nThe items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level.\nYou must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level."]}),"\n",(0,n.jsx)(i.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,n.jsx)(i.h3,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,n.jsxs)(i.p,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,n.jsx)(i.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,n.jsx)(i.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/SideNavigation.js"'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/SideNavigationGroup.js";'})," (for ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-group"}),")"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";'})," (for ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-item"}),")"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";'})," (for ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-sub-item"}),")"]}),"\n",(0,n.jsx)(i.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(l,{}),"\n",(0,n.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(i.h3,{id:"collapsed",children:"collapsed"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{}),(0,n.jsx)(i.th,{})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsxs)(i.td,{children:["Defines whether the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation"})," is expanded or collapsed."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Type"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Default"}),(0,n.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(i.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{}),(0,n.jsx)(i.th,{})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsxs)(i.td,{children:["Defines the main items of the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation"}),". Use the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-item"})," component for the top-level items, and the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-sub-item"})," component for second-level items, nested inside the items."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Type"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Array<SideNavigationItemBase>"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"fixeditems",children:"fixedItems"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{}),(0,n.jsx)(i.th,{})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsxs)(i.td,{children:["Defines the fixed items at the bottom of the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation"}),". Use the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-item"})," component for the fixed items, and optionally the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation-sub-item"})," component to provide second-level items inside them.",(0,n.jsx)("br",{}),(0,n.jsx)(i.strong,{children:"Note:"}),' In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)']})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Type"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Array<SideNavigationItemBase>"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"header",children:"header"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{}),(0,n.jsx)(i.th,{})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsxs)(i.td,{children:["Defines the header of the ",(0,n.jsx)(i.code,{children:"ui5-side-navigation"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(i.strong,{children:"Note:"})," The header is displayed when the component is expanded - the property ",(0,n.jsx)(i.code,{children:"collapsed"})," is false;"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Type"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Array<HTMLElement>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Since"}),(0,n.jsx)(i.td,{children:"1.0.0-rc.11"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(i.h3,{id:"selection-change",children:"selection-change"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{}),(0,n.jsx)(i.th,{})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsx)(i.td,{children:"Fired when the selection has changed via user interaction"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Type"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"CustomEvent<SideNavigationSelectionChangeEventDetail>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Parameters"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"item"}),": ",(0,n.jsx)(i.code,{children:"SideNavigationSelectableItemBase"}),(0,n.jsx)("br",{}),"the clicked item."]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(i.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(i.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(i.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(i.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,n.jsx)(i.h3,{id:"sidenavigation-in-tool-layout",children:"SideNavigation in Tool Layout"}),"\n",(0,n.jsx)(i.p,{children:"One of the patterns that the SideNavigation is used for is the so called Tool Layout.\nThe sample demonstrates how one can achieve that layout. It consists of bar on the top (re-styled ShellBar in this case), menu on the side (SideNavigation) and main content area."}),"\n",(0,n.jsx)(p,{})]})}function y(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},1184:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>d});var n=t(4041);const o={},s=n.createContext(o);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);