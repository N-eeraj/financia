import { home, login, signUp, dashboard } from '/cypress/fixtures/url.json'

const navigateFromHomeToLoginThenToSignUp = () => {
  cy.visit(home)
  cy.get('button[data-cy="login-btn"]').click()
  cy.wait(500)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(login)
  })
  cy.get('button[data-cy="segue-link"]').click()
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(signUp)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(home)
  })
}

const navigateFromHomeToSignUpThenToLogin = () => {
  cy.visit(home)
  cy.get('button[data-cy="sign-up-btn"]').click()
  cy.wait(500)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(signUp)
  })
  cy.get('button[data-cy="segue-link"]').click()
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(login)
  })
  cy.wait(500)
  cy.go('back')
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(home)
  })
}

const checkPageNotFound = () => {
  cy.visit('/invalid-route')
  cy.get('[data-cy="page-not-found-message"]').should('contain.text', 'We couldn\'t find the page that you\'re looking for')
  cy.get('[data-cy="back-to-home-button"]').click()
  cy.wait(500)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(home)
  })
}

const checkDashboardEntry = () => {
  cy.visit(dashboard.home)
  cy.location().should(({ pathname }) => {
    expect(pathname).to.equal(login)
  })
}


describe('Home Navigation Checks', () => {
  it('Checks navigations from Home & Login', navigateFromHomeToLoginThenToSignUp)
  it('Checks navigations from Home & Sign Up', navigateFromHomeToSignUpThenToLogin)
  it('Checks not found page', checkPageNotFound)
  it('Checks dashboard entry without login', checkDashboardEntry)
})
