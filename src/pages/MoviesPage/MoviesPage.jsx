import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../assets/api";
import MovieList from "../../components/MovieList/MovieList";

const initialValues = { query: "" };

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = (values, actions) => {
    setQuery(values.query);
    actions.resetForm();
    console.log(values);
  };

  const handlePageNextBtn = () => {
    setPage(page + 1);
  };

  const handlePageBackBtn = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (!query) return;
    const fetchSearch = async () => {
      try {
        const { results, total_pages } = await fetchMovieSearch(query, page);
        setSearchMovies(results);
        setTotalPages(total_pages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearch();
  }, [query, page]);
  console.log(searchMovies);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            placeholder="Enter keyword to search..."
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MovieList movies={searchMovies} />
      {searchMovies.length > 0 ? (
        <div>
          <p>
            Page:{page} / {totalPages}
          </p>
          {page > 1 ? <button onClick={handlePageBackBtn}>Back</button> : ""}
          {page !== totalPages ? (
            <button onClick={handlePageNextBtn}>Next Page</button>
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
