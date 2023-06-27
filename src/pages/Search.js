import useMoive from "api/useMovie";
import Header from "components/Header";
import Loader from "components/Loader";
import Movie from "components/Movie";
import Styles from "styles/Home.module.css";
import React from "react";
import Footer from "components/Footer";

const Search = () => {
  const { movieData, loading, refetcher } = useMoive({ url: null });
  return (
    <>
      <Header search={true} refetcher={refetcher} />
      {!loading && movieData ? (
        <div className={Styles.movieContaiber}>
          {movieData.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              runtime={movie.runtime}
              year={movie.year}
            />
          ))}
        </div>
      ) : (
        <Loader type="search" />
      )}
      <Footer />
    </>
  );
};

export default Search;
