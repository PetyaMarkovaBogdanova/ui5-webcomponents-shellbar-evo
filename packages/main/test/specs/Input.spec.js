import { assert } from "chai";

describe("Attributes propagation", () => {
	before(async () => {
		await browser.url(`test/pages/Input.html`);
	});

	it("Should change the placeholder of the inner input", async () => {
		const input = await browser.$("#myInput");
		const sExpected = "New placeholder text";

		await input.setAttribute("placeholder", "New placeholder text");

		assert.strictEqual(await input.shadow$("input").getProperty("placeholder"), sExpected, "The placeholder was set correctly");
	});

	it("Disabled attribute is propagated properly", async () => {
		assert.ok(await browser.$("#input-disabled").shadow$(".ui5-input-inner").getAttribute("disabled"), "Disabled property was propagated");
	});

	it("Redonly attribute is propagated properly", async () => {
		assert.ok(await browser.$("#input-readonly").shadow$(".ui5-input-inner").getAttribute("readonly"), "Readonly property was propagated");
	});

	it("Required attribute is propagated properly", async () => {
		assert.strictEqual(await browser.$("#input-required").shadow$(".ui5-input-inner").getAttribute("aria-required"), "true", "Aria-required attribute is set correctly");
		assert.strictEqual(await browser.$("#input-number").shadow$(".ui5-input-inner").getAttribute("aria-required"), "false", "Aria-required attribute is set correctly");
	});

	it("Type attribute is propagated properly", async () => {
		const sExpectedType = "number";
		assert.strictEqual(await browser.$("#input-number").shadow$(".ui5-input-inner").getAttribute("type"), sExpectedType, "Type property was propagated");
		assert.strictEqual(await browser.$("#input-number").shadow$(".ui5-input-inner").getAttribute("step"), "any", "The step attr is set");
	});

	it("Value attribute is propagated properly", async () => {
		const sExpectedValue = "Test test";

		await browser.$("#input3").setProperty("value", "Test test");

		assert.strictEqual(await browser.$("#input3").shadow$(".ui5-input-inner").getValue(), sExpectedValue, "Value property was set correctly");
	});

	it("sets empty value to an input", async () => {
		const input1 = await browser.$("#input1");
		const innerInput = await browser.$("#input1").shadow$("input");

		await input1.setProperty("value", "");

		assert.strictEqual(await input1.getValue(), "", "Property value should be empty");
		assert.strictEqual(await innerInput.getValue(), "", "Inner's property value should be empty");
	});
});

