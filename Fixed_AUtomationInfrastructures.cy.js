describe('empty spec', () => {
  it('passes', () => {
    // Visit the initial page
    cy.visit('https://example.cypress.io');
    
    // Visit the querying page
    cy.visit('https://example.cypress.io/commands/querying');

    // Check the 'best practices - selecting elements' section
    cy.get('[data-cy=best-practices-selecting-elements]').should('have.attr', 'href', 'https://on.cypress.io/best-practices#Selecting-Elements');
    
    // Make a request to the API
    cy.request('https://api.jsonbin.io/v3/b/62e129e3248d43754f074152').then((resp) => {
      // Assert the status and content of the response
      expect(resp.status).to.eq(200);
      expect(resp.body).not.to.be.empty;
      expect(resp.body).to.have.property('record');
      expect(resp.body['record'][0]).to.have.property('team');

      const teamName = resp.body.record[0].team;
      // Optionally, log the team name
      // cy.log(teamName);
    });
  });
});
