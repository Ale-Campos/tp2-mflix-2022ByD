const movies = require("../data/movies");

async function getAllMovies(pageSize, page) {
  return movies.getAllMovies(pageSize, page);
}

async function getMovie(id) {
  return await movies.getMovie(id);
}

async function getWinnerMovies() {
  return await movies.getWinnerMovies();
}

async function moviesByLanguage(pageSize, page, language) {
  return await movies.moviesByLanguage(pageSize, page, language);
}

async function rankTomatoes() {
  return await movies.rankTomatoes();
}

module.exports = {
  getAllMovies,
  getMovie,
  getWinnerMovies,
  moviesByLanguage,
  rankTomatoes,
};
