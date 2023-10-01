import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'
import navDrawerLinks from '/cypress/fixtures/nav-drawer-link.json'

const navDrawerChecker = (viewport, hiddenNavDrawer, navBarTitle) => {
  cy.viewport(viewport)
  cy.get('[data-cy="nav-drawer-link"]').as('navLink')

  navDrawerLinks.forEach(({ text, path }) => {
    if (hiddenNavDrawer)
      cy.get('[data-cy="nav-toggle"]').click()

    cy.wait(500)
    cy.get('@navLink').contains(text).click()

    if (navBarTitle)
      cy.get('[data-cy="page-title"]').should('contain.text', text)

    cy.location().should(({ href }) => {
      expect(href).to.contains(path)
    })
  })
}

const mobileScreenNavDrawer = () => {
  loginUserWithIndex(1)
  navDrawerChecker('iphone-x', true, false)
}

const tabletScreenNavDrawer = () => {
  loginUserWithIndex(1)
  navDrawerChecker('ipad-mini', true, true)
}

const laptopScreenNavDrawer = () => {
  loginUserWithIndex(1)
  navDrawerChecker('macbook-13', false, true)
}

describe('Navigation Drawer Navigations', () => {
  it('Checks mobile screen', mobileScreenNavDrawer)
  it('Checks tablet screen', tabletScreenNavDrawer)
  it('Checks laptop screen', laptopScreenNavDrawer)
})
