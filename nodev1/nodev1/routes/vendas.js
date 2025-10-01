// routes/vendas.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todas as vendas
router.get('/', (req, res) => {
  db.query('SELECT * FROM vendas', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET vendas por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM vendas WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

// GET vendas por email
router.get('/byemail/:email', (req, res) => {
  db.query('SELECT * FROM vendas WHERE emailcliente = ?', [req.params.email], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// filtrar vendas por preco
router.get('/bypreco/:preco1/:preco2', (req, res) => {
  db.query('SELECT * FROM vendas WHERE totalvenda >= ? and totalvenda <= ?', [req.params.preco1, req.params.preco2], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// POST criar vendas
router.post('/', (req, res) => {
  const { datavenda, nomecliente, emailcliente, totalvenda} = req.body;
  db.query('INSERT INTO vendas (datavenda,nomecliente,emailcliente,totalvenda) VALUES (?, ? , ?, ?)', [datavenda,nomecliente,emailcliente,totalvenda], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId,datavenda, nomecliente, emailcliente, totalvenda});
  });
});

// PUT atualizar vendas
router.put('/:id', (req, res) => {
  const { datavenda, nomecliente, emailcliente, totalvenda} = req.body;
  db.query('UPDATE vendas SET datavenda = ?, nomecliente = ?, emailcliente = ?, totalvenda = ? WHERE id = ?', [datavenda,nomecliente,emailcliente,totalvenda,req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ id: req.params.id, datavenda, nomecliente, emailcliente, totalvenda});
  });
});

// DELETE vendas
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM vendas WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ status: 'vendas removido' });
  });
});

module.exports = router;