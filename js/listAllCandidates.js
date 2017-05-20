$(document).ready(function() {
  $.getJSON("/data/candidates.json", function(data) {
    $.each(data.Candidates, function(key, value) {
      $("#candidates").append($("<li></li>").html(value.name + " " + value.postcode));
    });
  });
});
