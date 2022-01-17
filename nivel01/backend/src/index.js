const express = require('express');

const app = express();
app.use(express.json());

/**
 * Método HTTP:
 *
 * GET -> Buscar informações do back-end
 * POST -> Criar uma informação no back-extend
 * PUT / PATCH -> Alterar uma informação no back-extend
 *    - PUT -> Atualiza todos os dados de um recurso
 *    - PATCH -> Atualiza algo específico de um recurso
 * DELETE -> Deletar uma informação no back-extend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

app.get('/projects', (req, res) => {
  const { title, owner } = req.query;

  console.log(title);
  console.log(owner);

  return res.json(['Projeto 1', 'Projeto 2']);
});

app.post('/projects', (req, res) => {
  const {title, owner} = req.body;

  console.log(title);
  console.log(owner);

  return res.json(['Projeto 1', 'Projeto 2', 'Projeto 3']);
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(['Projeto 4', 'Projeto 2', 'Projeto 3']);
});

app.delete('/projects/:id', (req, res) => {
  return res.json(['Projeto 2', 'Projeto 3']);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});
