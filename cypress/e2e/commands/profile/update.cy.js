import { dashboard } from '/cypress/fixtures/url.json'
import { validCredentials } from '/cypress/fixtures/entry-form/login.json'
import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'
import {
  checkInputValue,
  checkEmptyValidation,
  checkRequiredInputCount,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

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

describe('User Update', () => {
  it('Checks current user details', checkCurrentUserDetails)
  it('Checks empty input validations', checkEmptyValidations)
  it('Checks required fields', checkRequiredFields)
})
