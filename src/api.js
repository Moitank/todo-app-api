const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Testado com sucesso</h1>')
})

const usuariosController = require('./Controllers/usuario-controller');
const tarefasController = require ('./Controllers/tarefas-controller');

const port = 8080



usuariosController(app);

tarefasController(app);



app.listen(port, () => {
  console.log(`[INFO]: Servidor rodando em http://localhost:${port}`)
})
