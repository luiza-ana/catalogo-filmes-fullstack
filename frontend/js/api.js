import { API_URL } from "./config.js";

async function request(caminho, opcoes = {}) {
  const resposta = await fetch(`${API_URL}${caminho}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...opcoes,
  });

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status}`);
  }

  if (resposta.status === 204) {
    return null;
  }

  return resposta.json();
}

export const api = {
  // Filmes
  getFilmes() {
    return request("/filmes");
  },

  criarFilme(dados) {
    return request("/filmes", {
      method: "POST",
      body: JSON.stringify(dados),
    });
  },

  removerFilme(id) {
    return request(`/filmes/${id}`, {
      method: "DELETE",
    });
  },

  // Favoritos
  getFavoritos() {
    return request("/favoritos");
  },

  criarFavorito(dados) {
    return request("/favoritos", {
      method: "POST",
      body: JSON.stringify(dados),
    });
  },

  removerFavorito(id) {
    return request(`/favoritos/${id}`, {
      method: "DELETE",
    });
  },
};
