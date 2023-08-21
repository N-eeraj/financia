const BASE_URL = 'http://localhost:3000'

describe('template spec', () => {
  it('Checks login click from home & return back', () => {
    cy.visit(BASE_URL)
    cy.get('button').first().click()
    cy.location().should(({ href }) => {
      expect(href).to.contains(`${BASE_URL}/login`)
    })
    cy.go('back')
    cy.location().should(({ href }) => {
      expect(href).to.contains(BASE_URL)
    })
  })

  it('Checks sign up click from home & return back', () => {
    cy.visit(BASE_URL)
    cy.get('button').last().click()
    cy.location().should(({ href }) => {
      expect(href).to.eq(`${BASE_URL}/sign-up`)
    })
    cy.go('back')
    cy.location().should(({ href }) => {
      expect(href).to.contains(BASE_URL)
    })
  })
})