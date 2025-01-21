const p_array = document.querySelector("#array")
const btnreduzir = document.querySelector("#btnreduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "["+elementos_array+"]"

btnreduzir.addEventListener("click",(evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior,atual,pos) =>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
    })
resultado.innerHTML+="<br/>anterior:" + ant+ "<br/> atual:" + atu + "<br/> dobro:" + dobro
})