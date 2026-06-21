import { api } from "../api.js";

export const filmeService = {
  listar() {
    return api.getFilmes();
  },

  async criar({ titulo, genero, ano, descricao }) {
    if (!titulo || !titulo.trim()) {
      throw new Error("Título é obrigatório");
    }

    return api.criarFilme({
      titulo: titulo.trim(),
      genero: genero.trim(),
      ano: Number(ano),
      descricao: descricao.trim(),
    });
  },

  remover(id) {
    return api.removerFilme(id);
  },
};
