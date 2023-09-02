import { validCredentials } from '/cypress/fixtures/entry-form/login.json'

import { login } from '/cypress/fixtures/url.json'

const loginUserWithIndex = (index = 0) => {
  cy.visit(login)
  const { email, password } = validCredentials[index]
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
  cy.get('button[data-cy="login-button"]').click()
}

export default loginUserWithIndex
