/* Ordenas 3 numero de mayor a menor  */
/* posibilidades 3! = 3*2*2 = 6

/*
abc = 123
acb = 132
bac = 213
bca = 231
cab = 312
cba = 321
*/

const numbers = document.getElementById('number');
const result  = document.getElementById('result');

let a=prompt("Introdusca el primer numero")
let b=prompt("Introdusca el segundo numero")
let c=prompt("Introdusca el tercer numero")

numbers.textContent = `Los Numeros Introducidos son ${a}, ${b}, ${c}`