let revisando = "jv e fodao"
const pessoa = {
    nome:"bruno",
    canal:"curso em video",
    cursos:"javascript",
    aulas: {
        aula1:"introducao",
        aula2:"sintaxe",
        aula3:"logica"
    }
}
const stringpessoa = '{"nome":"bruno","canal":"curso em video","cursos":"javascript","aulas":{"aula1":"introducao","aula2":"sintaxe","aula3":"logica"}}'

const s_json = JSON.stringify(pessoa)
const o_json = JSON.parse(stringpessoa)
console.log(pessoa)
console.log(s_json)
console.log(o_json)