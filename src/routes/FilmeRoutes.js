import { Router } from "express";
import filmeController from "../controllers/FilmeController.js";

const router = Router();

router.get("/filmes", (req, res) => {
  filmeController.listar(req, res);
});

router.get("/filmes/:id", (req, res) => {
  filmeController.buscarPorId(req, res);
});

router.post("/filmes", (req, res) => {
  filmeController.adicionar(req, res);
});

router.put("/filmes/:id", (req, res) => {
  filmeController.atualizar(req, res);
});

router.delete("/filmes/:id", (req, res) => {
  filmeController.remover(req, res);
});

export default router;
