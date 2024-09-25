/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.root)}" aria-label="${ifDefined(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${ifDefined(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${ifDefined(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${ifDefined(this._id)}-wiz-content">${repeat(this._stepsInHeader, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text" aria-hidden="true">${ifDefined(this.navAriaDescribedbyText)}</span><div id="${ifDefined(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${repeat(this._steps, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></div><${scopeTag("ui5-responsive-popover", tags, suffix)} horizontal-align="Center" placement="Bottom" aria-label="${ifDefined(this.actionSheetStepsText)}" class="${classMap(this.classes.popover)}" content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${repeat(this._groupedTabs, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closeRespPopover}">Cancel</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<div class="${classMap(this.classes.root)}" aria-label="${ifDefined(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${ifDefined(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${ifDefined(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${ifDefined(this._id)}-wiz-content">${repeat(this._stepsInHeader, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text" aria-hidden="true">${ifDefined(this.navAriaDescribedbyText)}</span><div id="${ifDefined(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${repeat(this._steps, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></div><ui5-responsive-popover horizontal-align="Center" placement="Bottom" aria-label="${ifDefined(this.actionSheetStepsText)}" class="${classMap(this.classes.popover)}" content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${repeat(this._groupedTabs, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">Cancel</ui5-button></div></ui5-responsive-popover>`; }
function block1(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-wizard-tab", tags, suffix)} title-text="${ifDefined(item.titleText)}" subtitle-text="${ifDefined(item.subtitleText)}" icon="${ifDefined(item.icon)}" number="${ifDefined(item.number)}" ?disabled="${item.disabled}" ?selected="${item.selected}" ?hide-separator="${item.hideSeparator}" ?active-separator="${item.activeSeparator}" ?branching-separator="${item.branchingSeparator}" ._wizardTabAccInfo="${ifDefined(item.accInfo)}" data-ui5-content-ref-id="${ifDefined(item.refStepId)}" data-ui5-index="${ifDefined(item.pos)}" @ui5-selection-change-requested="${ifDefined(this.onSelectionChangeRequested)}" @ui5-focused="${ifDefined(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${styleMap(item.styles)}></${scopeTag("ui5-wizard-tab", tags, suffix)}>` : html `<ui5-wizard-tab title-text="${ifDefined(item.titleText)}" subtitle-text="${ifDefined(item.subtitleText)}" icon="${ifDefined(item.icon)}" number="${ifDefined(item.number)}" ?disabled="${item.disabled}" ?selected="${item.selected}" ?hide-separator="${item.hideSeparator}" ?active-separator="${item.activeSeparator}" ?branching-separator="${item.branchingSeparator}" ._wizardTabAccInfo="${ifDefined(item.accInfo)}" data-ui5-content-ref-id="${ifDefined(item.refStepId)}" data-ui5-index="${ifDefined(item.pos)}" @ui5-selection-change-requested="${ifDefined(this.onSelectionChangeRequested)}" @ui5-focused="${ifDefined(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${styleMap(item.styles)}></ui5-wizard-tab>`; }
function block2(context, tags, suffix, item, index) { return html `<div class="ui5-wiz-content-item" ?hidden="${item.disabled}" ?selected="${item.selected}" ?stretch="${item.stretch}" part="step-content" aria-label="${ifDefined(item.stepContentAriaLabel)}" role="region" data-ui5-content-item-ref-id="${ifDefined(item._id)}"><div class="ui5-wiz-content-item-wrapper"><slot name="${ifDefined(item._individualSlot)}"></slot></div></div>`; }
function block3(context, tags, suffix, item, index) { return suffix ? html `<li><${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${ifDefined(item.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${ifDefined(item.titleText)}</${scopeTag("ui5-button", tags, suffix)}></li>` : html `<li><ui5-button icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${ifDefined(item.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${ifDefined(item.titleText)}</ui5-button></li>`; }
export default block0;
//# sourceMappingURL=WizardTemplate.lit.js.map