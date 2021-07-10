const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

//Objeto evento
/*input.addEventListener('keyup', (e) => {
     console.log(input.value);
     console.log(e);
} )*/

/*input.addEventListener('keyup', (e)=>{
    console.log(e);
})*/

button.addEventListener('click', (e) => {
    console.log(e.target)
})

