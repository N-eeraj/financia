import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

const smallScreenNotificationToggle = () => {
  cy.viewport('iphone-x')
  loginUserWithIndex(1)
  cy.get('[data-cy="profile-button"]').click()
  cy.get('[data-cy="profile-action"]').contains('Notifications').click()
  cy.get('[data-cy="notification-list"]').should('be.visible')
  cy.get('[data-cy="profile-button"]').click({ force: true })
  cy.get('[data-cy="notification-list"]').should('not.be.visible')
}

const largeScreenNotificationToggle = () => {
  loginUserWithIndex(1)
  const largeViewports = [
    'ipad-mini',
    'macbook-13',
  ]
  largeViewports.forEach(viewport => {
    cy.viewport(viewport)
    cy.get('[data-cy="notification-btn"]').click()
    cy.get('[data-cy="notification-list"]').should('exist')
    cy.get('body').click()
    cy.get('[data-cy="notification-list"]').should('not.exist')
  })
}

describe('Check Notification Toggle', () => {
  it ('Checks in small screen', smallScreenNotificationToggle)
  it ('Checks in large screen', largeScreenNotificationToggle)
})
