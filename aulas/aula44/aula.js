const numero = document.getElementById("numero")
const btn = document.getElementById("btn")

btn.addEventListener("click", (evt)=>{
    numero.innerHTML = "processando..."

    let promise =new Promise((resolve,reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("deu tudo certo")
            }else{
                reject("deu tudo errado")
            }
        },tempo)
    })
    
    promise.then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    promise.catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove("ok")
        numero.classList.add("erro")
    
    })
})




numero.innerHTML = "esperando..."

