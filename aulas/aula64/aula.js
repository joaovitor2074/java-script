let numero = [10,20,30,40,50,60,70,80,90]


let[a,b,c,...d] = numero
let obj = {nome:"jv", idade:16}

let {nome,idade} = obj

// console.log(nome)
// console.log(idade)


const cores = ()=>{
    return ["verde","vermelho","azul","branco"]
}

// let [c1,c2,,c3] = cores()
// console.log(c1)
// console.log(c2)
// console.log(c3)


let texto = "curso de javascript"
let [c1,c2,c3] = texto.split(" ")
console.log(c1)
console.log(c2)
console.log(c3)