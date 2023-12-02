import axios from "axios";
import { useEffect, useState } from "react";

function useMovieSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://www.omdbapi.com/",
      params: {
        apikey: "fd8de445",
        s: query,
        page: pageNumber,
      },
    })
      .then((res) => {
        if (res.data.Response === "False") {
          setError(true);
        }
        setMovies(res.data.Search);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [query, pageNumber]);

  return { loading, error, movies };
}

export default useMovieSearch;
