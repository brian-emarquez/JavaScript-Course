/* Operadores Logicos */

let num1 = 1
let num2 = 0

/* && and */
/* || */

/*if(num1 > 0 || num2 > 0){
    console.log(`${num1} o ${num2} son mayores que 0`)
}*/

if(num1 > 0){
    if(num2 > 0){
        console.log(`${num1} y ${num2} son mayores que 0`)
    }else if(num2<0){
        console.log(`${num1} son mayor que 0 y num 2 no es mayor que 0`)
    }else{
        console.log(`${num1} es mayor que 0 y num 2 es igual a 0`)
    }
}else if(num1<0){
    if(num2 > 0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`)
    }else if(num2<0){
        console.log(`${num1}  y ${num2} son manores que 0 `)
    }else {
        console.log(`${num1} es menor que 0 y 2 num2 es igual a 0`)
    }
}else{
    if(num2 > 0){
        console.log(`${num1} es igual 0 y ${num2} es mayor que 0`)
    }else if(num2<0){
        console.log(`${num1} es igual  a 0 u ${num2} es manor que 0 `)
    }else {
        console.log(`${num1} y  ${num2} son igual s a 0`)
    }
}