/// <reference types = "cypress"/>
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Cadastro de Novo Usuario', () =>{
    
    beforeEach(() => {
        cy.visit('https://backoffice-stg.mobfleet.com.br');
        cy.login('administrador@4code.dev', 'Default2012*')
    })
    

    it('Deve completar o cadastro do novo usuário com sucesso', () => {

        cy.get('[class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ag30nc"]').click() 
        cy.get('[href="/account"] > span').click()
        cy.get('.MuiButton-startIcon > [data-testid="AddIcon"]').click()
 
    });

});