describe('Debe renderizar corretamente', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"').type('Franco Massaccesi')
        cy.get('input[placeholder="E-mail"').type('franco@gmail.com')
        cy.get('input[placeholder="Telefone"').type('51997413856')
        cy.get('.adicionar').click()

        cy.screenshot('tela-agregar-novo-contato')
    })

    it('Deve eliminar um contato', () => {
        cy.get('.delete').last().click()
        cy.screenshot('tela-eliminar-contato')
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"').clear().type('Gian Souza')
        cy.get('input[placeholder="E-mail"').clear().type('gian@ebac.com.br')
        cy.get('input[placeholder="Telefone"').clear().type('11912345678')
        cy.get('.alterar').click()

        cy.screenshot('tela-editar-contato')
    })
})