const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

/*const gallery = document.getElementById('gallery') 
gallery.addEventListener('click', (e) => {
    console.log(e.target.textContent);
})*/


const gallery = document.getElementById('gallery') 
gallery.addEventListener('click', (e) => {
    e.target.classList.add('blue');
})


