// When button clicked
// grab value from input
// convert in
// return new value into DOM
// formula: Multiply by 9, then divide by 5, then add 32



// $("button").on("click",function() {
//   var celsius = $("input").val() * 1.8 + 32;
//   $("#converted").text(celsius);
// })

$("button").on("click",function() {
  var celsius = $("input").val();
  var fahrenheit = celsius * 1.8 + 32;
  $("#converted").text(fahrenheit);
})