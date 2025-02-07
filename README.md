# Projeto de CRUD de Receitas - Trabalho de Faculdade

Este projeto foi desenvolvido como parte de um trabalho de faculdade, com o objetivo de demonstrar a implementação de um CRUD (Create, Read, Update, Delete) básico utilizando **Java com Spring Boot** no backend e **Angular** no frontend. A aplicação simula um site de receitas, onde é possível cadastrar, visualizar, editar e excluir receitas.

## Tecnologias Utilizadas

- **Backend**: Java com Spring Boot, banco de dados H2 em memória.
- **Frontend**: Angular com Bootstrap para a interface.
- **Ferramentas**: Maven (gerenciamento de dependências), Angular CLI.

## Funcionalidades

O projeto consiste em:

1. **Backend**:
   - API RESTful para gerenciar receitas.
   - Operações CRUD: Criar, ler, atualizar e deletar receitas.
   - Banco de dados H2 em memória para armazenamento temporário.

2. **Frontend**:
   - Interface responsiva para exibir as receitas em cards.
   - Integração com a API do backend para consumir os dados.
   - Navegação básica e formulários para adicionar/editar receitas.

## Configuração do Projeto

### Backend (Spring Boot)

O backend foi desenvolvido utilizando Spring Boot e está configurado para utilizar um banco de dados H2 em memória. Abaixo estão as principais configurações:

```properties
spring.application.name=receitas

spring.datasource.url=jdbc:h2:mem:receitasdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
server.port=8080

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql: true
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
   ```
## Endpoints da API

- **GET /api/receitas**: Retorna todas as receitas.
- **GET /api/receitas/{id}**: Retorna uma receita específica pelo ID.
- **POST /api/receitas**: Cria uma nova receita.
- **DELETE /api/receitas/{id}**: Deleta uma receita pelo ID.
   ```
## Frontend (Angular)

O frontend foi desenvolvido utilizando Angular e consome a API do backend para exibir e manipular as receitas.

### Configuração do Ambiente

1. Instale o Angular CLI globalmente:

   ```bash
   npm install -g @angular/cli

## Navegue até o diretório do frontend:

```bash
cd /workspaces/Projeto-PS2/Projeto-PS2-main/Front-End/site-receitas 
```
ou
```bash
cd Projeto-PS2-main\Front-End\site-receitas
```

## Instale as dependências do projeto:
```bash
npm install
```

## Inicie o servidor de desenvolvimento:
```bash
ng serve
```

## Estrutura do Frontend

O frontend consiste em um componente `app-navbar` para a barra de navegação e um componente `app-card-receita` para exibir cada receita em um card. As receitas são exibidas em uma grade utilizando Bootstrap.

```html
<app-navbar></app-navbar>

<div class="container">
  <div class="row">
      <div class="col-md-4 d-flex justify-content-center mb-4" *ngFor="let receita of receitas">
          <app-card-receita
              [titulo]="receita.titulo"
              [descricao]="receita.descricao"
              [imagemUrl]="receita.imagemUrl"
              [id]="receita.id"
              (receitaSelecionada)="onReceitaSelecionada($event)">
          </app-card-receita>
      </div>
  </div>
</div>
```



