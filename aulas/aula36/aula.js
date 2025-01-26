class pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    info(){
        return `nome: ${this.nome} <br/>
        idade: ${this.idade} <br/>
        -------------------------------------------------------------- `
    }
}

const pessoas = []

let nome = document.querySelector("#f_form")
let idade = document.querySelector("#f2_form")
let btn = document.querySelector("#btn_add")
let res = document.querySelector("#pres")

btn.addEventListener("click",(evt)=>{
    let p1 = new pessoa(nome.value,idade.value)
    pessoas.push(p1)
    console.log(pessoas)
    res.innerHTML =pessoas.map(p => p.info())
})
