const expect = require("chai").expect;
const getCandidatePostcodes = require("../js/getCandidatePostcodes");

describe("Get Candidate Postcodes", function() {
  it("accepts an array of objects, and returns a string of postcode properties from each object", function() {
    var testCandidates = [{postcode: "X001XX"},{postcode: "Y002YY"}];
    expect(getCandidatePostcodes(testCandidates)).to.eql("X001XX|Y002YY");
  });

});
