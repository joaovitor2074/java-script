const palco = document.getElementById("palco");
const num_objetos = document.querySelector("#num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth;
let altura_palco = palco.offsetHeight;
let bolas = [];
let numBolas = 0;

class Bola {
    constructor(arraybolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10;
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);

        // Garantindo que a posição inicial esteja dentro dos limites corretos
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
        this.py = Math.floor(Math.random() * (altura_palco - this.tam));

        this.velx = Math.random() * 2 + 0.5;
        this.vely = Math.random() * 2 + 0.5;

        this.dirx = Math.random() > 0.5 ? 1 : -1;
        this.diry = Math.random() > 0.5 ? 1 : -1;

        this.palco = palco;
        this.arraybolas = arraybolas;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 1000000000000000);

        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id);

        numBolas++;
        num_objetos.innerHTML = numBolas;
    }

    minhaPos = () => {
        return this.arraybolas.indexOf(this);
    };

    remover = () => {
        clearInterval(this.controle);
        bolas = bolas.filter((b) => b.id !== this.id);
        this.eu.remove();
        numBolas--;
        num_objetos.innerHTML = numBolas;
        txt_qtde.value = ""
    };

    desenhar = () => {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bolinha");
        div.style.left = `${this.px}px`;
        div.style.top = `${this.py}px`;
        div.style.width = `${this.tam}px`;
        div.style.height = `${this.tam}px`;
        div.style.backgroundColor = `rgb(${this.r},${this.g},${this.b})`;

        this.palco.appendChild(div);
    };

    colisao_bordas = () => {
        if (this.px + this.tam >= larguraPalco) {
            this.dirx = -1;
        } else if (this.px <= 0) {
            this.dirx = 1;
        }

        if (this.py + this.tam >= altura_palco) {
            this.diry = -1;
        } else if (this.py <= 0) {
            this.diry = 1;
        }
    };

    controlar = () => {
        this.colisao_bordas();
        this.px += this.dirx * this.velx;
        this.py += this.diry * this.vely;

        this.eu.style.left = `${this.px}px`;
        this.eu.style.top = `${this.py}px`; // Correção do erro de sintaxe
        this.eu.style.width = `${this.tam}px`;
        this.eu.style.height = `${this.tam}px`;
        this.eu.style.backgroundColor = `rgb(${this.r},${this.g},${this.b})`;

        if (this.px > larguraPalco || this.py > altura_palco) {
            this.remover();
        }
    };
}

window.addEventListener("resize", () => {
    larguraPalco = palco.offsetWidth;
    altura_palco = palco.offsetHeight;
});

btn_add.addEventListener("click", () => {
    const qtde = parseInt(txt_qtde.value) || 0; // Garantindo que o valor seja um número
    for (let i = 0; i < qtde; i++) {
        bolas.push(new Bola(bolas, palco));
    }
});

btn_remover.addEventListener("click", () => {
    bolas.forEach((b) => b.remover());
});
