class HomePage {
    pageURL() {
        cy.url().should("contains", "/users");
    }

    pageTitle() {
        cy.title().should('eq', 'DeliciousAI Admin')
    }
    headerTitle() {
        cy.get("h5").should('contain', "User Management")
    }
}
module.exports = new HomePage()