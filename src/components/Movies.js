import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=> 
      <div key={movie.title}>
        <p>Title: {movie.title}</p>
        <p>Run Time: {movie.time} minutes</p>
        <ul>Genre:
          {movie.genres.map(genre=> <li key={genre.index}>{genre}</li>)}
        </ul>
      </div>)}
    </div>
  )
}

export default Movies;
