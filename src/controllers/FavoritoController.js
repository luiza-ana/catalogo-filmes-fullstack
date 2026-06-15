import favoritoService from "../services/FavoritoService.js";

class FavoritoController {
  listar(req, res) {
    res.json(favoritoService.listar());
  }

  buscarPorId(req, res) {
    const favorito = favoritoService.buscarPorId(req.params.id);

    if (!favorito) {
      return res.status(404).json({
        mensagem: "Favorito não encontrado",
      });
    }

    res.json(favorito);
  }

  adicionar(req, res) {
    const { conteudoId } = req.body;

    const favorito = favoritoService.adicionar(conteudoId);

    res.status(201).json(favorito);
  }

  remover(req, res) {
    const removido = favoritoService.remover(req.params.id);

    if (!removido) {
      return res.status(404).json({
        mensagem: "Favorito não encontrado",
      });
    }

    res.json({
      mensagem: "Favorito removido com sucesso",
    });
  }
}

export default new FavoritoController();
