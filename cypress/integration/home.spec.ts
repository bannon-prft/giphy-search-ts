describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the header on the home page', () => {
    cy.get('h1').contains('GIPHY Search')
  })

  it('should render the search bar and be focused', () => {
    cy.get('input')
      .should('exist')
      .should('be.focused')
  })

  it('should navigate to the search page when the form is submitted', () => {
    cy.get('form').submit()
    cy.url().should('contain', 'search')
  })
})
