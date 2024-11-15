const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <a href={movie.id}>
              <h2>{movie.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
