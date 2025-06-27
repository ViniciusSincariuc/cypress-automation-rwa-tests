# 🧪 Cypress Automation - Real World App

Este repositório contém meus testes automatizados utilizando o [Cypress Real-World App](https://github.com/cypress-io/cypress-realworld-app), um projeto full-stack voltado à prática de testes End-to-End com Cypress.

---

## ⚙️ Pré-requisitos

Para rodar este projeto corretamente, é necessário ter os seguintes itens instalados:

### 
- [Node.js](https://nodejs.org/) (versão recomendada no arquivo `.node-version`)
- [Yarn Classic](https://classic.yarnpkg.com/lang/en/docs/install/) (versão 1.x)


## Installation 
```bash
npm install
```
>🚩 **NOTE**
>
> É necessario ter o **node** instalado


Verifique a instalação:
```bash
node -v
```

Após instalar o Node.js, instale o Yarn Classic globalmente:

```bash
npm install yarn@latest -g
```
>🚩 **NOTE**
>
> É necessario ter o **Yarn** instalado


Verifique a versão instalada:

```bash
yarn -v
```


⚠️ ## Este projeto não é compatível com Yarn Modern (v2+)
---



📦 Instalação do Projeto
1. Clone o repositório original do Real-World App (caso ainda não tenha):
   
   ```bash
   git clone https://github.com/cypress-io/cypress-realworld-app
   cd cypress-realworld-app
    ```

   💡 Se estiver usando Mac com chip M1/M2:
   ```bash
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
    ```


## ▶️ Como rodar o projeto

1. Instale as dependências:
   ```bash
   yarn

2.Inicie o app (frontend + backend):
```bash
yarn dev
```
O app abrirá em:

Frontend: http://localhost:3000

Backend: http://localhost:3001


3. Em outro terminal, abra a interface do Cypress:
```bash
yarn cypress:open
```




## 🚀 O que foi desenvolvido

Este projeto inclui a criação de testes automatizados para os fluxos de **login** e **cadastro de usuários**, com foco na validação de respostas corretas e na exibição de mensagens de erro em casos inválidos.

- ✅ Login com credenciais válidas  
- ❌ Login com credenciais inválidas  
- ✅ Registro de novo usuário com dados completos  
- ❌ Registro com dados incompletos  

---

## 📂 Estrutura dos Testes

Os testes estão organizados na pasta `app/cypress/TestEx1`, com um arquivo `.cy.js` para cada cenário:

app/cypress/TestEx1/

      ├── loginsucess.cy.js # Login com sucesso
      ├── loginfail.cy.js # Login com falha (credenciais inválidas)
      ├── registersucess.cy.js # Cadastro com sucesso
      └── registerfail.cy.js # Cadastro com dados incompletos


---

💡 Sobre
Este projeto foi desenvolvido como parte do meu aprendizado contínuo em automação de testes. Estou aplicando na prática os conhecimentos que venho adquirindo por meio de projetos reais e controlados.

📎 Referência
Este projeto é baseado no Cypress Real-World App, mantido oficialmente pela equipe do Cypress como um ambiente de demonstração e boas práticas para automação.