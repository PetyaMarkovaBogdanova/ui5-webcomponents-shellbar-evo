import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/YearPicker.css.ts", content: `:host(:not([hidden])){display:block}:host{width:100%;height:100%}.ui5-yp-root{padding:2rem 0 1rem;display:flex;flex-direction:column;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);justify-content:center;align-items:center}.ui5-yp-interval-container{display:flex;justify-content:center;align-items:center;width:100%}.ui5-yp-item{display:flex;margin:var(--_ui5-v2-5-0-rc-2_yearpicker_item_margin);width:calc(25% - .125rem);height:var(--_ui5-v2-5-0-rc-2_year_picker_item_height);color:var(--sapButton_Lite_TextColor);background-color:var(--sapButton_Lite_Background);align-items:center;justify-content:center;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;outline:none;position:relative;border:var(--_ui5-v2-5-0-rc-2_yearpicker_item_border);border-radius:var(--_ui5-v2-5-0-rc-2_yearpicker_item_border_radius)}.ui5-yp-item-secondary-type{flex-direction:column;width:calc(50% - .125rem)}.ui5-yp-item-sec-type{font-size:.75rem;color:var(--sapNeutralElementColor)}.ui5-yp-item.ui5-yp-item--selected,.ui5-yp-item.ui5-yp-item--selected-between{background:var(--sapButton_Selected_Background);border:var(--_ui5-v2-5-0-rc-2_yearpicker_item_selected_border);color:var(--sapButton_Selected_TextColor)}.ui5-yp-item.ui5-yp-item--selected .ui5-yp-item-sec-type,.ui5-yp-item.ui5-yp-item--selected-between .ui5-yp-item-sec-type{color:var(--sapButton_Selected_TextColor)}.ui5-yp-item:hover{background:var(--sapButton_Lite_Hover_Background);border:var(--_ui5-v2-5-0-rc-2_yearpicker_item_hover_border);color:var(--sapButton_Lite_Hover_TextColor)}.ui5-yp-item.ui5-yp-item--selected:hover,.ui5-yp-item.ui5-yp-item--selected-between:hover{background:var(--sapButton_Selected_Hover_Background);border:var(--_ui5-v2-5-0-rc-2_yearpicker_item_selected_hover_border);color:var(--sapButton_Selected_TextColor)}.ui5-yp-item.ui5-yp-item--selected:hover .ui5-yp-item-sec-type,.ui5-yp-item.ui5-yp-item--selected-between:hover .ui5-yp-item-sec-type{color:var(--sapButton_Selected_TextColor)}.ui5-yp-item:active,.ui5-yp-item.ui5-yp-item--selected:active,.ui5-yp-item.ui5-yp-item--selected-between:active{background:var(--sapButton_Active_Background);border:var(--_ui5-v2-5-0-rc-2_monthpicker_item_active_border);color:var(--sapButton_Active_TextColor)}.ui5-yp-item:active .ui5-yp-item-sec-type,.ui5-yp-item.ui5-yp-item--selected:active .ui5-yp-item-sec-type,.ui5-yp-item.ui5-yp-item--selected-between:active .ui5-yp-item-sec-type{color:var(--sapButton_Active_TextColor)}.ui5-yp-item.ui5-yp-item--disabled{pointer-events:none;opacity:.5}.ui5-yp-item:focus:after{content:"";position:absolute;inset:.0625rem;border:var(--_ui5-v2-5-0-rc-2_button_focused_border);border-radius:var(--_ui5-v2-5-0-rc-2_button_focused_border_radius)}
` };
export default styleData;
//# sourceMappingURL=YearPicker.css.js.map