describe("Input general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/Input.html`);
	});

	it("Should not open suggestions popover when focused", async () => {
		const input = await browser.$("#myInput2");
		const popover = await input.shadow$("ui5-responsive-popover");

		// focus the input field which will display the suggestions
		await input.click();

		assert.ok(!(await popover.isDisplayedInViewport()), "The popover is not visible");
	});

	it("fires change", async () => {
		const input1 = await browser.$("#input1").shadow$("input");
		const inputResult = await browser.$("#inputResult").shadow$("input");

		// Start typing.
		await input1.click();
		await browser.keys("a");
		await browser.keys("b");
		await browser.keys("c");

		// Click somewhere else to focus out - should fire change event.
		await inputResult.click();

		// Get back and continue typing.
		await input1.click();
		await browser.keys("d");
		await browser.keys("e");
		await browser.keys("f");

		// Click somewhere else to force focus out - should fire change event.
		await inputResult.click();

		assert.strictEqual(await inputResult.getValue(), "2", "change is called twice");
	});

	it("fires change on tab", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#inputChange-Suggestions").shadow$("input");
		const inputResult = await browser.$("#inputChangeResult").shadow$("input");

		await input.click();
		await browser.keys("c");
		await browser.keys("ArrowDown");
		await browser.keys("Tab");

		assert.strictEqual(await inputResult.getValue(), "1", "change is called twice");
	});

	it("fires change only once when there was already a value on focus in", async () => {
		const input = await browser.$("#inputChange-Suggestions").shadow$("input");
		const inputResult = await browser.$("#inputChangeResult").shadow$("input");
		await browser.keys(["Shift", "Tab"]);
		await browser.keys("Backspace");

		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");


		await browser.keys("Tab");

		assert.strictEqual(await inputResult.getValue(), "2", "change is called once");
	});

	it("fires input", async () => {
		await browser.url(`test/pages/Input.html`);

		const input2 = await browser.$("#input2").shadow$("input");
		const inputLiveChangeResult = await browser.$("#inputLiveChangeResult").shadow$("input");

		await input2.click();
		await browser.keys("a");
		await browser.keys("b");
		await browser.keys("c");

		assert.strictEqual(await inputLiveChangeResult.getValue(), "3", "input is fired 3 times");
	});

	it("fires change when same value typed, but value is mutated via API in between", async () => {
		const inputChange = await browser.$("#inputChange").shadow$("input");
		const inputChangeResult = await browser.$("#inputChangeResult").shadow$("input");

		await inputChange.click();
		await browser.keys("a");
		await browser.keys("b");
		await browser.keys("c");

		// The submit event listener mutates the value via the API
		// Note: along with the sumbit event - the first change event is fired.
		await browser.keys("Enter");

		// Type the same value once again.
		await browser.keys("a");
		await browser.keys("b");
		await browser.keys("c");

		// Clicking on another input to force focus out,
		// which should trigger second change event, although same value is typed in.
		await inputChangeResult.click();

		assert.strictEqual(await inputChangeResult.getValue(), "2", "change is called twice");
	});

	it("Change event behaviour when focusing", async () => {
		await browser.url(`test/pages/Input.html`);

		// Setup
		const input = await browser.$("#myInput").shadow$("input");
		const focusoutInput = await browser.$("#myInput2").shadow$("input");
		const changeCount = await browser.$("#myInput-change-count");

		// Act
		await input.click();
		await browser.keys("z");
		await focusoutInput.click();

		// // Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is called");

		// Act
		await input.click();
		await focusoutInput.click();

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is not called again");

		// Act
		await input.click();
		await browser.keys("f");
		await browser.pause(1000); // GH Actions
		await focusoutInput.click();

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "2", "The change event is called for the changed value");
	});

	it("Change event behaviour when focusing + ENTER", async () => {
		await browser.url(`test/pages/Input.html`);

		// Setup
		const input = await browser.$("#myInput").shadow$("input");
		const focusoutInput = await browser.$("#input3").shadow$("input");
		const changeCount = await browser.$("#myInput-change-count");

		// Act
		await input.click();
		await browser.keys("a");
		await browser.keys("Enter");
		await focusoutInput.click();

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is called just once");

		// Act
		await input.click();
		await browser.keys("Enter");

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is not called again");

		// Act
		await input.click();
		await browser.keys("f");
		await browser.keys("Enter");

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "2", "The change event is called for the changed value");
	});

	it("fires suggestion-scroll event", async () => {
		const input = await browser.$("#scrollInput").shadow$("input");
		const scrollResult = await browser.$("#scrollResult");

		// act - open suggestions
		await input.click();
		await browser.keys("a");

		// act - scroll with keyboard
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");

		// assert
		const scrollTop = parseInt(await scrollResult.getProperty("value"));
		assert.isAbove(scrollTop, 0, "The suggestion-scroll event fired");

		// assert isSuggestionsScrollable
		const suggestionsScrollable = await browser.executeAsync(async done => {
			const input = document.getElementById("scrollInput");
			done(await input.isSuggestionsScrollable());
		});
		assert.ok(suggestionsScrollable,  "The suggestions popup is scrollable");

		// close suggestions
		await browser.keys("Enter");
	});

	it("tests value removal when Input type is 'Number'", async () => {
		const input = await browser.$("#input-number3");
		const btn = await browser.$("#input-number3-focusout");

		// Press Backspace and focus out the
		await input.click();
		await browser.keys("Backspace");
		await btn.click();

		assert.strictEqual(await input.getProperty("value"), "", "Input's value is removed");
	});


	it("tests removing fractional part of numeric value", async () => {
		const input1 = await browser.$("#input-number31");
		const input2 = await browser.$("#input-number32");
		const input3 = await browser.$("#input-number33");
		const input4 = await browser.$("#input-number34");
		const btn = await browser.$("#input-number3-focusout");

		// Press Backspace as many times as the number of digits after the delimiter
		// 4,333
		await input1.click();
		await browser.keys("Backspace");
		await browser.keys("Backspace");
		await browser.keys("Backspace");
		await btn.click();

		assert.strictEqual(await input1.getProperty("value"), "4", "Removed properly");

		// 4,3
		await input2.click();
		await browser.keys("Backspace");
		await btn.click();

		assert.strictEqual(await input2.getProperty("value"), "4", "Removed properly");

		// ,33
		await input3.click();
		await browser.keys("Backspace");
		await browser.keys("Backspace");
		await btn.click();

		assert.strictEqual(await input3.getProperty("value"), "", "Removed properly");

		// -1,33
		await input4.click();
		await browser.keys("Backspace");
		await browser.keys("Backspace");
		await btn.click();

		assert.strictEqual(await input4.getProperty("value"), "-1", "Removed properly");
	});

	it("tests removing fractional part of numeric value with 'e' notation and minus signs", async () => {
		const input = await browser.$("#input-number35");
		const inputResult = await browser.$("#input-number35_eventValue");

		await input.click();

		// -1.33e-2
		// Press Backspace to remove the "2" character
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "", "Value is empty string");

		// -1.33e-
		// Press Backspace to remove the "-" character
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "", "Value is empty string");

		// -1.33e
		// Press Backspace to remove the "e" character
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "-1.33", "Value is -1.33");

		// -1.33
		// Press Backspace to remove the number "3"
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "-1.3", "Value is -1.3");

		// -1.3
		// Press Backspace to remove the number "3"
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "-1", "Value is -1");

		// -1.
		// Press Backspace to remove the "." character
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "-1", "Value is -1");

		// -1
		// Press Backspace to remove the number "1"
		await browser.keys("Backspace");
		assert.strictEqual(await inputResult.getProperty("value"), "", "Value is empty string");

		// -
		// Press 2 to add the number "2"
		await browser.keys("2");
		assert.strictEqual(await inputResult.getProperty("value"), "-2", "Value is -2");
	});

	it("handles suggestions", async () => {
		await browser.url(`test/pages/Input.html`);

		let item;
		const suggestionsInput = await browser.$("#myInput").shadow$("input");
		const inputResult = await browser.$("#inputResult").shadow$("input");
		const input = await browser.$("#myInput");
		const popover = await input.shadow$("ui5-responsive-popover");

		await suggestionsInput.click();
		await browser.keys("p");

		assert.ok(await popover.getProperty("open"), "suggestions are opened.");

		// This test is passing when the test is executed on browser that is NOT headless

		// item = await browser.$("#myInput").$$("ui5-li")[0];


		// await item.click();

		// assert.ok(!await popover.getProperty("open"), "suggestions are closed");
		// assert.strictEqual(await suggestionsInput.getValue(), "Portugal", "First item has been selected");
		// assert.strictEqual(await inputResult.getValue(), "1", "suggestionItemSelected event called once");

		// await browser.keys("\b");
		// item = await browser.$("#myInput").$$("ui5-li")[0];
		// await item.click();

		// assert.strictEqual(await suggestionsInput.getValue(), "Portugal", "First item has been selected again");
		// assert.strictEqual(await inputResult.getValue(), "2", "suggestionItemSelected event called for second time");
	});

	it("handles suggestions selection cancel with ESC", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInputEsc");

		// act
		await suggestionsInput.click();
		await browser.keys("c");
		await browser.keys("ArrowDown");

		// assert
		assert.strictEqual(await suggestionsInput.getValue(), "Chromium",
			"The value is updated as the item has been previewed.");

		// act
		await browser.keys("Escape");

		// assert
		assert.strictEqual(await suggestionsInput.getProperty("value"), "c",
			"The value is restored as ESC has been pressed.");
	});

	it("Input value should correspond to suggestion item when it is clicked", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput").shadow$("input");

		const input = await browser.$("#myInput");
		const respPopover = await input.shadow$("ui5-responsive-popover");

		// paste a value completely corresponding to item text
		await suggestionsInput.click();
		await suggestionsInput.setValue("China");

		// select the item
		let firstSuggestion = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		await firstSuggestion.click();

		// without performing focus out delete the last character
		await browser.keys("Backspace");

		// select the same item again
		await firstSuggestion.click();

		assert.strictEqual(await suggestionsInput.getValue(), "China", "Input value should correspond to item text.");
	});

	it("input value should be cleared with ESC", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInputEsc").shadow$("input");

		await suggestionsInput.click();
		await browser.keys("Some value");

		// Close sugggestions
		await browser.keys("Escape");
		// Clear value
		await browser.keys("Escape");

		assert.strictEqual(await suggestionsInput.getValue(), "", "The value is restored as ESC has been pressed.");

		await browser.keys(["a", "b", "c"]);
		await browser.keys("Enter");
		await browser.keys(["c", "b", "a"]);

		// Close sugggestions
		await browser.keys("Escape");
		// Clear value
		await browser.keys("Escape");

		assert.strictEqual(await suggestionsInput.getValue(), "abc", "The value is restored to the last confirmed by 'ENTER' press one.");
	});

	it("handles group suggestion item via keyboard", async () => {

		const suggestionsInput = await browser.$("#myInputGrouping").shadow$("input");
		const inputResult = await browser.$("#inputResultGrouping").shadow$("input");

		await suggestionsInput.click();
		await browser.keys("C");
		await browser.keys("ArrowDown");
		await browser.keys("Enter");
		await browser.pause(300);

		assert.strictEqual(await suggestionsInput.getValue(), "C", "Group item is not selected");
		assert.strictEqual(await inputResult.getValue(), "", "suggestionItemSelected event is not called");
	});

	it("should select typeaheaded item on mouse click and remove value text selection", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput").shadow$("input");
		const changeEventResult = await browser.$("#inputResult").shadow$("input");
		const suggestionSelectEventResult = await browser.$("#input-selection-event-test").shadow$("input");

		const input = await browser.$("#myInput");
		const respPopover = await input.shadow$("ui5-responsive-popover");

		await suggestionsInput.click();
		await browser.keys("C");
		await browser.pause(300);

		const firstSuggestion = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		await firstSuggestion.click();

		const valueNotSelected = await browser.execute(() =>{
			const input = document.getElementById("myInput").shadowRoot.querySelector("input");
			return input.selectionEnd - input.selectionStart === 0;
		});

		assert.strictEqual(await changeEventResult.getValue(), "1", "Change is fired once");
		assert.strictEqual(await suggestionSelectEventResult.getValue(), "1", "suggestion-item-select is fired once");
		assert.strictEqual(await valueNotSelected, true, "Value is no longer type aheaded (autocompleted)");
	});

	it("should select typeaheaded item on mouse click and remove value text selection", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput").shadow$("input");
		const changeEventResult = await browser.$("#inputResult").shadow$("input");
		const suggestionSelectEventResult = await browser.$("#input-selection-event-test").shadow$("input");

		const input = await browser.$("#myInput");
		const respPopover = await input.shadow$("ui5-responsive-popover");

		await suggestionsInput.click();
		await browser.keys("C");
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");

		const secondSuggestion = await respPopover.$("ui5-list").$$("ui5-li-suggestion-item")[1];
		await secondSuggestion.click();

		const valueNotSelected = await browser.execute(() =>{
			const input = document.getElementById("myInput").shadowRoot.querySelector("input");
			return input.selectionEnd - input.selectionStart === 0;
		});

		assert.strictEqual(await suggestionsInput.getValue(), "Cuba", "Item is selected");
		assert.strictEqual(await changeEventResult.getValue(), "1", "Change is fired once");
		assert.strictEqual(await suggestionSelectEventResult.getValue(), "1", "suggestion-item-select is fired once");
		assert.strictEqual(await valueNotSelected, true, "Value is no longer type aheaded (autocompleted)");
	});

	it("should remove input's focus when group header item is clicked", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#myInputGrouping");
		const respPopover = await input.shadow$("ui5-responsive-popover");
		const groupHeader = await respPopover.$("ui5-list").$("ui5-li-groupHeader");

		await input.click();
		await browser.keys("C");
		await groupHeader.click();

		assert.strictEqual(await groupHeader.getProperty("focused"), false, "Group header is not focused");
		assert.strictEqual(await input.getProperty("focused"), true, "Input is focused");

	});

	it("checks if the suggestions popover width is minimum the size of the input", async () => {
		const input = await browser.$("#myInputGrouping");
		const listItem = await input.shadow$("ui5-responsive-popover").$("ui5-li-suggestion-item");

		await input.click();
		await browser.keys("a");

		assert.strictEqual(await input.getSize('width'), await listItem.getSize('width'), "Suggestions' popover width is minimum the size of the input");
	});

	it("checks if suggestions popover width is maximum 40rem if input isn't wider", async () => {
		const input = await browser.$("#long-sugg");
		const listItem = await input.shadow$("ui5-responsive-popover").$("ui5-li-suggestion-item");

		await input.click();
		await browser.keys("a");

		assert.strictEqual(await listItem.getSize('width'), 640, "Suggestions popover's width is maximum 40rem if the input isn't wider than that");
	});

	it("Input's maxlength property is set correctly", async () => {
		const input5 = await browser.$("#input-tel");
		const inputShadowRef = await browser.$("#input-tel").shadow$("input");

		await inputShadowRef.click();

		for (let i = 0; i <15 ; i++) {
			await browser.keys("c");
		}

		assert.strictEqual((await inputShadowRef.getProperty("value")).length, 10, "Input's value should not exceed 10 characters.");
		assert.ok(await input5.getProperty("maxlength"), "Input's maxlength property should be applied.");
		assert.strictEqual(await inputShadowRef.getAttribute("maxlength"), "10", "Input's maxlength attribute should be applied.");
	});

	it("Checks if valueStateMessage is shown", async () => {
		const inputShadowRef = await browser.$("#inputError").shadow$("input");
		const input = await browser.$("#inputError");
		const popover = await input.shadow$("ui5-popover");
		const respPopover = await input.shadow$("ui5-responsive-popover").$(".ui5-responsive-popover-header");

		await inputShadowRef.click();

		assert.ok(await popover.getProperty("open"), "Popover with valueStateMessage should be opened.");

		await browser.keys("a");

		assert.ok(respPopover, "Responsive popover with valueStateMessage should be opened.");

		// Close popover
		await browser.keys("Escape");
	});

	it("Checks if valueStateMessage gets updated dynamically", async () => {
		const btn = await browser.$("#dynamic-value-state-trigger");
		const input = await browser.$("#dynamic-value-state").shadow$("input");

		await input.scrollIntoView();
		await btn.click();
		await browser.pause(2000);
		await input.click();

		const inputElement = await browser.$("#dynamic-value-state");
		const valueStatePopover = await inputElement.shadow$("ui5-popover");
		const initialContent = await valueStatePopover.$("[slot='valueStateMessage']").getHTML();

		await browser.pause(2000);

		const changedContent = await valueStatePopover.$("[slot='valueStateMessage']").getHTML();

		assert.notEqual(initialContent, changedContent, "Content of the slot should be cloned when changed");

		// Close popover
		await browser.keys("Escape");
		await browser.keys("Tab");
	});

	it("Checks if aria-describedby is renderd if not neccessary", async () => {
		const input = await browser.$("#input-max-length"); // Input with no show-suggestions attribute
		const innerInput = await input.shadow$("input");

		assert.notOk(await innerInput.getAttribute("aria-describedby"), "aria-describedby is not rendered");
	});

	it("Checks if aria-label is reflected in the shadow DOM", async () => {
		const input = await browser.$("#aria-label-input");
		const innerInput = await input.shadow$("input");
		const NEW_TEXT = "New cool text";

		assert.strictEqual(await input.getAttribute("accessible-name"), await innerInput.getAttribute("aria-label"), "aria-label is reflected in the shadow DOM")

		await input.setAttribute("accessible-name", NEW_TEXT);

		assert.strictEqual(await innerInput.getAttribute("aria-label"), NEW_TEXT, "aria-label is reflected in the shadow DOM")
	});

	it("Checks if aria-invalid is set correctly", async () => {
		const inputError = await browser.$("#inputError");
		const inputWarning = await browser.$("#input1");
		const innerInputError = await inputError.shadow$("input");
		const innerInputWarning = await inputWarning.shadow$("input");

		assert.notOk(await innerInputWarning.getAttribute("aria-invalid"), "aria-invalid is not rendered");
		assert.strictEqual(await innerInputError.getAttribute("aria-invalid"), "true", "aria-invalid is set to true");
	});

	it("Should render aria-haspopup attribute with value 'dialog'", async () => {
		const input = await browser.$("#myInput");
		const innerInput = await input.shadow$("input");

		assert.strictEqual(await innerInput.getAttribute("aria-haspopup"), "dialog", "Should render aria-haspopup attribute with value 'dialog'");
	});

	it("Value state type should be added to the screen readers default value states announcement", async () => {
		const inputError = await browser.$("#vs-error-default");
		const inputWarning = await browser.$("#vs-warning-default");
		const inputSuccess = await browser.$("#vs-success-default");
		const inputInformation = await browser.$("#vs-information-default");

		let popover = await inputError.shadow$("ui5-popover");

		await inputError.click();

		let ariaHiddenText = await inputError.shadow$(".ui5-hidden-text").getText();
		let valueStateText = await popover.$("div").getText();

		assert.strictEqual(ariaHiddenText, "Value State Error Invalid entry", "Hidden screen reader text is correct");
		assert.strictEqual(valueStateText, "Invalid entry", "Displayed value state message text is correct");

		await inputWarning.click();

		popover = await inputWarning.shadow$("ui5-popover");

		ariaHiddenText = await inputWarning.shadow$(".ui5-hidden-text").getText();
		valueStateText = await popover.$("div").getText();

		assert.strictEqual(ariaHiddenText, "Value State Warning Warning issued", "Hidden screen reader text is correct");
		assert.strictEqual(valueStateText, "Warning issued", "Displayed value state message text is correct");

		await inputInformation.click();

		popover = await inputInformation.shadow$("ui5-popover");

		ariaHiddenText = await inputInformation.shadow$(".ui5-hidden-text").getText();
		valueStateText = await popover.$("div").getText();

		assert.strictEqual(ariaHiddenText, "Value State Information Informative entry", "Hidden screen reader text is correct");
		assert.strictEqual(valueStateText, "Informative entry", "Displayed value state message text is correct");

		await inputSuccess.click();
		assert.strictEqual(await inputSuccess.shadow$(".ui5-hidden-text").getText(), "Value State Success", "Hidden screen reader text is correct");
	});

	it("Value state type should be added to the screen readers custom value states announcement", async () => {
		const inputError = await browser.$("#inputError");

		inputError.click();
		browser.keys("a");

		const popoverHeader = await inputError.shadow$("ui5-popover").$(".ui5-valuestatemessage-header");
		const valueStateText = await popoverHeader.$("div").getText();
		const _id = await inputError.getProperty("_id");
		const ariaHiddenText = await inputError.shadow$(`#${_id}-valueStateDesc`).getText();

		assert.strictEqual(ariaHiddenText.includes("Value State Error"), true, "Hidden screen reader text is correct");
		assert.strictEqual(valueStateText.includes("Custom error value state message"), true, "Displayed value state message text is correct");
	});

	it("Tests autocomplete(type-ahead)", async () => {
		let hasSelection;

		const input = await browser.$("#myInputHighlighted").shadow$("input");
		const EXPTECTED_VALUE = "Adam D";

		await input.click();
		await browser.keys("a");

		hasSelection = await browser.execute(() =>{
			const input = document.getElementById("myInputHighlighted").shadowRoot.querySelector("input");
			return input.selectionEnd - input.selectionStart > 0;
		});


		assert.strictEqual(await input.getProperty("value"), EXPTECTED_VALUE, "Value is autocompleted");
		assert.strictEqual(hasSelection, true, "Autocompleted text is selected");
	});

	it("Tests disabled autocomplete(type-ahead)", async () => {
		const input = await browser.$("#input-disabled-autocomplete").shadow$("input");

		await input.click();
		await browser.keys("c");

		assert.strictEqual(await input.getProperty("value"), "c", "Value is not autocompleted");
	});

	it("Doesn't remove value on number type input even if locale specific delimiter/multiple delimiters", async () => {
		const input = await browser.$("#input-number2");

		await input.click();
		await browser.keys("1");
		await browser.keys(".");
		await browser.keys("2");
		await browser.keys("2");
		await browser.keys(".");
		await browser.keys("3");
		await browser.keys("3");
		await browser.keys("Tab");

		assert.strictEqual(parseFloat(await input.getProperty("value")).toPrecision(3), "1.22", "Value is not lost");
	});

	it("fires suggestion-item-preview", async () => {
		await browser.url(`test/pages/Input_quickview.html`);

		const inputItemPreview = await browser.$("#inputPreview2").shadow$("input");
		const suggestionItemPreviewRes = await browser.$("#suggestionItemPreviewRes");
		const EXPECTED_PREVIEW_ITEM_TEXT = "Laptop Lenovo";

		// act
		await inputItemPreview.click();
		await browser.keys("c");

		await browser.keys("ArrowDown");

		// assert
		const inputElement = await browser.$("#inputPreview2")
		const inputPopover = await inputElement.shadow$("ui5-responsive-popover");
		const helpPopover = await browser.$("#quickViewCard2");

		assert.strictEqual(await suggestionItemPreviewRes.getValue(), EXPECTED_PREVIEW_ITEM_TEXT, "First item has been previewed");
		assert.ok(await helpPopover.isDisplayedInViewport(), "The help popover is open.");
		assert.ok(await inputPopover.isDisplayedInViewport(), "The input popover is open.");

		// act
		const inputInHelpPopover = await browser.$("#searchInput2").shadow$("input");
		await inputInHelpPopover.click();

		// assert
		assert.notOk(await inputPopover.isDisplayedInViewport(), "The inpuit popover is closed as it lost the focus.");
		assert.ok(await helpPopover.isDisplayedInViewport(), "The help popover remains open as the focus is within.");
	});

	it("Should open suggestions popover when ui5-input is the first focusable element within a dialog", async () => {
		await browser.url(`test/pages/Input.html`);
		const input = await browser.$("#inputInDialog");
		const button = await browser.$("#btnOpenDialog");

		//act
		await button.click();

		const popover = await input.shadow$("ui5-responsive-popover");
		const dialog = await browser.$("#inputInDialog");

		await browser.keys("c");

		//assert
		assert.ok(await popover.isDisplayedInViewport(), "The popover is visible");

		// act
		await browser.keys("ArrowDown");
		await browser.keys("Escape");

		// assert
		assert.notOk(await popover.isDisplayedInViewport(), "The popover is not visible");
		assert.ok(await dialog.isDisplayedInViewport(), "The dialog is opened.");
	});

	it("Suggestions count should be read out when necessary", async () => {
		await browser.url(`test/pages/Input.html`);

		const inputDynamicSuggestions = await browser.$("#inputCompact");
		const inputSuggestions = await browser.$("#myInput2");
		const dynamicSuggestionsInnerInput = await inputDynamicSuggestions.shadow$("input");
		const dynamicSuggestionsCount = await inputDynamicSuggestions.shadow$(`#${await inputDynamicSuggestions.getProperty("_id")}-suggestionsCount`);
		const suggestionsCount = await inputSuggestions.shadow$(`#${await inputSuggestions.getProperty("_id")}-suggestionsCount`);

		//act
		await inputDynamicSuggestions.click();

		//assert
		assert.strictEqual(await dynamicSuggestionsCount.getText(), "", "Suggestions count is not available");

		//act
		await browser.keys("c");

		//assert
		assert.strictEqual(await dynamicSuggestionsCount.getText(), "3 results are available", "Group items should be excluded of the count of available results.");
		await browser.keys("Backspace");

		// Close suggestions to not intercept the click in the input below for the last test
		await browser.keys("Escape");

		//act
		await inputSuggestions.click();
		await (await inputSuggestions.shadow$("input")).keys("c");

		//assert
		assert.strictEqual(await suggestionsCount.getText(), "5 results are available", "Suggestions count is available since the suggestions popover is opened");
	});

	it("Suggestions announcement", async () => {
		await browser.url(`test/pages/Input.html`);

		const inputWithGroups = await browser.$("#inputCompact");
		const inputSuggestions = await browser.$("#myInput2");
		const inputWithGroupsInnerInput = await inputWithGroups.shadow$("input");
		const inputWithGroupsAnnouncement = await inputWithGroups.shadow$(`#${await inputWithGroups.getProperty("_id")}-selectionText`);
		const suggestionsAnnouncement = await inputSuggestions.shadow$(`#${await inputSuggestions.getProperty("_id")}-selectionText`);

		//act
		await inputWithGroups.click();

		//assert
		assert.strictEqual(await inputWithGroupsAnnouncement.getText(), "", "Suggestions announcement is not available on initially");

		//act
		await browser.keys("a");
		await browser.keys("ArrowDown");

		//assert
		assert.strictEqual(await inputWithGroupsAnnouncement.getText(), "Group Header A", "Group item announcement should not contain the position and total coout.");

		//act
		await browser.keys("ArrowDown");

		const announcementText = await inputWithGroupsAnnouncement.getText();

		//assert
		assert.ok(announcementText.includes("List item 1 of 12"), "The total count announcement and position of items should exclude group items.");
		assert.strictEqual(await inputWithGroupsAnnouncement.getText(), "travel the world explore List item 1 of 12", "The additional text and description are announced");
		await browser.keys("Backspace");

		// Close suggestions to not intercept the click in the input below for the last test
		await browser.keys("Escape");

		//act
		await inputSuggestions.click();
		await (await inputSuggestions.shadow$("input")).keys("c");
		await browser.keys("ArrowDown");

		//assert
		assert.strictEqual(await suggestionsAnnouncement.getText(), "List item 1 of 5", "Item position and count is announced correctly");
	});

	it("Should close the Popover when no suggestions are available", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#myInput");
		const innerInput = await input.shadow$("input");

		await browser.keys("A");
		await browser.keys("Space");

		assert.notOk(await input.getProperty("open"), "Input's Suggestion Popover should not be open");
	});

	it("Should not open value state message when input is in readonly state", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#readonly-value-state-input");
		const popover = await input.shadow$("ui5-popover");

		await input.click();

		assert.notOk(await popover.getProperty("open"), "Popover with valueStateMessage should not be opened.");
	});

	it("Displays clear icon when typing and pressing it clears the value", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#clear-input");
		const innerInput = await input.shadow$("input");
		const changeCounter = await browser.$("#clear-input-change-event-count");
		const inputCounter = await browser.$("#clear-input-input-event-count");

		assert.notOk(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should not be shown");

		// type
		await innerInput.click();
		await browser.keys("a");

		assert.ok(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should be shown");
		assert.strictEqual(await changeCounter.getText(), "0", "Change event not called yet");
		assert.strictEqual(await inputCounter.getText(), "1", "Input event called when typing");

		const clearIcon = await input.shadow$(".ui5-input-clear-icon-wrapper");

		// press clear icon
		await clearIcon.click();

		assert.strictEqual(await input.getProperty("value"), "", "Clear icon clear the value");
		assert.notOk(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should not be shown");
		assert.strictEqual(await changeCounter.getText(), "0", "Change event should not be called on clearIcon click");
		assert.strictEqual(await inputCounter.getText(), "2", "Input event called when typing or clear action is done");
	});

	it("Change event is called when value of input is cleared with clear icon and input is focused out", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#clear-input");
		const innerInput = await input.shadow$("input");
		const changeCounter = await browser.$("#clear-input-change-event-count");
		const inputCounter = await browser.$("#clear-input-input-event-count");

		// type
		await innerInput.click();
		await browser.keys("a");
		await changeCounter.click();

		const clearIcon = await input.shadow$(".ui5-input-clear-icon-wrapper");

		// press clear icon
		await clearIcon.click();

		assert.strictEqual(await changeCounter.getText(), "1", "Change event called once (typing)");
		assert.strictEqual(await inputCounter.getText(), "2", "Input event called when value is cleared by clear icon");
	});

	it("Change event calling after clear icon is pressed", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#clear-input");
		const innerInput = await input.shadow$("input");
		const changeCounter = await browser.$("#clear-input-change-event-count");
		const inputCounter = await browser.$("#clear-input-input-event-count");

		// type
		await innerInput.click();
		await browser.keys("a");
		await changeCounter.click();

		const clearIcon = await input.shadow$(".ui5-input-clear-icon-wrapper");

		// press clear icon
		await clearIcon.click();
		await changeCounter.click();

		assert.strictEqual(await changeCounter.getText(), "2", "Change event called second time");
		assert.strictEqual(await inputCounter.getText(), "2", "Input event called when value is cleared by clear icon");

		await innerInput.click();
		await browser.keys("a");
		await changeCounter.click();
		await clearIcon.click();
		await browser.keys("a");
		await changeCounter.click();


		assert.strictEqual(await changeCounter.getText(), "3", "Change event called three times");
		assert.strictEqual(await inputCounter.getText(), "5", "Input event called when value is cleared by clear icon or typed in");
	});

	it("Setting readonly or disabled hides clear icon", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#clear-input-compact");
		const readonly = await browser.$("#clear-icon-readonly-toggle");
		const disable = await browser.$("#clear-icon-disabled-toggle");

		await readonly.click();
		assert.notOk(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should be not be shown when readonly");

		await readonly.click();
		assert.ok(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should be shown");

		await disable.click();
		assert.notOk(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should be not be shown when disabled");

		await disable.click();
		assert.ok(await input.getProperty("_effectiveShowClearIcon"), "Clear icon should be shown");
	});

	it("Should open suggestions popover if openPicker() is called on focusin", async () => {
		const input = await browser.$("#openPickerInput");
		const popover = await input.shadow$("ui5-responsive-popover");

		await input.click();

		assert.ok(await popover.isDisplayedInViewport(), "The popover is visible");
	});

	it("Private property for input value should be in sync, when value gets updated programatically - #5635", async () => {
		const inputChange = await browser.$("#input-change-1").shadow$("input");
		const clearButton = await browser.$("#clear-button");
		const changeCount = await browser.$("#input-change-count-1");

		await inputChange.click();
		await browser.keys("1");
		await browser.keys("2");
		await browser.keys("Enter");

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is called");

		// clear the input
		await clearButton.click();

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is not called again, since the value is changed programatically");

		// Type the same value once again.
		await inputChange.click();
		await browser.keys("1");
		await browser.keys("2");
		await browser.keys("Enter");

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "2", "The change event is called now, since the value is updated");
	});

	it("Change event should be fired only once, when a user types a value identical to a item and presses ENTER - #3732", async () => {
		const inputChange = await browser.$("#input-change-2").shadow$("input");
		const changeCount = await browser.$("#input-change-count-2");

		await inputChange.click();
		await browser.keys("s");
		await browser.keys("o");
		await browser.keys("f");
		await browser.keys("Enter");

		// Assert
		assert.strictEqual(await changeCount.getHTML(false), "1", "The change event is called only once");
	});

	it("Value should be updated correctly, when using DEL - #4340", async () => {
		const inputChange = await browser.$("#input-change-3").shadow$("input");
		const changeValue = await browser.$("#input-change-value-3");

		await inputChange.click();

		// go to previous element
		await browser.keys(["Shift", "Tab"]);

		// go to input
		await browser.keys("Tab");

		// delete value
		await browser.keys("Delete");

		// focus out
		await browser.keys("Tab");

		// Assert
		assert.strictEqual(await changeValue.getHTML(false), "", "The change event should pass a correct value");
	});

	it("Changes text if cleared in change event handler", async () => {
		const input = await browser.$("#change-event-value");
		const inner = await input.shadow$("input");

		await input.scrollIntoView();

		await browser.executeAsync((done) =>{
			return done(document.getElementById("change-event-value").openPicker());
		});

		const listItem = await input.shadow$("ui5-responsive-popover").$("ui5-li-suggestion-item");

		await listItem.click();

		assert.strictEqual(await input.getValue(), "", "Input's value should be empty");
		assert.strictEqual(await inner.getValue(), "", "Inner input's value should be empty");
	});
});

