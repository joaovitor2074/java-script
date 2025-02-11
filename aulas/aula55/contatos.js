import { contatos } from "./bancocontatos.js";

let contato = {
    /*  adimistrar contatos*/

    gettodoscontatos:function(){
        return contatos
    },
    getcontato:function(i_contato){
        return contatos[i_contato]
    },
    addcontato:function(novocontato,destinoDom){
        const cont = {
            nome:novocontato.nome,
            telefone: novocontato.telefone,
            email: novocontato.email
        }
        contatos.push(cont)
        const div = document.createElement("div")
        div.setAttribute("class", "contato")
        const p_nome = document.createElement("p")
        p_nome.innerHTML = novocontato.nome
        const p_telefone = document.createElement("p")
        p_telefone.innerHTML = novocontato.telefone
        const p_email = document.createElement("p")
        p_email.innerHTML = novocontato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDom.appendChild(div)
    }
}

export {contato}