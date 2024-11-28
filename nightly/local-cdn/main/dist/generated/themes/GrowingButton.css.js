import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/GrowingButton.css.ts", content: `[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v2-5-0-rc-1_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v2-5-0-rc-1_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:row;min-height:var(--_ui5-v2-5-0-rc-1_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v2-5-0-rc-1_load_more_border);border-radius:var(--_ui5-v2-5-0-rc-1_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus-visible{outline:var(--_ui5-v2-5-0-rc-1_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v2-5-0-rc-1_load_more_text_height);padding:.875rem 1rem 1rem;font-size:var(--_ui5-v2-5-0-rc-1_load_more_text_font_size);font-weight:700}:host([loading]) .ui5-list-growing-button-busy-indicator:not([_is-busy]){display:none}:host([loading]) .ui5-list-growing-button-busy-indicator[_is-busy]+[growing-button-text]{padding-left:.5rem}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v2-5-0-rc-1_load_more_desc_padding)}
` };
export default styleData;
//# sourceMappingURL=GrowingButton.css.js.map