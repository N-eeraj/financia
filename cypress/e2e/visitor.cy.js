import loginTests from '/cypress/e2e/commands/entry-form/login.cy.js'
import signUpTests from '/cypress/e2e/commands/entry-form/signUp.cy.js'

import { login, signUp } from '/cypress/fixtures/url.json'

const navigateFromHomeToLoginThenToSignUp = () => {
  cy.visit('/')
  cy.get('button[data-cy="login-btn"]').click()
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(login)
  })
  cy.get('button[data-cy="segue-link"]').click()
  cy.location().should(({ href }) => {
    expect(href).to.contains(signUp)
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
    expect(href).to.contains(signUp)
  })
  cy.get('button[data-cy="segue-link"]').click()
  cy.location().should(({ href }) => {
    expect(href).to.contains(login)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ href }) => {
    expect(href).to.contains('/')
  })
}


describe('Home Navigation Checks', () => {
  it('Checks navigations from Home & Login', navigateFromHomeToLoginThenToSignUp)
  it('Checks navigations from Home & Sign Up', navigateFromHomeToSignUpThenToLogin)
})

describe('Login Form Validations', loginTests)
describe('Sign Up Form Validations', signUpTests)
