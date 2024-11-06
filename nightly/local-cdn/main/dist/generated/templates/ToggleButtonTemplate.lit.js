/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  aria-pressed="${ifDefined(this.pressed)}"  @focusout=${this._onfocusout} @click=${this._onclick} @mousedown=${this._onmousedown} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${ifDefined(this.tabIndexValue)} aria-expanded="${ifDefined(this.accessibilityAttributes.expanded)}" aria-controls="${ifDefined(this.accessibilityAttributes.controls)}" aria-haspopup="${ifDefined(this._hasPopup)}" aria-label="${ifDefined(this.ariaLabelText)}" aria-describedby="${ifDefined(this.ariaDescribedbyText)}" title="${ifDefined(this.buttonTitle)}" part="button" role="${ifDefined(this.effectiveAccRole)}">${this.icon ? block1.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.endIcon ? block2.call(this, context, tags, suffix) : undefined}${this.hasButtonType ? block3.call(this, context, tags, suffix) : undefined}</button> `; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-button-icon" name="${ifDefined(this.icon)}" mode="${ifDefined(this.iconMode)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-button-icon" name="${ifDefined(this.icon)}" mode="${ifDefined(this.iconMode)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-button-end-icon" name="${ifDefined(this.endIcon)}" mode="${ifDefined(this.endIconMode)}" part="endIcon"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-button-end-icon" name="${ifDefined(this.endIcon)}" mode="${ifDefined(this.endIconMode)}" part="endIcon"></ui5-icon>`; }
function block3(context, tags, suffix) { return html `<span id="ui5-button-hiddenText-type" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.buttonTypeText)}</span>`; }
export default block0;
//# sourceMappingURL=ToggleButtonTemplate.lit.js.map