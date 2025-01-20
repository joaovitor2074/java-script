let caixa2 = document.getElementById("caixa2");
const textoinput = document.querySelector("#textoinput");
const curso = document.querySelectorAll(".curso")
let identificacao = 8;

function adicionar(el, chave) {
    
    // Obtém o valor do input
    let valorTexto = textoinput.value;

    // Verifica se o input não está vazio
    if (valorTexto.trim() !== "") {
        // Cria um novo elemento div
        let novoelemento = document.createElement("div");
        let radio = document.createElement("input");
        radio.setAttribute("class", "radioc");
        radio.setAttribute("name", "grupo");
        radio.type = "radio";

        // Define a classe e o conteúdo da nova div
        novoelemento.setAttribute("class", "cursos");
        novoelemento.setAttribute("id", "c" + identificacao);

        novoelemento.innerHTML = valorTexto;

        // Adiciona o rádio à nova div
        novoelemento.appendChild(radio);

        // Adiciona a nova div como filha de caixa2
        caixa2.appendChild(novoelemento);

        // Adiciona mais um à identificação
        identificacao++;

        // Limpa o campo de texto
        textoinput.value = "";
    } else {
        console.log("O campo está vazio!"); // Mensagem de aviso no console
    }
}

function remover() {
    // Seleciona todos os elementos com a classe .radioc
    const radios = document.querySelectorAll(".radioc");

    for (let r of radios) {
        if (r.checked) {
            // Se o rádio estiver marcado, encontra a div pai e remove
            let divPai = r.closest(".cursos"); // Encontra o elemento pai com a classe 'cursos'
            if (divPai) {
                divPai.remove(); // Remove a div
            }
            break; // Se encontrar o rádio marcado, encerra o loop
        }
    }
}


function selecionado() {
    // Seleciona todos os rádios
    const radios = document.querySelectorAll(".radioc");

    // Itera sobre os rádios para verificar qual está marcado
    radios.forEach(radio => {
        if (radio.checked) {
            // Encontrar o irmão do rádio, que é o <p> com o nome do curso
            let siblingTexto = radio.previousElementSibling;
            
            if (siblingTexto) {
                // Atualiza o texto na div com id "selecionado"
                let pSelecionado = document.querySelector("#selecionadot");
                pSelecionado.innerHTML = `Curso Selecionado: ${siblingTexto.innerText}`;
            }
        }
    });
}
