describe("App", () => {
  it("should be able to calculate a transition anticipation", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[name=amount]").type("15000");
    cy.get("input[name=installments]").type("3");
    cy.get("input[name=mdr]").type("4");

    cy.get("form").submit();

    cy.contains("13267");
    cy.contains("13536");
    cy.contains("13824");
    cy.contains("14400");
  });
});
