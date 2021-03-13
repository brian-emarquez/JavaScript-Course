/*Edades*/

let figura = prompt("Introduce la digura geometica que quieres calcular el area: triangulo , rectangulo o circulo")

let base;
let height;
let radius;

switch(figura){
    case 'triangulo':
        base = prompt("Introduce la base del triangulo")
        height = prompt("Introduce la altura del triangulo")
        console.log(`El area del triangulo es ${(base*height)/2}`);
        break

    case 'rectangulo':
        base = prompt("Introduce la base del resctangulo")
        height = prompt("Introduce la altura del triangulo")
        console.log(`El area del restangulo es ${base*height}`);
        break

    case 'circulo':
        radius = prompt("Introduce la base del circulo")
        console.log(`El area del ciruclo es ${Math.PI * Math.pow(radius,2)}`);
        break

    default:
        console.log('Dato no valido')

}