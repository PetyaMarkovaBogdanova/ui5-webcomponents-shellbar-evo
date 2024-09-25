/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-dynamic-page-root"><div  class="ui5-dynamic-page-scroll-container" @scroll="${this.snapOnScroll}"><header class="ui5-dynamic-page-title-header-wrapper" id="${ifDefined(this._id)}-header" aria-label="${ifDefined(this._headerLabel)}" aria-expanded="${ifDefined(this._headerExpanded)}" role="region" @ui5-_toggle-title=${ifDefined(this.onToggleTitle)}><slot name="titleArea"></slot>${this.headerInTitle ? block1.call(this, context, tags, suffix) : undefined}${this.actionsInTitle ? block2.call(this, context, tags, suffix) : undefined}</header>${this.headerInContent ? block4.call(this, context, tags, suffix) : undefined}${!this.actionsInTitle ? block5.call(this, context, tags, suffix) : undefined}<div class="ui5-dynamic-page-content" part="content"><div class="ui5-dynamic-page-fit-content" part="fit-content"><slot></slot>${this.showFooter ? block7.call(this, context, tags, suffix) : undefined}</div></div></div><div class="ui5-dynamic-page-footer" part="footer"><slot name="footerArea"></slot></div></div> `; }
function block1(context, tags, suffix) { return html `<slot tabindex="${ifDefined(this.headerTabIndex)}" ?aria-hidden="${this.headerAriaHidden}" name="headerArea"></slot>`; }
function block2(context, tags, suffix) { return html `${this.hasHeading ? block3.call(this, context, tags, suffix) : undefined}`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-dynamic-page-header-actions", tags, suffix)} ?snapped="${this.headerSnapped}" ?pinned="${this.headerPinned}" ?hide-pin-button="${this.hidePinButton}" .accessibilityAttributes="${ifDefined(this._accAttributesForHeaderActions)}" @ui5-expand-button-click=${ifDefined(this.onExpandClick)} @ui5-pin-button-click=${ifDefined(this.onPinClick)} @ui5-expand-button-hover-in=${ifDefined(this.onExpandHoverIn)} @ui5-expand-button-hover-out=${ifDefined(this.onExpandHoverOut)}></${scopeTag("ui5-dynamic-page-header-actions", tags, suffix)}>` : html `<ui5-dynamic-page-header-actions ?snapped="${this.headerSnapped}" ?pinned="${this.headerPinned}" ?hide-pin-button="${this.hidePinButton}" .accessibilityAttributes="${ifDefined(this._accAttributesForHeaderActions)}" @ui5-expand-button-click=${ifDefined(this.onExpandClick)} @ui5-pin-button-click=${ifDefined(this.onPinClick)} @ui5-expand-button-hover-in=${ifDefined(this.onExpandHoverIn)} @ui5-expand-button-hover-out=${ifDefined(this.onExpandHoverOut)}></ui5-dynamic-page-header-actions>`; }
function block4(context, tags, suffix) { return html `<slot tabindex="${ifDefined(this.headerTabIndex)}" ?aria-hidden="${this.headerAriaHidden}" name="headerArea"></slot>`; }
function block5(context, tags, suffix) { return html `${this.hasHeading ? block6.call(this, context, tags, suffix) : undefined}`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-dynamic-page-header-actions", tags, suffix)} ?snapped="${this.headerSnapped}" ?pinned="${this.headerPinned}" ?hide-pin-button="${this.hidePinButton}" .accessibilityAttributes="${ifDefined(this._accAttributesForHeaderActions)}" @ui5-expand-button-click=${ifDefined(this.onExpandClick)} @ui5-pin-button-click=${ifDefined(this.onPinClick)} @ui5-expand-button-hover-in=${ifDefined(this.onExpandHoverIn)} @ui5-expand-button-hover-out=${ifDefined(this.onExpandHoverOut)}></${scopeTag("ui5-dynamic-page-header-actions", tags, suffix)}>` : html `<ui5-dynamic-page-header-actions ?snapped="${this.headerSnapped}" ?pinned="${this.headerPinned}" ?hide-pin-button="${this.hidePinButton}" .accessibilityAttributes="${ifDefined(this._accAttributesForHeaderActions)}" @ui5-expand-button-click=${ifDefined(this.onExpandClick)} @ui5-pin-button-click=${ifDefined(this.onPinClick)} @ui5-expand-button-hover-in=${ifDefined(this.onExpandHoverIn)} @ui5-expand-button-hover-out=${ifDefined(this.onExpandHoverOut)}></ui5-dynamic-page-header-actions>`; }
function block7(context, tags, suffix) { return html `<div class="ui5-dynamic-page-spacer"></div>`; }
export default block0;
//# sourceMappingURL=DynamicPageTemplate.lit.js.map