import React, { useContext } from "react";
import { BookContext } from "../context/Bookcontext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { books, favorites, setFavorites, readBooks, setReadBooks } =
    useContext(BookContext);
  const navigate = useNavigate();

  const handleAddToFavorites = (book) => {
    if (!favorites.find((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const handleButtonClick = (book) => {
    if (favorites.find((fav) => fav.id === book.id)) {
      navigate("/favorites");
    } else {
      handleAddToFavorites(book);
    }
  };

  const handleRead = (book) => {
    if (!readBooks.find((rb) => rb.id === book.id)) {
        let temp = book;
        temp.read = true;
        setReadBooks([...readBooks, temp]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        padding: "15px",
      }}
    >
      {books.map((book, id) => (
        <div
          key={id}
          style={{
            flexBasis: "calc(20% - 12px)",
            minWidth: "150px",
            textAlign: "center",
            padding: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            margin: "5px",
          }}
        >
          <img
            src={book.image}
            alt="book"
            style={{ maxWidth: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3 style={{ fontSize: "1rem", margin: "5px 0" }}>{book.title}</h3>
          <h4 style={{ fontSize: "0.9rem", margin: "5px 0" }}>{book.author}</h4>
          <h5 style={{ fontSize: "0.8rem", margin: "5px 0" }}>${book.price}</h5>

          <button
            style={{
              backgroundColor: readBooks.find((rb) => rb.id === book.id) ? "#28a745" : "#6f42c1",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor:  "pointer",
              marginBottom: "8px",
            }}
            onClick={() => handleRead(book)}
          >
            {readBooks.find((rb) => rb.id === book.id && rb.read === true) ? "Already Read" : "Mark as Read"}
          </button>

          <button
            style={{
              backgroundColor: favorites.find((fav) => fav.id === book.id)
                ? "#28a745": "#007BFF",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => handleButtonClick(book)}
          >
            {favorites.find((fav) => fav.id === book.id)
              ? "Go to Favorites"
              : "Add to favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
