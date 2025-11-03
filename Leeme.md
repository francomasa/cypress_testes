Na pasta do projeto inicializamos 
$ npm init --yes

//instalar o cypress
$ npm install --save-dev cypress@12.6.0

// para correr os testes no Cypress com video
$ npm run cypress open

// para correr os testes sem videos
$ npm run cypress run

//instalar a extenção Mochawesome
npm install --save-dev mochawesome

//Para crear relatorios configurar o arquivo 
//cypress.config.js adicionar o reporter

    reporter: 'mochawesome',
    reporterOptions: {
        retortDir: 'cypress/relatorio',
        overwrite: true,
        html: true,
        json: false,
        timestamp: 'ddmmyyyy_HHMMss'
    }

//executar no terminal para gerar relatorio
$ npm run cypress run --reporter mochawesome