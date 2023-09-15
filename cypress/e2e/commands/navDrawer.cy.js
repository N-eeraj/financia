import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

import navDrawerLinks from '/cypress/fixtures/nav-drawer-link.json'

const navDrawerChecker = (viewport, hiddenNavDrawer) => {
  cy.viewport(viewport)
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

const smallScreenNavDrawer = () => {
  loginUserWithIndex(1)
  const smallViewports = [
    'iphone-x',
    'ipad-mini',
  ]
  smallViewports.forEach(viewport => {
    navDrawerChecker(viewport, true)
  })
}

const largeScreenNavDrawer = () => {
  loginUserWithIndex(1)
  navDrawerChecker('macbook-13', false)
}

describe('Navigation Drawer Navigations', () => {
  it('Checks small screen', smallScreenNavDrawer)
  it('Checks large screen', largeScreenNavDrawer)
})
