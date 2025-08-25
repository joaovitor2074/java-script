const head = document.head
const body = document.body

const estilo = "<link rel='stylesheet' href='topo.css'>"
head.innerHTML += estilo


const topo = document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("class", "topo")
body.prepend(topo)


const logo = "<img src = 'logo.png'>"
