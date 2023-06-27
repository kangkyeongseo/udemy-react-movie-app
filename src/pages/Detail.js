import React, { useEffect } from "react";
import useMoive from "api/useMovie";
import Loader from "components/Loader";
import Movie from "components/Movie";
import Styles from "styles/Detail.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Actor from "components/Actor";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { movieData, loading, refetcher } = useMoive({
    url: `movie_details.json?movie_id=${id}&with_cast=true`,
    type: "detail",
  });

  const {
    movieData: relatedMovie,
    loading: relatedLoding,
    refetcher: relatedRefetcher,
  } = useMoive({
    url: `movie_suggestions.json?movie_id=${id}`,
  });

  useEffect(() => {
    refetcher(id);
    relatedRefetcher(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={Styles.detail}>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${movieData.background_image})`,
            }}
            className={Styles.detailBackground}
          >
            <div className={Styles.detailHeader}>
              <button onClick={() => navigate(-1)}>〈</button>
              <button onClick={() => navigate("/")}>𝖷</button>
            </div>
            <div className={Styles.detailContainer}>
              <img
                src={movieData.large_cover_image}
                className={Styles.detailProfileImg}
              />
              <div className={Styles.detailProfile}>
                <div className={Styles.detailTitle}>
                  <div className={Styles.detailYear}>{movieData.year}</div>
                  <h1>{movieData.title}</h1>
                </div>
                <div className={Styles.detailRating}>
                  {movieData.rating} / 10
                </div>
                <ul className={Styles.detailGenre}>
                  {movieData.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
                <div className={Styles.detailRuntime}>
                  {movieData.runtime !== 0
                    ? `Runtime : ${movieData.runtime}m`
                    : null}
                </div>
                <div className={Styles.detailDescription}>
                  {movieData.description_intro.length > 500
                    ? movieData.description_intro.substring(0, 500) + "..."
                    : movieData.description_intro}
                </div>
                {movieData.cast ? (
                  <>
                    <div className={Styles.detailActorTitle}>Actor</div>
                    <div className={Styles.detailActorList}>
                      {movieData.cast.map((cast) => (
                        <Actor
                          key={cast.imdb_code}
                          img={cast.url_small_image}
                          name={cast.name}
                          character={cast.character_name}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <div>
                {relatedLoding ? null : (
                  <div className={Styles.related}>
                    <div className={Styles.relatedTitle}>Related Movie</div>
                    <ul className={Styles.relatedList}>
                      {relatedMovie.map((movie) => (
                        <Movie
                          key={movie.id}
                          id={movie.id}
                          image={movie.medium_cover_image}
                          title={movie.title}
                          rating={movie.rating}
                          runtime={movie.runtime}
                          year={movie.year}
                          type="small"
                        />
                      ))}
                    </ul>
                  </div>
                )}
                <div className={Styles.detailLink}>
                  <div className={Styles.detailLinkTitle}>Link</div>
                  <div className={Styles.detailLinkList}>
                    <Link
                      to={`https://www.youtube.com/embed/${movieData.yt_trailer_code}?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3`}
                    >
                      YOUTUBE LINK
                    </Link>
                    <Link to={movieData.url}>MOVIE LINK</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
