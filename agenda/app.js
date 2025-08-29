
const express = require("express")
const cors = require("cors")
const db = require('./db');

 const app = express()

app.use(cors())
app.use(express.json())

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





const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));