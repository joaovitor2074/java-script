const caixa1 = document.querySelector(".caixa")
const btnc1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]


caixa1.addEventListener("click",(evt)=>{
    console.log("clicou")
})

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        evt.stopPropagation()
    })
})

