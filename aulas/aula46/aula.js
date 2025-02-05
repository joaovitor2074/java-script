
const relogio = document.getElementById("relogio");
const horaAlarme = document.getElementById("horaAlarme");
const tempoAlarme = document.getElementById("tempoAlarme");
const ativar = document.getElementById("ativar");
const parar = document.getElementById("parar");
const som = document.getElementById("audio")


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
        tocaralarme()
    }
}

function tocaralarme(){
    som.play()
    intervaloalarme  =  setTimeout(()=>{
        som.pause()
        som.currentTime  = 0

    },tempoAlarme.value  *  1000)
}

ativar.addEventListener("click",(evt)=>{
    if(horaAlarme.value){
        alarmeativo = true
        console.log("ok")
    }else{
        alert("adicione um horario ;)")
    }
})

parar.addEventListener("click",(evt)=>{
    alarmeativo =  false
    clearTimeout(intervaloalarme)
    som.pause()
    som.currentTime  = 0
})

const intervalo = setInterval(relogios, 1000)