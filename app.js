const express = require("express");
const app = express();
var port = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.render("landingPage");
});

app.listen(port, function() {
  console.log("Live on port "+ port);
});
