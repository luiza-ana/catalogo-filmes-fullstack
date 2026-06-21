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

  renderLista(favoritos, aoRemover) {
    lista.innerHTML = "";

    if (favoritos.length === 0) {
      lista.innerHTML = "<li class='list-group-item'>Nenhum favorito.</li>";
      return;
    }

    favoritos.forEach((favorito) => {
      const li = document.createElement("li");

      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      li.innerHTML = `<span>Conteúdo ID: ${favorito.conteudoId}</span>`;

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
