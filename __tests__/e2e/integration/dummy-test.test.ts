describe('When a user try to verify his contract and it succeed', () => {
  before(() => {
    cy.log(`Visiting http://localhost:3000`)
    cy.visit('/')
  })

  it('Should see the title', () => {
    cy.get('[data-cy=title]').should('be.visible')
  })
})
