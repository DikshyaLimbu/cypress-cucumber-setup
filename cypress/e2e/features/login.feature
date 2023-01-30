
Feature: Login to DeliciousAI Admin web app

    As a user, I want to login to DAI admin app.

        Scenario: Unsuccessful Login with correct email and incorrect password
        Given A web browser is at the Delicious AI Admin login page
        When A user opts to sign in with email, enters the email "swire-picos@test.com", the password "Swi$$", and clicks on the Sign In button
        Then the "The email and password you entered don't match" error message should be displayed

    Scenario: Successful Login
        Given A web browser is at the Delicious AI Admin login page
        When A user opts to sign in with email, enters the email "swire-picos@test.com", the password "Swi$reTest$", and clicks on the Sign In button
        Then the page url should contain users directory
        And the page title is correct
        And the User Management section is displayed