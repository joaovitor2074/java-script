let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let resultado = document.querySelector('#resultado');
let botoes = document.querySelectorAll('.botao');

const operacoes = [
    (valores)=>{
        let res = 0
        for(let v of valores){
            res += v
        }
        return res
    },

    (valores)=>{
        return valores[0] - valores[1]
    },

    (valores)=>{
        let res = 1
        for(let v of valores){
            res *= v
        }
        return res
    },

    (valores)=>{
        return valores[0] / valores[1]
    }
]

function calcular(indiceoperacao){
    let v1 = parseFloat(valor1.value) || 0
    let v2 = parseFloat(valor2.value) || 0

    let res = operacoes[indiceoperacao]([v1, v2]);

    resultado.value = res
}

botoes[0].onclick = () => calcular(0)
botoes[1].onclick = () => calcular(1)
botoes[2].onclick = () => calcular(2)
botoes[3].onclick = () => calcular(3)