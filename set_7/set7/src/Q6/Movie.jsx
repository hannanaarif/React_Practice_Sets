/*
Create a React component that fetches a list of movies from an API endpoint
using useEffect hook and displays the title, year, and genre of each movie on the screen using
the useState hook. Add a dropdown which filters the movies by genre.
*/

import { useEffect, useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/movies") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              title: "The Godfather",
              year: 1972,
              genre: "Crime",
            },
            {
              title: "The Shawshank Redemption",
              year: 1994,
              genre: "Drama",
            },
            {
              title: "The Dark Knight",
              year: 2008,
              genre: "Action",
            },
            {
              title: "Forrest Gump",
              year: 1994,
              genre: "Comedy",
            },
            {
              title: "The Matrix",
              year: 1999,
              genre: "Science Fiction",
            },
            {
              title: "Jurassic Park",
              year: 1993,
              genre: "Science Fiction",
            },
            {
              title: "Star Wars: Episode IV - A New Hope",
              year: 1977,
              genre: "Science Fiction",
            },
            {
              title: "The Terminator",
              year: 1984,
              genre: "Action",
            },
            {
              title: "Die Hard",
              year: 1988,
              genre: "Action",
            },
            {
              title: "Pulp Fiction",
              year: 1994,
              genre: "Crime",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Movies list not found.",
        });
      }
    }, 2000);
  });
};

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    fakeFetch("https://example.com/api/movies").then((resp) => {
      setMovies(resp.data);
    });
  }, []);

  const filteredMovies =
    genre === "All" ? movies : movies.filter((movie) => movie.genre === genre);

  return (
    <>
      <h1>Movies</h1>
      <label>Filter By Genre: </label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Crime">Crime</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Drama">Drama</option>
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <ul key={index}>
            <strong>{movie.title}</strong> ({movie.year}) - {movie.genre}
          </ul>
        ))}
      </ul>
    </>
  );
}

export default Movies;
