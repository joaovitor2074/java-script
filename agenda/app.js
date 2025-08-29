
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
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));