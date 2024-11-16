import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../assets/api";
import { useEffect, useState } from "react";
import BackLink from "../../components/BackLink/BackLink";
import MovieCast from "../../components/MovieCast/MovieCast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieWithId, setMovieWithID] = useState(null);
  const location = useLocation();
  const backLink = location.state ?? "/";

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
          <Link to={`/movies/${movieWithId.id}`} />
          <h2>{movieWithId.title}</h2>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movieWithId.backdrop_path}
            alt={movieWithId.title}
          />
          <p>Overview: {movieWithId.overview}</p>
          <p>Genres:{movieWithId.genres.map((genre) => genre.name)}</p>
          <MovieCast />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
