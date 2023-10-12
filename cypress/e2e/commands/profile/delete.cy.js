import { dashboard } from '/cypress/fixtures/url.json'
import { validCredentials } from '/cypress/fixtures/entry-form/login.json'

import { logoutUser } from '/cypress/e2e/helpers/login.cy.js'

import {
  loginUserWithIndex,
  loginUserWithCredentials
} from '/cypress/e2e/helpers/login.cy.js'


// helper function to open delete account
const deleteAccountInit = () => {
  const userIndex = Math.floor(Math.random() * validCredentials.length)
  const credentials = validCredentials[userIndex]
  loginUserWithIndex(userIndex)
  cy.visit(dashboard.profile.deleteAccount)
  return credentials
}

const cancelDelete = () => {
  const credentials = deleteAccountInit()
  cy.get('[data-cy="layout"]').click(0, 0)
  logoutUser()
  loginUserWithCredentials(credentials)
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(dashboard.home)
  })
}

const accountDelete = () => {
  const credentials = deleteAccountInit()
  cy.get('[data-cy="delete-btn"]').click()
  logoutUser()
  loginUserWithCredentials(credentials)
  cy.get('[data-testid="toast-content"]').last().should('have.text', 'User Not Found')
}


describe('Delete Account Check', () => {
  it('Cancel delete', cancelDelete)
  it('Delete Account', accountDelete)
})
