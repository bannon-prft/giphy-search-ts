describe('Search Page', () => {
  it('should display 50 Gifs from the current search', () => {
    cy.visit('http://localhost:3000/search?q=test')
    cy.get('ul')
      .find('li')
      .should('have.length', 50)
      .each(($el) => {
        expect($el.children('video')).length.to.not.equal(0)
      })
  })
})
