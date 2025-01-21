const p_array = document.querySelector("#array")
const p_pesquisar = document.querySelector("#txt_pesquisar")
const btn_pesquisar = document.querySelector("#btnpesquisar")
const resultado = document.querySelector("#resultado")


const elementos_array = ["html" , "css", "Javascript"]
p_array.innerHTML = elementos_array

btn_pesquisar.addEventListener("click",(evt) =>{
    resultado.innerHTML ="valor nao encontrado"
    const ret = elementos_array.find((e,i) =>{
        if(e.toUpperCase()==p_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "valor encontrado "+ e + " na posicao "+ i 
            
        }
    })
})