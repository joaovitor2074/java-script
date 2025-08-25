class Cxmsg {
    divmsg = null
    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body


    }

   mostrar = () => {
    this.divmsg = document.createElement("div")
    const estilo_divmsg =
        "display:flex;" +
        "justify-content:center;" +
        "align-items:center;" +   // corrigido
        "position:absolute;" +
        "top:0px;" +
        "width:100%;" +           // adicionado ponto e vírgula
        "height:100vh;" +         // adicionado ponto e vírgula
        "background-color:rgba(0,0,0,0.7);"

    this.divmsg.setAttribute("id", "divmsg")
    this.divmsg.setAttribute("style", estilo_divmsg)
    this.destino.prepend(this.divmsg)

    
    const estilo_areacsmsg = 
    "display:flex;"+
    "justify-content:flex-start;"+
    "align-items:flex-start;"+
    "flex-direction:column;"+
    "width:300px;"
    
    const areacxmsg = document.createElement("div")
    areacxmsg.setAttribute("style",estilo_areacsmsg)
    this.divmsg.appendChild(areacxmsg)

    const estilo_titulocsmsg = 
        "display:flex;"+
        "justify-content:flex-start;"+
        "align-items:center;"+
        "background-color:"+this.cor+";"+
        "width:100%;"+
        "color:#fff;"+
        "padding:5px;"+
        "border-radius:5px 5px 0px 0px;"



    const titulocxmsg = document.createElement("div")
    titulocxmsg.setAttribute("style",estilo_titulocsmsg)
    titulocxmsg.innerHTML = "teste"
    areacxmsg.appendChild(titulocxmsg)


}


    ocultar = () => {

    }
}