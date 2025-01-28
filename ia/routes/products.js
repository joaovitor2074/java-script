// routes/products.js
const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

// Lista todos os produtos
router.get("/", (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Adiciona um novo produto
router.post("/", (req, res) => {
  const { name, price, stock } = req.body;
  const query = "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)";
  connection.query(query, [name, price, stock], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Produto adicionado com sucesso!" });
  });
});

module.exports = router;
