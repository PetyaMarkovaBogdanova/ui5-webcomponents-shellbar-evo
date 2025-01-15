import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-dynamic-page-title-header-wrapper{position:sticky;top:0;z-index:98}:host{display:block;height:100%;background-color:var(--ui5-v2-6-2_dynamic_page_background)}.ui5-dynamic-page-root{height:inherit;overflow-y:hidden}.ui5-dynamic-page-scroll-container{overflow-y:auto;height:100%}.ui5-dynamic-page-scroll-container{display:flex;flex-direction:column}.ui5-dynamic-page-content{flex-grow:1;position:relative}.ui5-dynamic-page-fit-content{position:absolute;inset:0}.ui5-dynamic-page-footer{position:sticky;bottom:.5rem;box-sizing:border-box;z-index:110;opacity:0;transform:translateY(100%);transition:opacity .35s ease-in-out,transform .35s ease-in-out}.ui5-dynamic-page-spacer{height:var(--_ui5-v2-6-2_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-fit-content{bottom:var(--_ui5-v2-6-2_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-footer{transform:translateY(0);opacity:1}::slotted([slot="footerArea"]){border-radius:.25rem;background-color:var(--_ui5-v2-6-2_dynamic_page_header_background_color);box-sizing:content-box;width:auto;margin:0 .5rem .5rem}::slotted([slot="titleArea"]){width:auto}:host([media-range="S"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_S)}:host([media-range="S"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_S)}:host([media-range="S"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_S)}:host([media-range="M"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_M)}:host([media-range="M"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_M)}:host([media-range="M"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_M)}:host([media-range="L"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_L)}:host([media-range="L"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_L)}:host([media-range="L"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_L)}:host([media-range="XL"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_XL)}:host([media-range="XL"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_XL)}:host([media-range="XL"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_XL)}
`;
//# sourceMappingURL=DynamicPage.css.js.map