$(function() {
  var canvas = document.getElementById("canvas");

  $("#predict-button").click(function(e) {
    e.preventDefault();

    //get image data from canvas
    var imageData = canvas.toDataURL();

    $.post("/predict", { image: imageData }, function(data) {
      $("#predict").html(data);
    });
  });

  $("#clear-button").click(async function() {
    context.clearRect(0, 0, 400, 400);
  });
});
