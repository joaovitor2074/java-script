const caixa1 = document.querySelector("#caixa1")
const btn_c = document.querySelectorAll(".curso")
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS", "JavaScript", "PHP","React", "MySQL","jv" ]

cursos.map((el,chave)=>{
    const novoelemento = document.createElement("div")
    novoelemento.setAttribute("id", "c" + chave)
    novoelemento.setAttribute("class","curso c1")
    novoelemento.innerHTML= el
    novoelemento.appendChild(btn_lixeira)
    
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","./lixeira.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click", (evt)=>{
        
        caixa1.removeChild(evt.target.parentNode)
    })
    caixa1.appendChild(novoelemento)
})






// console.log(c1_2.parentNode.parentNode.children[4])




// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)

// console.log (btn_c[0].children.length >0 ? "possui filhos" : "nao possui filhos")


// console.log(caixa1.children[1].innerHTML="jv")




// console.log(btn_c[0].getRootNode())
// console.log(btn_c[0].ownerDocument)

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)