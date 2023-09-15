/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://backoffice-stg.mobfleet.com.br');
})

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () => {
        cy.get('#mui-1').type('administrador@4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

        cy.get('.css-8suoyd > :nth-child(1) > .MuiBox-root > div > span').should('contain', 'Placa')
    });

    it.only('Deve exibir uma mensagem de erro ao inserir email invalido', () => {
        cy.get('#mui-1').type('admr4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

        cy.get('[data-cy="loginError"] > span').should('contain', 'Por favor verifique seu email e/ou senha e tente novamente.')
    });


    it('Deve exibir uma mensagem de erro ao inserir email ou senha invalidos ', () => {
        cy.get('#mui-1').type('admr@4code.dev')
        cy.get('#mui-2').type('Default2012*')
        cy.get('[data-cy="submit"]').click()

        cy.get('[data-cy="loginError"] > span').should('contain', 'Por favor verifique seu email e/ou senha e tente novamente.')
    });

})