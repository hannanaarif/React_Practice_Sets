/*
. Given an array of books:

const books = [
 { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
 { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
 { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
 { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
 { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
 { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
 { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", gen
];

a. Build a React component that displays the title and author of each book.

b. Add buttons to filter the books by genre using the useState hook.




*/
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
    { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre:"Classic"}
   ];

function Book(){


    return (<>
      {
        books.map(book=>(
            <li key={book.id}>
                {book.title}{" "}{book.author}
            </li>
        ))
      }
        
     </>)

}
export default Book;