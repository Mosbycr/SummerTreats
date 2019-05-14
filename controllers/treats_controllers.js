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

router.put("/api/treats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("current id: " + condition);

  treats.updateOne(
    {
      devoured: req.body.devoured //not sure if this is correct yet
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
