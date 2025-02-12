const nome = Symbol("nome")
const numero = Symbol("nome")
const cor = Symbol("nome")


const jogador = {
    nome:"jv",
    numero:10,
    cor:"azul"
}

for(p in jogador){
    console.log(p)
}


console.log(jogador.nome)