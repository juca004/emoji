let boton = document.createElement("input");
boton.type = "button";
boton.value = "Rojo";
document.body.appendChild(boton);

let cara = document.querySelector("div svg circle:nth-child(1)");

boton.addEventListener('click', cambiaColor);
function cambiaColor(event) {
  cara.style.fill = "rgb(255,0,0)";
}

//canal Red
var subBajR = document.querySelector("div > div progress:nth-child(1)");
let botonMasR = document.querySelector("div > div input");
let botonMemosR = document.querySelector("div > div input + input");


botonMasR.addEventListener('click', cambiaMaR);
function cambiaMaR(event){
    subBajR.value = subBajR.value + 1;
    cara.style.fill = `rgb(${subBajR.value}, ${subBajG.value}, ${subBajB.value})`;
}

botonMemosR.addEventListener('click', cambiaMeR);
function cambiaMeR(event){
    subBajR.value = subBajR.value - 1;
    cara.style.fill = `rgb(${subBajR.value}, ${subBajG.value}, ${subBajB.value})`;
}

//canal Green
var subBajG = document.querySelector("div > div + div progress:nth-child(1)");
let botonMasG = document.querySelector("div > div + div input");
let botonMemosG = document.querySelector("div > div + div input + input");


botonMasG.addEventListener('click', cambiaMaG);
function cambiaMaG(event){
    subBajG.value = subBajG.value + 1;
    cara.style.fill = `rgb(${subBajR.value}, ${subBajG.value}, ${subBajB.value})`;
}

botonMemosG.addEventListener('click', cambiaMeG);
function cambiaMeG(event){
    subBajG.value = subBajG.value - 1;
    cara.style.fill = `rgb(${subBajR.value}, ${subBajG.value}, ${subBajB.value})`;
}

//canal Blue
var subBajB = document.querySelector("div > div + div + div progress:nth-child(1)");
let botonMasB = document.querySelector("div > div + div + div input");
let botonMemosB = document.querySelector("div > div + div + div input + input");


botonMasB.addEventListener('click', cambiaMaB);
function cambiaMaB(event){
    subBajB.value = subBajB.value + 1;
    cara.style.fill = `rgb(${subBajR.value}, ${subBajG.value}, ${subBajB.value})`;
}

botonMemosB.addEventListener('click', cambiaMeB);
function cambiaMeB(event){
    subBajB.value = subBajB.value - 1;
    cara.style.fill = `rgb(${subBajR.value}, ${subBajG.value}, ${subBajB.value})`;
}
