import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const login = require("../../pages/LoginPage");
const home = require("../../pages/HomePage")

Given("A web browser is at the Delicious AI Admin login page", () => {
  cy.visit("/");
});

When("A user opts to sign in with email, enters the email {string}, the password {string}, and clicks on the Sign In button", (email, pw) => {
  login.signInWithEmail()
  login.typeEmail(email)
  login.typePassword(pw)
  login.signInButton()
});

Then("the {string} error message should be displayed", (error) => {
  login.errorMessage(error)
});

Then("the page url should contain users directory", () => {
  home.pageURL()
});

Then("the page title is correct", () => {
  home.pageTitle()
});

Then("the User Management section is displayed", () => {
  home.headerTitle()
});

