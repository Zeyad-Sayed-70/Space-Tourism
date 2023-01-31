/// <reference types="cypress" />
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../src/pages/Home/home';

describe("ensurance home page", () => {
    it("<Home />", () => {
        cy.mount(
        <Router>
            <Home />
        </Router>
        );

        cy.get('button').should('have.text', 'explore');
        cy.get('button').click();
        cy.url().should('include', '/destination');
    })
})