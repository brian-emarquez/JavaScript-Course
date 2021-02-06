/* STRINGS */
//metodos

/*length*/
let cadena = "Hola Mundo";
console.log(cadena.length); //devuelve la longitud de la cadena

/*toUpperCase*/
let cadenaMayus = "Hola Mundo 2";
console.log(cadenaMayus.toUpperCase()); //devuelve la cadena en mayusculas

/*toLowerCase*/
let cadenaMinus = "HOLA MUNDO 3";
console.log(cadenaMinus.toLowerCase()); //devuelve la cadena en minusculas

/*indexOf*/
console.log(cadena.replace('Hola', 'brian')); // Replaza la palabra 'hola2

/* substring */
console.log(cadena.substring(3, 7)); // devuelve la pisicion 3 y posicion 7 - tambien se puede hacer esta exprecion|(3, 7-1)

/* Slice */
console.log(cadena.slice(0, -6)); //controlar de aletante y atras

/* trim */
let cadena2 = "              Hola Javascript, estamso trabajando con cadenas";
console.log(cadena2.trim()); // devuelve el mensage sin los espacios

/* StartsWith */
console.log(cadena.startsWith('H')); // devuelve TRUE si empeisa con H sino Fallse
console.log(cadena.startsWith('M', 5)); // devuelve TRUE si empeisa con H sino Fallse

/* endsWith */
console.log(cadena.endsWith('o')); // devuelve True o False si cumple los parametro al final

/*Template*/
let nombre = 'brin'
let apellido = "Marquez"
let edad = 28

console.log('hola ' + nombre +" "+ apellido + " " + "tienes " + edad + " años" );

console.log(`Hola ${nombre} ${apellido}. tienes ${edad} años`); // manera mas comoda


