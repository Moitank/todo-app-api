const Tarefas = require('../Models/tarefas');
const { tarefasbd } = require('../infra/bd');

module.exports = (app, bd) =>{

    app.get('/tarefas', (req, res) => {
        res.send(bd.tarefasbd);
      });

      app.post('/tarefas', (req, res) => {
      const trf = new Tarefas(req.body.titulo,req.body.descricao,req.body.status,req.body.dataCriacao)
      bd.tarefasbd.push(trf)
      console.log(bd)
        res.send('Tarefa adicionada com sucesso')
      })
    }

    
