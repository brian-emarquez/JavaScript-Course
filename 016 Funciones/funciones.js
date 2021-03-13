/******************  Objetos ************************/
/*
function saludar(){
        console.log("Hola");
}*/

// funcion para saludar
//const saludar = () => console.log("Hola");
//const saludarUsuario = (user) => console.log(`Hola ${user}`);
//saludar('brian')
//saludarUsuario('brian')



//funcion sumar
// cuando se usa llaves , se tiene que usar el return
const suma = (num1, num2) => {
    if(num1==2){
        return num1+num2
    }
    console.log("esto no se va a ejecutar");
    return num1
}
console.log(suma(2,10));
