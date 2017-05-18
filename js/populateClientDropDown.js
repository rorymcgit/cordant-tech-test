$(document).ready(function() {
  $.getJSON("/data/locations.json", function(data) {
    console.log(data);
  });
});
