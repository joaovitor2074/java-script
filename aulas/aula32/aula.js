const caixa = document.querySelector('.caixa');

let musicas = new Set(["tem cafe", "felina", "uma noite", "3 dias virados", "400k"]);

musicas.add("sozinho");
musicas.add("tem cafe");
musicas.add("tem cafe");
musicas.add("sets dos casados");

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML+= el + "<br>"
// })

for (let musica of musicas){
    caixa.innerHTML+= musica + "<br>"
}