/* Operaor ternarios */
/* num es par o no */
let num = 5;

// para una sentencia
!//(num % 2 ) == 0 ? console.log(`${num} es par`) : console.log(`${num} es impar`);

// para varias sentencias
(num % 2  == 0) ?
    ( //false
        console.log(`${num} es impar`),
            console.log(`${num} es impar 2`)
    )
    :
    ( //true
        console.log(`${num} es par`),
            console.log(`${num} es par 2`)
    )


