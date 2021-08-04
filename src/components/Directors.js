import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director=> 
        <div key={director.name}>
          Director: {director.name}
          <ul>Films Directed:</ul>
          {director.movies.map(movie=> 
            <li key={movie.index}>{movie}</li>)}
        </div>)}
    </div>
  )
}

export default Directors;
