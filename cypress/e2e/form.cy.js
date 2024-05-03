describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('Test subscribe form', () => {
    cy.getByTestId('form-header').should('have.text', 'Testing Forms');
    cy.getByTestId('subscribe-form').find('input').as('input');
    cy.get('@input').type('sandepten@gmail.com');
    cy.contains(/Successfully subbed: sandepten@gmail.com/i).should('not.exist');
    cy.getByTestId('subscribe-button').click();
    cy.contains(/Successfully subbed: sandepten@gmail.com/i);

    // Test invalid email
    cy.wait(3000);
    cy.get('@input').type('sandepten');
    cy.getByTestId('subscribe-button').click();
    cy.contains(/Invalid email: sandepten/i);
    cy.wait(3000);
    cy.contains(/Invalid email: sandepten/i).should('not.exist');

    // Test fail
    cy.get('@input').clear();
    cy.getByTestId('subscribe-button').click();
    cy.contains(/fail/i);
  });
});
