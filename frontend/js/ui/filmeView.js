const form = document.querySelector("#form-filme");
const lista = document.querySelector("#lista-filmes");

function criarLinha(filme, aoRemover) {
  const li = document.createElement("li");

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const texto = document.createElement("span");

  texto.textContent = `${filme.titulo} (${filme.ano}) - ${filme.genero}`;

  const btn = document.createElement("button");

  btn.className = "btn btn-sm btn-danger";
  btn.textContent = "Remover";

  btn.addEventListener("click", () => {
    aoRemover(filme.id);
  });

  li.append(texto, btn);

  return li;
}

export const filmeView = {
  renderLista(filmes, aoRemover) {
    lista.innerHTML = "";

    if (filmes.length === 0) {
      lista.innerHTML =
        "<li class='list-group-item'>Nenhum filme cadastrado.</li>";
      return;
    }

    filmes.forEach((filme) => {
      lista.appendChild(criarLinha(filme, aoRemover));
    });
  },

  limparForm() {
    form.reset();
  },

  onSubmit(callback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      callback({
        titulo: document.querySelector("#titulo").value,
        genero: document.querySelector("#genero").value,
        ano: document.querySelector("#ano").value,
        descricao: document.querySelector("#descricao").value,
      });
    });
  },
};
