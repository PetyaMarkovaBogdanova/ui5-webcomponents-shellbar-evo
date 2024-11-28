"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1543],{79210:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>j,metadata:()=>p,toc:()=>f});var t=i(31085),n=i(71184);const r='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n        <ui5-shellbar primary-title="Corporate Portal" secondary-title="Secondary title">\n            <ui5-avatar slot="profile" icon="customer"></ui5-avatar>\n            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n            <ui5-button icon="nav-back" slot="startButton"></ui5-button>\n        </ui5-shellbar>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',l='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\n\nimport "@ui5/webcomponents-icons/dist/customer.js";\nimport "@ui5/webcomponents-icons/dist/nav-back.js";';function d(e){const{Editor:s}={...(0,n.R)(),...e.components};return s||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(s,{html:r,js:l})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor);height: 400px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-shellbar id="shellbar" primary-title="Corporate Portal" secondary-title="secondary title"\n        notifications-count="99+" show-notifications="">\n        <ui5-avatar slot="profile">\n            <img src="../assets/images/avatars/woman_avatar_5.png" />\n        </ui5-avatar>\n\t\t<ui5-toggle-button icon="sap-icon://da" slot="assistant"></ui5-toggle-button>\n        <img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n        <ui5-button icon="nav-back" slot="startButton"></ui5-button>\n\n        <ui5-input slot="searchField"></ui5-input>\n        <ui5-li slot="menuItems">Application 1</ui5-li>\n        <ui5-li slot="menuItems">Application 2</ui5-li>\n        <ui5-li slot="menuItems">Application 3</ui5-li>\n        <ui5-li slot="menuItems">Application 4</ui5-li>\n        <ui5-li slot="menuItems">Application 5</ui5-li>\n    </ui5-shellbar>\n    <ui5-popover id="action-popover" placement="Bottom">\n        <div class="action-popover-header">\n            <ui5-title style="padding: 0.25rem 1rem 0rem 1rem">An Kimura</ui5-title>\n        </div>\n        <div class="action-popover-content" style="margin-top: 1rem;">\n            <ui5-list separators="None">\n                <ui5-li icon="sys-find">App Finder</ui5-li>\n                <ui5-li icon="settings">Settings</ui5-li>\n                <ui5-li icon="edit">Edit Home Page</ui5-li>\n                <ui5-li icon="sys-help">Help</ui5-li>\n                <ui5-li icon="log">Sign out</ui5-li>\n            </ui5-list>\n        </div>\n    </ui5-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',h='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/ListItemStandard.js";\nimport "@ui5/webcomponents/dist/Popover.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/ToggleButton.js";\nimport "@ui5/webcomponents/dist/List.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\n\nimport "@ui5/webcomponents-icons/dist/da.js";\nimport "@ui5/webcomponents-icons/dist/da-2.js";\nimport "@ui5/webcomponents-icons/dist/nav-back.js";\nimport "@ui5/webcomponents-icons/dist/sys-find.js";\nimport "@ui5/webcomponents-icons/dist/settings.js";\nimport "@ui5/webcomponents-icons/dist/edit.js";\nimport "@ui5/webcomponents-icons/dist/sys-help.js";\nimport "@ui5/webcomponents-icons/dist/log.js";\n\nconst shellbar = document.getElementById("shellbar");\nconst actionPopover = document.getElementById("action-popover");\n\nshellbar.addEventListener("ui5-profile-click", (event) => {\n    actionPopover.opener = event.detail.targetRef;\n\tactionPopover.open = true;\n});\n\n[...document.querySelectorAll("ui5-toggle-button")].forEach(el => {\n\tel.addEventListener("click", event => {\n\t\tconst toggleButton = event.target;\n\t\ttoggleButton.icon = toggleButton.pressed ? "sap-icon://da-2" : "sap-icon://da";\n\t});\n});';function a(e){const{Editor:s}={...(0,n.R)(),...e.components};return s||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(s,{html:o,js:h})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}const j={ui5_tag_name:"ui5-shellbar",ui5_since:"0.8.0"},u=void 0,p={id:"components/fiori/ShellBar/ShellBar",title:"ShellBar",description:"The ui5-shellbar is meant to serve as an application header",source:"@site/docs/components/fiori/ShellBar/ShellBar.mdx",sourceDirName:"components/fiori/ShellBar",slug:"/components/fiori/ShellBar/",permalink:"/ui5-webcomponents/nightly/components/fiori/ShellBar/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{ui5_tag_name:"ui5-shellbar",ui5_since:"0.8.0"},sidebar:"componentsSidebar",previous:{title:"ProductSwitchItem",permalink:"/ui5-webcomponents/nightly/components/fiori/ProductSwitchItem"},next:{title:"ShellBarItem",permalink:"/ui5-webcomponents/nightly/components/fiori/ShellBarItem"}},m={},f=[{value:"Stable DOM Refs",id:"stable-dom-refs",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"primaryTitle",id:"primarytitle",level:3},{value:"secondaryTitle",id:"secondarytitle",level:3},{value:"notificationsCount",id:"notificationscount",level:3},{value:"showNotifications",id:"shownotifications",level:3},{value:"showProductSwitch",id:"showproductswitch",level:3},{value:"showSearchField",id:"showsearchfield",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"logoDomRef",id:"logodomref",level:3},{value:"notificationsDomRef",id:"notificationsdomref",level:3},{value:"overflowDomRef",id:"overflowdomref",level:3},{value:"profileDomRef",id:"profiledomref",level:3},{value:"productSwitchDomRef",id:"productswitchdomref",level:3},{value:"Slots",id:"slots",level:2},{value:"assistant",id:"assistant",level:3},{value:"default",id:"default",level:3},{value:"profile",id:"profile",level:3},{value:"logo",id:"logo",level:3},{value:"menuItems",id:"menuitems",level:3},{value:"searchField",id:"searchfield",level:3},{value:"startButton",id:"startbutton",level:3},{value:"Events",id:"events",level:2},{value:"notifications-click",id:"notifications-click",level:3},{value:"profile-click",id:"profile-click",level:3},{value:"product-switch-click",id:"product-switch-click",level:3},{value:"logo-click",id:"logo-click",level:3},{value:"menu-item-click",id:"menu-item-click",level:3},{value:"search-button-click",id:"search-button-click",level:3},{value:"Methods",id:"methods",level:2},{value:"closeOverflow",id:"closeoverflow",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Profile Area",id:"profile-area",level:3}];function b(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"ui5-shellbar"})," is meant to serve as an application header\nand includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on."]}),"\n",(0,t.jsx)(s.h3,{id:"stable-dom-refs",children:"Stable DOM Refs"}),"\n",(0,t.jsxs)(s.p,{children:["You can use the following stable DOM refs for the ",(0,t.jsx)(s.code,{children:"ui5-shellbar"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"logo"}),"\n",(0,t.jsx)(s.li,{children:"notifications"}),"\n",(0,t.jsx)(s.li,{children:"overflow"}),"\n",(0,t.jsx)(s.li,{children:"profile"}),"\n",(0,t.jsx)(s.li,{children:"product-switch"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,t.jsx)(s.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,t.jsxs)(s.p,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,t.jsx)(s.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,t.jsx)(s.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'import "@ui5/webcomponents-fiori/dist/ShellBar.js";'})}),"\n",(0,t.jsx)(s.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,t.jsx)(s.p,{children:"The ShellBar includes Back button, Logo, Title and Profile image."}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"primarytitle",children:"primaryTitle"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the ",(0,t.jsx)(s.code,{children:"primaryTitle"}),".",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," The ",(0,t.jsx)(s.code,{children:"primaryTitle"})," would be hidden on S screen size (less than approx. 700px)."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string | undefined"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"undefined"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"secondarytitle",children:"secondaryTitle"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the ",(0,t.jsx)(s.code,{children:"secondaryTitle"}),".",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," The ",(0,t.jsx)(s.code,{children:"secondaryTitle"})," would be hidden on S and M screen sizes (less than approx. 1300px)."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string | undefined"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"undefined"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"notificationscount",children:"notificationsCount"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the ",(0,t.jsx)(s.code,{children:"notificationsCount"}),", displayed in the notification icon top-right corner."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string | undefined"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"undefined"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"shownotifications",children:"showNotifications"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Defines, if the notification icon would be displayed."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"showproductswitch",children:"showProductSwitch"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Defines, if the product switch icon would be displayed."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"showsearchfield",children:"showSearchField"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines, if the Search Field would be displayed when there is a valid ",(0,t.jsx)(s.code,{children:"searchField"})," slot.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," By default the Search Field is not displayed."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines additional accessibility attributes on different areas of the component.",(0,t.jsx)("br",{}),"The accessibilityAttributes object has the following fields, where each field is an object supporting one or more accessibility attributes:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"logo"})," - ",(0,t.jsx)(s.code,{children:"logo.role"})," and ",(0,t.jsx)(s.code,{children:"logo.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"notifications"})," - ",(0,t.jsx)(s.code,{children:"notifications.expanded"})," and ",(0,t.jsx)(s.code,{children:"notifications.hasPopup"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"profile"})," - ",(0,t.jsx)(s.code,{children:"profile.expanded"}),", ",(0,t.jsx)(s.code,{children:"profile.hasPopup"})," and ",(0,t.jsx)(s.code,{children:"profile.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"product"})," - ",(0,t.jsx)(s.code,{children:"product.expanded"})," and ",(0,t.jsx)(s.code,{children:"product.hasPopup"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"search"})," - ",(0,t.jsx)(s.code,{children:"search.hasPopup"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"overflow"})," - ",(0,t.jsx)(s.code,{children:"overflow.expanded"})," and ",(0,t.jsx)(s.code,{children:"overflow.hasPopup"}),".",(0,t.jsx)("br",{}),"The accessibility attributes support the following values:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"role"}),": Defines the accessible ARIA role of the logo area. Accepts the following string values: ",(0,t.jsx)(s.code,{children:"button"})," or ",(0,t.jsx)(s.code,{children:"link"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"expanded"}),": Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values: ",(0,t.jsx)(s.code,{children:"true"})," or ",(0,t.jsx)(s.code,{children:"false"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"hasPopup"}),": Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.",(0,t.jsx)("br",{}),"Accepts the following string values: ",(0,t.jsx)(s.code,{children:"dialog"}),", ",(0,t.jsx)(s.code,{children:"grid"}),", ",(0,t.jsx)(s.code,{children:"listbox"}),", ",(0,t.jsx)(s.code,{children:"menu"})," or ",(0,t.jsx)(s.code,{children:"tree"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(s.strong,{children:"name"}),": Defines the accessible ARIA name of the area. Accepts any string."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ShellBarAccessibilityAttributes"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.10.0"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"logodomref",children:"logoDomRef"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Returns the ",(0,t.jsx)(s.code,{children:"logo"})," DOM ref."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"null"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Readonly"}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"notificationsdomref",children:"notificationsDomRef"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Returns the ",(0,t.jsx)(s.code,{children:"notifications"})," icon DOM ref."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"null"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Readonly"}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"overflowdomref",children:"overflowDomRef"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Returns the ",(0,t.jsx)(s.code,{children:"overflow"})," icon DOM ref."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"null"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Readonly"}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"profiledomref",children:"profileDomRef"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Returns the ",(0,t.jsx)(s.code,{children:"profile"})," icon DOM ref."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"null"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Readonly"}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"productswitchdomref",children:"productSwitchDomRef"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Returns the ",(0,t.jsx)(s.code,{children:"product-switch"})," icon DOM ref."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Default"}),(0,t.jsx)(s.td,{children:"null"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Readonly"}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsx)(s.h3,{id:"assistant",children:"assistant"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Defines the assistant slot."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<IButton>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"2.0.0"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"default",children:"default"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the ",(0,t.jsx)(s.code,{children:"ui5-shellbar"})," additional items.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," You can use the ",(0,t.jsx)(s.code,{children:"<ui5-shellbar-item></ui5-shellbar-item>"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<ShellBarItem>"})})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"profile",children:"profile"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["You can pass ",(0,t.jsx)(s.code,{children:"ui5-avatar"})," to set the profile image/icon. If no profile slot is set - profile will be excluded from actions.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," We recommend not using the ",(0,t.jsx)(s.code,{children:"size"})," attribute of ",(0,t.jsx)(s.code,{children:"ui5-avatar"})," because it should have specific size by design in the context of ",(0,t.jsx)(s.code,{children:"ui5-shellbar"})," profile."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<HTMLElement>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.6"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"logo",children:"logo"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the logo of the ",(0,t.jsx)(s.code,{children:"ui5-shellbar"}),". For example, you can use ",(0,t.jsx)(s.code,{children:"ui5-avatar"})," or ",(0,t.jsx)(s.code,{children:"img"})," elements as logo."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<HTMLElement>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"menuitems",children:"menuItems"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the items displayed in menu after a click on the primary title.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," You can use the  ",(0,t.jsx)(s.code,{children:"<ui5-li></ui5-li>"})," and its ancestors."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<ListItemBase>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"0.10"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"searchfield",children:"searchField"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines the ",(0,t.jsx)(s.code,{children:"ui5-input"}),", that will be used as a search field."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<Input>"})})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"startbutton",children:"startButton"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Defines a ",(0,t.jsx)(s.code,{children:"ui5-button"})," in the bar that will be placed in the beginning. We encourage this slot to be used for a back or home button. It gets overstyled to match ShellBar's styling."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Array<IButton>"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(s.h3,{id:"notifications-click",children:"notifications-click"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Fired, when the notification icon is activated."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"CustomEvent<ShellBarNotificationsClickEventDetail>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Parameters"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"targetRef"}),": ",(0,t.jsx)(s.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bubbles"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Cancelable"}),(0,t.jsxs)(s.td,{children:["Yes - via ",(0,t.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"profile-click",children:"profile-click"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Fired, when the profile slot is present."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"CustomEvent<ShellBarProfileClickEventDetail>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Parameters"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"targetRef"}),": ",(0,t.jsx)(s.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bubbles"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Cancelable"}),(0,t.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"product-switch-click",children:"product-switch-click"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Fired, when the product switch icon is activated.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," You can prevent closing of overflow popover by calling ",(0,t.jsx)(s.code,{children:"event.preventDefault()"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"CustomEvent<ShellBarProductSwitchClickEventDetail>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Parameters"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"targetRef"}),": ",(0,t.jsx)(s.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bubbles"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Cancelable"}),(0,t.jsxs)(s.td,{children:["Yes - via ",(0,t.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"logo-click",children:"logo-click"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Fired, when the logo is activated."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"CustomEvent<ShellBarLogoClickEventDetail>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Parameters"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"targetRef"}),": ",(0,t.jsx)(s.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"0.10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bubbles"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Cancelable"}),(0,t.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"menu-item-click",children:"menu-item-click"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Fired, when a menu item is activated",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," You can prevent closing of overflow popover by calling ",(0,t.jsx)(s.code,{children:"event.preventDefault()"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"CustomEvent<ShellBarMenuItemClickEventDetail>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Parameters"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"item"}),": ",(0,t.jsx)(s.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"DOM ref of the activated list item"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Since"}),(0,t.jsx)(s.td,{children:"0.10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bubbles"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Cancelable"}),(0,t.jsxs)(s.td,{children:["Yes - via ",(0,t.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"search-button-click",children:"search-button-click"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsxs)(s.td,{children:["Fired, when the search button is activated.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," You can prevent expanding/collapsing of the search field by calling ",(0,t.jsx)(s.code,{children:"event.preventDefault()"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"CustomEvent<ShellBarSearchButtonEventDetail>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bubbles"}),(0,t.jsx)(s.td,{children:"Yes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Cancelable"}),(0,t.jsxs)(s.td,{children:["Yes - via ",(0,t.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"closeoverflow",children:"closeOverflow"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Description"}),(0,t.jsx)(s.td,{children:"Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Return type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"void"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"root"}),(0,t.jsxs)(s.td,{children:["Used to style the outermost wrapper of the ",(0,t.jsx)(s.code,{children:"ui5-shellbar"})]})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,t.jsx)(s.h3,{id:"profile-area",children:"Profile Area"}),"\n",(0,t.jsx)(s.p,{children:"Press the profile image on the right-most side to open a simple popup that one can implment its own profile area."}),"\n",(0,t.jsx)(x,{})]})}function v(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},71184:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>d});var t=i(14041);const n={},r=t.createContext(n);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);