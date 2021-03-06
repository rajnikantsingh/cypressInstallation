/// <reference types="Cypress"/>
describe("Doing AUtomation Practice", () => {
	it("Trying Checkboxes", () => {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		cy.get("#checkBoxOption1")
			.check()
			.should("be.checked")
			.and("have.value", "option1");
		cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
		cy.get('input[type="checkbox"]')
			.check(["option2", "option1"])
			.should("be.checked");
	});
	it("Lets try the Static dropdown", () => {
		cy.get("select").select("option2").should("have.value", "option2");
	});
	it("Lets try the Dynamic dropdown", () => {
		cy.get("#autocomplete").type("ind");
		cy.get(".ui-menu-item div").each((element) => {
			if (element.text() === "India") {
				element.click();
			}
		});
		cy.get("#autocomplete").should("have.value", "India");
	});
	it("Check visiblity of element", () => {
		cy.get("#displayed-text").should("be.visible");
		cy.get("#hide-textbox").click();
		cy.get("#displayed-text").should("not.be.visible");
		cy.get("#show-textbox").click();

		cy.get("#displayed-text").should("be.visible");
	});
	it("Select Radio Button", () => {
		cy.get('input[value="radio2"]').check().should("be.checked");
	});
});
