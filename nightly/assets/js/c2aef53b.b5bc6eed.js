"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9242],{26285:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>K,contentTitle:()=>O,default:()=>J,frontMatter:()=>N,metadata:()=>W,toc:()=>Q});var t=n(31085),l=n(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-media-gallery id="media-gallery" show-all-thumbnails>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1000.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1010.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1022.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1030.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-2002.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-2026.jpg" />\n        </ui5-media-gallery-item>\n    </ui5-media-gallery>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',r="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function d(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:s,js:a,css:r})}function o(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <div class="container">\n        <ui5-media-gallery interactive-display-area>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1000.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1010.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1022.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1030.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-2002.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-2026.jpg" />\n            </ui5-media-gallery-item>\n        </ui5-media-gallery>\n\n        <div class="details">\n            <ui5-title level="H4">Item Details</ui5-title>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis\n            quam lectus, tristique semper mi et, faucibus viverra metus.\n            Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat.\n            Morbi congue diam id enim porttitor, sit amet placerat nunc\n            pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam\n            erat volutpat. Vestibulum et enim sit amet ipsum tincidunt\n            aliquet nec in dui. Sed dui est, hendrerit non sollicitudin\n            quis, venenatis vel libero. Suspendisse sit amet lorem posuere,\n            egestas neque eget, sodales ipsum. Donec sollicitudin leo ut\n            risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio,\n            viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi.\n            Aliquam fermentum nec felis sit amet tristique. Nunc luctus a\n            lacus non semper. Curabitur euismod tellus id massa mattis, in\n            consectetur mi luctus. Mauris dignissim efficitur lobortis.\n            Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus\n            nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.\n        </div>\n    </div>\n    </div>\n\n    <ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch>\n        <ui5-bar design="Header" slot="header">\n            <ui5-label>Item</ui5-label>\n        </ui5-bar>\n        <ui5-media-gallery show-all-thumbnails>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1000.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1010.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1022.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1030.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-2002.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-2026.jpg" />\n            </ui5-media-gallery-item>\n        </ui5-media-gallery>\n        <div slot="footer" class="dialog-footer">\n            <div style="flex: 1;"></div>\n            <ui5-button id="closeDialogButton">Close</ui5-button>\n        </div>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',m='import "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Title.js";\n\nimport "@ui5/webcomponents/dist/Bar.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";\n\nconst mediaGalleryDialog = document.getElementById("mediaGalleryDialog");\nconst mediaGallery = document.querySelector(".container > ui5-media-gallery");\nconst closeDialogButton = document.getElementById("closeDialogButton");\n\ncloseDialogButton.addEventListener("click", () => {\n    mediaGalleryDialog.open = false;\n});\nmediaGallery.addEventListener("overflow-click", (event) => {\n    mediaGalleryDialog.open = true;\n});\nmediaGallery.addEventListener(\n    "display-area-click",\n    (event) => {\n        mediaGalleryDialog.open = true;\n    }\n);',h="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}\n\n@media (min-width: 612px) {\n    .container {\n        display: grid;\n        gap: 1rem;\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n.details {\n    background: var(--sapBaseColor);\n    padding: 1rem;\n    color: var(--sapTextColor);\n}\n\n.dialog-footer {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 0px 0.5rem 0px 0px;\n}";function u(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:c,js:m,css:h})}function p(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}const g='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n        <ui5-media-gallery layout="Horizontal" show-all-thumbnails menu-horizontal-align="Right">\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1000.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1010.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1022.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-1030.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-2002.jpg" />\n            </ui5-media-gallery-item>\n            <ui5-media-gallery-item>\n                <img src="../assets/images/HT-2026.jpg" />\n            </ui5-media-gallery-item>\n        </ui5-media-gallery>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',y='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',x="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function j(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:g,js:y,css:x})}function f(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}const b='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-media-gallery layout="Horizontal" show-all-thumbnails menu-horizontal-align="Right">\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1000.jpg" />\n            <img src="../assets/images/HT-1000-small.jpg" slot="thumbnail" />\n        </ui5-media-gallery-item>\n    </ui5-media-gallery>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',v='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',w="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function T(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:b,js:v,css:w})}function k(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(T,{...e})}):T(e)}const E='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-media-gallery id="media-gallery">\n        <ui5-media-gallery-item layout="Wide">\n            <iframe src="https://www.youtube.com/embed/GxGZG2fv6Aw" title="YouTube video player" frameborder="0"\n                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n                allowfullscreen></iframe>\n            <img src="../assets/images/sap-logo-square.svg" slot="thumbnail" alt="SAP Video" />\n        </ui5-media-gallery-item>\n    </ui5-media-gallery>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',H='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',D="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function M(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:E,js:H,css:D})}function G(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(M,{...e})}):M(e)}const C='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-media-gallery layout="Vertical" show-all-thumbnails>\n        <ui5-media-gallery-item disabled>\n            <img src="../assets/images/HT-1000.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1010.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1022.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1030.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-2002.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-2026.jpg" />\n        </ui5-media-gallery-item>\n    </ui5-media-gallery>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',I='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',S="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function R(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:C,js:I,css:S})}function B(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(R,{...e})}):R(e)}const z='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-media-gallery layout="Horizontal">\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1000.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item selected>\n            <img src="../assets/images/HT-1010.jpg" />\n        </ui5-media-gallery-item>\n    </ui5-media-gallery>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',A='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',P="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function F(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:z,js:A,css:P})}function U(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(F,{...e})}):F(e)}const V='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-media-gallery layout="Vertical" show-all-thumbnails>\n        <ui5-media-gallery-item disabled>\n            <img src="../assets/images/HT-1000.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1010.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1022.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-1030.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-2002.jpg" />\n        </ui5-media-gallery-item>\n        <ui5-media-gallery-item>\n            <img src="../assets/images/HT-2026.jpg" />\n        </ui5-media-gallery-item>\n    </ui5-media-gallery>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',q='import "@ui5/webcomponents-fiori/dist/MediaGallery.js";\nimport "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";',L="ui5-media-gallery-item:not(:defined) {\n    visibility: hidden;\n}\n\n@media (min-width: 600px) {\n    ui5-media-gallery {\n        height: 50rem;\n    }\n}";function _(e){const{Editor:i}={...(0,l.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:V,js:q,css:L})}function Y(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}const N={ui5_tag_name:"ui5-media-gallery",ui5_since:"1.1.0"},O=void 0,W={id:"components/fiori/MediaGallery/MediaGallery",title:"MediaGallery",description:"The ui5-media-gallery component allows the user to browse through multimedia items. Currently,",source:"@site/docs/components/fiori/MediaGallery/MediaGallery.mdx",sourceDirName:"components/fiori/MediaGallery",slug:"/components/fiori/MediaGallery/",permalink:"/ui5-webcomponents/nightly/components/fiori/MediaGallery/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{ui5_tag_name:"ui5-media-gallery",ui5_since:"1.1.0"},sidebar:"componentsSidebar",previous:{title:"IllustratedMessage",permalink:"/ui5-webcomponents/nightly/components/fiori/IllustratedMessage"},next:{title:"MediaGalleryItem",permalink:"/ui5-webcomponents/nightly/components/fiori/MediaGalleryItem"}},K={},Q=[{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"showAllThumbnails",id:"showallthumbnails",level:3},{value:"interactiveDisplayArea",id:"interactivedisplayarea",level:3},{value:"layout",id:"layout",level:3},{value:"menuHorizontalAlign",id:"menuhorizontalalign",level:3},{value:"menuVerticalAlign",id:"menuverticalalign",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"selection-change",id:"selection-change",level:3},{value:"overflow-click",id:"overflow-click",level:3},{value:"display-area-click",id:"display-area-click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Vertical Layout",id:"vertical-layout",level:3},{value:"Horizontal Layout",id:"horizontal-layout",level:3},{value:"Custom Thumbnail",id:"custom-thumbnail",level:3},{value:"Selected Item",id:"selected-item",level:3},{value:"Disabled Item",id:"disabled-item",level:3},{value:"Interactive Display Area",id:"interactive-display-area",level:3},{value:"Show Video Content",id:"show-video-content",level:3}];function Z(e){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"ui5-media-gallery"})," component allows the user to browse through multimedia items. Currently,\nthe supported items are images and videos. The items should be defined using the ",(0,t.jsx)(i.code,{children:"ui5-media-gallery-item"}),"\ncomponent."]}),"\n",(0,t.jsx)(i.p,{children:"The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item\nis displayed in larger size."}),"\n",(0,t.jsx)(i.p,{children:"The component is responsive by default and adjusts the position of the menu with respect to viewport size,\nbut the application is able to further customize the layout via the provided API."}),"\n",(0,t.jsx)(i.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"ui5-media-gallery"})," provides advanced keyboard handling."]}),"\n",(0,t.jsx)(i.p,{children:"When the thumbnails menu is focused the following keyboard\nshortcuts allow the user to navigate through the thumbnail items:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"[Up] or [Down] - Navigates up and down the items"}),"\n",(0,t.jsx)(i.li,{children:"[Home] - Navigates to first item"}),"\n",(0,t.jsx)(i.li,{children:"[End] - Navigates to the last item"}),"\n",(0,t.jsx)(i.li,{children:"[Space], [Enter] - Selects an item"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/MediaGallery.js";'})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";'})}),"\n",(0,t.jsx)(i.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(i.h3,{id:"showallthumbnails",children:"showAllThumbnails"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["If set to ",(0,t.jsx)(i.code,{children:"true"}),", all thumbnails are rendered in a scrollable container. If ",(0,t.jsx)(i.code,{children:"false"}),", only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"interactivedisplayarea",children:"interactiveDisplayArea"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["If enabled, a ",(0,t.jsx)(i.code,{children:"display-area-click"})," event is fired when the user clicks or taps on the display area.",(0,t.jsx)("br",{}),"The display area is the central area that contains the enlarged content of the currently selected item."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"layout",children:"layout"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Determines the layout of the component."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"Auto" | "Vertical" | "Horizontal"'})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:'"Auto"'})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"menuhorizontalalign",children:"menuHorizontalAlign"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Determines the horizontal alignment of the thumbnails menu vs. the central display area."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"Left" | "Right"'})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:'"Left"'})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"menuverticalalign",children:"menuVerticalAlign"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Determines the vertical alignment of the thumbnails menu vs. the central display area."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"Top" | "Bottom"'})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:'"Bottom"'})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsx)(i.h3,{id:"default",children:"default"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the component items.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," Only one selected item is allowed.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," Use the ",(0,t.jsx)(i.code,{children:"ui5-media-gallery-item"})," component to define the desired items."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<IMediaGalleryItem>"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(i.h3,{id:"selection-change",children:"selection-change"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired when selection is changed by user interaction."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<MediaGallerySelectionChangeEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"item"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"the selected item."]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"overflow-click",children:"overflow-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired when the thumbnails overflow button is clicked."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"display-area-click",children:"display-area-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired when the display area is clicked. The display area is the central area that contains the enlarged content of the currently selected item."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.p,{children:"No methods available for this component."}),"\n",(0,t.jsx)(i.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,t.jsx)(i.p,{children:"No CSS parts available for this component."}),"\n",(0,t.jsx)(i.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,t.jsx)(i.h3,{id:"vertical-layout",children:"Vertical Layout"}),"\n",(0,t.jsxs)(i.p,{children:["The thumbnails and selected item are vertically placed. To enable this layout - set ",(0,t.jsx)("b",{children:'layout="Vertical"'}),"."]}),"\n",(0,t.jsx)(B,{}),"\n",(0,t.jsx)(i.h3,{id:"horizontal-layout",children:"Horizontal Layout"}),"\n",(0,t.jsxs)(i.p,{children:["The thumbnails and selected item are vertically placed. To enable this layout - set ",(0,t.jsx)("b",{children:'layout="Horizontal"'}),".\nFurthermore, you can also define on which side of the selected item you preffer to place the thumnails.\nFor instance, setting ",(0,t.jsx)("b",{children:'menu-horizontal-align="Right"'})," will place the thumbnails on the rigtht."]}),"\n",(0,t.jsx)(f,{}),"\n",(0,t.jsx)(i.h3,{id:"custom-thumbnail",children:"Custom Thumbnail"}),"\n",(0,t.jsxs)(i.p,{children:["By default the image, passed to the MediaGalleryItem, is reused as a thumbnail that the user clicks.\nHowever, you can display another image as thumbnail via the ",(0,t.jsx)("b",{children:"thumbnail"})," slot of the  ",(0,t.jsx)("b",{children:"MediaGalleryItem"}),"."]}),"\n",(0,t.jsx)(k,{}),"\n",(0,t.jsx)(i.h3,{id:"selected-item",children:"Selected Item"}),"\n",(0,t.jsx)(i.p,{children:"You can predefine the selected item."}),"\n",(0,t.jsx)(U,{}),"\n",(0,t.jsx)(i.h3,{id:"disabled-item",children:"Disabled Item"}),"\n",(0,t.jsx)(i.p,{children:"The MediaGallery can show diasbled items as well. In this sample, the first item is disabled and second is shown."}),"\n",(0,t.jsx)(Y,{}),"\n",(0,t.jsx)(i.h3,{id:"interactive-display-area",children:"Interactive Display Area"}),"\n",(0,t.jsxs)(i.p,{children:["Setting ",(0,t.jsx)("b",{children:"interactiveDisplayArea"})," property makes the diplay area (where the media content is displayed) interactive, e.g. clickable.\nIn the sample, clicking on the  diplay area fires an event, and in this case we show a dialog, but the application can do whatever suitable in the given scenario."]}),"\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(i.h3,{id:"show-video-content",children:"Show Video Content"}),"\n",(0,t.jsx)(G,{})]})}function J(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(Z,{...e})}):Z(e)}},71184:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var t=n(14041);const l={},s=t.createContext(l);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);