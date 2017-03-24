console.log("HELLOOOO");

// var clickCount = 0;

// $("button").on("click", function() {
//   clickCount = clickCount + 1;
//   console.log(clickCount);
//   if (clickCount === 2) {
//     $("p.cool").text("button was clicked twice");
//   } else {
//     $("p.cool").text("This is some cool text!!!");
//   }
// });








$("button").on("click", function() { //When button is clicked
  var userInput = $("input").val(); //grab value of input
  $("h1").text(userInput); //put into value of 
});
