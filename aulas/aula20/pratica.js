const caixa1 = document.getElementById("c1");
const caixa2 = document.getElementById("c2");
const btn = document.getElementById("butao");
const texto = [...document.getElementsByClassName("textos")];

texto.forEach((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;
        curso.classList.toggle("selecionar");
    });
});

btn.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll(".selecionar")];

    selecionados.forEach((el) => {
        // Verifica se o elemento está em caixa1 ou caixa2 e move para a outra
        if (caixa1.contains(el)) {
            caixa2.appendChild(el);
        } else {
            caixa1.appendChild(el);
        }

        // Remove a classe "selecionar" após mover
        el.classList.remove("selecionar");
    });
});
