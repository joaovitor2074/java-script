const data = new Date()
const  divdata = document.getElementById("divdata")

// console.log(Date.now())

let mes = data.getMonth()
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