describe("Input arrow navigation", () => {

	it("handles suggestions via keyboard, should not fire suggestionItemSelect on inactive item", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput2").shadow$("input");
		const inputResult = await browser.$("#inputResult").shadow$("input");

		await suggestionsInput.click();
		await browser.keys("c");
		await browser.keys("ArrowDown");
		await browser.keys("Enter");

		assert.strictEqual(await suggestionsInput.getValue(), "Cozy", "First item has been selected");
		assert.strictEqual(await inputResult.getValue(), "1", "suggestionItemSelected event called once");

		await browser.keys("Backspace"); // to open the suggestions pop up once again
		await browser.keys("ArrowUp");

		assert.strictEqual(await suggestionsInput.getValue(), "Coz",
			"The input is still focused");

		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");
		await browser.keys("Enter");

		assert.strictEqual(await suggestionsInput.getValue(), "Coz", "Inactive item text is not applied as input's value");
		assert.strictEqual(await inputResult.getValue(), "1", "suggestionItemSelect is not fired as item is 'Inactive'");
	});

	it("Should navigate up and down through the suggestions popover with arrow keys", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput2");

		await suggestionsInput.click();
		await browser.keys("c");
		await browser.keys("ArrowDown");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");

		assert.strictEqual(await suggestionsInput.getValue(), "Cozy", "First item has been selected");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), true, "First list item is focused");

		await browser.keys("ArrowDown");
		const secondListItem = await respPopover.$("ui5-list").$$("ui5-li-suggestion-item")[1];

		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await secondListItem.getProperty("focused"), true, "Second list item is focused");

		await browser.keys("ArrowUp");

		assert.strictEqual(await firstListItem.getProperty("focused"), true, "First list item is focused");
		assert.strictEqual(await secondListItem.getProperty("focused"), false, "Second list item is not focused");

		await browser.keys("ArrowUp");

		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
	});

	it("Value state header and group headers should be included in the arrow navigation", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#inputError");

		await suggestionsInput.click();
		await browser.keys("a");
		await browser.keys("ArrowDown");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const valueStateHeader = await respPopover.$(".ui5-responsive-popover-header.ui5-valuestatemessage-root");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		const groupHeader = await respPopover.$("ui5-list").$("ui5-li-groupHeader");

		assert.strictEqual(await suggestionsInput.getValue(), "a", "Input's value should be the typed-in value");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), false, "Group header is not focused");
		assert.strictEqual(await suggestionsInput.getProperty("_isValueStateFocused"), true, "Value State should not be focused");
		assert.notEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is focused");

		await browser.keys("ArrowDown");

		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), true, "Group header is focused");
		assert.strictEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is not focused");

		await browser.keys("ArrowDown");

		assert.strictEqual(await suggestionsInput.getValue(), "Afghanistan", "Input's value should be the text of the selected item");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), true, "First list item is focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), false, "Group header is no longer focused");
		assert.strictEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is not focused");

		await browser.keys("ArrowUp");

		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), true, "Group header is focused");
		assert.strictEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is not focused");


		await browser.keys("ArrowUp");

		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), false, "Group header is not focused");
		assert.strictEqual(await suggestionsInput.getProperty("_isValueStateFocused"), true, "Value State should not be focused");
		assert.notEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is focused");

		await browser.keys("ArrowUp");

		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), false, "Group header is not focused");
		assert.strictEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is not focused");
	});
});

