import { DatabaseSync } from "node:sqlite";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "database.sqlite");

const db = new DatabaseSync(dbPath);

db.exec("PRAGMA foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS filmes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    genero TEXT NOT NULL,
    ano INTEGER NOT NULL,
    descricao TEXT
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS favoritos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conteudoId INTEGER NOT NULL,
    FOREIGN KEY (conteudoId) REFERENCES filmes(id) ON DELETE CASCADE
  )
`);

export default db;
