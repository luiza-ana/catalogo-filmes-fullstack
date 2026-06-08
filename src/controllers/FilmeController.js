import filmeService from "../services/FilmeService.js";

class FilmeController {
  listar(req, res) {
    res.json(filmeService.listar());
  }

  adicionar(req, res) {
    const { titulo, genero, ano, descricao } = req.body;

    const filme = filmeService.adicionar(titulo, genero, ano, descricao);

    res.status(201).json(filme);
  }
}

export default new FilmeController();
