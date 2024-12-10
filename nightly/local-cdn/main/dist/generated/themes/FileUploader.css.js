import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/FileUploader.css.ts", content: `:host{vertical-align:middle}:host{display:inline-block}.ui5-file-uploader-root{position:relative}.ui5-file-uploader-root input[type=file]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;font-size:0}.ui5-file-uploader-root input[type=file]:not([disabled]){cursor:pointer}.ui5-file-uploader-mask{display:flex;align-items:center}.ui5-file-uploader-mask [ui5-input]{margin-right:.25rem}:host([value-state="None"]:not([disabled]):hover) [ui5-input],:host(:not([value-state]):not([disabled]):hover) [ui5-input]{border:var(--_ui5-v2-5-0_file_uploader_hover_border);background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Negative"]:not([disabled]):hover) [ui5-input]{background-color:var(--_ui5-v2-5-0_file_uploader_value_state_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Critical"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}:host(:not([disabled]):active) [ui5-button]{background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor);text-shadow:none}
` };
export default styleData;
//# sourceMappingURL=FileUploader.css.js.map