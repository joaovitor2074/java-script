const caixa = document.querySelector('.caixa')

let cores = ["azul", "verde", "vermelho"]

let cursos = ["HTML", "CSS", "JavaScript",cores]

// cursos[0] = "React"

// cursos.push("React")
// cursos.pop()
// cursos.unshift("PHP")
// cursos.shift()



console.log(cursos[3][1])

cursos.map(cursos => {
    let p = document.createElement('p')
    p.innerHTML = cursos
    caixa.appendChild(p)
})



