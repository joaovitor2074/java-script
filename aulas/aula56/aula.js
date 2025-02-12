class jogador  {
    constructor(nome){
        this.id  = Symbol()
        this.nome  = nome
    }
}

let jogadores  = [new jogador("j1"),new jogador("j2"),new jogador("j3"),new jogador("j4"),new jogador("j3")]

let s = []

let s_jogadores = jogadores.filter((e)=>{
    return e.nome == "j3"
})

s = s_jogadores.forEach((e)=>{
    return  e.id
})

console.log()