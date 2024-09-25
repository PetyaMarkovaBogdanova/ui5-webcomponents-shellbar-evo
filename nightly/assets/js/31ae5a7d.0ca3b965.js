"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[5698],{97599:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>r});var i=e(31085),o=e(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<style>\n\t\t#btn {\n\t\t\tdisplay: none;\n\t\t\tposition: absolute;\n\t\t}\n\t</style>\n\t<title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 300px;">\n\t\x3c!-- playground-fold-end --\x3e\n\n\t<ui5-label for="ai-input">Input with selection assistant.</ui5-label>\n\t<br>\n\t<ui5-input id="ai-input"\n\t\tvalue="Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut."></ui5-input>\n\t<br>\n\t<br>\n\n\t<ui5-label for="ai-native-input">Input with native API.</ui5-label>\n\t<br>\n\t<ui5-input id="ai-native-input"\n\t\tvalue="Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut."></ui5-input>\n\n\t<ui5-button id="btn" icon="ai"></ui5-button>\n\t<ui5-toast id="toast"></ui5-toast>\n\t\x3c!-- playground-fold --\x3e\n\t<script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e',u="import '@ui5/webcomponents/dist/Icon.js';\nimport '@ui5/webcomponents/dist/Label.js';\nimport '@ui5/webcomponents/dist/Input.js';\nimport '@ui5/webcomponents/dist/Text.js';\nimport '@ui5/webcomponents/dist/Button.js';\nimport '@ui5/webcomponents/dist/Toast.js';\nimport '@ui5/webcomponents-icons/dist/ai.js';\nimport getElementSelection from \"@ui5/webcomponents-base/dist/util/SelectionAssistant.js\";\n\nconst nativeInput = document.getElementById('ai-native-input');\nconst input = document.getElementById('ai-input');\nconst button = document.getElementById('btn');\nconst toast = [...document.getElementsByTagName(\"ui5-toast\")][0];\n\nconst repositionButtonAtSelection = (rect) => {\n\tbutton.style.left = `${rect.left + rect.width}px`;\n\tbutton.style.top = `${rect.top + rect.height}px`;\n\tshowButton();\n};\n\nconst repositionButtonAtInput = (rect) => {\n\tbutton.style.left = `${rect.left + rect.width + 4}px`;\n\tbutton.style.top = `${rect.top}px`;\n\tshowButton();\n};\n\nconst showButton = () => {\n\tbutton.style.zIndex = '100';\n\tbutton.style.display = 'inline-block';\n};\n\nconst hideButton = () => {\n\tbutton.style.display = 'none';\n};\n\ninput.addEventListener('ui5-select', (e) => {\n\tconst selectionRect = getElementSelection(input);\n\tconst inputRect = input.getBoundingClientRect();\n\n\tif (selectionRect.bottom > inputRect.bottom || selectionRect.right > inputRect.right) {\n\t\trepositionButtonAtInput(inputRect);\n\t} else {\n\t\trepositionButtonAtSelection(selectionRect);\n\t}\n});\n\ninput.addEventListener('mousedown', (e) => {\n\thideButton();\n});\n\ninput.addEventListener('ui5-scroll', (e) => {\n\thideButton();\n});\n\ninput.addEventListener('focusout', (e) => {\n\tif (e.relatedTarget !== button) {\n\t\thideButton();\n\t}\n});\n\nnativeInput.addEventListener('ui5-select', (e) => {\n\tconst inputRect = nativeInput.getBoundingClientRect();\n\trepositionButtonAtInput(inputRect);\n});\n\nnativeInput.addEventListener('click', (e) => {\n\thideButton();\n});\n\nnativeInput.addEventListener('ui5-scroll', (e) => {\n\thideButton();\n});\n\nnativeInput.addEventListener('focusout', (e) => {\n\tif (e.relatedTarget !== button) {\n\t\thideButton();\n\t}\n});\n\nbutton.addEventListener('focusout', (e) => {\n\thideButton();\n});\n\nbutton.addEventListener('click', (e) => {\n\tconst selectedText = document.getSelection().toString();\n\tconst message = `The selected text equals to: \"${selectedText}\"`;\n\n\ttoast.textContent = message;\n\ttoast.open = true;\n});",c={},a=void 0,p={id:"components/patterns/SelectionAssistant/InputSelectionAssistant/Basic/Basic",title:"Basic",description:"",source:"@site/docs/components/patterns/SelectionAssistant/InputSelectionAssistant/Basic/Basic.md",sourceDirName:"components/patterns/SelectionAssistant/InputSelectionAssistant/Basic",slug:"/components/patterns/SelectionAssistant/InputSelectionAssistant/Basic/",permalink:"/ui5-webcomponents/nightly/components/patterns/SelectionAssistant/InputSelectionAssistant/Basic/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"AI QuickPrompt",permalink:"/ui5-webcomponents/nightly/components/patterns/AI QuickPrompt/"},next:{title:"Selection Assistant",permalink:"/ui5-webcomponents/nightly/components/patterns/SelectionAssistant/Selection Assistant"}},l={},r=[];function d(t){const{Editor:n}={...(0,o.R)(),...t.components};return n||function(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:s,js:u})}function m(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},71184:(t,n,e)=>{e.d(n,{R:()=>u,x:()=>c});var i=e(14041);const o={},s=i.createContext(o);function u(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:u(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);