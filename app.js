const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set("view engine", "ejs");

app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.render("landingPage");
});

app.get("/candidates", function(req, res) {
  res.render("candidates");
});

app.listen(port, function() {
  console.log("Live on port " + port);
});

module.exports = app;
