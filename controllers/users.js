const users = require("../data/users");

async function getAllUsers(pageSize, page) {
  return await users.getAllUsers(pageSize, page);
}

async function getUser(idUser) {
  return await users.getUser(idUser);
}

module.exports = {
  getAllUsers,
  getUser,
};
