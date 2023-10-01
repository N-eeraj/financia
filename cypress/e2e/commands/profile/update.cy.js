import { dashboard } from '/cypress/fixtures/url.json'
import { validCredentials } from '/cypress/fixtures/entry-form/login.json'
import { checkInputValue } from '/cypress/e2e/helpers/inputValidations.cy.js'
import { loginUserWithIndex } from '/cypress/e2e/helpers/login.cy.js'

const { myProfile } = dashboard.profile

const checkCurrentUserDetails = () => {
  const userIndex = Math.floor(Math.random() * validCredentials.length)
  loginUserWithIndex(userIndex)
  cy.visit(myProfile)
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

describe('User Update', () => {
  it('Checks current user details', checkCurrentUserDetails)
})
