$("div.box").css("background-color","blue");

$("div.box").text("Lookie Lookie");

// $("div#box1").on("click",function() {
//   $("div#box1").css("height","500px");
//   $("div#box1").css("width","500px");
//   $("div#box2").css("height","200px");
//   $("div#box2").css("width","200px"); 
// })

// $("div#box2").on("click",function() {
//   $("div#box2").css("height","500px");
//   $("div#box2").css("width","500px");  
//   $("div#box1").css("height","200px");
//   $("div#box1").css("width","200px");  
// }) 

// var clickCount = 0;

// $("div#box1").on("click",function() {
//   clickCount = clickCount + 1;
//   if (clickCount === 1) {
//     $("div#box1").addClass("bigger");
//   } else {
//     $("div#box1").removeClass("bigger");
//     clickCount = 0;
//   }
// })

$("div#box1").on("click",function() {
  $("div#box1").toggleClass("bigger");
})