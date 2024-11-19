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

  useEffect(() => {
    const handlePageTitle = () => {
      document.title = "Top Movies || Home";
    };
    handlePageTitle();
  });

  return (
    <>
      <h1 className={s.title}>
        <span className={s.title_box}>
          <MdMovieFilter />
          Watch Top 20 films right now
          <MdMovieFilter />
        </span>
      </h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
