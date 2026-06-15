import { Router } from "express";
import favoritoController from "../controllers/FavoritoController.js";

const router = Router();

router.get("/favoritos", (req, res) => {
  favoritoController.listar(req, res);
});

router.get("/favoritos/:id", (req, res) => {
  favoritoController.buscarPorId(req, res);
});

router.post("/favoritos", (req, res) => {
  favoritoController.adicionar(req, res);
});

router.delete("/favoritos/:id", (req, res) => {
  favoritoController.remover(req, res);
});

export default router;
