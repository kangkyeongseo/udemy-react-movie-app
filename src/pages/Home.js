import React from "react";
import useMoive from "api/useMovie";
import Header from "components/Header";
import Movie from "components/Movie";
import Styles from "styles/Home.module.css";
import Loader from "components/Loader";
import Footer from "components/Footer";

const Home = () => {
  const { movieData, loading } = useMoive({
    url: "list_movies.json?minimum_rating=8&limit=20&sort_by=like_count",
  });
  const { movieData: ratingData, loading: ratingLoading } = useMoive({
    url: "list_movies.json?minimum_rating=8&limit=10&sort_by=rating",
  });
  const { movieData: yearData, loading: yearLoading } = useMoive({
    url: "list_movies.json?minimum_rating=8&limit=10&sort_by=year",
  });
  return (
    <>
      <Header />
      <div className={Styles.home}>
        {loading ? (
          <Loader />
        ) : (
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
        )}
        <div>
          <div className={Styles.movieSectionTitle}>Rating</div>
          {ratingLoading ? null : (
            <div className={Styles.movieSection}>
              {ratingData.map((movie) => (
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
          )}
        </div>
        <div>
          <div className={Styles.movieSectionTitle}>Latest</div>
          {yearLoading ? null : (
            <div className={Styles.movieSection}>
              {yearData.map((movie) => (
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
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
