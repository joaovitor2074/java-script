let computador = {
    cpu:"xeon",
    ram:"16gb",
    ssd:"1tb",
    info:function(){
        console.log(`CPU${this.cpu} RAM: ${this.ram} SSD: ${this.ssd}`)
    }
}

const computadores = [{
        cpu:"xeon",
        ram:"16gb",
        ssd:"1tb",
        info:function(){
            console.log(`CPU${this.cpu} RAM: ${this.ram} SSD: ${this.ssd}`)
    },
        cpu:"i3",
        ram:"8gb",
        ssd:"1tb",
        info:function(){
            console.log(`CPU${this.cpu} RAM: ${this.ram} SSD: ${this.ssd}`)
    },
        cpu:"i9",
        ram:"31gb",
        ssd:"3tb",
        info:function(){
            console.log(`CPU${this.cpu} RAM: ${this.ram} SSD: ${this.ssd}`)
    }
}];
computadores.forEach((e)=>{
    console.log(e.info)
})
/*----------------------------------------------------------------------------------------------*/ 
// const c1 = Object.assign({},computador.info())
// c1.info

const o1 = {
    obj1:"1"
}

const o2 = {
    obj2:"2"
}

const o3 = {
    obj3:"3"
}
const o4 = Object.assign(o1,o2,o3)
// console.log(o4)

delete(computador.ssd)
// console.log(computador)

const c2 = Object.create(computador)
c2.cpu = "i12"
c2.info()