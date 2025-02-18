const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.getElementById("btn_texto")


btn_texto.addEventListener("click",(evt)=>{

})


let num = 10
localStorage.setItem("numero" ,num)
console.log(localStorage.getItem("numero"))
console.log(localStorage.key(0))
