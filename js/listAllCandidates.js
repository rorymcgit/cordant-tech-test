$(document).ready(function() {
  $.getJSON("/data/candidates.json", function(data) {
    $.each(data.Candidates, function(key, value) {
      console.log(value.postcode);
      $("#candidates").append($("<li></li>").html(value.name + " " + value.postcode));
    });
  });
});
