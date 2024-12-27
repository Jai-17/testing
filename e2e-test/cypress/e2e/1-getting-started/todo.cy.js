/// <reference types="cypress" />

describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://app.100xdevs.com')
  })

  it('is able to log in', () => {
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
    cy.contains('Log in to access paid content!').should('exist', { timeout: 10000 })
  })

})
