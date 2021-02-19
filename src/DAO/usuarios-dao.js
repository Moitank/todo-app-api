module.exports = class usuariosDao {
  constructor(bd) {
    this.bd = bd;
  }

  listaUsuarios() {
    return new Promise((resolve, reject) => {
      this.bd.all("SELECT * FROM USUARIOS", (error, rows) => {
        if (error) reject("deu xabu");
        else resolve(rows);
      });
    });
  }

  usuarioUnico(email) {
    return new Promise((resolve, reject) => {
      this.bd.get(
        "SELECT * FROM USUARIOS WHERE EMAIL = ?",
        [email],
        (error, row) => {
          if (error) reject("Email não encontrado");
          else resolve(row);
        }
      );
    });
  }

  adicionaUsuarios(valores) {
    return new Promise ((resolve, reject) => {
      this.bd.run(
        "INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?, ?, ?)",
        valores,
        (error) => {
          if (error) reject("Usuário não adicionado");
          else resolve("Usuário adicionado com sucesso")
        }
      )
    })
  }


  deletaUsuarios(parametro) {
    return new Promise ((resolve, reject) => {
      this.bd.run(
        "DELETE FROM USUARIOS WHERE ID = ? ", parametro,
      (error) => {
          if (error) reject ("Não foi possivel excluir usuario")
          else resolve("Usuario deletado")
      }) 
    })
  }


  atualizaUsuarios(valores) {
    return new Promise ((resolve, reject) => {
      this.bd.run(
        "UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?", valores, 
       (erro) => {
          if (erro) reject ("Erro ao atualizar")
          else resolve ("Usuário atualizado") 
      })
    })
  }
};
