import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import { customElement, property } from "@ui5/webcomponents-base/dist/decorators.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import TableRowActionBaseTemplate from "./generated/templates/TableRowActionBaseTemplate.lit.js";
import TableRowActionBaseStyles from "./generated/themes/TableRowActionBase.css.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import Icon from "./Icon.js";
import Button from "./Button.js";
import type Menu from "./Menu.js";
import type MenuItem from "./MenuItem.js";
import type Table from "./Table.js";
import type TableRow from "./TableRow.js";
import type TableRowAction from "./TableRowAction.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";

let MenuConstructor: new () => Menu;
let MenuItemConstructor: new () => MenuItem;

/**
 * @class
 * The `TableRowActionBase` class serves as a foundation for table row actions.
 * @constructor
 * @abstract
 * @extends UI5Element
 * @since 2.7.0
 * @public
 */
@customElement({
	renderer: litRender,
	styles: TableRowActionBaseStyles,
	template: TableRowActionBaseTemplate,
	dependencies: [Button, Icon],
})

abstract class TableRowActionBase extends UI5Element {
	/**
	 * Defines the visibility of the row action.
	 *
	 * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
	 *
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	invisible = false;

	@i18n("@ui5/webcomponents")
	static i18nBundle: I18nBundle;

	private static _menu: Menu;
	private static _menuItems = new WeakMap();
	static async showMenu(actions: TableRowActionBase[], opener: HTMLElement) {
		if (!MenuConstructor) {
			[MenuConstructor, MenuItemConstructor] = await Promise.all([
				import("./Menu.js").then(module => module.default),
				import("./MenuItem.js").then(module => module.default),
			]);
		}

		if (!this._menu || !this._menu.isConnected) {
			this._menu = new MenuConstructor();
			this._menu.addEventListener("item-click", ((e: CustomEvent) => {
				const menuItem = e.detail.item as MenuItem;
				const rowAction = this._menuItems.get(menuItem) as TableRowAction;
				rowAction._onActionClick();
			}) as EventListener);
			document.body.append(this._menu);
		}

		const menuItems = actions.map(action => {
			const menuItem = new MenuItemConstructor();
			menuItem.icon = action._icon;
			menuItem.text = action._text;
			menuItem.disabled = !action._isInteractive;
			this._menuItems.set(menuItem, action);
			return menuItem;
		});

		this._menu.replaceChildren(...menuItems);
		this._menu.opener = opener;
		this._menu.open = true;
	}

	abstract getRenderInfo(): {
		text: string;
		icon: string;
		interactive: boolean;
	};

	isFixedAction() {
		return false;
	}

	onEnterDOM(): void {
		this.toggleAttribute("_fixed", this.isFixedAction());
	}

	_onActionClick() {
		const row = this.parentElement as TableRow;
		const table = row.parentElement as Table;
		table._onRowActionClick(this);
	}

	get _text() {
		return this.getRenderInfo().text;
	}

	get _icon() {
		return this.getRenderInfo().icon;
	}

	get _isInteractive() {
		return this.getRenderInfo().interactive;
	}
}

export default TableRowActionBase;