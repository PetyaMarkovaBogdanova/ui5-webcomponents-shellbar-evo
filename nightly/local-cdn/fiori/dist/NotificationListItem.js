var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationListItem_1;
import { isSpace, isDelete, isF10Shift, isEnterShift, isUp, isDown, } from "@ui5/webcomponents-base/dist/Keys.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import query from "@ui5/webcomponents-base/dist/decorators/query.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import BusyIndicator from "@ui5/webcomponents/dist/BusyIndicator.js";
import Tag from "@ui5/webcomponents/dist/Tag.js";
import Link from "@ui5/webcomponents/dist/Link.js";
import Icon from "@ui5/webcomponents/dist/Icon.js";
import WrappingType from "@ui5/webcomponents/dist/types/WrappingType.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import willShowContent from "@ui5/webcomponents-base/dist/util/willShowContent.js";
import NotificationListItemImportance from "./types/NotificationListItemImportance.js";
import NotificationListItemBase from "./NotificationListItemBase.js";
// Icons
import "@ui5/webcomponents-icons/dist/overflow.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/high-priority.js";
import "@ui5/webcomponents-icons/dist/message-success.js";
import "@ui5/webcomponents-icons/dist/message-information.js";
import "@ui5/webcomponents-icons/dist/message-error.js";
import "@ui5/webcomponents-icons/dist/message-warning.js";
// Texts
import { NOTIFICATION_LIST_ITEM_READ, NOTIFICATION_LIST_ITEM_UNREAD, NOTIFICATION_LIST_ITEM_SHOW_MORE, NOTIFICATION_LIST_ITEM_SHOW_LESS, NOTIFICATION_LIST_ITEM_INFORMATION_STATUS_TXT, NOTIFICATION_LIST_ITEM_POSITIVE_STATUS_TXT, NOTIFICATION_LIST_ITEM_NEGATIVE_STATUS_TXT, NOTIFICATION_LIST_ITEM_CRITICAL_STATUS_TXT, NOTIFICATION_LIST_ITEM_MENU_BTN_TITLE, NOTIFICATION_LIST_ITEM_MORE_LINK_LABEL_FULL, NOTIFICATION_LIST_ITEM_MORE_LINK_LABEL_TRUNCATE, NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE, NOTIFICATION_LIST_ITEM_IMPORTANT_TXT, } from "./generated/i18n/i18n-defaults.js";
// Templates
import NotificationListItemTemplate from "./generated/templates/NotificationListItemTemplate.lit.js";
// Styles
import NotificationListItemCss from "./generated/themes/NotificationListItem.css.js";
/**
 * Defines the icons name corresponding to the notification's status indicator.
 */
const ICON_PER_STATUS_NAME = {
    [ValueState.Negative]: "error",
    [ValueState.Critical]: "alert",
    [ValueState.Positive]: "sys-enter-2",
    [ValueState.Information]: "information",
    [ValueState.None]: "",
};
/**
 * Defines the icons design (color) corresponding to the notification's status indicator.
 */
const ICON_PER_STATUS_DESIGN = {
    [ValueState.Negative]: "Negative",
    [ValueState.Critical]: "Critical",
    [ValueState.Positive]: "Positive",
    [ValueState.Information]: "Information",
    [ValueState.None]: "",
};
/**
 * @class
 *
 * ### Overview
 * The `ui5-li-notification` is a type of list item, meant to display notifications.
 *
 * The component has a rich set of various properties that allows the user to set `avatar`, `menu`, `titleText`, descriptive `content`
 * and `footnotes` to fully describe a notification.
 *
 * The user can:
 *
 * - display a `Close` button
 * - can control whether the `titleText` and `description` should wrap or truncate
 * and display a `ShowMore` button to switch between less and more information
 * - add actions by using the `ui5-menu` component
 *
 * **Note:** Adding custom actions by using the `ui5-notification-action` component is deprecated as of version 2.0!
 *
 * ### Usage
 * The component can be used in a standard `ui5-list`.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * The user can use the following keyboard shortcuts to perform actions (such as select, delete):
 *
 * - [Enter] - select an item (trigger "item-click" event)
 * - [Delete] - close an item (trigger "item-close" event)
 *
 * #### Fast Navigation
 * This component provides a fast navigation using the following keyboard shortcuts:
 *
 * - [Shift] + [Enter] - 'More'/'Less' link will be triggered
 * - [Shift] + [F10] - 'Menu' (Actions) button will be triggered (clicked)
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/NotificationListItem.js";`
 *
 * @constructor
 * @extends NotificationListItemBase
 * @since 1.0.0-rc.8
 * @public
 * @csspart title-text - Used to style the titleText of the notification list item
 */
