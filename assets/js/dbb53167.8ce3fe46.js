"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8495],{62926:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>b,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var n=l(31085),i=l(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\t\t<div id="selectionGroup" role="radiogroup">\n\t\t\t<ui5-radio-button name="selection" text="Multiple" checked></ui5-radio-button>\n\t\t\t<ui5-radio-button name="selection" text="Single"></ui5-radio-button>\n\t\t\t<ui5-radio-button name="selection" text="None"></ui5-radio-button>\n\t\t</div>\n\n\t\t<ui5-table id="table" accessible-name-ref="title" no-data-text="No data found">\n\t\t\t<ui5-table-selection id="selection" slot="features"></ui5-table-selection>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol" importance="-1" min-width="300px">Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="weightCol" popin-text="Weight">Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="priceCol" min-width="220px" style="text-align: end;">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\t\t\t<ui5-table-row row-key="0">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="1">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-input value="29 x 17 x 3.1 cm" accessible-name-ref="dimensionsCol"></ui5-input></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="2">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/TableSelection.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/ComboBox.js";\nimport "@ui5/webcomponents/dist/ComboBoxItem.js";\n\nconst selectionFeature = document.getElementById("selection");\nconst selectionGroup = document.getElementById("selectionGroup");\nselectionGroup.addEventListener("change", (e) => {\n\tselectionFeature.selected = "";\n\tselectionFeature.mode = e.target.text;\n})';function a(e){const t={p:"p",strong:"strong",...(0,i.R)(),...e.components},{Editor:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Add selection capabilities to your Table by adding the ",(0,n.jsx)(t.strong,{children:"Selection"})," feature."]}),"\n",(0,n.jsxs)(t.p,{children:["The current TableSelection is key-based, therefore each row requires a ",(0,n.jsx)(t.strong,{children:"key"}),"-attribute to be uniquely identified."]}),"\n",(0,n.jsx)(l,{html:s,js:o})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}const d={slug:"../../TableSelection",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-selection",ui5_since:"2.0.0"},r=void 0,u={id:"components/main/Table/TableSelection",title:"TableSelection",description:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.",source:"@site/docs/components/main/Table/TableSelection.mdx",sourceDirName:"components/main/Table",slug:"/components/TableSelection",permalink:"/ui5-webcomponents/components/TableSelection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableSelection",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-selection",ui5_since:"2.0.0"},sidebar:"componentsSidebar",previous:{title:"TableRow",permalink:"/ui5-webcomponents/components/TableRow"},next:{title:"Tag",permalink:"/ui5-webcomponents/components/Tag"}},b={},h=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"mode",id:"mode",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"Basic Sample",id:"basic-sample",level:2}];function p(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change."})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-selection"})," component is used inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," ti add key-based selection capabilities to the ",(0,n.jsx)(t.code,{children:"ui5-table"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The component offers three selection modes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Single - select a single row."}),"\n",(0,n.jsx)(t.li,{children:"Multiple - select multiple rows."}),"\n",(0,n.jsx)(t.li,{children:"None - no selection active."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As the selection is key-based, ",(0,n.jsx)(t.code,{children:"ui5-table-row"})," components need to define a unique ",(0,n.jsx)(t.code,{children:"row-key"})," property."]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-selection"})," component is only used inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," component as a feature.\nIt has to be slotted inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," in the ",(0,n.jsx)(t.code,{children:"features"})," slot.\nThe component is not intended to be used as a standalone component."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<ui5-table>\n\t<ui5-table-selection mode="Multiple" slot="features"></ui5-table-selection>\n</ui5-table>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableSelection.js";'})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"mode",children:"mode"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the selection mode."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"None" | "Single" | "Multiple"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"Multiple"'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the selected rows separated by a space."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.p,{children:"No slots available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"change",children:"change"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Fired when selection is changed by user interaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(c,{})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},71184:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>a});var n=l(14041);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);