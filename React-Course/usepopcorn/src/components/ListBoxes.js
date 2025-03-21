import { useState } from "react";
import Movie from "./Movie";

export default function ListBoxes({ tempMovieData }) {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
