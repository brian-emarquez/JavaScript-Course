/* Spread operator*/

const numbers = [-12, 2, 3, 23, 43, 2, 3]
console.log(...numbers); // se observa numero separados

/* Enviar ellentos de un array a una funcion*/
console.log("======== Enviar elemetos en un array a una funcion =========")
const addNumbers = (a,b,c,) =>{
    console.log(a+b+c)
}

let numbersToAdd=[1,2,3]
addNumbers(...numbersToAdd)

/* Anadir un array a otro array*/
console.log("=======Anadir un array a otro array========")
let users = ["marta", "jaime", "laura"]
let newUsers = ['javier', 'david', 'rosa', 'juan', 'mercedes']

users.push(...newUsers)
console.log(users)

/* Copiar arrays */
console.log("========Copiar arrays =========")

let arr1 = [1,2,3,4]
let arr2 = [...arr1]
console.log(arr2)
