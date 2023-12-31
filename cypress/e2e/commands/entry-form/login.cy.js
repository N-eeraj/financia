import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  loginUserWithIndex,
  loginUserWithCredentials,
  logoutUser
} from '/cypress/e2e/helpers/login.cy.js'

import {
  invalidEmails,
  validEmails,
} from '/cypress/fixtures/entry-form/emails.json'

import {
  invalidCredentials,
  validCredentials,
} from '/cypress/fixtures/entry-form/login.json'

import { home, login, signUp, dashboard } from '/cypress/fixtures/url.json'


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
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').as('emailInputField')
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').as('passwordInputField')

  invalidCredentials.forEach(({ email, password, error }) => {
    cy.get('@emailInputField').type(email)
    cy.get('@passwordInputField').type(password)
    cy.get('button[data-cy="login-button"]').click()
    cy.get('[data-testid="toast-content"]').last().should('have.text', error)
    cy.get('@emailInputField').clear()
    cy.get('@passwordInputField').clear()
  })
}

const checkLoginLogout = () => {
  cy.visit(login)
  validCredentials.forEach(({ email, password, name }) => {
    cy.visit(login)
    loginUserWithCredentials({ email, password })
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(dashboard.home)
    })
    logoutUser(name)
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(login)
    })
  })
}

const checkPageNotFound = () => {
  loginUserWithIndex()
  cy.visit('/invalid-route')
  cy.get('[data-cy="back-to-home-button"]').click()
  cy.wait(500)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(dashboard.home)
  })
}

const checkVisitorPagesPostLogin = () => {
  loginUserWithIndex()
  cy.visit(home)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(home)
  })
  cy.visit(login)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(dashboard.home)
  })
  cy.visit(signUp)
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
  it('Check visitor pages post login', checkVisitorPagesPostLogin)
})
