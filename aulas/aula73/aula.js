import { Login } from "./login.js"

// Aplica o CSS automaticamente
Login.aplicarEstilo()

// Seleciona o formulário
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault() // evita o reload da página

    const mat = form.matricula.value
    const pas = form.senha.value

    // Chama o login
    Login.login("123", "123")
})
