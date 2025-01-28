class carro {
    constructor(nome, portas, tipo = "normal"){
        this.nome = nome;
        this.portas = portas;
        this.blindagem = 0;
        this.municao = 0;
        this.tipo = tipo; // Tipo pode ser "normal" ou "militar"
    }

    infom(){
        return `nome: ${this.nome}; portas: ${this.portas}; Blindagem: ${this.blindagem}; Municao: ${this.municao}`;
    }

    infon(){
        return `nome: ${this.nome}; portas: ${this.portas}`;
    }

    setblindagem(valor){
        this.blindagem = valor;
    }

    setmunicao(valorm){
        this.municao = valorm;
    }
}

const carros = []


const removerCarro = ((quem) => {
    // Modifica o array original sem reatribuir
    const index = carros.findIndex((el) => el.nome === quem);
    if (index !== -1) {
        carros.splice(index, 1);  // Remove o carro pelo índice
    }
});

const gereciarcarros = (() => {
    res.innerHTML = ""; // Limpa a área de exibição antes de atualizar

    // Exibe todos os carros do array
    carros.forEach((c) => {
        const div = document.createElement("div");
        const btn = document.createElement("button");
        btn.innerHTML = "remover";
        div.setAttribute("class", "carro");
        btn.addEventListener("click", (evt) => {
            evt.preventDefault();
            const quemremover = evt.target.parentNode.dataset.nome;
            removerCarro(quemremover);
            gereciarcarros(); // Atualiza a lista de carros
        });
        
        div.setAttribute("data-nome", c.nome); // Atribui o nome correto do carro
        btn.setAttribute("class", "remover");

        // Exibe informações completas ou básicas
        if (c.tipo === "militar") {
            div.innerHTML = c.infom();  // Exibe informações completas (militar)
        } else {
            div.innerHTML = c.infon();  // Exibe informações básicas (normal)
        }

        res.appendChild(div); // Adiciona a div ao DOM
        div.appendChild(btn);
    });
});



// Referências aos elementos do DOM
let nomec = document.querySelector("#inome");
let portasc = document.querySelector("#iportas");
let blindagemc = document.querySelector("#iblindagem");
let municao = document.querySelector("#imunicao");
let militar = document.querySelector("#militar");
let normal = document.querySelector("#normal");
let btn = document.querySelector("#btn_add");
let res = document.querySelector("#pres");

function ativarinputs() {
    if (normal.checked) {
        blindagemc.disabled = true;
        blindagemc.placeholder = "Ative a opção de tipo militar";
        municao.disabled = true;
        municao.placeholder = "Ative a opção de tipo militar";
    } else if (militar.checked) {
        blindagemc.disabled = false;
        blindagemc.placeholder = "";
        municao.disabled = false;
        municao.placeholder = "";
    }
}
ativarinputs();

// Adicionando os ouvintes de eventos aos rádios
normal.addEventListener("change", ativarinputs);
militar.addEventListener("change", ativarinputs);

btn.addEventListener("click", (evt) => {
    evt.preventDefault(); // Previne o comportamento padrão do formulário (recarregar página)
    
    let cm; // Definindo a variável cm dentro do escopo
    if (militar.checked) {
        cm = new carro(nomec.value, portasc.value, "militar");
        cm.setblindagem(blindagemc.value); // Passando o valor do campo blindagem
        cm.setmunicao(municao.value); // Passando o valor do campo munição
        carros.push(cm); // Adiciona o carro no array
    } else if (normal.checked) {
        cm = new carro(nomec.value, portasc.value, "normal");
        carros.push(cm); // Adiciona o carro no array
    }

    // Exibe os carros
    gereciarcarros();
    limparvalores();
    
    function limparvalores() {
        nomec.value = "";
        portasc.value = "";
        blindagemc.value = "";
        municao.value = "";
    }
});
