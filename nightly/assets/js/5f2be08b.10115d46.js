"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7571],{64291:(e,t,l)=>{l.d(t,{Ay:()=>r});var i=l(31085),n=l(71184);const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table id="table" overflow-mode="Popin">\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol" horizontal-align="Center" width="200px">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol" horizontal-align="Right" width="300px">Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="priceCol" width="220px">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell horizontal-align="Left"><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/Label.js";';function d(e){const{Editor:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(t,{html:a,js:o})}function r(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68111:(e,t,l)=>{l.d(t,{Ay:()=>r});var i=l(31085),n=l(71184);const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-slider id="slider" min="0" max="100" step="1" value="100" label-interval="0"></ui5-slider>\n\t\t<ui5-table id="table" overflow-mode="Popin">\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol" importance="-1" min-width="300px">Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="weightCol" min-width="100px">Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="priceCol" min-width="220px">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/Slider.js";\n\nconst table = document.getElementById("table");\nconst slider = document.getElementById("slider");\nslider.addEventListener("input", (e) => {\n\ttable.style.width = `${e.target.value}%`;\n});';function d(e){const t={p:"p",...(0,n.R)(),...e.components},{Editor:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Popin mode is a responsive design feature tailored to adapt column layouts in UI grids or tables, particularly for smaller screens or constrained container widths."}),"\n",(0,i.jsx)(t.p,{children:'When screen space becomes limited, Popin mode seamlessly reorganizes columns. Those that cannot fit within the available width are intelligently relocated to the "popin area", an allocated space designed specifically for accommodating additional columns.'}),"\n",(0,i.jsx)(t.p,{children:"You can influence the order of columns appearing the popin area, by defining the importance of each column."}),"\n",(0,i.jsx)(l,{html:a,js:o})]})}function r(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69870:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>b,default:()=>j,frontMatter:()=>h,metadata:()=>u,toc:()=>p});var i=l(31085),n=l(71184),a=l(68111);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table id="table" overflow-mode="Popin">\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol" width="200px"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol" min-width="100px" max-width="300px">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol" width="300px" min-width="50px" max-width="400px">Dimensions</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row>\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',d='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/Label.js";';function r(e){const t={code:"code",p:"p",...(0,n.R)(),...e.components},{Editor:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["You are able to set the width of the columns by using the ",(0,i.jsx)(t.code,{children:"width"}),", ",(0,i.jsx)(t.code,{children:"minWidth"})," and ",(0,i.jsx)(t.code,{children:"maxWidth"})," property."]}),"\n",(0,i.jsx)(l,{html:o,js:d})]})}function s(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var c=l(64291);const h={slug:"../../TableHeaderCell",sidebar_class_name:"expComponentBadge",ui5_tag_name:"ui5-table-header-cell",ui5_since:"2.0.0"},b=void 0,u={id:"components/main/Table/TableHeaderCell",title:"TableHeaderCell",description:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.",source:"@site/docs/components/main/Table/TableHeaderCell.mdx",sourceDirName:"components/main/Table",slug:"/components/TableHeaderCell",permalink:"/ui5-webcomponents/nightly/components/TableHeaderCell",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableHeaderCell",sidebar_class_name:"expComponentBadge",ui5_tag_name:"ui5-table-header-cell",ui5_since:"2.0.0"},sidebar:"componentsSidebar",previous:{title:"TableGrowing",permalink:"/ui5-webcomponents/nightly/components/TableGrowing"},next:{title:"TableHeaderRow",permalink:"/ui5-webcomponents/nightly/components/TableHeaderRow"}},x={},p=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"width",id:"width",level:3},{value:"minWidth",id:"minwidth",level:3},{value:"maxWidth",id:"maxwidth",level:3},{value:"importance",id:"importance",level:3},{value:"popinText",id:"popintext",level:3},{value:"horizontalAlign",id:"horizontalalign",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"Column widths",id:"column-widths",level:2},{value:"Popin Configuration",id:"popin-configuration",level:2},{value:"Horizontal cell alignment",id:"horizontal-cell-alignment",level:2}];function m(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change."})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ui5-table-header-cell"})," component represents a column in the ",(0,i.jsx)(t.code,{children:"ui5-table"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["As it is tightly coupled to the ",(0,i.jsx)(t.code,{children:"ui5-table"}),", it should only be used in the ",(0,i.jsx)(t.code,{children:"ui5-table-header-row"}),"\nto ensure correct layout and design."]}),"\n",(0,i.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableHeaderCell.js";'})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"width",children:"width"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the width of column."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"auto"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"minwidth",children:"minWidth"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the minimum width of the column.",(0,i.jsx)("br",{}),"If the table is in ",(0,i.jsx)(t.code,{children:"Popin"})," mode and the minimum width does not fit anymore, the column will move into the popin.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," If ",(0,i.jsx)(t.code,{children:"minWidth"})," has the ",(0,i.jsx)(t.code,{children:"auto"})," value, the table ensures that the column is wider than at least ",(0,i.jsx)(t.code,{children:"3rem"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"auto"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"maxwidth",children:"maxWidth"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the maximum width of the column."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"auto"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"importance",children:"importance"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the importance of the column.",(0,i.jsx)("br",{}),"This property affects the popin behaviour. Columns with higher importance will move into the popin area later then less important columns."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"popintext",children:"popinText"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"The text for the column when it pops in."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"2.7.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"horizontalalign",children:"horizontalAlign"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Determines the horizontal alignment of table cells."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Left" | "Start" | "Right" | "End" | "Center" | undefined'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the content of the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"column-widths",children:"Column widths"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(t.h2,{id:"popin-configuration",children:"Popin Configuration"}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(t.h2,{id:"horizontal-cell-alignment",children:"Horizontal cell alignment"}),"\n",(0,i.jsxs)(t.p,{children:["Controls the horizontal alignment of cells by using the ",(0,i.jsx)(t.code,{children:"horizontalAlign"})," property."]}),"\n",(0,i.jsxs)(t.p,{children:["Please note that the behavior of ",(0,i.jsx)(t.code,{children:"horizontalAlign"})," depends on where you set it:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"horizontalAlign"})," is set on ",(0,i.jsx)(t.code,{children:"TableHeaderCell"})," level",(0,i.jsx)("br",{}),"\nChanges the horizontal alignment of the ",(0,i.jsx)(t.code,{children:"TableHeaderCell"})," and its corresponding ",(0,i.jsx)(t.code,{children:"TableCell"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"horizontalAlign"})," is set on ",(0,i.jsx)(t.code,{children:"TableCell"})," level only",(0,i.jsx)("br",{}),"\nThe horizontal alignment is only changed for this one ",(0,i.jsx)(t.code,{children:"TableCell"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"horizontalAlign"})," is set on ",(0,i.jsx)(t.code,{children:"TableHeaderCell"})," and ",(0,i.jsx)(t.code,{children:"TableCell"})," level",(0,i.jsx)("br",{}),"\nChanging the ",(0,i.jsx)(t.code,{children:"horizontalAlign"})," property on ",(0,i.jsx)(t.code,{children:"TableHeaderCell"})," level changes only the ",(0,i.jsx)(t.code,{children:"TableHeaderCell"})," itself and those ",(0,i.jsx)(t.code,{children:"TableCell"})," without a ",(0,i.jsx)(t.code,{children:"horizontalAlign"})," property."]}),"\n"]}),"\n",(0,i.jsx)(c.Ay,{})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},71184:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>d});var i=l(14041);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);