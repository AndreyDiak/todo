import { getDataByE2E } from "../utils/getters";

describe('check Todos', () => {
  const BASE_URL = 'http://localhost:3000';

  const TODO_TEXT = 'Test todo text';
  const TODO_TEXT_2 = 'Another todo text';
  const COUNTER_EMPTY = 'No items!'

  it('Create todo', () => {
    cy.visit(BASE_URL);
    getDataByE2E('todo:add').type(`${TODO_TEXT}{enter}`);
    getDataByE2E('todo:list').should('contain.text', TODO_TEXT);

    getDataByE2E('todo:add').type(`${TODO_TEXT_2}{enter}`);
    getDataByE2E('todo:list').should('contain.text', TODO_TEXT_2);
  })

  it('Delete todo', () => {
    cy.visit(BASE_URL);

    getDataByE2E('todo:createFirst').should('be.visible');
    getDataByE2E('todo:add').type(`${TODO_TEXT}{enter}`);
    getDataByE2E('todo:list').children().should('have.length', 1);

    getDataByE2E('todo:check').click();
    getDataByE2E('todo:delete').click();
    getDataByE2E('todo:createFirst').should('be.visible');
  })

  it('Todo counter', () => {
    cy.visit(BASE_URL);
    getDataByE2E('todo:counter').should('have.text', COUNTER_EMPTY);

    getDataByE2E('todo:add').type(`${TODO_TEXT}{enter}`);
    getDataByE2E('todo:counter').should('contain.text', '1');

    getDataByE2E('todo:add').type(`${TODO_TEXT}{enter}`);
    getDataByE2E('todo:counter').should('contain.text', '2');

    getDataByE2E('todo:check').first().click();
    getDataByE2E('todo:delete').click();
    getDataByE2E('todo:counter').should('contain.text', '1');

    getDataByE2E('todo:check').click();
    getDataByE2E('todo:delete').click();
    getDataByE2E('todo:counter').should('have.text', COUNTER_EMPTY);
  })

  it('Filter todos', () => {
    cy.visit(BASE_URL);
    getDataByE2E('todo:add').type(`${TODO_TEXT}{enter}`);
    getDataByE2E('todo:list').should('have.text', TODO_TEXT);

    getDataByE2E('todo:filter:active').click();
    getDataByE2E('todo:list').should('have.text', TODO_TEXT);

    getDataByE2E('todo:check').click();
    getDataByE2E('todo:filter:active').click();
    getDataByE2E('todo:notFound').should('be.visible');

    getDataByE2E('todo:filter:completed').click();
    getDataByE2E('todo:list').should('have.text', TODO_TEXT);

    getDataByE2E('todo:delete').click();
    getDataByE2E('todo:filter:all').click();
    getDataByE2E('todo:createFirst').should('be.visible');
  })
})