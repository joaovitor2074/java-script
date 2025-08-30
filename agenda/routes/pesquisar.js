const btn_pesqusar = document.getElementById("btn_pesq")
const txt_pesq  =document.getElementById("txt_pesq")

btn_pesqusar.addEventListener("click",(evt)=>{
    if(txt_pesq.value == ""){
        alert("digite a pesquisa")
        txt_pesq.focus()
        return
    }
    console.log(document.getElementsByName("f_pesq").value)
})