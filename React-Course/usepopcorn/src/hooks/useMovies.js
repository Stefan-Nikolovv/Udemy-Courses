import { useEffect, useState } from "react";
const KEY = "e4812472";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setisLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("Someting went wrong with movies");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found!");
          }
          console.log(data);
          setMovies(data.Search);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.log(error.message);
            setError(error.message);
          }
        } finally {
          setisLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }
      //handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query, callback]
  );
  return {
    movies,
    isLoading,
    error,
  };
}
