describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  });

  it('Contains correct header text', () => {
    cy.getByTestId('fundamentals-header').contains('Testing Fundamentals');
  });
  it('Accordian works correctly', () => {
    cy.contains('Your tests will exist in a describe block').should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block').should('be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block').should('not.be.visible');
  });
});
