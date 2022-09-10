describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.visit('https://example.cypress.io/commands/querying')
    
    cy.get('[data-cy=best-practices-selecting-elements]').within(() => {
       it('best practices - selecting elements', () => {
          cy.get('[data-cy=best-practices-selecting-elements]').should('have.attr', 'href')
          cy.url().should('eq', 'https://on.cypress.io/best-practices#Selecting-Elements') 
      })
    })
    
    cy.request('https://api.jsonbin.io/v3/b/62e129e3248d43754f074152').then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).not.to.be.empty
      //console.log(resp.body)
      expect(resp.body).to.have.property('record')
      expect(resp.body['record'][0]).to.have.property('team')

      const teamName = resp.body.record[0].team

      //expect(resp.body.length).to.eq(5)
    })
  })
})