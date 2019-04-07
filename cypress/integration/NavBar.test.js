describe('Nav Bar', () => {
  it('should have a sign in button that will take you to sign in page', () => {
    cy.visit('/')
    cy.get('.NavBar')
      .contains('li', 'Sign In')
      .click()
    cy.url().should('contain', '/signin')
  })

  it('should have a private user page', () => {
    cy.visit('/')
    cy.get('.NavBar')
      .contains('li', 'User')
      .click()

    cy.url().should('contain', '/user')
  })
})