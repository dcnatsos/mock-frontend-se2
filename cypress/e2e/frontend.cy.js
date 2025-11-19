describe('Simple frontend smoke', () => {
  it('loads the index and has expected content', () => {
    // Visit root (uses cypress.config.js baseUrl)
    cy.visit('/');

    // Check for the visible expected text
    cy.contains('Frontend ↔ Backend demo');
    cy.contains('This page will call the backend on Render and show the JSON response');

    // Check that the button exists and has correct text
    cy.get('#btn').should('be.visible').and('contain', 'Call backend');

    // Check that the output area exists with initial text
    cy.get('#out').should('be.visible').and('contain', '(click the button)');
  });

  it('calls the backend and displays the response', () => {
    // Visit root
    cy.visit('/');

    // Click the backend button
    cy.get('#btn').click();

    // Wait for the response and verify it's displayed
    cy.get('#out')
      .should('not.contain', '(click the button)')

    // Verify the response contains expected backend data
    cy.get('#out')
      .should('contain', 'message') // Check for common JSON key
  });
});
