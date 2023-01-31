/// <reference types="cypress" />
import { BrowserRouter as Router } from 'react-router-dom';
import Crew from '../../src/pages/Crew/crew';

describe("ensurance Crew page", () => {
    it("<Crew />", () => {
        cy.mount(
        <Router>
            <Crew />
        </Router>
        );

        cy.get('[href="/crew?c=1"]').click();
        cy.url().should('include', '?c=1');

        cy.get('[href="/crew?c=2"]').click();
        cy.url().should('include', '?c=2');

        cy.get('[href="/crew?c=3"]').click();
        cy.url().should('include', '?c=3');

        cy.get('[href="/crew?c=0"]').click();
        cy.url().should('include', '?c=0');
    })
})