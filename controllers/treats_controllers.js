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

router.post("/api/treats", function(req, res) {
  treats.insertOne(
    ["treat_name", "devoured"],
    [req.body.treat_name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertID });
    }
  );
});

router.put("/api/treats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("current id: " + condition);

  treats.updateOne(
    {
      devoured: req.body.devoured // connected to devoured: true in summerTreats.js
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});



module.exports = router;
