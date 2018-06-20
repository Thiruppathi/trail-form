describe("Form Input", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the app & shows 3 Fields & 1 button", () => {
    cy.get(".form-group").should("have.length", 4);
  });

  it("Accepts Name Field", () => {
    const typedName = "John Doe";
    cy.get(":nth-child(1) > .input-wrapper > .field")
      .type(typedName)
      .should("have.value", typedName);
  });

  it("Accepts Email Field", () => {
    const typedEmail = "John.Doe@example.com";
    cy.get(":nth-child(2) > .input-wrapper > .field")
      .type(typedEmail)
      .should("have.value", typedEmail);
  });

  it("Accepts Message Field", () => {
    const typedMessage = "Hello from John Doe!";
    cy.get(":nth-child(3) > .input-wrapper > .field")
      .type(typedMessage)
      .should("have.value", typedMessage);
  });

  it("Doesn't Submit Empty Form", () => {
    cy.get("button").click();
    cy.get(".form-group.invalid").should("have.length", 3);
  });

  it("Doesn't Submit with out Name", () => {
    cy.enterValue("email");
    cy.enterValue("message");
    cy.get("button").click();
    cy.get(".form-group.invalid").should("have.length", 1);
    cy.get(".error-msg").should("have.text", "Enter a Name");
  });

  it("Doesn't Submit with out Email", () => {
    cy.enterValue("name");
    cy.enterValue("message");
    cy.get("button").click();
    cy.get(".form-group.invalid").should("have.length", 1);
    cy.get(".error-msg").should("have.text", "Enter an Email Address");
  });

  it("Shows Error Message for Invalid Email Address", () => {
    cy.enterValue("name");
    cy.enterValue("email", "Not an Email!");
    cy.enterValue("message");
    cy.get("button").click();
    cy.get(".form-group.invalid").should("have.length", 1);
    cy.get(".error-msg").should("have.text", "Invalid email address");
  });

  it("Doesn't Submit with out Message", () => {
    cy.enterValue("name");
    cy.enterValue("email");
    cy.get("button").click();
    cy.get(".form-group.invalid").should("have.length", 1);
    cy.get(".error-msg").should("have.text", "Enter a message");
  });

  it("Disables Fields on Form Submission", () => {
    cy.fillTrailFormAndSubmit();
    cy.get("button").should("be.disabled");
    cy.get(".field").should("be.disabled");
  });

  it("Show Spinner on Form Submission", () => {
    cy.fillTrailFormAndSubmit();
    cy.get(".form-group.invalid").should("have.length", 0);
    cy.get("button").should("have.class", "spinner");
  });
});
