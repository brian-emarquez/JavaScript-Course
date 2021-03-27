/****************** metodos de arrays ************************/

/*  .from (iterable) - Conierte en array el elemento iterable */
console.log('===============USO DEL .from===================');
let word = 'hola mundo'
console.log(Array.from(word));
console.log(word.split(""));


/*.sort(callback) - ordena los elemetos de un array alfabeticamente(valor unicode), si le pasamos un callback los ordena en funcion del algoritmoque le pasamos*/
console.log('===============USO DEL .sort===================');
const letters = ['b', 'c', 'z', 'a']
const numbers_sort = [1,8,100,300,3]

console.log(letters.sort());
console.log(numbers_sort.sort());

console.log(numbers_sort.sort((a,b)=>a-b));

/*.forEach - ejecuta la funcion indicada una ves por cada elemento array*/
console.log('===============USO DEL .forEach===================');
const numbersFor = [12, 25, 47, 84, 98]

numbersFor.forEach((number, index) =>
    console.log(`${number} esta en la podicion ${index} `))

/*.some (callback) - comprueba si al meno un elemento del array cumple la conducion*/
/*.every(callback) - comprueba si todos los elementos del array cumplen la condicion*/
console.log('===============USO DEL .some===================');
const wordSome = ['html', 'css', 'javascript', 'PHP']
console.log(wordSome.some(word => word.length>10));
console.log(wordSome.every(word => word.length>10)); // todos tiene que cumplir la condicion

/*.map(callback) - Transforma todos los elelentso del array y devuelve un nuevo array*/
/*.ilter - trnasoforma todos los elementos del array y devuelven un nuevo array*/
/*.reduce - Reduce todos los elelentos del array a un unico valor */