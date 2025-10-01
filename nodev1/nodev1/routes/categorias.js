// routes/categoria.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos os categoria
router.get('/', (req, res) => {
  db.query('SELECT * FROM categorias', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET categoria por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM categorias WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

// POST criar categoria
router.post('/', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO categorias (nome) VALUES (?)', [nome], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, nome});
  });
});

// PUT atualizar categoria
router.put('/:id', (req, res) => {
  const { nome } = req.body;
  db.query('UPDATE categorias SET nome = ? WHERE id = ?', [nome, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ id: req.params.id, nome });
  });
});

// DELETE categoria
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM categorias WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ status: 'categorias removida' });
  });
});

module.exports = router;