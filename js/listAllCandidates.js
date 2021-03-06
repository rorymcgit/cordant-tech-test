var candidates = require("../data/candidates.json");

function listAllCandidates(body) {
  var apiResponse, postcodes, origin_addresses;
  var allCandidates = candidates.Candidates;
  for (var i = 0; i < allCandidates.length; i++) {
    apiResponse = JSON.parse(body);
    postcodes = apiResponse.rows;
    origin_addresses = apiResponse.origin_addresses;
  }
  var distances = _buildDistancesAndAddresses(postcodes, origin_addresses);
  return _buildCandidatesDistances(distances, allCandidates);
}

function _buildDistancesAndAddresses(postcodes, origin_addresses) {
  var distances = [];
  for (var x = 0; x < postcodes.length && x < origin_addresses.length; x++) {
    distances.push([postcodes[x].elements[0].distance, origin_addresses[x]]);
  }
  return distances;
}

function _buildCandidatesDistances(distances, candidates) {
  var candidatesDistances = [];
  for (var y = 0; y < distances.length; y++) {
    if (distances[y][1].toLowerCase().includes(candidates[y].postcode.toLowerCase())) {
      candidatesDistances.push({
      name: candidates[y].name,
      distance: distances[y][0].text,
      distanceValue: distances[y][0].value
      });
    }
  }
  return candidatesDistances;
}

module.exports = listAllCandidates;
