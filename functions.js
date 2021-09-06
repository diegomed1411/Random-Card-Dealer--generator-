const cantidadDeCartas = 10
let numeroCarta = document.getElementById("numero")

function numeroRandom (largo){
    let numRam = Math.random()*(largo);
    numRam = Math.floor(numRam); 
    return numRam
}

numeroCarta.innerHTML = numeroRandom(cantidadDeCartas)+1;

arraySimbolos = ["corazones", "picas", "treboles", "diamantes"]

let simbolos= {
    corazones: "&#128148", 
    picas: "&#9824",
    treboles: "&#9827",
    diamantes: "&#128312"
}

let simboloGanador = simbolos[arraySimbolos[numeroRandom(arraySimbolos.length)]]

let simboloArriba = document.getElementById("paloSuperior")
simboloArriba.innerHTML = simboloGanador

let simboloAbajo = document.getElementById("paloInferior")
simboloAbajo.innerHTML = simboloGanador