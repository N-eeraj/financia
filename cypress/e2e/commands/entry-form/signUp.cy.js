import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkMinMaxInputLength,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import {
  invalidEmails,
  validEmails,
  invalidCredentials,
  validCredentials,
} from '/cypress/fixtures/entry-form.json'

import { signUp } from '/cypress/fixtures/url.json'

const signUpFormValidations = () => {
  cy.visit(signUp)

  // empty field validation
  checkEmptyValidation('name-input')
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

  // check name length
  checkMinMaxInputLength({
    selector: 'name-input',
    min: {
      length: 2,
      errorMsg: 'Name must be atleast 2 characters long',
    },
  })
}

const signUpTests = () => {
  it('Checks sign up form validations', signUpFormValidations)
}

export default signUpTests
