describe('Nav Bar', () => {
  it('should have a sign in button that will take you to sign in page', () => {
    cy.visit('/')
    cy.get('.NavBar')
      .find('li')
      .should('have.text', 'Sign In')
      .click()

    cy.url().should('contain', '/signin')
  })
})