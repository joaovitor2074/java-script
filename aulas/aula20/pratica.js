const caixa1 = document.getElementById("c1")
const caixa2 = document.getElementById("c2")
const btn = document.getElementById("botao")
const texto = [...document.getElementsByClassName("textos")]


texto.map((el) =>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionar")
    })
})
