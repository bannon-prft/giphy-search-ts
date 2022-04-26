describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the header on the home page', () => {
    cy.get('h1').contains('GIPHY Search')
  })

  it('should render the search bar and be focused', () => {
    cy.get('input').should('exist').should('be.focused')
  })

  it('should navigate to the search page when the form is submitted', () => {
    cy.get('form').type('test').submit()
    cy.url().should('contain', 'search')
  })

  it('should display 3 random GIFs on page load', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/random*',
      },
      {
        fixture: 'home',
      }
    ).as('random')

    cy.wait('@random').then((interception) => {
      cy.log(interception)
      cy.get('[data-cy="test"]').should('have.length', 3)
    })
  })
})
