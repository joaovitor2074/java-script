const caixa = document.querySelector('.caixa');


const carros = ['ford', 'fiat', 'honda', 'chevrolet', 'volkswagen'];

let ol = `<ul>`
carros.map((carro) => {
    ol += `<li>${carro}</li>`
})

ol +`</ul>`




caixa.innerHTML = ol;