$(document).ready(function() {
  $.getJSON("/data/candidates.json", function(data) {
    var candidatePostcodes = [];
    $.each(data.Candidates, function(key, value) {
      candidatePostcodes.push(value.postcode.split(' ').join(''));
      $("#candidates").append($("<li></li>").html(value.name + " " + value.postcode));
    });
    console.log(candidatePostcodes.join("|"));
  });
});
