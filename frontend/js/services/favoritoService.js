import { api } from "../api.js";

export const favoritoService = {
  listar() {
    return api.getFavoritos();
  },

  async criar({ conteudoId }) {
    if (!conteudoId) {
      throw new Error("Selecione um conteúdo");
    }

    return api.criarFavorito({
      conteudoId: Number(conteudoId),
    });
  },

  remover(id) {
    return api.removerFavorito(id);
  },
};
