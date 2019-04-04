describe('Home Page', () => {
  it('routing works', () => {
    cy.visit('/')
    cy.get('h1')
      .should('have.text', 'Welcome Sir')
  })
})