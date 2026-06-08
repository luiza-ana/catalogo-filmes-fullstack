import express from "express";
import filmeRoutes from "./src/routes/FilmeRoutes.js";

const app = express();

app.use(express.json());

app.use(filmeRoutes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Catálogo de Filmes funcionando!",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
