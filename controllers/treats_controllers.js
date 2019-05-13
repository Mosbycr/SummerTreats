var express = require("express");

var router = express.Router();

var treats = require("../models/treats.js");

router.get("/", function(req, res) {
  treats.selectAll(function(data) {
    var hbsObject = {
      treats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;