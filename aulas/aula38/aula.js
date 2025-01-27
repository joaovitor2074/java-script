const pessoa = {
    nome:"",
    idade: 0,

    falar:function(){
        return`nome: ${this.nome}; idade: ${this.idade}`
    }
}

let f1 = document.querySelector("#f_form")
let f2 = document.querySelector("#f2_form")
let btn = document.querySelector("#btn_add")
let res = document.querySelector("#pres")

btn.addEventListener("click", (evt)=>{
    p1 = [pessoa.nome = f1.value, pessoa.idade = f2.value]
    console.log(p1)

    for( p in p1){
        res.innerHTML = pessoa.falar()
    }
    // res.innerHTML = p1.map().pessoa.falar()
})

