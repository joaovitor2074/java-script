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

const gereciarcarros = (() => {
    // Limpa a área de exibição antes de atualizar
    res.innerHTML = "";

    // Exibe todos os carros do array
    carros.forEach((c) => {
        const div = document.createElement("div");
        div.setAttribute("class", "carro");

        if (c.tipo === "militar") {
            div.innerHTML = c.infom();  // Exibe informações completas (militar)
        } else {
            div.innerHTML = c.infon();  // Exibe informações básicas (normal)
        }

        res.appendChild(div); // Adiciona a div ao DOM
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
