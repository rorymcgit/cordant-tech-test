const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  // res.render("landingPage");
  res.send("Hello world");
});


app.listen(3000, function() {
  console.log("Live on port 3000");
})
