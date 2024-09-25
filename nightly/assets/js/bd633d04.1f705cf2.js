"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4869],{21125:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var o=e(31085),i=e(71184);const u='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<link rel="stylesheet" href="./main.css">\n\t<title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: fit-content;">\n\n\t<div id="app">\n \n\t\t<ui5-title>AI Pattern / Level 3</ui5-title>\n\t\t\n\t\t<ui5-panel>\n\t\t\t<div slot="header" id="panelHeader">\n\t\n\t\t\t\t<ui5-button id="aiModelSelector" end-icon="slim-arrow-down">AI Model</ui5-button> <br>\n\t\n\t\t\t\t<ui5-menu id="aiModelMenu" opener="aiModelSelector">\n\t\t\t\t\t<ui5-menu-item text="Accent1"></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Accent2"></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Accent9"></ui5-menu-item>\n\t\t\t\t</ui5-menu>\n\t\n\t\t\t\t<div id="promptCountWrapper">\n\t\t\t\t\t<ui5-label id="label-for-ui5-text" for="promptCount" wrapping-type="None">Prompt count:</ui5-label>\n\t\t\t\t\t<ui5-text id="promptCount">0</ui5-text>\n\t\t\t\t</div>\n\t\n\t\t\t\t<ui5-ai-button id="myAiButtonIconOnly" state="revise">\n\t\t\t\t\t<ui5-ai-button-state name="generate" icon="ai"></ui5-ai-button-state>\n\t\t\t\t\t<ui5-ai-button-state name="generating" icon="stop"></ui5-ai-button-state>\n\t\t\t\t\t<ui5-ai-button-state name="revise" icon="ai" end-icon="navigation-down-arrow"></ui5-ai-button-state>\n\t\t\t\t</ui5-ai-button>\n\t\t\t\n\t\t\t\t<ui5-menu id="menu">\n\t\t\t\t\t<ui5-menu-item text="Regenerate"></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Fix Spelling & Grammar" starts-section></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Change Tone">\n\t\t\t\t\t\t<ui5-menu-item text="Option 1"></ui5-menu-item>\n\t\t\t\t\t\t<ui5-menu-item text="Option 2"></ui5-menu-item>\n\t\t\t\t\t\t<ui5-menu-item text="Option 3"></ui5-menu-item>\n\t\t\t\t\t</ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Text Length">\n\t\t\t\t\t\t<ui5-menu-item text="Short"></ui5-menu-item>\n\t\t\t\t\t\t<ui5-menu-item text="Medium"></ui5-menu-item>\n\t\t\t\t\t\t<ui5-menu-item text="Long"></ui5-menu-item>\n\t\t\t\t\t</ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Bulleted List"></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item text="Translate">\n\t\t\t\t\t\t<ui5-menu-item text="English"></ui5-menu-item>\n\t\t\t\t\t\t<ui5-menu-item text="German"></ui5-menu-item>\n\t\t\t\t\t\t<ui5-menu-item text="Spanish"></ui5-menu-item>\n\t\t\t\t\t</ui5-menu-item>\n\t\t\t\t</ui5-menu>\n\t\t\t</div>\n\t\t\t<div id="panelContent">\n\t\t\t\t<div id="panelContentFirstRow">\n\t\t\t\t\t<ui5-avatar id="myAvatar" size="XS" shape="Square"></ui5-avatar>\n\t\t\t\t\t<ui5-ai-prompt-input id="promptInput" show-clear-icon placeholder="Ask me anything..." label="User prompt:" maxlength="10" show-exceeded-text></ui5-ai-prompt-input>\n\t\t\t\t</div>\n\t\n\t\t\t\t<ui5-toolbar align-content="Start">\n\t\t\t\t\t<ui5-toolbar-button icon="doc-attachment" text="Attach file"></ui5-toolbar-button>\n\t\t\t\t\t<ui5-toolbar-button icon="background" text="Add image"></ui5-toolbar-button>\n\t\t\t\t\t<ui5-toolbar-button icon="sound-loud" text="Insert audio"></ui5-toolbar-button>\n\t\t\t\t\t<ui5-toolbar-separator></ui5-toolbar-separator>\n\t\t\t\t\t<ui5-toolbar-button icon="history" text="History"></ui5-toolbar-button>\n\t\t\t\t\t<ui5-toolbar-button icon="favorite" text="Favorite prompts"></ui5-toolbar-button>\n\t\t\t\t</ui5-toolbar>\n\t\t\t</div>\n\t\t</ui5-panel>\n\t</div>\t\n\n\t\x3c!-- playground-fold --\x3e\n\t<script type="module" src="main.js"><\/script>\n</body>\n\t\n</html>\n\x3c!-- playground-fold-end --\x3e',r="body {\n\tbackground-color: var(--sapBackgroundColor)\n}\n\n#panelContent,\n#panelContentFirstRow,\n#panelHeader {\n\tdisplay: flex;\n\tflex: 1;\n\twidth: 100%;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n#panelContentFirstRow,\n#panelHeader {\n\tflex-direction: row;\n\tgap: .5rem;\n}\n\n#panelHeader {\n\tjustify-content: end;\n}\n\n#panelHeader > ui5-button {\n\tmargin-right: auto;\n}\n\n#promptCountWrapper {\n\tdisplay: flex\n}",a="import '@ui5/webcomponents/dist/Avatar.js';\nimport '@ui5/webcomponents-ai/dist/Button.js';\nimport '@ui5/webcomponents-ai/dist/PromptInput.js';\nimport '@ui5/webcomponents-icons/dist/ai.js';\nimport '@ui5/webcomponents-icons/dist/stop.js';\nimport '@ui5/webcomponents-icons/dist/slim-arrow-down.js';\nimport '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';\nimport '@ui5/webcomponents-icons/dist/doc-attachment.js';\nimport '@ui5/webcomponents-icons/dist/background.js';\nimport '@ui5/webcomponents-icons/dist/sound-loud.js';\nimport '@ui5/webcomponents-icons/dist/history.js';\nimport '@ui5/webcomponents-icons/dist/favorite.js';\n\nimport '@ui5/webcomponents/dist/Input.js';\nimport '@ui5/webcomponents/dist/Panel.js';\n\nimport '@ui5/webcomponents/dist/Label.js';\nimport '@ui5/webcomponents/dist/Text.js';\nimport '@ui5/webcomponents/dist/Toolbar.js';\nimport '@ui5/webcomponents/dist/Menu.js';\nimport '@ui5/webcomponents/dist/MenuItem.js';\nimport '@ui5/webcomponents/dist/ToolbarButton.js';\nimport '@ui5/webcomponents/dist/ToolbarSeparator.js';\n\nvar generationId,\npromptCounter = 0;\n\nfunction startGeneration(button) {\n\tconsole.warn('startGeneration');\n\tgenerationId = setTimeout(function () {\n\tconsole.warn('Generation completed');\n\tbutton.state = 'revise';\n\t}, 3000);\n}\n\nfunction stopGeneration() {\n\tconsole.warn('stopGeneration');\n\tclearTimeout(generationId);\n}\n\nfunction aiButtonClickHandler(evt) {\n\tvar button = evt.target;\n\tswitch (button.state) {\n\tcase '':\n\tcase 'generate':\n\t\tbutton.state = 'generating';\n\t\tstartGeneration(button);\n\t\tbreak;\n\tcase 'generating':\n\t\tbutton.state = 'generate';\n\t\tstopGeneration();\n\t\tbreak;\n\tcase 'revise':\n\t\tmenu.opener = button;\n\t\tmenu.open = true;\n\t\tbreak;\n\t}\n}\n\nmyAiButtonIconOnly.addEventListener('click', aiButtonClickHandler);\npromptInput.addEventListener('ui5-change', function () {\n\tpromptCounter++;\n\tpromptCount.textContent = promptCounter;\n});\n\nmenu.addEventListener('item-click', function (evt) {\n\tvar button = menu.opener;\n\tif (evt.detail.text === 'Regenerate') {\n\tbutton.state = 'generating';\n\tstartGeneration(button);\n\t}\n});\n\naiModelSelector.addEventListener('click', function (event) {\n\taiModelMenu.open = !aiModelMenu.open;\n});\n\naiModelMenu.addEventListener('ui5-item-click', function (event) {\n\tmyAvatar.colorScheme = event.detail.text;\n});\n",s={},m=void 0,p={id:"components/patterns/AI Custom Prompt/Level 3/Level 3",title:"Level 3",description:"Overview",source:"@site/docs/components/patterns/AI Custom Prompt/Level 3/Level 3.md",sourceDirName:"components/patterns/AI Custom Prompt/Level 3",slug:"/components/patterns/AI Custom Prompt/Level 3/",permalink:"/ui5-webcomponents/nightly/components/patterns/AI Custom Prompt/Level 3/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Level 2",permalink:"/ui5-webcomponents/nightly/components/patterns/AI Custom Prompt/Level 2/"},next:{title:"Level 4",permalink:"/ui5-webcomponents/nightly/components/patterns/AI Custom Prompt/Level 4/"}},c={},l=[{value:"Overview",id:"overview",level:3}];function d(t){const n={h3:"h3",p:"p",...(0,i.R)(),...t.components},{Editor:e}=n;return e||function(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"On top of Level 2, we can now chose a different AI model from the top-left dropdown. Additionally we have prompt count and AI button with more options in the top-right of the panel."}),"\n",(0,o.jsx)(e,{html:u,js:a,css:r})]})}function b(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},71184:(t,n,e)=>{e.d(n,{R:()=>r,x:()=>a});var o=e(14041);const i={},u=o.createContext(i);function r(t){const n=o.useContext(u);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(u.Provider,{value:n},t.children)}}}]);