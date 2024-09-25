/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-overflowMenu" horizontal-align="End" placement="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover" @dragstart="${this._onDragStart}"><${scopeTag("ui5-list", tags, suffix)} selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOverflowListItemClick)}" @ui5-move-over="${ifDefined(this._onPopoverListMoveOver)}" @ui5-move="${ifDefined(this._onPopoverListMove)}" @keydown="${this._onPopoverListKeyDown}">${repeat(this._popoverItemsFlat, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}><div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePopover}">${ifDefined(this.popoverCancelButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover id="${ifDefined(this._id)}-overflowMenu" horizontal-align="End" placement="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover" @dragstart="${this._onDragStart}"><ui5-list selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOverflowListItemClick)}" @ui5-move-over="${ifDefined(this._onPopoverListMoveOver)}" @ui5-move="${ifDefined(this._onPopoverListMove)}" @keydown="${this._onPopoverListKeyDown}">${repeat(this._popoverItemsFlat, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</ui5-list><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePopover}">${ifDefined(this.popoverCancelButtonText)}</ui5-button></div></ui5-responsive-popover>`; }
function block1(context, tags, suffix, item, index) { return html `${ifDefined(item.overflowPresentation)}`; }
export default block0;
//# sourceMappingURL=TabContainerPopoverTemplate.lit.js.map