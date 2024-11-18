import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../assets/api";
import s from "./MovieCast.module.css";

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
      {!movieCast || movieCast.cast.length === 0 ? (
        <p className={s.info}>Actors is not found...😥</p>
      ) : (
        <ul className={s.wrapper}>
          {movieCast.cast.map(({ id, name, profile_path, character }) => (
            <li className={s.li} key={id}>
              <img
                src={
                  profile_path
                    ? "https://image.tmdb.org/t/p/w200" + profile_path
                    : "https://via.placeholder.com/200x300"
                }
                alt={name}
                className={s.img}
              />
              <span className={s.data_box}>
                <p className={s.data}>{name}</p>
                <p className={s.data}>{character}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
