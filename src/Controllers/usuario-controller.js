const { response } = require('express');
const Usuario = require('../Models/usuarios')

module.exports = (app,bd) =>{

app.get('/usuarios', (req, res) => {
    res.send(bd.usuariosbd);
  })
app.get('/usuarios/:email', (req,res) => {
for (let user of bd.usuariosbd){
  if (user.email == req.params.email) {
    res.send(user)
  }
} 
res.send('Usuário não encontrado')
})

app.post('/usuarios', (req, res) => {
    
  const user = new Usuario(req.body.nome,req.body.email,req.body.senha)
  bd.usuariosbd.push(user)
  console.log(bd)
  res.send('Usuário adicionado com sucesso');
  });

  app.delete('/usuarios/:email', (req, res) => {
    // delecao de elemento no database
    let usuariosNDelet = [];
    for (let i=0; i < bd.usuariosbd.length; i++){
      if(bd.usuariosbd[i].email !== req.params.email){
        usuariosNDelet.push(bd.usuariosbd[i])
      }
    }
    bd.usuariosbd = usuariosNDelet;
    console.log(bd.usuariosbd)
    res.send("Usuário deletado com sucesso");
  });

 



const atualizaRegistro = (email, body) => {
  for(let user of bd.usuariosbd) {
    if(user.email === email) {
      user.nome = body.nome;
      user.senha = body.senha;
    }
  }
}

app.put('/usuarios/:email', (req, res) => {
  atualizaRegistro(req.params.email, req.body);
  res.send("Usuario atualizado!");
})

}




