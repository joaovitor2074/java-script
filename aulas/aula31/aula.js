const caixa = document.querySelector('#caixa');

let mapa = new Map();

mapa.set("nome", "João");
mapa.set("idade", 15);
mapa.set("sexo", "M");
mapa.set("altura", 1.80);


mapa.delete("altura");


let pes = "idade"
let res = ""

if(mapa.has(pes)){
    res = mapa.get(pes) + 
    " o tamanho do mapa é: " + mapa.size + "<br>";
}else{
    res = "Não encontrado" + "<br>";
}

caixa.innerHTML = res;

mapa.forEach((valor, chave) => {
    console.log(valor)
    })
