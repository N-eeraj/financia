import { validCredentials } from '/cypress/fixtures/entry-form/login.json'
import { login } from '/cypress/fixtures/url.json'

export const loginUserWithIndex = (index = 0) => {
  cy.visit(login)
  const { email, password } = validCredentials[index]
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
  cy.get('button[data-cy="login-button"]').click()
}

export const logoutUser = (userName) => {
  cy.get('[data-cy="profile-button"]').as('profile-button')
  if (userName)
    cy.get('@profile-button').find('[data-cy="user-name"]').should('have.text', userName)
  cy.get('@profile-button').click()
  cy.get('[data-cy="profile-action"]').contains('Logout').click()
}
