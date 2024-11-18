import { useEffect, useState } from "react";
import { fetchMovies } from "../../assets/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import { MdMovieFilter } from "react-icons/md";

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
      <h1 className={s.title}>
        <MdMovieFilter />
        Watch Top 20 films right now
        <MdMovieFilter />
      </h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
