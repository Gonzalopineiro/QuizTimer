const btnComenzar = document.getElementById("comenzarBtn");
const btnSiguiente = document.getElementById("siguiente");
const numeroPregunta = document.getElementById("NumeroPregunta");
const btnReset = document.getElementById("reset");
const datosTimer = document.getElementById("datos");
const timer = document.getElementById("timer");

let timeHora = document.getElementById("preg-horas");
let timeMinutos = document.getElementById("preg-min");
let timeSegundos = document.getElementById("preg-sec");

let horas;
let preguntas;
let segundos;
let cantPreguntas;
let segundosMostrar;

btnComenzar.addEventListener("click", () => {
    horas = parseInt(document.getElementById("horas").value);
    preguntas = parseInt(document.getElementById("preguntas").value);
    if (horas>1 && preguntas>1) {
    segundos = horas * 3600;
    cantPreguntas = preguntas;
    timer.style.display = "flex";
    datosTimer.style.display = "none";
    iniciarReloj();
    } else if (horas < 1 && preguntas > 1) {
        alert("Ingrese un valor mayor a 1 en horas");
    } else if (horas > 1 && preguntas < 1) {
        alert("Ingrese un valor mayor a 1 en preguntas");
    } else if (horas == null && preguntas == null) {
        alert("Ingrese un valor mayor a 1 en horas y preguntas");
    }

});



function iniciarReloj () {
        segundosMostrar = Math.floor(segundos/cantPreguntas);
        cantPreguntas--;
    setInterval(() => {
        segundos--;
        segundosMostrar--;
        timeHora.innerHTML = Math.floor(segundosMostrar / 3600) + ": ";
        timeMinutos.innerHTML = Math.floor((segundosMostrar % 3600) / 60) + ": ";
        timeSegundos.innerHTML = (segundosMostrar % 3600) % 60;
        if (segundosMostrar == 0) {
            segundosMostrar = Math.floor(segundos/cantPreguntas);
        }
    }, 1000);
}

btnSiguiente.addEventListener("click", () => {
    if (cantPreguntas > 0) {
        segundosMostrar = Math.floor(segundos/cantPreguntas);
        cantPreguntas--;
        numeroPregunta.textContent = preguntas - cantPreguntas;
    }
});

btnReset.addEventListener("click", () => {
    window.location.reload()
});