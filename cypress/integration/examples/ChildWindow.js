/// <reference types="Cypress"/>
/// <reference types="cypress - iframe"/>
import "cypress-iframe";
describe("Child Value", () => {
	it("Get Attribute Value", () => {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		cy.get("#opentab").then((e1) => {
			const url = e1.prop("href");
			cy.visit(url); // this url should be from same domain
		});
	});
	it("handle child frame", () => {
		// npm i -D cypress-iframe
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

		cy.frameLoaded("#courses-iframe");
		cy.iframe().find("a[href*='mentorship']").eq(0).click();
		cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
	});
});
