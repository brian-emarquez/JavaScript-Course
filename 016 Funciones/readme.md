### Obetos - Introduccion
 
Son estructuras de datos que representan propiedades, valores y acciones que pueden realizar el objeto

Todos lo objetos tienen propiedades o atributos y comportammientos o acciones representados por pares de clave(key)(value)


== Objetos Ejemplo ==

```js
const computer = {
    screensize: 17,
    model:'Macbook Pro'
}
```


```js
const table = {
    material: 'madera',
    width: 160,
    height: 110
}
```
### Acceso al Objeto

para acceder a las propierdades y acciones del objeto se utiliza la nomanclatura del punto

```js
const person = {
    name: 'brian',
    age:'26',
    sons: ['laura', 'diego']
}

console.log(person, name)
console.log(person, age)
console.log(person, sons[0])
console.log(person, sons[1])
```