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
box.addEventListener('mouseenter', ()=>{
    box.classList.replace('red', 'green')
})
 box.addEventListener('mouseleave', ()=>{
     box.classList.replace('green', 'red')

 })

