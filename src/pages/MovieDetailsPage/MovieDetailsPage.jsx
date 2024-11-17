import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../assets/api";
import { useEffect, useState } from "react";
import BackLink from "../../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieWithId, setMovieWithID] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from || "/";

  useEffect(() => {
    const fetchMovieWithId = async () => {
      try {
        const movie = await fetchMovieById(movieId);
        setMovieWithID(movie);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovieWithId();
  }, [movieId]);

  return (
    <div>
      {!movieWithId ? (
        <p>Loading movie details...</p>
      ) : (
        <div>
          <BackLink to={backLink}>Go Back</BackLink>
          <h2>{movieWithId.title}</h2>
          <img
            src={
              movieWithId && movieWithId.backdrop_path
                ? "https://image.tmdb.org/t/p/w500" + movieWithId.backdrop_path
                : "https://via.placeholder.com/300"
            }
            alt={movieWithId.title}
          />
          <p>Overview: {movieWithId.overview}</p>
          <p>Genres:{movieWithId.genres.map((genre) => genre.name)}</p>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
