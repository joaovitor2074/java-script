const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const posx = document.getElementById('posx');
const posy = document.getElementById('posy');
const largura = document.getElementById('largura');
const altura = document.getElementById('altura');


q1.accessKey = "m"
q2.accessKey = "n"

q1.addEventListener("click",(evt)=>{
    let DOMRect_q1 = q1.getBoundingClientRect()
    posx.innerHTML = `posx : ${DOMRect_q1.x}`
    posy.innerHTML = `posy : ${DOMRect_q1.y}`
    largura.innerHTML = `largura : ${DOMRect_q1.width}`
    altura.innerHTML = `posy : ${DOMRect_q1.height}`
})
q2.addEventListener("click",(evt)=>{
    let DOMRect_q2 = q2.getBoundingClientRect()
    posx.innerHTML = `posx : ${DOMRect_q2.x}`
    posy.innerHTML = `posy : ${DOMRect_q2.y}`
    largura.innerHTML = `largura : ${DOMRect_q2.width}`
    altura.innerHTML = `posy : ${DOMRect_q2.height}`
})