describe("Input HOME navigation", () => {
	it("Should move caret to beginning of input with HOME if focus is on Input", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput2");

		await suggestionsInput.click();
		await browser.keys("c");

		await browser.keys("Home");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		const caretPosition = await browser.execute(() =>{
			return document.getElementById("myInput2").getCaretPosition();
		});

		assert.strictEqual(caretPosition, 0, "Caret has been moved to beginning of Input");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
	});

	it("Should focus the first item from the suggestions popover with HOME", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput2");

		await suggestionsInput.click();
		await browser.keys("c");

		// Moving focus to suggestions popover, because by design HOME only moves the caret if focus is on input
		await browser.keys("ArrowDown");

		await browser.keys("Home");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");

		assert.strictEqual(await suggestionsInput.getValue(), "Cozy", "First item has been selected");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), true, "First list item is focused");
	});

	it("Should focus the value state header from the suggestions popover with HOME", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#inputError");

		await suggestionsInput.click();
		await browser.keys("a");

		// Moving focus to suggestions popover, because by design HOME only moves the caret if focus is on input
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");

		await browser.keys("Home");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const valueStateHeader = await respPopover.$(".ui5-responsive-popover-header.ui5-valuestatemessage-root");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		const groupHeader = await respPopover.$("ui5-list").$("ui5-li-groupHeader");

		assert.strictEqual(await suggestionsInput.getValue(), "a", "Input's value should be the typed-in value");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), false, "Group header is not focused");
		assert.strictEqual(await suggestionsInput.getProperty("_isValueStateFocused"), true, "Value State should not be focused");
		assert.notEqual(await valueStateHeader.getAttribute("focused"), null, "Value state header is focused");
	});

	it("Should focus the group header from the suggestions popover with HOME", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput");

		await suggestionsInput.click();
		await browser.keys("a");

		// Moving focus to suggestions popover, because by design HOME only moves the caret if focus is on input
		await browser.keys("ArrowDown");
		await browser.keys("ArrowDown");

		await browser.keys("Home");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		const groupHeader = await respPopover.$("ui5-list").$("ui5-li-groupHeader");

		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), true, "Group header is focused");

	});
});

