let nome = localStorage.getItem('nome')

if (!nome) {
  nome = prompt('Qual o seu nome?')
  localStorage.setItem('nome', nome) // salva o nome no navegador
}

console.log(`Seu nome é ${nome}`)

let convertido = localStorage.setItem('idade', 26 , JSON.stringify("idade")) // salva a idade no navegador

const userdata = JSON.parse(localStorage.getItem('idade')) // recupera a idade do navegador
console.log(`Sua idade é ${userdata}`)
