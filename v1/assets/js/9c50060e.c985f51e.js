"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1659],{319:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>j,contentTitle:()=>f,default:()=>y,frontMatter:()=>x,metadata:()=>m,toc:()=>v});var n=i(1085),o=i(1184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-list header-text="Notifications Grouped">\n        <ui5-li-notification-group show-counter show-close title-text="Orders" priority="High">\n            <ui5-li-notification show-close\n                title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                priority="High">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n                <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n                And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n            <ui5-li-notification show-close\n                title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                priority="High">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n                <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n                And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n            <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>\n            <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>\n        </ui5-li-notification-group>\n        <ui5-li-notification-group show-close show-counter title-text="Deliveries" priority="Medium" collapsed>\n            <ui5-li-notification show-close\n                title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                priority="Medium">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n                And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n\n            <ui5-li-notification show-close\n                title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                priority="Medium">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n                And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n\n            <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>\n            <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>\n        </ui5-li-notification-group>\n\n        <ui5-li-notification-group show-close show-counter priority="Low" collapsed\n            title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">\n            <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n\n            <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n        </ui5-li-notification-group>\n    </ui5-list>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',l='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\n\nimport "@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationAction.js";\n\nimport "@ui5/webcomponents-icons/dist/employee.js";\nimport "@ui5/webcomponents-icons/dist/message-error.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\n\nvar notificationList = document.querySelector("ui5-list");\n\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});';function c(t){const{Editor:e}={...(0,o.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(e,{html:s,js:l})}function r(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 350px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-shellbar\n\tprimary-title="Corporate Portal"\n\tlogo="../assets/images/sap-logo-svg.svg"\n\tshow-notifications\n\tnotifications-count="6"\n></ui5-shellbar>\n<ui5-popover\n\tplacement-type="Bottom"\n\thorizontal-align="Right"\n\tid="popover-with-notifications"\n>\n<ui5-list header-text="Notifications Grouped">\n    <ui5-li-notification-group show-counter show-close title-text="Orders" priority="Hight">\n        <ui5-li-notification show-close\n            title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            priority="High">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n            <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification show-close\n            title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            priority="High">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n            <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n        <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>\n        <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>\n    </ui5-li-notification-group>\n    <ui5-li-notification-group show-close show-counter title-text="Deliveries" priority="Medium" collapsed>\n        <ui5-li-notification show-close\n            title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            priority="Medium">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification show-close\n            title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            priority="Medium">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>\n        <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>\n    </ui5-li-notification-group>\n\n    <ui5-li-notification-group show-close show-counter priority="High" collapsed\n        title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">\n        <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-li-notification-group>\n</ui5-list>\n</ui5-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',d='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/Popover.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationAction.js";\n\nimport "@ui5/webcomponents-icons/dist/employee.js";\nimport "@ui5/webcomponents-icons/dist/message-error.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\n\nvar shellbar = document.querySelector("ui5-shellbar");\nvar notificationsPopover = document.querySelector("ui5-popover");\nvar notificationList = document.querySelector("ui5-list");\n\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});\n\nshellbar.addEventListener("notifications-click", e => {\n    e.preventDefault();\n    notificationsPopover.showAt(e.detail.targetRef);\n});',u="#popover-with-notifications::part(content) {\n    padding: 0;\n    max-width: 400px;\n}";function h(t){const{Editor:e}={...(0,o.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(e,{html:a,js:d,css:u})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}const x={},f=void 0,m={id:"components/fiori/NotificationListGroupItem",title:"NotificationListGroupItem",description:"The ui5-li-notification-group is a special type of list item,",source:"@site/docs/components/fiori/NotificationListGroupItem.mdx",sourceDirName:"components/fiori",slug:"/components/fiori/NotificationListGroupItem",permalink:"/ui5-webcomponents/v1/components/fiori/NotificationListGroupItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"NotificationAction",permalink:"/ui5-webcomponents/v1/components/fiori/NotificationAction"},next:{title:"NotificationListItem",permalink:"/ui5-webcomponents/v1/components/fiori/NotificationListItem"}},j={},v=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"collapsed",id:"collapsed",level:3},{value:"showCounter",id:"showcounter",level:3},{value:"titleText",id:"titletext",level:3},{value:"priority",id:"priority",level:3},{value:"showClose",id:"showclose",level:3},{value:"read",id:"read",level:3},{value:"busy",id:"busy",level:3},{value:"busyDelay",id:"busydelay",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"actions",id:"actions",level:3},{value:"Events",id:"events",level:2},{value:"toggle",id:"toggle",level:3},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Notifcations in ShellBar",id:"notifcations-in-shellbar",level:3}];function g(t){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"ui5-li-notification-group"})," is a special type of list item,\nthat unlike others can group items within self, usually ",(0,n.jsx)(e.code,{children:"ui5-li-notification"})," items."]}),"\n",(0,n.jsx)(e.p,{children:"The component consists of:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Toggle"})," button to expand and collapse the group"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Priority"})," icon to display the priority of the group"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"TitleText"})," to entitle the group"]}),"\n",(0,n.jsxs)(e.li,{children:["Custom actions - with the use of ",(0,n.jsx)(e.code,{children:"ui5-notification-action"})]}),"\n",(0,n.jsx)(e.li,{children:"Items of the group"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:["The component can be used in a standard ",(0,n.jsx)(e.code,{children:"ui5-list"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:'import "@ui5/webcomponents/dist/NotificationListGroupItem.js";'})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:'import "@ui5/webcomponents/dist/NotificationAction.js";'})," (optional)"]}),"\n",(0,n.jsx)(e.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(r,{}),"\n",(0,n.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(e.h3,{id:"collapsed",children:"collapsed"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Defines if the group is collapsed or expanded."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"boolean"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"showcounter",children:"showCounter"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines if the items ",(0,n.jsx)(e.code,{children:"counter"})," would be displayed."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"boolean"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"titletext",children:"titleText"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines the ",(0,n.jsx)(e.code,{children:"titleText"})," of the item."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"string"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"priority",children:"priority"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines the ",(0,n.jsx)(e.code,{children:"priority"})," of the item."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'"High" | "Medium" | "Low" | "None"'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:'"None"'})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"showclose",children:"showClose"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines if the ",(0,n.jsx)(e.code,{children:"close"})," button would be displayed."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"boolean"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"read",children:"read"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines if the ",(0,n.jsx)(e.code,{children:"notification"})," is new or has been already read.",(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"Note:"})," if set to ",(0,n.jsx)(e.code,{children:"false"})," the ",(0,n.jsx)(e.code,{children:"titleText"})," has bold font, if set to true - it has a normal font."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"boolean"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"busy",children:"busy"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Defines if a busy indicator would be displayed over the item."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"boolean"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"false"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Since"}),(0,n.jsx)(e.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"busydelay",children:"busyDelay"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Defines the delay in milliseconds, after which the busy indicator will show up for this component."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"number"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"1000"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines the selected state of the ",(0,n.jsx)(e.code,{children:"ListItem"}),"."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"boolean"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(e.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines the items of the ",(0,n.jsx)(e.code,{children:"ui5-li-notification-group"}),", usually ",(0,n.jsx)(e.code,{children:"ui5-li-notification"})," items."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"Array<NotificationListItemBase>"})})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"actions",children:"actions"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Defines the actions, displayed in the top-right area.",(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"Note:"})," use the ",(0,n.jsx)(e.code,{children:"ui5-notification-action"})," component."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"Array<NotificationAction>"})})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(e.h3,{id:"toggle",children:"toggle"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Fired when the ",(0,n.jsx)(e.code,{children:"ui5-li-notification-group"})," is expanded/collapsed by user interaction."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"close",children:"close"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Fired when the ",(0,n.jsx)(e.code,{children:"Close"})," button is pressed."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"CustomEvent<NotificationListItemBaseCloseEventDetail>"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Parameters"}),(0,n.jsxs)(e.td,{children:[(0,n.jsx)(e.strong,{children:"item"}),": ",(0,n.jsx)(e.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"the closed item."]})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(e.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(e.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(e.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(e.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,n.jsx)(e.h3,{id:"notifcations-in-shellbar",children:"Notifcations in ShellBar"}),"\n",(0,n.jsx)(e.p,{children:'The main usage of the Notifcations is in the ShellBar.\nPress the "notifications" icon on the right side of the ShellBar to show the Notifications.'}),"\n",(0,n.jsx)(p,{})]})}function y(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(g,{...t})}):g(t)}},1184:(t,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var n=i(4041);const o={},s=n.createContext(o);function l(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);