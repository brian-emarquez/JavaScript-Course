/* Objetos */

const person = {
    name: 'brian',
    age:'26',
    sons: ['laura', 'diego', 'pepe', 'rosa', 'tomas']
}

//console.log(person.name);

// recorrido al objeto CLAVES
for(const key in person){
    console.log(key)
}


// recorrido al objeto VALORES
for(const key1 in person){
    console.log(person[key1])
}

// Recorrido de hijos
for(const son of person.sons){
    console.log(`hijos ${son}`)
}
