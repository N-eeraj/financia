import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkMinMaxInputLength,
  checkMatchingInputs,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  invalidEmails,
  validEmails,
  invalidCredentials,
  validCredentials,
} from '/cypress/fixtures/entry-form.json'

import { signUp } from '/cypress/fixtures/url.json'

const checkEmptyValidations = () => {
  cy.visit(signUp)
  checkEmptyValidation('name-input')
  checkEmptyValidation('email-input')
  checkEmptyValidation('password-input')
}

const checkInvalidEmailInputs = () => {
  cy.visit(signUp)
  invalidEmails.forEach(email => {
    cy.reload()
    checkInvalidInput({
      selector: 'email-input',
      input: email,
      errorMsg: 'Please enter a valid email',
    })
  })
}

const checkValidEmailInputs = () => {
  cy.visit(signUp)
  validEmails.forEach(email => {
    cy.reload()
    checkValidInput({
      selector: 'email-input',
      input: email,
    })
  })
}

const checkNameInputLength = () => {
  cy.visit(signUp)
  checkMinMaxInputLength({
    selector: 'name-input',
    min: {
      length: 2,
      errorMsg: 'Name must be atleast 2 characters long',
    },
  })
}

const checkPasswordsMatch = () => {
  cy.visit(signUp)
  checkMatchingInputs({
    inputSelector: 'password-input',
    confirmInputSelector: 'confirm-password-input',
    missMatchMsg: 'The passwords doesn\'t match',
  })
}

describe('Sign Up Form Validations', () => {
  it('Checks empty input validations', checkEmptyValidations)
  it('Checks invalid email errors', checkInvalidEmailInputs)
  it('Checks valid emails', checkValidEmailInputs)
  it('Checks length requirement for name input', checkNameInputLength)
  it('Checks password matching', checkPasswordsMatch)
})