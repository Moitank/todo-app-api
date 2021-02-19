module.exports = class TarefasDao {
    constructor(bd) {
      this.bd = bd;
    }
  
    listaTarefas() {
      return new Promise((resolve, reject) => {
        this.bd.all("SELECT * FROM TAREFAS", (error, rows) => {
          if (error) reject("Não foi possivel listar as tarefas");
          else resolve(rows);
        });
      });
    }
  
    tarefaUnica(parametro) {
      return new Promise((resolve, reject) => {
        this.bd.get(
          "SELECT * FROM TAREFAS WHERE ID = ?",
          [parametro],
          (error, row) => {
            if (error) reject("Tarefa não encontrada");
            else resolve(row);
          }
        );
      });
    }
  
    adicionaTarefas(valores) {
      return new Promise ((resolve, reject) => {
        this.bd.run(
          "INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES(?, ?, ?, ?, ?)",
          valores,
          (error) => {
            if (error) reject("Tarefa não adicionada");
            else resolve("Tarefa adicionada com sucesso")
          }
        )
      })
    }
  
  
    deletaTarefas(parametro) {
      return new Promise ((resolve, reject) => {
        this.bd.run(
          "DELETE FROM TAREFAS WHERE ID = ? ", parametro,
        (error) => {
            if (error) reject ("Não foi possivel excluir tarefa")
            else resolve("Tarefa deletada")
        }) 
      })
    }
  
  
    atualizaTarefas(valores) {
      return new Promise ((resolve, reject) => {
        this.bd.run(
          "UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE ID = ?", valores, 
         (erro) => {
            if (erro) reject ("Erro ao atualizar")
            else resolve ("Tarefa atualizada") 
        })
      })
    }
  };
  