import filmeService from "../services/FilmeService.js";

class FilmeController {
  listar(req, res) {
    res.json(filmeService.listar());
  }

  buscarPorId(req, res) {
    const filme = filmeService.buscarPorId(req.params.id);

    if (!filme) {
      return res.status(404).json({
        mensagem: "Filme não encontrado",
      });
    }

    res.json(filme);
  }

  adicionar(req, res) {
    const { titulo, genero, ano, descricao } = req.body;

    const filme = filmeService.adicionar(titulo, genero, ano, descricao);

    res.status(201).json(filme);
  }

  atualizar(req, res) {
    const filme = filmeService.atualizar(req.params.id, req.body);

    if (!filme) {
      return res.status(404).json({
        mensagem: "Filme não encontrado",
      });
    }

    res.json(filme);
  }

  remover(req, res) {
    const removido = filmeService.remover(req.params.id);

    if (!removido) {
      return res.status(404).json({
        mensagem: "Filme não encontrado",
      });
    }

    res.json({
      mensagem: "Filme removido com sucesso",
    });
  }
}

export default new FilmeController();
