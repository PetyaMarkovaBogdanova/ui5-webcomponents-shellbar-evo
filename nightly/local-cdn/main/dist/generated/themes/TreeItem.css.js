import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TreeItem.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;position:relative}.ui5-li-tree-text-wrapper{flex:auto}.ui5-li-root-tree{padding-inline-start:0}:host(:not([level="1"])) .ui5-li-root{border-color:var(--sapList_AlternatingBackground)}:host([_toggle-button-end][selected]:not([level="1"])) .ui5-li-root{border-bottom:var(--ui5-v2-5-0-rc-0-listitem-selected-border-bottom)}:host([_toggle-button-end]) .ui5-li-root-tree:hover,:host([_selection-mode]:not([_selection-mode="None"],[_selection-mode="Delete"],[active])) .ui5-li-root-tree:hover{cursor:pointer}:host([_toggle-button-end]:not([selected])) .ui5-li-root-tree:hover,:host(:not([_selection-mode="None"]):not([_selection-mode="Delete"]):not([active]):not([selected])) .ui5-li-root-tree:hover{background:var(--sapList_Hover_Background)}:host(:not([level="1"]):not([active]):not([selected])) .ui5-li-root-tree{background:var(--sapList_AlternatingBackground)}:host([_toggle-button-end]:not([level="1"])) .ui5-li-root-tree{background:var(--ui5-v2-5-0-rc-0-listitem-background-color)}:host([_toggle-button-end][selected]:not([level="1"])) .ui5-li-root-tree{background:var(--sapList_SelectionBackgroundColor)}:host(:not([_selection-mode="None"]):not([_selection-mode="Delete"]):not([active])[selected]) .ui5-li-root-tree:hover{background-color:var(--sapList_Hover_SelectionBackground)}.ui5-li-tree-toggle-box{min-width:var(--_ui5-v2-5-0-rc-0-tree-toggle-box-width);min-height:var(--_ui5-v2-5-0-rc-0-tree-toggle-box-height);display:flex;align-items:center;justify-content:center;flex-shrink:0}.ui5-li-tree-toggle-icon{width:var(--_ui5-v2-5-0-rc-0-tree-toggle-icon-size);height:var(--_ui5-v2-5-0-rc-0-tree-toggle-icon-size);color:var(--sapContent_IconColor);cursor:pointer}:host([actionable]) .ui5-li-tree-toggle-icon{color:var(--sapButton_TextColor)}:host([active][actionable]) .ui5-li-tree-toggle-icon{color:var(--sapList_Active_TextColor)}:host{height:unset}.ui5-li-root{height:var(--_ui5-v2-5-0-rc-0_list_item_base_height)}:host([selected]){background:unset}:host([selected]) .ui5-li-root{background:var(--sapList_SelectionBackgroundColor)}:host([has-border]){border-bottom:unset}:host([has-border]) .ui5-li-root{border-bottom:var(--ui5-v2-5-0-rc-0-listitem-border-bottom)}:host(:not([focused])[selected][has-border]){border-bottom:unset}:host(:not([focused])[selected][has-border]) .ui5-li-root{border-bottom:var(--ui5-v2-5-0-rc-0-listitem-selected-border-bottom)}:host([focused][selected]){border-bottom:unset}:host([focused][selected]) .ui5-li-root{border-bottom:var(--ui5-v2-5-0-rc-0-listitem-focused-selected-border-bottom)}.ui5-tree-li-subtree{margin:0;padding:0;list-style:none}:host([focused][active]) .ui5-li-root-tree{background:var(--sapList_Active_Background)}:host([focused][active]) .ui5-li-root-tree .ui5-li-tree-toggle-icon,:host([focused][active]) .ui5-li-root-tree .ui5-li-title,:host([focused][active]) .ui5-li-root-tree .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}
` };
export default styleData;
//# sourceMappingURL=TreeItem.css.js.map