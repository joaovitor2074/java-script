const f_nome = document.getElementById("nome");
const f_nota = document.getElementById("nota");
const f_msg = document.getElementById("f_msg");
const btn = document.querySelector("#btn_validar");




// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
    
//     let estadoValidacao = f_nota.validity; // Correção: "validity" com letra minúscula
//     let msg = ""; // Agora msg é uma string vazia ao invés de null

//     if (estadoValidacao.valueMissing) {
//         msg = "Poxa, este campo é obrigatório"; // Adiciona a mensagem para exibição
//         f_nota.setCustomValidity(msg);
//     } else if (estadoValidacao.rangeOverflow) { // Correção: acessar dentro de validity
//         msg = "Nossa, que nota alta você digitou!";
//         f_nota.setCustomValidity(msg);
//     } else if (estadoValidacao.rangeUnderflow) { // Correção: acessar dentro de validity
//         msg = "Credo, que nota baixa você digitou!";
//         f_nota.setCustomValidity(msg);
//     } else {
//         f_nota.setCustomValidity(""); // Remove a mensagem se o campo estiver válido
//     }

//     f_nota.reportValidity(); // Exibe a mensagem no próprio campo
//     f_msg.innerHTML = msg;
// });
