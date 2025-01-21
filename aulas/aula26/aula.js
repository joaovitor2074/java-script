const p_array = document.querySelector("#array")
const btnverificar = document.querySelector("#btnverificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16,12,10,17,15,13,11,19]
p_array.innerHTML = "[" + elementos_array + "]"

btnverificar.addEventListener("click", (evt) =>{
    resultado.innerHTML = "array nao encontrado"
    const ret = elementos_array.some((e,i) =>{
        if(e<18){
             resultado.innerHTML = "array nao conforme na posicao " + i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML = "OK"
    }
})