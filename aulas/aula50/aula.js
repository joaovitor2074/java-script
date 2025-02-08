const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt)=>{
    alert("where does she need to work today?")
})
btn_confirm.addEventListener("click", (evt)=>{
    const retonro = confirm("where does she need to work today?")
    console.log(retonro)
})
btn_prompt.addEventListener("click", (evt)=>{
    const promp = prompt('qual o seu nome?')
    console.log(promp)
})