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
} from '/cypress/fixtures/entry-form/sign-up.json'

import { signUp, login, dashboard } from '/cypress/fixtures/url.json'


// helper function to visit sign-up page and alias form input fields
const signUpFormInit = () => {
  cy.visit(signUp)
  cy.get('[data-cy="name-input"]').find('[data-cy="input"]').as('nameInputField')
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').as('emailInputField')
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').as('passwordInputField')
  cy.get('[data-cy="confirm-password-input"]').find('[data-cy="input"]').as('confirmPasswordInputField')
}

// helper function to fill form with provided values
const fillForm = ({ name, email, password }) => {
  cy.get('@nameInputField').type(name)
  cy.get('@emailInputField').type(email)
  cy.get('@passwordInputField').type(password)
  cy.get('@confirmPasswordInputField').type(password)
  cy.get('button[data-cy="sign-up-button"]').click()
}

const clearForm = () => {
  cy.get('@nameInputField').clear()
  cy.get('@emailInputField').clear()
  cy.get('@passwordInputField').clear()
  cy.get('@confirmPasswordInputField').clear()
}

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
  signUpFormInit()

  existingUserDetails.forEach(formInputs => {
    fillForm(formInputs)
    cy.get('[data-testid="toast-content"]').last().should('have.text', "Email id already exists")
    clearForm()
  })
}

const checkSignUpLogout = () => {
  signUpFormInit()

  newUserDetails.forEach(formInputs => {
    fillForm(formInputs)
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(dashboard.home)
    })
    cy.get('[data-cy="profile-button"]').as('profile-button')
    cy.get('@profile-button').find('[data-cy="user-name"]').should('have.text', formInputs.name)
    cy.get('@profile-button').click()
    cy.get('[data-cy="profile-action"]').contains('Logout').click()
    cy.wait(500)
    cy.location().should(({ href }) => {
      expect(href).to.contains(login)
    })
    cy.get('button[data-cy="segue-link"]').click()
  })
}

const checkDuplicateSignUp = () => {
  signUpFormInit()

  newUserDetails.forEach(formInputs => {
    fillForm(formInputs)
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
    cy.get('button[data-cy="segue-link"]').click()

    fillForm(formInputs)
    cy.get('[data-testid="toast-content"]').last().should('have.text', "Email id already exists")
    clearForm()
  })
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
  it('Checks valid sign up', checkSignUpLogout)
  it('Checks duplicate sign up', checkDuplicateSignUp)
})
