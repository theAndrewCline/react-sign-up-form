describe('App', () => {
  it('successfully loads', () => {
    cy.visit('/')

  })

  it('should have a Submit Button', () => {
    cy.get('button.submit')
  })
})