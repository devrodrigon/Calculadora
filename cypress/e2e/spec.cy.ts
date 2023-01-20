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

  it("should not be able to calculate a trasition anticipation with amount less than 1000", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[name=amount]").type("200");
    cy.get("input[name=installments]").type("3");
    cy.get("input[name=mdr]").type("4");

    cy.get("form").submit();

    cy.contains("​Valor da venda deve ser maior ou igual a 1000");
  });

  it("should not be able to calculate a trasition anticipation with installments more then 12", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[name=amount]").type("15000");
    cy.get("input[name=installments]").type("13");
    cy.get("input[name=mdr]").type("4");

    cy.get("form").submit();

    cy.contains("Número de parcelas deve ser entre 1 e 12");
  });
});
