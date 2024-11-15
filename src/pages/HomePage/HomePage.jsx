import { useEffect, useState } from "react";
import { fetchMovies } from "../../assets/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovies();
        setMovies(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
