
const register = {

  firstName: "Sushi",
  lastName: "Roberto",
  userName: "sushizinho",
  password: "1234"


}

describe('Ex 1 Register Test', () => {

  it('Register User ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get("[name='firstName']").type(register.firstName)
    cy.get("[name='lastName']").type(register.lastName)
    cy.get("[name='username']").type(register.userName)
    cy.get("[name='password']").type(register.password)
    cy.get("[name='confirmPassword']").type(register.password)
    cy.get("[type='submit']").click()
  })
})