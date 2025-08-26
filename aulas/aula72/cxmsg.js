
class Cxmsg {
    divmsg = null
    constructor(config) {
        this.cor =" #78b7ffff"
        this.destino = document.body
        
        
    }
    
    mostrar = (titulo,texto) => {
       this.titulo = titulo
       this.texto = texto
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
    titulocxmsg.innerHTML = this.titulo
    areacxmsg.appendChild(titulocxmsg)



    const estilo_corpocxmsg = 
    "display:flex;" + 
    "justify-content:flex-start;" +
    "align-items:center;" +
    "width:100%;" +
    "background-color:#eee;" +
    "color:#000;" +
    "padding:30px 5px;";




    const corpocxmsg = document.createElement("div")
    corpocxmsg.setAttribute("style",estilo_corpocxmsg)
    corpocxmsg.innerHTML = this.texto
    areacxmsg.appendChild(corpocxmsg)

    const estilo_rodapecxmsg = 
        "display:flex;"+
        "justify-content:center;"+
        "align-items:center;"+
        "width:100%;"+
        "height:10%;"+
        "background-color:#ccc;"+
        "color:#000;"+
        "padding:5px;"+
        "border-radius:0px 0px 5px 5px;"


    const rodapecxmsg = document.createElement("div")
    rodapecxmsg.setAttribute("style",estilo_rodapecxmsg)
    areacxmsg.appendChild(rodapecxmsg)

    const estilo_btnok=
    "background-color:" +this.cor +";"+
    "color:#fff;"+
    "padding:10px 50px;"+
    "border-radius:5px;"+
    "cursor:pointer;"+
    "text-transform:uppercase;";



    const btn_ok = document.createElement("button")
    btn_ok.setAttribute("style",estilo_btnok)
    btn_ok.innerHTML = "OK"
    btn_ok.addEventListener("click",(evt)=>{
        this.ocultar()
    })
    rodapecxmsg.appendChild(btn_ok)



}


    ocultar = () => {

        this.divmsg.remove()

    }
}

export {Cxmsg}