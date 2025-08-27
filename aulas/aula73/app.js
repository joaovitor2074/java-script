import express from "express"
import cors from "cors" // importe o cors

const app = express()

app.use(cors()) // permite qualquer origem

app.get("/aluno", (req, res) => {
    const matricula = req.query.matricula
    const senha = req.query.senha

    if (matricula === "123" && senha === "123") {
        res.json({ nome: "JV", idade: 16, curso: "Programação" })
    } else {
        res.status(401).json({ erro: "Dados inválidos" })
    }
})

app.listen(2074, () => console.log("Servidor rodando em http://localhost:2074"))
