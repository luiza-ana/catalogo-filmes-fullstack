# Catálogo de Filmes e Séries

## Descrição

Sistema fullstack desenvolvido para cadastro e gerenciamento de filmes e séries. O projeto permite cadastrar conteúdos, favoritar filmes e manter os dados persistidos utilizando SQLite.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)

## Pré-requisitos

- Node.js 22+ (recomendado)
- NPM

## Instalação

Clone o repositório:

```bash
git clone https://github.com/luiza-ana/catalogo-filmes-fullstack.git
```

Entre na pasta do projeto:

```bash
cd catalogo-filmes-fullstack
```

Instale as dependências:

```bash
npm install
```

## Como Executar o Backend

```bash
npm run dev
```

Servidor disponível em:

```text
http://localhost:3000
```

## Como Executar o Frontend

Entre na pasta frontend:

```bash
cd frontend
```

Execute:

```bash
http-server -p 5500 -c-1
```

Acesse:

```text
http://localhost:5500
```

## Endpoints da API

### Filmes

| Método | Rota        | Descrição             |
| ------ | ----------- | --------------------- |
| GET    | /filmes     | Lista todos os filmes |
| GET    | /filmes/:id | Busca um filme por ID |
| POST   | /filmes     | Adiciona um filme     |
| PUT    | /filmes/:id | Atualiza um filme     |
| DELETE | /filmes/:id | Remove um filme       |

### Favoritos

| Método | Rota           | Descrição             |
| ------ | -------------- | --------------------- |
| GET    | /favoritos     | Lista favoritos       |
| GET    | /favoritos/:id | Busca favorito por ID |
| POST   | /favoritos     | Adiciona favorito     |
| DELETE | /favoritos/:id | Remove favorito       |

## Estrutura do Projeto

```text
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── db.js
├── app.js
└── server.js

frontend/
├── css/
├── js/
└── index.html
```

## Persistência

O projeto utiliza SQLite para armazenamento dos dados. As informações permanecem salvas mesmo após reiniciar o servidor.

## Autor

Ana Luiza Pereira Tenório

Curso de Ciência da Computação – UEPB

## Licença

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Web.
