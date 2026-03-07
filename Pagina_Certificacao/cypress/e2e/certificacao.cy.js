Cypress.on('uncaught:exception', () => {
  return false
})

describe('Página Certificação', () => {


  it('Deve carregar a página de certificação com sucesso', () => {
    // DADO QUE acesso a URL de certificação
    cy.visit('https://qualidade.apprbs.com.br/certificacao');

    // ENTÃO a página deve ser carregada corretamente
    cy.url().should('include', '/certificacao');
    cy.get('body').should('be.visible');
  });

  it('Ao clicar no botão Quero me certificar, deve redirecionar para o site da Rubeus', () => {
    // DADO QUE estou na página de certificação
    cy.visit('https://qualidade.apprbs.com.br/certificacao');

    // QUANDO clico no botão "Quero me certificar"
    // Removemos o 'target' para garantir que o redirecionamento ocorra na mesma aba
    cy.contains('Quero me certificar')
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click();

    // ENTÃO a URL deve mudar para o domínio da Rubeus, comprovando a ação do botão
    cy.url().should('include', 'rubeus.com.br');
  });


   it('Deve redirecionar para a página de dados ao clicar em Saiba Mais', () => {
    // DADO QUE acessei a página inicial
    cy.visit('https://qualidade.apprbs.com.br/certificacao');

    // QUANDO clico no botão "Saiba Mais"
    // Dica: usamos .contains() para buscar pelo texto do botão
    cy.contains('Saiba Mais').click();

    // ENTÃO sou redirecionado a uma página com os dados
    // Validamos se a URL agora contém o caminho esperado 
    cy.url().should('include', '/dados');

    // OPCIONAL: Validar se um elemento específico da nova página apareceu
    cy.get('h1').should('contain', 'Página de Dados');
  });

    
})


  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao'); 
  });

  it('Cenário 1: Envio com sucesso (Dados Válidos)', () => {
    cy.get('input[name="nome"]').type('Ari Koike');
    cy.get('input[name="telefone"]').type('11999999999');
    cy.get('input[name="email"]').type('ari@email.com');
    
    cy.get('button[type="submit"]').click();

    // Valida se apareceu mensagem de sucesso ou redirecionou
    cy.contains('Enviado com sucesso').should('be.visible');
  });

  it('Cenário 2: Validar campos obrigatórios vazios', () => {
    cy.get('button[type="submit"]').click();

    // Verifica se o navegador ou o sistema exibiu alertas de erro
    cy.contains('O nome é obrigatório').should('be.visible');
    cy.contains('E-mail inválido').should('be.visible');
  });

  it('Cenário 3: Validar formato de e-mail inválido', () => {
    cy.get('input[name="nome"]').type('Ari');
    cy.get('input[name="email"]').type('email_errado.com'); // Sem @
    
    cy.get('button[type="submit"]').click();

    // O Cypress pode validar mensagens nativas do HTML5 ou do seu framework
    cy.get('input[name="email"]:invalid').should('have.length', 1);
  });

  it('Cenário 4: Validar limite de caracteres no telefone', () => {
    // Testa se o campo aceita apenas números ou se tem máscara
    const telLongo = '1234567890123@bs45';
    cy.get('input[name="telefone"]').type(telLongo);
    
    // Verifica se o campo truncou o valor (ex: limite de 11 dígitos)
    cy.get('input[name="telefone"]').should('not.have.value', telLongo);
  });