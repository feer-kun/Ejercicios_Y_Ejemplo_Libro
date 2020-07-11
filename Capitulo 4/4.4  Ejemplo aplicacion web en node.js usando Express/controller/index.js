//llamada a express
var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
  response.render("portada", {});
});

module.exports = router;
