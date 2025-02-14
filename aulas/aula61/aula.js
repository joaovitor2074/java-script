const carro = document.getElementById("carro")
const btn_play = document.getElementById("btn_play")
const btn_parar = document.getElementById("btn_parar")

const init  = ()=>{
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.width = "100px"
    carro.style.height = "40px"
    tamax =  window.innerWidth - parseInt(carro.style.width)
}

let anima = null

let tamax  = null
let tamcarro = null
let dir = 0


const move = ()=>{
    if(parseInt(carro.style.left)>=tamax){
        dir = -1
    }else if(parseInt(carro.style.left)<= 0 ){
        dir = 1
    }
    carro.style.left  =parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(move,20)
}
console.log(tamax)


btn_parar.addEventListener("click",(evt)=>{
   clearTimeout(anima)
    
})

btn_play.addEventListener("click",()=>{
    move()
})



// window.onload(init())
window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamax  = window.innerWidth - parseInt(carro.style.width)
})
window.addEventListener("keydown",(evt)=>{
    if(evt.code ==="ArrowUp"){
        carro.style.width = parseInt(carro.style.width)+10+"px"
        carro.style.height = parseInt(carro.style.height)+10+"px"
    }
    if(evt.code ==="ArrowDown"){
        carro.style.width = parseInt(carro.style.width)-10+"px"
        carro.style.height = parseInt(carro.style.height)-10+"px"
    }
})
tamcarro = parseInt(carro.style.width)
tamax = window.innerWidth - parseInt(carro.style.width)