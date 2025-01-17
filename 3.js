"use strict"

function skaiciuotiTeigiamus() {
    let suma = 0;
    
    while (true) {
    let ivestasSkaicius = prompt("Iveskite skaiciu:");
    ivestasSkaicius = parseFloat(ivestasSkaicius); 
    
    if (ivestasSkaicius < 0) { 
    break; 
    }
    suma += ivestasSkaicius; 
    }
    console.log( `Visu teigiamu skaiciu suma: ${suma}`);
    
}
    skaiciuotiTeigiamus();