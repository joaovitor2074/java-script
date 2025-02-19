const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_pressao = document.getElementById("p_pressao")
const btn_texto = document.getElementById("btn_texto")

const obterdados =()=>{

    
    const endpoint = 'https://4323399f-5a23-4f3d-a637-50ab54c24db8-00-1rtj5ppazpb2o.kirk.replit.dev'
    
    fetch(endpoint)
    
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = `Temperatura: ${dados.temp}`
        p_nivel.innerHTML = `nivel: ${dados.nivel}`
        p_pressao.innerHTML = `pressao: ${dados.pressao}`
    })
}
// let intervalo = setInterval(obterdados,3000)

let dados = {
    nome: "jv",
    idade: 16,
    situacao: "sofrendo"
}

let cabecalho = {
    method:"POST",
    body:JSON.stringify(dados)
}
const gravardados = ()=>{
    const endpoint = "https://4323399f-5a23-4f3d-a637-50ab54c24db8-00-1rtj5ppazpb2o.kirk.replit.dev"
    fetch(endpoint,cabecalho)
    .then(ret =>{
        console.log(ret)
    })
}
btn_texto.addEventListener("click",(evt)=>{
    gravardados()
})
