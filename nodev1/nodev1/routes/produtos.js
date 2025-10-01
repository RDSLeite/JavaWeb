// routes/produtos.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos os produtos
router.get('/', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET produto por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM produtos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

// POST criar produto
router.post('/', (req, res) => {
  const { nome, preco } = req.body;
  db.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, nome, preco });
  });
});

// PUT atualizar produto
router.put('/:id', (req, res) => {
  const { nome, preco } = req.body;
  db.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [nome, preco, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ id: req.params.id, nome, preco });
  });
});

// DELETE produto
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM produtos WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ status: 'Produto removido' });
  });
});

module.exports = router;