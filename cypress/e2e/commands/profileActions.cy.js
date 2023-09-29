import { dashboard } from '/cypress/fixtures/url.json'
import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

const { myProfile, changePassword, deleteAccount } = dashboard.profile

const visitProfilePage = () => {
  loginUserWithIndex()
  cy.get('[data-cy="profile-button"]').click()
  cy.get('[data-cy="profile-action"]').contains('Profile').click()
  cy.get('[data-cy="profile-action-container"]').find('[data-cy="action"]').as('profileActions')
  cy.get('@profileActions').contains('My Profile').as('myProfile')
  cy.get('@profileActions').contains('Password').as('changePassword')
  cy.get('@profileActions').contains('Delete Account').as('deleteAccount')
}

const checkActionButtons = () => {
  visitProfilePage()
  cy.get('@myProfile').click()
  cy.get('[data-cy="my-profile-tab"]').should('be.visible')
  cy.get('@changePassword').click()
  cy.get('[data-cy="change-password-tab"]').should('be.visible')
  cy.get('@deleteAccount').click()
  cy.get('[data-cy="delete-modal"]').find('[data-cy="modal"]').should('be.visible')
  cy.get('[data-cy="layout"]').click(0, 0)
  cy.get('[data-cy="delete-modal"]').find('[data-cy="modal"]').should('not.be.visible')
}

const checkActionURL = () => {
  loginUserWithIndex()
  cy.visit(myProfile)
  cy.get('[data-cy="my-profile-tab"]').should('be.visible')
  cy.visit(changePassword)
  cy.get('[data-cy="change-password-tab"]').should('be.visible')
  cy.visit(deleteAccount)
  cy.get('[data-cy="delete-modal"]').find('[data-cy="modal"]').should('be.visible')
}

const checkActionTabs = () => {
  visitProfilePage()
  cy.get('[data-cy="my-profile-tab"]').should('be.visible')
  cy.get('@deleteAccount').click()
  cy.get('[data-cy="my-profile-tab"]').should('be.visible')
  cy.get('[data-cy="delete-modal"]').find('[data-cy="modal"]').should('be.visible')
  cy.get('[data-cy="layout"]').click(0, 0)
  cy.get('@changePassword').click()
  cy.get('@deleteAccount').click()
  cy.get('[data-cy="change-password-tab"]').should('be.visible')
  cy.get('[data-cy="delete-modal"]').find('[data-cy="modal"]').should('be.visible')
}

describe('Profile Page Actions', () => {
  it('Check profile action buttons', checkActionButtons)
  it('Check action tabs & delete modal via URL', checkActionURL)
  it('Check action tabs along modal via URL', checkActionTabs)
})
