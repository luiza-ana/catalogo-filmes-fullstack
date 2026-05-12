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
