/// <reference types="cypress" />

describe('Teste para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    })

    it('Deve renderizar 4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

     it('Deve filtrar por Fullstack com enter', () => {
        // fazer uma filtragem por fullstatck com o comando enter no fim
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)

    })

    it('Deve filtrar por Fullstack apertando no botão pesquisar', () => {
        // fazer uma filtragem por fullstatck clickando no botão pesquisar
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})