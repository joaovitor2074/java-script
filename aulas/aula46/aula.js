
const relogio = document.getElementById("relogio");
const horaAlarme = document.getElementById("horaAlarme");
const tempoAlarme = document.getElementById("tempoAlarme");
const ativar = document.getElementById("ativar");
const parar = document.getElementById("parar");
const somAlarme = document.getElementById("somAlarme");

let alarmeativo = false
let intervaloalarme;

const relogios = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?"0" + hora:hora
    let minuto = data.getMinutes()
    minuto = minuto<10?"0" + minuto:minuto
    let segundos = data.getSeconds()
    segundos = segundos<10?"0" + segundos:segundos

    relogio.innerHTML = `${hora}:${minuto}:${segundos}`

    if(alarmeativo && horaAlarme.value == `${hora}:${minuto}`){
        console.log("deu certo")
    }
}
const intervalo = setInterval(relogios, 1000)

ativar.addEventListener("click",(evt)=>{
    if(horaAlarme.value){
        alarmeativo = true
        console.log("ok")
    }else{
        alert("adicione um horario ;)")
    }
})