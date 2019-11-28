$(function() {
  //get a refrence to canvas
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //click event on predict button
  $("#predict-button").click(function(e) {
    //do not submit as default submition
    e.preventDefault();

    //get image data from canvas
    var imageData = canvas.toDataURL();

    //send encoded 64 format data as a string to server app
    $.post("/predict", { image: imageData }, function(data) {
      //find ID predict and write received data
      $("#predict")
        .html(data)
        .css({
          "font-size": 100,
          "align-items": "center"
        });
    });
  });

  //clear canvas context
  $("#clear-button").click(function() {
    ctx.clearRect(0, 0, 400, 400);
  });
});
