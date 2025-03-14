import { useState } from "react";

const booklist = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
    { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre:"Classic"}
   ];

function BookGenre(){
    const[books,setBooks]=useState(booklist)

    function handleAll(){
        setBooks(booklist) 
    }

    function handleClassic(){
        setBooks(booklist.filter(book=>book.genre==="Classic"))
    }

    function handleDystopian(){
        setBooks(booklist.filter(book=>book.genre==="Dystopian"))
    }

    function handleAdult(){
        setBooks(booklist.filter(book=>book.genre==="Young Adult"))
    }


    return (<>
       <button onClick={handleAll}>All Genres</button>
       <button onClick={handleClassic}>Classics</button>
       <button onClick={handleDystopian}>Dystopian</button>
       <button onClick={handleAdult}>Young Adult</button>
      {
        books.map(book=>(
            <ul key={book.id}>
                <h2>{book.title}</h2>
                {book.author}
            </ul>
        ))
      }
        
     </>)

}
export default BookGenre;