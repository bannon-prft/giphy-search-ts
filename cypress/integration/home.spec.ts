describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the header on the home page', () => {
    cy.get('h1').contains('GIPHY Search')
  })
})