class SignupPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  }

  enterFirstName(name) {
    cy.get('#firstname').type(name);
  }

  enterLastName(name) {
    cy.get('#lastname').type(name);
  }

  enterEmail(email) {
    cy.get('#email_address').type(email);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }

  submit() {
    cy.get('button[title="Create an Account"]').click();
  }

  verifySuccessMessage() {
    cy.contains('Thank you for registering').should('be.visible');
  }
}

export default SignupPage;
