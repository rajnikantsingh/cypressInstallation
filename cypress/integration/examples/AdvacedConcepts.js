/// <reference types="Cypress"/>
describe("Testing Advanced Concepts", () => {
	it("Try Alerting", () => {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		cy.get("#name").type("Rajni");
		cy.get("#alertbtn").click();
		cy.on("window:alert", (str) => {
			expect(str).to.eql(
				"Hello Rajni, share this practice page and share your knowledge",
			);
		});
		cy.get("#confirmbtn").click(); // Cypress Auto Accepts pop ups and logs in Cypress Notes

		cy.on("window:confirm", (str) => {
			expect(str).to.eql("Hello , Are you sure you want to confirm?");
		});
	});
	it("Try to open tab in new window", () => {
		// Cypress cant deal with new tab. BUt we can remove target from DOM so that it opens in same tab
		cy.get("#opentab").invoke("removeAttr", "target").click();
	});
});
