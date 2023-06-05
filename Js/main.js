const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const darkMode = document.querySelector(".dark-mode__boton");
const body = document.querySelector("body");

abrir.addEventListener("click", () => {
    nav.classList.add("visible", "animate__fadeInRight");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove( "animate__fadeInRight", "visible");
})

darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
})