describe("Input END navigation", () => {
	it("Should move caret to end of input with END if focus is on Input", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput2");

		await suggestionsInput.click();
		await browser.keys("c");

		await browser.keys("ArrowLeft");
		await browser.keys("End");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		const caretPosition = await browser.execute(() =>{
			return document.getElementById("myInput2").getCaretPosition();
		});

		assert.strictEqual(caretPosition, 4, "Caret has been moved to end of Input");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "First list item is not focused");
	});

	it("Should focus the last item from the suggestions popover with END", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#inputCompact");

		await suggestionsInput.click();
		await browser.keys("c");

		// Moving focus to suggestions popover, because by design END only moves the caret if focus is on input
		await browser.keys("ArrowDown");

		await browser.keys("End");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item:last-child");

		assert.strictEqual(await suggestionsInput.getValue(), "Chili", "Last item has been selected");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), true, "Last list item is focused");
	});
});

describe("Input PAGEUP/PAGEDOWN navigation", () => {
	it("PAGEUP and PAGEDOWN should do nothing if focus is on Input", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput2");

		await suggestionsInput.click();
		await browser.keys("c");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const firstListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item");
		let caretPosition = await browser.execute(() =>{
			return document.getElementById("myInput2").getCaretPosition();
		});

		assert.strictEqual(caretPosition, 4, "Caret is at end of Input");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "Responsive popover is open and first list item is not focused");

		await browser.keys("PageUp");

		caretPosition = await browser.execute(() =>{
			return document.getElementById("myInput2").getCaretPosition();
		});

		assert.strictEqual(caretPosition, 4, "Caret is still at end of Input");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "Responsive popover remains open and first list item is not focused");

		await browser.keys("PageDown");

		caretPosition = await browser.execute(() =>{
			return document.getElementById("myInput2").getCaretPosition();
		});

		assert.strictEqual(caretPosition, 4, "Caret is still at end of Input");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), true, "Input is focused");
		assert.strictEqual(await firstListItem.getProperty("focused"), false, "Responsive popover remains open and first list item is not focused");

	});

	it("Should focus the tenth item from the suggestions popover with PAGEDOWN", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput");

		await suggestionsInput.click();
		await browser.keys("a");

		// Moving focus to suggestions popover, because by design PAGEDOWN does nothing if focus is on input
		await browser.keys("ArrowDown");

		await browser.keys("PageDown");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const tenthListItem = await respPopover.$("ui5-list").$("ui5-li-suggestion-item:nth-child(11)");

		assert.strictEqual(await suggestionsInput.getValue(), "Azerbaijan", "Tenth item has been selected");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await tenthListItem.getProperty("focused"), true, "Tenth list item is focused");
	});

	it("Should focus the -10 item/group header from the suggestions popover with PAGEUP", async () => {
		await browser.url(`test/pages/Input.html`);

		const suggestionsInput = await browser.$("#myInput");
		await suggestionsInput.scrollIntoView();

		await suggestionsInput.click();
		await browser.keys("a");

		// Moving focus to suggestions popover, because by design PAGEUP does nothing if focus is on input
		await browser.keys("ArrowDown");

		await browser.keys("PageDown");
		await browser.keys("PageUp");

		const respPopover = await suggestionsInput.shadow$("ui5-responsive-popover");
		const groupHeader = await respPopover.$("ui5-list").$("ui5-li-groupheader");

		assert.strictEqual(await suggestionsInput.getValue(), "a", "No item has been selected");
		assert.strictEqual(await suggestionsInput.getProperty("focused"), false, "Input is not focused");
		assert.strictEqual(await groupHeader.getProperty("focused"), true, "Group header is focused");
	});
});

