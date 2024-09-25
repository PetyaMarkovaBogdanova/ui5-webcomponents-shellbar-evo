"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8247],{10700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>x,toc:()=>k});var o=n(31085),i=n(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n<body style="background-color: var(--sapBackgroundColor)">\n\x3c!-- playground-fold-end --\x3e\n\n<ui5-token text="green"></ui5-token>\n<ui5-token text="healthy" selected></ui5-token>\n<ui5-token text="vegan"></ui5-token>\n<ui5-token text="low fat" selected></ui5-token>\n\n\n\x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n</html>\n\x3c!-- playground-fold-end --\x3e\n\n',l='import "@ui5/webcomponents/dist/Token.js";';function r(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(t,{html:s,js:l})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n<body style="background-color: var(--sapBackgroundColor);height: 350px;">\n\x3c!-- playground-fold-end --\x3e\n\n<ui5-multi-input id="multi-input">\n    <ui5-token text="green" slot="tokens"></ui5-token>\n    <ui5-token text="healthy" selected slot="tokens"></ui5-token>\n    <ui5-token text="vegan" slot="tokens"></ui5-token>\n    <ui5-token text="low fat" selected slot="tokens"></ui5-token>\n</ui5-multi-input>\n\n\x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n</html>\n\x3c!-- playground-fold-end --\x3e\n\n',a='import "@ui5/webcomponents/dist/MultiInput.js";\nimport "@ui5/webcomponents/dist/Token.js";\n\nconst multiInput = document.getElementById("multi-input")\n\nconst createTokenFromText = (text) => {\n    let token = document.createElement("ui5-token");\n    token.setAttribute("text", text);\n    token.setAttribute("slot", "tokens");\n    return token;\n};\n\nmultiInput.addEventListener("change", (event) => {\n\tconst inputValue = event.target.value;\n\n    if (inputValue) {\n\t\tmultiInput.appendChild(createTokenFromText(inputValue));\n\t\tmultiInput.value = "";\n    }\n});\n\nmultiInput.addEventListener("token-delete", (event) => {\n\tconst tokens = event.detail?.tokens;\n\n\tif (tokens) {\n\t\ttokens.forEach(token => token.remove());\n\t}\n});';function u(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(t,{html:c,js:a})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}const p={slug:"../Token",ui5_tag_name:"ui5-token",ui5_since:"1.0.0-rc.9"},m=void 0,x={id:"components/main/Token",title:"Token",description:"Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.",source:"@site/docs/components/main/Token.mdx",sourceDirName:"components/main",slug:"/components/Token",permalink:"/ui5-webcomponents/components/Token",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../Token",ui5_tag_name:"ui5-token",ui5_since:"1.0.0-rc.9"},sidebar:"componentsSidebar",previous:{title:"ToggleButton",permalink:"/ui5-webcomponents/components/ToggleButton"},next:{title:"Tokenizer",permalink:"/ui5-webcomponents/components/Tokenizer"}},j={},k=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"text",id:"text",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"closeIcon",id:"closeicon",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Token in MultiInput",id:"token-in-multiinput",level:3}];function v(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items."}),"\n",(0,o.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/Token.js";'})}),"\n",(0,o.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(t.h3,{id:"text",children:"text"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Description"}),(0,o.jsx)(t.td,{children:"Defines the text of the token."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Type"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string | undefined"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Default"}),(0,o.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Description"}),(0,o.jsx)(t.td,{children:"Defines whether the component is selected or not."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Type"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"boolean"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Default"}),(0,o.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,o.jsx)(t.h3,{id:"closeicon",children:"closeIcon"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Description"}),(0,o.jsxs)(t.td,{children:["Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts ",(0,o.jsx)(t.code,{children:"ui5-icon"}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Type"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Array<IIcon>"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Since"}),(0,o.jsx)(t.td,{children:"1.0.0-rc.9"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,o.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,o.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,o.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,o.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,o.jsx)(t.h3,{id:"token-in-multiinput",children:"Token in MultiInput"}),"\n",(0,o.jsx)(t.p,{children:'You can Remove tokens by clicking the "X" button and add tokens\nby typing something in the input field, followed by "ENTER".'}),"\n",(0,o.jsx)(h,{})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var o=n(14041);const i={},s=o.createContext(i);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);