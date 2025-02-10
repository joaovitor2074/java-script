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