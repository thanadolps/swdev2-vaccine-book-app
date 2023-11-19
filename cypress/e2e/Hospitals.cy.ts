describe("Page", () => {
  it("Play and pause video", () => {
    cy.visit("localhost:3000");
    cy.get("video").its("0.paused").should("equal", false);
    cy.wait(5000);
    cy.get("button#videoBtn").click();
    cy.get("video").its("0.paused").should("equal", true);
  });

  it("Navigate to /hospital page", () => {
    cy.visit("localhost:3000");
    cy.contains("🏥").click();
    cy.url().should("include", "/hospital");
    cy.get("img").should("have.length.gte", 3);
  });
});
