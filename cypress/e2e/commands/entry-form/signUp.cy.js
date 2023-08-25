import {
  checkEmptyValidation,
  checkInvalidInput,
  checkValidInput,
  checkEmptyFormSubmit,
} from '/cypress/e2e/helpers/inputValidations.cy.js'

import { signUp } from '/cypress/fixtures/url.json'

const signUpFormValidations = () => {
  cy.visit(signUp)
}

const signUptests = () => {
  it('Checks sign up form validations', signUpFormValidations)
}

export default signUptests