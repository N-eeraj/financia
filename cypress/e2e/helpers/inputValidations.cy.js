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

export const checkValidInput = ({ selector, input }) => {
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').type(input)
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').blur()
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="error-msg"]').should('not.exist')
  cy.get(`[data-cy="${selector}"]`).find('[data-cy="input"]').clear()
  checkEmptyValidation(selector)
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