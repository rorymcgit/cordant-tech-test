$(document).ready(function() {
  $.getJSON("/data/locations.json", function(data) {
    $.each(data.Clients, function(key, value) {
      $("#dropDown").append($("<option></option>")
                    .attr("name", "client")
                    .val(value.name)
                    .html(value.name));
    });
  });
});
