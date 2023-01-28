/// <reference types="cypress" />

describe("Login", () => {
    it("submit button sould be disabled", () => {
        // clear LocalStorage
        cy.clearAllLocalStorage();
        // Visit
        cy.visit('localhost:3000');
        // Expect Button to be Disabled
        cy.findByRole('button', { name:/login/i }).should('be.disabled');
        // Login
        cy.findByRole('textbox', {  name: /username/i}).type('diamondzm');
        cy.findByLabelText(/password/i).type('12345');
        // Expect Button to be Enabled
        cy.findByRole('button', { name:/login/i }).should('be.enabled');
        // Submit Login
        cy.findByRole('button', { name:/login/i }).click();
        // Save Data to LocalStorage
        window.localStorage.setItem('account', JSON.stringify({username: 'diamondzm', password: '12345'}));

        // check my account
        cy.findByText(/diamondzm/i).should('have.html', "diamondzm");
        cy.findByText(/12345/i).should('have.html', "12345");

        // check localStorage
        cy.getAllLocalStorage().should(() => {
            expect(localStorage.getItem('account')).to.eq("{\"username\":\"diamondzm\",\"password\":\"12345\"}");
        });

        // Logout
        cy.findByRole('button', {  name: /logout/i}).click();
    })
})