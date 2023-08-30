import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkMinMaxInputLength,
  checkMatchingInputs,
  checkRequiredInputCount,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  invalidEmails,
  validEmails,
} from '/cypress/fixtures/entry-form/emails.json'

import {
  existingUserDetails,
  newUserDetails,
} from '/cypress/fixtures/entry-form/signUp.json'

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

const checkRequiredInputs = () => {
  cy.visit(signUp)
  checkRequiredInputCount({
    submitSelector: 'sign-up-button',
    requiredInputsCount: 3,
  })
}

const checkInvalidSignUps = () => {
  cy.visit(signUp)
  existingUserDetails.forEach(({ name, email, password }) => {
    cy.get('[data-cy="name-input"]').find('[data-cy="input"]').type(name)
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').type(email)
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').type(password)
    cy.get('[data-cy="confirm-password-input"]').find('[data-cy="input"]').type(password)
    cy.get('button[data-cy="sign-up-button"]').click()
    cy.get('[data-testid="toast-content"]').last().should('have.text', "Email id already exists")
    cy.get('[data-cy="name-input"]').find('[data-cy="input"]').clear()
    cy.get('[data-cy="email-input"]').find('[data-cy="input"]').clear()
    cy.get('[data-cy="password-input"]').find('[data-cy="input"]').clear()
    cy.get('[data-cy="confirm-password-input"]').find('[data-cy="input"]').clear()
  })
}

const checkSignUpLogout = () => {
  cy.visit(signUp)
}


describe('Sign Up Form Validations', () => {
  it('Checks empty input validations', checkEmptyValidations)
  it('Checks invalid email errors', checkInvalidEmailInputs)
  it('Checks valid emails', checkValidEmailInputs)
  it('Checks length requirement for name input', checkNameInputLength)
  it('Checks password matching', checkPasswordsMatch)
  it('Checks sign-up form validations with all input combinations', checkRequiredInputs)
})

describe('Sign Up Attempts', () => {
  it('Checks invalid sign ups', checkInvalidSignUps)
  // it('Checks valid sign up', checkSignUpLogout)
})
