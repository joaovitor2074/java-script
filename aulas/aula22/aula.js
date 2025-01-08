const caixa1 = document.querySelector("#caixa1")
const btn_c = document.querySelectorAll(".curso")


console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log (caixa1.children.length >0 ? "possui filhos" : "nao possui filhos")




// console.log(btn_c[0].getRootNode())
// console.log(btn_c[0].ownerDocument)

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)