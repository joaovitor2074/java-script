const divtodas = [...document.getElementsByTagName("div")]
const ctodos = [...document.getElementsByClassName("curso")]
const c1 = [...document.getElementsByClassName("c1")]
const c2 = [...document.getElementsByClassName("c2")]
const cursoe = document.getElementById("c1")


const query_divtodas = [...document.querySelectorAll("div>p")]
const query_ctodos = [...document.querySelectorAll(".curso")]
const query_c1 = [...document.querySelectorAll(".c1,p")]
const query_c2 = [...document.querySelectorAll(".c2")]
const query_cursoe = document.querySelectorAll("#c1")[0]

console.log(query_divtodas)
// console.log(query_ctodos)
// console.log(query_c1)
// console.log(query_c2)
// console.log(query_cursoe)


// console.log(ctodos)
// console.log(c1)
// console.log(c2)
// console.log(cursoe)


// c2.map((el)=>{
//     el.classList.add("destaque")
// })