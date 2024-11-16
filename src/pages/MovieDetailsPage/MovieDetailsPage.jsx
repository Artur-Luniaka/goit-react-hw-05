import { Link, useParams } from "react-router-dom";
import { fetchMovieById } from "../../assets/api";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieWithId, setMovieWithID] = useState(null);

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
          <h2>{movieWithId.title}</h2>
          <Link to={`/movies/${movieWithId.id}`} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
