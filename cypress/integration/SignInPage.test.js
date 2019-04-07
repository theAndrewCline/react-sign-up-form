describe('Sign In Page', () => {
  it('loads when you visit /signin', () => {
    cy.visit('/signin')
  })
  describe('Sign In Card', () => {
    it('should have a title', () => {
      cy.get('h1')
        .should('have.text', 'Sign In')
    })

    it('should focus the email input first', () => {
      cy.focused()
        .should('have.attr', 'id', 'email')
    })
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

    it('should redirect after successful sign in', () => {
      cy.get('button.signin')
        .click()

      cy.url().should('not.contain', '/signin').should('be', 'localhost:3000/')
    })
  })
})