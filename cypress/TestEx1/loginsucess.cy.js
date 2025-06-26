

const loginSucess = {
    userName: "Heath93",
    passwordSucess: "s3cret"

    }

describe('Ex 1 loginSucess Tests', () => {

  it('Login Sucess', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type(loginSucess.userName)
    cy.get('#password').type(loginSucess.passwordSucess)
    cy.get('[data-test="signin-submit"]').click()
    cy.get("[data-test='main']").should('be.visible')
  })
})