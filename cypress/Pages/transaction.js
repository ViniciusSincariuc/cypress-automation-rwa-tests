class transactionPage{
    
    newTransition(valor, descricão){
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get("[data-test='users-list']").should('be.visible')
        cy.get(".css-ewioc5-MuiTypography-root").eq(1).click()
        cy.get('#amount').type(valor)
        cy.get('#transaction-create-description-input').type(descricão)
        cy.get("[data-test='transaction-create-submit-payment']").click()
        
    }

    CHTransition(valor, descricão){
            cy.get("[data-test='new-transaction-return-to-transactions']").click()
            cy.get("[role='grid']").should('be.visible')
            //cy.get(".TransactionItem-paper").should('contain',valor, descricão).click()
            //cy.contains(".TransactionItem-paper", `${valor} ${descricão}`).click()

    }

    noTransition(){
        cy.get('[data-test="transaction-list-filter-date-range-button"]').should('be.visible').click()
        cy.get("[data-date='2025-06-28']").should('be.visible').click()
        cy.get("[data-date='2025-06-30']").click()
        cy.get("[data-test='empty-list-header']").should('contain', 'No Transactions')

    }

}
let valor;
let descricão;
export default transactionPage