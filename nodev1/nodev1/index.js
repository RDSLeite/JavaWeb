// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// routes / caminhos para controlar produtos
const produtosRoutes = require('./routes/produtos');
// routes / caminhos para controlar categorias
const categoriasRoutes = require('./routes/categorias');
// routes / caminhos para controlar vendas
const vendasRoutes = require('./routes/vendas');

app.use(cors());
app.use(express.json());

//utilizar as routes de produtos
app.use('/api/produtos', produtosRoutes);
//utilizar as routes de categorias
app.use('/api/categorias', categoriasRoutes);
//utilizar as routes de vendas
app.use('/api/vendas', vendasRoutes);

app.get('/', (req, res) => {
  res.send('Olá com Express!');
});

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});


