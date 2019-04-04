describe('Sign Up Page', () => {
  it('routing works', () => {
    cy.visit('/signup')
    cy.get('h1')
      .should('have.text', 'Sign Up Here!')
  })
})