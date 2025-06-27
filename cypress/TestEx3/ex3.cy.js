import LoginPage from "../Pages/loginpage";
import TransactionPage from "../Pages/transaction";

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Ex3 tests Full', () => {

    it('Visualizar Historico de transação', () =>{
     
     //login user   
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser()

        transactionPage.newTransition("2", "Compras")
        transactionPage.CHTransition()

    })


        it.only('Visualizar Historico sem transações', () =>{
     
     //login user   
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser()
        transactionPage.noTransition()



    })


}) 