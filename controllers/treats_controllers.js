const express = require("express");
const router = express.Router();
//grab treats.js
const treats = require("../models/treats.js");

//route collects all information in treats table and places it where stated in index.handlebars
router.get("/", (req, res)=>{
  treats.selectAll((data)=>{
    let hbsObject = {treats: data};
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// route that grabs the id of the treat devoured and updates devoured col to true
router.put("/api/treats/:id", (req, res)=>{
  let condition = "id = " + req.params.id;
  // connected to devoured: true in summerTreats.js
  treats.updateOne(
    {devoured: req.body.devoured},
    condition,
    (result)=>{
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {res.status(200).end();}
    }
  );
});

//takes information from textbox and creates new treat in database with devoured default false
router.post("/api/treats",(req, res)=>{
  treats.insertOne(
    ["treat_name"],
    [req.body.treat_name],
    (result)=>{res.json({ id: result.insertID });}
  );
});

module.exports = router;
