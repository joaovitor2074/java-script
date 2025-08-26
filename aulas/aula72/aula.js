import { Cxmsg } from "./cxmsg.js"

// const config = {
//         titulo :"ThaySoft",
//         texto : "jv",
//         cor : "#48f"
// }


const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg")
btn_mostrarcxmsg.addEventListener("click",()=>{
    const msg = new Cxmsg
    msg.mostrar("jv","neymar")
})