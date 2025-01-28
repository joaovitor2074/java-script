// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use("/api/products", productsRoutes); // Rotas de produtos
app.use("/api/cart", cartRoutes); // Rotas de carrinho
app.use("/api/auth", authRoutes); // Rotas de autenticação

// Testando conexão
app.get("/", (req, res) => {
  res.send("Servidor funcionando para Maranhão Moto Peças!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
