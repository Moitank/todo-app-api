/* const Usuario = require('../models/usuario-model') */
const UsuariosDao = require('../DAO/usuarios-dao')

module.exports = (app, bd) => {

    const usuariosDao = new UsuariosDao(bd)


    app.get('/usuarios', async (req, resp) => 
        {
            
            try {
                    const verTodosUsuarios = await usuariosDao.listaUsuarios()
                    resp.send(verTodosUsuarios)
                }
            catch (error) {
                    resp.send(error)
                }

 
        }
    )

    app.get('/usuarios/:email', async (req, resp)=>
        {
           
            try {
                    const filtrarUsuarioEmail =  await usuariosDao.usuarioUnico(req.params.email)
                    resp.send(filtrarUsuarioEmail)
                }

                catch (error) {
                    resp.send(error)
                }

        }
    )

    app.post('/usuarios', async (req, resp) => 
        {


            let array =  [req.body.NOME, req.body.EMAIL, req.body.SENHA]
            try {
                const novoUsuario = await usuariosDao.adicionaUsuarios(array)
                resp.send(novoUsuario)
            }

            catch (error) {
                resp.send(error)
            }

        }
    );


    app.delete('/usuarios/:id', async (req,resp)=> {
      
        try {
            const deletandoUsuarios = await usuariosDao.deletaUsuarios(req.params.id)
            resp.send(deletandoUsuarios)
        }

        catch (error) {
            resp.send(error)
        }
    })



    app.put('/usuarios/:id', async (req,resp)=>{

        const valores = [req.body.nome, req.body.email, req.body.senha, req.params.id]

        try {
            const atualizandoUsuarios = await usuariosDao.atualizaUsuarios(valores)
            resp.send(atualizandoUsuarios)
        }

        catch (error) {
            resp.send(error)
        }
        
    
    })
}
