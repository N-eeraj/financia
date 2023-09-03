import loginUserWithIndex from '/cypress/e2e/helpers/login.cy.js'

import navDrawerLinks from '/cypress/fixtures/nav-drawer-link.json'

const navDrawerChecker = (hiddenNavDrawer = true) => {
  loginUserWithIndex(1)
  cy.get('[data-cy="nav-drawer-link"]').as('navLink')

  navDrawerLinks.forEach(({ text, path }) => {
    if (hiddenNavDrawer)
      cy.get('[data-cy="nav-toggle"]').click()

    cy.wait(500)
    cy.get('@navLink').contains(text).click()
    cy.location().should(({ href }) => {
      expect(href).to.contains(path)
    })
  })
}

const mobileNavDrawer = () => {
  cy.viewport('iphone-x')
  navDrawerChecker()
}

const TabletNavDrawer = () => {
  cy.viewport('ipad-mini')
  navDrawerChecker()
}

const largeScreenNavDrawer = () => {
  cy.viewport('macbook-13')
  navDrawerChecker(false)
}

describe('Dashboard navigations', () => {
  it('Checks mobile screen', mobileNavDrawer)
  it('Checks tablet screen', TabletNavDrawer)
  it('Checks laptop screen', largeScreenNavDrawer)
})
