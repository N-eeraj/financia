import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helper/inputValidations.cy.js'

import {
  invalidEmails,
  validEmails,
  invalidCredentials,
  validCredentials,
} from '/cypress/fixtures/entry-form/login.json'

const URL = {
  login: '/login',
  signUp: '/sign-up',
}

const navigateFromHomeToLoginThenToSignUp = () => {
  cy.visit('/')
  cy.get('button[data-cy="login-btn"]').click()
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.login)
  })
  cy.get('button[data-cy="segue-link"]').click()
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.signUp)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ href }) => {
    expect(href).to.contains('/')
  })
}

const navigateFromHomeToSignUpThenToLogin = () => {
  cy.visit('/')
  cy.get('button[data-cy="sign-up-btn"]').click()
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.signUp)
  })
  cy.get('button[data-cy="segue-link"]').click()
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.login)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ href }) => {
    expect(href).to.contains('/')
  })
}

const loginFormValidations = () => {
  cy.visit(URL.login)

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
  cy.visit(URL.login)
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
  cy.visit(URL.login)
  invalidCredentials.forEach(({ email, password, error }) => {
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
    cy.get('button[data-cy="login-button"]').click()
    cy.get('[data-testid="toast-content"]').last().should('have.text', error)
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').clear()
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').clear()
  })
}


describe('Home Navigation Checks', () => {
  it('Checks navigations from Home & Login', navigateFromHomeToLoginThenToSignUp)
  it('Checks navigations from Home & Sign Up', navigateFromHomeToSignUpThenToLogin)
})

describe('Entry Form Validations', () => {
  it('Checks login form validations', loginFormValidations)
  it('Checks login form validations with all input combinations', checkAllLoginInputCombinations)
  it('Checks invalid logins', checkInvalidLogins)
})
