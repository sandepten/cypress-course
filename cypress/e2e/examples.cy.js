describe('Various examples', () => {
  beforeEach(() => {
    cy.visit('/examples');
  });

  it('multi-page testing', () => {
    cy.getByTestId('nav-why-cypress').click();
    cy.location('pathname').should('eq', '/');

    cy.getByTestId('nav-overview').click();
    cy.location('pathname').should('eq', '/overview');

    cy.getByTestId('nav-fundamentals').click();
    cy.location('pathname').should('eq', '/fundamentals');

    cy.getByTestId('nav-examples').click();
    cy.location('pathname').should('eq', '/examples');
  });

  it.only('intercepts', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      fixture: 'example.json',
    });
    cy.getByTestId('post-button').click();
  });
});
