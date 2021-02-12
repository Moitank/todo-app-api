const Tarefa = require('../models/tarefa-model')


module.exports = (app, bd) => {
    app.get('/tarefas', (req, resp) => 
        {
            resp.send(bd.tarefasBD)
        }
    )

    app.get('/tarefas/:', (req, resp)=>
        {
  

        }
    )

    app.post('/tarefas', (req, resp) => 
        {
            const trf = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.data)
            bd.tarefasBD.push(trf)
            resp.send('<h1>Tarefa adicionada ao banco de dados</h1>')
        }
    )
}
