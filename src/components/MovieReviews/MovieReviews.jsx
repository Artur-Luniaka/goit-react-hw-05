import { useEffect, useState } from "react";
import { fetchMovieReview } from "../../assets/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieCastReview] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await fetchMovieReview(movieId);
        setMovieCastReview(reviews);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {!movieReview || movieReview.results.length === 0 ? (
        <p className={s.info}>Reviews is not found...😥</p>
      ) : (
        <ul className={s.wrapper}>
          {movieReview.results.map(({ author, content, id }) => (
            <li className={s.li} key={id}>
              <h4 className={s.author}>Author: {author}</h4>
              <p className={s.comment}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
