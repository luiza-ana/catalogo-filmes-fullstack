import express from "express";
import cors from "cors";
import filmeRoutes from "./routes/FilmeRoutes.js";
import favoritoRoutes from "./routes/FavoritoRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use(filmeRoutes);
app.use(favoritoRoutes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Catálogo de Filmes funcionando!",
  });
});

app.use(errorHandler);

export default app;
