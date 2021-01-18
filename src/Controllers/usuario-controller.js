

module.exports = (app) =>{

app.get('/usuarios', (req, res) => {
    res.send('<h1>Usuarios</h1>');
  })
  app.post('/usuarios', (req, res) => {
    res.send('Rota de post de usuario ativada: usuário adicionado ao banco de dados');
  })
}

