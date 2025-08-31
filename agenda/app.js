
const express = require("express")
const cors = require("cors")
const db = require('./db');
 const app = express()

//configuracao
app.use(cors())
app.use(express.json())


//rotas
app.get("/contato",async(req,res)=>{
    try {
        const [rows] = await db.query('SELECT * FROM contato')
        res.json(rows)
    }catch(error) {
    res.status(500).json({ erro: error.message });
    }
})

app.post("/addcontatos", async (req, res) => {
    const { f_nome, f_celular, f_email, f_datanascimento } = req.body

    console.log("Recebi do front:", req.body)

    try {
        await db.query(
            "INSERT INTO contato (s_nome_conato, s_celular_contato, s_email_contato, f_dtnas) VALUES (?, ?, ?, ?)",
            [f_nome, f_celular, f_email, f_datanascimento]
        )
        res.status(200).json({ msg: "Contato gravado com sucesso!" })
    } catch (error) {
        console.error("Erro ao inserir:", error.sqlMessage || error.message)
        res.status(500).json({ erro: error.message })
    }
})

app.get("/pesquisarcontatos/:tipo/:valorpesq", async (req, res) => {
    const { tipo, valorpesq } = req.params;

    try {
        let query = "SELECT * FROM contato WHERE ";
        let rows;

        switch (tipo) {
            case "id":
                query += "n_contato_contato = ?";
                [rows] = await db.query(query, [valorpesq]);
                console.log("tudo ok")
                break;

            case "nome":
                query += "s_nome_conato like ?";
                [rows] = await db.query(query, [`%${valorpesq}%`]);
                console.log("tudo ok")
                break;

            case "nasc":
                query += "f_dtnas = ?";
                [rows] = await db.query(query, [valorpesq]);
                console.log("tudo ok")
                break;

            case "email":
                query += "s_email_contato like ?";
                [rows] = await db.query(query, [`%${valorpesq}%`]);
                console.log("tudo ok")
                break;

            default:
                return res.status(400).json({ erro: "Tipo de pesquisa inválido" });
        }

        // Retorna os resultados encontrados
       let resultado = ()=>res.json(rows)
       resultado()
       
       
    } catch (err) {
        console.error("❌ Erro ao pesquisar contatos:", err);
        res.status(500).json({ erro: "Erro no servidor" });
    }

});


app.get("/gestao", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM contato"); // cuidado: no phpMyAdmin tua tabela se chama 'contato', não 'contatos'
        res.json(rows);
    } catch (err) {
        console.error("❌ Erro na rota /gestao:", err.message); // mostra no terminal
        res.status(500).json({ erro: "Erro no servidor", detalhe: err.message });
    }
});






//porta
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));