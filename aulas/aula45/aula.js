const data = new Date()
const  divdata = document.getElementById("divdata")
const relogio =  document.getElementById("relogio")

// console.log(Date.now())

let mes = data.getMonth() + 1
mes = mes<10?"0" + mes:mes
console.log(mes)


console.log(data.getMonth())
if(data.getDate() <10){
    const datas = "0" +  data.getDate()  + "/"  + mes + "/"  +  data.getFullYear()
    divdata.innerHTML  = datas
    console.log(datas)
}else{
    const datas = data.getDate()  + "/"  + mes + "/"  +  data.getFullYear()
    divdata.innerHTML  = datas
    console.log(datas)
}

const relogios = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10? "0" + hora: hora
    let minuto = data.getMinutes()
    minuto = minuto<10? "0" + minuto: minuto
    let segundos = data.getSeconds()
    segundos = segundos <10?"0" + segundos:segundos
    relogio.innerHTML = hora + ":" + minuto + ":" + segundos
}

const intervalo = setInterval(relogios,1000)

