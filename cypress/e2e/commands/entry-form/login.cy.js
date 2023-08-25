import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  invalidEmails,
  validEmails,
  invalidCredentials,
  validCredentials,
} from '/cypress/fixtures/entry-form/login.json'

import { login, dashboard } from '/cypress/fixtures/url.json'

const loginFormValidations = () => {
  cy.visit(login)

  // empty field validation
  checkEmptyValidation('email-input')
  checkEmptyValidation('password-input')

  // check invalid email inputs
  invalidEmails.forEach(email => {
    cy.reload()
    checkInvalidInput({
      selector: 'email-input',
      input: email,
      errorMsg: 'Please enter a valid email',
    })
  })

  // check valid inputs
  validEmails.forEach(email => {
    cy.reload()
    checkValidInput({
      selector: 'email-input',
      input: email,
    })
  })
}

const checkAllLoginInputCombinations = () => {
  cy.visit(login)
  checkEmptyFormSubmit({
    inputSelectors: [
      'email-input',
      'password-input',
    ],
    validInputs: [
      'user@test.com',
      'testPassword',
    ],
    submitSelector: 'login-button',
  })
}

const checkInvalidLogins = () => {
  cy.visit(login)
  invalidCredentials.forEach(({ email, password, error }) => {
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
    cy.get('button[data-cy="login-button"]').click()
    cy.get('[data-testid="toast-content"]').last().should('have.text', error)
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').clear()
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').clear()
  })
}

const checkValidLogins = () => {
  validCredentials.forEach(({ email, password }) => {
    cy.clearLocalStorage()
    cy.visit(login)
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
    cy.get('button[data-cy="login-button"]').click()
    cy.get('[data-testid="toast-content"]').last().should('have.text', 'Logged in successfully')
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(dashboard.home)
    })
  })
}

const loginTests = () => {
  it('Checks login form validations', loginFormValidations)
  it('Checks login form validations with all input combinations', checkAllLoginInputCombinations)
  it('Checks invalid logins', checkInvalidLogins)
  it('Checks valid logins', checkValidLogins)
}

export default loginTests