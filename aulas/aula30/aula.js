// let valor1 = document.querySelector('#valor1');
// let valor2 = document.querySelector('#valor2');
// let resultado = document.querySelector('#resultado');

// function adicao() {
//     // Obtém os valores dos inputs e converte para números
//     let v1 = parseFloat(valor1.value) || 0; // Se o campo estiver vazio, usa 0
//     let v2 = parseFloat(valor2.value) || 0;

//     // Realiza a soma
//     let res = v1 + v2;

//     // Define o valor do campo de resultado
//     resultado.value = res;
// }

let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let resultado = document.querySelector('#resultado');
let botoes = document.querySelectorAll('.botao');

// Array com as operações
const operacoes = [
    (valores) => {
        // Soma
        let res = 0;
        for (let v of valores) {
            res += v;
        }
        return res;
    },
    (valores) => {
        // Subtração
        return valores[0] - valores[1];
    },
    (valores) => {
        // Multiplicação
        let res = 1;
        for (let v of valores) {
            res *= v;
        }
        return res;
    },
    (valores) => {
        // Divisão
        return valores[0] / valores[1];
    },
];

// Função para executar a operação
function calcular(indiceOperacao) {
    // Obtém os valores dos inputs e converte para números
    let v1 = parseFloat(valor1.value) || 0; // Se o campo estiver vazio, usa 0
    let v2 = parseFloat(valor2.value) || 0;

    // Passa os valores para a operação selecionada
    let res = operacoes[indiceOperacao]([v1, v2]);

    // Define o resultado no campo de resultado
    resultado.value = res;
}

// Adiciona eventos aos botões
botoes[0].onclick = () => calcular(0); // Soma
botoes[1].onclick = () => calcular(1); // Subtração
botoes[2].onclick = () => calcular(2); // Multiplicação
botoes[3].onclick = () => calcular(3); // Divisão




/*
const operacao = [
    (val) =>{
        let res = 0
        for(v of val){

            res+=v
            resultado.innerHTML = res;
        }
    },

    (val) =>{
        let res = 0
        for(v of val){

            res+=v
            resultado.innerHTML = res;
        }
    },

    (val) =>{
        let res = 0
        for(v of val){

            res+=v
            resultado.innerHTML = res;
        }
    },

    (val) =>{
        let res = 0
        for(v of val){

            res+=v
            resultado.innerHTML = res;
        }
    },
    (val) =>{
        console.log(res)
    },
]


*/

