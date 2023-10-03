/// <reference types="cypress" />
import { BrowserRouter as Router } from 'react-router-dom';
import Technology from '../../src/pages/Technology/technology';

describe("ensurance technology page", () => {
    it("<Technology />", () => {
        cy.mount(
        <Router>
            <Technology />
        </Router>
        );

        cy.get('[href="/technology?tech=1"]').click();
        cy.url().should('include', '?tech=1');
        
        cy.get('[href="/technology?tech=2"]').click();
        cy.url().should('include', '?tech=2');
        
        cy.get('[href="/technology?tech=0"]').click();
        cy.url().should('include', '?tech=0');
    })
})