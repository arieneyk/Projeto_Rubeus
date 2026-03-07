describe('Site - Página Principal', () => {

  it('Deve carregar a página principal corretamente', () => {

    // DADO QUE acesso o site
    cy.visit('https://qualidade.apprbs.com.br/site');

    // ENTÃO a URL deve conter /site
    cy.url().should('include', '/site');

    // E o título Graduação deve estar visível
    cy.contains('Graduação', { matchCase: false }).should('be.visible');

  });


it('Deve validar que o botão Inscreva-se tem ação e redireciona corretamente', () => {
  // DADO QUE acesso o site
  cy.visit('https://qualidade.apprbs.com.br/site');

  // QUANDO clico no botão Inscreva-se
  // Usamos .invoke('removeAttr', 'target') caso o botão tente abrir em outra aba
  cy.contains('Inscreva', { matchCase: false })
    .should('be.visible')
    .invoke('removeAttr', 'target') 
    .click();

  // ENTÃO a URL deve mudar, confirmando que o botão teve ação
  // Ajuste o trecho '/inscricao' para uma palavra que apareça na URL de destino
  cy.url().should('not.eq', 'https://qualidade.apprbs.com.br/site'); 
  cy.url().should('include', '/inscricao'); 
});


  it('Deve validar erro ao tentar enviar newsletter vazia', () => {

    // DADO QUE acesso o site
    cy.visit('https://qualidade.apprbs.com.br/site');

    // QUANDO tento enviar o formulário sem preencher os campos
    cy.contains('Concluir', { matchCase: false }).click();

    // ENTÃO deve aparecer mensagem de erro
    cy.contains('base legal', { matchCase: false })
      .should('be.visible');

  });


  it('Deve permitir preenchimento dos campos da newsletter', () => {

    // DADO QUE acesso o site
    cy.visit('https://qualidade.apprbs.com.br/site');

    // QUANDO preencho os campos do formulário
    cy.get('input[name="nome"]').type('Teste Cypress');
    cy.get('input[name="email"]').type('teste@email.com');

    // ENTÃO os campos devem conter os valores digitados
    cy.get('input[name="nome"]').should('have.value', 'Teste Cypress');
    cy.get('input[name="email"]').should('have.value', 'teste@email.com');

  });


  it('Deve exibir os links das redes sociais', () => {

    // DADO QUE acesso o site
    cy.visit('https://qualidade.apprbs.com.br/site');

    // ENTÃO os ícones das redes sociais devem existir
    cy.get('a[href*="linkedin"]').should('exist');
    cy.get('a[href*="facebook"]').should('exist');
    cy.get('a[href*="instagram"]').should('exist');

  });

});