describe("XSS tests for suggestions", () => {
	it("add suggestion item with XSS", async () => {
		await browser.url(`test/pages/Input.html`);

		const btn = await browser.$("#xss-btn");
		const span = await browser.$("#xss-result");

		await btn.click();

		assert.strictEqual(await span.getText(), "NO XSS", "No XSS issues found")
	});

	it("tests dangerous items highlighting", async () => {
		await browser.url(`test/pages/Input.html`);

		const input = await browser.$("#xss-input");

		await browser.keys("a");

		const listItems = await input.shadow$("ui5-responsive-popover").$$("ui5-li-suggestion-item");
		const expected = [
			"",
			"<b></b>",
			"3412test1234",
			"[[[b]]]",
			"&amp;",
		];

		await Promise.all(listItems.map(async (item, index) => {
			assert.strictEqual(await item.getProperty("innerText"), expected[index], "Items text should be escaped");
		}));
	});
});

describe("Prevent suggestion-item-select event", () => {
    let input;
    let SUGGESTION_TEXT;
    const INPUT_ID_SELECTOR = "#input-prevent-suggestion-select";

    beforeEach(async () => {
        await browser.url(`test/pages/Input.html`);

        input = await browser.$(INPUT_ID_SELECTOR);
    });

    it("User can prevent suggested-item-select on desired item", async () => {
        SUGGESTION_TEXT = "Cozy";

        await input.click();
        await browser.keys(SUGGESTION_TEXT.at(0));

        const respPopover = await input.shadow$("ui5-responsive-popover");

        // Select first suggestion item that has event prevent
        const firstSuggestion = await respPopover
            .$("ui5-list")
            .$("ui5-li-suggestion-item");
        await firstSuggestion.click();

        assert.strictEqual(
            await input.getProperty("value"),
            "test test",
            "Prevent suggestion-item-select event does not work"
        );
    });

    it("Suggestion selection works as usual for items that do not match event prevent criterias defined by user", async () => {
        SUGGESTION_TEXT = "Compact";

        await input.click();
        await browser.keys(SUGGESTION_TEXT.at(0));

        const respPopover = await input.shadow$("ui5-responsive-popover");

        const secondSuggestion = await respPopover
            .$("ui5-list")
            .$$("ui5-li-suggestion-item")[1];
        await secondSuggestion.click();

        assert.strictEqual(
            await input.getProperty("value"),
            SUGGESTION_TEXT,
            "Event suggestion-item-select works as expected for items without event prevention"
        );
    });
});

