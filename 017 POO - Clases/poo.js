/****************** POO ************************/
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre}  ${this.apellido} y tengo ${this.edad} años`
    }
    saludar()
    {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const brian = new Persona('brian', 'marquez', 25)
console.log(brian.saludar())

