import { dashboard } from '/cypress/fixtures/url.json'
import { validCredentials } from '/cypress/fixtures/entry-form/login.json'

import {
  invalidPasswords,
  validPasswords,
} from '/cypress/fixtures/entry-form/passwords.json'

import {
  checkInvalidInput,
  checkValidInput,
  checkMatchingInputs,
  checkRequiredInputCount,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  loginUserWithIndex,
  loginUserWithCredentials
} from '/cypress/e2e/helpers/login.cy.js'

import { logoutUser } from '/cypress/e2e/helpers/login.cy.js'


// helper function to visit password update page and alias form input fields
const passwordFormInit = (userIndex = 0) => {
  loginUserWithIndex(userIndex)
  cy.visit(dashboard.profile.changePassword)
  cy.get('[data-cy="password"]').find('[data-cy="input"]').as('passwordInput')
  cy.get('[data-cy="new-password"]').find('[data-cy="input"]').as('newPassword')
  cy.get('[data-cy="confirm-password"]').find('[data-cy="input"]').as('confirmPassword')
}

const clearForm = () => {
  cy.get('@passwordInput').clear()
  cy.get('@newPassword').clear()
  cy.get('@confirmPassword').clear()
}

const checkInvalidPasswordInputs = () => {
  passwordFormInit()
  invalidPasswords.forEach(({ password, error }) => {
    cy.reload()
    checkInvalidInput({
      selector: 'new-password',
      input: password,
      errorMsg: error,
    })
  })
}

const checkRequiredFields = () => {
  passwordFormInit()
  clearForm()
  checkRequiredInputCount({
    submitSelector: 'update-btn',
    requiredInputsCount: 2,
  })
}

const checkValidPasswordInputs = () => {
  passwordFormInit()
  validPasswords.forEach(password => {
    cy.reload()
    checkValidInput({
      selector: 'new-password',
      input: password,
    })
  })
}

const checkPasswordsMatch = () => {
  passwordFormInit()
  checkMatchingInputs({
    inputSelector: 'new-password',
    confirmInputSelector: 'confirm-password',
    missMatchMsg: 'The passwords doesn\'t match',
  })
}

const checkInvalidPassword = () => {
  const randomUser = Math.floor(Math.random() * validCredentials.length)
  passwordFormInit(randomUser)
  const { password } = validCredentials[randomUser]
  cy.get('@passwordInput').type(`${password} `)
  const newPassword = `${validCredentials[randomUser].password} `
  cy.get('@newPassword').type(newPassword)
  cy.get('@confirmPassword').type(newPassword)
  cy.get('[data-cy="update-btn"]').click()
  cy.get('[data-cy="password"]').find('[data-cy="error-msg"]').should('exist')
}

const checkPasswordUpdate = () => {
  const randomUser = Math.floor(Math.random() * validCredentials.length)
  passwordFormInit(randomUser)
  const { email, password: oldPassword } = validCredentials[randomUser]
  cy.get('@passwordInput').type(oldPassword)
  const newPassword = `${validCredentials[randomUser].password} `
  cy.get('@newPassword').type(newPassword)
  cy.get('@confirmPassword').type(newPassword)
  cy.get('[data-cy="update-btn"]').click()
  cy.get('[data-cy="password"]').find('[data-cy="error-msg"]').should('not.exist')
  cy.get('[data-testid="toast-content"]').last().should('have.text', 'Successfully Updated Password')
  cy.wait(500)
  logoutUser()
  loginUserWithCredentials({
    email,
    password: oldPassword,
  })
  cy.get('[data-testid="toast-content"]').last().should('have.text', 'Incorrect Password')
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').clear()
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').clear()
  loginUserWithCredentials({
    email,
    password: newPassword,
  })
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(dashboard.home)
  })
}


describe('New Password Validations', () => {
  it('Checks invalid password errors', checkInvalidPasswordInputs)
  it('Checks required fields', checkRequiredFields)
  it('Checks valid password', checkValidPasswordInputs)
  it('Checks password matching', checkPasswordsMatch)
  it('Checks with invalid password', checkInvalidPassword)
  it('Checks with password update', checkPasswordUpdate)
})
