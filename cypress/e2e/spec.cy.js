const URL = {
  login: '/login',
  signUp: '/sign-up',
}

const navigateFromHomeToLoginThenToSignUp = () => {
  cy.visit('/')
  cy.get('button').contains('Login').click()
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.login)
  })
  cy.contains("Don't have an account?").next('button').click()
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.signUp)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ href }) => {
    expect(href).to.contains('/')
  })
}

const navigateFromHomeToSignUpThenToLogin = () => {
  cy.visit('/')
  cy.get('button').contains('Sign Up').click()
  cy.wait(500)
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.signUp)
  })
  cy.contains("Already have an account?").next('button').click()
  cy.location().should(({ href }) => {
    expect(href).to.contains(URL.login)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ href }) => {
    expect(href).to.contains('/')
  })
}


describe('Home navigation checks', () => {
  it('Navigations from Home & Login', navigateFromHomeToLoginThenToSignUp)
  it('Navigations from Home & Sign Up', navigateFromHomeToSignUpThenToLogin)
})
