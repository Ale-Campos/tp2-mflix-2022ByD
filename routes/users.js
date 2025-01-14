var express = require("express");
var router = express.Router();
const controller = require("../controllers/users");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getAllUsers(pageSize, page));
});
router.get("/getUser/:id", async (req, res) => {
  const idUsuario = req.params.id;
  console.log(idUsuario);
  res.json(await controller.getUser(idUsuario));
});

module.exports = router;
