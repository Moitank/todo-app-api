const TarefasDao = require('../DAO/tarefas-dao')


module.exports = (app, bd) => {

    const tarefasDao = new TarefasDao(bd)


    app.get('/tarefas', async (req, resp) => 
        {
            
            try {
                    const verTodasTarefas = await tarefasDao.listaTarefas()
                    resp.send(verTodasTarefas)
                }
            catch (error) {
                    resp.send(error)
                }

 
        }
    )

    app.get('/tarefas/:id', async (req, resp)=>
        {
           
            try {
                    const filtrarTarefasId =  await tarefasDao.tarefaUnica(req.params.id)
                    resp.send(filtrarTarefasId)
                }

                catch (error) {
                    resp.send(error)
                }

        }
    )

    app.post('/tarefas', async (req, resp) => 
        {


            let array =  [req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao, req.body.id_usuario]
            try {
                const novaTarefa = await tarefasDao.adicionaTarefas(array)
                resp.send(novaTarefa)
            }

            catch (error) {
                resp.send(error)
            }

        }
    );


    app.delete('/tarefas/:id', async (req,resp)=> {
      
        try {
            const deletandoTarefas = await tarefasDao.deletaTarefas(req.params.id)
            resp.send(deletandoTarefas)
        }

        catch (error) {
            resp.send(error)
        }
    })



    app.put('/tarefas/:id', async (req,resp)=>{

        const valores = [req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao, req.body.id_usuario, req.params.id]

        try {
            const atualizandoTarefas = await tarefasDao.atualizaTarefas(valores)
            resp.send(atualizandoTarefas)
        }

        catch (error) {
            resp.send(error)
        }
        
    
    })
}

