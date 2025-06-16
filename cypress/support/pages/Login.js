import SignupPage from '../support/pages/SignupPage';

const signupPage = new SignupPage();

describe('Sign-Up Test - BDD Style with POM', () => {
  it('Given I am on the signup page, when I enter valid details, then I should be registered successfully', () => {
    const uniqueEmail = `nikita${Date.now()}@test.com`;

    // Given
    signupPage.visit();

    // When
    signupPage.enterFirstName('Nikita');
    signupPage.enterLastName('Hiwale');
    signupPage.enterEmail(uniqueEmail);
    signupPage.enterPassword('Test@1234');
    signupPage.submit();

    // Then
    signupPage.verifySuccessMessage();
  });
});
