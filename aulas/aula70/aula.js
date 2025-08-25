const timer = document.querySelector('#timer');
const btn_iniciar = document.querySelector('#bnt_iniciar');
const btn_parar = document.querySelector('#btn_parar');
const btn_zerar = document.querySelector('#btn_zerar');

let intervalo = null


let tmpini = null

const contador = ()=>{
    const tematual = Date.now()
    let cont = tematual - tmpini;
    let segundos = (tematual - tmpini)/1000;
    timer.innerHTML = converter(segundos)
    
}

const converter = (seg) =>{

    const horas = Math.floor(seg/3600);
    const resto = seg% 3600
    const minutos = Math.floor(resto/60)
    const segundos =  Math.floor(resto%60)

    const formatacao = `${horas<10?"0"+horas: horas}:${minutos<10? "0" + minutos : minutos}:${segundos<10? "0" + segundos : segundos}`

    return formatacao
}

btn_iniciar.addEventListener('click', (evt)=> {
    tmpini = Date.now()
    if (intervalo === null) { // só cria se não tiver um rodando
        intervalo = setInterval(contador, 1000);
    }
});

btn_parar.addEventListener('click', (evt)=>{
    clearInterval(intervalo);
    intervalo = null;
})
btn_zerar.addEventListener('click', (evt)=>{
    tmpini = Date.now()
    timer.innerHTML = "00:00:00"
    clearInterval(intervalo);
})


