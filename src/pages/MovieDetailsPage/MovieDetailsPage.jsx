import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../assets/api";
import { useEffect, useState } from "react";
import BackLink from "../../components/BackLink/BackLink";
import s from "./MovieDetailsPage.module.css";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";

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

  useEffect(() => {
    const handlePageTitle = () => {
      document.title = "Movie Details";
    };
    handlePageTitle();
  });

  return (
    <div>
      {!movieWithId ? (
        <p>Loading movie details...</p>
      ) : (
        <div>
          <BackLink to={backLink}>Go Back</BackLink>
          <h2 className={s.title}>{movieWithId.title}</h2>
          <img
            src={
              movieWithId && movieWithId.backdrop_path
                ? "https://image.tmdb.org/t/p/w500" + movieWithId.backdrop_path
                : "https://via.placeholder.com/700x400"
            }
            alt={movieWithId.title}
            className={s.img}
          />
          <p className={s.page}>
            <span className={s.page_accent}>Overview:</span>{" "}
            {movieWithId.overview}
          </p>
          <p className={s.page}>
            <span className={s.page_accent}>Genres:</span>{" "}
            {movieWithId.genres.map((genre) => genre.name + " / ")}
          </p>
          <span className={s.link_btn_box}>
            <Link
              className={s.link_btn}
              to="cast"
              state={{ from: location.state?.from }}
            >
              Cast
              <RiTeamLine />
            </Link>
            <Link
              className={s.link_btn}
              to="reviews"
              state={{ from: location.state?.from }}
            >
              Reviews
              <MdOutlineReviews />
            </Link>
          </span>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
