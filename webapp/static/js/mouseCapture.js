//Adapted from : https://lamberta.github.io/html5-animation/

window.onload = function() {
  //set up canvas
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  context.strokeStyle = "white";
  context.lineJoin = "round";
  context.lineWidth = 10;
  canvas.style.backgroundColor = "black";

  mouse = captureMouse(canvas);

  canvas.addEventListener(
    "mousedown",
    function() {
      context.beginPath();
      context.moveTo(mouse.x, mouse.y);
      canvas.addEventListener("mousemove", onMouseMove, false);
    },
    false
  );

  canvas.addEventListener(
    "mouseup",
    function() {
      canvas.removeEventListener("mousemove", onMouseMove, false);
    },
    false
  );

  function onMouseMove() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }

  $("#clear-button").click(async function() {
    context.clearRect(0, 0, 400, 400);

    $(".prediction-text").empty();
    $("#result_box").addClass("d-none");
  });
};

//set up mouse coordinates
captureMouse = function(element) {
  var mouse = { x: 0, y: 0, event: null },
    body_scrollLeft = document.body.scrollLeft,
    element_scrollLeft = document.documentElement.scrollLeft,
    body_scrollTop = document.body.scrollTop,
    element_scrollTop = document.documentElement.scrollTop,
    offsetLeft = element.offsetLeft,
    offsetTop = element.offsetTop;

  element.addEventListener(
    "mousemove",
    function(event) {
      var x, y;

      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY;
      } else {
        x = event.clientX + body_scrollLeft + element_scrollLeft;
        y = event.clientY + body_scrollTop + element_scrollTop;
      }
      x -= offsetLeft;
      y -= offsetTop;

      mouse.x = x;
      mouse.y = y;
      mouse.event = event;
    },
    false
  );

  return mouse;
};
