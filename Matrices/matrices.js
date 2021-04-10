
/*Arraglos */
let colores = ["Rojo", "Verde", "Azul"];

let frutas = new Array();
frutas[0] = "Sandia";
console.log(frutas[0])

let numero = new Array(5);
numero[0] = 5;
numero[1] = 4;
numero[2] = 6;
numero[3] = 8;
numero[4] = 3;

console.log(numero[4])

/* matrices */

let matrizFila = new Array();

for(let x = 0; x<=10; x++){
    matrizFila[x] = new Array();
    for(let y = 0; y<=10; y++){
        matrizFila[x][y] = x + y;
    }
}

for(let elemento in matrizFila ){
    console.log(elemento + " = " + matrizFila[elemento]);

}