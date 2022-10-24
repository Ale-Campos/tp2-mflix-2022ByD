const comments = require("../data/comments");
const users = require("./../controllers/users");
const movies = require("../controllers/movies");
async function getAllComments(pageSize, page) {
  return await comments.getAllComments(pageSize, page);
}

async function getCommentsByUserId(userId) {
  const user = await users.getUser(userId);
  console.log("COMMENTS CONTROLLERS");
  console.log(user);
  let userComments = await comments.getCommentsByUserId(user[0].email);

  let arrayNuevo = [];

  await Promise.all(
    userComments.map(async (item) => {
      const movie = await movies.getMovie(item.movie_id);

      if (movie[0]) {
        await agregar(movie[0], item, arrayNuevo);
      }
    })
  );
  console.log("USERCOMMENTS");
  console.log(arrayNuevo);
  return arrayNuevo;
}

async function agregar(movie, item, array) {
  const title = movie.title;
  const poster = movie.poster;
  const commentUser = {
    text: item.text,
    movie_title: title,
    movie_poster: poster,
  };

  array.push(commentUser);
  return array;
}

module.exports = {
  getAllComments,
  getCommentsByUserId,
};
