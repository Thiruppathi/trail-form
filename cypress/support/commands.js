// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("enterValue", (fieldName, value) => {
  const values = ["John Doe", "John.Doe@example.com", "Hello from John Doe!"];
  let index;
  switch (fieldName) {
    case "name":
      index = 1;
      break;
    case "email":
      index = 2;
      break;
    case "message":
      index = 3;
      break;
    default:
      break;
  }
  cy.get(`:nth-child(${index}) > .input-wrapper > .field`).type(
    value || values[index - 1]
  );
});

Cypress.Commands.add("fillTrailFormAndSubmit", () => {
  cy.enterValue("name");
  cy.enterValue("email");
  cy.enterValue("message");
  cy.get("button").click();
});
