export const checkEmptyValidation = (selector) => {
  cy.get(`[data-cy="${selector}"]`).as('inputComponent')
  cy.get('@inputComponent').find('[data-cy="input"]').as('inputField')
  cy.get('@inputField').focus()
  cy.get('@inputField').blur()
  cy.get('@inputComponent').find('[data-cy="error-msg"]').should('have.text', 'This field is required')
}

export const checkInvalidInput = ({ selector, input, errorMsg }) => {
  cy.get(`[data-cy="${selector}"]`).as('inputComponent')
  cy.get('@inputComponent').find('[data-cy="input"]').as('inputField')
  cy.get('@inputField').type(input)
  cy.get('@inputField').blur()
  cy.get('@inputComponent').find('[data-cy="error-msg"]').should('have.text', errorMsg)
  cy.get('@inputField').clear()
  checkEmptyValidation(selector)
}

export const checkMinMaxInputLength = ({ selector, min, max }) => {
  cy.get(`[data-cy="${selector}"]`).as('inputComponent')
  cy.get('@inputComponent').find('[data-cy="input"]').as('inputField')
  if (min) {
    for (let inputLength = 1; inputLength <= min.length; inputLength++) {
      cy.get('@inputField').type('a')
      cy.get('@inputField').blur()
      if (inputLength < min.length)
        cy.get('@inputComponent').find('[data-cy="error-msg"]').should('have.text', min.errorMsg)
      else
        cy.get('@inputComponent').find('[data-cy="error-msg"]').should('not.exist')
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
        cy.get('@inputComponent').find('[data-cy="error-msg"]').should('have.text', max.errorMsg)
      else
        cy.get('@inputComponent').find('[data-cy="error-msg"]').should('not.exist')
    }
  }
}

export const checkValidInput = ({ selector, input }) => {
  cy.get(`[data-cy="${selector}"]`).as('inputComponent')
  cy.get('@inputComponent').find('[data-cy="input"]').as('inputField')
  cy.get('@inputField').type(input)
  cy.get('@inputField').blur()
  cy.get('@inputComponent').find('[data-cy="error-msg"]').should('not.exist')
  cy.get('@inputField').clear()
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
