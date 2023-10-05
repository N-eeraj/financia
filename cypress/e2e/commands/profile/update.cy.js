import { dashboard } from '/cypress/fixtures/url.json'
import { validCredentials } from '/cypress/fixtures/entry-form/login.json'
import { logoutUser } from '/cypress/e2e/helpers/login.cy.js'

import {
  loginUserWithIndex,
  loginUserWithCredentials
} from '/cypress/e2e/helpers/login.cy.js'

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

import {
  invalidPhoneNumbers,
  validPhoneNumbers,
} from '/cypress/fixtures/phone-numbers.json'

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

const checkInvalidPhoneNumberInputs = () => {
  updateFormInit()
  invalidPhoneNumbers.forEach(phoneNumber => {
    cy.reload()
    clearForm()
    checkInvalidInput({
      selector: 'phone',
      input: phoneNumber,
      errorMsg: 'Please enter a valid phone number',
      emptyCheck: false,
    })
  })
}

const checkValidPhoneNumberInputs = () => {
  updateFormInit()
  validPhoneNumbers.forEach(phoneNumber => {
    cy.reload()
    clearForm()
    checkValidInput({
      selector: 'phone',
      input: phoneNumber,
      emptyCheck: false,
    })
  })
}

const checkUserUpdate = () => {
  updateFormInit()
  clearForm()
  const name = 'New Admin'
  const email = 'new@email.com'
  const phone = '9876543210'
  cy.get('@nameInputField').type(name)
  cy.get('@emailInputField').type(email)
  cy.get('@phoneInputField').type(phone)
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
  cy.get('[data-cy="save-btn"]').click()
  cy.get('[data-cy="profile-button"]').find('[data-cy="user-name"]').should('have.text', name)
}

const checkUserSignInUpdate = () => {
  const { email: oldEmail, password } = validCredentials[Math.floor(Math.random() * validCredentials.length)]
  const newEmail = 'new@email.com'
  updateFormInit()
  cy.get('@emailInputField').clear()
  cy.get('@emailInputField').type(`${newEmail}{enter}`)
  cy.wait(500)
  logoutUser()
  loginUserWithCredentials({
    email: oldEmail,
    password
  })
  cy.get('[data-testid="toast-content"]').last().should('have.text', 'User Not Found')
  cy.get('[data-cy="email-input"]').find('[data-cy="input"]').clear()
  cy.get('[data-cy="password-input"]').find('[data-cy="input"]').clear()
  loginUserWithCredentials({
    email: newEmail,
    password
  })
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(dashboard.home)
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
  it('Checks invalid phone number errors', checkInvalidPhoneNumberInputs)
  it('Checks valid phone number', checkValidPhoneNumberInputs)
})

describe('Update User', () => {
  it('Checks user update', checkUserUpdate)
  it('Checks user sign in update', checkUserSignInUpdate)
})
