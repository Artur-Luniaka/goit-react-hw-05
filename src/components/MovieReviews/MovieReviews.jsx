import { useEffect, useState } from "react";
import { fetchMovieReview } from "../../assets/api";
import { useParams } from "react-router-dom";

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
      {!movieReview ? (
        <p>Loading review information...</p>
      ) : (
        <ul>
          {movieReview.results.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
