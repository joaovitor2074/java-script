const btn_gravar = document.getElementById("btn_gravar")
const btn_cancelar = document.getElementById("btn_cancelar")
const f_nome = document.getElementById("f_nome")
const f_celular = document.getElementById("f_celular")
const f_email = document.getElementById("f_email")
const f_datanascimento = document.getElementById("f_datanascimento")

btn_gravar.addEventListener("click", (evt) => {
    evt.preventDefault(); // evita recarregar a página caso esteja dentro de um <form>

    const valores = {
        f_nome: f_nome.value,
        f_celular: f_celular.value,
        f_email: f_email.value,
        f_datanascimento: f_datanascimento.value
    }

    const cabecalho = {
        method: "POST", // estava escrito "Mathod"
        headers: {
            "Content-Type": "application/json" // necessário pro back entender JSON
        },
        body: JSON.stringify(valores) // aqui vai o JSON dos dados
    }

    const endpoint = "http://localhost:3000/addcontatos"

   fetch(endpoint, cabecalho)
    .then(res => {
        if (!res.ok) {
            throw new Error("Erro na resposta do servidor: " + res.status)
        }
        return res.json()
    })
    .then(data => {
        console.log("✅ Resposta do backend:", data)
        f_nome.value = ""
        f_celular.value = ""
        f_email.value = ""
        f_datanascimento.value = ""
        f_nome.focus()
    })
    .catch(err => {
        console.error("❌ Erro de conexão ou gravação:", err)
    })
})

btn_cancelar.addEventListener("click",(evt)=>{
        f_nome.value = ""
        f_celular.value = ""
        f_email.value = ""
        f_datanascimento.value = ""
        f_nome.focus()
})


