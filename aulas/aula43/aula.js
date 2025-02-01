const teclasnum = [...document.querySelectorAll(".num")]
const teclasop = [...document.querySelectorAll(".op")]
const teclasres = document.querySelector(".res")
const display = document.querySelector("#display")

teclasnum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})
teclasop.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})
