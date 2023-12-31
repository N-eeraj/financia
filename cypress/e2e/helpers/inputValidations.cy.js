// function to alias input component & it's input field
const aliasInput = selector => {
  cy.get(`[data-cy="${selector}"]`).as('inputComponent')
  cy.get('@inputComponent').find('[data-cy="input"]').as('inputField')
}

// function to check input error message
const checkErrorMessage = errorMessage => cy.get('@inputComponent').find('[data-cy="error-msg"]').should('have.text', errorMessage)

// function to assert input has no error
const shouldHaveNoError = () => cy.get('@inputComponent').find('[data-cy="error-msg"]').should('not.exist')

export const checkEmptyValidation = (selector) => {
  aliasInput(selector)
  cy.get('@inputField').focus()
  cy.get('@inputField').blur()
  checkErrorMessage('This field is required')
}

export const checkInvalidInput = ({ selector, input, errorMsg, emptyCheck = true }) => {
  aliasInput(selector)
  cy.get('@inputField').type(input)
  cy.get('@inputField').blur()
  checkErrorMessage(errorMsg)
  cy.get('@inputField').clear()
  if (emptyCheck)
    checkEmptyValidation(selector)
}

export const checkMinMaxInputLength = ({ selector, min, max }) => {
  aliasInput(selector)
  if (min) {
    for (let inputLength = 1; inputLength <= min.length; inputLength++) {
      cy.get('@inputField').type('a')
      cy.get('@inputField').blur()
      if (inputLength < min.length)
        checkErrorMessage(min.errorMsg)
      else
        shouldHaveNoError()
    }
  }
  if (max) {
    cy.get('@inputField').clear()
    const maxInput = Array.from({ length: max.length - 1 }, () => 'a').join('')
    cy.get('@inputField').type(maxInput)
    for (let inputLength = max.length; inputLength <= max.length + 2; inputLength++) {
      cy.get('@inputField').type('a')
      cy.get('@inputField').blur()
      if (inputLength > max.length)
        checkErrorMessage(max.errorMsg)
      else
        shouldHaveNoError()
    }
  }
}

export const checkValidInput = ({ selector, input, emptyCheck = true }) => {
  aliasInput(selector)
  cy.get('@inputField').type(input)
  cy.get('@inputField').blur()
  shouldHaveNoError()
  cy.get('@inputField').clear()
  if (emptyCheck)
    checkEmptyValidation(selector)
}

export const checkMatchingInputs = ({ inputSelector, confirmInputSelector, missMatchMsg }) => {
  cy.get(`[data-cy="${inputSelector}"]`).find('[data-cy="input"]').as('inputField')
  cy.get(`[data-cy="${confirmInputSelector}"]`).as('confirmInputComponent')
  cy.get('@confirmInputComponent').find('[data-cy="input"]').as('confirmInputField')

  // check inputs not matching error
  cy.get('@inputField').type('12345678')
  cy.get('@confirmInputField').type('87654321')
  cy.get('@confirmInputField').blur()
  cy.get('@confirmInputComponent').find('[data-cy="error-msg"]').should('have.text', missMatchMsg)

  // check matching inputs
  cy.get('@inputField').clear()
  cy.get('@confirmInputField').clear()
  cy.get('@inputField').type('12345678')
  cy.get('@confirmInputField').type('12345678')
  cy.get('@confirmInputField').blur()
  cy.get('@confirmInputComponent').then(($el) => {
    if ($el.find('[data-cy="error-msg"]').length)
      cy.get('@confirmInputComponent').find('[data-cy="error-msg"]').should('not.have.text', missMatchMsg)
    else
      cy.get('@confirmInputComponent').find('[data-cy="error-msg"]').should('not.exist')
  })
}

export const checkEmptyFormSubmit = ({ inputSelectors, validInputs, submitSelector }) => {
  if (inputSelectors.length !== validInputs.length)
    throw 'Inputs length mismatch'

  for (let i = 0; i < 2 ** inputSelectors.length; i++) {
    cy.reload()
    const combination = i.toString(2).padStart(inputSelectors.length, '0')
    for (let j in combination) {
      if (Number(combination[j]))
        cy.get(`[data-cy="${inputSelectors[j]}"]`).type(validInputs[j])
    }
    cy.get(`button[data-cy="${submitSelector}"]`).click()

    for (let j in combination) {
      if (!Number(combination[j]))
        cy.get(`[data-cy="${inputSelectors[j]}"]`).find('[data-cy="error-msg"]').should('exist')
      else
        cy.get(`[data-cy="${inputSelectors[j]}"]`).find('[data-cy="error-msg"]').should('not.exist')
    }
  }
}

export const checkRequiredInputCount = ({ submitSelector, requiredInputsCount }) => {
  cy.get(`button[data-cy="${submitSelector}"]`).click()
  cy.get('[data-cy="error-msg"]').should('have.length', requiredInputsCount)
}

export const checkInputValue = ({ inputSelector, value }) => {
  cy.get(`[data-cy="${inputSelector}"]`).find('[data-cy="input"]').should('have.value', value || '')
}
