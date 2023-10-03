import { dashboard } from '/cypress/fixtures/url.json'
import { validCredentials } from '/cypress/fixtures/entry-form/login.json'
import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

import {
  checkInputValue,
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkRequiredInputCount,
  checkMinMaxInputLength,
} from '/cypress/e2e/helpers/inputValidations.cy.js'


import {
  invalidEmails,
  validEmails,
} from '/cypress/fixtures/entry-form/emails.json'

// helper function to visit sign-up page and alias form input fields
const updateFormInit = (userIndex = 0) => {
  loginUserWithIndex(userIndex)
  cy.visit(dashboard.profile.myProfile)
  cy.get('[data-cy="name"]').find('[data-cy="input"]').as('nameInputField')
  cy.get('[data-cy="email"]').find('[data-cy="input"]').as('emailInputField')
  cy.get('[data-cy="phone"]').find('[data-cy="input"]').as('phoneInputField')
}

const clearForm = () => {
  cy.get('@nameInputField').clear()
  cy.get('@emailInputField').clear()
  cy.get('@phoneInputField').clear()
}


const checkCurrentUserDetails = () => {
  const userIndex = Math.floor(Math.random() * validCredentials.length)
  updateFormInit(userIndex)
  const { name, email, phone } = validCredentials[userIndex]
  checkInputValue({
    inputSelector: 'name',
    value: name,
  })
  checkInputValue({
    inputSelector: 'email',
    value: email,
  })
  checkInputValue({
    inputSelector: 'phone',
    value: phone,
  }) 
}

const checkEmptyValidations = () => {
  updateFormInit()
  clearForm()
  checkEmptyValidation('name')
  checkEmptyValidation('email')
}

const checkRequiredFields = () => {
  updateFormInit()
  clearForm()
  checkRequiredInputCount({
    submitSelector: 'save-btn',
    requiredInputsCount: 2,
  })
}

const checkNameInputLength = () => {
  updateFormInit()
  clearForm()
  checkMinMaxInputLength({
    selector: 'name',
    min: {
      length: 2,
      errorMsg: 'Name must be atleast 2 characters long',
    },
  })
}

const checkInvalidEmailInputs = () => {
  updateFormInit()
  invalidEmails.forEach(email => {
    cy.reload()
    clearForm()
    checkInvalidInput({
      selector: 'email',
      input: email,
      errorMsg: 'Please enter a valid email',
    })
  })
}

const checkValidEmailInputs = () => {
  updateFormInit()
  validEmails.forEach(email => {
    cy.reload()
    clearForm()
    checkValidInput({
      selector: 'email',
      input: email,
    })
  })
}

describe('User Details', () => {
  it('Checks current user details', checkCurrentUserDetails)
})

describe('User Update Validations', () => {
  it('Checks empty input validations', checkEmptyValidations)
  it('Checks required fields', checkRequiredFields)
  it('Checks length requirement for name input', checkNameInputLength)
  it('Checks invalid email errors', checkInvalidEmailInputs)
  it('Checks valid emails', checkValidEmailInputs)
})

