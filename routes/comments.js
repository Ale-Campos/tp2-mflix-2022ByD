var express = require("express");
var router = express.Router();
const controller = require("../controllers/comments");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getAllComments(pageSize, page));
});

router.get("/getComments/:id", async (req, res) => {
  const idUsuario = req.params.id;
  console.log(idUsuario);
  res.json(await controller.getCommentsByUserId(idUsuario));
});
module.exports = router;
