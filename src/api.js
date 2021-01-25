const express = require('express')
const bodyParser = require('body-parser')
const usuariosController = require('./Controllers/usuario-controller');
const tarefasController = require ('./Controllers/tarefas-controller');
const bd = require('./infra/bd')

const app = express();

app.use(bodyParser.json())



const port = 8080



usuariosController(app,bd);

tarefasController(app, bd);


app.listen(port, () => {
  console.log(`[INFO]: Servidor rodando em http://localhost:${port}`)
})
