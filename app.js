require('dotenv').config();
const API_KEY = process.env.API_KEY;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({  extended: true }));
app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.render("landingPage");
});

app.post("/candidates", function(req, res) {
  // console.log(req.body);
  // console.log(req.body.client);
  res.render("candidates", { clientPostcode: req.body.client });
});

app.listen(port, function() {
  console.log("Live on port " + port);
});

module.exports = app;
