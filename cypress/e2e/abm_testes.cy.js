describe('Debe renderizar corretamente', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('.contato').should('have.length', 3)

        cy.get('input[placeholder="Nome"').type('Franco Massaccesi')
        cy.get('input[placeholder="E-mail"').type('franco@gmail.com')
        cy.get('input[placeholder="Telefone"').type('51997413856')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 4)

        cy.screenshot('tela-agregar-novo-contato')
    })

    it('Deve eliminar um contato', () => {
        cy.get('.delete').last().click()
        cy.get('.contato').should('have.length', 3  )
        cy.screenshot('tela-eliminar-contato')
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"').clear().type('Gian Souza')
        cy.get('input[placeholder="E-mail"').clear().type('giansouza@ebac.com.br')
        cy.get('input[placeholder="Telefone"').clear().type('11912345678')

        cy.get('input[placeholder="Nome"').should('have.value', 'Gian Souza'); 
        cy.get('input[placeholder="E-mail"').should('have.value', 'giansouza@ebac.com.br')
        cy.get('input[placeholder="Telefone"').should('have.value', '11912345678')

        cy.get('.alterar').click()
        cy.get('.contato').should('have.length', 3)
        cy.get('.adicionar').should('exist');
        cy.screenshot('tela-editar-contato')
    })
})