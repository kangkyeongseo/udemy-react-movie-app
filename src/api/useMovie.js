import { useEffect, useState } from "react";

const useMoive = ({ url = null, type = "movies" }) => {
  const BASE_URL = "https://yts.mx/api/v2/";
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const data = await (await fetch(BASE_URL + url)).json();
    console.log(data);
    if (type === "movies") {
      setMovieData(data.data.movies);
    } else if (type === "detail") {
      setMovieData(data.data.movie);
    }
  };

  const refetcher = async (refetch) => {
    if (url && loading) return;
    if (url) {
      getMovie();
    } else {
      const data = await (
        await fetch(BASE_URL + `list_movies.json?query_term=${refetch}`)
      ).json();
      setMovieData(data.data.movies);
    }
  };

  useEffect(() => {
    if (movieData) setLoading(false);
  }, [movieData]);

  useEffect(() => {
    if (url) {
      getMovie();
    }
  }, [url]);

  return { movieData, loading, refetcher };
};

export default useMoive;
