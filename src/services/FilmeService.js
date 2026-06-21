import db from "../db.js";

class FilmeService {
  listar() {
    return db.prepare("SELECT * FROM filmes").all();
  }

  buscarPorId(id) {
    return db.prepare("SELECT * FROM filmes WHERE id = ?").get(Number(id));
  }

  adicionar(titulo, genero, ano, descricao) {
    const result = db
      .prepare(
        "INSERT INTO filmes(titulo, genero, ano, descricao) VALUES (?, ?, ?, ?)",
      )
      .run(titulo, genero, Number(ano), descricao ?? null);

    return {
      id: result.lastInsertRowid,
      titulo,
      genero,
      ano: Number(ano),
      descricao: descricao ?? null,
    };
  }

  atualizar(id, dados) {
    const filme = this.buscarPorId(id);

    if (!filme) {
      return null;
    }

    const titulo = dados.titulo ?? filme.titulo;
    const genero = dados.genero ?? filme.genero;
    const ano = dados.ano !== undefined ? Number(dados.ano) : filme.ano;
    const descricao = dados.descricao ?? filme.descricao;

    db.prepare(
      "UPDATE filmes SET titulo = ?, genero = ?, ano = ?, descricao = ? WHERE id = ?",
    ).run(titulo, genero, ano, descricao, Number(id));

    return {
      id: Number(id),
      titulo,
      genero,
      ano,
      descricao,
    };
  }

  remover(id) {
    const result = db
      .prepare("DELETE FROM filmes WHERE id = ?")
      .run(Number(id));

    return result.changes > 0;
  }
}

export default new FilmeService();
