 /*Eventos de raton
     dbclick
     mouseenter
     mouseleave
     mausedown
     mauseup
     mousemove
  */

 /*Eventos teclado
     keydown
     keyup
     keypress
 * */

// const button = document.getElementById('button')
// button.addEventListener('click', ()=>{
//     console.log('CLICK');
// })

 // const button = document.getElementById('button')
 // button.addEventListener('dblclick',()=>{
 //     console.log('dblclick')
 // })

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


