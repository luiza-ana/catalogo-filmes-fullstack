# Catálogo de Filmes e Séries

## Objetivo

Desenvolver um sistema fullstack para cadastro e gerenciamento de filmes e séries assistidos pelos usuários.

## Funcionalidades iniciais

- Adicionar filmes e séries
- Marcar conteúdos como assistidos
- Favoritar filmes e séries
- Criar lista “assistir depois”
- Avaliar filmes e séries

## Classes do sistema

### Usuario

Responsável pelos dados do usuário do sistema.

### Conteudo

Armazena informações dos filmes e séries cadastrados na plataforma.

### Avaliacao

Responsável pelas notas e comentários realizados pelos usuários sobre filmes e séries.

### Favorito

Gerencia os conteúdos favoritados pelos usuários.

### ListaAssistirDepois

Armazena os filmes e séries que o usuário deseja assistir futuramente.

## Relações entre classes

### Associação

Um usuário pode interagir com vários filmes e séries cadastrados no sistema.

### Agregação

Um usuário possui uma lista de favoritos, mas os conteúdos continuam existindo independentemente dela.

### Composição

As avaliações dependem da existência de um filme ou série para existirem no sistema.

## Aplicação do SRP (Single Responsibility Principle)

- Usuario: responsável apenas pelos dados do usuário.
- Conteudo: responsável apenas pelos dados dos filmes e séries.
- Avaliacao: responsável apenas pelas avaliações realizadas pelos usuários.
- Favorito: responsável apenas pelo gerenciamento dos conteúdos favoritados.
- ListaAssistirDepois: responsável apenas pelo gerenciamento da lista de conteúdos para assistir futuramente.

## Aplicação do DIP (Dependency Inversion Principle)

As classes Avaliacao, Favorito e ListaAssistirDepois devem depender de abstrações relacionadas ao conteúdo, e não diretamente da implementação da classe Conteudo.

Exemplo:

Avaliacao → IConteudo

Favorito → IConteudo

ListaAssistirDepois → IConteudo
