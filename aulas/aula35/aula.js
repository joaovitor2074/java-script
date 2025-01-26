class Carro {
    constructor(pcarro, ptipo) {
        this.carro = pcarro;
        if (ptipo == 1) {

            this.tipo = "Esportivo"
            this.velmax = 300

        } else if (ptipo == 2) {

            this.tipo = "Utilitário"
            this.velmax = 120

        } else if (ptipo == 3) {

            this.tipo = "SUV"
            this.velmax = 180

        } else {

            this.tipo = "passeio"
            this.velmax = 150
        }
    }

    getNome(){
        return this.carro;
    }
    getTipo(){
        return this.tipo;
    }
    getvelmax(){
        return this.velmax;
    }

    setNome(novoNome){
        this.carro = novoNome;
    }
    
    info() {
        console.log(`Carro: ${this.carro}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
    }
}

let c1 = new Carro("Rapidao", 1)
let c2 = new Carro("super luxo", 3)
let c3 = new Carro("Bombadao", 4)
let c4 = new Carro("Carrego tudo", 2)

c1.setNome("super veloz")


 c1.info()
// c2.info()

// console.log(c1.getNome())
