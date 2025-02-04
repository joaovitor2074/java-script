const teclasnum = [...document.querySelectorAll(".num")]
const teclasop = [...document.querySelectorAll(".op")]
const teclasres = document.querySelector(".res")
const display = document.querySelector("#display")
const limpar = document.getElementById("tlimpar")
const virgula = document.getElementById("separador")
const igual = document.getElementById("tigual")
const calc = document.querySelector("#calc")
const calcaba = document.querySelector("#calcaba")

let sinal = false
let decimal = false;
let aba =  false



teclasnum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal = true
                if(display.innerHTML =="0"){
                    display.innerHTML = "0"
                }
                display.innerHTML+=evt.target.innerHTML
            }
            
        }else{
            display.innerHTML += evt.target.innerHTML
            if(display.innerHTML =="0"){
                display.innerHTML = ""
            }
        }

    })
})
teclasop.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML =="0"){
                display.innerHTML = ""
            }

            if(evt.target.innerHTML=="x"){
                display.innerHTML +="*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
        
    })
})

limpar.addEventListener("click", (evt)=>{
    display.innerHTML = ""
    sinal = false
    decimal = false
})
igual.addEventListener("click", (evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})
calcaba.addEventListener("click",()=>{
    if(aba == false){
        aba = true
        calc.classList.add("calc_exibir")
    }else if(aba == true){
        aba = false
        calc.classList.remove("calc_exibir")
    }
})
