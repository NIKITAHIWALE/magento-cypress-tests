
// cypress/e2e/signup.cy.js

describe('Sign-Up Test', () => {
  it('Create a new account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    cy.get('#firstname').type('Nikita');
    cy.get('#lastname').type('Hiwale');

    const email = `nikita${Date.now()}@test.com`; // Unique email each time
    cy.get('#email_address').type(email);

    cy.get('#password').type('Test@1234');
    cy.get('#password-confirmation').type('Test@1234');

    cy.get('button[title="Create an Account"]').click();

    cy.contains('Thank you for registering').should('be.visible');
  });
});
