"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1472],{55097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>D,default:()=>S,frontMatter:()=>g,metadata:()=>k,toc:()=>w});var i=n(31085),s=n(71184);const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-datetime-picker></ui5-datetime-picker>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/DateTimePicker.js";';function l(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(t,{html:d,js:r})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-datetime-picker\n        format-pattern="dd/MM/yyyy, hh:mm"\n    >\n    </ui5-datetime-picker>\n\n    <ui5-datetime-picker\n        format-pattern="dd/MM/yyyy, hh:mm:ss aa"\n    >\n    </ui5-datetime-picker>\n\n    <ui5-datetime-picker\n        format-pattern="long"\n    >\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/DateTimePicker.js";';function h(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(t,{html:a,js:o})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}const j='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-datetime-picker\n        value="Jan 11, 2020, 11:11:11 AM"\n        format-pattern="long"\n        min-date="Jan 11, 2020, 00:00:00 AM"\n        max-date="Jan 31, 2020, 11:59:59 PM"\n    >\n    </ui5-datetime-picker>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',p='import "@ui5/webcomponents/dist/DateTimePicker.js";';function m(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(t,{html:j,js:p})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}const f='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>DateTimePicker in Different Time Zone</title>\n\n    <script data-ui5-config type="application/json">\n        {\n            "language": "EN"\n        }\n    <\/script>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\t\t<div style="display: flex; align-items: center;">\n\t\t\t<ui5-select id="sel" style="width: 300px">\n\t\t\t\t<ui5-option data-timezone="Pacific/Honolulu">Pacific/Honolulu</ui5-option>\n\t\t\t\t<ui5-option data-timezone="America/Los_Angeles">America/Los_Angeles</ui5-option>\n\t\t\t\t<ui5-option data-timezone="America/New_York">America/New_York</ui5-option>\n\t\t\t\t<ui5-option data-timezone="Europe/London">Europe/London</ui5-option>\n\t\t\t\t<ui5-option data-timezone="Europe/Sofia" selected>Europe/Sofia</ui5-option>\n\t\t\t\t<ui5-option data-timezone="Asia/Dubai">Asia/Dubai</ui5-option>\n\t\t\t\t<ui5-option data-timezone="Asia/Bishkek">Asia/Bishkek</ui5-option>\n\t\t\t\t<ui5-option data-timezone="Australia/Sydney">Australia/Sydney</ui5-option>\n\t\t\t\t<ui5-option data-timezone="Pacific/Apia">Pacific/Apia</ui5-option>\n\t\t\t</ui5-select>\n\t\t\t<ui5-datetime-picker id="dtp" format-pattern="medium" value="today"></ui5-datetime-picker>\n\t\t</div>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',v='import "@ui5/webcomponents/dist/DateTimePicker.js";\nimport "@ui5/webcomponents/dist/Select.js";\nimport "@ui5/webcomponents/dist/Option.js";\nimport {setTimezone} from "@ui5/webcomponents-base/dist/config/Timezone.js";\nimport DateFormat from "@ui5/webcomponents-localization/dist/DateFormat.js";\n\n\nsel.addEventListener("change", async (e) => {\n    const dateFormat = DateFormat.getDateTimeInstance({"style": "medium"});\n    const value = dateFormat.parse(dtp.value);\n    setTimezone(e.detail.selectedOption.getAttribute("data-timezone"));\n    dtp.value = dateFormat.format(value);\n});';function b(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(t,{html:f,js:v})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}const g={slug:"../DateTimePicker",ui5_tag_name:"ui5-datetime-picker",ui5_since:"1.0.0-rc.7"},D=void 0,k={id:"components/main/DateTimePicker",title:"DateTimePicker",description:"The DateTimePicker component alows users to select both date (day, month and year) and time (hours, minutes and seconds)",source:"@site/docs/components/main/DateTimePicker.mdx",sourceDirName:"components/main",slug:"/components/DateTimePicker",permalink:"/ui5-webcomponents/components/DateTimePicker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../DateTimePicker",ui5_tag_name:"ui5-datetime-picker",ui5_since:"1.0.0-rc.7"},sidebar:"componentsSidebar",previous:{title:"DateRangePicker",permalink:"/ui5-webcomponents/components/DateRangePicker"},next:{title:"Dialog",permalink:"/ui5-webcomponents/components/Dialog"}},T={},w=[{value:"Usage",id:"usage",level:3},{value:"Formatting",id:"formatting",level:3},{value:"Responsive behavior",id:"responsive-behavior",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"value",id:"value",level:3},{value:"valueState",id:"valuestate",level:3},{value:"required",id:"required",level:3},{value:"disabled",id:"disabled",level:3},{value:"readonly",id:"readonly",level:3},{value:"placeholder",id:"placeholder",level:3},{value:"name",id:"name",level:3},{value:"hideWeekNumbers",id:"hideweeknumbers",level:3},{value:"open",id:"open",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"dateValue",id:"datevalue",level:3},{value:"primaryCalendarType",id:"primarycalendartype",level:3},{value:"secondaryCalendarType",id:"secondarycalendartype",level:3},{value:"formatPattern",id:"formatpattern",level:3},{value:"minDate",id:"mindate",level:3},{value:"maxDate",id:"maxdate",level:3},{value:"calendarWeekNumbering",id:"calendarweeknumbering",level:3},{value:"Slots",id:"slots",level:2},{value:"valueStateMessage",id:"valuestatemessage",level:3},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3},{value:"input",id:"input",level:3},{value:"value-state-change",id:"value-state-change",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"isInValidRange",id:"isinvalidrange",level:3},{value:"formatValue",id:"formatvalue",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Date-Time Formats",id:"date-time-formats",level:3},{value:"Min and Max Dates",id:"min-and-max-dates",level:3},{value:"Timezones",id:"timezones",level:3}];function P(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"DateTimePicker"})," component alows users to select both date (day, month and year) and time (hours, minutes and seconds)\nand for the purpose it consists of input field and Date/Time picker."]}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"DateTimePicker"})," if you need a combined date and time input component.\nDon't use it if you want to use either date, or time value.\nIn this case, use the ",(0,i.jsx)(t.code,{children:"DatePicker"})," or the ",(0,i.jsx)(t.code,{children:"TimePicker"})," components instead."]}),"\n",(0,i.jsx)(t.p,{children:"The user can set date/time by:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"using the calendar and the time selectors"}),"\n",(0,i.jsx)(t.li,{children:"typing in the input field"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Programmatically, to set date/time for the ",(0,i.jsx)(t.code,{children:"DateTimePicker"}),", use the ",(0,i.jsx)(t.code,{children:"value"})," property"]}),"\n",(0,i.jsx)(t.h3,{id:"formatting",children:"Formatting"}),"\n",(0,i.jsx)(t.p,{children:"The value entered by typing into the input field must fit to the used date/time format."}),"\n",(0,i.jsxs)(t.p,{children:["Supported format options are pattern-based on Unicode LDML Date Format notation.\nFor more information, see ",(0,i.jsx)(t.a,{href:"https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table",children:"UTS #35: Unicode Locale Data Markup Language"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Example:"})," the following format ",(0,i.jsx)(t.code,{children:"dd/MM/yyyy, hh:mm:ss aa"}),"\ncorresponds the ",(0,i.jsx)(t.code,{children:"13/04/2020, 03:16:16 AM"})," value."]}),"\n",(0,i.jsx)(t.p,{children:'The small \'h\' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Example:"})," the following format ",(0,i.jsx)(t.code,{children:"dd/MM/yyyy, HH:mm:ss"}),"\ncorresponds the ",(0,i.jsx)(t.code,{children:"13/04/2020, 15:16:16"})," value."]}),"\n",(0,i.jsx)(t.p,{children:"The capital 'H' indicates \"24\" hours format."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If the ",(0,i.jsx)(t.code,{children:"formatPattern"})," does NOT include time,\nthe ",(0,i.jsx)(t.code,{children:"DateTimePicker"})," will fallback to the default time format according to the locale."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If no placeholder is set to the ",(0,i.jsx)(t.code,{children:"DateTimePicker"}),",\nthe current ",(0,i.jsx)(t.code,{children:"formatPattern"})," is displayed as a placeholder.\nIf another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If the user input does NOT match the ",(0,i.jsx)(t.code,{children:"formatPattern"}),",\nthe ",(0,i.jsx)(t.code,{children:"DateTimePicker"})," makes an attempt to parse it based on the\nlocale settings."]}),"\n",(0,i.jsx)(t.h3,{id:"responsive-behavior",children:"Responsive behavior"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"DateTimePicker"})," is responsive and fully adapts to all devices.\nFor larger screens, such as tablet or desktop, it is displayed as a popover, while\non phone devices, it is displayed full screen."]}),"\n",(0,i.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/DateTimePicker.js";'})}),"\n",(0,i.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"value",children:"value"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines a formatted date value."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"valuestate",children:"valueState"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the value state of the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"None"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"required",children:"required"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines whether the component is required."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.9"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"disabled",children:"disabled"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Determines whether the component is displayed as disabled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"readonly",children:"readonly"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Determines whether the component is displayed as read-only."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"placeholder",children:"placeholder"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines a short hint, intended to aid the user with data entry when the component has no value.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"name",children:"name"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Determines the name by which the component will be identified upon submission in an HTML form.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," This property is only applicable within the context of an HTML Form element."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"hideweeknumbers",children:"hideWeekNumbers"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the visibility of the week numbers column.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," For calendars other than Gregorian, the week numbers are not displayed regardless of what is set."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"open",children:"open"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the open or closed state of the popover."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"2.0.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the aria-label attribute for the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Receives id(or many ids) of the elements that label the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"datevalue",children:"dateValue"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Currently selected date represented as a Local JavaScript Date instance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Date | null"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"null"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Readonly"}),(0,i.jsx)(t.td,{children:"true"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primarycalendartype",children:"primaryCalendarType"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Sets a calendar type used for display. If not set, the calendar type of the global configuration is used."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian" | undefined'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"secondarycalendartype",children:"secondaryCalendarType"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Gregorian" | "Islamic" | "Japanese" | "Buddhist" | "Persian" | undefined'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"formatpattern",children:"formatPattern"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Determines the format, displayed in the input field."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"mindate",children:"minDate"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Determines the minimum date available for selection.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.6"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"maxdate",children:"maxDate"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Determines the maximum date available for selection.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.6"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"calendarweeknumbering",children:"calendarWeekNumbering"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines how to calculate calendar weeks and first day of the week. If not set, the calendar will be displayed according to the currently set global configuration."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Default" | "ISO_8601" | "MiddleEastern" | "WesternTraditional"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"Default"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"2.2.0"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(t.h3,{id:"valuestatemessage",children:"valueStateMessage"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the value state message that will be displayed as pop up under the component.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," If not specified, a default text (in the respective language) will be displayed.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," The ",(0,i.jsx)(t.code,{children:"valueStateMessage"})," would be displayed, when the component is in ",(0,i.jsx)(t.code,{children:"Information"}),", ",(0,i.jsx)(t.code,{children:"Critical"})," or ",(0,i.jsx)(t.code,{children:"Negative"})," value state."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<HTMLElement>"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.7"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h3,{id:"change",children:"change"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Fired when the input operation has finished by pressing Enter or on focusout."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent<DatePickerChangeEventDetail>"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Parameters"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"value"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)("br",{}),"The submitted value.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"valid"}),": ",(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Indicator if the value is in correct format pattern and in valid range."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"input",children:"input"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Fired when the value of the component is changed at each key stroke."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent<DatePickerInputEventDetail>"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Parameters"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"value"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)("br",{}),"The submitted value.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"valid"}),": ",(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Indicator if the value is in correct format pattern and in valid range."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"value-state-change",children:"value-state-change"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Fired before the value state of the component is updated internally. The event is preventable, meaning that if it's default action is prevented, the component will not update the value state."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent<DatePickerValueStateChangeEventDetail>"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Parameters"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"valueState"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)("br",{}),"The new ",(0,i.jsx)(t.code,{children:"valueState"})," that will be set.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"valid"}),": ",(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Indicator if the value is in correct format pattern and in valid range."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.h3,{id:"isvalid",children:"isValid"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Checks if a value is valid against the current date format of the DatePicker."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Return type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Parameters"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"value"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)("br",{}),"A value to be tested against the current date format"]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"isinvalidrange",children:"isInValidRange"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Checks if a date is between the minimum and maximum date."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Return type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Parameters"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"value"}),": ",(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)("br",{}),"A value to be checked"]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"formatvalue",children:"formatValue"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Formats a Java Script date object into a string representing a locale date according to the ",(0,i.jsx)(t.code,{children:"formatPattern"})," property of the DatePicker instance"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Return type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Parameters"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"date"}),": ",(0,i.jsx)(t.code,{children:"Date"}),(0,i.jsx)("br",{}),"A Java Script date object to be formatted as string"]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,i.jsx)(t.h3,{id:"date-time-formats",children:"Date-Time Formats"}),"\n",(0,i.jsxs)(t.p,{children:["Supported format options are pattern-based on Unicode LDML Date Format notation.\nFor more information, see ",(0,i.jsx)("a",{target:"_blank",href:"http://unicode.org/reports/tr35/#Date_Field_Symbol_Table",children:"UTS #35: Unicode Locale Data Markup Language"}),"."]}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(t.h3,{id:"min-and-max-dates",children:"Min and Max Dates"}),"\n",(0,i.jsx)(t.p,{children:"Define min and max date-time boundaries to contrain user choice."}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(t.h3,{id:"timezones",children:"Timezones"}),"\n",(0,i.jsx)(t.p,{children:"You can set to the configuration the preferred time zone, such as: Asia/Tokyo, Pacific/Apia, Asia/Kolkata, Europe/Sofia and etc."}),"\n",(0,i.jsx)(y,{})]})}function S(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(14041);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);