const c1 = document.getElementById("c1")


const msg = ()=> {
    alert('diann tu clicou')
}

c1.addEventListener("click",(evt)=>{
    let el=evt.target
    el.classList.add("destaque")
})
