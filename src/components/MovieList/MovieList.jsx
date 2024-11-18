import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={s.wrapper}>
        {movies.map((movie) => (
          <li className={s.li} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                    : "https://via.placeholder.com/300"
                }
                alt={movie.title}
                className={s.img}
              />
              <h2 className={s.title}>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
