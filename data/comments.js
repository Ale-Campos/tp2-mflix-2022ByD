const conn = require("./conn");
const DATABASE = "sample_mflix";
const COMMENTS = "comments";

async function getAllComments(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const comments = await connectiondb
    .db(DATABASE)
    .collection(COMMENTS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return comments;
}

async function getCommentsByUserId(email) {
  const connectiondb = await conn.getConnection();
  const comments = await connectiondb
    .db(DATABASE)
    .collection(COMMENTS)
    .find({ email: email })
    .toArray();

  return comments;
}

module.exports = {
  getAllComments,
  getCommentsByUserId,
};
