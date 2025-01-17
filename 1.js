"use strict";

function sumaLyginiaiTeigiami(n) {
  let suma = 0;
  for (let i = 2; i < n; i += 2) {
    suma += i;
  }
  return suma;
}

let n = 20;
let rezultatas = sumaLyginiaiTeigiami(n);

console.log(`Suma: ${rezultatas}`);
