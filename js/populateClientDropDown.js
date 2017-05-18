$(document).ready(function() {
  $.getJSON("/data/locations.json", function(data) {
    // console.log(data);
    $.each(data.Clients, function(key, value) {
      $("#dropDown").append($('<option></option>').val(value.name).html(value.name));
    });
  });
});
