import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetail = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies:movieId" element={<MovieDetail />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
