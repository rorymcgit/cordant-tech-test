// $(document).ready(function(body) {
//   $.getJSON("/data/candidates.json", function(data) {
//     $.each(data.Candidates, function(key, value) {
//       console.log(body);
//       $("#candidates").append($("<li></li>").html(value.name + " " + value.postcode));
//     });
//   });
// });

var candidates = require("../data/candidates.json");

function listAllCandidates(body) {
  var apiResponse, postcodes, origin_addresses;
  // console.log(candidates.Candidates);
  for (var i = 0; i < candidates.Candidates.length; i++) {
    // console.log(candidates.Candidates[i].name);
    // console.log(candidates.Candidates[i].postcode);
    apiResponse = JSON.parse(body);
    postcodes = apiResponse.rows;
    origin_addresses = apiResponse.origin_addresses;
  }

  var distances = [];
  for (var x = 0; x < postcodes.length && x < origin_addresses.length; x++) {
    distances.push([postcodes[x].elements[0].distance, origin_addresses[x]]);
  }
  // console.log(distances);

  var candidatesDistances = [];
  for (var y = 0; y < distances.length; y++) {
    if (distances[y][1].includes(candidates.Candidates[y].postcode)) {
      // console.log(candidates.Candidates[y].name);
      // console.log(candidates.Candidates[y].postcode);
      candidatesDistances.push([candidates.Candidates[y].name, distances[y][0].text, distances[y][0].value]);
    }
  }
  console.log(candidatesDistances);
  return candidatesDistances;
}

module.exports = listAllCandidates;
