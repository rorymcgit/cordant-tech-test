require('dotenv').config();

const API_KEY = process.env.API_KEY,
      candidates = require("./data/candidates.json").Candidates,
      getCandidatePostcodes = require("./js/getCandidatePostcodes"),
      listAllCandidates = require("./js/listAllCandidates"),
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

// var body = "{'destination_addresses' : [ 'Curzon St, Birmingham B4 7XG, UK' ],'origin_addresses' : ['Rocky Ln, Birmingham B42 1QZ, UK','Rocky Ln, Birmingham B42 1QX, UK'],'rows' : [{'elements' : [{'distance' : {'text' : '4.3 mi','value' : 6968},'duration' : {'text' : '11 mins','value' : 689},'status' : 'OK'}]},{'elements' : [{'distance' : {'text' : '4.6 mi','value' : 7368},'duration' : {'text' : '12 mins','value' : 728},'status' : 'OK'}]}],'status' : 'OK'}";
// listAllCandidates(body);

app.post("/candidates", function(req, res) {
  // var apiUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + getCandidatePostcodes(candidates) + "&destinations=" + req.body.client.split(" ").join("") + "&key=" + API_KEY;
  var apiUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + "B421QZ|B421QX" + "&destinations=" + req.body.client.split(" ").join("") + "&key=" + API_KEY;
  // console.log(apiUrl);
  request(apiUrl, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
    listAllCandidates(body);
    res.render("candidates", { body: body, listAllCandidates: listAllCandidates });
  });
});

app.listen(port, function() {
  console.log("Live on port " + port);
});

module.exports = app;
