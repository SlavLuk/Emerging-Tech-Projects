$(function() {
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  $("#predict-button").click(async function(e) {
    e.preventDefault();

    //get image data from canvas
    var imageData = canvas.toDataURL();

    $.post("/predict", { image: imageData }, function(data) {
      console.log(data);
      $("#predict").text(data);
    });

    //$("#chart_box").attr("src", imageData);
  });

  $("#clear-button").click(async function() {
    context.clearRect(0, 0, 400, 400);
  });
});
