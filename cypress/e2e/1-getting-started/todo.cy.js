/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("no messages at start", () => {
    cy.get("[data-cy='todos-list']").contains("No tasks");
  });

  it("can add new todo items", () => {
    cy.get("[data-cy='add-todo']")
      .click()
      .get("[data-cy='todos-list']")
      .contains("No tasks");

    cy.get("[data-cy='todo-input']")
      .type("Example todo")
      .get("[data-cy='add-todo']")
      .click()
      .get("[data-cy='todos-list']")
      .should("have.text", "Example todo")
      .get("[data-cy='todo']")
      .should("have.length", 1);
  });

  it("checks items left counter", () => {
    cy.get("[data-cy='todo-input']")
      .type("Example todo")
      .get("[data-cy='add-todo']")
      .click()
      .get("[data-cy='todo-left']")
      .contains("1")
      .get("[data-cy='todo']")
      .click()
      .get("[data-cy='todo-left']")
      .contains("0");
  });

  it("checks menu items functionality", () => {
    const text = "example todo";
    const defaultText = "No tasks";

    cy.get("[data-cy='todos-list']").as("todosList")
      .get("[data-cy='todo-active']").as("todosActive")
      .get("[data-cy='todo-completed']").as("todosCompleted");

    cy.get("@todosList")
      .contains(defaultText)
      .get("[data-cy='todo-input']")
      .type(text)
      .get("[data-cy='add-todo']")
      .click()
      .get("@todosList")
      .contains(text)
      .get("@todosActive")
      .click()
      .get("@todosList")
      .contains(text)
      .get("@todosCompleted")
      .click()
      .get("@todosList")
      .contains(defaultText)
      .get("@todosActive")
      .click()
      .get("[data-cy='todo']")
      .click()
      .get("@todosCompleted")
      .click()
      .get("@todosList")
      .contains(text)
      .get("@todosActive")
      .click()
      .get("@todosList")
      .contains(defaultText)
      .get("[data-cy='todo-delete']")
      .click()
      .get("@todosCompleted")
      .click()
      .get("@todosList")
      .contains(defaultText)
  });
});
