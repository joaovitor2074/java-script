/*const soma = function(v1,v2){
    return v1 + v2
}*/

const soma = (v1,v2) => {
    let res = v1 + v2
    return res
}
console.log(soma(10,5))



// sem uso do return
const adicionar= n =>n+=10

console.log (adicionar(10))


// com 1 valor

const nome = n => n

 console.log (nome("joao"))