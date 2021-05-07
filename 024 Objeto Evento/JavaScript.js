

const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

box.addEventListener('mouseenter', ()=>{
    box.classList.replace('red', 'green')
})
 box.addEventListener('mouseleave', ()=>{
     box.classList.replace('green', 'red')
 })

 box.addEventListener('mousedown', () =>{
    console.log('has pulsado en la caja');
 })

 box.addEventListener('mouseup', () =>{
     console.log('HAS SOLTADO EL BOTON IZQUIERDO EN LA CAZA');
 })

 input.addEventListener('keydown', ()=>{
     console.log("Has puldado una tecla")
 })


