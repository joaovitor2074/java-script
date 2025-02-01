const nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new nave(100)

nave.prototype.vidas = 3
nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

    console.log(n1);
    console.log(n1.energia);
    console.log(n1.disparos)


    
