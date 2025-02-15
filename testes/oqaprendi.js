const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", () => {
    const input = document.getElementById("input").value; // Obtém o valor do input
    let regex = /@gmail\.com$/; // Expressão regular para verificar se termina com "@gmail.com"
    console.log(regex.test(input)); // Verifica se a string termina com "@gmail.com"
});
