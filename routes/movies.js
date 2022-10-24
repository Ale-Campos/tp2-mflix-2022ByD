const { json } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/movies");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllMovies(pageSize, page));
});

router.get("/getMovie/:id", async (req, res) => {
  console.log("ROUTES");
  const idMovie = req.params.id;
  console.log(idMovie);
  res.json(await controller.getMovie(idMovie));
});

router.get("/winnerMovies", async (req, res) => {
  console.log("---");
  const movies = await controller.getWinnerMovies();

  res.json(movies);
});

router.get("/moviesByLanguage", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0; // ..? si existe ....  : si no 0
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const language = req.query.language;
  res.json(await controller.moviesByLanguage(pageSize, page, language));
});

router.get("/rankTomatoes", async (req, res) => {
  res.json(await controller.rankTomatoes());
});
module.exports = router;
