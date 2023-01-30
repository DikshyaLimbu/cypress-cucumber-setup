class LoginPage {
  signInWithEmail() {
    return cy.contains("Sign in with email").click()
  }

  typeEmail(email) {
    cy.get("#ui-sign-in-email-input").type(email);
    cy.contains("Next").click()
  }

  typePassword(pw) {
    cy.get("#ui-sign-in-password-input").type(pw);
  }

  errorMessage(error){
    cy.get(".firebaseui-id-password-error").should('contain', error)
  }

  signInButton() {
    return cy.contains("Sign In").click()
  }
}

module.exports = new LoginPage();
