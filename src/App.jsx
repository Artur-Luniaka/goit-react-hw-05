import { lazy, useEffect, useState } from "react";
import { fetchMovies } from "./assets/api";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => setMovies(fetchMovies()), []);
  console.log(movies);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
