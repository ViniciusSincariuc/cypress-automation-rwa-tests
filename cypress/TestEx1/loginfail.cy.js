
const wrongUser = {

    userWrong: "Test123",
    passwordWrong: "1234"

}

describe('Ex 1 Login Fail test', () => {
  it('LoginFail', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type(wrongUser.userWrong)
    cy.get('#password').type(wrongUser.passwordWrong)
    cy.get('[data-test="signin-submit"]').click()
    cy.get("[data-test='signin-error'][role='alert']").should('be.visible')
  })
})