const caixa = document.getElementById("caixa2")
const texto = document.getElementById("textoinput")
const indicacao = 8
const radios = document.querySelector(".radioc")

function antes(){

    //recebenndo elementos
    const novoelemento = document.createElement("div")
    const textonovo = document.createElement("p")
    const radionovo = document.createElement("input")
    radionovo.type = "radio"
    const radioselecionado = document.querySelector("input[type=radio]:checked")
    const referencia = radioselecionado.parentElement
    
   
    
    //adicionando atributos ao elemento
    novoelemento.setAttribute("class", "cursos")
    novoelemento.setAttribute("id", "c" + indicacao)
    radionovo.setAttribute("name","grupo")
    radionovo.setAttribute("class","radioc")
    textonovo.innerHTML = texto.value
    
    
    
    //if para saber se input esta vazia caso contrio liberar a acao
    if(texto.value ==""){
        alert("escreva algo no espaco determinado")
    }else{
        caixa.appendChild(novoelemento)
        novoelemento.appendChild(textonovo)
        novoelemento.appendChild(radionovo)
    }

    //adiciona onde sera colocado e limpa o input apos tudo isso
    referencia.insertAdjacentElement("beforebegin",novoelemento)
    texto.value = ""
}

function adicionar(){
    //criacao do novo elemento
    const novoelemento = document.createElement("div")
    const textonovo = document.createElement("p")
    const radionovo = document.createElement("input")
    radionovo.type = "radio"
    
    //adicionando atributos ao elemento
    novoelemento.setAttribute("class", "cursos")
    novoelemento.setAttribute("id", "c" + indicacao)
    radionovo.setAttribute("name","grupo")
    radionovo.setAttribute("class","radioc")
    
    textonovo.innerHTML = texto.value
    
    
    if(texto.value ==""){
        alert("escreva algo no espaco determinado")
    }else{
        caixa.appendChild(novoelemento)
        novoelemento.appendChild(textonovo)
        novoelemento.appendChild(radionovo)
    }
    
    texto.value = ""
    
}

function depois() {
    const novoelemento = document.createElement("div");
    const textonovo = document.createElement("p");
    const radionovo = document.createElement("input");
    const radioselecionado = document.querySelector("input[type=radio]:checked");
    const referencia = radioselecionado.parentElement;

    // Configurando o novo elemento
    novoelemento.setAttribute("class", "cursos");
    novoelemento.setAttribute("id", "c" + indicacao);
    radionovo.setAttribute("type", "radio"); // Define explicitamente o tipo como "radio"
    radionovo.setAttribute("name", "grupo");
    radionovo.setAttribute("class", "radioc");

    textonovo.innerHTML = texto.value;

    // Verifica se o texto foi preenchido
    if (texto.value == "") {
        alert("Escreva algo no espaço determinado");
    } else {
        // Adiciona os filhos ao novo elemento
        novoelemento.appendChild(textonovo);
        novoelemento.appendChild(radionovo);

        // Insere o novo elemento após o elemento de referência
        referencia.insertAdjacentElement("afterend", novoelemento);
        texto.value = ""
    }
}

function remover(){
    const  radioselecionado = document.querySelector("input[name=grupo]:checked")
    
    let pai = radioselecionado.parentElement
    pai.remove()


    texto.value = ""
    
}

function selecionado() {
    const radioselecionado = document.querySelector("input[name=grupo]:checked");
    const selecionado = document.querySelector("#selecionado");
    const tselecionado = document.querySelector("#selecionadot");

    if (radioselecionado) {
        const irmao = radioselecionado.previousElementSibling; // O texto associado ao rádio
        tselecionado.innerText = "Curso Selecionado: " + irmao.innerText; // Atualiza o texto do elemento tselecionado
    } else {
        tselecionado.innerText = "Nenhum curso selecionado"; // Mensagem se nada estiver marcado
    }

    texto.value =""
}
