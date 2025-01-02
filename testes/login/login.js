function jv() {
    // Seleciona os elementos da interface
    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const res = document.getElementById("res");

    // Reseta a mensagem de resultado
    res.innerHTML = "";

    // Validação do usuário
    if (!usuario.value.trim()) {
        alert("Digite seu usuário.");
        return;
    }
``
    const usuarioValido = ["Jv", "Joao", "vitor"];
    if (!usuarioValido.includes(usuario.value.trim())) {
        res.innerHTML = "Usuário incorreto.";
        return;
    }
    alert("Usuário OK!");

    // Validação da senha
    if (!senha.value.trim()) {
        alert("Digite sua senha.");
        return;
    }

    if (senha.value.trim() !== "02042011") {
        res.innerHTML = "Senha incorreta.";
        return;
    }

    // Caso todas as validações passem
    res.innerHTML = "Senha OK! Tudo funcionou.";
}
