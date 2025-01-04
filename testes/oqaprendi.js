function mulher(nome, nota){
    this.nome = nome
    this.nota = nota


    console.log(this.nome)
    console.log(this.nota)
}
let m1 = mulher("duda", 7)
let m2 = mulher("kevily", 6)
let m3 = mulher("wemily", 8)
let m4 = mulher("thaynara", 10)