"use strict"

let Amount = +prompt('Enter amount');
let Rate = +prompt('Enter rate of interest in % per annum');
let Time = +prompt('Enter number of years ');

function calculator (P,R,T) {
    let SI = ( P * R * T)/100;
    return SI;
}

let interest = calculator(Amount, Rate, Time);
console.log(`Interest is: ${interest}`);

// document.getElementById("result").textContent = `Interest is: ${interest}`;