class superclasse{
    constructor(propiedade){
        this.nome = propiedade
    }
    metodopai(){
        return `O nome é ${this.nome}`
    }
}


class subclasse extends superclasse{
    constructor(propiedade, idade){
        super(propiedade)
        this.idade = idade
    }
    metodofilho(){
        return `A idade é ${this.idade}`
    }
}

const objeto1 = new subclasse("Luiz", 30)
console.log(objeto1.metodofilho())