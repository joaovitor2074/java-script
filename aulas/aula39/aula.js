class carro{ //classe pai
    constructor(nome,portas,cor){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = cor
    }
       
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }

    setCor(cor) {
        this.cor = cor;
    }
}
    

class militar extends carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem= blindagem
        this.municao = municao
        this.setCor("verde")
    }

    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }
    }

}

const c1 = new carro("normal",4)
const c2 = new militar("lutador",1,100,50)


c1.ligar()
c1.setCor("preto")


console.log(`nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`ligado: ${(c1.ligado?"Sim":"Nao")}`)
console.log(`velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log("----------------------------")
console.log(`nome: ${c2.nome}`)
console.log(`portas: ${c2.portas}`)
console.log(`ligado: ${(c2.ligado?"Sim":"Nao")}`)
console.log(`velocidade: ${c2.vel}`)
console.log(`cor: ${c2.cor}`)
