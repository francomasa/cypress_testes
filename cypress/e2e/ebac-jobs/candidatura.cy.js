/// <reference types="cypress" />

describe('Teste para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    })

    it('Deve levar o usuario ate o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve peencher o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"').type('Franco Massaccesi')
        cy.get('input[name="email"').type('franco@gmail.com')
        cy.get('input[name="telefone"').type('51997413856')
        cy.get('input[name="endereco"').type('jose velho 78')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
        // cy.on('uncaught:exception', (err, runnable) => {
        //     // returning false here prevents Cypress from failing the test
        //     // if the error message includes "Failed to fetch"
        //     if (err.message.includes('Failed to fetch')) {
        //         return false;
        //     }
        //     // If it's another error, let Cypress fail the test
        //     return true;
        //     });
    })

})