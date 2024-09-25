"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[756],{62296:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/releases/announcing-v2","metadata":{"permalink":"/ui5-webcomponents/nightly/blog/releases/announcing-v2","source":"@site/blog/releases/announcing-v2.mdx","title":"Announcing UI5 Web Components 2.0! A New Era Begins!","description":"A Journey of Innovation and Growth","date":"2024-07-03T10:00:00.000Z","formattedDate":"July 3, 2024","tags":[{"label":"release","permalink":"/ui5-webcomponents/nightly/blog/tags/release"},{"label":"v2","permalink":"/ui5-webcomponents/nightly/blog/tags/v-2"}],"readingTime":7.505,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Announcing UI5 Web Components 2.0! A New Era Begins!","tags":["release","v2"],"slug":"/releases/announcing-v2","date":"2024-07-03T10:00"},"unlisted":false,"nextItem":{"title":"Popover API in UI5 Web Components 2.0","permalink":"/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2"}},"content":"## A Journey of Innovation and Growth \\n\\nSince the release of UI5 Web Components 1.0 in 2021, our journey has been marked by unwavering innovation and a commitment to excellence. Over the past three years, we have listened to our community, refined our technologies, and expanded our capabilities. \\n\\n![UI5 Web Components timeline](./img/ui5webcomponents_timeline.png)\\n\\nOur project has continuously evolved, embracing new web standards, eliminating legacy code, and integrating invaluable user feedback from our community to enhance our APIs. This journey culminated in April with the unveiling of the first Release Candidate for UI5 Web Components 2.0.\\n\\n## Announcing UI5 Web Components 2.0! \ud83c\udf89 \\n\\nToday, we stand at a pivotal moment in our evolution with the official launch of UI5 Web Components 2.0. This major release marks a new era, enhancing performance and reliability while setting the stage for future innovations. Our commitment to growth and providing cutting-edge tools for web development ensures we continue to meet the evolving needs of our community.\\n\\n**Key Benefits of UI5 Web Components 2.0**\\n\\nUI5 Web Components 2.0 introduces several substantial improvements: \\n\\n- Embracing New Standards: Future-proofing UI5 Web Components. \\n\\n- Consistent APIs: Streamlined and more intuitive, albeit with some breaking changes. \\n\\n- Elimination of Legacy Code: Reducing footprint and enhancing quality by minimizing bugs.  \\n\\nLooking ahead, we will adhere to Semantic Versioning and release major updates more frequently to keep pace with technological advancements. \\n\\n## What\'s New in UI5 Web Components 2.0? \\n\\n### **Revolutionary Popover API**\\n\\nExperience a standardized, consistent, and flexible mechanism for displaying popover content across all relevant components.  \\nThis API allows popups to display correctly above all other content, eliminating the need for the \\"static area\\" used in version 1.x. Previously, popups were placed in a static area within the body to ensure correct positioning despite various CSS rules. In version 2.x, the [popover API](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) simplifies the DOM structure by incorporating the popover directly within the component. This results in easier development, maintenance, and enhanced styling capabilities. It also allows components with popups to have physical children, supporting custom content and simplifying testing. The popover API is fully supported by all major browsers. Discover all the practical benefits in our [blog post](https://sap.github.io/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2/).\\n\\n### **Form-Associated Custom Elements**\\n\\nHarness the power of native input behavior within HTML forms. This enhancement makes the features/InputElementsFormSupport.js feature redundant, simplifying form handling and enhancing the developer experience. Refer to the [ElementInternals API documentation](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) for more details. \\n\\n### **Seamless Time Zone Support**\\n\\nSeamlessly manage time zones within your applications for a more personalized user experience. The date and time components are adapted to the time zone feature, allowing the components to present dates in different time zones. The time zone identifiers format is the one used in the IANA time zone database. See a [sample](https://sap.github.io/ui5-webcomponents/nightly/components/DateTimePicker/#timezones) on our website.\\n\\n### **New Components**\\n\\nExpand your UI toolkit with new components such as Dynamic Page, Form, Table, Text, Tokenizer, AI Button, and AI Prompt Input. \\n\\n- [Dynamic Page](https://sap.github.io/ui5-webcomponents/nightly/components/fiori/DynamicPage/): A layout component, representing a web page, consisting of a title, a header with dynamic behavior, a content area, and an optional floating footer. Use the Dynamic Page if you need to have a title, that is always visible and a header, that has configurable Expanding/Snapping functionality. \\n- [Form](https://sap.github.io/ui5-webcomponents/nightly/components/Form/): The `ui5-form` is a layout component that arranges labels and form fields (like input fields) pairs into a specific number of columns. And, there is also \\"grouping\\" available to assist the implementation of richer UIs. The Form component reacts and changes its layout on predefined breakpoints.\\n- [Table](https://sap.github.io/ui5-webcomponents/nightly/components/Table/): The `ui5-table` component provides a set of sophisticated features for displaying and dealing with vast amounts of data in a responsive manner. This Table replaces the previous Table web component, that has been part of @ui5/webcomponents version 1.x. For compatibility reasons, we moved the previous Table implementation to the `@ui5/webcomponents-compat` package and will be maintained until the new Table is experimental.\\n- [Text](https://sap.github.io/ui5-webcomponents/nightly/components/Text/): The `ui5-text` component displays text that can be used in any content area of an application. By default, the text will wrap when the space is not enough. In addition, the component supports truncation via the max-lines property, which defines the number of lines the text should wrap before it starts truncating.\\n- [Tokenizer](https://sap.github.io/ui5-webcomponents/nightly/components/Tokenizer/): A `ui5-tokenizer` is an invisible container for `ui5-tokens` that supports keyboard navigation and token selection.\\n- [AI Button](https://sap.github.io/ui5-webcomponents/nightly/components/ai/Button/): The `ui5-ai-button` component represents a button used in AI-related scenarios. It enables users to trigger actions by clicking or tapping the ui5-ai-button, or by pressing certain keyboard keys, such as Enter.\\n- [AI Prompt Input](https://sap.github.io/ui5-webcomponents/nightly/components/ai/PromptInput/): The `ui5-ai-prompt-input` component allows the user to write custom instructions in natural language so that AI is guided to generate content tailored to user needs.\\n- [Custom Option](https://sap.github.io/ui5-webcomponents/nightly/components/OptionCustom/): The `ui5-option-custom` component defines a custom content of an option in the `ui5-select`. The component accepts arbitrary HTML content to allow full customization.\\n- [Custom Suggestion Item](https://sap.github.io/ui5-webcomponents/nightly/components/SuggestionItemCustom/): The `ui5-suggestion-item-custom` is a type of suggestion item, that can be used to place suggestion items with custom content in the input. \\n- [Notification List](https://sap.github.io/ui5-webcomponents/nightly/components/fiori/NotificationList/): The `ui5-notification-list` web component acts as a container for `ui5-li-notification-group` and `ui5-li-notification`, delivering the new SAP Design Notification experience.\\n- [List Group](https://sap.github.io/ui5-webcomponents/nightly/components/ListItemGroup/): The `ui5-li-group` is a special list item used exclusively for creating groups of list items within a `ui5-list`.\\n\\n![Preview of UI5 Web Components 2.0 new components](./img/new_components_v2.png)\\n\\n### **Enhanced Existing Components** \\n\\nBenefit from improvements in List Drag and Drop, Tree Drag and Drop, Tab Container Drag and Drop, and a revamped Notifications Experience. \\n\\n![Preview of UI5 Web Components 2.0 new features](./img/new_features_v2.png)\\n\\n:::note\\n\\nFor the full list of changes, please refer to the release [change log](https://github.com/SAP/ui5-webcomponents/releases).\\n\\n:::\\n\\n### **Revamped Documentation Site**\\n\\nExplore our new documentation site featuring a live editor, playground, dark mode, and an intuitive icons view. \\n\\n![UI5 Web Components 2.0 new website](./img/website.png)\\n\\n**New logo**: We are excited to introduce our new symbol and branding, reflecting the modern and dynamic nature of our project. Our new design incorporates defining elements of the feather and the flame. The feather symbolizes being lightweight, while the flame forms a connection to the phoenix, embodying the spirit of rebirth and continuous improvement. \\n\\n**Explore the Full-Screen Playground** \\n\\nOur new [full-screen playground](https://sap.github.io/ui5-webcomponents/nightly/play/) offers a range of features designed to enhance your development experience: \\n\\n- Live code editing \\n\\n- TypeScript support \\n\\n- Code completion for components in HTML \\n\\n- Sample download \\n\\n- Easy sharing \\n\\n- Theming options \\n\\n- Predefined examples\\n\\n![UI5 Web Components 2.0 full-screen playground](./img/fullscreen_playground.png)\\n\\n## Adoption and Breaking Changes \\n\\nUI5 Web Components 2.0 is a major version and introduces breaking changes that may require updates to your code. Note: The majority of the breaking changes can be achieved with find and replace. \\n\\n:::tip\\n\\nOur comprehensive [Migration Guide](https://sap.github.io/ui5-webcomponents/nightly/docs/migration-guides/to-version-2/) will assist you in making a smooth transition from UI5 Web Components v1.x to v2.0. \\n\\n:::\\n\\n **Notable Breaking Changes**: \\n\\n- The Belize theme has been removed and is no longer available.\\n\\n- CSP (Content Security Policy) will be ensured via the [`adoptedStyleSheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets) only, which are CSP-compliant by design. \\n\\n- The static area has been removed since the browser now ensures the correct positioning of popups thanks to the popover API that is fully adopted by the UI5 Web Components.\\n\\n- The Badge component (`ui5-badge`) has been renamed to Tag (`ui5-tag`).\\n\\n- The old Table (`ui5-table`) has been moved to `@ui5/webcomponents-compat`; new Table is available with better API and accessibility.\\n\\n- Public methods for opening popovers are replaced with the `open` property for declarative APIs. \\n\\n- Components like Label, Text, Link, and Title now wrap by default (`wrappingType=\\"Normal\\"` by default, `wrappingType=\\"None\\"` optionally). \\n\\n- SelectMenu and SelectMenuOption components have been removed; standard options with the popover API make them obsolete. \\n\\n- Renaming of properties, events, and enumeration values.\\n\\n- Removed APIs without alternatives: \\n\\n  - Progress Indicator (`ui5-progress-indicator`): `Disabled` property removed. \\n\\n  - Select Option (`ui5-option`): `Disabled` property removed for UX and accessibility alignment. \\n\\n  - Token (`ui5-token`): `Readonly` property removed; logic now within the Tokenizer. \\n\\n  - The `Device#isIE` method has been removed and is no longer available - the IE browser is not supported anymore.\\n\\n  - Notification List Group (`ui5-li-notification-group`): The properties `showClose`, `showCounter`, `priority`, the event `close` and the slot `actions` are removed due to the new better notification list design concept.\\n \\n## Ongoing Support for Version 1.x \\n\\n We will continue to support version 1.x until the end of the year, focusing on bug fixes to ensure continuity for our existing users. \\n\\n \\n## Get Help and Engage with the Community \\n\\n Encountering issues? Reach out for support or report bugs on our GitHub project: [Submit a bug or ask a question here](https://github.com/SAP/ui5-webcomponents/issues/new/choose). \\n\\n## Call to Action \\n\\nUI5 Web Components 2.0 is a testament to our dedication to innovation, quality, and community engagement. We are particularly excited about the groundbreaking features such as the Popover API, Form-Associated Custom Elements, and seamless time zone support. \\n\\nWe invite you to preview the new version and migrate to UI5 Web Components 2.0 to fully leverage these advancements. Together, we are entering a new era of web development, and the possibilities are endless. Thank you for being part of this exciting journey with us! \ud83d\ude4c"},{"id":"/releases/popover-api-in-v2","metadata":{"permalink":"/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2","source":"@site/blog/releases/popover-api-in-v2.mdx","title":"Popover API in UI5 Web Components 2.0","description":"UI5 Web Components 2.0 will provide greatly improved popups by taking advantage of the native browser popover API.","date":"2024-04-19T10:00:00.000Z","formattedDate":"April 19, 2024","tags":[{"label":"release","permalink":"/ui5-webcomponents/nightly/blog/tags/release"},{"label":"v2","permalink":"/ui5-webcomponents/nightly/blog/tags/v-2"},{"label":"popover API","permalink":"/ui5-webcomponents/nightly/blog/tags/popover-api"}],"readingTime":4.85,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Popover API in UI5 Web Components 2.0","tags":["release","v2","popover API"],"slug":"/releases/popover-api-in-v2","date":"2024-04-19T10:00"},"unlisted":false,"prevItem":{"title":"Announcing UI5 Web Components 2.0! A New Era Begins!","permalink":"/ui5-webcomponents/nightly/blog/releases/announcing-v2"},"nextItem":{"title":"UI5 Web Components 2.0 Release Candidate is out!","permalink":"/ui5-webcomponents/nightly/blog/releases/announcing-rc-v2"}},"content":"UI5 Web Components 2.0 will provide greatly improved popups by taking advantage of the [native browser popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).\\n\\n## What is the popover API?\\n\\nThe [popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) is a browser-native solution to displaying popup-like components (Popovers, Dialogs, etc.).\\nabove all other content, regardless of its HTML structure and CSS applied.\\n\\n## Popups in **version 1.x**\\n\\nThere used to be a so-called \\"static area\\" (`<ui5-static-area>`) - a DOM element directly in the `<body>` where the popups of all components were placed.\\nThis guaranteed that even if the HTML document had `overflow: hidden`, `transform`, or similar CSS rules applied, or the component was in a *stacking context*, its popup would still be positioned correctly.\\n\\nExample of `ui5-date-picker`\'s DOM structure in **v1.24**:\\n\\n```html\\n<body>\\n    <ui5-static-area>\\n        <ui5-static-area-item> \x3c!-- A static area item, associated with the DatePicker component --\x3e\\n            #shadow-root\\n                <ui5-responsive-popover></ui5-responsive-popover> \x3c!-- here goes the Popover part of the DatePicker component --\x3e\\n        </ui5-static-area-item>\\n    </ui5-static-area>\\n\\n    .........\\n\\n    <div style=\\"transform: translate(12rem, 12rem)\\"> \x3c!-- a parent node has CSS that normally breaks popup positioning --\x3e\\n        <ui5-date-picker>\\n            #shadow-root\\n                <ui5-input></ui5-input> \x3c!-- The date Input part of the DatePicker component --\x3e\\n        </ui5-date-picker>\\n    </div>\\n</body>\\n```\\n\\nAs you can see, the component used to be physically divided in two parts:\\n - The \\"main\\" part (the `ui5-date-picker` tag itself) containing the date selection input\\n - The \\"popover\\" part (the `ui5-static-area-item` tag, associated with the said date picker) containing the picker (calendar with years/months/days).\\n\\n## Popups in **version 2.x**\\n\\nThere is no longer need for a \\"static area\\" since the browser now ensures the correct positioning of popups thanks to the popover API.\\n\\nExample of `ui5-date-picker`\'s DOM structure in **v2.0**:\\n\\n```html\\n<body>\\n    <div style=\\"transform: translate(12rem, 12rem)\\"> \x3c!-- a parent node has CSS that normally breaks popup positioning --\x3e\\n        <ui5-date-picker>\\n            #shadow-root\\n                <ui5-input></ui5-input> \x3c!-- The date Input part of the DatePicker component --\x3e\\n                <ui5-responsive-popover popover=\\"manual\\"></ui5-responsive-popover> \x3c!-- the Popover part of the DatePicker component --\x3e\\n        </ui5-date-picker>\\n    </div>\\n</body>\\n```\\n\\nThe component is no longer physically divided in two parts:\\n - Both the input and the popover are inside the `ui5-date-picker` itself\\n - The popover has the **popover=\\"manual\\"** attribute (introduced with the popover API) that ensures it will be displayed above anything else on the HTML page.\\n\\nIt\'s that simple!\\n\\n## The **practical** benefits\\n\\n### Simpler and more robust components\\n    - Easier to develop and maintain.\\n    - Everything belonging to a component is now in one place! This includes code logic, HTML and CSS.\\n\\n### Enhanced overstyling capabilities for apps\\n    - We can now provide [CSS Shadow Parts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shadow_parts) also for the \\"popup part\\", not just in the \\"main part\\" of the component!\\n    - [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) set on the component will also have effect for its \\"popup part\\"!\\n\\nConsider the following example:\\n\\n```html\\n<body>\\n    <style>\\n        #mc::part(root) {\\n            background: blue;\\n        }\\n        #mc::part(list) {\\n            margin: 0.5rem;\\n        }\\n    </style>\\n\\n    <my-component id=\\"mc\\">\\n        #shadow-root\\n            <div part=\\"root\\"></div>\\n            <ui5-popover>\\n                <ui5-list part=\\"list\\"></ui5-list>\\n            </ui5-popover>\\n    </my-component>\\n</body>\\n```\\n\\nSince the popover is now part of the component, component authors can provide CSS Shadow Parts for elements in the popover, in addition to the existing CSS Shadow Parts.\\n\\n### Components with popups can now have physical children\\n\\nWeb components with popups had a **hard limitation** of not being able to slot children to the popup.\\n\\nExample of `ui5-select`\'s (simplified) DOM structure in **v1.24**:\\n\\n```html\\n<body>\\n    <ui5-static-area>\\n        <ui5-static-area-item> \x3c!-- static area item of the ui5-select --\x3e\\n            #shadow-root\\n                <ui5-responsive-popover> \x3c!-- the \\"dropdown\\" part of the ui5-select --\x3e\\n                    <ui5-list> \x3c!-- the list inside ui5-select\'s dropdown --\x3e\\n                        <ui5-li text=\\"Option 1\\"></ui5-li> \x3c!-- list item for the 1st ui5-option --\x3e\\n                        <ui5-li text=\\"Option 2\\"></ui5-li> \x3c!-- list item for the 2nd ui5-option --\x3e\\n                        <ui5-li text=\\"Option 3\\"></ui5-li> \x3c!-- list item for the 3rd ui5-option --\x3e\\n                    </ui5-list>\\n                </ui5-responsive-popover>\\n        </ui5-static-area-item>\\n    </ui5-static-area>\\n\\n    .........\\n\\n    <ui5-select>\\n        #shadow-root\\n            <div></div> \x3c!-- The \\"box\\" part of the select --\x3e\\n\\n        <ui5-option>Option 1</ui5-option>\\n        <ui5-option>Option 2</ui5-option>\\n        <ui5-option>Option 3</ui5-option>\\n    </ui5-select>\\n\\n</body>\\n```\\n\\nAs you can clearly see from the example, there is no way to **slot** the `ui5-option` components into the `ui5-list` as it is in a completely different part of the DOM, due to the need for a static area.\\nInstead, we can only provide **logical** `ui5-option` components and just use their **text content** for the `text` property of the list items (`ui5-li`) in the static area.\\n\\nExample of `ui5-select`\'s (simplified) DOM structure in **v2.0**:\\n\\n```html\\n<body>\\n    <ui5-select>\\n        #shadow-root\\n            <div></div> \x3c!-- The \\"box\\" part of the select --\x3e\\n            <ui5-responsive-popover> \x3c!-- the \\"dropdown\\" part of the ui5-select --\x3e\\n                <ui5-list> \x3c!-- the list inside ui5-select\'s dropdown --\x3e\\n                    <slot></slot>\\n                </ui5-list>\\n            </ui5-responsive-popover>\\n\\n        <ui5-option><strong>Option</strong> 1</ui5-option>\\n        <ui5-option><ui5-icon name=\\"accept\\"></ui5-icon> Option 2</ui5-option>\\n        <ui5-option><i>Option 3</i></ui5-option>\\n    </ui5-select>\\n\\n</body>\\n```\\n\\nNow that the popover is part of the `ui5-select` itself, it\'s possible to have **physical** `ui5-option`s and slot their content directly into the popover or its children (`ui5-list` in this example).\\n\\nThis allows us to provide support for **custom user content** for components that had strict predefined APIs in the past!\\n\\n### Easier testing for both apps and component package authors\\n    - Tests no longer need to know how to find the static area item, associated with a given component - everything is directly in the shadow root!\\n    - Writing tests is much simplified.\\n\\n### Cross-framework popup compatibility for the future\\n    - Frameworks who use the native browser popover API no longer need to synchronize themselves (negotiate `z-index` values, etc.).\\n    - The last popup to be opened will always be on top (guarnateed by the browser)!\\n\\n## When can I start using it?\\n    - The current versions of all supported browsers (Chrome, Safari, Edge, and now also Firefox as of version 125) fully support the popover API. [See Can I Use report](https://caniuse.com/?search=popover).\\n    - By the time **v2.0** is officially released (we are at **v2.0-r.c.2** as of writing this blog post) we expect that each major browser will have already released at least 3 stable versions since the introduction of the popover API.\\n\\nMake sure to check our blog for future announcements, including the official release date of **UI5 Web Components 2.0**!"},{"id":"/releases/announcing-rc-v2","metadata":{"permalink":"/ui5-webcomponents/nightly/blog/releases/announcing-rc-v2","source":"@site/blog/releases/announcing-rc-v2.mdx","title":"UI5 Web Components 2.0 Release Candidate is out!","description":"U5 Web Components project has reached a pivotal stage in its evolution, geared to embrace new standards, eliminate legacy code, and integrate consumer feedback to enhance our APIs, culminating in the highly anticipated major release, version 2.0.","date":"2024-04-18T10:00:00.000Z","formattedDate":"April 18, 2024","tags":[{"label":"release","permalink":"/ui5-webcomponents/nightly/blog/tags/release"},{"label":"v2","permalink":"/ui5-webcomponents/nightly/blog/tags/v-2"}],"readingTime":4.44,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"UI5 Web Components 2.0 Release Candidate is out!","tags":["release","v2"],"slug":"/releases/announcing-rc-v2","date":"2024-04-18T10:00"},"unlisted":false,"prevItem":{"title":"Popover API in UI5 Web Components 2.0","permalink":"/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2"},"nextItem":{"title":"Preparing for UI5 Web Components 2.0","permalink":"/ui5-webcomponents/nightly/blog/releases/preparing-for-v2"}},"content":"export const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'5px\',\\n      color: \'#fff\',\\n      padding: \'0.1rem\',\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\n# UI5 Web Components 2.0 Release Candidate is out!\\n\\nU5 Web Components project has reached a pivotal stage in its evolution, geared to embrace new standards, eliminate legacy code, and integrate consumer feedback to enhance our APIs, culminating in the highly anticipated major release, version 2.0. \\n\\nToday we are extremely happy to announce **UI5 Web Components 2.0 Release Candidate**! \ud83e\udd73\ufe0f\\nThe following `2.0` RC versions have been released:\\n- [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.0) (2024-04-09)\\n- [2.0.0-rc.1](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.1) (2024-04-11)\\n- [2.0.0-rc.2](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.2) (2024-04-18) \\n- [2.0.0-rc.3](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.3) (2024-05-10)\\n- [2.0.0-rc.4 ](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.4) (2024-05-29)\\n- [2.0.0-rc.5](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.5) (2024-06-06) <Highlight color=\\"#1877F2\\">latest</Highlight> \\n\\n\\n## What\'s new\\n\\n### New features\\n\\n- **Integration of popover API**: Enjoy standard, consistent and flexible mechanism for displaying popover content on top of other page content with the integration of the [`popover API`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) across all relevant components: [#8192](https://github.com/SAP/ui5-webcomponents/pull/8192)\\n  \\n- **Time zone Support**: Date and time components are enhanced to seamlessly adapt to different time zones, ensuring accurate presentation of dates across various regions. The time zone identifiers format aligns with the conventions used in the IANA time zone database. : [#8610](https://github.com/SAP/ui5-webcomponents/issues/8610)\\n\\n- **New Components**: Explore new additions to the UI5 Web Components family, expanding your toolkit for building rich UIs:\\n    - Text: The ui5-text component displays text that can be used in any content area of an application. By default, the text will wrap when the space is not enough. In addition, the component supports truncation via the max-lines property, by defining the number of lines the text should wrap before start truncating. [#8299](https://github.com/SAP/ui5-webcomponents/pull/8299)\\n\\n- **Components enhancements**: Benefit from enhancements to existing components such:\\n    - ui5-message-strip: introduce custom colors [#8757](https://github.com/SAP/ui5-webcomponents/pull/8757)\\n    - ui5-link: introduce `tooltip` property [#8670](https://github.com/SAP/ui5-webcomponents/pull/8670)\\n    - ui5-avatar-group: update focus handling [#8550](https://github.com/SAP/ui5-webcomponents/issues/8550) \\n    - ui5-barcode-scanner-dialog: add support for `close` and `open` events [#8753](https://github.com/SAP/ui5-webcomponents/issues/8753)\\n    - ui5-li: add support for `F2` key [#8619](https://github.com/SAP/ui5-webcomponents/issues/8619)\\n    - ui5-button: provide focus support for mobile [#8414](https://github.com/SAP/ui5-webcomponents/issues/8414)\\n    - ui5-tree: enable drag and drop [#8477](https://github.com/SAP/ui5-webcomponents/issues/8477)\\n    - ui5-tabcontainer, ui5-list: add events for reordering items by mouse [#8265](https://github.com/SAP/ui5-webcomponents/pull/8265) [#8687](https://github.com/SAP/ui5-webcomponents/pull/8687) \\n    - ui5-checkbox: update focus handling [#8553](https://github.com/SAP/ui5-webcomponents/issues/8553)\\n    - focus: new focus handling [#8590](https://github.com/SAP/ui5-webcomponents/issues/8590) \\n    - add `shadowRootOptions` for `@customElement` decorator [#8703](https://github.com/SAP/ui5-webcomponents/issues/8703)\\n\\n- **New Site for Documentation, Samples, and API Reference**: Discover a revamped documentation site with live editor, playground, dark mode, and an intuitive icons view. \\n\\n![UI5 Web Components Playground](./img/playground_dark.png)\\n\\n### Breaking changes\\nUI5 Web Components 2.0 is a new major version, including breaking changes requiring you to adjust your code accordingly. \\n\\n:::tip\\n\\nThis documentation will help you to migrate from UI5 Web Components v1.x to UI5 Web Components 2.0 with ease: [Migration guide 2.0](/docs/migration-guides/to-version-2/)\\n\\n:::\\n\\nNotable breaking changes include: \\n\\n- Discontinuing support for Internet Explorer: [#8494](https://github.com/SAP/ui5-webcomponents/pull/8494)\\n- CSP via [`adoptedStyleSheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets) only: [#8496](https://github.com/SAP/ui5-webcomponents/pull/8496)\\n- The JSDoc plugin has been removed, and the generation of api.json has stopped. If you previously relied on the `ui5-package/dist/api.json` file, you can now use `ui5-package/dist/custom-elements.json`: [#8518](https://github.com/SAP/ui5-webcomponents/pull/8518)\\n- Removed `UI5Element#render` method in favour of `UI5Element#renderer`: [#8501](https://github.com/SAP/ui5-webcomponents/pull/8501) \\n- Removed all `Assets-static.js` modules in favour of their dynamic counterparts - the `Assets.js` modules: [#8526](https://github.com/SAP/ui5-webcomponents/pull/8526)\\n\\n:::note\\n\\nFor the full list of changes, please refer to the release [change log](https://github.com/SAP/ui5-webcomponents/releases).\\n\\n:::\\n\\n## What\'s next\\nAnticipate the official 2.0 release between mid-June to mid-July, featuring: \ud83d\ude80\\n\\n### In-Progress Features\\n\\n-   **Form Support with Form-Associated Custom Elements**: Streamline form handling with support for the Form-Associated Custom Elements standard.\\n-   **New Components**: Dynamic Page, Form, and Tokenizer\\n-   **Component Enhancements**: Revamped Notifications Experience\\n-   **Reusable component CSS styles** Allow creating patterns/layouts or other common styling\\n\\n### In-Progress Breaking changes\\n\\n-  **Theming**: Removal of Belize (recommendation: migrate to Horizon)\\n-  **Rename of properties, events and enumarion values**\\n\\n-  **Several APIs will be replaced with more effective alternatives:**:\\n\\n\\t-   Replace all public methods for opening popover, such as `openPicker`, `togglePicker` with `open` property to promote declarative APIs\\n\\t-   Grouping of Items: Instead of using `ui5-li-groupheader` as separator in a flat structure, the API will support true nesting of ListItems inside ListItemGroup, to easier bind hierarchical data model to the UI.\\n\\t-   Menu: property `starts-section` replaced by `ui5-menu-separator` component.\\n\\t-   List: property `imag`e, replaced by slot `image`.\\n\\t-   TabContainer: `show-overflow` property, replaced by slot `overflowButton`.\\n\\t-   IllustratedMessage: property `titleLevel`, replaced by slot `title` (that you can set the level on).\\n\\n\\n:::warning[**This properties will be removed without alternative**:]\\n\\n-   Progress Indicator (ui5-progress-indicator): Remove `disabled` property \\n-   Selects\'s Option (ui5-option): Remove `disabled` property - UX and ACC standards suggest to not include any disabled items in the dropdown\\n-   Token (ui5-token): Remove the `readonly` property \\n\\n:::\\n\\n## Get help\\nEncountering issues? Don\'t hesitate to report them or seek assistance on our GitHub project: [Submit a bug or ask a question here](https://github.com/SAP/ui5-webcomponents/issues/new/choose).\\n\\n## Maintenance of 1.x\\nWhile we\'re excited about the future with UI5 Web Components 2.0, we also understand the importance of continued support for existing users. Therefore, maintenance and support for version 1.x will continue until the end of the year, focusing solely on bug fixes.\\n\\n## Conclusion\\nIn conclusion, UI5 Web Components 2.0 represents a significant leap forward in our commitment to delivering cutting-edge web development tools. We\'re excited to embark on this journey with you and look forward to seeing the amazing experiences you\'ll create with UI5 Web Components 2.0!\\n\\nStay tuned for more updates and announcements as we approach the official release date. Thank you for being part of the UI5 Web Components community! \ud83d\ude4c"},{"id":"/releases/preparing-for-v2","metadata":{"permalink":"/ui5-webcomponents/nightly/blog/releases/preparing-for-v2","source":"@site/blog/releases/preparing-for-v2.mdx","title":"Preparing for UI5 Web Components 2.0","description":"UI5 Web Components 2.0 version is on the horizon.","date":"2024-04-05T10:00:00.000Z","formattedDate":"April 5, 2024","tags":[{"label":"release","permalink":"/ui5-webcomponents/nightly/blog/tags/release"},{"label":"v2","permalink":"/ui5-webcomponents/nightly/blog/tags/v-2"}],"readingTime":2.545,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Preparing for UI5 Web Components 2.0","tags":["release","v2"],"slug":"/releases/preparing-for-v2","date":"2024-04-05T10:00"},"unlisted":false,"prevItem":{"title":"UI5 Web Components 2.0 Release Candidate is out!","permalink":"/ui5-webcomponents/nightly/blog/releases/announcing-rc-v2"}},"content":"UI5 Web Components 2.0 version is on the horizon.\\nHere\'s a summary of everything you need to know (release information, key features and breaking changes)\\nand start preparing for it.\\n\\n## Release Timelines\\n- Release `2.0` RC versions in April\\n   - [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.0) (2024-04-09)\\n   - [2.0.0-rc.1](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.1) (2024-04-11)\\n- Release `2.0` between `mid June - mid July`\\n\\n## Migration Support\\n- [Migration guide](/docs/migration-guides/to-version-2/)\\n\\n## Maintenance of 1.x\\n- Support until the end of the year\\n- Downport of bug fixes only\\n\\n## 2.0 Features\\n\\n### Framework Features\\n- Integration of the [`popover`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) API in all pop-up based components \\n- Form Support with [`Form-Associated Custom Elements`](https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/) standard\\n- Timezone support in all date-time components\\n \\n### New Components\\n\\n- Dynamic Page\\n- Form\\n- Text\\n- Tokenizer\\n\\n### Components Features\\n\\n- List Drag and Drop (comes with TabContainer)?\\n- Tree Drag and Drop\\n- TabContainer Drag and Drop\\n- New Notifications Experience\\n\\n### Reusable component CSS styles \\nStyles for creating patterns/layouts or other common styling\\n\\n### New Site for Documentation, Samples and API reference\\nSee the [preview](https://sap.github.io/ui5-webcomponents/nightly/).\\n\\n- Live editor\\n- Playground\\n- Dark mode\\n- Icons view\\n\\n## 2.0 Breaking changes\\n\\n- 90% is pure API renaming for better consistency \\n- several APIs are replaced by alternatives (listed below)\\n- few APIs are removed without alternatives (listed below)\\n\\n\\n### Theming\\n- Removal of Belize (recommendation: migrate to Horizon)\\n\\n### Framework\\n-  CSP (Content Security Policy) will be ensured via [adoptedStyleSheets](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets) only.\\nThe adoptedStyleSheets are CSP compliant by design and all components styles will be defined as adoptedStyleSheets.\\n\\nThe `CSP.js` module is removed and the creation of `<style>` and `<link>` tags is no longer required as all browsers now support adoptedStyleSheets.\\n\\nAs a result, hte following APIs are not available any more and should not be used:\\n```ts\\nimport { setUseLinks } from \\"@ui5/webcomponents-base/dist/CSP.js\\"\\nimport { setPackageCSSRoot } from \\"@ui5/webcomponents-base/dist/CSP.js\\"\\nimport { setPreloadLinks } from \\"@ui5/webcomponents-base/dist/CSP.js\\"\\n```\\n\\n### Renamed APIs\\nSee the full list [here](https://github.com/SAP/ui5-webcomponents/issues/8461).\\n\\n### Replaced APIs\\n\\n- Methods `openPicker` will be replaced by `open/opener` properties to promote declarative API\\n\\n- **Grouping of Items**\\n\\nInstead of using `ui5-li-groupheader` as separator in a flat structure:\\n\\n```html\\n<ui5-list>\\n\\t<ui5-li-groupheader>group<ui5-li-groupheader/>\\n\\t<ui5-li></ui5-li>\\n\\t<ui5-li></ui5-li>\\n\\t<ui5-li></ui5-li>\\n</ui5-list>\\n```\\n\\ntrue nesting will be provided of ListItems inside ListItemGroup \\nto easier bind hierarchical data model to the UI:\\n\\n```html\\n<ui5-list>\\n\\t<ui5-li-group header-text=\\"group\\">\\n\\t\\t<ui5-li></ui5-li>\\n\\t\\t<ui5-li></ui5-li>\\n\\t\\t<ui5-li></ui5-li>\\n\\t<ui5-li-group>\\n</ui5-list>\\n```\\n\\n\\n- **Menu**: the property `starts-section` will be replaced by `ui5-menu-separator` component.\\n- **List**: the property `image` will be replaced by slot `image`\\n- **TabContainer:** the property `show-overflow` property is will be replaced by slot `overflowButton`.\\n- **IllustratedMessage:** the property `titleLevel` will be replaced by slot `title`.\\n\\n\\n### Removed APIs without alternative\\n\\n#### Progress Indicator (ui5-progress-indicator)\\n- The `disabled` property will be removed. Progress indicator isn\'t an interactive element so disabled property make no sense. \\nAlso aria-disabled is deprecated on the progressbar role since ARIA 1.2 .\\n\\n\\n#### Selects\'s Option (ui5-option)\\n- The `disabled` property will be removed. The UX and ACC standards suggest to not include any disabled items in the dropdown\\n\\n\\n#### Token (ui5-token)\\n- The `readonly` property will be removed."}]}')}}]);