const btn = document.getElementById("btn");
const res = document.getElementById("res");

const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX; // Posição X do mouse
    let mouseY = event.clientY; // Posição Y do mouse

    // Calcula o centro do círculo
    let circleX = circle.offsetLeft + circle.offWidth ;
    let circleY = circle.offsetTop + circle.offHeight;

    // Calcula o ângulo entre o centro do círculo e a posição do mouse
    let angle = Math.atan2(mouseY - circleY, mouseX - circleX);

    let speed = 5;

    // Calcula o deslocamento (essa parte não está sendo usada para posicionar o círculo, 
    // mas pode ser utilizada para criar efeitos de movimento)
    let moveX = Math.cos(angle) * speed;
    let moveY = Math.sin(angle) * speed;

    // Atualiza a posição do círculo para seguir o mouse
    circle.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px)`;
});
