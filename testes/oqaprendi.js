class animal{
    fazersom(){
        console.log("som generico")
    }
}

class cachorro extends animal{
    fazersom(){
        console.log("au au")
    }
}

class gato extends animal{
    fazersom(){
        console.log("miau")
    }
}
const an1 = new cachorro()
const an2 = new gato()

an1.fazersom()
an2.fazersom()