import React from "react";
import Styles from "styles/Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ id, image, title, rating, runtime, year, type }) => {
  return (
    <div
      className={Styles.movie}
      style={{ width: type === "small" ? 100 : null }}
    >
      <Link to={`/detail/${id}`}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={Styles.movieImage}
        >
          <div
            className={Styles.movieContent}
            style={{ display: type === "small" ? "none" : null }}
          >
            <div className={Styles.year}>{year}</div>
            <h2 className={Styles.title}>
              {title.length < 20 ? title : title.substring(0, 20) + "..."}
            </h2>
            <div className={Styles.rating}>{rating} / 10</div>
            {runtime !== 0 && (
              <div className={Styles.runtime}>Runtime : {runtime}m</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