let NotificationListItem = NotificationListItem_1 = class NotificationListItem extends NotificationListItemBase {
    constructor() {
        super();
        /**
        * Defines if the `titleText` and `description` should wrap,
        * they truncate by default.
        *
        * **Note:** by default the `titleText` and `description`,
        * and a `ShowMore/Less` button would be displayed.
        * @default "None"
        * @public
        * @since 1.0.0-rc.15
        */
        this.wrappingType = "None";
        /**
         * Defines the status indicator of the item.
         * @default "None"
         * @public
         */
        this.state = "None";
        /**
         * Defines if the `Close` button would be displayed.
         * @default false
         * @public
         */
        this.showClose = false;
        /**
         * Defines the `Important` label of the item.
         * @default "Standard"
         * @public
         */
        this.importance = "Standard";
        /**
        * Defines the state of the `titleText` and `description`,
        * if less or more information is displayed.
        * @private
        */
        this._showMorePressed = false;
        /**
        * Defines the visibility of the `showMore` button.
        * @private
        */
        this._showMore = false;
        // the titleText overflow height
        this._titleTextOverflowHeight = 0;
        // the description overflow height
        this._descOverflowHeight = 0;
        // the resize handler
        this._onResizeBound = this.onResize.bind(this);
    }
    onEnterDOM() {
        super.onEnterDOM();
        ResizeHandler.register(this, this._onResizeBound);
    }
    onExitDOM() {
        ResizeHandler.deregister(this, this._onResizeBound);
    }
    get hasState() {
        return this.state !== ValueState.None;
    }
    get hasDesc() {
        return willShowContent(this.description);
    }
    get hasImportance() {
        return this.importance !== NotificationListItemImportance.Standard;
    }
    get contentClasses() {
        return this.hasImportance ? "ui5-nli-content ui5-nli-content-with-importance" : "ui5-nli-content";
    }
    get hasFootNotes() {
        return !!this.footnotes.length;
    }
    get showMoreText() {
        if (this._showMorePressed) {
            return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_SHOW_LESS);
        }
        return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_SHOW_MORE);
    }
    get menuBtnAccessibleName() {
        return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_MENU_BTN_TITLE);
    }
    get moreLinkAccessibleName() {
        return this._showMorePressed ? NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_MORE_LINK_LABEL_TRUNCATE) : NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_MORE_LINK_LABEL_FULL);
    }
    get closeBtnAccessibleName() {
        return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE);
    }
    get hideShowMore() {
        if (this.wrappingType === WrappingType.None && this._showMore) {
            return undefined;
        }
        return true;
    }
    get titleTextHeight() {
        return this.titleTextDOM.offsetHeight;
    }
    get descriptionHeight() {
        return this.descriptionDOM.offsetHeight;
    }
    get titleTextOverflows() {
        const titleText = this.titleTextDOM;
        if (!titleText) {
            return false;
        }
        return titleText.offsetHeight < titleText.scrollHeight;
    }
    get descriptionOverflows() {
        const description = this.descriptionDOM;
        if (!description) {
            return false;
        }
        return description.offsetHeight < description.scrollHeight;
    }
    get footerItems() {
        return this.footnotes.map((el, idx, arr) => {
            return {
                slotName: el._individualSlot,
                showDivider: idx !== arr.length - 1,
            };
        });
    }
    get ariaLabelledBy() {
        const id = this._id;
        if (this.loading) {
            return `${id}-loading`;
        }
        const ids = [];
        if (this.hasImportance) {
            ids.push(`${id}-importance`);
        }
        if (this.hasTitleText) {
            ids.push(`${id}-title-text`);
        }
        ids.push(`${id}-read`);
        if (this.hasDesc) {
            ids.push(`${id}-description`);
        }
        if (this.hasFootNotes) {
            ids.push(`${id}-footnotes`);
        }
        return ids.join(" ");
    }
    get itemClasses() {
        const classes = ["ui5-nli-root", "ui5-nli-focusable"];
        if (this.getMenu() && this.showClose) {
            classes.push("ui5-nli-two-buttons");
        }
        else if (this.getMenu() || this.showClose) {
            classes.push("ui5-nli-one-button");
        }
        return classes.join(" ");
    }
    get statusIconName() {
        return ICON_PER_STATUS_NAME[this.state];
    }
    get statusIconDesign() {
        return ICON_PER_STATUS_DESIGN[this.state];
    }
    get importanceText() {
        let text;
        if (this.hasImportance) {
            text = NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_IMPORTANT_TXT);
        }
        else {
            text = "";
        }
        return text;
    }
    get stateText() {
        if (this.state === ValueState.Positive) {
            return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_POSITIVE_STATUS_TXT);
        }
        if (this.state === ValueState.Critical) {
            return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_CRITICAL_STATUS_TXT);
        }
        if (this.state === ValueState.Negative) {
            return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_NEGATIVE_STATUS_TXT);
        }
        if (this.state === ValueState.Information) {
            return NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_INFORMATION_STATUS_TXT);
        }
        return "";
    }
    get readText() {
        return this.read ? NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_READ) : NotificationListItem_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ITEM_UNREAD);
    }
    get accInfoButton() {
        return {
            accessibilityAttributes: {
                hasPopup: "menu",
            },
        };
    }
    get accInfoLink() {
        return {
            accessibilityAttributes: {
                expanded: this._showMorePressed,
            },
        };
    }
    get showMenu() {
        return !!this.getMenu();
    }
    /**
     * Event handlers
     */
    _onclick() {
        this.fireItemPress();
    }
    _onShowMoreClick(e) {
        e.preventDefault();
        this._showMorePressed = !this._showMorePressed;
    }
    async _onkeydown(e) {
        await super._onkeydown(e);
        if (isF10Shift(e)) {
            e.preventDefault();
        }
        this.focusSameItemOnNextRow(e);
    }
    focusSameItemOnNextRow(e) {
        const target = e.target;
        if (!target || target.hasAttribute("ui5-menu-item")) {
            return;
        }
        const isFocusWithin = this.matches(":focus-within");
        if (!isFocusWithin || (!isUp(e) && !isDown(e))) {
            return;
        }
        e.preventDefault();
        e.stopImmediatePropagation();
        const list = this.closest("[ui5-notification-list]");
        if (!list) {
            return;
        }
        const navItems = list.getEnabledItems();
        const index = navItems.indexOf(this) + (isUp(e) ? -1 : 1);
        const nextItem = navItems[index];
        if (!nextItem) {
            return;
        }
        const sameItemOnNextRow = nextItem.getHeaderDomRef().querySelector(`.${target.className}`);
        if (sameItemOnNextRow && sameItemOnNextRow.offsetParent) {
            sameItemOnNextRow.focus();
        }
        else {
            nextItem.focus();
        }
    }
    _onkeyup(e) {
        super._onkeyup(e);
        const space = isSpace(e);
        if (space && this.getFocusDomRef().matches(":has(:focus-within)")) {
            this._onShowMoreClick(e);
            return;
        }
        if (isDelete(e)) {
            this.fireDecoratorEvent("close", { item: this });
        }
        if (isF10Shift(e)) {
            this._onBtnMenuClick();
        }
        if (isEnterShift(e)) {
            this._showMorePressed = !this._showMorePressed;
        }
    }
    _onBtnCloseClick() {
        this.fireDecoratorEvent("close", { item: this });
    }
    _onBtnMenuClick() {
        if (this.getMenu()) {
            this.openMenu();
        }
    }
    openMenu() {
        const menu = this.getMenu();
        menu.opener = this.menuButtonDOM;
        menu.open = true;
    }
    getMenu() {
        const menu = this.querySelector("ui5-menu");
        return menu;
    }
    /**
     * Private
     */
    fireItemPress() {
        if (this.getFocusDomRef().matches(":has(:focus-within)")) {
            return;
        }
        this.fireDecoratorEvent("_press", { item: this });
    }
    onResize() {
        if (this.wrappingType === WrappingType.Normal) {
            this._showMore = false;
            return;
        }
        const titleTextWouldOverflow = this.titleTextHeight > this._titleTextOverflowHeight;
        const descWouldOverflow = this.hasDesc && this.descriptionHeight > this._descOverflowHeight;
        const overflows = titleTextWouldOverflow || descWouldOverflow;
        if (this._showMorePressed && overflows) {
            this._showMore = true;
            return;
        }
        if (this.titleTextOverflows || this.descriptionOverflows) {
            this._titleTextOverflowHeight = this.titleTextHeight;
            this._descOverflowHeight = this.hasDesc ? this.descriptionHeight : 0;
            this._showMore = true;
            return;
        }
        this._showMore = false;
    }
};
__decorate([
    property()
], NotificationListItem.prototype, "wrappingType", void 0);
__decorate([
    property()
], NotificationListItem.prototype, "state", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItem.prototype, "showClose", void 0);
__decorate([
    property()
], NotificationListItem.prototype, "importance", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItem.prototype, "_showMorePressed", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItem.prototype, "_showMore", void 0);
__decorate([
    slot()
], NotificationListItem.prototype, "avatar", void 0);
__decorate([
    slot()
], NotificationListItem.prototype, "menu", void 0);
__decorate([
    slot({ type: HTMLElement, individualSlots: true })
], NotificationListItem.prototype, "footnotes", void 0);
__decorate([
    slot({ type: Node, "default": true })
], NotificationListItem.prototype, "description", void 0);
__decorate([
    query(".ui5-nli-title-text")
], NotificationListItem.prototype, "titleTextDOM", void 0);
__decorate([
    query(".ui5-nli-menu-btn")
], NotificationListItem.prototype, "menuButtonDOM", void 0);
__decorate([
    query(".ui5-nli-description")
], NotificationListItem.prototype, "descriptionDOM", void 0);
NotificationListItem = NotificationListItem_1 = __decorate([
    customElement({
        tag: "ui5-li-notification",
        languageAware: true,
        styles: [
            NotificationListItemCss,
        ],
        template: NotificationListItemTemplate,
        dependencies: [
            Button,
            Icon,
            BusyIndicator,
            Link,
            Tag,
        ],
    }),
    event("_press", {
        bubbles: true,
    })
    /**
     * Fired when the `Close` button is pressed.
     * @param {HTMLElement} item the closed item.
     * @public
     */
    ,
    event("close", {
        bubbles: true,
    })
], NotificationListItem);
NotificationListItem.define();
export default NotificationListItem;
//# sourceMappingURL=NotificationListItem.js.map