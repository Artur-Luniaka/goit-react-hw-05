import { Link, useParams } from "react-router-dom";
import { fetchMovieById } from "../../assets/api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = fetchMovieById(id);

  return <Link to="/movies:movieId"></Link>;
};

export default MovieDetailsPage;
