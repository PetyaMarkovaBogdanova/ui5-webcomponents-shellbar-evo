import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import type AriaRole from "@ui5/webcomponents-base/dist/types/AriaRole.js";
import AriaHasPopup from "@ui5/webcomponents-base/dist/types/AriaHasPopup.js";
import { isSpace, isEnter, isLeft, isRight } from "@ui5/webcomponents-base/dist/Keys.js";
import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard.js";
import List from "@ui5/webcomponents/dist/List.js";
import type { ListSelectionChangeEventDetail } from "@ui5/webcomponents/dist/List.js";
import type { ResizeObserverCallback } from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import Popover from "@ui5/webcomponents/dist/Popover.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import Menu from "@ui5/webcomponents/dist/Menu.js";
import Icon from "@ui5/webcomponents/dist/Icon.js";
import type Input from "@ui5/webcomponents/dist/Input.js";
import type { IButton } from "@ui5/webcomponents/dist/Button.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { isDesktop } from "@ui5/webcomponents-base/dist/Device.js";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/bell.js";
import "@ui5/webcomponents-icons/dist/overflow.js";
import "@ui5/webcomponents-icons/dist/grid.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import type { Timeout, ClassMap, AccessibilityAttributes } from "@ui5/webcomponents-base/dist/types.js";
import type ListItemBase from "@ui5/webcomponents/dist/ListItemBase.js";
import type PopoverHorizontalAlign from "@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js";
import type { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
// import { getFirstFocusableElement } from "@ui5/webcomponents-base/dist/util/FocusableElements.js";
import type ShellBarVariant from "./types/ShellBarVariant.js";
import type ShellBarItem from "./ShellBarItem.js";

// Templates
import ShellBarTemplate from "./generated/templates/ShellBarTemplate.lit.js";

// Styles
import shellBarStyles from "./generated/themes/ShellBar.css.js";
import ShellBarPopoverCss from "./generated/themes/ShellBarPopover.css.js";

import {
	SHELLBAR_LABEL,
	SHELLBAR_LOGO,
	SHELLBAR_NOTIFICATIONS,
	SHELLBAR_NOTIFICATIONS_NO_COUNT,
	SHELLBAR_CANCEL,
	SHELLBAR_PROFILE,
	SHELLBAR_PRODUCTS,
	SHELLBAR_SEARCH,
	SHELLBAR_OVERFLOW,
} from "./generated/i18n/i18n-defaults.js";

type LowercaseString<T> = T extends string ? Lowercase<T> : never;
type ShellBarLogoAccessibilityAttributes = {
	role?: Extract<LowercaseString<AriaRole>, "button" | "link">,
	name?: string,
}
type ShellBarProfileAccessibilityAttributes = Pick<AccessibilityAttributes, "name" | "expanded" | "hasPopup">;
type ShellBarAreaAccessibilityAttributes = Pick<AccessibilityAttributes, "hasPopup" |"expanded">;
type ShellBarAccessibilityAttributes = {
	logo?: ShellBarLogoAccessibilityAttributes
	notifications?: ShellBarAreaAccessibilityAttributes
	profile?: ShellBarProfileAccessibilityAttributes,
	product?: ShellBarAreaAccessibilityAttributes
	search?: ShellBarAreaAccessibilityAttributes
	overflow?: ShellBarAreaAccessibilityAttributes
};

type ShellBarNotificationsClickEventDetail = {
	targetRef: HTMLElement;
};

type ShellBarProfileClickEventDetail = {
	targetRef: HTMLElement;
};

type ShellBarProductSwitchClickEventDetail = {
	targetRef: HTMLElement;
};

type ShellBarLogoClickEventDetail = {
	targetRef: HTMLElement;
};

type ShellBarMenuItemClickEventDetail = {
	item: HTMLElement;
};

type ShellBarSearchButtonEventDetail = {
	targetRef: HTMLElement;
	searchFieldVisible: boolean;
};

interface IShelBarItemInfo extends ITabbable {
	id: string,
	icon?: string,
	text?: string,
	priority: number,
	show: boolean,
	count?: string,
	custom?: boolean,
	title?: string,
	stableDomRef?: string,
	refItemid?: string,
	press: (e: MouseEvent) => void,
	styles: object,
	domOrder: number,
	classes: string,
	order?: number,
	profile?: boolean,
}

interface IShelBarAdditionalContext extends HTMLElement, ITabbable {
	priority: string | number,
}

// interface IShelBarNavigationItem extends HTMLElement, ITabbable {
// 	titleText?: string,
// 	subtitleText?: string,
// 	icon?: string,
// 	target?: string,
// 	targetSrc?: string,
// 	selected: boolean,
// }

const HANDLE_RESIZE_DEBOUNCE_RATE = 200; // ms

/**
 * @class
 * ### Overview
 *
 * The `ui5-shellbar` is meant to serve as an application header
 * and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.
 *
 * ### Stable DOM Refs
 *
 * You can use the following stable DOM refs for the `ui5-shellbar`:
 *
 * - logo
 * - notifications
 * - overflow
 * - profile
 * - product-switch
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents-fiori/dist/ShellBar.js";`
 * @csspart root - Used to style the outermost wrapper of the `ui5-shellbar`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 0.8.0
 */

@customElement({
	tag: "ui5-shellbar",
	fastNavigation: true,
	languageAware: true,
	renderer: litRender,
	template: ShellBarTemplate,
	styles: [shellBarStyles, ShellBarPopoverCss],
	dependencies: [
		Button,
		Icon,
		List,
		Popover,
		ListItemStandard,
		Menu,
	],
})
/**
 *
 * Fired, when the notification icon is activated.
 * @param {HTMLElement} targetRef dom ref of the activated element
 * @public
 */
@event<ShellBarNotificationsClickEventDetail>("notifications-click", {
	detail: {
		/**
		 * @public
		 */
		targetRef: { type: HTMLElement },
	},
	cancelable: true,
	bubbles: true,
})

/**
 * Fired, when the profile slot is present.
 * @param {HTMLElement} targetRef dom ref of the activated element
 * @public
 */
@event<ShellBarProfileClickEventDetail>("profile-click", {
	detail: {
		/**
		 * @public
		 */
		targetRef: { type: HTMLElement },
	},
	bubbles: true,
})

/**
 * Fired, when the product switch icon is activated.
 *
 * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
 * @param {HTMLElement} targetRef dom ref of the activated element
 * @public
 */
@event<ShellBarProductSwitchClickEventDetail>("product-switch-click", {
	detail: {
		/**
		 * @public
		 */
		targetRef: { type: HTMLElement },
	},
	cancelable: true,
	bubbles: true,
})

/**
 * Fired, when the logo is activated.
 * @param {HTMLElement} targetRef dom ref of the activated element
 * @since 0.10
 * @public
 */
@event<ShellBarLogoClickEventDetail>("logo-click", {
	detail: {
		/**
		 * @public
		 */
		targetRef: { type: HTMLElement },
	},
	bubbles: true,
})

/**
 * Fired, when a menu item is activated
 *
 * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
 * @param {HTMLElement} item DOM ref of the activated list item
 * @since 0.10
 * @public
 */
@event<ShellBarMenuItemClickEventDetail>("menu-item-click", {
	detail: {
		/**
		 * @public
		 */
		item: { type: HTMLElement },
	},
	bubbles: true,
	cancelable: true,
})

/**
 * Fired, when the search button is activated.
 *
 * **Note:** You can prevent expanding/collapsing of the search field by calling `event.preventDefault()`.
 * @param {HTMLElement} targetRef dom ref of the activated element
 * @param {Boolean} searchFieldVisible whether the search field is visible
 * @public
 */

@event<ShellBarSearchButtonEventDetail>("search-button-click", {
	detail: {
		targetRef: { type: HTMLElement },
		searchFieldVisible: { type: Boolean },
	},
	cancelable: true,
	bubbles: true,
})

class ShellBar extends UI5Element {
	/**
	 * Defines the `primaryTitle`.
	 *
	 * **Note:** The `primaryTitle` would be hidden on S screen size (less than approx. 700px).
	 * @default undefined
	 * @public
	 */
	@property()
	primaryTitle?: string;

	/**
	 * Defines the `secondaryTitle`.
	 *
	 * **Note:** The `secondaryTitle` would be hidden on S and M screen sizes (less than approx. 1300px).
	 * @default undefined
	 * @public
	 */
	@property()
	secondaryTitle?: string;

	/**
	 * Defines the `notificationsCount`,
	 * displayed in the notification icon top-right corner.
	 * @default undefined
	 * @public
	 */
	@property()
	notificationsCount?: string;

	/**
	 * Defines, if the notification icon would be displayed.
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	showNotifications = false;

	/**
	 * Defines, if the product switch icon would be displayed.
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	showProductSwitch = false;

	/**
	 * Defines, if the Search Field would be displayed when there is a valid `searchField` slot.
	 *
	 * **Note:** By default the Search Field is not displayed.
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	showSearchField = false;

	/**
	 * Defines the mode Shellbar is presented in.
	 *
	 * @default false
	 * @public
	 */
	@property()
	variant: `${ShellBarVariant}` = "Full"

	/**
	 * Defines additional accessibility attributes on different areas of the component.
	 *
	 * The accessibilityAttributes object has the following fields,
	 * where each field is an object supporting one or more accessibility attributes:
	 *
	 * - **logo** - `logo.role` and `logo.name`.
	 * - **notifications** - `notifications.expanded` and `notifications.hasPopup`.
	 * - **profile** - `profile.expanded`, `profile.hasPopup` and `profile.name`.
	 * - **product** - `product.expanded` and `product.hasPopup`.
	 * - **search** - `search.hasPopup`.
	 * - **overflow** - `overflow.expanded` and `overflow.hasPopup`.
	 *
	 * The accessibility attributes support the following values:
	 *
	 * - **role**: Defines the accessible ARIA role of the logo area.
	 * Accepts the following string values: `button` or `link`.
	 *
	 * - **expanded**: Indicates whether the button, or another grouping element it controls,
	 * is currently expanded or collapsed.
	 * Accepts the following string values: `true` or `false`.
	 *
	 * - **hasPopup**: Indicates the availability and type of interactive popup element,
	 * such as menu or dialog, that can be triggered by the button.
	 *
	 * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
	 * - **name**: Defines the accessible ARIA name of the area.
	 * Accepts any string.
	 *
	 * @default {}
	 * @public
	 * @since 1.10.0
	 */
	 @property({ type: Object })
	 accessibilityAttributes: ShellBarAccessibilityAttributes = {};

	/**
	 * @private
	 */
	@property()
	breakpointSize?: string;

	/**
	 * @private
	 */
	@property({ type: Boolean })
	withLogo = false;

	@property({ type: Object })
	_itemsInfo!: Array<IShelBarItemInfo>;

	@property({ type: Array, noAttribute: true })
	_menuPopoverItems: Array<HTMLElement> = [];

	@property({ type: Boolean, noAttribute: true })
	_menuPopoverExpanded = false;

	@property({ type: Boolean, noAttribute: true })
	_overflowPopoverExpanded = false;

	@property({ type: Boolean, noAttribute: true })
	_fullWidthSearch = false;

	@property({ type: Boolean, noAttribute: true })
	_isXXLBreakpoint = false;
	@property({ type: Boolean, noAttribute: true })
	_isSBreakpoint = false;

	/**
	 * Defines the assistant slot.
	 *
	 * @since 2.0.0
	 * @public
	 */
	@slot()
	assistant!: Array<IButton>;

	/**
	 * Defines the `ui5-shellbar` additional items.
	 *
	 * **Note:**
	 * You can use the `<ui5-shellbar-item></ui5-shellbar-item>`.
	 * @public
	 */
	@slot({ type: HTMLElement, "default": true, invalidateOnChildChange: true })
	items!: Array<ShellBarItem>;

	/**
	 * You can pass `ui5-avatar` to set the profile image/icon.
	 * If no profile slot is set - profile will be excluded from actions.
	 *
	 * **Note:** We recommend not using the `size` attribute of `ui5-avatar` because
	 * it should have specific size by design in the context of `ui5-shellbar` profile.
	 * @since 1.0.0-rc.6
	 * @public
	 */
	@slot()
	profile!: Array<HTMLElement>;

	/**
	 * Defines the logo of the `ui5-shellbar`.
	 * For example, you can use `ui5-avatar` or `img` elements as logo.
	 * @since 1.0.0-rc.8
	 * @public
	 */
	@slot()
	logo!: Array<HTMLElement>;

	/**
	 * Defines the items displayed in menu after a click on a start button.
	 *
	 * **Note:** You can use the  `<ui5-li></ui5-li>` and its ancestors.
	 * @since 0.10
	 * @public
	 */
	@slot()
	menuItems!: Array<ListItemBase>;

	/**
	 * Defines the `ui5-input`, that will be used as a search field.
	 * @public
	 */
	@slot()
	searchField!: Array<Input>;

	/**
	 * Defines a `ui5-button` in the bar that will be placed in the beginning.
	 * We encourage this slot to be used for a menu button.
	 * It gets overstyled to match ShellBar's styling.
	 * @public
	 */
	@slot()
	startButton!: Array<IButton>;

	/**
	 * The container is positioned in the center of the `ui5-shellbar` and occupies one-third of the total length of the `ui5-shellbar`.
	 *
	 * **Note:** If set, the `searchField` slot is not rendered.
	 * @private
	 * @deprecated Use additionalContextStart of additionalContextEnd instead.
	 */
	@slot()
	midContent!: Array<HTMLElement>;

	@slot({ type: HTMLElement, individualSlots: true })
	additionalContextStart!: Array<IShelBarAdditionalContext>;

	@slot({ type: HTMLElement, individualSlots: true })
	additionalContextEnd!: Array<IShelBarAdditionalContext>;

	@i18n("@ui5/webcomponents-fiori")
	static i18nBundle: I18nBundle;
	overflowPopover?: Popover | null;
	menuPopover?: Popover | null;
	_isInitialRendering: boolean;
	_defaultItemPressPrevented: boolean;
	menuItemsObserver: MutationObserver;
	_debounceInterval?: Timeout | null;
	_hiddenIcons: Array<IShelBarItemInfo>;
	_handleResize: ResizeObserverCallback;
	_currentIndex: number;
	_navigatableItems: (HTMLElement)[];
	_overflowNotifications: string | null;

	_headerPress: () => void;
	_onkeydownFn: (e: KeyboardEvent) => void;

	static get FIORI_3_BREAKPOINTS() {
		return [
			599,
			1023,
			1439,
			1919,
			10000,
		];
	}

	static get FIORI_3_BREAKPOINTS_MAP(): Record<string, string> {
		return {
			"599": "S",
			"1023": "M",
			"1439": "L",
			"1919": "XL",
			"10000": "XXL",
		};
	}

	constructor() {
		super();

		this._menuPopoverItems = [];
		this._hiddenIcons = [];
		this._itemsInfo = [];
		this._isInitialRendering = true;
		this._overflowNotifications = null;

		// marks if preventDefault() is called in item's press handler
		this._defaultItemPressPrevented = false;

		const navigatableItems = [...this.additionalContextStart, ...this.additionalContextEnd];
		this._navigatableItems = navigatableItems.filter(item => !item.getAttribute("hidden"));

		this.menuItemsObserver = new MutationObserver(() => {
			this._updateClonedMenuItems();
		});

		this._headerPress = () => {
			this._updateClonedMenuItems();

			if (this.hasMenuItems) {
				const menuPopover = this._getMenuPopover();
				menuPopover.opener = this.shadowRoot!.querySelector<Button>(".ui5-shellbar-menu-button")!;
				menuPopover.open = true;
			}
		};

		this._handleResize = () => {
			this._debounce(() => {
				this.menuPopover = this._getMenuPopover();
				this.overflowPopover = this._getOverflowPopover();
				this.overflowPopover.open = false;
				this._overflowActions();
			}, HANDLE_RESIZE_DEBOUNCE_RATE);
		};

		this._currentIndex = 0;
		this._onkeydownFn = this._onKeyDown.bind(this);
	}

	_onKeyDown(e: KeyboardEvent) {
		const items = this._getShellbarVisibleAndInteractiveItems();
		const activeElement = this._getActiveElement();
		const currentIndex = items.findIndex(el => el === activeElement);

		if (isLeft(e) || isRight(e)) {
		    e.preventDefault();// Prevent the default behavior to avoid any further automatic focus movemen

		    // Focus navigation based on the key pressed
		    if (isLeft(e)) {
		        this._focusPreviousItem(items, currentIndex);
		    } else if (isRight(e)) {
		      this._focusNextItem(items, currentIndex);
		    }
		}
	}

	_focusNextItem(items: HTMLElement[], currentIndex: number) {
		if (currentIndex < items.length - 1) {
			(items[currentIndex + 1]).focus(); // Focus the next element
		}
	}
	_focusPreviousItem(items: HTMLElement[], currentIndex: number) {
		if (currentIndex > 0) {
			(items[currentIndex - 1]).focus(); // Focus the previous element
		}
	}

	_isVisible(element: HTMLElement): boolean {
		const style = getComputedStyle(element);

		return style.display !== "none" && style.visibility !== "hidden" && element.offsetWidth > 0 && element.offsetHeight > 0;
	}

	_isInteractive(element: HTMLElement | UI5Element): boolean {
		const component = element as UI5Element;
		if (component.isUI5Element) {
			const dom = component.getFocusDomRef();
			return dom?.tabIndex === 0;
		}
		return element.tabIndex === 0;
	}
	_getActiveElement() {
		const activeElement = document.activeElement;

		if (activeElement === this) {
			return activeElement.shadowRoot!.activeElement;
		}

		return activeElement;
	}

	_getAllShellbarItems() {
		return [
			...this.startButton,
			...this.shadowRoot!.querySelectorAll(".ui5-shellbar-logo"),
			...this.shadowRoot!.querySelectorAll(".ui5-shellbar-logo-area"),
			...this.shadowRoot!.querySelectorAll(".ui5-shellbar-menu-button"),
			...this.additionalContextStart,
			...this.additionalContextEnd,
			...this.shadowRoot!.querySelectorAll(".ui5-shellbar-search-item-for-arrow-nav"),
			...this.assistant,
			...this.shadowRoot!.querySelectorAll(".ui5-shellbar-items-for-arrow-nav"),
			...this.profile,
		] as HTMLElement[];
	}

	_getShellbarVisibleAndInteractiveItems() {
		const allShellbarItems = this._getAllShellbarItems();
		const visibleAndInteractiveItems = allShellbarItems.filter(item => {
			return this._isVisible(item) && this._isInteractive(item);
		});

		return visibleAndInteractiveItems;
	}

	_debounce(fn: () => void, delay: number) {
		clearTimeout(this._debounceInterval!);
		this._debounceInterval = setTimeout(() => {
			this._debounceInterval = null;
			fn();
		}, delay);
	}

	_onfocusin(e: FocusEvent) {
		const target = e.target as IShelBarAdditionalContext;

		this._currentIndex = [...this.customItemsInfo, ...this.additionalContextStart, ...this.additionalContextEnd].indexOf(target);
	}

	_menuItemPress(e: CustomEvent<ListSelectionChangeEventDetail>) {
		const shouldContinue = this.fireDecoratorEvent<ShellBarMenuItemClickEventDetail>("menu-item-click", {
			item: e.detail.selectedItems[0],
		});
		if (shouldContinue) {
			this.menuPopover!.open = false;
		}
	}

	_logoPress() {
		this.fireDecoratorEvent<ShellBarLogoClickEventDetail>("logo-click", {
			targetRef: this.shadowRoot!.querySelector(".ui5-shellbar-logo")!,
		});
	}

	_menuPopoverBeforeOpen() {
		this._menuPopoverExpanded = true;
		if (this.menuPopover!.content && this.menuPopover!.content.length) {
			(<List> this.menuPopover!.content[0]).focusFirstItem();
		}
	}

	_menuPopoverAfterClose() {
		this._menuPopoverExpanded = false;
	}

	_overflowPopoverBeforeOpen() {
		this._overflowPopoverExpanded = true;
		if (this.overflowPopover!.content && this.overflowPopover!.content.length) {
			(<List> this.overflowPopover!.content[0]).focusFirstItem();
		}
	}

	_overflowPopoverAfterClose() {
		this._overflowPopoverExpanded = false;
	}

	_logoKeyup(e: KeyboardEvent) {
		if (isSpace(e)) {
			this._logoPress();
		}
	}

	_logoKeydown(e: KeyboardEvent) {
		if (isSpace(e)) {
			e.preventDefault();
			return;
		}

		if (isEnter(e)) {
			this._logoPress();
		}
	}

	onBeforeRendering() {
		this.withLogo = this.hasLogo;

		this._hiddenIcons = this._itemsInfo.filter(info => {
			const isHidden = (info.classes.indexOf("ui5-shellbar-hidden-button") !== -1);
			const isSet = info.classes.indexOf("ui5-shellbar-invisible-button") === -1;
			const isOverflowIcon = info.classes.indexOf("ui5-shellbar-overflow-button") !== -1;
			const isImageIcon = info.classes.indexOf("ui5-shellbar-image-button") !== -1;
			const shouldStayOnScreen = isOverflowIcon || (isImageIcon && this.hasProfile);

			return isHidden && isSet && !shouldStayOnScreen;
		});

		this._observeMenuItems();
	}

	onAfterRendering() {
		const overflowContainer = this.shadowRoot!.querySelector(".ui5-shellbar-overflow-container-right-child");
		let minWidth: number,
			overflowButtons = [];

		this._fullWidthSearch = this._showFullWidthSearch;

		overflowButtons = Array.from(overflowContainer!.querySelectorAll(".ui5-shellbar-no-overflow-button")) || [];
		if (this.assistant) {
			overflowButtons = overflowButtons.concat(this.getSlottedNodes("assistant") || []);
		}
		if (overflowButtons) {
			 minWidth = overflowButtons.reduce((acc, el) => {
				return acc + el.getBoundingClientRect().width + parseInt(getComputedStyle(el).getPropertyValue("margin-inline-start"));
			}, 0);
			overflowContainer!.setAttribute("style", `min-width: ${minWidth}px`);
		}
	}

	/**
	 * Closes the overflow area.
	 * Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event
	 * @public
	 */
	closeOverflow(): void {
		if (this.overflowPopover) {
			this.overflowPopover.open = false;
		}
	}

	_handleBarBreakpoints() {
		const width = this.getBoundingClientRect().width;
		const breakpoints = ShellBar.FIORI_3_BREAKPOINTS;

		const size = breakpoints.find(bp1 => width <= bp1) || ShellBar.FIORI_3_BREAKPOINTS[ShellBar.FIORI_3_BREAKPOINTS.length - 1];
		const mappedSize = ShellBar.FIORI_3_BREAKPOINTS_MAP[size];

		if (this.breakpointSize !== mappedSize) {
			this.breakpointSize = mappedSize;
		}

		this._isXXLBreakpoint = this.breakpointSize === "XXL";
		this._isSBreakpoint = this.breakpointSize === "S";
		return mappedSize;
	}

	_handleSizeS() {
		const hasIcons = [this.showNotifications, this.searchField.length, this.items.length].reduce((acc: number, val) => {
			return acc + Number(val);
		}, 0);

		const newItems = this._getAllItems(hasIcons > 1).map((info): IShelBarItemInfo => {
			const isOverflowIcon = info.classes.indexOf("ui5-shellbar-overflow-button") !== -1;
			const isImageIcon = info.classes.indexOf("ui5-shellbar-image-button") !== -1;
			const shouldStayOnScreen = isOverflowIcon || (isImageIcon && this.hasProfile) || !this._isFullVariant;

			return {
				...info,
				classes: `${info.classes} ${shouldStayOnScreen ? "" : "ui5-shellbar-hidden-button"} ui5-shellbar-button`,
				styles: {
					order: shouldStayOnScreen ? 1 : -1,
				},
			};
		});

		this._updateItemsInfo(newItems);
	}

	_handleActionsOverflow() {
		const rightContainerRect = this.shadowRoot!.querySelector(".ui5-shellbar-overflow-container-right-child")!.getBoundingClientRect();
		let overflowSelector = ".ui5-shellbar-button:not(.ui5-shellbar-overflow-button):not(.ui5-shellbar-invisible-button):not(.ui5-shellbar-cancel-button)";

		if (this.showSearchField) {
			overflowSelector += ",.ui5-shellbar-search-field";
		}

		const elementsToOverflow = Array.from(this.shadowRoot!.querySelectorAll<Button | IButton>(overflowSelector));
		if (this.assistant) {
			elementsToOverflow.push(this.assistant[0]);
		}
		const isRTL = this.effectiveDir === "rtl";

		const overflowButtons = [...elementsToOverflow].filter(icon => {
			const iconRect = (icon).getBoundingClientRect();

			if (isRTL) {
				return (iconRect.left + iconRect.width) > (rightContainerRect.left + rightContainerRect.width);
			}

			return iconRect.left < rightContainerRect.left;
		});
		const showOverflowButton = !!overflowButtons.length;

		const items = this._getAllItems(showOverflowButton).filter(item => item.show);

		if (!this._isFullVariant) {
			return items;
		}

		const itemsByPriority = this.itemsByPriority(items);

		for (let i = 0; i < itemsByPriority.length; i++) {
			const collection = itemsByPriority.toReversed();
			if (i < overflowButtons.length) {
				collection[i].classes = `${collection[i].classes} ui5-shellbar-hidden-button`;
				collection[i].styles = {
					order: -1,
				};
			}
		}

		return itemsByPriority;
	}

	_handleadditionalContext() {
		const additionalContext = [...this.additionalContextEnd, ...this.additionalContextStart];
		let additionalItems: Array<IShelBarAdditionalContext> = [];
		additionalContext.forEach(item => item.removeAttribute("hidden"));

		additionalItems = this._setContentPriority(additionalContext);
		this.itemsHiddenState(additionalItems);
	}

	itemsByPriority(items:Array<IShelBarItemInfo>) {
		return items.slice().sort((item1, item2) => {
			if (item1.priority > item2.priority) {
				return 1;
			}

			if (item1.priority < item2.priority) {
				return -1;
			}

			return 0;
		});
	}

	itemsHiddenClasses(items: Array<IShelBarItemInfo>, count: number) {
		for (let i = 0; i < items.length; i++) {
			if (i < count) {
				items[i].classes = `${items[i].classes} ui5-shellbar-hidden-button`;
				items[i].styles = {
					order: 0,
				};
			}
		}
	}

	itemsHiddenState(itemsByPriority: Array<IShelBarAdditionalContext>) {
		const containerRect = this.shadowRoot!.querySelector(".ui5-shellbar-overflow-container-right")!.getBoundingClientRect();
		const isRTL = this.effectiveDir === "rtl";
		let elementRect;
		if (itemsByPriority.find(item => {
			elementRect = item.getBoundingClientRect();
			if (isRTL) {
				return (elementRect.left + elementRect.width) > (containerRect.left + containerRect.width);
			}
			return elementRect.left < containerRect.left && item.hidden !== true;
		})) {
			itemsByPriority.find(item => item.hidden !== true)!.setAttribute("hidden", "true");
			this.itemsHiddenState(itemsByPriority);
		}
	}

	_overflowActions() {
		const size = this._handleBarBreakpoints();
		this._handleadditionalContext();

		if (size === "S") {
			return this._handleSizeS();
		}

		const newItems = this._handleActionsOverflow();
		this._updateItemsInfo(newItems);
		this._updateOverflowNotifications();
	}

	_setContentPriority(items: Array<IShelBarAdditionalContext>) {
		for (let i = 0; i < items.length; i++) {
			items[i].priority = items[i].getAttribute("data-priority") || 0;
		}
		return items.slice().sort((item1, item2) => {
			const priority1 = parseInt(item1.getAttribute("data-priority") || "") || 0;
			const priority2 = parseInt(item2.getAttribute("data-priority") || "") || 0;
			if (priority1 > priority2) {
				return 1;
			}

			if (priority1 < priority2) {
				return -1;
			}

			return 0;
		});
	}

	_toggleActionPopover() {
		const overflowButton = this.shadowRoot!.querySelector<Button>(".ui5-shellbar-overflow-button")!;
		const overflowPopover = this._getOverflowPopover();
		overflowPopover.opener = overflowButton;
		overflowPopover.open = true;
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._handleResize);
		this.addEventListener("keydown", this._onkeydownFn);

		if (isDesktop()) {
			this.setAttribute("desktop", "");
		}
		setTimeout(this._overflowActions.bind(this), 100);
	}

	onExitDOM() {
		this.menuItemsObserver.disconnect();
		ResizeHandler.deregister(this, this._handleResize);
		clearTimeout(this._debounceInterval!);
		this._debounceInterval = null;
		this.removeEventListener("keydown", this._onkeydownFn);
	}

	_handleSearchIconPress() {
		const searchButtonRef = this.shadowRoot!.querySelector<Button>(".ui5-shellbar-search-button")!;
		this.shadowRoot!.querySelector(".ui5-shellbar-root")!.classList.add("ui5-shellbar-expanded-search");
		const defaultPrevented = !this.fireDecoratorEvent<ShellBarSearchButtonEventDetail>("search-button-click", {
			targetRef: searchButtonRef,
			searchFieldVisible: this.showSearchField,
		});

		if (defaultPrevented) {
			return;
		}
		this.showSearchField = !this.showSearchField;

		if (!this.showSearchField) {
			return;
		}

		const input = this.searchField[0];

		// update the state immediately
		if (input) {
			input.focused = true;
		}

		// move the focus later
		setTimeout(() => {
			if (input) {
				input.focus();
			}
		}, 100);
	}

	async _handleActionListClick() {
		if (!this._defaultItemPressPrevented) {
			this.closeOverflow();
			// wait for DOM to be updated when ui5-popover is closed, otherwise if Enter key is hold
			// there will be no visual indication that this has happened
			await renderFinished();
		}

		this._defaultItemPressPrevented = false;
	}

	_handleCustomActionPress(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const refItemId = target.getAttribute("data-ui5-external-action-item-id");

		if (refItemId) {
			const shellbarItem = this.items.find(item => {
				return item._id === refItemId;
			});

			const prevented = shellbarItem!.fireClickEvent(e);

			this._defaultItemPressPrevented = prevented;
		}
	}

	_handleOverflowPress() {
		this._toggleActionPopover();
	}

	_handleNotificationsPress(e: MouseEvent) {
		const notificationIconRef = this.shadowRoot!.querySelector<Button>(".ui5-shellbar-bell-button")!,
			target = e.target as HTMLElement;

		this._defaultItemPressPrevented = !this.fireDecoratorEvent<ShellBarNotificationsClickEventDetail>("notifications-click", {
			targetRef: notificationIconRef.classList.contains("ui5-shellbar-hidden-button") ? target : notificationIconRef,
		});
	}

	_handleProfilePress() {
		this.fireDecoratorEvent<ShellBarProfileClickEventDetail>("profile-click", {
			targetRef: this.shadowRoot!.querySelector<Button>(".ui5-shellbar-image-button")!,
		});
	}

	_handleCancelButtonPress() {
		this.showSearchField = false;
	}

	_handleProductSwitchPress(e: MouseEvent) {
		const buttonRef = this.shadowRoot!.querySelector<Button>(".ui5-shellbar-button-product-switch")!,
			target = e.target as HTMLElement;

		this._defaultItemPressPrevented = !this.fireDecoratorEvent<ShellBarProductSwitchClickEventDetail>("product-switch-click", {
			targetRef: buttonRef.classList.contains("ui5-shellbar-hidden-button") ? target : buttonRef,
		});
	}

	/**
	 * Returns the `logo` DOM ref.
	 * @public
	 * @default null
	 * @since 1.0.0-rc.16
	 */
	get logoDomRef(): HTMLElement | null {
		return this.shadowRoot!.querySelector<HTMLElement>(`*[data-ui5-stable="logo"]`);
	}

	/**
	 * Returns the `notifications` icon DOM ref.
	 * @public
	 * @default null
	 * @since 1.0.0-rc.16
	 */
	get notificationsDomRef(): HTMLElement | null {
		return this.shadowRoot!.querySelector<HTMLElement>(`*[data-ui5-stable="notifications"]`);
	}

	/**
	 * Returns the `overflow` icon DOM ref.
	 * @public
	 * @default null
	 * @since 1.0.0-rc.16
	 */
	get overflowDomRef(): HTMLElement | null {
		return this.shadowRoot!.querySelector<HTMLElement>(`*[data-ui5-stable="overflow"]`);
	}

	/**
	 * Returns the `profile` icon DOM ref.
	 * @public
	 * @default null
	 * @since 1.0.0-rc.16
	 */
	get profileDomRef(): HTMLElement | null {
		return this.shadowRoot!.querySelector<HTMLElement>(`*[data-ui5-stable="profile"]`);
	}

	/**
	 * Returns the `product-switch` icon DOM ref.
	 * @public
	 * @default null
	 * @since 1.0.0-rc.16
	 */
	get productSwitchDomRef(): HTMLElement | null {
		return this.shadowRoot!.querySelector<HTMLElement>(`*[data-ui5-stable="product-switch"]`);
	}

	/**
	 * Returns all items that will be placed in the right of the bar as icons / dom elements.
	 * @param showOverflowButton Determines if overflow button should be visible (not overflowing)
	 */
	_getAllItems(showOverflowButton: boolean) {
		let domOrder = -1;
		const search = {
			icon: "search",
			text: this._searchText,
			classes: `${this.searchField.length ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-search-button ui5-shellbar-button`,
			priority: 1,
			domOrder: this.searchField.length ? (++domOrder) : -1,
			styles: {
				order: 1,
			},
			id: `${this._id}-item-${1}`,
			press: this._handleSearchIconPress.bind(this),
			show: !!this.searchField.length,
		};

		const items: Array<IShelBarItemInfo> = [
			...this.items.map((item: ShellBarItem) => {
				item._getRealDomRef = () => this.getDomRef()!.querySelector(`*[data-ui5-stable=${item.stableDomRef}]`)!;
				const isHelpOrMessageAction = item.icon === "sys-help" || item.icon === "thing-type";
				return {
					icon: item.icon,
					id: item._id,
					count: item.count || undefined,
					refItemid: item._id,
					text: item.text,
					classes: "ui5-shellbar-custom-item ui5-shellbar-button",
					priority: isHelpOrMessageAction ? 7 : 3,
					domOrder: (++domOrder),
					styles: {
						order: 5,
					},
					show: true,
					press: this._handleCustomActionPress.bind(this),
					custom: true,
					title: item.title,
					stableDomRef: item.stableDomRef,
					shouldBeHidden: !this._isFullVariant && item.icon && !isHelpOrMessageAction,
				};
			}),
			{
				icon: "bell",
				title: this._notificationsText,
				text: ShellBar.i18nBundle.getText(SHELLBAR_NOTIFICATIONS_NO_COUNT),
				count: this.notificationsCount,
				classes: `${this.showNotifications ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-bell-button ui5-shellbar-button`,
				priority: 2,
				styles: {
					order: this.showNotifications ? 2 : -1,
				},
				id: `${this._id}-item-${2}`,
				show: this.showNotifications,
				domOrder: this.showNotifications ? (++domOrder) : -1,
				press: this._handleNotificationsPress.bind(this),
			},
			{
				icon: "overflow",
				text: "Overflow",
				classes: `${showOverflowButton ? "" : "ui5-shellbar-hidden-button"} ui5-shellbar-overflow-button-shown ui5-shellbar-overflow-button ui5-shellbar-button`,
				priority: 0,
				styles: {
					order: showOverflowButton ? 4 : -1,
				},
				domOrder: showOverflowButton ? (++domOrder) : -1,
				id: `${this.id}-item-${5}`,
				press: this._handleOverflowPress.bind(this),
				show: true,
			},
			{
				text: "Person",
				classes: `${this.hasProfile ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-image-button ui5-shellbar-button`,
				priority: 0,
				styles: {
					order: this.hasProfile ? 5 : -10,
				},
				profile: true,
				id: `${this._id}-item-${3}`,
				domOrder: this.hasProfile ? (++domOrder) : -1,
				show: this.hasProfile,
				press: this._handleProfilePress.bind(this),
			},
			{
				icon: "grid",
				text: this._productsText,
				classes: `${this.showProductSwitch ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-button ui5-shellbar-image-button ui5-shellbar-button-product-switch`,
				priority: 0,
				styles: {
					order: this.showProductSwitch ? 6 : -10,
				},
				id: `${this._id}-item-${4}`,
				show: this.showProductSwitch,
				domOrder: this.showProductSwitch ? (++domOrder) : -1,
				press: this._handleProductSwitchPress.bind(this),
			},
			search,
		];

		if (this.assistant.length > 0) {
			this.assistant.forEach(assistant => {
				assistant.classList.add("ui5-shellbar-no-overflow-button");
			});
		}

		return items;
	}

	_updateItemsInfo(newItems: Array<IShelBarItemInfo>) {
		const isDifferent = JSON.stringify(this._itemsInfo) !== JSON.stringify(newItems);
		if (isDifferent) {
			this._itemsInfo = newItems;
		}
	}

	_updateOverflowNotifications() {
		const notificationsArr: Array<string> = [];
		let overflowNotifications = null;

		this._itemsInfo.forEach(item => {
			if (item.count && this.isIconHidden(item.icon!)) {
				notificationsArr.push(item.count);
			}
		});

		if (notificationsArr.length === 1) {
			overflowNotifications = notificationsArr[0];
		} else if (notificationsArr.length > 1) {
			overflowNotifications = " ";
		}

		this._overflowNotifications = overflowNotifications;
	}

	_updateClonedMenuItems() {
		this._menuPopoverItems = [];

		this.menuItems.forEach(item => {
			// clone the menuItem and remove the slot="menuItems",
			// otherwise would not be slotted in the internal ui5-li
			const clonedItem = item.cloneNode(true) as HTMLElement;
			clonedItem.removeAttribute("slot");

			this._menuPopoverItems.push(clonedItem);
		});
	}

	_observeMenuItems() {
		this.menuItems.forEach(item => {
			this.menuItemsObserver.observe(item, {
				characterData: true,
				childList: true,
				subtree: true,
				attributes: true,
			});
		});
	}

	_getOverflowPopover() {
		return this.shadowRoot!.querySelector<Popover>(".ui5-shellbar-overflow-popover")!;
	}

	_getMenuPopover() {
		return this.shadowRoot!.querySelector<Popover>(".ui5-shellbar-menu-popover")!;
	}

	isIconHidden(name: string) {
		const itemInfo = this._itemsInfo.find(item => item.icon === name);

		if (!itemInfo) {
			return false;
		}

		return itemInfo.classes.indexOf("ui5-shellbar-hidden-button") !== -1;
	}

	get classes(): ClassMap {
		return {
			wrapper: {
				"ui5-shellbar-root": true,
				"ui5-shellbar-with-searchfield": this.hasSearchField,
			},
			button: {
				"ui5-shellbar-menu-button--interactive": this.hasMenuItems,
				"ui5-shellbar-menu-button": true,
			},
			items: {
				notification: {
					"ui5-shellbar-hidden-button": this.isIconHidden("bell"),
				},
				product: {

				},
				search: {
					"ui5-shellbar-hidden-button": this.isIconHidden("search"),
					// "ui5-shellbar-no-overflow-button": true
				},
				overflow: {
					"ui5-shellbar-hidden-button": this.isIconHidden("overflow"),
					"ui5-shellbar-no-overflow-button": true,
					"ui5-shellbar-overflow-button-shown": !!this._hiddenIcons.length,
				},
			},
		};
	}

	get styles() {
		return {
			items: {
				notification: {
					"order": this.isIconHidden("bell") ? "-1" : "3",
				},
				overflow: {
					"order": this.isIconHidden("overflow") ? "-1" : "5",
				},
				profile: {
					"order": this.hasProfile ? "5" : "-1",
				},
				product: {
					"order": "6",
				},
			},
			searchField: {
				"display": this.correctSearchFieldStyles,
			},
		};
	}

	get correctSearchFieldStyles() {
		if (this.showSearchField) {
			return "flex";
		}

		return "none";
	}

	get customItemsInfo() {
		return this._itemsInfo.filter(itemInfo => !!itemInfo.custom);
	}

	get hasLogo() {
		return !!this.logo.length;
	}

	get showLogoInMenuButton() {
		return this.hasLogo && this.breakpointSize === "S";
	}

	get showTitleInMenuButton() {
		return this.primaryTitle && !(this.showLogoInMenuButton);
	}

	get showMenuButton() {
		return this.primaryTitle || this.showLogoInMenuButton;
	}

	get popoverHorizontalAlign(): `${PopoverHorizontalAlign}` {
		return this.effectiveDir === "rtl" ? "Start" : "End";
	}

	get hasAssistant() {
		return !!this.assistant.length;
	}

	get hasSearchField() {
		return !!this.searchField.length;
	}

	get hasMidContent() {
		return !!this.midContent.length;
	}

	get hasProfile() {
		return !!this.profile.length;
	}

	get hasMenuItems() {
		return this.menuItems.length > 0;
	}

	get _shellbarText() {
		return ShellBar.i18nBundle.getText(SHELLBAR_LABEL);
	}

	get _logoText() {
		return this.accessibilityAttributes.logo?.name || ShellBar.i18nBundle.getText(SHELLBAR_LOGO);
	}

	get _notificationsText() {
		return ShellBar.i18nBundle.getText(SHELLBAR_NOTIFICATIONS, this.notificationsCount || 0);
	}

	get _cancelBtnText() {
		return ShellBar.i18nBundle.getText(SHELLBAR_CANCEL);
	}

	get _showFullWidthSearch() {
		const size = this._handleBarBreakpoints();
		const searchBtnHidden = !!this.shadowRoot!.querySelector<Button>(".ui5-shellbar-search-button.ui5-shellbar-hidden-button");

		return ((size === "S") || searchBtnHidden);
	}

	get _profileText() {
		return this.accessibilityAttributes.profile?.name || ShellBar.i18nBundle.getText(SHELLBAR_PROFILE);
	}

	get _productsText() {
		return ShellBar.i18nBundle.getText(SHELLBAR_PRODUCTS);
	}

	get _searchText() {
		return ShellBar.i18nBundle.getText(SHELLBAR_SEARCH);
	}

	get _overflowText() {
		return ShellBar.i18nBundle.getText(SHELLBAR_OVERFLOW);
	}

	get _isFullVariant() {
		return this.variant === "Full";
	}

	get hasAdditionalContext() {
		return this.additionalContextStart || this.additionalContextEnd;
	}

	get hasVisibleAdditionalContextStart() {
		return this.additionalContextStart.some(item => !item.getAttribute("hidden"));
	}

	get hasVisibleAdditionalContextEnd() {
		return this.additionalContextEnd.some(item => !item.getAttribute("hidden"));
	}

	get accInfo() {
		const overflowExpanded = this.accessibilityAttributes.overflow?.expanded;

		return {
			notifications: {
				"title": this._notificationsText,
				"accessibilityAttributes": {
					expanded: this.accessibilityAttributes.notifications?.expanded,
					hasPopup: this.accessibilityAttributes.notifications?.hasPopup,
				},
			},
			profile: {
				"title": this._profileText,
				"accessibilityAttributes": {
					hasPopup: this.accessibilityAttributes.profile?.hasPopup,
					expanded: this.accessibilityAttributes.profile?.expanded,
				},
			},
			products: {
				"title": this._productsText,
				"accessibilityAttributes": {
					hasPopup: this.accessibilityAttributes.product?.hasPopup,
					expanded: this.accessibilityAttributes.product?.expanded,
				},
			},
			search: {
				"title": this._searchText,
				"accessibilityAttributes": {
					hasPopup: this.accessibilityAttributes.search?.hasPopup,
				},
			},
			overflow: {
				"title": this._overflowText,
				"accessibilityAttributes": {
					hasPopup: this.accessibilityAttributes.overflow?.hasPopup || AriaHasPopup.Menu.toLowerCase(),
					expanded: overflowExpanded === undefined ? this._overflowPopoverExpanded : overflowExpanded,
				},
			},
		};
	}

	get accLogoRole() {
		return this.accessibilityAttributes.logo?.role || "link";
	}
}

ShellBar.define();

export default ShellBar;

export type {
	ShellBarNotificationsClickEventDetail,
	ShellBarProfileClickEventDetail,
	ShellBarProductSwitchClickEventDetail,
	ShellBarLogoClickEventDetail,
	ShellBarMenuItemClickEventDetail,
	ShellBarAccessibilityAttributes,
	ShellBarSearchButtonEventDetail,
};
