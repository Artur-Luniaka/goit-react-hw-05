import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieCast } from "../../assets/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieWithId, setMovieWithID] = useState(null);

  const fetchMovieCredits = async () => {
    try {
      const movieCast = await fetchMovieCast(movieId);
      setMovieWithID(movieCast);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!movieWithId ? (
        <Link
          to={`/${movieId}/cast`}
          onClick={(e) => {
            e.preventDefault();
            fetchMovieCredits();
          }}
        >
          Cast
        </Link>
      ) : (
        <ul>
          {movieWithId.cast.map(
            ({
              id,
              name,
              profile_path = `https://via.placeholder.com/200`,
              character,
            }) => (
              <li key={id}>
                <p>{name}</p>
                <img
                  src={"https://image.tmdb.org/t/p/w200" + profile_path}
                  alt={name}
                />
                <p>{character}</p>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
