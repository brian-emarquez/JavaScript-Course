/* Ordenas 3 numero de mayor a menor  */
/* posibilidades 3! = 3*2*2 = 6

/*
abc = 321
acb = 312
bac = 231
bca = 132
cab = 213
cba = 123
*/

const numbers = document.getElementById('numbers');
const result  = document.getElementById('result');

let a=prompt("Introdusca el primer numero")
let b=prompt("Introdusca el segundo numero")
let c=prompt("Introdusca el tercer numero")

numbers.textContent = `Los Numeros Introducidos son ${a}, ${b}, ${c}`

if(a>=b && a>=c){ 
    if(b>c){
        result.textContent =`El orden es: ${a}, ${b}, ${c}`
    }else{
        result.textContent =`El orden es: ${a}, ${c}, ${b}`
    }
}else if (b>=a && b>=c){
    if(a>c){
    result.textContent =`El orden es: ${b}, ${a}, ${c}`
    }else{
        result.textContent =`El orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent =`El orden es: ${c}, ${a}, ${b}`
    }else{
        result.textContent =`El orden es: ${c}, ${b}, ${a}`
    }
}


