# Testes Automatizados 

Este repositório contém testes automatizados desenvolvidos para validar funcionalidades do site  nas páginas:

- Página de Certificação
- Página de Graduação

Os testes foram implementados utilizando **Cypress**, com o objetivo de simular o comportamento real do usuário e garantir que os principais fluxos da aplicação funcionem corretamente.

---

## Objetivo

O objetivo deste projeto é demonstrar habilidades em **Qualidade de Software (QA)** através de:

- Planejamento de cenários de teste utilizando **BDD (Behavior Driven Development)**
- Automação de testes **End-to-End (E2E)**
- Validação de fluxos críticos da aplicação
- Organização de testes automatizados em uma estrutura profissional

---

## Tecnologias utilizadas

- **Cypress** – Framework de automação de testes E2E  
- **JavaScript** – Linguagem utilizada nos testes  
- **Node.js / NPM** – Gerenciamento de dependências  
- **BDD (Dado / Quando / Então)** – Estrutura de cenários de teste  

---

## Estrutura do projeto

```
cypress
 └─ e2e
     ├─ certificacao.cy.js
   

cypress
 └─ e2e
     ├─ graducacao.cy.js
   
```

Cada arquivo contém cenários de dos respectivos sites

---

## Cenários de teste automatizados

### Página de Certificação

- Carregamento da página de certificação
- Redirecionamento do botão **"Quero me certificar"** para o site da Rubeus
- Redirecionamento do botão **"Saiba Mais"** para página de dados
- Validação do formulário de contato
- Validação de campos obrigatórios
- Validação de formato de e-mail inválido
- Validação de limite de caracteres no campo telefone
- Carregamento da página principal
- Validação de elementos visíveis na interface
- Redirecionamento do menu institucional
- Validação do botão **Inscreva-se**
- Validação da newsletter
- Verificação de links de redes sociais

---

## Documentação de Testes

Os documentos relacionados ao planejamento e execução dos testes estão disponíveis na pasta **documentos** deste repositório.

Entre os materiais incluídos estão:

- Plano de Testes
- Cenários de Teste estruturados em BDD
- Evidências e análises dos testes realizados

Esses documentos complementam os testes automatizados implementados em Cypress e demonstram o processo completo de validação da aplicação.
