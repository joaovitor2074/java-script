const express = require("express");
const cors = require("cors");
const db = require('./db');
const app = express();

// Configuração
app.use(cors());
app.use(express.json());

// Função para formatar a data no formato yyyy-mm-dd
function formatarData(date) {
  if (!date) return null;
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

// Rotas
app.get("/contato", async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM contato');
    // formata as datas antes de enviar
    const contatos = rows.map(c => ({
      ...c,
      f_dtnas: formatarData(c.f_dtnas)
    }));
    res.json(contatos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.post("/addcontatos", async (req, res) => {
  const { f_nome, f_celular, f_email, f_datanascimento } = req.body;

  try {
    await db.query(
      "INSERT INTO contato (s_nome_conato, s_celular_contato, s_email_contato, f_dtnas) VALUES (?, ?, ?, ?)",
      [f_nome, f_celular, f_email, f_datanascimento]
    );
    res.status(200).json({ msg: "Contato gravado com sucesso!" });
  } catch (error) {
    console.error("Erro ao inserir:", error.sqlMessage || error.message);
    res.status(500).json({ erro: error.message });
  }
});

app.get("/pesquisarcontatos/:tipo/:valorpesq", async (req, res) => {
  const { tipo, valorpesq } = req.params;

  try {
    let query = "SELECT * FROM contato WHERE ";
    let rows;

    switch (tipo) {
      case "id":
        query += "n_contato_contato = ?";
        [rows] = await db.query(query, [valorpesq]);
        break;
      case "nome":
        query += "s_nome_conato like ?";
        [rows] = await db.query(query, [`%${valorpesq}%`]);
        break;
      case "nasc":
        query += "f_dtnas = ?";
        [rows] = await db.query(query, [valorpesq]);
        break;
      case "email":
        query += "s_email_contato like ?";
        [rows] = await db.query(query, [`%${valorpesq}%`]);
        break;
      default:
        return res.status(400).json({ erro: "Tipo de pesquisa inválido" });
    }

    // formata as datas antes de enviar
    const contatos = rows.map(c => ({
      ...c,
      f_dtnas: formatarData(c.f_dtnas)
    }));

    res.json(contatos);
  } catch (err) {
    console.error("❌ Erro ao pesquisar contatos:", err);
    res.status(500).json({ erro: "Erro no servidor" });
  }
});

app.get("/gestao", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM contato");
    const contatos = rows.map(c => ({
      ...c,
      f_dtnas: formatarData(c.f_dtnas)
    }));
    res.json(contatos);
  } catch (err) {
    console.error("❌ Erro na rota /gestao:", err.message);
    res.status(500).json({ erro: "Erro no servidor", detalhe: err.message });
  }
});

app.delete("/excluirgestao/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM contato WHERE n_contato_contato = ?", [req.params.id]);
    res.status(200).json({ msg: "Contato excluído com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir:", error);
    res.status(500).json({ erro: "Erro ao excluir contato." });
  }
});

app.put("/editarcontato/:id", async (req, res) => {
  const { id } = req.params;
  const { s_nome_conato, s_celular_contato, s_email_contato, f_dtnas } = req.body;

  try {
    await db.query(
      "UPDATE contato SET s_nome_conato = ?, s_celular_contato = ?, s_email_contato = ?, f_dtnas = ? WHERE n_contato_contato = ?",
      [s_nome_conato, s_celular_contato, s_email_contato, f_dtnas, id]
    );
    res.json({ msg: "Contato atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    res.status(500).json({ erro: error.message });
  }
});

app.get("/pesquisarcontatos/nome/:pesq", async (req, res) => {
  const pesq = req.params.pesq;
  try {
    const [rows] = await db.query(
      "SELECT * FROM contato WHERE s_nome_conato LIKE ?",
      [`%${pesq}%`]
    );
    res.json(rows);
  } catch (error) {
    console.error("Erro na pesquisa:", error);
    res.status(500).json({ erro: "Erro ao pesquisar contatos" });
  }
});







// Porta
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
