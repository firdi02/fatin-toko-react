var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    status: "OK",
    messages: "Service is running",
  });
});

module.exports = router;
