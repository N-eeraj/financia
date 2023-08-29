import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  invalidEmails,
  validEmails,
} from '/cypress/fixtures/entry-form/emails.json'

import {
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

const checkLoginLogout = () => {
  cy.visit(login)
  validCredentials.forEach(({ email, password }) => {
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
    cy.get('button[data-cy="login-button"]').click()
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(dashboard.home)
    })
    cy.get('[data-cy="profile-button"]').click()
    cy.get('[data-cy="profile-action"]').contains('Logout').click()
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(login)
    })
  })
}

const checkPageNotFound = () => {
  cy.visit(login)
  const { email, password } = validCredentials[0]
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
  cy.get('button[data-cy="login-button"]').click()
  cy.visit('/invalid-route')
  cy.get('[data-cy="back-to-home-button"]').click()
  cy.wait(500)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(dashboard.home)
  })
}


describe('Login Form Validations', () => {
  it('Checks login form validations', loginFormValidations)
  it('Checks login form validations with all input combinations', checkAllLoginInputCombinations)
})

describe('Login Attempts', () => {
  it('Checks invalid logins', checkInvalidLogins)
  it('Checks valid logins', checkLoginLogout)
})

describe('404 Page Redirect After Login', () => {
  it('Checks not found page', checkPageNotFound)
})
