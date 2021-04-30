// document.getElementById('id') - Acceder a un elemento a traves de su id
// const title = document.getElementById('title');
// /*Console.log(title);*/
// //permite leer o editar
// title.textContent = 'Dom Pueba de test'

// documents|element.querySelector('selectorCSS)- ACCEDE AL PRIMER ELELENTO QUE COINCIDA CONgit  EL SELECTOR css
// const paragraph = document.querySelector('.paragraph:nth-child(2)')

// const paragraph = document.querySelector('.paragraph');
// const span = paragraph.querySelector("span");
// console.log(span);

// Document.querySelectorAll('selectorCSS`) - accede a todos lo elementos que coinciden con el selector css , devuelve un nodelist
const paragraphs = document.querySelectorAll('.paragraph');
paragraphs[0].style.color = 'red'
console.log(paragraphs);

