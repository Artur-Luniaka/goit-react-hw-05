import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../assets/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      {!movieCast ? (
        <p>Loading cast information...</p>
      ) : (
        <ul>
          {movieCast.cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <p>{name}</p>
              <img
                src={
                  profile_path
                    ? "https://image.tmdb.org/t/p/w200" + profile_path
                    : "https://via.placeholder.com/200"
                }
                alt={name}
              />
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
