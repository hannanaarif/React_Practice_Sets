export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/books") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            books: [
              {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                publisher: "HarperCollins",
                year: 1960,
                image: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
                price: 9.99,
                read: false,
              },
              {
                id: 2,
                title: "1984",
                author: "George Orwell",
                publisher: "Penguin Books",
                year: 1949,
                image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
                price: 8.99,
                read: false,
              },
              {
                id: 3,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                publisher: "Little, Brown and Company",
                year: 1951,
                image: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
                price: 10.99,
                read: false,
              },
              {
                id: 4,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                publisher: "Scribner",
                year: 1925,
                image: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg",
                price: 7.99,
                read: false,
              },
              {
                id: 5,
                title: "Brave New World",
                author: "Aldous Huxley",
                publisher: "Harper Perennial Modern Classics",
                year: 1932,
                image: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg",
                price: 12.99,
                read: true,
              },
              {
                id: 6,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                publisher: "Penguin Classics",
                year: 1813,
                image: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg",
                price: 6.99,
                read: false,
              },
            ],
            user: {
              name: "Raju",
              bio: "25 din mein paisa double",
              img: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg", 
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Books list not found.",
        });
      }
    }, 2000);
  });
};

import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({children}) => {
  const[books,setBooks]=useState([]);
  const[favorites,setFavorites]=useState([]);
  const[readBooks,setReadBooks]=useState([]);
  const [user,setUser]=useState({});

  useEffect(()=>{
    fakeFetch("https://example.com/api/books").then((resp)=>{
      setBooks(resp.data.books)
      setReadBooks(resp.data.books.filter(book => book.read))
      setUser(resp.data.user)
      console.log(resp.data.user);
    })
  }, [])

  const values={
    books,setBooks,setFavorites,favorites,readBooks,setReadBooks,user,setUser
  }
  
  return (
    <BookContext.Provider value={values}>
      {children}
    </BookContext.Provider>
  )
};

export default BookProvider;
