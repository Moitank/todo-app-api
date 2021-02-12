const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const usuariosController = require('./Controllers/usuario-controller');
const tarefasController = require ('./Controllers/tarefa-controller');
const bd = require('./infra/sqlite-db')
const port = 8080

const app = express();



app.use(bodyParser.json());
app.use(cors());





usuariosController(app,bd);

tarefasController(app, bd);



app.listen(port, () => {
  console.log(`[INFO]: Servidor rodando em http://localhost:${port}`)
})
