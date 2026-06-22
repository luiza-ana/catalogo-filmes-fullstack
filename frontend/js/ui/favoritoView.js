const form = document.querySelector("#form-favorito");

const lista = document.querySelector("#lista-favoritos");

const select = document.querySelector("#conteudoId");

export const favoritoView = {
  preencherSelect(filmes) {
    select.innerHTML = '<option value="">Selecione um filme</option>';

    filmes.forEach((filme) => {
      const option = document.createElement("option");

      option.value = filme.id;
      option.textContent = filme.titulo;

      select.appendChild(option);
    });
  },

  renderLista(favoritos, filmes, aoRemover) {
    lista.innerHTML = "";

    if (favoritos.length === 0) {
      lista.innerHTML = "<li class='list-group-item'>Nenhum favorito.</li>";
      return;
    }

    const filmesPorId = new Map(filmes.map((filme) => [filme.id, filme]));

    favoritos.forEach((favorito) => {
      const li = document.createElement("li");

      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      const filme = filmesPorId.get(Number(favorito.conteudoId));
      const conteudoTexto = filme
        ? filme.titulo
        : `Conteúdo ID: ${favorito.conteudoId}`;

      li.innerHTML = `<span>${conteudoTexto}</span>`;

      const btn = document.createElement("button");

      btn.className = "btn btn-sm btn-danger";
      btn.textContent = "Remover";

      btn.addEventListener("click", () => {
        aoRemover(favorito.id);
      });

      li.appendChild(btn);
      lista.appendChild(li);
    });
  },

  limparForm() {
    form.reset();
  },

  onSubmit(callback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      callback({
        conteudoId: select.value,
      });
    });
  },
};
