Cypress.on('uncaught:exception', () => {
  return false
})

describe('Página Certificação', () => {

  it('Deve carregar a página de certificação', () => {

    cy.visit('https://qualidade.apprbs.com.br/certificacao')

    // valida que a página carregou
    cy.url().should('include', '/certificacao')

    // valida que o botão existe
    cy.contains('Quero me certificar')
      .should('be.visible')

  })

  it('Deve clicar no botão e redirecionar para o site da Rubeus', () => {

    cy.visit('https://qualidade.apprbs.com.br/certificacao')

    cy.contains('Quero me certificar')
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click()

    cy.url().should('include', 'rubeus.com.br')

  })

  it('Deve carregar a página de certificação', () => {

    cy.visit('https://qualidade.apprbs.com.br/certificacao')

    cy.url().should('include', 'certificacao')

    cy.contains('Saiba mais')
      .should('be.visible')

  })

  it('Deve rolar a página ao clicar em Saiba mais', () => {

    cy.visit('https://qualidade.apprbs.com.br/certificacao')

    // pega posição inicial da página
    cy.window().its('scrollY').then((posicaoInicial) => {

      cy.contains('Saiba mais')
        .should('be.visible')
        .click()

      // espera um pouco para o scroll acontecer
      cy.wait(1000)

      // verifica se a página rolou
      cy.window().its('scrollY').should('be.greaterThan', posicaoInicial)

    })

  })

})