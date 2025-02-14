const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

const init  = ()=>{
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.width = "100px"
    tamax =  window.innerWidth - parseInt(carro.style.width)
}

let anima = null

let tamax  = null


const move = (dir)=>{
    if(dir > 0){
        if(parseInt( carro.style.left) <= tamax){
                 carro.style.left = parseInt( carro.style.left) + (10*dir) + "px"
                 anima = setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    
    } 

    else if(dir < 0){
        if(parseInt( carro.style.left) >= 0){
            carro.style.left = parseInt( carro.style.left) + (10*dir) + "px"
            anima = setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    }
    
}
console.log(tamax)

btn_parar.addEventListener("click",(evt)=>{
   clearTimeout(anima)
    
})
btn_esquerda.addEventListener("click",(evt)=>{
    clearTimeout(anima)
    move(-1)
})
btn_direita.addEventListener("click", (evt) => {
    clearTimeout(anima);
    move(1)
})



// window.onload(init())
window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamax  = window.innerWidth - parseInt(carro.style.width)
})