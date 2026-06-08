import Filme from "../models/Filme.js";

class FilmeService {
  constructor() {
    this.filmes = [];
    this.proximoId = 1;
  }

  listar() {
    return this.filmes;
  }

  adicionar(titulo, genero, ano, descricao) {
    const filme = new Filme(this.proximoId++, titulo, genero, ano, descricao);

    this.filmes.push(filme);
    return filme;
  }
}

export default new FilmeService();
