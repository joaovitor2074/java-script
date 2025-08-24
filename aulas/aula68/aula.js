const btn_texto = document.getElementById("btn_texto")


const obterDados = ()=>{

    
    const endPoint = "https://4323399f-5a23-4f3d-a637-50ab54c24db8-00-1rtj5ppazpb2o.kirk.replit.dev/"
    fetch(endPoint).then(res => res.json())
    
    .then(dados=>{
        console.log(dados)
        const p_temp = document.getElementById("p_temp")
        const p_nivel = document.getElementById("p_nivel")
        const p_pressao = document.getElementById("p_pressao")
        
        p_temp.innerText = "temperatura: " + dados.temperatura
        p_nivel.innerText = "nivel: " + dados.nivel
        p_pressao.innerText = "pressao: " + dados.presssao
        
    })
}
//let intervalo = setInterval(obterDados,3000)


