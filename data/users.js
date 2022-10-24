const { ObjectID } = require("bson");
const conn = require("./conn");
const DATABASE = "sample_mflix";
const USERS = "users";

async function getAllUsers(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const users = await connectiondb
    .db(DATABASE)
    .collection(USERS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return users;
}

async function getUser(id) {
  console.log("DATA");
  console.log(id);
  const connectiondb = await conn.getConnection();
  const user = await connectiondb
    .db(DATABASE)
    .collection(USERS)
    .find({ _id: new ObjectID(`${id}`) })
    .toArray();
  console.log(user);
  return user;
}

module.exports = {
  getAllUsers,
  getUser,
};
