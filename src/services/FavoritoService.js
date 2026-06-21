import db from "../db.js";

class FavoritoService {
  listar() {
    return db.prepare("SELECT * FROM favoritos").all();
  }

  buscarPorId(id) {
    return db.prepare("SELECT * FROM favoritos WHERE id = ?").get(Number(id));
  }

  adicionar(conteudoId) {
    const result = db
      .prepare("INSERT INTO favoritos(conteudoId) VALUES (?)")
      .run(Number(conteudoId));

    return {
      id: result.lastInsertRowid,
      conteudoId: Number(conteudoId),
    };
  }

  remover(id) {
    const result = db
      .prepare("DELETE FROM favoritos WHERE id = ?")
      .run(Number(id));

    return result.changes > 0;
  }
}

export default new FavoritoService();
