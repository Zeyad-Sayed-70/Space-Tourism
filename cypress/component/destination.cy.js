/// <reference types="cypress" />
import { BrowserRouter as Router } from 'react-router-dom';
import Destination from '../../src/pages/Destination/destination';
import data from '../../src/data.json';


describe("ensurance destination page", () => {
    it("<Destination />", () => {
        cy.mount(
        <Router>
            <Destination />
        </Router>
        );
        
        // get destinations data from data.josn
        const dest_data = data.destinations;
        
        // Mars
        cy.get('[href="/destination?dest=1"]').click();
        cy.url().should('include', '?dest=1');

        cy.get('.image-container img').should('have.attr', 'src').should('include', dest_data[1].images.png)
        cy.get('h2').should('have.text', dest_data[1].name);
        cy.get('.paragraph').should('have.text', dest_data[1].description);
        cy.get(':nth-child(1) > .subheading-1').should('have.text', dest_data[1].distance);
        cy.get(':nth-child(2) > .subheading-1').should('have.text', dest_data[1].travel);

        // Europa
        cy.get('[href="/destination?dest=2"]').click();
        cy.url().should('include', '?dest=2');

        cy.get('.image-container img').should('have.attr', 'src').should('include', dest_data[2].images.png)
        cy.get('h2').should('have.text', dest_data[2].name);
        cy.get('.paragraph').should('have.text', dest_data[2].description);
        cy.get(':nth-child(1) > .subheading-1').should('have.text', dest_data[2].distance);
        cy.get(':nth-child(2) > .subheading-1').should('have.text', dest_data[2].travel);
        
        // Titan
        cy.get('[href="/destination?dest=3"]').click();
        cy.url().should('include', '?dest=3');
        
        cy.get('.image-container img').should('have.attr', 'src').should('include', dest_data[3].images.png)
        cy.get('h2').should('have.text', dest_data[3].name);
        cy.get('.paragraph').should('have.text', dest_data[3].description);
        cy.get(':nth-child(1) > .subheading-1').should('have.text', dest_data[3].distance);
        cy.get(':nth-child(2) > .subheading-1').should('have.text', dest_data[3].travel);
        
        // Moon
        cy.get('[href="/destination?dest=0"]').click();
        cy.url().should('include', '?dest=0');

        cy.get('.image-container img').should('have.attr', 'src').should('include', dest_data[0].images.png)
        cy.get('h2').should('have.text', dest_data[0].name);
        cy.get('.paragraph').should('have.text', dest_data[0].description);
        cy.get(':nth-child(1) > .subheading-1').should('have.text', dest_data[0].distance);
        cy.get(':nth-child(2) > .subheading-1').should('have.text', dest_data[0].travel);
    })
})