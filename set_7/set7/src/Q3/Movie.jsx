/*

Create a React component that fetches a list of movies from an API endpoint
using useEffect hook and displays the title, year, and rating of each movie on the screen using
the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown
values - 2005 to 2010.

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
            { title: "The Dark Knight", year: 2008, rating: 9.0 },
            { title: "Inception", year: 2009, rating: 8.8 },
            { title: "Interstellar", year: 2010, rating: 8.6 },
            { title: "Tenet", year: 2009, rating: 7.5 },
            { title: "Real Steal", year: 2007, rating: 7.5 },
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
  const [year, setYear] = useState(""); // Initialize as an empty string for proper dropdown handling
  const [filter, setFilter] = useState(true);

  useEffect(() => {
    fakeFetch("https://example.com/api/movies").then((resp) => {
      setMovies(resp.data);
    });
  }, []);

  function handleChange(e) {
    setYear(e.target.value);
    setFilter(e.target.value === ""); // Set to true if no year is selected, otherwise false
  }

  return (
    <>
      {filter &&
        movies.map((movie) => (
          <div key={movie.title}> {/* Correct JSX comment syntax */}
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      {!filter &&
        movies
          .filter((movie) => movie.year == year) // Filter movies by selected year
          .map((movie) => (
            <div key={movie.title}> {/* Correct JSX comment syntax */}
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          ))}

      <label htmlFor="yearFilter">Filter by Year:</label> 
      <select id="yearFilter" value={year} onChange={handleChange}> {/* Tie label to dropdown */}
        <option value="">Select an option</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
    </>
  );
}

export default Movies;
