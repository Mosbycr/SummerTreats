const express = require("express");
const expressHbs = require("express-handlebars");
const routes = require("./controllers/treats_controllers.js");
const app = express();

const PORT = process.env.PORT || 3030;

app.engine("handlebars", expressHbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, ()=>{console.log("Server is listening on port: " + PORT)});