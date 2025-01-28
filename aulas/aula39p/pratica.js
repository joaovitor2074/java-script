class carro {
    constructor(nome, portas){
        this.nome = nome;
        this.portas = portas;
        this.blindagem = 0;
        this.municao = 0;
        this.tipo = "normal"; // Tipo deve ser uma string
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
    if(normal.checked) {
        // Desativa os campos de blindagem e munição se o tipo for normal
        blindagemc.disabled = true;
        blindagemc.placeholder = "Ative a opção de tipo militar";
        municao.disabled = true;
        municao.placeholder = "Ative a opção de tipo militar";
    } else if (militar.checked) {
        // Ativa os campos de blindagem e munição se o tipo for militar
        blindagemc.disabled = false;
        blindagemc.placeholder = ""
        municao.disabled = false;
        municao.placeholder = ""
    }
}
ativarinputs();

// Adicionando os ouvintes de eventos aos rádios
normal.addEventListener("change", ativarinputs);
militar.addEventListener("change", ativarinputs);

btn.addEventListener("click", (evt) => {
    evt.preventDefault(); // Previne o comportamento padrão do formulário (recarregar página)
    
    let cm; // Definindo a variável cm dentro do escopo
    if(militar.checked) {
        cm = new carro(nomec.value, portasc.value);
        cm.setblindagem(blindagemc.value); // Passando o valor do campo blindagem
        cm.setmunicao(municao.value); // Passando o valor do campo munição
        res.innerHTML = cm.infom(); // Exibindo as informações completas do carro
    

        nomec.value = ""
        portasc.value = ""
        blindagemc.value = ""
        municao.value = ""
    } else if (normal.checked) {
        cm = new carro(nomec.value, portasc.value);
        res.innerHTML = cm.infon(); // Exibindo informações básicas se o tipo for normal
        nomec.value = ""
        portasc.value = ""
    }

    
});
