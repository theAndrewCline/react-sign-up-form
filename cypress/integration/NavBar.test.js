describe('Nav Bar', () => {
  it('should render', () => {
    cy.visit('/signin')
    cy.get('.NavBar')
      .find('li')
      .should('have.text', 'Sign In')
  })
})