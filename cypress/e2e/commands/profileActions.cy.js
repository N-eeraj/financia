import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

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
}

describe('Profile Page', () => {
  it('Check profile action buttons', checkActionButtons)
})
