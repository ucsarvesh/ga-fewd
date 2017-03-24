//When .button is clicked
//grab value of #red
//grab value of #green
//grab value of #blue
//change bg color of #wrapper



$("#color-button").on("click", function() {
  var redInput = $("#red").val();
  var greenInput = $("#green").val();
  var blueInput = $("#green").val();
  var rgbVal = rgb(" + redInput + "," + greenInput + "," + blueInput + ")
  //$("#wrapper").css("background-color", "rgb(" + redInput + "," + greenInput + "," + blueInput + ")");
  $("#wrapper").css("background-color",rgbVal);
});

