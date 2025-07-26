const circulos = document.querySelectorAll(".circulo");
const contenedorTimer = document.querySelector(".timer");
const modal = document.querySelector(".modal");
const botonModal = document.querySelector(".modal button");
const textoModal = document.querySelector(".modal p");
let puntuacion = 0;
let timer = null;
let tiempoInicial = 10;
let resultado = false;

function jugar(tiempo){
    puntuacion = 0;
    circulos.forEach(circulo => circulo.classList.remove("invisible"));
    contenedorTimer.innerHTML = "";

    for(let i = 0; i < tiempo; i++){
        let cuadro = document.createElement("div");
        cuadro.style.width = `calc(${100/tiempo}% - 20px)`;
        contenedorTimer.appendChild(cuadro);
    }

    timer = setInterval(() => {
        contenedorTimer.children[0].remove();

        if(contenedorTimer.children.length == 0){
            clearInterval(timer);
            textoModal.innerText = "¡Vuelve a intentarlo!😥";
            modal.classList.add("visible");
            resultado = false;
        }

    }, 1000);
    
}

circulos.forEach( circulo => {
    circulo.addEventListener("click", () => {
        circulo.classList.add("invisible");
        puntuacion++;
        if(puntuacion == 12){
            clearInterval(timer);
            textoModal.innerText = "¡Ganastes! 👌";
            modal.classList.add("visible");
            resultado = true;
        }
    });
});

botonModal.addEventListener("click", () => {
    if(resultado){
        if(tiempoInicial == 6){
            tiempoInicial = 10;
        }else{
            tiempoInicial--;
        }  
    }
    modal.classList.remove("visible");
    jugar(tiempoInicial);
});
