import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ProgressIndicator.css.ts", content: `:host(:not([hidden])){display:inline-block;min-height:var(_ui5_progress_indicator_host_min_height);min-width:4rem;width:100%;height:var(--_ui5-v2-5-0_progress_indicator_host_height);overflow:hidden;box-sizing:var(--_ui5-v2-5-0_progress_indicator_host_box_sizing);padding:var(--_ui5-v2-5-0_progress_indicator_padding);padding-inline-end:var(--_ui5-v2-5-0_progress_indicator_padding_end)}:host(:not([hidden])[hide-value]){padding-top:var(--_ui5-v2-5-0_progress_indicator_padding_novalue);padding-bottom:var(--_ui5-v2-5-0_progress_indicator_padding_novalue)}.ui5-progress-indicator-root{display:flex;align-items:center;background:var(--_ui5-v2-5-0_progress_indicator_background_none);border-radius:var(--_ui5-v2-5-0_progress_indicator_root_border_radius);overflow:var(--_ui5-v2-5-0_progress_indicator_root_overflow);min-height:var(--_ui5-v2-5-0_progress_indicator_root_min_height);height:var(--_ui5-v2-5-0_progress_indicator_root_height);width:100%;font-size:var(--sapProgress_FontSize);font-family:"72override",var(--sapFontFamily);position:var(--_ui5-v2-5-0_progress_indicator_root_position);box-sizing:border-box}.ui5-progress-indicator-bar{background:var(--_ui5-v2-5-0_progress_indicator_value_state_none);justify-content:flex-end;height:var(--_ui5-v2-5-0_progress_indicator_bar_height);display:flex;align-items:center;flex-direction:row;color:var(--_ui5-v2-5-0_progress_indicator_bar_color);transition-property:width;transition-timing-function:linear;box-sizing:border-box;border:var(--_ui5-v2-5-0_progress_indicator_bar_border_max);border-radius:var(--_ui5-v2-5-0_progress_indicator_bar_border_radius)}.ui5-progress-indicator-min-value .ui5-progress-indicator-bar,.ui5-progress-indicator-max-value .ui5-progress-indicator-remaining-bar{border:none}.ui5-progress-indicator-max-value .ui5-progress-indicator-bar{border-radius:.5rem}.ui5-progress-indicator-min-value .ui5-progress-indicator-remaining-bar{border-inline-start:var(--_ui5-v2-5-0_progress_indicator_border);border-radius:.5rem}.ui5-progress-indicator-remaining-bar{justify-content:flex-start;width:var(--_ui5-v2-5-0_progress_indicator_remaining_bar_width);height:100%;display:flex;align-items:center;flex-direction:row;flex-grow:1;flex-basis:0;border:var(--_ui5-v2-5-0_progress_indicator_border);border-inline-start:none;border-radius:var(--_ui5-v2-5-0_progress_indicator_remaining_bar_border_radius);box-sizing:border-box;color:var(--_ui5-v2-5-0_progress_indicator_color);overflow:var(--_ui5-v2-5-0_progress_indicator_remaining_bar_overflow);position:var(--_ui5-v2-5-0_progress_indicator_remaining_bar_position)}.ui5-progress-indicator-value{margin:var(--_ui5-v2-5-0_progress_indicator_value_margin);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;position:var(--_ui5-v2-5-0_progress_indicator_value_position);top:var(--_ui5-v2-5-0_progress_indicator_value_top_position);inset-inline-start:var(--_ui5-v2-5-0_progress_indicator_value_left_position)}.ui5-progress-indicator-icon{margin-inline-start:.375rem;width:var(--_ui5-v2-5-0_progress_indicator_icon_size);height:var(--_ui5-v2-5-0_progress_indicator_icon_size);display:var(--_ui5-v2-5-0_progress_indicator_icon_visibility);position:var(--_ui5-v2-5-0_progress_indicator_icon_position);inset-inline-end:var(--_ui5-v2-5-0_progress_indicator_icon_right_position)}:host([value-state="Negative"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-5-0_progress_indicator_value_state_error_icon_color)}:host([value-state="Critical"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-5-0_progress_indicator_value_state_warning_icon_color)}:host([value-state="Positive"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-5-0_progress_indicator_value_state_success_icon_color)}:host([value-state="Information"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-5-0_progress_indicator_value_state_information_icon_color)}:host([value-state="Negative"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-5-0_progress_indicator_value_state_error)}:host([value-state="Critical"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-5-0_progress_indicator_value_state_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-5-0_progress_indicator_value_state_success)}:host([value-state="Information"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-5-0_progress_indicator_value_state_information)}:host([value-state="Negative"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-5-0_progress_indicator_background_error)}:host([value-state="Critical"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-5-0_progress_indicator_background_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-5-0_progress_indicator_background_success)}:host([value-state="Information"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-5-0_progress_indicator_background_information)}:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-5-0_progress_indicator_border_color_error)}:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-5-0_progress_indicator_border_color_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-5-0_progress_indicator_border_color_success)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-5-0_progress_indicator_border_color_information)}.ui5-progress-indicator-remaining-bar:before,.ui5-progress-indicator-remaining-bar:after{content:"";display:block;width:.25rem;height:.25rem;position:absolute;border-radius:50%;display:var(--_ui5-v2-5-0_progress_indicator_side_points_visibility);background:var(--_ui5-v2-5-0_progress_indicator_value_state_none)}.ui5-progress-indicator-remaining-bar:before{left:.0625rem}.ui5-progress-indicator-remaining-bar:after{right:.0625rem}:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_NegativeBackground)}:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_CriticalBackground)}:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_PositiveBackground)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_InformationBackground)}
` };
export default styleData;
//# sourceMappingURL=ProgressIndicator.css.js.map