import Favorito from "../models/Favorito.js";

class FavoritoService {
  constructor() {
    this.favoritos = [];
    this.proximoId = 1;
  }

  listar() {
    return this.favoritos;
  }

  buscarPorId(id) {
    return this.favoritos.find((favorito) => favorito.id === Number(id));
  }

  adicionar(conteudoId) {
    const favorito = new Favorito(this.proximoId++, conteudoId);

    this.favoritos.push(favorito);
    return favorito;
  }

  remover(id) {
    const indice = this.favoritos.findIndex(
      (favorito) => favorito.id === Number(id),
    );

    if (indice === -1) {
      return false;
    }

    this.favoritos.splice(indice, 1);
    return true;
  }
}

export default new FavoritoService();
