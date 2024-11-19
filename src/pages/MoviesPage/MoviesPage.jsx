import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../assets/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { MdContentPasteSearch } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GrNext } from "react-icons/gr";
import Loader from "../../components/Loader/Loader";

const initialValues = { query: "" };

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);

  const request = searchParams.get("query");
  const currentPage = searchParams.get("page");

  const handleSubmit = (values, actions) => {
    setQuery(values.query.toLowerCase().trim());
    actions.resetForm();
  };

  const handlePageNextBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage(page + 1);
  };

  const handlePageBackBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage(page - 1);
  };

  useEffect(() => {
    if (!query) return;
    const fetchSearch = async () => {
      try {
        setLoader(true);
        const { results, total_pages } = await fetchMovieSearch(query, page);
        setSearchMovies(results);
        setTotalPages(total_pages);
        setSearchParams(`query=${query}&page=${page}`);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };
    fetchSearch();
  }, [query, page, setSearchParams, searchParams]);

  useEffect(() => {
    if (request && currentPage) {
      setPage(Number(currentPage));
      setQuery(request);
    }
  }, [request, currentPage]);

  useEffect(() => {
    const handlePageTitle = () => {
      document.title = "Top Movies || Movies Page";
    };
    handlePageTitle();
  });

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            type="text"
            placeholder="Enter keyword to search..."
            name="query"
            className={s.input}
          />
          <button className={s.btn} type="submit">
            Search
            <MdContentPasteSearch />
          </button>
        </Form>
      </Formik>
      {loader && <Loader />}
      <MovieList movies={searchMovies} />
      {searchMovies.length > 0 ? (
        <div className={s.bottom_wrapper}>
          <p className={s.page}>
            Page: <span className={s.page_accent}>{page}</span> / {totalPages}
          </p>
          {page > 1 ? (
            <button className={s.btn} onClick={handlePageBackBtn}>
              <RiArrowGoBackFill /> Back
            </button>
          ) : (
            ""
          )}
          {page !== totalPages ? (
            <button className={s.btn} onClick={handlePageNextBtn}>
              Next <GrNext />
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MoviesPage;
