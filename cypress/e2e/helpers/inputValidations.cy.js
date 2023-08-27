export const checkEmptyValidation = (selector) => {
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').focus()
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').blur()
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('have.text', 'This field is required')
}

export const checkInvalidInput = ({ selector, input, errorMsg }) => {
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').type(input)
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').blur()
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('have.text', errorMsg)
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').clear()
  checkEmptyValidation(selector)
}

export const checkMinMaxInputLength = ({ selector, min, max }) => {
  if (min) {
    for (let inputLength = 1; inputLength <= min.length; inputLength++) {
      cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').type('a')
      cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').blur()
      if (inputLength < min.length)
        cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('have.text', min.errorMsg)
      else
        cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('not.exist')
    }
  }
  if (max) {
    cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').clear()
    const maxInput = Array.from({ length: max.length - 1 }, () => 'a').join('')
    cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').type(maxInput)
    for (let inputLength = max.length; inputLength <= max.length + 2; inputLength++) {
      cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').type('a')
      cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').blur()
      if (inputLength > max.length)
        cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('have.text', max.errorMsg)
      else
        cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('not.exist')
    }
  }
}

export const checkValidInput = ({ selector, input }) => {
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').type(input)
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').blur()
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('not.exist')
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').clear()
  checkEmptyValidation(selector)
}

export const checkMatchingInputs = ({ inputSelector, confirmInputSelector, missMatchMsg }) => {
  // check inputs not matching error
  cy.get(`[data-cy="${inputSelector}"]`).find('[data-cy="input"]').type('12345678')
  cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="input"]').type('87654321')
  cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="input"]').blur()
  cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="error-msg"]').should('have.text', missMatchMsg)

  // check matching inputs
  cy.get(`[data-cy="${inputSelector}"]`).find('[data-cy="input"]').clear()
  cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="input"]').clear()
  cy.get(`[data-cy="${inputSelector}"]`).find('[data-cy="input"]').type('12345678')
  cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="input"]').type('12345678')
  cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="input"]').blur()
  cy.get(`[data-cy="${confirmInputSelector}"]`).then(($el) => {
    if ($el.find('[data-cy="error-msg"]').length)
      cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="error-msg"]').should('not.have.text', missMatchMsg)
    else
      cy.get(`[data-cy="${confirmInputSelector}"]`).find('[data-cy="error-msg"]').should('not.exist')
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
        cy.get(`[data-cy="${inputSelectors[j]}"]`).find('[data-cy="error-msg"]').should('have.text', 'This field is required')
      else
        cy.get(`[data-cy="${inputSelectors[j]}"]`).find('[data-cy="error-msg"]').should('not.exist')
    }
  }
}