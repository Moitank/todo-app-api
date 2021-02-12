/* const Usuario = require('../models/usuario-model') */
const usuariosDao = require('../DAO/usuarios-dao')

module.exports = (app, bd) => {
    app.get('/usuarios', (req, resp) => 
        {
            const classe = new usuariosDao(bd)
            classe.listaUsuarios()
                .then((usuarios) => {
                    resp.send(usuarios)
                })

                .catch((error) =>{
                    resp.send(error)
                })

 
        }
    )

    app.get('/usuarios/:email', (req, resp)=>
        {
            const classe = new usuariosDao(bd)
            classe.usuarioUnico(req.params.email)
                .then((row) =>{
                    resp.send(row)
                })

                .catch((error) => {
                    resp.send(error)
                })

        }
    )

    app.post('/usuarios', (req, resp) => 
        {


            let array =  [req.body.NOME, req.body.EMAIL, req.body.SENHA]
            console.log(array)

            bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", array, (error) => {
                if (error) throw new Error(`Erro ${error} ao inserir valores.`) 
                else resp.send("Usuário inserido com sucesso")

            })

        }
    )


    app.delete('/usuarios/:email', (req,resp)=> {
        bd.run("DELETE FROM USUARIOS WHERE email = ? ", req.params.email,
        (error) => {
            if (error) throw new Error ("Não foi possivel excluir usuario")
            else resp.send("Usuario deletado")
        }) 
    })



    app.put('/usuarios/:email', (req,resp)=>
        {
            bd.run("UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE EMAIL = ?", [req.body.nome, req.body.email, req.body.senha, req.params.email], 
            function (erro) {
                if(erro) {
                    throw new Error(`Erro ao atualizar ${erro}`)
                } else {
                    resp.send ("Usuário atualizado")
                }
            })
        }
    
    )
}
