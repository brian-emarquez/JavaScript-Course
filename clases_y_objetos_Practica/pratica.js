class Book{
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    getAuthor (){
        return this.author
    }
    getGender(){
        return this.gender
    }
    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
}
let books = []
while (books.length<1){
    let title = prompt('Intruduce el titulo del libro')
    let author = prompt('Intruduce el autor del libro')
    let year = prompt('Intruduce el año del libro')
    let gender = prompt('Intruduce el genero del libro').toLowerCase()

    if(title !='' && author !='' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender =='fantasia')){
        books.push(new Book(title, author, year, gender))
    }
}

const showAllBooks = () => {
        console.log(books);
}
const showAuthors = () => {
    let authors = []

    for (const book of books ){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showGender = () =>{
    const gender = prompt('Introduce el genero a buscar')
    for (const book of books ){
       if(book.getGender() == gender){
           console.log(book.bookInfo())
       }
    }
}

//showAuthors()
showGender()