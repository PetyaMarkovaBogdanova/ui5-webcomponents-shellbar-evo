declare const _default: ":host(:not([hidden])){display:inline-block}.ui5-color-picker-root{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-color-picker-main-color{width:16rem;height:16rem;position:relative;margin-bottom:1.5rem;border:1px solid var(--sapContent_ForegroundBorderColor);background-size:100%;background-image:-webkit-linear-gradient(left,#000,rgba(0,0,0,0)),-webkit-linear-gradient(top,rgba(255,255,255,0),#fff);background-image:-moz-linear-gradient(left,#000,rgba(0,0,0,0)),-moz-linear-gradient(top,rgba(255,255,255,0),#fff);background-image:linear-gradient(left,#000,#0000),linear-gradient(top,#fff0,#fff);background-image:-webkit-linear-gradient(left,#000,rgba(0,0,0,0),#fff),-webkit-linear-gradient(top,rgba(128,128,128,0),#808080);background-image:-moz-linear-gradient(left,#000,rgba(0,0,0,0),#fff),-moz-linear-gradient(top,rgba(128,128,128,0),#808080);background-image:linear-gradient(left,#000,#0000,#fff),linear-gradient(top,#80808000,gray);user-select:none;-moz-user-select:none}.ui5-color-picker-circle{position:absolute;box-sizing:border-box;width:13px;height:13px;border:var(--_ui5-v2-7-0-rc-0_color_picker_circle_outer_border);border-radius:.6875rem;pointer-events:none}.ui5-color-picker-circle:after{content:\"\";position:absolute;width:var(--_ui5-v2-7-0-rc-0_color_picker_circle_inner_circle_size);height:var(--_ui5-v2-7-0-rc-0_color_picker_circle_inner_circle_size);border:var(--_ui5-v2-7-0-rc-0_color_picker_circle_inner_border);border-radius:.9375rem;pointer-events:none}.ui5-color-picker-sliders-wrapper{width:calc(100% - 11px);margin-left:-10px}[ui5-slider]{--_ui5-v2-7-0-rc-0_slider_active_progress_border: none;--_ui5-v2-7-0-rc-0_slider_progress_box_sizing: content-box}[ui5-slider]::part(handle){width:.9375rem;height:1.5rem;background:transparent;box-sizing:border-box}[ui5-slider]::part(handle-container){margin-inline-start:-2px;margin-top:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_margin_top)}[ui5-slider]::part(handle-container):focus-within{margin-inline-start:unset;margin-top:unset}[ui5-slider]::part(handle):after{content:\"\";border:2px solid #fff;display:block;height:1.25rem;border-radius:1rem;width:100%;box-sizing:border-box}[ui5-slider]::part(root-container){padding:1rem 0}[ui5-slider]::part(progress-container){width:calc(100% + 11px);height:18px;position:absolute;margin-top:var(--_ui5-v2-7-0-rc-0_color_picker_slider_container_margin_top);border-radius:0;border:1px solid var(--sapField_BorderColor)}[ui5-slider].ui5-color-picker-hue-slider::part(progress-container){background-size:100%;background-image:-webkit-linear-gradient(left,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:-moz-linear-gradient(left,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:linear-gradient(left,red,#ff0,#0f0,#0ff,#00f,#f0f,red);background-color:none}[ui5-slider].ui5-color-picker-alpha-slider::part(progress-container){background-image:-webkit-linear-gradient(left,rgba(65,120,13,0),var(--ui5-v2-7-0-rc-0_Color_Picker_Progress_Container_Color)),url(data:image/png;base64,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)}[ui5-slider]::part(progress-bar){background:transparent}.ui5-color-picker-current-color{width:100%;display:flex;justify-content:space-between;align-items:center}.ui5-color-picker-colors-wrapper{display:flex;flex-wrap:nowrap;height:1.5rem;border:1px solid var(--sapField_BorderColor)}.ui5-color-picker-white,.ui5-color-picker-color{width:3.1rem;background:#fff;display:block}.ui5-color-picker-color{background-image:url(data:image/png;base64,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)}.ui5-color-picker-color-inner{width:100%;height:100%}.ui5-color-picker-hex-input-wrapper{display:flex;align-items:center;flex-wrap:nowrap}.ui5-color-picker-hex-input{width:4.5rem;min-width:4.5rem;margin-left:.2rem}.ui5-color-channel-inputs-wrapper{display:flex;justify-content:space-around;width:100%;align-items:center}.ui5-color-channel{display:flex;flex-direction:column;align-items:center;margin-top:1rem;position:relative}.ui5-color-channel-input{width:2.5rem;min-width:2.5rem;text-align:center}.ui5-color-channel-input::part(input){min-width:initial;padding:0 .25rem}.ui5-color-channel-percentage-label{width:1rem}.ui5-color-channel-toggle{min-width:var(--_ui_color_channel_toggle_button_width);margin-inline-start:.5rem}.ui5-color-picker-hue-slider::part(progress-container):before,.ui5-color-picker-alpha-slider::part(progress-container):before,.ui5-color-picker-hue-slider::part(progress-container):after,.ui5-color-picker-alpha-slider::part(progress-container):after,[ui5-slider].ui5-color-picker-hue-slider::part(icon-slider),[ui5-slider].ui5-color-picker-alpha-slider::part(icon-slider){display:none}.ui5-color-picker-alpha-slider::part(handle),.ui5-color-picker-hue-slider::part(handle){box-shadow:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_box_shadow);border:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_border)}.ui5-color-picker-alpha-slider::part(handle):hover,.ui5-color-picker-hue-slider::part(handle):hover{border:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_outline_hover)}.ui5-color-picker-alpha-slider::part(handle):focus,.ui5-color-picker-hue-slider::part(handle):focus{outline:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_outline_focus);outline-offset:.0625rem}.ui5-color-picker-alpha-slider::part(handle):focus:before,.ui5-color-picker-hue-slider::part(handle):focus:before{content:\"\";border:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_inline_focus);display:block;height:1.625rem;border-radius:1rem;width:1.05rem;box-sizing:border-box;position:absolute;inset:-3px -3px 2px}.ui5-color-picker-alpha-slider::part(handle):before,.ui5-color-picker-hue-slider::part(handle):before{display:none}.ui5-color-picker-alpha-slider::part(handle):focus,.ui5-color-picker-hue-slider::part(handle):focus{margin-top:var(--_ui5-v2-7-0-rc-0_color_picker_slider_handle_focus_margin_top)}:dir(rtl) [ui5-slider].ui5-color-picker-hue-slider::part(progress-container){background-image:-webkit-linear-gradient(right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:-moz-linear-gradient(right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:linear-gradient(right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}:dir(rtl) .ui5-color-picker-alpha-slider::part(handle),:dir(rtl) .ui5-color-picker-hue-slider::part(handle){--_ui5-v2-7-0-rc-0_slider_handle_margin_left: 0}:dir(rtl) .ui5-color-picker-sliders-wrapper{margin-left:10px}\n";
export default _default;
