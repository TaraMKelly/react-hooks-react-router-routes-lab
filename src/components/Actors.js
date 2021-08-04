import React from "react";
import { actors } from "../data";

function Actors() {
  console.log({actors})
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor=>
        <div key={actor.name}>
          Actor: {actor.name}
          <ul>Starred In:</ul>
          {actor.movies.map(movie=><li key={movie.index}>{movie}</li>)}
        </div>)}
    </div>
  )
}

export default Actors;
