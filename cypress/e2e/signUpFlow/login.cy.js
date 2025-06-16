
// cypress/e2e/login.cy.js

describe('Login Test', () => {
  it('Login with valid credentials', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');

    cy.get('#email').type('nikita.hiwale275@gmail.com'); // Replace with valid email
    cy.get('#pass').type('Pass@123');           // Replace with valid password
    cy.get('#send2').click();

    cy.contains('Welcome').should('be.visible');
     cy.viewport(1280,720);
     cy.scrollTo('bottom');

  });
});
