
const register = {

  firstName: "Sushi",
  lastName: "Roberto",
  userName: "sushizinho",
  password: "1234",
  passwordWrong: "12"


}

describe('Ex 1 RegisterFail Test', () => {

  it('fail Register ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get("[type='submit']").should('be.visible')
    cy.get("[name='firstName']").click()
    cy.get("[name='lastName']").click()
    cy.get("[name='username']").click()
    cy.get("[name='password']").click()
    cy.get("[name='confirmPassword']").click()
    cy.get('.App-root').click()
    cy.get('#firstName-helper-text').should('contain', 'First Name is required')
    cy.get('#lastName-helper-text').should('contain', 'Last Name is required')
    cy.get('#username-helper-text').should('contain', 'Username is required')
    cy.get("#password-helper-text").should('contain', 'Enter your password')
    cy.get("#confirmPassword-helper-text").should('contain', 'Confirm your password')
    cy.get("[type='submit']").should('be.visible')
    cy.get("[type='submit']").should('be.disabled')
  })
})