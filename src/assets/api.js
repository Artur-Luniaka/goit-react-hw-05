import axios from "axios";
// const ACCESS_KEY = "e97e6b5e117e0da4316c8b18fef1fe6e";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTdlNmI1ZTExN2UwZGE0MzE2YzhiMThmZWYxZmU2ZSIsIm5iZiI6MTczMTQ4NjkxNS45NDI1MjE4LCJzdWIiOiI2NzM0NjMxMGM5NzI3ODFiOGQ3M2MzNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4bgpLqkkAVWr45jy7LvBSZTY0bg-DTxo9Pb4OKLLHbY";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchMovies = async () => {
  const response = await axios(`trending/movie/day`, options);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios(`/movie/${movieId}`, options);
  return response.data.results;
};
