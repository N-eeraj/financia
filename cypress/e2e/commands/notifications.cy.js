import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

const SMALL_VIEWPORT = 'iphone-x'
const LARGE_VIEW_PORTS = [
  'ipad-mini',
  'macbook-13',
]

const openNotificationListSmallScreen = () => {
  cy.get('[data-cy="profile-button"]').click()
  cy.get('[data-cy="profile-action"]').contains('Notifications').click()
}

const openNotificationListLargeScreen = () => cy.get('[data-cy="notification-btn"]').click()

const smallScreenNotificationToggle = () => {
  cy.viewport(SMALL_VIEWPORT)
  loginUserWithIndex(1)
  openNotificationListSmallScreen()
  cy.get('[data-cy="notification-list"]').should('be.visible')
  cy.get('[data-cy="profile-button"]').click({ force: true })
  cy.get('[data-cy="notification-list"]').should('not.be.visible')
}

const largeScreenNotificationToggle = () => {
  loginUserWithIndex(1)
  LARGE_VIEW_PORTS.forEach(viewport => {
    cy.viewport(viewport)
    openNotificationListLargeScreen()
    cy.get('[data-cy="landscape-notification-list"]').should('exist')
    cy.get('body').click()
    cy.get('[data-cy="landscape-notification-list"]').should('not.exist')
  })
}

const smallScreenCloseNotifications = () => {
  cy.viewport(SMALL_VIEWPORT)
  loginUserWithIndex()
  openNotificationListSmallScreen()
  cy.get('[data-cy="notification-list"] [data-cy="notification-item"]').as('notifications').then($notifications => {
      const notificationCount = $notifications.length
      for (let i = 1; i <= notificationCount; i++) {
        cy.get('@notifications').first().find('[data-cy="close-notification-btn"]').click()
        cy.get('@notifications').should('have.length', notificationCount - i)
      }
    })
  cy.get('[data-cy="notification-list"] [data-cy="no-notification-bell"]').should('be.visible')
}

const largeScreenCloseNotifications = () => {
  loginUserWithIndex()
  LARGE_VIEW_PORTS.forEach(viewport => {
    cy.viewport(viewport)
    openNotificationListLargeScreen()
    cy.get('[data-cy="landscape-notification-list"] [data-cy="notification-item"]').as('notifications').then($notifications => {
      const notificationCount = $notifications.length
      for (let i = 1; i <= notificationCount; i++) {
        cy.get('@notifications').first().find('[data-cy="close-notification-btn"]').click()
        cy.get('@notifications').should('have.length', notificationCount - i)
      }
    })
    cy.get('[data-cy="landscape-notification-list"] [data-cy="no-notification-bell"]').should('be.visible')
    cy.reload()
  })
}

const smallScreenReadAllNotifications = () => {
  cy.viewport(SMALL_VIEWPORT)
  loginUserWithIndex()
  openNotificationListSmallScreen()
  cy.get('[data-cy="notification-list"] [data-cy="notification-item"]').as('notifications')
  cy.get('[data-cy="notification-list"]').find('[data-cy="read-all-notifications-btn"]').click()
  cy.get('@notifications').should('have.length', 0)
  cy.get('[data-cy="notification-list"] [data-cy="no-notification-bell"]').should('be.visible')
}

const largeScreenReadAllNotifications = () => {
  loginUserWithIndex()
  LARGE_VIEW_PORTS.forEach(viewport => {
    cy.viewport(viewport)
    openNotificationListLargeScreen()
    cy.get('[data-cy="landscape-notification-list"] [data-cy="notification-item"]').as('notifications')
    cy.get('[data-cy="landscape-notification-list"]').find('[data-cy="read-all-notifications-btn"]').click()
    cy.get('@notifications').should('have.length', 0)
    cy.get('[data-cy="landscape-notification-list"] [data-cy="no-notification-bell"]').should('be.visible')
    cy.reload()
  })
}

describe('Check Notification Toggle', () => {
  it('Checks in small screen', smallScreenNotificationToggle)
  it('Checks in large screen', largeScreenNotificationToggle)
})

describe('Check notification close & mark all read actions', () => {
  it('Checks notification close action for small screen', smallScreenCloseNotifications)
  it('Checks notification close action for large screen', largeScreenCloseNotifications)
  it('Checks read all notifications action for small screen', smallScreenReadAllNotifications)
  it('Checks read all notifications action for large screen', largeScreenReadAllNotifications)
})
