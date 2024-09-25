"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8819],{2062:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(31085),i=s(71184);const r={slug:"../../ListItemGroup",sidebar_class_name:"newComponentBadge",ui5_tag_name:"ui5-li-group",ui5_since:"2.0.0"},d=void 0,o={id:"components/main/List/ListItemGroup",title:"ListItemGroup",description:"The ui5-li-group is a special list item, used only to create groups of list items.",source:"@site/docs/components/main/List/ListItemGroup.mdx",sourceDirName:"components/main/List",slug:"/components/ListItemGroup",permalink:"/ui5-webcomponents/components/ListItemGroup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../ListItemGroup",sidebar_class_name:"newComponentBadge",ui5_tag_name:"ui5-li-group",ui5_since:"2.0.0"},sidebar:"componentsSidebar",previous:{title:"ListItemCustom",permalink:"/ui5-webcomponents/components/ListItemCustom"},next:{title:"ListItemStandard",permalink:"/ui5-webcomponents/components/ListItemStandard"}},l={},c=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"headerText",id:"headertext",level:3},{value:"headerAccessibleName",id:"headeraccessiblename",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"header",id:"header",level:3},{value:"Events",id:"events",level:2},{value:"move-over",id:"move-over",level:3},{value:"move",id:"move",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-li-group"})," is a special list item, used only to create groups of list items."]}),"\n",(0,n.jsxs)(t.p,{children:["This is the item to use inside a ",(0,n.jsx)(t.code,{children:"ui5-list"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/ListItemGroup.js";'})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"headertext",children:"headerText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the header text of the ",(0,n.jsx)("code",{children:"ui5-li-group"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string | undefined"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"headeraccessiblename",children:"headerAccessibleName"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the accessible name of the header."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string | undefined"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the items of the ",(0,n.jsx)("code",{children:"ui5-li-group"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<ListItemBase>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"header",children:"header"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the header of the component.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Using this slot, the default header text of group and the value of ",(0,n.jsx)(t.code,{children:"headerText"})," property will be overwritten."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<ListItemBase>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"move-over",children:"move-over"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Fired when a movable list item is moved over a potential drop target during a dragging operation.",(0,n.jsx)("br",{}),"If the new position is valid, prevent the default action of the event using ",(0,n.jsx)(t.code,{children:"preventDefault()"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent<ListItemGroupMoveEventDetail>"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"source"}),": ",(0,n.jsx)(t.code,{children:"object"}),(0,n.jsx)("br",{}),"Contains information about the moved element under ",(0,n.jsx)(t.code,{children:"element"})," property.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"destination"}),": ",(0,n.jsx)(t.code,{children:"object"}),(0,n.jsx)("br",{}),"Contains information about the destination of the moved element. Has ",(0,n.jsx)(t.code,{children:"element"})," and ",(0,n.jsx)(t.code,{children:"placement"})," properties."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"2.1.0"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"move",children:"move"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Fired when a movable list item is dropped onto a drop target.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," ",(0,n.jsx)(t.code,{children:"move"})," event is fired only if there was a preceding ",(0,n.jsx)(t.code,{children:"move-over"})," with prevented default action."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent<ListItemGroupMoveEventDetail>"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"source"}),": ",(0,n.jsx)(t.code,{children:"object"}),(0,n.jsx)("br",{}),"Contains information about the moved element under ",(0,n.jsx)(t.code,{children:"element"})," property.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"destination"}),": ",(0,n.jsx)(t.code,{children:"object"}),(0,n.jsx)("br",{}),"Contains information about the destination of the moved element. Has ",(0,n.jsx)(t.code,{children:"element"})," and ",(0,n.jsx)(t.code,{children:"placement"})," properties."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"2.1.0"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"Used to style the header item of the group"})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var n=s(14041);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);