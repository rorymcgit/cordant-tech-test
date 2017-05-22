function getCandidatePostcodes(allCandidates) {
  var candidatePostcodes = [];
  allCandidates.forEach(function(candidate) {
    candidatePostcodes.push(candidate.postcode.split(" ").join(""));
  });
  return candidatePostcodes.join("|");
}

module.exports = getCandidatePostcodes;
