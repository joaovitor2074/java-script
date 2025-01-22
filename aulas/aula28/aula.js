const valores = [10,8,9,2]
const it_valores = valores[Symbol.iterator]()

const texto = "youtube"
const it_texto = texto[Symbol.iterator]()

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 
console.log(it_texto.next()) 

if(it_valores.next().done){
    console.log('Fim da iteração')
    
}