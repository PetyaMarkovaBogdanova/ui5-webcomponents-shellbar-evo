"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9621],{39037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(31085),s=n(71184);const i={},r="Creating a web component abstract item to be used inside Toolbar",a={id:"docs/internal/Toolbar",title:"Creating a web component abstract item to be used inside Toolbar",description:"This section explains how to build abstract items in order to be compatible with UI5 Toolbar.",source:"@site/docs/docs/internal/Toolbar.md",sourceDirName:"docs/internal",slug:"/docs/internal/Toolbar",permalink:"/ui5-webcomponents/docs/internal/Toolbar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"FAQ",permalink:"/ui5-webcomponents/docs/FAQ"}},l={},c=[{value:"Abstract items",id:"abstract-items",level:2},{value:"Why are abstract items needed?",id:"why-are-abstract-items-needed",level:3},{value:"Events",id:"events",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-a-web-component-abstract-item-to-be-used-inside-toolbar",children:"Creating a web component abstract item to be used inside Toolbar"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"This section explains how to build abstract items in order to be compatible with UI5 Toolbar."}),"\n",(0,o.jsxs)(t.em,{children:["It will guide you through the process of how we created ",(0,o.jsx)(t.code,{children:"ui5-toolbar-button"}),", to be\ncompatible with ",(0,o.jsx)(t.code,{children:"ui5-toolbar"}),". Currently developed items can be used without those efforts. They are:"]})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"ui5-toolbar-button"}),"\n",(0,o.jsx)(t.li,{children:"ui5-toolbar-select"}),"\n",(0,o.jsx)(t.li,{children:"ui5-toolbar-separator"}),"\n",(0,o.jsx)(t.li,{children:"ui5-toolbar-spacer"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"abstract-items",children:"Abstract items"}),"\n",(0,o.jsx)(t.p,{children:"\xa0"}),"\n",(0,o.jsx)(t.h3,{id:"why-are-abstract-items-needed",children:"Why are abstract items needed?"}),"\n",(0,o.jsxs)(t.p,{children:["\xa0\nWhen the toolbar renders its slotted items within a popover in the static area, simply relocating the actual DOM nodes within its slots can lead to reference issues, causing the slotted nodes to lose their parent reference (e.g., the toolbar). This is the reason why the toolbar must operate with abstract items. Abstract items are not rendered directly within the DOM; instead, they function as data used by the toolbar to produce corresponding physical web components. On the other hand, useful modifications detected by the toolbar on the physical items are synchronised with the abstract ones. (see step ",(0,o.jsx)(t.a,{href:"#events",children:"Events"}),")\n\xa0\nThe ",(0,o.jsx)(t.code,{children:"ui5-toolbar"})," is a composite web component, that slots different UI5 components, designing them as abstract items. They can contain\nproperties, slots and events, and they can match the API of already existing component.\nIn order to be suitable for usage inside ",(0,o.jsx)(t.code,{children:"ui5-toolbar"}),", each component should adhere to following guidelines:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"The component needs to implement a class with component name of the following type:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"ToolbarButton.ts\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"The new component needs to implement two template files with name of the following type:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"ToolbarButton.hbs and ToolbarPopoverButton.hbs\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["It needs to implement ",(0,o.jsx)(t.strong,{children:"customElement"})," decorator, which is good to contain custom tag name:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'@customElement({\n    tag: "ui5-toolbar-button"\n})\n'})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["The class should extend ",(0,o.jsx)(t.strong,{children:"ToolbarItem"})," base class, which should also be added as a dependency."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"class ToolbarButton extends ToolbarItem\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsx)(t.li,{children:"Inside the module there should be two template getters: for toolbar and popover representation."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"static get toolbarTemplate() {\n    return ToolbarButtonTemplate;\n}\n\nstatic get toolbarPopoverTemplate() {\n    return ToolbarPopoverButtonTemplate;\n}\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsxs)(t.li,{children:["After the class declaration there should be a registry call for the item inside the toolbar. ",(0,o.jsx)(t.strong,{children:"registerToolbarItem"})," helper should be added as a dependency."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'import { registerToolbarItem } from "./ToolbarRegistry.js";\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"registerToolbarItem(ToolbarButton);\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"7",children:["\n",(0,o.jsx)(t.li,{children:"In the templates there should be mapping of the properties that need to be used in the component inside Toolbar."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Inside ToolbarButton.ts:\n\xa0"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"@property()\ntext?: string;\n\xa0\n@property({ type: Boolean })\ndisabled = false;\n"})}),"\n",(0,o.jsx)(t.p,{children:"\xa0\nInside ToolbarButtonTemplate.hbs:\n\xa0"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<ui5-button\n\xa0 class="ui5-tb-item"\n\xa0 ?disabled="{{this.disabled}}"\n\xa0 data-ui5-external-action-item-id="{{this._id}}"\n\xa0 data-ui5-stable="{{this.stableDomRef}}"\n>\n\xa0 {{this.text}}\n</ui5-button>\n'})}),"\n",(0,o.jsxs)(t.ol,{start:"8",children:["\n",(0,o.jsxs)(t.li,{children:["The new component's DOM root element needs to have ",(0,o.jsx)(t.code,{children:'"ui5-tb-item"'})," CSS class in order to get default styles for item (margins etc.)."]}),"\n",(0,o.jsx)(t.li,{children:"The new class needs to be added to the bundle file in the corresponding library."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Inside bundle.common.js:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'import ToolbarButton from "./dist/ToolbarButton.js";\n'})}),"\n",(0,o.jsxs)(t.ol,{start:"10",children:["\n",(0,o.jsx)(t.li,{children:"Use your newly created component inside the ui5-toolbar like this:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<ui5-toolbar>\n\xa0 <ui5-toolbar-button text="Button 1" disabled></ui5-toolbar-button>\n\xa0 <ui5-toolbar-button text="Button 2"></ui5-toolbar-button>\n</ui5-toolbar>\n'})}),"\n",(0,o.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,o.jsxs)(t.p,{children:["\xa0\nAbstract items can provide a map of events through the ",(0,o.jsx)(t.code,{children:"subscribedEvents"})," getter. The toolbar will actively monitor these events on the physical items, and when triggered, it will also fire the information to the corresponding abstract item. This mechanism proves useful when the abstract item requires synchronization of changes or interactions with the physical items. Importantly, events described as public offer benefits to consumers of the abstract items informing them about interactions with the physical elements. Additionally, the map contains information about the popover, such as ",(0,o.jsx)(t.code,{children:"preventClosing: true"}),", which ensures that the popover remains open when this event is triggered by the physical item.\n\xa0\nA good example is the Map of the ",(0,o.jsx)(t.code,{children:"ui5-toolbar-select"}),":\n\xa0"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'get subscribedEvents() {\n\xa0 const map = new Map();\n\xa0\n\xa0 map.set("click", { preventClosing: true });\n\xa0 map.set("change", { preventClosing: false });\n\xa0 map.set("open", { preventClosing: true });\n\xa0 map.set("close", { preventClosing: true });\n\xa0\n\xa0 return map;\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\xa0\nThe ",(0,o.jsx)(t.code,{children:"ui5-toolbar-select"})," then waits for the toolbar to fire the ",(0,o.jsx)(t.code,{children:"change"})," event, in order to notify (synchronize) its ",(0,o.jsx)(t.code,{children:"options"})," slots:\n\xa0"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'_onEventHandler(e: Event): void {\n\xa0 if (e.type === "change") {\n\xa0 \xa0 // update options\n\xa0 \xa0 const selectedOption = (e as CustomEvent<ToolbarSelectChangeEventDetail>).detail.selectedOption;\n\xa0 \xa0 const selectedOptionIndex = Number(selectedOption?.getAttribute("data-ui5-external-action-item-index"));\n\xa0 \xa0 this.options.forEach((option: Option, index: number) => {\n\xa0 \xa0 \xa0 if (index === selectedOptionIndex) {\n\xa0 \xa0 \xa0 \xa0 option.setAttribute("selected", "");\n\xa0 \xa0 \xa0 } else {\n\xa0 \xa0 \xa0 \xa0 option.removeAttribute("selected");\n\xa0 \xa0 \xa0 }\n\xa0 \xa0 });\n\xa0 }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(14041);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);