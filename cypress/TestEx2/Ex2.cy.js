

const loginSucess = {
    userName: "Heath93",
    passwordSucess: "s3cret"

    }

describe('Exercicio 2', () => {

  it('Transferencia sucess', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#username').type(loginSucess.userName)
        cy.get('#password').type(loginSucess.passwordSucess)
        cy.get('[data-test="signin-submit"]').click()
        cy.get("[data-test='main']").should('be.visible')

        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get("[data-test='users-list']").should('be.visible')
        cy.get(".css-ewioc5-MuiTypography-root").eq(1).click()
        cy.get('#amount').type("1200")
        cy.get('#transaction-create-description-input').type("Sucess")
        cy.get("[data-test='transaction-create-submit-payment']").click()
  })


    it('Transferencia Fail', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#username').type(loginSucess.userName)
        cy.get('#password').type(loginSucess.passwordSucess)
        cy.get('[data-test="signin-submit"]').click()
        cy.get("[data-test='main']").should('be.visible')

        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get("[data-test='users-list']").should('be.visible')
        cy.get(".css-ewioc5-MuiTypography-root").eq(1).click()
        cy.get('#amount').type("0")
        cy.get('#transaction-create-description-input').type("fail")
        cy.get("[data-test='transaction-create-submit-payment']").click()
  })

})