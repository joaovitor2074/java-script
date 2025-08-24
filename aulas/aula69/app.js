const express = require('express');
const cors = require('cors'); // importar o cors
const app = express();

app.use(cors()); // libera todas as origens

app.get("/aula", (req, res) => {
    const dados = {
      janeiro: Math.random() * 50,
      fevereiro: Math.random() * 50,
      marco: Math.random() * 50,
      abril: Math.random() * 50,
      maio: Math.random() * 50,
      junho: Math.random() * 50,
    };
    
    console.log("📊 Dados enviados:", dados);
    res.json(dados);
});

app.listen(2074, () => {
  console.log('Servidor rodando na porta 2074');
});
