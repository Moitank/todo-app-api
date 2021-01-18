

module.exports = (app) =>{

    app.get('/tarefas', (req, res) => {
        res.send('<h1>Tarefas</h1>');
      });

      app.post('/tarefas', (req, res) => {
        res.send('Rota de post de tarefas ativada: tarefa adicionada ao banco de dados')
      })
    }

    
