import { filmeService } from "./services/filmeService.js";
import { favoritoService } from "./services/favoritoService.js";

import { filmeView } from "./ui/filmeView.js";
import { favoritoView } from "./ui/favoritoView.js";

const alerta = document.querySelector("#alerta");

function mostrarErro(mensagem) {
  alerta.textContent = mensagem;
  alerta.classList.remove("d-none");
}

function limparErro() {
  alerta.classList.add("d-none");
  alerta.textContent = "";
}

// ---------------- FILMES ----------------

async function atualizarFilmes() {
  const filmes = await filmeService.listar();

  if (!Array.isArray(filmes)) {
    throw new Error("Resposta inválida ao carregar filmes");
  }

  filmeView.renderLista(filmes, removerFilme);
  favoritoView.preencherSelect(filmes);
}

async function criarFilme(dados) {
  limparErro();

  try {
    await filmeService.criar(dados);
    filmeView.limparForm();
    await atualizarFilmes();
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

async function removerFilme(id) {
  limparErro();

  try {
    await filmeService.remover(id);
    await atualizarFilmes();
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

// ---------------- FAVORITOS ----------------

async function atualizarFavoritos() {
  const favoritos = await favoritoService.listar();

  favoritoView.renderLista(favoritos, removerFavorito);
}

async function criarFavorito(dados) {
  limparErro();

  try {
    await favoritoService.criar(dados);
    favoritoView.limparForm();
    await atualizarFavoritos();
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

async function removerFavorito(id) {
  limparErro();

  try {
    await favoritoService.remover(id);
    await atualizarFavoritos();
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

// ---------------- INICIALIZAÇÃO ----------------

filmeView.onSubmit(criarFilme);
favoritoView.onSubmit(criarFavorito);

async function iniciar() {
  try {
    await atualizarFilmes();
    await atualizarFavoritos();
  } catch (erro) {
    mostrarErro(
      "Não foi possível conectar à API. Verifique se o backend está rodando na porta 3000.",
    );
  }
}

iniciar();
