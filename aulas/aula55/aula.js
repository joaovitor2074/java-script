import {contato} from "./contatos.js";

const listacontato = document.getElementById("listacontato")
const btn_gravar = document.getElementById("btn_gravar")
btn_gravar.addEventListener("click",(evt)=>{
    const cont = {
        nome: document.getElementById("if_nome").value,
        telefone: document.getElementById("if_telefone").value,
        email: document.getElementById("if_email").value
    }
    contato.addcontato(cont,listacontato)
    console.log(contato.gettodoscontatos())
})