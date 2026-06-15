import Filme from "../models/Filme.js";

class FilmeService {
  constructor() {
    this.filmes = [];
    this.proximoId = 1;
  }

  listar() {
    return this.filmes;
  }

  buscarPorId(id) {
    return this.filmes.find((filme) => filme.id === Number(id));
  }

  adicionar(titulo, genero, ano, descricao) {
    const filme = new Filme(this.proximoId++, titulo, genero, ano, descricao);

    this.filmes.push(filme);
    return filme;
  }

  atualizar(id, dados) {
    const filme = this.buscarPorId(id);

    if (!filme) {
      return null;
    }

    filme.titulo = dados.titulo ?? filme.titulo;
    filme.genero = dados.genero ?? filme.genero;
    filme.ano = dados.ano ?? filme.ano;
    filme.descricao = dados.descricao ?? filme.descricao;

    return filme;
  }

  remover(id) {
    const indice = this.filmes.findIndex((filme) => filme.id === Number(id));

    if (indice === -1) {
      return false;
    }

    this.filmes.splice(indice, 1);
    return true;
  }
}

export default new FilmeService();
