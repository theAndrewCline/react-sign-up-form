describe('App', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  describe('Sign In Card', () => {
    it('should have an email input', () => {
      cy.get('form')
        .find('input#email')
        .type('me@example.com')
    })

    it('should have a password input', () => {
      cy.get('form')
        .find('input#password')
        .type('password')
    })


    it('should have a button to signin', () => {
      cy.get('form')
        .find('button.signin')
        .click()
    })

    it('should have an href to link to create account', () => {
      cy.get('a#signup')
        .should('have.attr', 'href')
    })
  })
})