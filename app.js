require('dotenv').config();
const API_KEY = process.env.API_KEY;

const candidates = require("./data/candidates.json").Candidates;
// console.log(candidates);
const getCandidatePostcodes = require("./js/getCandidatePostcodes");

const https = require('https');
const fs = require('fs');
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
  // apiUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + getCandidatePostcodes(candidates) + "&destinations=" + req.body.client.split(" ").join("") + "&key=" + API_KEY;
  apiUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + "B421QZ|B421QX" + "&destinations=" + req.body.client.split(" ").join("") + "&key=" + API_KEY;
  // console.log(apiUrl);
  https.get(apiUrl, function(res) {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
    res.on("data", function(d) {
      apiResponse = d.toString();
      // WRITE CALLBACK HERE TO PARSE API RESPONSE
    });
    }).on('error', function(e) {
    console.error(e);
  });
  // console.log(req.body);
  res.render("candidates", { clientPostcode: req.body.client });
});

app.listen(port, function() {
  console.log("Live on port " + port);
});

module.exports = app;
