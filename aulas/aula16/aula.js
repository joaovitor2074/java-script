function aluno(nome,nota){
     this.nome = nome
     this.nota = nota

     this.dados_ano = function(){
        setTimeout(function (){
            console.log(this.nome)
            console.log(this.nota)
        })
     },5000


     this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        })
     },5000


}
const aluno1 = new aluno("bruno",100)
aluno1.dados_ano()
aluno1.dados_arrow()