describe('Hello World Test', () => {
    it('should display hello world message', () => {
        cy.visit('http://localhost:4000'); // Adjust the URL as needed
        cy.contains('Logo');
    });

    it('should toggle the menu visibility', () => {
        cy.visit('http://localhost:4000'); // Adjust the URL as needed
        cy.get('body').should('not.have.class', 'is-menu-visible');
        cy.get('.menu-toggle').click(); // Adjust the selector as needed
        cy.get('body').should('have.class', 'is-menu-visible');
        cy.get('.menu-toggle').click(); // Adjust the selector as needed
        cy.get('body').should('not.have.class', 'is-menu-visible');
    });

    it('should apply breakpoints correctly', () => {
        cy.viewport(1280, 800);
        cy.get('body').should('have.class', 'large');
        cy.viewport(980, 800);
        cy.get('body').should('have.class', 'medium');
        cy.viewport(736, 800);
        cy.get('body').should('have.class', 'small');
        cy.viewport(480, 800);
        cy.get('body').should('have.class', 'xsmall');
        cy.viewport(360, 800);
        cy.get('body').should('have.class', 'xxsmall');
    });

    it('should auto-resize textareas in forms', () => {
        cy.visit('http://localhost:4000'); // Adjust the URL as needed
        cy.get('form textarea').each(($textarea) => {
            cy.wrap($textarea).type('This is a test message.');
            cy.wrap($textarea).should('have.css', 'height').and('match', /\d+px/);
        });
    });
});