describe("Lazy loading", () => {
	beforeEach(async () => {
		await browser.url(`test/pages/InputsLazyLoading.html`);
	});

	it("Lazy loading opens the picker once items are populated", async () => {
		const input = await browser.$("#field");
		const inner = await input.shadow$("input");
		const respPopover = await input.shadow$("ui5-responsive-popover");

		await inner.click();
		await browser.keys("a");

		await browser.waitUntil(() => respPopover.getProperty("open"), {
			timeout: 3000,
			timeoutMsg: "Popover should be displayed"
		});
	});

	it("Does not reopeon picker on focus in", async () => {
		const input = await browser.$("#field");
		const inner = await input.shadow$("input");
		const respPopover = await input.shadow$("ui5-responsive-popover");

		await inner.click();
		await browser.keys("a");

		// go to next focusable
		await browser.keys(["Shift", "Tab"]);

		// go to previous
		await browser.keys("Tab");

		await browser.pause(3000);

		assert.notOk(await respPopover.getProperty("open"), "Picker should not be open");
	});

	it("Should not close picker when items are updated", async () => {
		const input = await browser.$("#field1");
		const inner = await input.shadow$("input");
		const respPopover = await input.shadow$("ui5-responsive-popover");

		await inner.click();
		await browser.keys("S");

		await browser.waitUntil(() => respPopover.getProperty("open"), {
			timeout: 2000,
			timeoutMsg: "Popover should be displayed"
		});

		await browser.keys("b");

		assert.strictEqual(await respPopover.getProperty("open"), true, "Picker should not be open");
	});
});