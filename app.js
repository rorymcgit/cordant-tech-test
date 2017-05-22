require('dotenv').config();
const API_KEY = process.env.API_KEY,
      candidates = require("./data/candidates.json").Candidates,
      getCandidatePostcodes = require("./js/getCandidatePostcodes"),
      bodyParser = require("body-parser"),
      request = require("request"),
      fs = require("fs"),
      express = require("express"),
      app = express();

var port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({  extended: true }));
app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.render("landingPage");
});

app.post("/candidates", function(req, res) {
  // apiUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + getCandidatePostcodes(candidates) + "&destinations=" + req.body.client.split(" ").join("") + "&key=" + API_KEY;
  var apiUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + "B421QZ|B421QX" + "&destinations=" + req.body.client.split(" ").join("") + "&key=" + API_KEY;
  // console.log(apiUrl);
  request(apiUrl, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body); // Print the HTML
    res.render("candidates", { body: body });
  });
});

app.listen(port, function() {
  console.log("Live on port " + port);
});

module.exports = app;
