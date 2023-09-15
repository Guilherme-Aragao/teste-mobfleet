/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://backoffice-stg.mobfleet.com.br');
    cy.get('#mui-1').type('administrador@4code.dev')
    cy.get('#mui-2').type('Default2012*')
    cy.get('[data-cy="submit"]').click()
})

context('Funcionalidade Login', () =>{

    it('Cadastrar Veículo', () => {
    cy.get('[class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ag30nc"]').click()
    cy.get('[href="/vehicles"]').click()
    cy.get('[data-cy="entityCreateButton"]').click()
    cy.get('#vehicle-licensePlate').type('dsfdsfdsf')
    cy.get('#vehicle-chassis').type('ajdnfiuwenf')
    cy.get('#vehicle-renavam').type('kdfnisdnfik')
    cy.get('#mui-17').click().select('[class="MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-1x7oc0z"]')

    });
})