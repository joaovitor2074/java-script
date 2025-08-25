const config = {
        titulo :"Teste",
        texto : "jv",
        cor : "#48f"
}
    const cxmsg1 = new Cxmsg(config)


const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg")
btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg1.mostrar()
})