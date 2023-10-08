import { dashboard } from '/cypress/fixtures/url.json'

import {
  invalidPasswords,
  validPasswords,
} from '/cypress/fixtures/entry-form/passwords.json'

import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkMatchingInputs,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  loginUserWithIndex,
  loginUserWithCredentials
} from '/cypress/e2e/helpers/login.cy.js'

// helper function to visit password update page and alias form input fields
const passwordFormInit = (userIndex = 0) => {
  loginUserWithIndex(userIndex)
  cy.visit(dashboard.profile.changePassword)
  cy.get('[data-cy="password"]').find('[data-cy="input"]').as('password')
  cy.get('[data-cy="new-password"]').find('[data-cy="input"]').as('newPassword')
  cy.get('[data-cy="confirm-password"]').find('[data-cy="input"]').as('confirmPassword')
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


describe('New Password Validations', () => {
  it('Checks invalid password errors', checkInvalidPasswordInputs)
  it('Checks valid password', checkValidPasswordInputs)
  it('Checks password matching', checkPasswordsMatch)
})
