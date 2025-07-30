class npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info=function(){
        console.log(`energia: ${this.energia}`)
        console.log(`Alerta: ${(npc.alerta?"sim":"nao")}`)
    }

    static alertar = function(){
        npc.alerta = true
    }
}

const npc1 = new npc(100)

npc.alerta  = true


npc1.info()