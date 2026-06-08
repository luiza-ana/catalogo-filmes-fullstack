import { Router } from "express";
import filmeController from "../controllers/FilmeController.js";

const router = Router();

router.get("/filmes", (req, res) => {
  filmeController.listar(req, res);
});

router.post("/filmes", (req, res) => {
  filmeController.adicionar(req, res);
});

export default router;
