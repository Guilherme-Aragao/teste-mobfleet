/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://backoffice-stg.mobfleet.com.br');
})

context('Funcionalidade Login', () =>{

<<<<<<< HEAD
    it('Deve fazer login com sucesso', () => {
=======
    it('Deve fazer login com sucesso - Administrador', () => {
>>>>>>> c9c7b26a95c7490c39ce4a9791696d098a3e742d
        cy.get('#mui-1').type('administrador@4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

    });

    it('Deve fazer login com sucesso - Gestor', () => {
        cy.get('#mui-1').type('gestor@4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

    });

    it('Deve fazer login com sucesso - Cliente', () => {
        cy.get('#mui-1').type('cliente@4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

    });


    it('Deve exibir uma mensagem de erro ao inserir email invalido', () => {
        cy.get('#mui-1').type('admr4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

        cy.get('#mui-1-helper-text').should('contain', 'E-mail inválido.')
    });


    it('Deve exibir uma mensagem de erro ao inserir email ou senha invalidos ', () => {
        cy.get('#mui-1').type('admr@4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

        cy.get('[data-cy="loginError"] > span').should('contain', 'Por favor verifique seu email e/ou senha e tente novamente.')
    });

})