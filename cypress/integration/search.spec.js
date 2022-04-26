describe('Search Page', () => {
  it('should display 50 Gifs from the current search', () => {
    cy.visit('http://localhost:3000/search?q=test')
    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search*',
      },
      {
        fixture: 'search',
      }
    ).as('searchResults')
    
    cy.wait('@searchResults').then((interception) => {
      cy.log(interception)
      cy.get('[data-cy="test"]').should('have.length', 50)
    })
  })
})
