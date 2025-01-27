class pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    info(){
        return `nome: ${this.nome} <br/>
                idade: ${this.idade}<br/>
                ---------------------------------------------------------------- `
    }}
const pessoas = []
let f1 = document.querySelector("#f_form")
let f2 = document.querySelector("#f2_form")
let btn = document.querySelector("#btn_add")
let res =  document.querySelector("#pres")
btn.addEventListener("click",(evt)=>{
    let p1 = new pessoa(f1.value,f2.value)
    pessoas.push(p1)
    res.innerHTML = pessoas.map(p => p.info()).join(" ")
})